// Turns the raw page data from office-pdf-extract into a document structure:
// lines → paragraphs (with alignment, indents, spacing, lists, headings),
// ruled and unruled tables, multi-column regions and figures, in reading order.
// Used by PDF → Word (full structure), PDF → Excel (rows/tables) and
// PDF → PowerPoint (paragraph boxes).
import type { Box, Fill, ImageBox, PageData, PathBox, Rule, Run } from './office-pdf-extract';

export interface Line {
  runs: Run[];
  x0: number;
  x1: number;
  base: number;
  top: number;
  bottom: number;
  size: number;
}

/** A horizontal row of text on the page, possibly split in several segments by large gaps. */
export interface Row {
  segs: Line[];
  base: number;
  top: number;
  bottom: number;
  size: number;
}

export type Align = 'left' | 'center' | 'right' | 'justify';

export interface ParaBlock {
  kind: 'para';
  top: number;
  bottom: number;
  x0: number;
  x1: number;
  lines: Line[];
  align: Align;
  indent: number; // left indent from flow left (pt)
  /** Left edge of the flow the indent is measured from. */
  flowLeft: number;
  firstLine: number; // first line offset relative to indent (pt, negative = hanging)
  size: number;
  pitch: number; // baseline-to-baseline distance (0 = single line)
  spaceBefore: number;
  heading?: number;
  /** Tab-separated segments laid out on a single line (positions from flow left). */
  tabs?: { pos: number; align: 'left' | 'right' }[];
  list?: boolean;
  /** Separator line drawn under / over the paragraph. */
  borderBottom?: { w: number; color: string; space: number };
  borderTop?: { w: number; color: string; space: number };
}

export interface CellBlock {
  r: number;
  c: number;
  rowSpan: number;
  colSpan: number;
  blocks: Block[];
  fill?: string;
  vAlign: 'top' | 'center' | 'bottom';
  borders?: { top: CellBorder | null; bottom: CellBorder | null; left: CellBorder | null; right: CellBorder | null };
}

export interface CellBorder { w: number; color: string }

export interface TableBlock {
  kind: 'table';
  top: number;
  bottom: number;
  x0: number;
  x1: number;
  cols: number[]; // column boundaries (n+1)
  rowsY: number[]; // row boundaries (m+1)
  cells: CellBlock[];
  ruled: boolean;
  borderColor: string;
  borderWidth: number;
  spaceBefore: number;
  /** Horizontal rules for unruled tables (row index of the boundary). */
  hRules?: number[];
  /** Text flows beside the table: position it absolutely on the page. */
  float?: boolean;
}

export interface ImageBlock {
  kind: 'image';
  top: number;
  bottom: number;
  x0: number;
  x1: number;
  img: ImageBox | null;
  /** Region of the page to render instead (vector figure). */
  region?: Box;
  spaceBefore: number;
  floating?: boolean;
  behind?: boolean;
}

export interface ColumnsBlock {
  kind: 'columns';
  top: number;
  bottom: number;
  x0: number;
  x1: number;
  cols: { x0: number; x1: number; blocks: Block[] }[];
  spaceBefore: number;
}

export type Block = ParaBlock | TableBlock | ImageBlock | ColumnsBlock;

export interface PageLayout {
  width: number;
  height: number;
  left: number;
  right: number;
  top: number;
  bottom: number;
  blocks: Block[];
  floats: ImageBlock[];
  header: Block[];
  footer: Block[];
}

// ───────────── helpers ─────────────
const median = (a: number[]) => {
  if (!a.length) return 0;
  const s = [...a].sort((x, y) => x - y);
  return s[Math.floor(s.length / 2)];
};
const isWs = (s: string) => !s.trim();
const BULLET_RE = /^\s*([•●▪■◦○◆◇►▸‣⁃∙·•●▪■–—\-*]|\(?\d{1,3}[.)]|\(?[a-zA-Z][.)]|\(?[ivxIVX]{1,4}[.)])(\s|$)/;
const BULLET_CHAR_RE = /^[•●▪■◦○◆◇►▸‣⁃∙·•●▪■–—\-*]$/;
export const CJK_RE = /[⺀-鿿가-힯豈-﫿＀-￯　-〿]/;

export function lineText(l: Line): string {
  return l.runs.map((r) => r.str).join('');
}

function makeLine(runs: Run[]): Line {
  let x0 = Infinity, x1 = -Infinity, top = Infinity, bottom = -Infinity;
  const sizes: number[] = [];
  let baseSum = 0, wSum = 0;
  for (const r of runs) {
    x0 = Math.min(x0, r.x0); x1 = Math.max(x1, r.x1);
    top = Math.min(top, r.base - r.size * 0.8); bottom = Math.max(bottom, r.base + r.size * 0.22);
    if (!isWs(r.str)) for (let i = 0; i < Math.min(r.str.length, 50); i++) sizes.push(r.size);
    if (!r.script) { const w = Math.max(1, r.str.length); baseSum += r.base * w; wSum += w; }
  }
  const size = median(sizes) || runs[0]?.size || 10;
  return { runs, x0, x1, top, bottom, base: wSum ? baseSum / wSum : runs[0].base, size };
}

/**
 * pdf.js can merge glyphs of one font into a single item even when glyphs of
 * another font (e.g. punctuation from a fallback font) sit between them. Split
 * such items at the proportional character position so the text reads in order.
 */
function interleave(runs: Run[]): Run[] {
  let rs = [...runs].sort((a, b) => a.x0 - b.x0);
  const ink = rs.filter((r) => !isWs(r.str));
  // whitespace items spanning over real text are positioning artefacts
  rs = rs.filter((r) => !isWs(r.str) || !ink.some((k) => Math.min(k.x1, r.x1) - Math.max(k.x0, r.x0) > (r.x1 - r.x0) * 0.5 && r.x1 - r.x0 > r.size * 0.6));
  for (let guard = 0; guard < 50; guard++) {
    let changed = false;
    for (const a of rs) {
      if (isWs(a.str) || a.str.length < 2) continue;
      const inner = rs.find((b) => b !== a && !isWs(b.str) && b.x0 > a.x0 + 0.5 && b.x1 < a.x1 - 0.5 && b.str.length < a.str.length && Math.abs(b.base - a.base) < a.size * 0.5);
      if (!inner) continue;
      const k = Math.floor(((inner.x0 - a.x0) / (a.x1 - a.x0)) * a.str.length + 0.15);
      if (k <= 0 || k >= a.str.length) continue;
      const xm = a.x0 + ((a.x1 - a.x0) * k) / a.str.length;
      const left: Run = { ...a, str: a.str.slice(0, k), x1: Math.min(xm, inner.x0) };
      const right: Run = { ...a, str: a.str.slice(k), x0: Math.max(xm, inner.x1) };
      rs.splice(rs.indexOf(a), 1, left, right);
      changed = true;
      break;
    }
    if (!changed) break;
  }
  return rs.sort((a, b) => a.x0 - b.x0);
}

/** Sort runs into rows by baseline, attach super/subscripts, dedupe fake-bold doubles. */
export function buildRows(runs: Run[], splitGap = 1.6): Row[] {
  const rs = runs.filter((r) => r.str.length).sort((a, b) => a.base - b.base || a.x0 - b.x0);
  for (const r of rs) r.script = undefined;
  const groups: { base: number; size: number; runs: Run[] }[] = [];
  for (const r of rs) {
    let g = groups.length ? groups[groups.length - 1] : null;
    // look back a few rows (runs of different sizes can interleave)
    let target: typeof g = null;
    for (let k = groups.length - 1; k >= Math.max(0, groups.length - 4); k--) {
      g = groups[k];
      const tol = Math.max(1, Math.min(g.size, r.size) * 0.3);
      if (Math.abs(g.base - r.base) <= tol) { target = g; break; }
    }
    if (target) {
      target.runs.push(r);
      if (!isWs(r.str) && r.size > target.size) target.size = r.size;
    } else groups.push({ base: r.base, size: isWs(r.str) ? 0 : r.size, runs: [r] });
  }
  // Superscript / subscript attachment: small-font runs sitting next to bigger text of a neighbouring line.
  for (let i = 0; i < groups.length; i++) {
    const g = groups[i];
    if (!g.runs.length || g.runs.every((r) => isWs(r.str))) continue;
    const keep: Run[] = [];
    for (const r of g.runs) {
      let attached = false;
      if (!isWs(r.str) && !r.script && r.x1 - r.x0 < r.size * 8) {
        for (const k of [i - 1, i + 1, i - 2, i + 2]) {
          const n = groups[k];
          if (!n || !n.runs.length) continue;
          // the neighbour's text right next to this run (rows may span several columns)
          const touching = n.runs.filter((t) => !isWs(t.str) && r.x0 <= t.x1 + t.size * 0.6 && r.x1 >= t.x0 - t.size * 0.6);
          if (!touching.length) continue;
          const local = Math.max(...touching.map((t) => t.size));
          if (r.size > local * 0.85) continue;
          const nb = touching.find((t) => t.size === local)!.base;
          const dy = r.base - nb;
          if (dy < -local * 0.75 || dy > local * 0.45 || Math.abs(dy) < 0.5) continue;
          r.script = dy < 0 ? 1 : -1;
          n.runs.push(r);
          attached = true;
          break;
        }
      }
      if (!attached) keep.push(r);
    }
    g.runs = keep.some((r) => !isWs(r.str)) ? keep : [];
  }
  const rows: Row[] = [];
  for (const g of groups) {
    if (!g.runs.length) continue;
    const sorted = interleave(g.runs);
    // drop duplicates (fake bold / shadow text drawn twice)
    const dedup: Run[] = [];
    for (const r of sorted) {
      const p = dedup[dedup.length - 1];
      if (p && p.str === r.str && Math.abs(p.x0 - r.x0) < Math.max(1.5, r.size * 0.2) && Math.abs(p.base - r.base) < 1.5) continue;
      dedup.push(r);
    }
    if (dedup.every((r) => isWs(r.str))) continue;
    // split into segments on big gaps
    const segs: Run[][] = [];
    let cur: Run[] = [];
    let lastEnd = -Infinity;
    let lastSize = 0;
    let wsW = 0;
    let lastInk: Run | null = null;
    for (const r of dedup) {
      if (isWs(r.str)) { if (cur.length) { cur.push(r); wsW += r.x1 - r.x0; } continue; }
      const gap = r.x0 - lastEnd;
      const sz = Math.max(r.size, lastSize);
      // gap not explained by space characters (a column / tab stop / table cell)
      const spaced = wsW > 0 || /\s$/.test(lastInk?.str ?? '') || /^\s/.test(r.str);
      const eff = spaced ? gap - Math.max(wsW, sz * 0.35) : gap;
      wsW = 0;
      lastInk = r;
      if (cur.length && (gap > splitGap * sz || eff > splitGap * 0.7 * sz)) {
        while (cur.length && isWs(cur[cur.length - 1].str)) cur.pop();
        segs.push(cur); cur = [];
      }
      cur.push(r);
      lastEnd = Math.max(lastEnd, r.x1);
      lastSize = r.size;
    }
    while (cur.length && isWs(cur[cur.length - 1].str)) cur.pop();
    if (cur.length) segs.push(cur);
    const lines = segs.map(makeLine);
    rows.push({
      segs: lines,
      base: median(lines.map((l) => l.base)),
      top: Math.min(...lines.map((l) => l.top)),
      bottom: Math.max(...lines.map((l) => l.bottom)),
      size: Math.max(...lines.map((l) => l.size)),
    });
  }
  return rows.sort((a, b) => a.base - b.base);
}

// ───────────── Ruled (lattice) tables ─────────────
interface HSeg { y: number; x0: number; x1: number; w: number; color: string }
interface VSeg { x: number; y0: number; y1: number; w: number; color: string }

function mergeSegs<T extends { a: number; b: number; p: number; w: number; color: string }>(segs: T[], tolP = 1.2, tolGap = 2): T[] {
  // real rules first so that merged segments keep their stroke width / colour
  segs.sort((s1, s2) => s1.p - s2.p || s1.a - s2.a);
  const out: T[] = [];
  for (const s of segs) {
    // only merge segments of the same kind (real rule vs. fill edge)
    const last = out.find((o) => Math.abs(o.p - s.p) <= tolP && s.a <= o.b + tolGap && s.b >= o.a - tolGap && (o.w > 0) === (s.w > 0));
    if (last) { last.a = Math.min(last.a, s.a); last.b = Math.max(last.b, s.b); last.w = Math.max(last.w, s.w); }
    else out.push({ ...s });
  }
  return out;
}

function cluster(vals: number[], tol: number): number[] {
  const s = [...vals].sort((a, b) => a - b);
  const out: number[][] = [];
  for (const v of s) {
    const last = out[out.length - 1];
    if (last && v - last[last.length - 1] <= tol) last.push(v);
    else out.push([v]);
  }
  return out.map((g) => g.reduce((a, b) => a + b, 0) / g.length);
}

interface Grid { x0: number; y0: number; x1: number; y1: number; xs: number[]; ys: number[]; hs: HSeg[]; vs: VSeg[] }

function findGrids(rules: Rule[], fills: Fill[], page: { width: number; height: number }): Grid[] {
  const hsRaw = rules.filter((r) => r.h && r.x1 - r.x0 > 3).map((r) => ({ a: r.x0, b: r.x1, p: r.y0, w: r.w, color: r.color }));
  const vsRaw = rules.filter((r) => !r.h && r.y1 - r.y0 > 3).map((r) => ({ a: r.y0, b: r.y1, p: r.x0, w: r.w, color: r.color }));
  // Coloured cell backgrounds also delimit cells: add their edges as light rules.
  for (const f of fills) {
    const area = (f.x1 - f.x0) * (f.y1 - f.y0);
    if (f.color === 'ffffff' || area > page.width * page.height * 0.5) continue;
    hsRaw.push({ a: f.x0, b: f.x1, p: f.y0, w: 0, color: '' }, { a: f.x0, b: f.x1, p: f.y1, w: 0, color: '' });
    vsRaw.push({ a: f.y0, b: f.y1, p: f.x0, w: 0, color: '' }, { a: f.y0, b: f.y1, p: f.x1, w: 0, color: '' });
  }
  const hs: HSeg[] = mergeSegs(hsRaw).map((s) => ({ y: s.p, x0: s.a, x1: s.b, w: s.w, color: s.color }));
  const vs: VSeg[] = mergeSegs(vsRaw).map((s) => ({ x: s.p, y0: s.a, y1: s.b, w: s.w, color: s.color }));
  if (!hs.length || !vs.length) return [];
  const tol = 2.5;
  // union-find on intersections
  const n = hs.length + vs.length;
  const parent = Array.from({ length: n }, (_, i) => i);
  const find = (i: number): number => (parent[i] === i ? i : (parent[i] = find(parent[i])));
  const union = (a: number, b: number) => { parent[find(a)] = find(b); };
  for (let i = 0; i < hs.length; i++) {
    for (let j = 0; j < vs.length; j++) {
      const h = hs[i], v = vs[j];
      if (v.x >= h.x0 - tol && v.x <= h.x1 + tol && h.y >= v.y0 - tol && h.y <= v.y1 + tol) union(i, hs.length + j);
    }
  }
  const comps = new Map<number, { hs: HSeg[]; vs: VSeg[] }>();
  hs.forEach((h, i) => { const r = find(i); if (!comps.has(r)) comps.set(r, { hs: [], vs: [] }); comps.get(r)!.hs.push(h); });
  vs.forEach((v, j) => { const r = find(hs.length + j); if (!comps.has(r)) comps.set(r, { hs: [], vs: [] }); comps.get(r)!.vs.push(v); });
  const grids: Grid[] = [];
  for (const c of comps.values()) {
    if (c.hs.length < 2 || c.vs.length < 2) continue;
    const xs = cluster(c.vs.map((v) => v.x), 3);
    const ys = cluster(c.hs.map((h) => h.y), 3);
    if (xs.length < 2 || ys.length < 2) continue;
    const x0 = xs[0], x1 = xs[xs.length - 1], y0 = ys[0], y1 = ys[ys.length - 1];
    if (x1 - x0 < 15 || y1 - y0 < 8) continue;
    grids.push({ x0, y0, x1, y1, xs, ys, hs: c.hs, vs: c.vs });
  }
  return grids;
}

function covers(segs: { p: number; a: number; b: number }[], p: number, a: number, b: number): boolean {
  let covered = 0;
  for (const s of segs) {
    if (Math.abs(s.p - p) > 3) continue;
    covered += Math.max(0, Math.min(b, s.b) - Math.max(a, s.a));
  }
  return covered >= (b - a) * 0.6;
}

// ───────────── Flow layout ─────────────
interface Item {
  kind: 'row' | 'table' | 'image' | 'columns';
  top: number;
  bottom: number;
  row?: Row;
  block?: Block;
}

export interface LayoutOptions {
  /** Detect tables without ruling lines from column alignment. */
  streamTables?: boolean;
  /** Detect multi-column text regions. */
  columns?: boolean;
  /** Separate running headers/footers from the body. */
  headerFooter?: boolean;
}

export class PageAnalyzer {
  constructor(private pd: PageData, private opts: LayoutOptions = {}) {}

  /** Underlines (thin rules hugging a baseline) and link targets become run properties. */
  private decorate(runs: Run[]): void {
    const pd = this.pd;
    const consumed = new Set<Rule>();
    for (const rl of pd.rules) {
      if (!rl.h || rl.w > 2) continue;
      for (const kind of ['underline', 'strike'] as const) {
        const hits: Run[] = [];
        let covered = 0;
        for (const r of runs) {
          if (!r.str.trim()) continue;
          const dy = rl.y0 - r.base;
          if (kind === 'underline' ? dy < -0.5 || dy > r.size * 0.3 : dy < -r.size * 0.5 || dy > -r.size * 0.15) continue;
          const ov = Math.min(r.x1, rl.x1) - Math.max(r.x0, rl.x0);
          if (ov <= 0) continue;
          covered += ov;
          if (ov >= (r.x1 - r.x0) * 0.7) hits.push(r);
        }
        // the rule must be (almost) entirely under/over text, otherwise it is a separator line
        if (!hits.length || covered < (rl.x1 - rl.x0) * 0.75) continue;
        for (const r of hits) r[kind] = true;
        consumed.add(rl);
        break;
      }
    }
    pd.rules = pd.rules.filter((rl) => !consumed.has(rl));
    // Inline highlights: a coloured box behind a few words of a line.
    const usedFills = new Set<Fill>();
    for (const f of pd.fills) {
      if (f.color === 'ffffff') continue;
      const inside = runs.filter((r) => r.str.trim() && (r.x0 + r.x1) / 2 > f.x0 && (r.x0 + r.x1) / 2 < f.x1 && r.base - r.size * 0.3 > f.y0 && r.base - r.size * 0.3 < f.y1);
      if (!inside.length) continue;
      const size = Math.max(...inside.map((r) => r.size));
      if (f.y1 - f.y0 > size * 2) continue;
      const base = inside[0].base;
      if (inside.some((r) => Math.abs(r.base - base) > size * 0.3)) continue;
      const outside = runs.some((r) => r.str.trim() && Math.abs(r.base - base) < size * 0.3 && (r.x1 <= f.x0 + 1 || r.x0 >= f.x1 - 1));
      if (!outside) continue;
      // tight around the words (a table cell background is wider than its text)
      if (f.x0 < Math.min(...inside.map((r) => r.x0)) - size * 0.8 || f.x1 > Math.max(...inside.map((r) => r.x1)) + size * 0.8) continue;
      for (const r of inside) r.bg = f.color;
      usedFills.add(f);
    }
    pd.fills = pd.fills.filter((f) => !usedFills.has(f));
    for (const lk of pd.links) {
      for (const r of runs) {
        const cx = (r.x0 + r.x1) / 2, cy = r.base - r.size * 0.3;
        if (cx >= lk.x0 - 1 && cx <= lk.x1 + 1 && cy >= lk.y0 - 1 && cy <= lk.y1 + 1) r.link = lk.url;
      }
    }
  }

  analyze(): PageLayout {
    const pd = this.pd;
    const runs = pd.runs.filter((r) => pd.ocrLayer || !r.invisible);
    this.decorate(runs);
    // Text bounds → page margins.
    const vis = runs.filter((r) => r.str.trim());
    const imgs = pd.images.filter((i) => !i.mask && (i.x1 - i.x0) * (i.y1 - i.y0) > 16);
    const all: Box[] = [...vis.map((r) => ({ x0: r.x0, x1: r.x1, y0: r.base - r.size * 0.8, y1: r.base + r.size * 0.2 })), ...imgs];
    let left = Math.min(...all.map((b) => b.x0));
    let right = Math.max(...all.map((b) => b.x1));
    let top = Math.min(...all.map((b) => b.y0));
    let bottom = Math.max(...all.map((b) => b.y1));
    if (!all.length) { left = 72; right = pd.width - 72; top = 72; bottom = pd.height - 72; }
    left = Math.max(0, Math.min(left, pd.width * 0.4));
    right = Math.min(pd.width, Math.max(right, pd.width * 0.6));

    // Background images: cover most of the page.
    const floats: ImageBlock[] = [];
    const pageArea = pd.width * pd.height;
    const flowImgs: ImageBox[] = [];
    for (const im of imgs) {
      const area = (im.x1 - im.x0) * (im.y1 - im.y0);
      if (area > pageArea * 0.6 && vis.length) {
        if (!pd.ocrLayer) floats.push({ kind: 'image', top: im.y0, bottom: im.y1, x0: im.x0, x1: im.x1, img: im, spaceBefore: 0, floating: true, behind: true });
        continue;
      }
      flowImgs.push(im);
    }

    const rows = buildRows(runs);
    const grids = findGrids(pd.rules, pd.fills, pd);
    const items: Item[] = [];
    const used = new Set<Run>();
    const runIn = (r: Run, g: Box) => r.str.trim() && (r.x0 + r.x1) / 2 > g.x0 && (r.x0 + r.x1) / 2 < g.x1 && r.base - r.size * 0.3 > g.y0 && r.base - r.size * 0.3 < g.y1;

    // Vector graphics (charts, diagrams): curves, diagonal strokes and filled shapes without text.
    const graphics: PathBox[] = [...pd.paths];
    for (const f of pd.fills) {
      if (f.color === 'ffffff' || (f.x1 - f.x0) * (f.y1 - f.y0) > pageArea * 0.3) continue;
      if (runs.some((r) => runIn(r, f))) continue;
      graphics.push({ x0: f.x0, y0: f.y0, x1: f.x1, y1: f.y1, curves: false, ops: 4 });
    }
    let figures = this.findFigures(graphics, [], flowImgs);

    // Ruled tables (a frame around a chart is part of the figure, not a table).
    const skipGrid = new Set<Grid>();
    for (const g0 of grids) {
      const gArea = (g0.x1 - g0.x0) * (g0.y1 - g0.y0);
      const fig = figures.find((f) => {
        const ov = Math.max(0, Math.min(f.x1, g0.x1) - Math.max(f.x0, g0.x0)) * Math.max(0, Math.min(f.y1, g0.y1) - Math.max(f.y0, g0.y0));
        return ov > gArea * 0.25 || ov > (f.x1 - f.x0) * (f.y1 - f.y0) * 0.6;
      });
      if (fig) {
        fig.x0 = Math.min(fig.x0, g0.x0 - 1); fig.y0 = Math.min(fig.y0, g0.y0 - 1);
        fig.x1 = Math.max(fig.x1, g0.x1 + 1); fig.y1 = Math.max(fig.y1, g0.y1 + 1);
        skipGrid.add(g0);
      }
    }
    for (const g0 of grids) {
      if (skipGrid.has(g0)) continue;
      const inside0 = runs.filter((r) => !used.has(r) && runIn(r, g0));
      if (!inside0.length) continue;
      const size = median(inside0.map((r) => r.size));
      // A box drawn around a word inside a line is decoration, not a table.
      if (g0.ys.length === 2 && g0.y1 - g0.y0 < size * 2.4) {
        const base = inside0[0].base;
        if (runs.some((r) => r.str.trim() && Math.abs(r.base - base) < size * 0.3 && (r.x1 <= g0.x0 + 1 || r.x0 >= g0.x1 - 1))) continue;
      }
      // A frame around (almost) the whole page is decoration, not a table.
      const area = (g0.x1 - g0.x0) * (g0.y1 - g0.y0);
      if (area > (right - left) * (bottom - top) * 0.75 && g0.xs.length <= 2) continue;
      const g = this.extendGrid(g0, rows, used, size, right - left);
      const tb = this.buildRuledTable(g, runs.filter((r) => !used.has(r)), pd.fills, g0);
      if (!tb) continue;
      for (const r of runs) if (runIn(r, g)) used.add(r);
      items.push({ kind: 'table', top: tb.top, bottom: tb.bottom, block: tb });
    }
    const tableBoxes = items.map((i) => i.block as TableBlock);
    figures = figures.filter((f) => !tableBoxes.some((t) => {
      const ov = Math.max(0, Math.min(f.x1, t.x1) - Math.max(f.x0, t.x0)) * Math.max(0, Math.min(f.y1, t.bottom) - Math.max(f.y0, t.top));
      return ov > (f.x1 - f.x0) * (f.y1 - f.y0) * 0.5;
    }));
    // Labels around a chart (axis values, legends) belong to the figure.
    for (const f of figures) {
      for (let pass = 0; pass < 2; pass++) {
        for (const row of rows) {
          for (const sg of row.segs) {
            if (sg.runs.some((r) => used.has(r))) continue;
            const near = sg.x1 > f.x0 - 10 && sg.x0 < f.x1 + 10 && sg.bottom > f.y0 - 8 && sg.top < f.y1 + 8;
            if (!near) continue;
            const inside = sg.x0 >= f.x0 && sg.x1 <= f.x1 && sg.top >= f.y0 && sg.bottom <= f.y1;
            const txt = lineText(sg).trim();
            if (!inside && (sg.x1 - sg.x0 > (f.x1 - f.x0) * 0.4 || /^(fig(ure)?|table|tab\.|source)\b/i.test(txt))) continue;
            f.x0 = Math.min(f.x0, sg.x0 - 1); f.x1 = Math.max(f.x1, sg.x1 + 1);
            f.y0 = Math.min(f.y0, sg.top - 1); f.y1 = Math.max(f.y1, sg.bottom + 1);
          }
        }
      }
      f.x0 = Math.max(0, f.x0); f.y0 = Math.max(0, f.y0); f.x1 = Math.min(pd.width, f.x1); f.y1 = Math.min(pd.height, f.y1);
    }
    for (const f of figures) {
      for (const r of runs) {
        const cx = (r.x0 + r.x1) / 2, cy = r.base - r.size * 0.3;
        if (cx >= f.x0 && cx <= f.x1 && cy >= f.y0 && cy <= f.y1) used.add(r);
      }
      items.push({ kind: 'image', top: f.y0, bottom: f.y1, block: { kind: 'image', top: f.y0, bottom: f.y1, x0: f.x0, x1: f.x1, img: null, region: f, spaceBefore: 0 } });
    }
    for (const im of flowImgs) {
      if (figures.some((f) => im.x0 >= f.x0 - 1 && im.x1 <= f.x1 + 1 && im.y0 >= f.y0 - 1 && im.y1 <= f.y1 + 1)) continue;
      if (tableBoxes.some((t) => (im.x0 + im.x1) / 2 > t.x0 && (im.x0 + im.x1) / 2 < t.x1 && (im.y0 + im.y1) / 2 > t.top && (im.y0 + im.y1) / 2 < t.bottom)) continue;
      items.push({ kind: 'image', top: im.y0, bottom: im.y1, block: { kind: 'image', top: im.y0, bottom: im.y1, x0: im.x0, x1: im.x1, img: im, spaceBefore: 0 } });
    }

    // Remaining text rows (rebuilt without table/figure text).
    const freeRows = buildRows(runs.filter((r) => !used.has(r)));
    for (const row of freeRows) items.push({ kind: 'row', top: row.top, bottom: row.bottom, row });

    // Images beside text become floating images.
    const flowItems: Item[] = [];
    for (const it of items) {
      if (it.kind === 'table') {
        const t = it.block as TableBlock;
        t.float = items.some((o) => o.kind === 'row' && o.row && o.top < t.bottom - 2 && o.bottom > t.top + 2
          && o.row.segs.every((s) => s.x1 < t.x0 - 2 || s.x0 > t.x1 + 2));
      }
      if (it.kind === 'image' && it.block && (it.block as ImageBlock).img) {
        const b = it.block as ImageBlock;
        const beside = items.some((o) => o.kind === 'row' && o.row && o.top < b.bottom - 2 && o.bottom > b.top + 2
          && o.row.segs.every((s) => s.x1 < b.x0 - 2 || s.x0 > b.x1 + 2));
        const overlapsText = items.some((o) => o.kind === 'row' && o.row && o.top < b.bottom - 2 && o.bottom > b.top + 2
          && o.row.segs.some((s) => s.x0 < b.x1 && s.x1 > b.x0));
        if (beside || overlapsText) {
          floats.push({ ...b, floating: true, behind: overlapsText && !beside });
          continue;
        }
      }
      flowItems.push(it);
    }

    // Running header / footer: a few text rows at the very top / bottom, set apart by a gap.
    flowItems.sort((a, b) => a.top - b.top);
    let headItems: Item[] = [];
    let footItems: Item[] = [];
    if (this.opts.headerFooter !== false && flowItems.length >= 3) {
      let k = 0;
      while (k < Math.min(3, flowItems.length - 1) && flowItems[k].kind === 'row' && flowItems[k].bottom < pd.height * 0.12) k++;
      for (let c = k; c >= 1; c--) {
        if (flowItems[c].top - flowItems[c - 1].bottom >= 12) { headItems = flowItems.slice(0, c); break; }
      }
      const n = flowItems.length;
      k = 0;
      while (k < Math.min(3, n - 1 - headItems.length) && flowItems[n - 1 - k].kind === 'row' && flowItems[n - 1 - k].top > pd.height * 0.86) k++;
      for (let c = k; c >= 1; c--) {
        if (flowItems[n - c].top - flowItems[n - c - 1].bottom >= 12) { footItems = flowItems.slice(n - c); break; }
      }
    }
    const bodyItems = flowItems.slice(headItems.length, flowItems.length - footItems.length);
    const blocks = this.layoutFlow(bodyItems, left, right, 0);
    this.attachRules(blocks, right - left);
    setSpacing(blocks);
    const header = headItems.length ? this.layoutFlow(headItems, left, right, 1) : [];
    const footer = footItems.length ? this.layoutFlow(footItems, left, right, 1) : [];
    if (blocks.length) {
      top = blockStart(blocks[0]);
      bottom = Math.max(...blocks.map(blockEnd));
    }
    return { width: pd.width, height: pd.height, left, right, top, bottom, blocks, floats, header, footer };
  }

  private findFigures(paths: PathBox[], tables: TableBlock[], imgs: ImageBox[]): Box[] {
    const cand = paths.filter((p) => {
      const w = p.x1 - p.x0, h = p.y1 - p.y0;
      if (w > this.pd.width * 0.95 && h > this.pd.height * 0.95) return false;
      const cx = (p.x0 + p.x1) / 2, cy = (p.y0 + p.y1) / 2;
      return !tables.some((t) => cx >= t.x0 - 2 && cx <= t.x1 + 2 && cy >= t.top - 2 && cy <= t.bottom + 2);
    });
    if (!cand.length) return [];
    // Cluster by proximity.
    const boxes = cand.map((p) => ({ x0: p.x0, y0: p.y0, x1: p.x1, y1: p.y1, n: 1, curves: p.curves ? 1 : 0 }));
    let merged = true;
    const pad = 8;
    while (merged) {
      merged = false;
      for (let i = 0; i < boxes.length && !merged; i++) {
        for (let j = i + 1; j < boxes.length; j++) {
          const a = boxes[i], b = boxes[j];
          if (a.x0 - pad <= b.x1 && b.x0 - pad <= a.x1 && a.y0 - pad <= b.y1 && b.y0 - pad <= a.y1) {
            a.x0 = Math.min(a.x0, b.x0); a.y0 = Math.min(a.y0, b.y0); a.x1 = Math.max(a.x1, b.x1); a.y1 = Math.max(a.y1, b.y1);
            a.n += b.n; a.curves += b.curves;
            boxes.splice(j, 1);
            merged = true;
            break;
          }
        }
      }
    }
    // Images that overlap a figure become part of it.
    const out: Box[] = [];
    for (const b of boxes) {
      const w = b.x1 - b.x0, h = b.y1 - b.y0;
      if (w < 20 || h < 20) continue;
      if (b.n < 6 && b.curves < 2) continue;
      for (const im of imgs) {
        if (im.x0 < b.x1 && im.x1 > b.x0 && im.y0 < b.y1 && im.y1 > b.y0) {
          b.x0 = Math.min(b.x0, im.x0); b.y0 = Math.min(b.y0, im.y0); b.x1 = Math.max(b.x1, im.x1); b.y1 = Math.max(b.y1, im.y1);
        }
      }
      out.push({ x0: Math.max(0, b.x0 - 2), y0: Math.max(0, b.y0 - 2), x1: Math.min(this.pd.width, b.x1 + 2), y1: Math.min(this.pd.height, b.y1 + 2) });
    }
    return out;
  }

  /** Stand-alone horizontal lines (under a title, between sections) become paragraph borders. */
  private attachRules(blocks: Block[], flowW: number): void {
    const tables = blocks.filter((b): b is TableBlock => b.kind === 'table');
    for (const rl of this.pd.rules) {
      if (!rl.h || rl.w > 4 || rl.x1 - rl.x0 < flowW * 0.25) continue;
      if (tables.some((t) => rl.y0 >= t.top - 3 && rl.y0 <= t.bottom + 3 && rl.x0 < t.x1 && rl.x1 > t.x0)) continue;
      let above: ParaBlock | null = null;
      let below: ParaBlock | null = null;
      for (const b of blocks) {
        if (b.kind !== 'para') continue;
        if (b.x1 < rl.x0 || b.x0 > rl.x1) continue;
        if (blockEnd(b) <= rl.y0 + 1 && (!above || blockEnd(b) > blockEnd(above))) above = b;
        if (blockStart(b) >= rl.y0 - 1 && (!below || blockStart(b) < blockStart(below))) below = b;
      }
      const gapAbove = above ? rl.y0 - blockEnd(above) : Infinity;
      const gapBelow = below ? blockStart(below) - rl.y0 : Infinity;
      if (above && gapAbove <= gapBelow && gapAbove < 30 && !above.borderBottom) above.borderBottom = { w: rl.w, color: rl.color, space: Math.max(0, gapAbove) };
      else if (below && gapBelow < 30 && !below.borderTop) below.borderTop = { w: rl.w, color: rl.color, space: Math.max(0, gapBelow) };
    }
  }

  /** Grow a ruled grid to take in label columns, header rows and total rows drawn without lines. */
  private extendGrid(g: Grid, rows: Row[], used: Set<Run>, size: number, flowW: number): Grid {
    const xs = [...g.xs];
    const ys = [...g.ys];
    const nr = ys.length - 1;
    const segFree = (s: Line) => s.runs.every((r) => !used.has(r));
    const gw = g.x1 - g.x0;
    const maxGap = Math.max(Math.min(gw * 0.3, flowW * 0.15), size * 3);
    for (const side of ['left', 'right'] as const) {
      const hits: Line[] = [];
      let bad = false;
      for (const row of rows) {
        const cy = row.base - row.size * 0.3;
        if (cy <= ys[0] || cy >= ys[nr]) continue;
        for (const s of row.segs) {
          if (!segFree(s)) continue;
          const outside = side === 'left' ? s.x1 <= g.x0 + 1 : s.x0 >= g.x1 - 1;
          if (!outside) continue;
          const gap = side === 'left' ? g.x0 - s.x1 : s.x0 - g.x1;
          if (gap > maxGap) continue;
          if (s.x1 - s.x0 > gw * 0.6) { bad = true; break; }
          hits.push(s);
        }
        if (bad) break;
      }
      if (bad || hits.length < 2 || hits.length > nr * 10) continue;
      if (side === 'left') xs.unshift(Math.min(...hits.map((s) => s.x0)) - 3);
      else xs.push(Math.max(...hits.map((s) => s.x1)) + 3);
    }
    const colOf = (s: Line) => {
      const cx = (s.x0 + s.x1) / 2;
      return xs.findIndex((x, i) => i < xs.length - 1 && cx >= x && cx <= xs[i + 1]);
    };
    const splitRow = (row: Row) => row.segs.flatMap((sg) => splitAtBounds(sg, xs.slice(1, -1)));
    const fitsCols = (segs: Line[]) => segs.every((s) => {
      if (!segFree(s) || s.x0 < xs[0] - size || s.x1 > xs[xs.length - 1] + size) return false;
      const c = colOf(s);
      return c >= 0 && s.x1 - s.x0 <= xs[c + 1] - xs[c] + size * 0.5;
    });
    // header rows above
    const above = rows.filter((r) => r.bottom <= ys[0] + 2).sort((a, b) => b.base - a.base);
    let added = 0;
    let lastTop = ys[0];
    for (const row of above) {
      if (lastTop - row.bottom > size * 1.2 || added >= 3) break;
      const segs = splitRow(row);
      if (!fitsCols(segs) || (segs.length < 2 && xs.length < 3 && !added)) break;
      if (added && lastTop - row.bottom < size * 0.6) ys[0] = row.top - 2;
      else ys.unshift(row.top - 2);
      lastTop = row.top;
      added++;
    }
    // body / total rows below drawn without lines
    if (xs.length >= 3) {
      const below = rows.filter((r) => r.top >= ys[ys.length - 1] - 2).sort((a, b) => a.base - b.base);
      const taken: { top: number; bottom: number; multi: boolean }[] = [];
      let lastBot = ys[ys.length - 1];
      for (const row of below) {
        if (row.top - lastBot > size * 2.2 || taken.length >= 80) break;
        const segs = splitRow(row);
        if (!segs.every(segFree)) break;
        const spanning = segs.length === 1 && segs[0].x0 >= xs[0] - size && segs[0].x1 <= xs[xs.length - 1] + size;
        if (!fitsCols(segs) && !spanning) break;
        taken.push({ top: row.top, bottom: row.bottom, multi: segs.length >= 2 });
        lastBot = row.bottom;
      }
      while (taken.length && !taken[taken.length - 1].multi) taken.pop();
      taken.forEach((t, k) => {
        const next = taken[k + 1];
        ys.push(next ? (t.bottom + next.top) / 2 : t.bottom + 2);
      });
    }
    return { ...g, xs, ys, x0: xs[0], x1: xs[xs.length - 1], y0: ys[0], y1: ys[ys.length - 1] };
  }

  private buildRuledTable(g: Grid, runs: Run[], fills: Fill[], core: Box): TableBlock | null {
    const ys = g.ys;
    const xs = [...g.xs];
    // Columns drawn without a separating line: find gutters that run through the rows of a grid column.
    const ink = runs.filter((r) => r.str.trim() && (r.x0 + r.x1) / 2 > g.x0 && (r.x0 + r.x1) / 2 < g.x1 && r.base - r.size * 0.3 > g.y0 && r.base - r.size * 0.3 < g.y1);
    const virtual = new Set<number>();
    for (let c = 0; c < g.xs.length - 1; c++) {
      const a = g.xs[c], b = g.xs[c + 1];
      if (b - a < 20) continue;
      const byRow = new Map<number, Run[]>();
      for (const r of ink) {
        const cx = (r.x0 + r.x1) / 2;
        if (cx < a || cx > b) continue;
        const cy = r.base - r.size * 0.3;
        const ri = ys.findIndex((y, i) => i < ys.length - 1 && cy >= y && cy <= ys[i + 1]);
        if (ri < 0) continue;
        if (!byRow.has(ri)) byRow.set(ri, []);
        byRow.get(ri)!.push(r);
      }
      const rowsT = [...byRow.values()];
      if (rowsT.length < 2) continue;
      const ok: boolean[] = [];
      for (let x = Math.ceil(a + 3); x <= b - 3; x++) {
        let crossed = 0, both = 0;
        for (const rr of rowsT) {
          if (rr.some((r) => r.x0 < x && r.x1 > x)) crossed++;
          else if (rr.some((r) => r.x1 <= x) && rr.some((r) => r.x0 >= x)) both++;
        }
        ok.push(crossed <= rowsT.length * 0.3 && both >= Math.max(2, rowsT.length * 0.6));
      }
      for (let i = 0; i < ok.length; i++) {
        if (!ok[i]) continue;
        let j = i;
        while (j + 1 < ok.length && ok[j + 1]) j++;
        if (j - i + 1 >= 4) {
          const x = Math.ceil(a + 3) + (i + j) / 2;
          xs.push(x);
          virtual.add(x);
        }
        i = j;
      }
    }
    xs.sort((p, q) => p - q);
    const isVirtual = (x: number) => virtual.has(x);
    const crosses = (r: number, x: number) => ink.some((t) => t.x0 < x - 1 && t.x1 > x + 1 && t.base - t.size * 0.3 >= ys[r] && t.base - t.size * 0.3 <= ys[r + 1]);
    const nr = ys.length - 1, nc = xs.length - 1;
    const hSegs = g.hs.map((h) => ({ p: h.y, a: h.x0, b: h.x1, w: h.w, color: h.color }));
    const vSegs = g.vs.map((v) => ({ p: v.x, a: v.y0, b: v.y1, w: v.w, color: v.color }));
    const inCoreX = (x: number) => x > core.x0 + 1 && x < core.x1 - 1;
    const inCoreY = (y: number) => y > core.y0 + 1 && y < core.y1 - 1;
    // union-find over grid cells: cells merge where the dividing line is missing (inside the ruled area only)
    const id = (r: number, c: number) => r * nc + c;
    const parent = Array.from({ length: nr * nc }, (_, i) => i);
    const find = (i: number): number => (parent[i] === i ? i : (parent[i] = find(parent[i])));
    for (let r = 0; r < nr; r++) {
      for (let c = 0; c < nc; c++) {
        const rowInCore = ys[r] >= core.y0 - 1 && ys[r + 1] <= core.y1 + 1;
        const colInCore = xs[c] >= core.x0 - 1 && xs[c + 1] <= core.x1 + 1;
        if (c > 0 && !covers(vSegs, xs[c], ys[r], ys[r + 1])) {
          // a missing line inside the ruled area merges cells; elsewhere only text running across does
          const merge = !isVirtual(xs[c]) && rowInCore && inCoreX(xs[c]) ? true : crosses(r, xs[c]);
          if (merge) parent[find(id(r, c))] = find(id(r, c - 1));
        }
        if (r > 0 && colInCore && inCoreY(ys[r]) && !covers(hSegs, ys[r], xs[c], xs[c + 1])) parent[find(id(r, c))] = find(id(r - 1, c));
      }
    }
    const groups = new Map<number, { r0: number; r1: number; c0: number; c1: number }>();
    for (let r = 0; r < nr; r++) for (let c = 0; c < nc; c++) {
      const k = find(id(r, c));
      const gr = groups.get(k);
      if (!gr) groups.set(k, { r0: r, r1: r, c0: c, c1: c });
      else { gr.r0 = Math.min(gr.r0, r); gr.r1 = Math.max(gr.r1, r); gr.c0 = Math.min(gr.c0, c); gr.c1 = Math.max(gr.c1, c); }
    }
    // Make spans rectangular and non-overlapping.
    const owner = new Array(nr * nc).fill(-1);
    const cells: CellBlock[] = [];
    const rects = [...groups.values()].sort((a, b) => a.r0 - b.r0 || a.c0 - b.c0);
    for (const gr of rects) {
      if (owner[id(gr.r0, gr.c0)] !== -1) continue;
      let ok = true;
      for (let r = gr.r0; r <= gr.r1 && ok; r++) for (let c = gr.c0; c <= gr.c1; c++) if (owner[id(r, c)] !== -1) { ok = false; break; }
      if (!ok) { gr.r1 = gr.r0; gr.c1 = gr.c0; }
      for (let r = gr.r0; r <= gr.r1; r++) for (let c = gr.c0; c <= gr.c1; c++) owner[id(r, c)] = cells.length;
      cells.push({ r: gr.r0, c: gr.c0, rowSpan: gr.r1 - gr.r0 + 1, colSpan: gr.c1 - gr.c0 + 1, blocks: [], vAlign: 'top' });
    }
    for (let r = 0; r < nr; r++) for (let c = 0; c < nc; c++) {
      if (owner[id(r, c)] !== -1) continue;
      owner[id(r, c)] = cells.length;
      cells.push({ r, c, rowSpan: 1, colSpan: 1, blocks: [], vAlign: 'top' });
    }
    // Distribute text.
    const cellRuns: Run[][] = cells.map(() => []);
    for (const r of runs) {
      const cx = (r.x0 + r.x1) / 2, cy = r.base - r.size * 0.3;
      if (!r.str.trim() || cx < g.x0 || cx > g.x1 || cy < g.y0 || cy > g.y1) continue;
      const c = xs.findIndex((x, i) => i < nc && cx >= x && cx <= xs[i + 1]);
      const rr = ys.findIndex((y, i) => i < nr && cy >= y && cy <= ys[i + 1]);
      if (c < 0 || rr < 0) continue;
      cellRuns[owner[id(rr, c)]].push(r);
    }
    // A merged cell whose lines sit one per spanned row (rows ruled only in other columns) is split up.
    const extra: [CellBlock, Run[]][] = [];
    cells.forEach((cell, i) => {
      if (cell.rowSpan < 2 || !cellRuns[i].length) return;
      const lines = buildRows(cellRuns[i]);
      if (lines.length < 2 || lines.length > cell.rowSpan) return;
      const rowIdx = lines.map((l) => {
        const cy = l.base - l.size * 0.3;
        return ys.findIndex((y, k) => k >= cell.r && k < cell.r + cell.rowSpan && cy >= y && cy <= ys[k + 1]);
      });
      if (rowIdx.some((k) => k < 0) || new Set(rowIdx).size !== rowIdx.length) return;
      const byRow = new Map<number, Run[]>();
      lines.forEach((l, j) => byRow.set(rowIdx[j], l.segs.flatMap((sg) => sg.runs)));
      const r0 = cell.r, span = cell.rowSpan;
      cell.rowSpan = 1;
      cellRuns[i] = byRow.get(r0) ?? [];
      for (let k = r0 + 1; k < r0 + span; k++) extra.push([{ ...cell, r: k, rowSpan: 1, blocks: [] }, byRow.get(k) ?? []]);
    });
    for (const [cell, rs] of extra) { cells.push(cell); cellRuns.push(rs); }
    // spaces between words belong to the cells too
    for (const r of runs) {
      if (r.str.trim()) continue;
      const cx = (r.x0 + r.x1) / 2, cy = r.base - r.size * 0.3;
      const c = xs.findIndex((x, i) => i < nc && cx >= x && cx <= xs[i + 1]);
      const rr = ys.findIndex((y, i) => i < nr && cy >= y && cy <= ys[i + 1]);
      if (c >= 0 && rr >= 0 && cellRuns[owner[id(rr, c)]].length) cellRuns[owner[id(rr, c)]].push(r);
    }
    // all real lines of the page that touch the table (lines outside the grid component count too)
    const inBox = (r: Rule) => r.x1 >= g.x0 - 2 && r.x0 <= g.x1 + 2 && r.y1 >= g.y0 - 2 && r.y0 <= g.y1 + 2;
    const realH = [...hSegs.filter((s) => s.w > 0), ...this.pd.rules.filter((r) => r.h && inBox(r)).map((r) => ({ p: r.y0, a: r.x0, b: r.x1, w: r.w, color: r.color }))];
    const realV = [...vSegs.filter((s) => s.w > 0), ...this.pd.rules.filter((r) => !r.h && inBox(r)).map((r) => ({ p: r.x0, a: r.y0, b: r.y1, w: r.w, color: r.color }))];
    const edge = (segs: typeof realH, p: number, a: number, b: number): CellBorder | null => {
      let covered = 0;
      let best: (typeof segs)[number] | null = null;
      for (const s of segs) {
        if (Math.abs(s.p - p) > 3) continue;
        const ov = Math.max(0, Math.min(b, s.b) - Math.max(a, s.a));
        covered += ov;
        if (ov > 0 && (!best || s.w > best.w)) best = s;
      }
      return best && covered >= (b - a) * 0.6 ? { w: best.w, color: best.color } : null;
    };
    let textCells = 0;
    cells.forEach((cell, i) => {
      const x0 = xs[cell.c], x1 = xs[cell.c + cell.colSpan], y0 = ys[cell.r], y1 = ys[cell.r + cell.rowSpan];
      if (cellRuns[i].length) {
        textCells++;
        const rows = buildRows(cellRuns[i]);
        const its: Item[] = rows.map((row) => ({ kind: 'row' as const, top: row.top, bottom: row.bottom, row }));
        cell.blocks = this.layoutFlow(its, x0 + 2, x1 - 2, 1);
        const tTop = Math.min(...rows.map((r) => r.top)), tBot = Math.max(...rows.map((r) => r.bottom));
        const above = tTop - y0, below = y1 - tBot;
        cell.vAlign = above > below * 2 + 4 && below < 6 ? 'bottom' : Math.abs(above - below) < 3 && above > 6 ? 'center' : 'top';
        if (cell.blocks[0]) cell.blocks[0].spaceBefore = 0;
      }
      const f = fills.find((fl) => fl.color !== 'ffffff' && fl.x0 <= x0 + 3 && fl.x1 >= x1 - 3 && fl.y0 <= y0 + 3 && fl.y1 >= y1 - 3
        && (fl.x1 - fl.x0) * (fl.y1 - fl.y0) < (x1 - x0) * (y1 - y0) * 40);
      if (f) cell.fill = f.color;
      cell.borders = {
        top: edge(realH, y0, x0, x1), bottom: edge(realH, y1, x0, x1),
        left: edge(realV, x0, y0, y1), right: edge(realV, x1, y0, y1),
      };
    });
    if (!textCells) return null;
    tightenCells(cells, ys);
    const ruledSegs = [...realH, ...realV];
    const bw = median(ruledSegs.map((s) => s.w)) || 0.5;
    return {
      kind: 'table', top: g.y0, bottom: g.y1, x0: g.x0, x1: g.x1, cols: xs, rowsY: ys, cells, ruled: ruledSegs.length > 0,
      borderColor: ruledSegs[0]?.color ?? '000000', borderWidth: bw, spaceBefore: 0,
    };
  }

  // ── Flow: rows + blocks in reading order → blocks ──
  layoutFlow(items: Item[], left: number, right: number, depth: number): Block[] {
    items.sort((a, b) => a.top - b.top);
    const width = right - left;
    // Multi-column regions.
    if (depth === 0 && this.opts.columns !== false) {
      const out = this.splitColumns(items, left, right);
      if (out) return out;
    }
    const blocks: Block[] = [];
    let i = 0;
    while (i < items.length) {
      const it = items[i];
      if (it.kind !== 'row') { blocks.push(it.block!); i++; continue; }
      // Unruled table?
      if (this.opts.streamTables !== false) {
        const t = this.tryStreamTable(items, i, left, right, depth);
        if (t) { blocks.push(t.table); i = t.next; continue; }
      }
      const row = it.row!;
      // a header line whose labels are close together, right above an aligned table
      if (row.segs.length === 1 && this.opts.streamTables !== false && i + 1 < items.length && items[i + 1].kind === 'row') {
        const next = items[i + 1].row!;
        if (next.segs.length >= 3 && next.top - row.bottom < row.size * 1.5) {
          const t = this.tryStreamTable(items, i + 1, left, right, depth);
          if (t) {
            const parts = splitAtBounds(row.segs[0], t.table.cols.slice(1, -1));
            if (parts.length >= 2) {
              row.segs = parts;
              const t2 = this.tryStreamTable(items, i, left, right, depth);
              if (t2) { blocks.push(t2.table); i = t2.next; continue; }
            }
          }
        }
      }
      if (row.segs.length > 1) {
        blocks.push(this.tabbedPara(row, left, right));
        i++;
        continue;
      }
      // Prose: merge consecutive single-segment rows into paragraphs.
      const lines: Line[] = [row.segs[0]];
      let j = i + 1;
      while (j < items.length && items[j].kind === 'row' && items[j].row!.segs.length === 1) {
        const next = items[j].row!.segs[0];
        if (!this.continues(lines, next, left, right)) break;
        lines.push(next);
        j++;
      }
      blocks.push(this.makePara(lines, left, right, width));
      i = j;
    }
    setSpacing(blocks);
    return blocks;
  }

  private continues(lines: Line[], next: Line, left: number, right: number): boolean {
    const last = lines[lines.length - 1];
    const first = lines[0];
    const size = last.size;
    if (Math.abs(next.size - size) > size * 0.12) return false;
    const pitch = next.base - last.base;
    if (pitch < size * 0.6 || pitch > size * 1.75) return false;
    if (lines.length >= 2) {
      const prevPitch = last.base - lines[lines.length - 2].base;
      if (Math.abs(pitch - prevPitch) > size * 0.25) return false;
    }
    const nextText = lineText(next);
    if (BULLET_RE.test(nextText)) return false;
    // code listings keep their line breaks
    const mono = (l: Line) => l.runs.filter((r) => r.str.trim()).every((r) => r.font.mono);
    if (mono(last) && mono(next)) return false;
    const width = right - left;
    const lastCenter = (last.x0 + last.x1) / 2;
    const center = (left + right) / 2;
    const centered = Math.abs(lastCenter - center) < Math.max(size, width * 0.02) && last.x0 > left + size * 2
      && Math.abs((next.x0 + next.x1) / 2 - center) < Math.max(size, width * 0.02) && next.x0 > left + size * 2;
    // style change (e.g. bold heading followed by normal text)
    const boldness = (l: Line) => {
      const t = l.runs.filter((r) => r.str.trim());
      return t.length ? t.filter((r) => r.font.bold).length / t.length : 0;
    };
    if ((boldness(last) > 0.9) !== (boldness(next) > 0.9) && lines.length === 1 && last.x1 < right - width * 0.15) return false;
    if (centered) return true;
    // right-aligned text: both lines flush right
    if (Math.abs(last.x1 - next.x1) < size * 0.5 && last.x1 > right - size * 1.5 && last.x0 > left + size * 2) return true;
    // horizontal alignment: next line starts where the paragraph body starts
    const bodyLeft = lines.length >= 2 ? Math.min(...lines.slice(1).map((l) => l.x0)) : null;
    if (bodyLeft !== null) {
      if (Math.abs(next.x0 - bodyLeft) > size * 0.8) return false;
    } else {
      const d = next.x0 - first.x0;
      // first-line indent (next starts left of first) or hanging indent (list continuation)
      const firstIsBullet = BULLET_RE.test(lineText(first));
      if (firstIsBullet) { if (d < -size * 0.5 || d > size * 4) return false; }
      else if (d > size * 6 || d < -size * 4) return false;
    }
    // the previous line must have been "full": the next word would not have fitted
    const words = nextText.trim().split(/\s+/);
    const firstWord = words[0] ?? '';
    const avgChar = (next.x1 - next.x0) / Math.max(1, nextText.length);
    const firstWordW = CJK_RE.test(firstWord[0] ?? '') ? avgChar : firstWord.length * avgChar;
    const lineRight = Math.max(right, ...lines.map((l) => l.x1));
    if (last.x1 + firstWordW + avgChar * 1.5 < lineRight - size * 0.5) return false;
    return true;
  }

  private makePara(lines: Line[], left: number, right: number, width: number): ParaBlock {
    const size = median(lines.flatMap((l) => l.runs.filter((r) => r.str.trim() && !r.script).map((r) => r.size))) || lines[0].size;
    const first = lines[0];
    const last = lines[lines.length - 1];
    const x0 = Math.min(...lines.map((l) => l.x0));
    const x1 = Math.max(...lines.map((l) => l.x1));
    const center = (left + right) / 2;
    const tolC = Math.max(size * 0.8, width * 0.015);
    let align: Align = 'left';
    const allCentered = lines.every((l) => Math.abs((l.x0 + l.x1) / 2 - center) < tolC);
    if (allCentered && first.x0 > left + size * 2 && (lines.length === 1 || lines.some((l) => Math.abs(l.x0 - first.x0) > size * 0.5))) align = 'center';
    else if (lines.every((l) => Math.abs(l.x1 - right) < size) && first.x0 > left + width * 0.25) align = 'right';
    else if (lines.length >= 2) {
      const body = lines.slice(0, -1);
      if (body.every((l) => Math.abs(l.x1 - x1) < size * 0.6) && x1 > right - size * 2
        && (lines.length >= 3 || first.x1 > right - size * 0.6)) align = 'justify';
    }
    let indent = 0;
    let firstLine = 0;
    if (align === 'left' || align === 'justify') {
      const bodyLeft = lines.length >= 2 ? Math.min(...lines.slice(1).map((l) => l.x0)) : first.x0;
      indent = Math.max(0, bodyLeft - left);
      firstLine = first.x0 - left - indent;
    }
    const pitches = lines.slice(1).map((l, k) => l.base - lines[k].base);
    return {
      kind: 'para', top: Math.min(...lines.map((l) => l.top)), bottom: Math.max(...lines.map((l) => l.bottom)),
      x0, x1, lines, align, indent, flowLeft: left, firstLine, size, pitch: median(pitches), spaceBefore: 0,
      list: BULLET_RE.test(lineText(first)),
    };
  }

  private tabbedPara(row: Row, left: number, right: number): ParaBlock {
    const segs = row.segs;
    const size = median(segs.map((s) => s.size));
    const tabs: { pos: number; align: 'left' | 'right' }[] = [];
    for (let k = 1; k < segs.length; k++) {
      const s = segs[k];
      const isLast = k === segs.length - 1;
      if (isLast && Math.abs(s.x1 - right) < size * 1.5) tabs.push({ pos: right - left, align: 'right' });
      else tabs.push({ pos: Math.max(0, s.x0 - left), align: 'left' });
    }
    const first = segs[0];
    const indent = Math.max(0, first.x0 - left);
    return {
      kind: 'para', top: row.top, bottom: row.bottom, x0: first.x0, x1: segs[segs.length - 1].x1, lines: segs, align: 'left',
      indent, flowLeft: left, firstLine: 0, size, pitch: 0, spaceBefore: 0, tabs,
    };
  }

  // ── Unruled tables from aligned columns ──
  private tryStreamTable(items: Item[], start: number, left: number, right: number, depth: number): { table: TableBlock; next: number } | null {
    const first = items[start].row!;
    if (first.segs.length < 2) return null;
    const rows: Row[] = [first];
    let j = start + 1;
    const pitchMax = first.size * 2.6;
    while (j < items.length && items[j].kind === 'row') {
      const r = items[j].row!;
      const prev = rows[rows.length - 1];
      if (r.top - prev.bottom > pitchMax || r.base - prev.base > first.size * 4) break;
      if (r.segs.length < 2) {
        // allow a wrapped cell line (single short segment not starting at the table's left edge)
        const s = r.segs[0];
        const tableLeft = Math.min(...rows.map((x) => x.segs[0].x0));
        if (s.x0 > tableLeft + first.size * 2 && s.x1 - s.x0 < (right - left) * 0.5 && j + 1 < items.length && items[j + 1].kind === 'row' && items[j + 1].row!.segs.length >= 2) {
          rows.push(r); j++; continue;
        }
        break;
      }
      rows.push(r);
      j++;
    }
    const multi = rows.filter((r) => r.segs.length >= 2);
    if (multi.length < 3 && !(multi.length >= 2 && Math.max(...multi.map((r) => r.segs.length)) >= 3)) return null;
    // Column structure from rows with the most common segment count.
    const counts = multi.map((r) => r.segs.length);
    const maxCount = Math.max(...counts);
    const full = multi.filter((r) => r.segs.length === maxCount);
    const defining = full.length >= 2 ? full : multi.filter((r) => r.segs.length >= Math.max(2, maxCount - 1));
    const ivs = defining.flatMap((r) => r.segs.map((s) => [s.x0, s.x1] as [number, number])).sort((a, b) => a[0] - b[0]);
    const colsIv: [number, number][] = [];
    for (const iv of ivs) {
      const last = colsIv[colsIv.length - 1];
      if (last && iv[0] <= last[1] + first.size * 0.6) last[1] = Math.max(last[1], iv[1]);
      else colsIv.push([iv[0], iv[1]]);
    }
    if (colsIv.length < 2) return null;
    const width = right - left;
    // Prose in columns (newspaper layout) is not a table.
    const wideCols = colsIv.filter(([a, b]) => b - a > width * 0.3).length;
    if (wideCols >= 2) return null;
    // Prose lines that happen to have a big gap: require short cells on average.
    const avgSeg = median(multi.flatMap((r) => r.segs.map((s) => s.x1 - s.x0)));
    if (avgSeg > width * 0.45) return null;

    const nc = colsIv.length;
    const bounds: number[] = [colsIv[0][0] - 2];
    for (let k = 1; k < nc; k++) bounds.push((colsIv[k - 1][1] + colsIv[k][0]) / 2);
    bounds.push(colsIv[nc - 1][1] + 2);
    for (const r of rows) r.segs = r.segs.flatMap((sg) => splitAtBounds(sg, bounds.slice(1, -1)));
    // Rows: merge wrapped lines (single segment rows) into the previous row's cell.
    const tableRows: { top: number; bottom: number; cells: Line[][] }[] = [];
    for (const r of rows) {
      const assign = (s: Line) => {
        let best = 0, bestOv = -Infinity;
        for (let k = 0; k < nc; k++) {
          const ov = Math.min(s.x1, colsIv[k][1]) - Math.max(s.x0, colsIv[k][0]);
          if (ov > bestOv) { bestOv = ov; best = k; }
        }
        return best;
      };
      if (r.segs.length < 2 && tableRows.length) {
        const tr = tableRows[tableRows.length - 1];
        tr.cells[assign(r.segs[0])].push(r.segs[0]);
        tr.bottom = r.bottom;
        continue;
      }
      const cells: Line[][] = Array.from({ length: nc }, () => []);
      for (const s of r.segs) cells[assign(s)].push(s);
      tableRows.push({ top: r.top, bottom: r.bottom, cells });
    }
    const rowsY = [tableRows[0].top - 2];
    for (let k = 1; k < tableRows.length; k++) rowsY.push((tableRows[k - 1].bottom + tableRows[k].top) / 2);
    rowsY.push(tableRows[tableRows.length - 1].bottom + 2);
    const cells: CellBlock[] = [];
    tableRows.forEach((tr, ri) => {
      tr.cells.forEach((lines, ci) => {
        const blocks: Block[] = [];
        if (lines.length) {
          const its: Item[] = lines.map((l) => ({ kind: 'row' as const, top: l.top, bottom: l.bottom, row: { segs: [l], base: l.base, top: l.top, bottom: l.bottom, size: l.size } }));
          const sub = this.layoutFlow(its, bounds[ci], bounds[ci + 1], depth + 1);
          if (sub[0]) sub[0].spaceBefore = 0;
          blocks.push(...sub);
        }
        cells.push({ r: ri, c: ci, rowSpan: 1, colSpan: 1, blocks, vAlign: 'top' });
      });
    });
    // Horizontal rules crossing the table (e.g. header underline) become borders.
    const hRules: number[] = [];
    for (const rl of this.pd.rules) {
      if (!rl.h || rl.x1 - rl.x0 < (bounds[nc] - bounds[0]) * 0.5) continue;
      if (rl.y0 < rowsY[0] - 4 || rl.y0 > rowsY[rowsY.length - 1] + 4) continue;
      let best = 0, bd = Infinity;
      rowsY.forEach((y, k) => { const d = Math.abs(y - rl.y0); if (d < bd) { bd = d; best = k; } });
      if (!hRules.includes(best)) hRules.push(best);
    }
    tightenCells(cells, rowsY);
    const table: TableBlock = {
      kind: 'table', top: rowsY[0], bottom: rowsY[rowsY.length - 1], x0: bounds[0], x1: bounds[nc], cols: bounds, rowsY, cells,
      ruled: false, borderColor: '000000', borderWidth: 0.5, spaceBefore: 0, hRules,
    };
    return { table, next: j };
  }

  // ── Newspaper-style columns ──
  private splitColumns(items: Item[], left: number, right: number): Block[] | null {
    const width = right - left;
    const rowItems = items.filter((i) => i.kind === 'row');
    if (rowItems.length < 8) return null;
    // Candidate gutter: x positions not crossed by any text in a long vertical stretch.
    const bins = 200;
    const step = width / bins;
    const addItem = (occ: number[], it: Item) => {
      const boxes: Box[] = it.kind === 'row' ? it.row!.segs.map((s) => ({ x0: s.x0, x1: s.x1, y0: s.top, y1: s.bottom })) : [{ x0: it.block!.x0, x1: it.block!.x1, y0: it.top, y1: it.bottom }];
      for (const b of boxes) {
        const a = Math.max(0, Math.floor((b.x0 - left) / step));
        const z = Math.min(bins - 1, Math.floor((b.x1 - left) / step));
        for (let k = a; k <= z; k++) occ[k]++;
      }
    };
    const findGutters = (occ: number[]) => {
      const gutters: [number, number][] = [];
      let k = Math.floor(bins * 0.15);
      while (k < bins * 0.85) {
        if (occ[k] === 0) {
          let e = k;
          while (e + 1 < bins && occ[e + 1] === 0) e++;
          if ((e - k + 1) * step >= 8) gutters.push([left + k * step, left + (e + 1) * step]);
          k = e + 1;
        } else k++;
      }
      return gutters;
    };
    // Find the longest vertical band of items where a gutter exists.
    // Items crossing the whole width (titles) break bands.
    const sorted = items;
    let best: { s: number; e: number; gutters: [number, number][] } | null = null;
    for (let s = 0; s < sorted.length; s++) {
      let e = s;
      let lastG: [number, number][] = [];
      // grow while gutters persist
      const occ = new Array(bins).fill(0);
      for (let t = s + 1; t <= sorted.length; t++) {
        addItem(occ, sorted[t - 1]);
        const g = findGutters(occ);
        if (!g.length) break;
        lastG = g;
        e = t;
      }
      if (lastG.length && e - s >= 8) {
        const band = sorted.slice(s, e);
        const rowsInBand = band.filter((i) => i.kind === 'row').length;
        if (rowsInBand >= 8 && (!best || e - s > best.e - best.s)) best = { s, e, gutters: lastG };
      }
      if (best && best.e - best.s > sorted.length * 0.5) break;
    }
    if (!best) return null;
    const band = sorted.slice(best.s, best.e);
    const edges = [left, ...best.gutters.map(([a, b]) => (a + b) / 2), right];
    const cols = edges.slice(0, -1).map((x0, k) => ({ x0, x1: edges[k + 1], items: [] as Item[] }));
    for (const it of band) {
      const parts: Item[] = [];
      if (it.kind === 'row') {
        for (const s of it.row!.segs) parts.push({ kind: 'row', top: s.top, bottom: s.bottom, row: { segs: [s], base: s.base, top: s.top, bottom: s.bottom, size: s.size } });
      } else parts.push(it);
      for (const p of parts) {
        const cx = p.kind === 'row' ? (p.row!.segs[0].x0 + p.row!.segs[0].x1) / 2 : (p.block!.x0 + p.block!.x1) / 2;
        const col = cols.find((c) => cx >= c.x0 && cx < c.x1) ?? cols[cols.length - 1];
        col.items.push(p);
      }
    }
    // Text columns need prose: lines that fill a good part of the column.
    const proseCols = cols.filter((c) => {
      const segW = c.items.filter((i) => i.kind === 'row').map((i) => i.row!.segs[0].x1 - i.row!.segs[0].x0);
      return segW.length >= 3 && median(segW) > (c.x1 - c.x0) * 0.55;
    });
    if (proseCols.length < 2 || cols.some((c) => c.x1 - c.x0 < width * 0.2)) return null;
    // Re-merge row segments in each column (a row may hold several segments within one column).
    const colBlocks = cols.map((c) => {
      const rowsInCol = buildRowsFromSegs(c.items.filter((i) => i.kind === 'row').map((i) => i.row!.segs[0]));
      const its: Item[] = [...rowsInCol.map((r) => ({ kind: 'row' as const, top: r.top, bottom: r.bottom, row: r })), ...c.items.filter((i) => i.kind !== 'row')];
      return { x0: c.x0, x1: c.x1, blocks: this.layoutFlow(its, c.x0 + (c === cols[0] ? 0 : 4), c.x1 - (c === cols[cols.length - 1] ? 0 : 4), 1) };
    });
    const nonEmpty = colBlocks.filter((c) => c.blocks.length);
    const top = Math.min(...nonEmpty.map((c) => blockStart(c.blocks[0])));
    const bottom = Math.max(...nonEmpty.map((c) => Math.max(...c.blocks.map(blockEnd))));
    const colsBlock: ColumnsBlock = { kind: 'columns', top, bottom, x0: left, x1: right, cols: colBlocks, spaceBefore: 0 };
    const before = this.layoutFlow(sorted.slice(0, best.s), left, right, 1);
    const after = this.layoutFlow(sorted.slice(best.e), left, right, 0);
    const out = [...before, colsBlock, ...after];
    setSpacing(out);
    return out;
  }
}

/** Split a text segment where a column boundary falls in a gap between its words. */
export function splitAtBounds(seg: Line, bounds: number[]): Line[] {
  const inner = bounds.filter((b) => b > seg.x0 + 1 && b < seg.x1 - 1);
  if (!inner.length) return [seg];
  const out: Line[] = [];
  let cur: Run[] = [];
  let lastInkEnd = -Infinity;
  for (const r of seg.runs) {
    if (r.str.trim() && cur.length) {
      const cut = inner.some((b) => b > lastInkEnd - 0.5 && b < r.x0 + 0.5) && r.x0 - lastInkEnd > r.size * 0.15;
      if (cut) {
        while (cur.length && !cur[cur.length - 1].str.trim()) cur.pop();
        if (cur.length) out.push(makeLine(cur));
        cur = [];
      }
    }
    if (!r.str.trim() && !cur.length) continue;
    cur.push(r);
    if (r.str.trim()) lastInkEnd = r.x1;
  }
  while (cur.length && !cur[cur.length - 1].str.trim()) cur.pop();
  if (cur.length) out.push(makeLine(cur));
  return out.length ? out : [seg];
}

// Word line metrics model (fractions of the font size): the baseline sits
// ASC_EXTRA above the bottom of a line box; NAT is single line spacing.
const ASC_EXTRA = 0.22;
const NAT = 1.15;
export function lineMax(l: Line): number {
  let m = 0;
  for (const r of l.runs) if (r.str.trim() && !r.script) m = Math.max(m, r.size);
  return m || l.size;
}
/** Distance from the top of a paragraph's first line box to its baseline, as Word lays it out. */
export function firstAscent(b: Block): number {
  if (b.kind !== 'para') return 0;
  const s = lineMax(b.lines[0]);
  if (b.pitch && exactPitch(b)) return b.pitch - ASC_EXTRA * s;
  return Math.max(NAT * s, b.pitch || 0) - ASC_EXTRA * s;
}
/** Tight line spacing (below Word's natural single spacing) must be set as an exact value. */
export function exactPitch(p: ParaBlock): boolean {
  if (!p.pitch) return false;
  const s = Math.max(...p.lines.map(lineMax));
  return p.pitch >= s * 0.95 && p.pitch < s * NAT;
}
/** Where a block ends (bottom of its last line box), in page coordinates. */
export function blockEnd(b: Block): number {
  if (b.kind === 'para') { const l = b.lines[b.lines.length - 1]; return l.base + ASC_EXTRA * lineMax(l); }
  return b.bottom;
}
/** Where a block starts (top of its first line box), in page coordinates. */
export function blockStart(b: Block): number {
  if (b.kind === 'para') return b.lines[0].base - firstAscent(b);
  return b.top;
}
/** Single lines in rows lower than Word's natural line height get an exact line height. */
function tightenCells(cells: CellBlock[], ys: number[]): void {
  for (const c of cells) {
    if (c.blocks.length !== 1 || c.blocks[0].kind !== 'para') continue;
    const p = c.blocks[0];
    if (p.lines.length !== 1 || p.pitch) continue;
    const h = ys[c.r + c.rowSpan] - ys[c.r];
    const s = lineMax(p.lines[0]);
    if (h < s * NAT && h >= s * 0.95) p.pitch = h;
  }
}

export function setSpacing(blocks: Block[]): void {
  // Runs of single-line paragraphs set tighter than Word's single spacing (lists of
  // figures, tables of lines): give them the same exact line pitch.
  for (let i = 1; i < blocks.length; i++) {
    const a = blocks[i - 1], b = blocks[i];
    if (a.kind !== 'para' || b.kind !== 'para' || b.lines.length !== 1) continue;
    const s = lineMax(b.lines[0]);
    if (Math.abs(lineMax(a.lines[a.lines.length - 1]) - s) > 0.5) continue;
    const d = b.lines[0].base - a.lines[a.lines.length - 1].base;
    if (d < s * 0.95 || d >= s * NAT) continue;
    b.pitch = d;
    if (a.lines.length === 1 && !a.pitch) a.pitch = d;
  }
  let prevEnd: number | null = null;
  for (const b of blocks) {
    if (b.kind === 'table' && b.float) { b.spaceBefore = 0; continue; }
    const bt = b.kind === 'para' && b.borderTop ? b.borderTop.space + b.borderTop.w : 0;
    const bb = b.kind === 'para' && b.borderBottom ? b.borderBottom.space + b.borderBottom.w : 0;
    b.spaceBefore = prevEnd === null ? 0 : Math.max(0, blockStart(b) - bt - prevEnd);
    prevEnd = Math.max(prevEnd ?? -Infinity, blockEnd(b) + bb);
  }
}

function buildRowsFromSegs(segs: Line[]): Row[] {
  const sorted = [...segs].sort((a, b) => a.base - b.base || a.x0 - b.x0);
  const rows: Row[] = [];
  for (const s of sorted) {
    const last = rows[rows.length - 1];
    if (last && Math.abs(last.base - s.base) <= Math.min(last.size, s.size) * 0.3) {
      // join with the previous segment when close, otherwise keep as separate segment
      const prevSeg = last.segs[last.segs.length - 1];
      if (s.x0 - prevSeg.x1 < s.size * 1.6) {
        last.segs[last.segs.length - 1] = makeLine([...prevSeg.runs, ...s.runs]);
      } else last.segs.push(s);
      last.top = Math.min(last.top, s.top); last.bottom = Math.max(last.bottom, s.bottom);
    } else rows.push({ segs: [s], base: s.base, top: s.top, bottom: s.bottom, size: s.size });
  }
  return rows;
}

/** Body text size of a document = most common size weighted by characters. */
export function bodySize(runs: Run[]): number {
  const hist = new Map<number, number>();
  for (const r of runs) {
    if (!r.str.trim()) continue;
    const k = Math.round(r.size * 2) / 2;
    hist.set(k, (hist.get(k) ?? 0) + r.str.length);
  }
  let best = 10, bc = -1;
  for (const [k, c] of hist) if (c > bc) { bc = c; best = k; }
  return best;
}
