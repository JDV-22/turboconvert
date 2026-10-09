// Extracts the visual building blocks of a PDF page with pdf.js: positioned
// text runs (with real font names, bold/italic, colour), ruling lines, filled
// rectangles, vector-graphics boxes, images and links. All coordinates are in
// PDF points, origin at the top-left of the page as displayed (rotation applied).
import type { PDFPageProxy } from 'pdfjs-dist';

type Matrix = [number, number, number, number, number, number];

export interface FontInfo {
  /** Clean family name to use in Office documents, e.g. "Times New Roman". */
  family: string;
  bold: boolean;
  italic: boolean;
  mono: boolean;
  serif: boolean;
  type3: boolean;
}

export interface Run {
  str: string;
  x0: number;
  x1: number;
  /** Baseline, from the top of the page. */
  base: number;
  size: number;
  font: FontInfo;
  /** Hex colour without '#'. */
  color: string;
  invisible: boolean;
  rtl: boolean;
  /** Set by the layout step for superscript (1) / subscript (-1). */
  script?: 1 | -1;
  underline?: boolean;
  strike?: boolean;
  /** Background (highlight) colour behind the run. */
  bg?: string;
  link?: string;
}

export interface Rule { x0: number; y0: number; x1: number; y1: number; w: number; color: string; h: boolean }
export interface Box { x0: number; y0: number; x1: number; y1: number }
export interface Fill extends Box { color: string }
export interface PathBox extends Box { curves: boolean; ops: number }
export interface ImageBox extends Box { id: string | null; inline: unknown; mask: boolean }
export interface LinkBox extends Box { url: string }

export interface PageData {
  width: number;
  height: number;
  runs: Run[];
  rules: Rule[];
  fills: Fill[];
  paths: PathBox[];
  images: ImageBox[];
  links: LinkBox[];
  /** True when every text run is invisible (OCR text layer over a scan). */
  ocrLayer: boolean;
}

const IDENT: Matrix = [1, 0, 0, 1, 0, 0];
function mul(m1: number[], m2: number[]): Matrix {
  return [
    m1[0] * m2[0] + m1[2] * m2[1], m1[1] * m2[0] + m1[3] * m2[1],
    m1[0] * m2[2] + m1[2] * m2[3], m1[1] * m2[2] + m1[3] * m2[3],
    m1[0] * m2[4] + m1[2] * m2[5] + m1[4], m1[1] * m2[4] + m1[3] * m2[5] + m1[5],
  ];
}
function apply(m: number[], x: number, y: number): [number, number] {
  return [m[0] * x + m[2] * y + m[4], m[1] * x + m[3] * y + m[5]];
}

function toHex(c: unknown): string {
  if (typeof c === 'string') {
    const s = c.replace('#', '');
    return s.length >= 6 ? s.slice(0, 6).toLowerCase() : '000000';
  }
  if (c && typeof (c as ArrayLike<number>).length === 'number' && (c as ArrayLike<number>).length >= 3) {
    const a = c as ArrayLike<number>;
    return [a[0], a[1], a[2]].map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('');
  }
  return '000000';
}

// ───────────── Font names ─────────────
const FONT_ALIASES: [RegExp, string][] = [
  [/^(helvetica|arialmt|arial)/i, 'Arial'],
  [/^(timesnewroman|times-roman|times|tnr)/i, 'Times New Roman'],
  [/^(couriernew|courier)/i, 'Courier New'],
  [/^(cmr|cmbx|cmti|cmsl|lmroman|nimbusromno9|nimbusrom|nimbusroman|texgyretermes|stix)/i, 'Times New Roman'],
  [/^(cmss|lmsans|nimbussan|texgyreheros|liberationsans)/i, 'Arial'],
  [/^(cmtt|lmmono|nimbusmon|liberationmono)/i, 'Courier New'],
  [/^liberationserif/i, 'Times New Roman'],
  [/^carlito/i, 'Calibri'],
  [/^caladea/i, 'Cambria'],
  [/^(cmmi|cmsy|cmex|msam|msbm)/i, 'Cambria Math'],
  [/^symbolmt|^symbol$/i, 'Symbol'],
  [/^(zapfdingbats|wingdings)/i, 'Wingdings'],
];

const STYLE_WORDS = /[-,_ ]?(reguital|mediital|regu|medi|ital|bold|black|heavy|semibold|demibold|demi|extrabold|ultrabold|medium|light|extralight|thin|book|regular|roman|normal|italic|oblique|it|bd|bi|condensed|cond|narrow|mt|ps|psmt|std|pro|lt|w\d+)$/i;

export function cleanFontName(raw: string): string {
  let name = (raw || '').replace(/^[A-Z]{6}\+/, '');
  for (const [re, fam] of FONT_ALIASES) if (re.test(name)) return fam;
  name = name.split(/[,-]/)[0];
  // Strip style suffixes glued to the name (e.g. "GaramondBold", "CalibriLight").
  let prev = '';
  while (prev !== name) { prev = name; name = name.replace(STYLE_WORDS, ''); }
  if (!name) return '';
  if (/^[\x20-\x7e]+$/.test(name)) {
    // "TimesNewRoman" → "Times New Roman", "SourceSansPro" → "Source Sans Pro"
    name = name.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2').trim();
  }
  if (/^(MS|Ms) ?(Mincho|Gothic|PMincho|PGothic)/.test(name)) name = name.replace(/^(MS|Ms) ?/, 'MS ');
  return name;
}

function fontInfoFrom(obj: Record<string, unknown> | null, fallbackFamily: string): FontInfo {
  const raw = String(obj?.name ?? '');
  const bare = raw.replace(/^[A-Z]{6}\+/, '');
  const bold = !!obj?.bold || !!obj?.black || /bold|black|heavy|semibold|demi|extrabold|ultra|\bbd\b|-bd|,bd|-medi(ital)?$|-sb$|-b$|-bi$/i.test(bare) || /^cmbx|^cmb\d/i.test(bare);
  const italic = !!obj?.italic || /italic|oblique|ital$|kursiv|-it$|,it$|-bi$|-i$|^cmti|^cmmi|^cmsl|^cmbxti/i.test(bare);
  const generic = fallbackFamily || 'sans-serif';
  const mono = generic === 'monospace' || /mono|courier|consol|cmtt/i.test(bare);
  const serif = generic === 'serif' || /times|serif|roman|georgia|garamond|cambria|book|cmr|minion/i.test(bare);
  let family = cleanFontName(raw);
  if (!family || /^(F\d+|T\d+|TT\d+|C\d+_\d+|Font\d*)$/i.test(family)) family = mono ? 'Courier New' : serif ? 'Times New Roman' : 'Arial';
  return { family, bold, italic, mono, serif, type3: !!obj?.isType3Font };
}

// ───────────── Operator-list walk ─────────────
interface GState {
  ctm: Matrix;
  fill: string;
  stroke: string;
  lw: number;
  mode: number;
  font: string;
  fontSize: number;
  tm: Matrix;
  lx: number; ly: number; x: number; y: number;
  cs: number; ws: number; hs: number; leading: number; rise: number;
}

interface TextMark { x: number; y: number; color: string; mode: number }

export interface ExtractOptions { images?: boolean; graphics?: boolean }

export async function extractPage(page: PDFPageProxy, pdfjs: typeof import('pdfjs-dist'), opts: ExtractOptions = {}): Promise<PageData> {
  const viewport = page.getViewport({ scale: 1 });
  const vt = viewport.transform as Matrix;
  const W = viewport.width;
  const H = viewport.height;
  const OPS = pdfjs.OPS;
  const opList = await page.getOperatorList({ annotationMode: pdfjs.AnnotationMode.DISABLE });

  const rules: Rule[] = [];
  const fills: Fill[] = [];
  const paths: PathBox[] = [];
  const images: ImageBox[] = [];
  const marks: TextMark[] = [];

  const st: GState = {
    ctm: IDENT, fill: '000000', stroke: '000000', lw: 1, mode: 0, font: '', fontSize: 0, tm: IDENT,
    lx: 0, ly: 0, x: 0, y: 0, cs: 0, ws: 0, hs: 1, leading: 0, rise: 0,
  };
  const stack: GState[] = [];
  let s = { ...st };
  const fontCache = new Map<string, Record<string, unknown> | null>();
  const getFont = (id: string) => {
    if (!fontCache.has(id)) {
      let f: Record<string, unknown> | null = null;
      try { if (page.commonObjs.has(id)) f = page.commonObjs.get(id) as Record<string, unknown>; } catch { f = null; }
      fontCache.set(id, f);
    }
    return fontCache.get(id)!;
  };
  const toPage = (x: number, y: number) => {
    const [ux, uy] = apply(s.ctm, x, y);
    return apply(vt, ux, uy);
  };
  const scaleOf = (m: number[]) => Math.sqrt(Math.abs(m[0] * m[3] - m[1] * m[2]));

  const handlePath = (paintOp: number, data: ArrayLike<number> | null) => {
    if (!data || !data.length) return;
    const isStroke = paintOp === OPS.stroke || paintOp === OPS.closeStroke;
    const isFill = paintOp === OPS.fill || paintOp === OPS.eoFill || paintOp === OPS.fillStroke || paintOp === OPS.eoFillStroke
      || paintOp === OPS.closeFillStroke || paintOp === OPS.closeEOFillStroke;
    const alsoStroke = paintOp === OPS.fillStroke || paintOp === OPS.eoFillStroke || paintOp === OPS.closeFillStroke || paintOp === OPS.closeEOFillStroke;
    if (!isStroke && !isFill) return;
    // Parse into subpaths of page-space points.
    const subs: { pts: [number, number][]; curves: boolean; closed: boolean }[] = [];
    let cur: { pts: [number, number][]; curves: boolean; closed: boolean } | null = null;
    let i = 0;
    while (i < data.length) {
      const op = data[i++];
      if (op === 0) { cur = { pts: [toPage(data[i], data[i + 1])], curves: false, closed: false }; subs.push(cur); i += 2; }
      else if (op === 1) { cur?.pts.push(toPage(data[i], data[i + 1])); i += 2; }
      else if (op === 2) { if (cur) { cur.curves = true; cur.pts.push(toPage(data[i + 4], data[i + 5])); } i += 6; }
      else if (op === 3) { if (cur) { cur.curves = true; cur.pts.push(toPage(data[i + 2], data[i + 3])); } i += 4; }
      else if (op === 4) { if (cur) cur.closed = true; }
      else break;
    }
    const lw = Math.max(0.1, s.lw * scaleOf(s.ctm));
    for (const sp of subs) {
      const pts = sp.pts;
      if (pts.length < 2) continue;
      let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
      for (const [x, y] of pts) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); }
      if (x1 < -5 || y1 < -5 || x0 > W + 5 || y0 > H + 5) continue;
      const w = x1 - x0, h = y1 - y0;
      const axisRect = !sp.curves && (pts.length === 4 || pts.length === 5) && pts.every(([x, y]) =>
        (Math.abs(x - x0) < 0.6 || Math.abs(x - x1) < 0.6) && (Math.abs(y - y0) < 0.6 || Math.abs(y - y1) < 0.6));
      if (isFill && (axisRect || (!sp.curves && pts.length === 2))) {
        if (s.fill === 'transparent') continue;
        if (h <= 2.5 && w > 2) rules.push({ x0, x1, y0: (y0 + y1) / 2, y1: (y0 + y1) / 2, w: Math.max(h, 0.3), color: s.fill, h: true });
        else if (w <= 2.5 && h > 2) rules.push({ x0: (x0 + x1) / 2, x1: (x0 + x1) / 2, y0, y1, w: Math.max(w, 0.3), color: s.fill, h: false });
        else if (w > 2 && h > 2) fills.push({ x0, y0, x1, y1, color: s.fill });
        if (alsoStroke && w > 2 && h > 2) {
          rules.push({ x0, x1, y0, y1: y0, w: lw, color: s.stroke, h: true }, { x0, x1, y0: y1, y1, w: lw, color: s.stroke, h: true });
          rules.push({ x0, x1: x0, y0, y1, w: lw, color: s.stroke, h: false }, { x0: x1, x1, y0, y1, w: lw, color: s.stroke, h: false });
        }
        continue;
      }
      if (isStroke && !sp.curves) {
        if (s.stroke === 'transparent') continue;
        let straight = true;
        const segs: Rule[] = [];
        const closedPts = sp.closed ? [...pts, pts[0]] : pts;
        for (let k = 1; k < closedPts.length; k++) {
          const [ax, ay] = closedPts[k - 1];
          const [bx, by] = closedPts[k];
          if (Math.abs(ay - by) < 0.8 && Math.abs(ax - bx) > 1) segs.push({ x0: Math.min(ax, bx), x1: Math.max(ax, bx), y0: (ay + by) / 2, y1: (ay + by) / 2, w: lw, color: s.stroke, h: true });
          else if (Math.abs(ax - bx) < 0.8 && Math.abs(ay - by) > 1) segs.push({ x0: (ax + bx) / 2, x1: (ax + bx) / 2, y0: Math.min(ay, by), y1: Math.max(ay, by), w: lw, color: s.stroke, h: false });
          else if (Math.abs(ax - bx) > 0.8 || Math.abs(ay - by) > 0.8) straight = false;
        }
        if (straight && segs.length) { rules.push(...segs); continue; }
      }
      if (opts.graphics !== false && (w > 1 || h > 1)) {
        if (isFill && s.fill === 'ffffff' && !sp.curves) continue;
        paths.push({ x0, y0, x1, y1, curves: sp.curves, ops: pts.length });
      }
    }
  };

  const recordImage = (id: string | null, inline: unknown, mask: boolean) => {
    const corners = [toPage(0, 0), toPage(1, 0), toPage(0, 1), toPage(1, 1)];
    const xs = corners.map((c) => c[0]);
    const ys = corners.map((c) => c[1]);
    const box = { x0: Math.max(0, Math.min(...xs)), y0: Math.max(0, Math.min(...ys)), x1: Math.min(W, Math.max(...xs)), y1: Math.min(H, Math.max(...ys)) };
    if (box.x1 - box.x0 < 2 || box.y1 - box.y0 < 2) return;
    images.push({ ...box, id, inline, mask });
  };

  const textAdvance = (glyphs: unknown[]) => {
    const font = getFont(s.font);
    const fm = (font?.fontMatrix as number[] | undefined)?.[0] ?? 0.001;
    const vertical = !!font?.vertical;
    let adv = 0;
    for (const g of glyphs) {
      if (typeof g === 'number') { adv += (-g * s.fontSize) / 1000; continue; }
      if (!g || typeof g !== 'object') continue;
      const gl = g as { width?: number; isSpace?: boolean; vmetric?: number[] };
      const w = vertical ? (gl.vmetric?.[0] ?? gl.width ?? 0) : (gl.width ?? 0);
      adv += w * s.fontSize * fm + s.cs + (gl.isSpace ? s.ws : 0);
    }
    return vertical ? 0 : adv * s.hs;
  };

  const showText = (glyphs: unknown[]) => {
    const [ux, uy] = apply(s.tm, s.x, s.y + s.rise);
    const [px, py] = toPage(ux, uy);
    marks.push({ x: px, y: py, color: s.fill, mode: s.mode });
    s.x += textAdvance(glyphs);
  };

  const { fnArray, argsArray } = opList;
  let inAnnotation = 0;
  for (let i = 0; i < fnArray.length; i++) {
    const fn = fnArray[i];
    const a = (argsArray[i] ?? []) as unknown[];
    if (inAnnotation && fn !== OPS.endAnnotation && fn !== OPS.beginAnnotation) continue;
    switch (fn) {
      case OPS.save: stack.push({ ...s }); break;
      case OPS.restore: if (stack.length) s = stack.pop()!; break;
      case OPS.transform: s.ctm = mul(s.ctm, a as number[]); break;
      case OPS.paintFormXObjectBegin: stack.push({ ...s }); if (a[0]) s.ctm = mul(s.ctm, a[0] as number[]); break;
      case OPS.paintFormXObjectEnd: if (stack.length) s = stack.pop()!; break;
      case OPS.beginGroup: {
        stack.push({ ...s });
        const g = a[0] as { matrix?: number[] } | undefined;
        if (g?.matrix) s.ctm = mul(s.ctm, g.matrix);
        break;
      }
      case OPS.endGroup: if (stack.length) s = stack.pop()!; break;
      case OPS.beginAnnotation: inAnnotation++; break;
      case OPS.endAnnotation: inAnnotation = Math.max(0, inAnnotation - 1); break;
      case OPS.setLineWidth: s.lw = a[0] as number; break;
      case OPS.setGState:
        for (const [k, v] of (a[0] as [string, unknown][]) ?? []) if (k === 'LW') s.lw = v as number;
        break;
      case OPS.setFillRGBColor: s.fill = toHex(a[0]); break;
      case OPS.setStrokeRGBColor: s.stroke = toHex(a[0]); break;
      case OPS.setFillTransparent: s.fill = 'transparent'; break;
      case OPS.setStrokeTransparent: s.stroke = 'transparent'; break;
      case OPS.constructPath: {
        const data = a[1] as unknown[] | null;
        handlePath(a[0] as number, (data?.[0] as ArrayLike<number>) ?? null);
        break;
      }
      case OPS.beginText: s.tm = IDENT; s.x = s.y = s.lx = s.ly = 0; break;
      case OPS.setFont: s.font = a[0] as string; s.fontSize = a[1] as number; break;
      case OPS.setCharSpacing: s.cs = a[0] as number; break;
      case OPS.setWordSpacing: s.ws = a[0] as number; break;
      case OPS.setHScale: s.hs = (a[0] as number) / 100; break;
      case OPS.setLeading: s.leading = -(a[0] as number); break;
      case OPS.setTextRise: s.rise = a[0] as number; break;
      case OPS.setTextRenderingMode: s.mode = a[0] as number; break;
      case OPS.setTextMatrix: {
        const m = (Array.isArray(a[0]) || ArrayBuffer.isView(a[0]) ? a[0] : a) as number[];
        s.tm = [m[0], m[1], m[2], m[3], m[4], m[5]];
        s.x = s.y = s.lx = s.ly = 0;
        break;
      }
      case OPS.moveText: s.lx += a[0] as number; s.ly += a[1] as number; s.x = s.lx; s.y = s.ly; break;
      case OPS.setLeadingMoveText: s.leading = a[1] as number; s.lx += a[0] as number; s.ly += a[1] as number; s.x = s.lx; s.y = s.ly; break;
      case OPS.nextLine: s.ly += s.leading; s.lx += 0; s.x = s.lx; s.y = s.ly; break;
      case OPS.showText: case OPS.showSpacedText: showText((a[0] as unknown[]) ?? []); break;
      case OPS.nextLineShowText: s.ly += s.leading; s.x = s.lx; s.y = s.ly; showText((a[0] as unknown[]) ?? []); break;
      case OPS.nextLineSetSpacingShowText: s.ws = a[0] as number; s.cs = a[1] as number; s.ly += s.leading; s.x = s.lx; s.y = s.ly; showText((a[2] as unknown[]) ?? []); break;
      case OPS.paintImageXObject: if (opts.images !== false) recordImage(a[0] as string, null, false); break;
      case OPS.paintInlineImageXObject: if (opts.images !== false) recordImage(null, a[0], false); break;
      case OPS.paintImageMaskXObject: if (opts.images !== false) recordImage(null, a[0], true); break;
      default: break;
    }
  }

  // ── Text content ──
  const tc = await page.getTextContent({ includeMarkedContent: false } as Parameters<PDFPageProxy['getTextContent']>[0]);
  const styles = tc.styles as Record<string, { fontFamily?: string }>;
  const runs: Run[] = [];
  const fontInfos = new Map<string, FontInfo>();
  // Index text marks by rounded baseline for colour lookup.
  const markRows = new Map<number, TextMark[]>();
  for (const m of marks) {
    const k = Math.round(m.y);
    for (const kk of [k - 1, k, k + 1]) {
      if (!markRows.has(kk)) markRows.set(kk, []);
      markRows.get(kk)!.push(m);
    }
  }
  for (const it of tc.items as { str: string; dir: string; width: number; height: number; transform: number[]; fontName: string }[]) {
    if (!('str' in it) || !it.str) continue;
    const m = mul(vt, it.transform);
    const size = Math.hypot(m[2], m[3]);
    if (size < 0.5) continue;
    // Horizontal text only (rotated text is left to the page image / ignored).
    if (Math.abs(m[1]) > 0.05 * Math.abs(m[0]) || m[0] <= 0) continue;
    const x0 = m[4];
    const base = m[5];
    const sx = Math.hypot(m[0], m[1]) / Math.hypot(it.transform[0], it.transform[1]) || 1;
    const width = it.width * sx;
    if (x0 > W + 1 || x0 + width < -1 || base < -1 || base - size > H + 1) continue;
    let fi = fontInfos.get(it.fontName);
    if (!fi) {
      fi = fontInfoFrom(getFont(it.fontName), styles[it.fontName]?.fontFamily ?? '');
      fontInfos.set(it.fontName, fi);
    }
    // Colour + visibility from the closest text-showing operator.
    let color = '000000';
    let mode = 0;
    const cands = markRows.get(Math.round(base));
    if (cands) {
      let best: TextMark | null = null;
      let bestD = Infinity;
      for (const c of cands) {
        if (Math.abs(c.y - base) > Math.max(1.5, size * 0.3)) continue;
        const d = c.x <= x0 + 1 ? x0 - c.x : (c.x - x0) * 4 + 50;
        if (d < bestD) { bestD = d; best = c; }
      }
      if (best) { color = best.color === 'transparent' ? '000000' : best.color; mode = best.mode; }
    }
    runs.push({
      str: it.str, x0, x1: x0 + width, base, size, font: fi, color,
      invisible: (mode & 3) === 3 || mode === 7, rtl: it.dir === 'rtl',
    });
  }

  // ── Links ──
  const links: LinkBox[] = [];
  try {
    const annots = await page.getAnnotations({ intent: 'display' });
    for (const an of annots as { subtype?: string; url?: string; unsafeUrl?: string; rect?: number[] }[]) {
      if (an.subtype !== 'Link' || !an.rect) continue;
      const url = an.url || an.unsafeUrl;
      if (!url || !/^(https?:|mailto:)/i.test(url)) continue;
      const [ax, ay] = apply(vt, an.rect[0], an.rect[1]);
      const [bx, by] = apply(vt, an.rect[2], an.rect[3]);
      links.push({ x0: Math.min(ax, bx), y0: Math.min(ay, by), x1: Math.max(ax, bx), y1: Math.max(ay, by), url });
    }
  } catch { /* ignore broken annotations */ }

  const visible = runs.filter((r) => !r.invisible && r.str.trim());
  const ocrLayer = runs.some((r) => r.str.trim()) && !visible.length;
  return { width: W, height: H, runs, rules, fills, paths, images, links, ocrLayer };
}

// ───────────── Images ─────────────
interface RawImage { width: number; height: number; kind?: number; data?: Uint8ClampedArray | Uint8Array; bitmap?: ImageBitmap }

function getObj(page: PDFPageProxy, id: string): Promise<RawImage | null> {
  return new Promise((resolve) => {
    const pool = id.startsWith('g_') ? page.commonObjs : page.objs;
    const timer = setTimeout(() => resolve(null), 5000);
    try {
      pool.get(id, (obj: unknown) => { clearTimeout(timer); resolve(obj as RawImage); });
    } catch {
      clearTimeout(timer);
      resolve(null);
    }
  });
}

/** Draw a pdf.js image object onto a canvas (null when it can't be decoded). */
export async function imageToCanvas(page: PDFPageProxy, img: ImageBox): Promise<HTMLCanvasElement | null> {
  const raw = img.id ? await getObj(page, img.id) : (img.inline as RawImage | null);
  if (!raw || !raw.width || !raw.height) return null;
  const canvas = document.createElement('canvas');
  canvas.width = raw.width;
  canvas.height = raw.height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  if (raw.bitmap) {
    ctx.drawImage(raw.bitmap, 0, 0);
    return canvas;
  }
  const src = raw.data;
  if (!src) return null;
  const n = raw.width * raw.height;
  const out = new ImageData(raw.width, raw.height);
  const d = out.data;
  if (raw.kind === 3 && src.length >= n * 4) {
    d.set(src.subarray(0, n * 4));
  } else if (raw.kind === 2 && src.length >= n * 3) {
    for (let p = 0, q = 0; p < n; p++, q += 3) { d[p * 4] = src[q]; d[p * 4 + 1] = src[q + 1]; d[p * 4 + 2] = src[q + 2]; d[p * 4 + 3] = 255; }
  } else if (raw.kind === 1) {
    const rowBytes = (raw.width + 7) >> 3;
    for (let y = 0; y < raw.height; y++) {
      for (let x = 0; x < raw.width; x++) {
        const bit = (src[y * rowBytes + (x >> 3)] >> (7 - (x & 7))) & 1;
        const v = bit ? 255 : 0;
        const p = (y * raw.width + x) * 4;
        d[p] = d[p + 1] = d[p + 2] = v; d[p + 3] = 255;
      }
    }
  } else {
    return null;
  }
  ctx.putImageData(out, 0, 0);
  return canvas;
}

/** Encode a canvas as PNG when it has transparency or flat colours, JPEG otherwise. */
export async function encodeCanvas(canvas: HTMLCanvasElement, maxSide = 0): Promise<{ data: Uint8Array; type: 'png' | 'jpg'; width: number; height: number }> {
  let c = canvas;
  if (maxSide && Math.max(c.width, c.height) > maxSide) {
    const k = maxSide / Math.max(c.width, c.height);
    const d = document.createElement('canvas');
    d.width = Math.max(1, Math.round(c.width * k));
    d.height = Math.max(1, Math.round(c.height * k));
    const dctx = d.getContext('2d')!;
    dctx.imageSmoothingQuality = 'high';
    dctx.drawImage(c, 0, 0, d.width, d.height);
    c = d;
  }
  const ctx = c.getContext('2d', { willReadFrequently: true })!;
  // Sample pixels: alpha and colour count decide the format.
  const sw = Math.min(c.width, 200);
  const sh = Math.min(c.height, 200);
  const sample = document.createElement('canvas');
  sample.width = sw; sample.height = sh;
  const sctx = sample.getContext('2d', { willReadFrequently: true })!;
  sctx.drawImage(c, 0, 0, sw, sh);
  const px = sctx.getImageData(0, 0, sw, sh).data;
  let alpha = false;
  const colors = new Set<number>();
  for (let i = 0; i < px.length; i += 4) {
    if (px[i + 3] < 250) alpha = true;
    if (colors.size <= 256) colors.add((px[i] >> 3) << 10 | (px[i + 1] >> 3) << 5 | (px[i + 2] >> 3));
  }
  void ctx;
  const png = alpha || colors.size <= 64;
  const blob = await new Promise<Blob | null>((r) => c.toBlob(r, png ? 'image/png' : 'image/jpeg', 0.9));
  const data = new Uint8Array(await (blob ?? new Blob()).arrayBuffer());
  return { data, type: png ? 'png' : 'jpg', width: c.width, height: c.height };
}
