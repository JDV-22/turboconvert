// PDF → Word (DOCX). Rebuilds an editable document from the PDF's text layer:
// paragraphs (merged lines, alignment, indents, spacing), headings, bold /
// italic / colour / font / size, super/subscripts, links, bullet lists, ruled
// and unruled tables, multi-column layouts, images and vector figures, one
// Word section per PDF page (same page size). Everything runs in the browser.
import { openPdf } from '@/scripts/lib/office-pdfjs';
import { extractPage, imageToCanvas, encodeCanvas, type Run, type ImageBox } from '@/scripts/lib/office-pdf-extract';
import { PageAnalyzer, buildRows, lineMax, bodySize, blockStart, blockEnd, exactPitch, CJK_RE, type Block, type PageLayout, type ParaBlock, type TableBlock, type ImageBlock, type ColumnsBlock, type Line } from '@/scripts/lib/office-pdf-layout';
import { say, yieldToUi, freeCanvas, safeScale } from '@/scripts/lib/office-common';
import { renderPage } from '@/scripts/lib/office-pdf-render';
import { UserError, throwIfAborted, withExt, type Engine } from '@/scripts/runtime/types';

type Docx = typeof import('docx');
type ISectionOptions = import('docx').ISectionOptions;

interface Pic { data: Uint8Array; type: 'png' | 'jpg'; wPt: number; hPt: number }

interface PageOut {
  layout: PageLayout;
  pics: Map<ImageBlock, Pic>;
  /** Exact-layout page: drawing as background image, text lines positioned in frames. */
  exact?: { bg: Pic | null; rows: Line[][] };
}

/** Dense forms (many lines, irregular merged cells) do not survive reflowing: lay them out exactly. */
function isFormLike(layout: PageLayout, ruleCount: number): boolean {
  const st = formStats(layout, ruleCount);
  if (ruleCount < 100) return false;
  return (st.cells >= 30 && st.merged / st.cells > 0.25) || st.nested >= 3;
}

function formStats(layout: PageLayout, ruleCount: number) {
  let cells = 0, merged = 0, nested = 0;
  const walk = (blocks: Block[], depth: number) => {
    for (const b of blocks) {
      if (b.kind === 'table') {
        if (depth > 0) nested++;
        if (b.ruled && b.cells.length >= 12) {
          cells += b.cells.length;
          merged += b.cells.filter((c) => c.rowSpan > 1 || c.colSpan > 1).length;
        }
        for (const c of b.cells) walk(c.blocks, depth + 1);
      } else if (b.kind === 'columns') b.cols.forEach((c) => walk(c.blocks, depth));
    }
  };
  walk(layout.blocks, 0);
  return { cells, merged, nested, ruleCount };
}

async function exactPage(page: import('pdfjs-dist').PDFPageProxy, runs: Run[]): Promise<{ bg: Pic | null; rows: Line[][] }> {
  const vp = page.getViewport({ scale: 1 });
  let bg: Pic | null = null;
  try {
    const { canvas } = await renderPage(page, { scale: 2, noText: true, maxPixels: 9_000_000 });
    const enc = await encodeCanvas(canvas);
    freeCanvas(canvas);
    bg = { data: enc.data, type: enc.type, wPt: vp.width, hPt: vp.height };
  } catch (e) {
    console.warn('background skipped', e);
  }
  const rows = buildRows(runs, 1.2).map((r) => r.segs);
  return { bg, rows };
}

const twip = (pt: number) => Math.round(pt * 20);
const emu = (pt: number) => Math.round(pt * 12700);
const px = (pt: number) => Math.max(1, Math.round((pt * 96) / 72));

const PUA_BULLETS: Record<string, string> = {
  '': '•', '': '▪', '': '➢', '': '✓', '': '❖', '': '□', '': '●', '': '■', '': '➔',
};
function cleanText(s: string): string {
  return s.replace(/[]/g, (c) => PUA_BULLETS[c] ?? '•')
    // XML-invalid control characters
    // eslint-disable-next-line no-control-regex
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F￾￿]/g, '');
}

const BULLET_TOKEN = /^\s*([•●▪■◦○◆◇►▸‣⁃∙·–—\-*]|\(?\d{1,3}[.)]|\(?[a-zA-Z][.)]|\(?[ivxIVX]{1,4}[.)])\s*$/;

const run: Engine = async ({ files, progress, signal }) => {
  const file = files[0];
  const docx: Docx = await import('docx');
  const { pdfjs, doc, close } = await openPdf(file, signal);
  const n = doc.numPages;
  const pages: PageOut[] = [];
  const sampleRuns: Run[] = [];
  let visibleChars = 0;
  let imageCount = 0;
  try {
    for (let p = 1; p <= n; p++) {
      throwIfAborted(signal);
      const page = await doc.getPage(p);
      const pd = await extractPage(page, pdfjs);
      for (const r of pd.runs) if (!r.invisible) visibleChars += r.str.trim().length;
      imageCount += pd.images.length;
      if (sampleRuns.length < 20000) sampleRuns.push(...pd.runs.filter((r) => pd.ocrLayer || !r.invisible));
      const ruleCount = pd.rules.length + pd.fills.length;
      const layout = new PageAnalyzer(pd).analyze();
      const dbg = (globalThis as { __officeDebug?: unknown[] }).__officeDebug;
      if (dbg) dbg.push({ page: p, images: pd.images, rules: pd.rules.length, fills: pd.fills.length, paths: pd.paths.length, runs: pd.runs.slice(0, 400), layout });
      if (dbg) (dbg[dbg.length - 1] as Record<string, unknown>).formLike = formStats(layout, ruleCount);
      if (isFormLike(layout, ruleCount)) {
        // Forms and other dense layouts: keep the look exactly (background drawing + positioned text)
        pages.push({ layout, pics: new Map(), exact: await exactPage(page, pd.runs.filter((r) => !r.invisible && !r.font.type3)) });
      } else {
        const pics = await materializeImages(page, layout);
        pages.push({ layout, pics });
      }
      page.cleanup();
      progress((p / n) * 0.85);
      await yieldToUi();
    }
  } catch (e) {
    await close();
    throw e;
  }
  const ocrText = sampleRuns.some((r) => r.invisible && r.str.trim());
  if (visibleChars < 3 && !ocrText) {
    await close();
    throw new UserError('empty', imageCount
      ? say({ en: 'This PDF is a scanned image without a text layer. Run it through OCR PDF first to make the text editable.', fr: 'Ce PDF est une image numérisée sans texte. Passez-le d’abord dans l’outil OCR PDF pour rendre le texte modifiable.' })
      : say({ en: 'This PDF contains no text to convert.', fr: 'Ce PDF ne contient aucun texte à convertir.' }));
  }
  await close();
  throwIfAborted(signal);

  // ── Document-wide typography ──
  const body = bodySize(sampleRuns);
  const famCount = new Map<string, number>();
  for (const r of sampleRuns) if (r.str.trim()) famCount.set(r.font.family, (famCount.get(r.font.family) ?? 0) + r.str.length);
  const bodyFont = [...famCount.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? 'Arial';
  const headingSizes = new Set<number>();
  const forEachPara = (blocks: Block[], fn: (p: ParaBlock) => void) => {
    for (const b of blocks) {
      if (b.kind === 'para') fn(b);
      else if (b.kind === 'columns') b.cols.forEach((c) => forEachPara(c.blocks, fn));
    }
  };
  const isHeadingCandidate = (p: ParaBlock) => {
    if (p.tabs || p.lines.length > 3) return false;
    const text = p.lines.map(lineText).join(' ').trim();
    return p.size >= body * 1.18 && text.length > 1 && text.length <= 200 && /\p{L}/u.test(text);
  };
  for (const pg of pages) forEachPara(pg.layout.blocks, (p) => { if (isHeadingCandidate(p)) headingSizes.add(Math.round(p.size)); });
  const hs = [...headingSizes].sort((a, b) => b - a);
  for (const pg of pages) forEachPara(pg.layout.blocks, (p) => {
    if (isHeadingCandidate(p)) p.heading = Math.min(3, hs.indexOf(Math.round(p.size)) + 1);
  });

  // Source hyphenates words at line ends (typeset documents): let Word do the same so lines break alike.
  let hyphenated = 0;
  for (const pg of pages) forEachPara(pg.layout.blocks, (p) => {
    for (let k = 1; k < p.lines.length; k++) {
      if (/\p{L}-$/u.test(lineText(p.lines[k - 1]).trimEnd()) && /^\p{Ll}/u.test(lineText(p.lines[k]).trimStart())) hyphenated++;
    }
  });

  // ── Build DOCX ──
  const w = new Writer(docx, bodyFont, body);
  const sections = pages.flatMap((pg, i) => {
    const s = w.pageSections(pg);
    if (i % 5 === 4) progress(0.85 + (i / pages.length) * 0.1);
    return s;
  });
  const document = new docx.Document({
    creator: 'TurboConvert',
    hyphenation: hyphenated >= 3 ? { autoHyphenation: true } : undefined,
    title: file.name.replace(/\.pdf$/i, ''),
    styles: {
      default: {
        document: { run: { font: bodyFont, size: Math.round(body * 2) }, paragraph: { spacing: { after: 0, line: 240, lineRule: docx.LineRuleType.AUTO } } },
        heading1: { run: { font: bodyFont, size: Math.round(body * 2), bold: false, color: '000000' }, paragraph: { spacing: { before: 0, after: 0 }, keepNext: true } },
        heading2: { run: { font: bodyFont, size: Math.round(body * 2), bold: false, color: '000000' }, paragraph: { spacing: { before: 0, after: 0 }, keepNext: true } },
        heading3: { run: { font: bodyFont, size: Math.round(body * 2), bold: false, italics: false, color: '000000' }, paragraph: { spacing: { before: 0, after: 0 }, keepNext: true } },
      },
    },
    sections,
  });
  progress(0.96);
  const blob = await docx.Packer.toBlob(document);
  progress(1);
  return [{ name: withExt(file.name, 'docx'), blob: new Blob([blob], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' }) }];
};

function lineText(l: Line): string {
  return l.runs.map((r) => r.str).join('');
}

// ───────────── Images ─────────────
async function materializeImages(page: import('pdfjs-dist').PDFPageProxy, layout: PageLayout): Promise<Map<ImageBlock, Pic>> {
  const out = new Map<ImageBlock, Pic>();
  const imgBlocks: ImageBlock[] = [...layout.floats];
  const walk = (blocks: Block[]) => {
    for (const b of blocks) {
      if (b.kind === 'image') imgBlocks.push(b);
      else if (b.kind === 'columns') b.cols.forEach((c) => walk(c.blocks));
      else if (b.kind === 'table') b.cells.forEach((c) => walk(c.blocks));
    }
  };
  walk(layout.blocks);
  let pageCanvas: HTMLCanvasElement | null = null;
  let pageScale = 1;
  for (const b of imgBlocks) {
    const wPt = b.x1 - b.x0, hPt = b.bottom - b.top;
    try {
      let canvas: HTMLCanvasElement | null = null;
      let crop = false;
      if (b.img) canvas = await imageToCanvas(page, b.img as ImageBox);
      if (!canvas) {
        // vector figure, or an image pdf.js can't hand over: render that area of the page
        if (!pageCanvas) {
          const vp0 = page.getViewport({ scale: 1 });
          pageScale = safeScale(vp0.width, vp0.height, 2.5);
          const vp = page.getViewport({ scale: pageScale });
          pageCanvas = document.createElement('canvas');
          pageCanvas.width = Math.ceil(vp.width);
          pageCanvas.height = Math.ceil(vp.height);
          const ctx = pageCanvas.getContext('2d')!;
          ctx.fillStyle = '#fff';
          ctx.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
          await page.render({ canvasContext: ctx, viewport: vp, canvas: pageCanvas } as Parameters<typeof page.render>[0]).promise;
        }
        const r = b.region ?? { x0: b.x0, y0: b.top, x1: b.x1, y1: b.bottom };
        canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round((r.x1 - r.x0) * pageScale));
        canvas.height = Math.max(1, Math.round((r.y1 - r.y0) * pageScale));
        canvas.getContext('2d')!.drawImage(pageCanvas, r.x0 * pageScale, r.y0 * pageScale, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
        crop = true;
      }
      // keep at most ~300 dpi for the displayed size
      const maxSide = Math.max(64, Math.round((Math.max(wPt, hPt) * 300) / 72));
      const enc = await encodeCanvas(canvas, crop ? 0 : maxSide);
      freeCanvas(canvas);
      if (enc.data.length) out.set(b, { data: enc.data, type: enc.type, wPt, hPt });
    } catch (e) {
      console.warn('image skipped', e);
    }
  }
  freeCanvas(pageCanvas);
  return out;
}

// ───────────── DOCX writer ─────────────
class Writer {
  private pics = new Map<ImageBlock, Pic>();
  private darkBg = false;
  constructor(private d: Docx, private bodyFont: string, private body: number) {}

  pageSections(pg: PageOut): ISectionOptions[] {
    if (pg.exact) return [this.exactSection(pg)];
    const d = this.d;
    const L = pg.layout;
    this.pics = pg.pics;
    const W = L.width, H = L.height;
    const marginL = Math.max(0, Math.min(L.left, W * 0.4));
    const marginR = Math.max(0, Math.min(W - L.right, W * 0.4));
    const marginT = Math.max(0, Math.min(L.top, H * 0.5));
    // Small bottom margin: Word fonts may be slightly wider than the PDF's, keep slack.
    let marginB = Math.max(8, Math.min(H - L.bottom - 4, 28));
    let headerDist = 0, footerDist = 0;
    let headers: { default: InstanceType<Docx['Header']> } | undefined;
    let footers: { default: InstanceType<Docx['Footer']> } | undefined;
    if (L.header.length) {
      headerDist = Math.max(0, blockStart(L.header[0]));
      headers = { default: new d.Header({ children: this.blocks(L.header, L.left, L.right) }) };
    }
    if (L.footer.length) {
      const fTop = blockStart(L.footer[0]);
      footerDist = Math.max(0, H - Math.max(...L.footer.map(blockEnd)));
      marginB = Math.max(8, Math.min(H - fTop + 2, H * 0.3));
      footers = { default: new d.Footer({ children: this.blocks(L.footer, L.left, L.right) }) };
    }
    const landscape = W > H;
    const page = {
      size: landscape ? { width: twip(H), height: twip(W), orientation: d.PageOrientation.LANDSCAPE } : { width: twip(W), height: twip(H) },
      margin: { top: twip(marginT), bottom: twip(marginB), left: twip(marginL), right: twip(marginR), header: twip(headerDist), footer: twip(footerDist), gutter: 0 },
    };
    // Split the page into sections: single-column parts and newspaper-column parts (Word section columns).
    type Kid = InstanceType<Docx['Paragraph']> | InstanceType<Docx['Table']>;
    const out: { properties: object; headers?: object; footers?: object; children: Kid[] }[] = [];
    let cur: Kid[] = [];
    const flush = (column?: object) => {
      if (!cur.length && !column) return;
      out.push({
        properties: { type: out.length ? d.SectionType.CONTINUOUS : d.SectionType.NEXT_PAGE, page, ...(column ? { column } : {}) },
        headers, footers,
        children: cur.length ? cur : [new d.Paragraph({})],
      });
      cur = [];
    };
    for (const b of L.blocks) {
      if (b.kind !== 'columns') { cur.push(...this.blocks([b], L.left, L.right)); continue; }
      // the gap above the columns goes at the end of the previous section (both columns start at its top)
      // (a separate 1pt paragraph carries the section break: some apps collapse that paragraph)
      if (b.spaceBefore > 1 && (cur.length || out.length)) cur.push(spacer(d, Math.max(1, b.spaceBefore - 1)), spacer(d, 1));
      flush();
      const cols = b.cols.filter((c) => c.blocks.length);
      const ext = cols.map((c) => ({ x0: Math.min(...c.blocks.map((x) => x.x0)), x1: Math.max(...c.blocks.map((x) => x.x1)) }));
      ext[0].x0 = L.left;
      ext[ext.length - 1].x1 = Math.max(ext[ext.length - 1].x1, L.right);
      for (let k = 1; k < ext.length; k++) ext[k].x0 = Math.max(ext[k].x0, ext[k - 1].x1 + 6);
      cols.forEach((c, k) => {
        const first = c.blocks[0];
        first.spaceBefore = Math.max(0, blockStart(first) - b.top);
        const kids = this.blocks(c.blocks, ext[k].x0, ext[k].x1);
        if (k < cols.length - 1) {
          kids.push(new d.Paragraph({ children: [new d.ColumnBreak()], spacing: { before: 0, after: 0, line: 20, lineRule: d.LineRuleType.EXACT } }));
        }
        cur.push(...kids);
      });
      flush({
        count: cols.length, equalWidth: false, space: twip(ext.length > 1 ? ext[1].x0 - ext[0].x1 : 12),
        children: ext.map((e, k) => new d.Column({ width: twip(e.x1 - e.x0), space: k < ext.length - 1 ? twip(ext[k + 1].x0 - e.x1) : undefined })),
      });
    }
    flush();
    if (!out.length) flush({});
    // Floating images are anchored in the first paragraph of the page.
    if (L.floats.length) {
      const runs = L.floats.map((f) => this.floatImage(f)).filter(Boolean) as InstanceType<Docx['ImageRun']>[];
      if (runs.length) out[0].children.unshift(new d.Paragraph({ children: runs, spacing: { before: 0, after: 0, line: 20, lineRule: d.LineRuleType.EXACT } }));
    }
    return out as unknown as ISectionOptions[];
  }

  /** Page drawn exactly: background picture behind framed text lines at their original positions. */
  private exactSection(pg: PageOut): ISectionOptions {
    const d = this.d;
    const L = pg.layout;
    const W = L.width, H = L.height;
    const ex = pg.exact!;
    const children: InstanceType<Docx['Paragraph']>[] = [];
    const first: InstanceType<Docx['ImageRun']>[] = [];
    if (ex.bg) {
      first.push(new d.ImageRun({
        type: ex.bg.type, data: ex.bg.data, transformation: { width: px(W), height: px(H) },
        floating: {
          horizontalPosition: { relative: d.HorizontalPositionRelativeFrom.PAGE, offset: 0 },
          verticalPosition: { relative: d.VerticalPositionRelativeFrom.PAGE, offset: 0 },
          behindDocument: true, allowOverlap: true, lockAnchor: true, wrap: { type: d.TextWrappingType.NONE },
        },
      }));
    }
    children.push(new d.Paragraph({ children: first, spacing: { before: 0, after: 0, line: 20, lineRule: d.LineRuleType.EXACT } }));
    // One paragraph per text row: exact line height, vertical gap as spacing, segments placed with tab stops.
    let wordEnd = 0; // bottom of the previous line box as Word will place it
    for (const segs of ex.rows) {
      const size = Math.max(...segs.map(lineMax));
      const lh = size * 1.05;
      const base = Math.min(...segs.map((sg) => sg.base));
      const before = Math.max(0, base - (lh - 0.2 * size) - wordEnd);
      wordEnd = wordEnd + before + lh;
      const tabbed: ParaBlock = {
        kind: 'para', top: 0, bottom: 0, x0: segs[0].x0, x1: segs[segs.length - 1].x1, lines: segs, align: 'left',
        indent: segs[0].x0, flowLeft: 0, firstLine: 0, size, pitch: 0, spaceBefore: 0,
        tabs: segs.slice(1).map((sg) => ({ pos: sg.x0, align: 'left' as const })),
      };
      const runs = this.textRuns(tabbed);
      if (!runs.length) continue;
      children.push(new d.Paragraph({
        children: runs,
        indent: { left: twip(segs[0].x0) },
        tabStops: tabbed.tabs!.map((t) => ({ type: d.TabStopType.LEFT, position: twip(t.pos) })),
        spacing: { before: twip(before), after: 0, line: twip(lh), lineRule: d.LineRuleType.EXACT },
      }));
    }
    const landscape = W > H;
    return {
      properties: {
        type: d.SectionType.NEXT_PAGE,
        page: {
          size: landscape ? { width: twip(H), height: twip(W), orientation: d.PageOrientation.LANDSCAPE } : { width: twip(W), height: twip(H) },
          margin: { top: 0, bottom: 0, left: 0, right: 0, header: 0, footer: 0, gutter: 0 },
        },
      },
      children,
    };
  }

  blocks(blocks: Block[], left: number, right: number): (InstanceType<Docx['Paragraph']> | InstanceType<Docx['Table']>)[] {
    const out: (InstanceType<Docx['Paragraph']> | InstanceType<Docx['Table']>)[] = [];
    for (const b of blocks) {
      if (b.kind === 'para') out.push(this.para(b, left, right));
      else if (b.kind === 'table') out.push(...this.table(b, left));
      else if (b.kind === 'image') { const p = this.image(b, left, right); if (p) out.push(p); }
      else if (b.kind === 'columns') out.push(...this.columns(b, left));
    }
    return out;
  }

  private font(r: Run) {
    const f = r.font.family || this.bodyFont;
    return { ascii: f, hAnsi: f, cs: f, eastAsia: f };
  }

  private textRuns(p: ParaBlock): (InstanceType<Docx['TextRun']> | InstanceType<Docx['ExternalHyperlink']>)[] {
    const d = this.d;
    type Piece = { text: string; r: Run; tab?: boolean; br?: boolean };
    const pieces: Piece[] = [];
    const push = (text: string, r: Run) => {
      if (!text) return;
      const last = pieces[pieces.length - 1];
      if (last && !last.tab && !last.br && sameFormat(last.r, r)) last.text += text;
      else pieces.push({ text, r });
    };
    let bulletTab = false;
    p.lines.forEach((line, li) => {
      if (li > 0) {
        if (p.tabs) {
          pieces.push({ text: '', r: line.runs[0], tab: true });
        } else if (p.align === 'center' || p.align === 'right') {
          // keep the author's line breaks in titles, addresses, signatures
          const last = pieces[pieces.length - 1];
          if (last && !last.tab) last.text = last.text.replace(/\s+$/, '');
          pieces.push({ text: '', r: line.runs[0], br: true });
        } else {
          // join wrapped lines
          const last = pieces[pieces.length - 1];
          const next = line.runs.find((r) => r.str.trim());
          const nextCh = next?.str.trim()[0] ?? '';
          if (last && !last.tab) {
            const t = last.text;
            if (/\p{L}-$/u.test(t) && /^\p{Ll}/u.test(nextCh)) last.text = t.slice(0, -1);
            else if (/\s$/.test(t) || (CJK_RE.test(t.slice(-1)) && CJK_RE.test(nextCh))) { /* no space */ }
            else last.text += ' ';
          }
        }
      }
      let prev: Run | null = null;
      let prevInk: Run | null = null;
      line.runs.forEach((r, ri) => {
        let text = cleanText(r.str);
        // a wide blank in a monospaced line stands for several spaces (code indentation)
        if (!text.trim() && r.font.mono && r.x1 - r.x0 > r.size * 0.9) text = ' '.repeat(Math.max(1, Math.round((r.x1 - r.x0) / (r.size * 0.6))));
        if (li === 0 && ri === 0) text = text.replace(/^\s+/, '');
        if (prev && text && !/^\s/.test(text) && !/\s$/.test(prev.str)) {
          const gap = r.x0 - prev.x1;
          if (gap > Math.min(r.size, prev.size) * 0.18 && !(CJK_RE.test(text[0]) && CJK_RE.test(prev.str.slice(-1)))) {
            text = (r.font.mono && prev.font.mono ? ' '.repeat(Math.max(1, Math.round(gap / (r.size * 0.6)))) : ' ') + text;
          }
        }
        // bullet followed by a gap → bullet, tab, text (hanging indent)
        if (p.list && li === 0 && !bulletTab && prevInk && text.trim() && BULLET_TOKEN.test(pieces.map((x) => x.text).join(''))) {
          const gap = r.x0 - prevInk.x1;
          if (gap > r.size * 0.3) {
            const lp = pieces[pieces.length - 1];
            if (lp && !lp.tab) lp.text = lp.text.replace(/\s+$/, '');
            pieces.push({ text: '', r, tab: true });
            text = text.replace(/^\s+/, '');
            bulletTab = true;
          }
        }
        if (bulletTab && pieces.length && pieces[pieces.length - 1].tab) text = text.replace(/^\s+/, '');
        push(text, r);
        prev = r;
        if (r.str.trim()) prevInk = r;
      });
    });
    // trim trailing spaces
    const lastP = pieces[pieces.length - 1];
    if (lastP && !lastP.tab) lastP.text = lastP.text.replace(/\s+$/, '');
    (p as ParaBlock & { _bulletTab?: boolean })._bulletTab = bulletTab;

    const out: (InstanceType<Docx['TextRun']> | InstanceType<Docx['ExternalHyperlink']>)[] = [];
    for (const pc of pieces) {
      if (pc.tab) { out.push(new d.TextRun({ children: [new d.Tab()] })); continue; }
      if (pc.br) { out.push(new d.TextRun({ break: 1 })); continue; }
      if (!pc.text) continue;
      const r = pc.r;
      const onDark = this.darkBg || (!!r.bg && !isNearWhite(r.bg) && isDark(r.bg));
      let color = r.color && r.color !== '000000' ? (isNearWhite(r.color) && !onDark ? '000000' : r.color) : undefined;
      if (r.link && !color) color = '000000';
      const tr = new d.TextRun({
        text: pc.text,
        font: this.font(r),
        size: Math.max(2, Math.round(r.size * 2 * (r.script ? 1.5 : 1))),
        bold: r.font.bold || undefined,
        italics: r.font.italic || undefined,
        color,
        underline: r.underline ? { type: d.UnderlineType.SINGLE } : undefined,
        strike: r.strike || undefined,
        shading: r.bg ? { type: d.ShadingType.CLEAR, fill: r.bg, color: 'auto' } : undefined,
        superScript: r.script === 1 || undefined,
        subScript: r.script === -1 || undefined,
        rightToLeft: r.rtl || undefined,
      });
      if (r.link) out.push(new d.ExternalHyperlink({ link: r.link, children: [tr] }));
      else out.push(tr);
    }
    return out;
  }

  para(p: ParaBlock, left: number, right: number) {
    const d = this.d;
    const children = this.textRuns(p);
    const bulletTab = (p as ParaBlock & { _bulletTab?: boolean })._bulletTab;
    // indents were measured from the analysed flow; re-base them on this container's left edge
    const shift = p.flowLeft - left;
    let indentLeft = Math.max(0, p.indent + shift);
    let firstLine = p.firstLine;
    if (bulletTab && p.lines.length === 1) {
      // single-line list item: hang the bullet
      const runs = p.lines[0].runs.filter((r) => r.str.trim());
      const textStart = runs[1]?.x0 ?? p.x0;
      indentLeft = Math.max(0, textStart - left);
      firstLine = Math.min(0, p.x0 - textStart);
    } else if (bulletTab && firstLine >= 0) {
      firstLine = -Math.max(0, firstLine);
    }
    const align = { left: d.AlignmentType.LEFT, center: d.AlignmentType.CENTER, right: d.AlignmentType.RIGHT, justify: d.AlignmentType.JUSTIFIED }[p.align];
    const tabStops = p.tabs?.map((t) => ({
      type: t.align === 'right' ? d.TabStopType.RIGHT : d.TabStopType.LEFT,
      position: twip(Math.max(0, t.align === 'right' ? Math.min(t.pos + shift, right - left) : t.pos + shift)),
    }));
    if (bulletTab && indentLeft > 0) (tabStops ?? []).push({ type: d.TabStopType.LEFT, position: twip(indentLeft) });
    const heading = p.heading ? [d.HeadingLevel.HEADING_1, d.HeadingLevel.HEADING_2, d.HeadingLevel.HEADING_3][p.heading - 1] : undefined;
    const line = p.pitch > 0 ? { line: twip(p.pitch), lineRule: exactPitch(p) ? d.LineRuleType.EXACT : d.LineRuleType.AT_LEAST } : {};
    return new d.Paragraph({
      children,
      heading,
      alignment: align,
      indent: p.tabs ? { left: twip(indentLeft) } : {
        left: twip(indentLeft),
        ...(firstLine < 0 ? { hanging: twip(-firstLine) } : firstLine > 0 ? { firstLine: twip(firstLine) } : {}),
      },
      tabStops: tabStops?.length ? tabStops : bulletTab ? [{ type: d.TabStopType.LEFT, position: twip(indentLeft) }] : undefined,
      spacing: { before: twip(Math.min(p.spaceBefore, 200)), after: 0, ...line },
      keepNext: p.heading ? true : undefined,
      border: p.borderBottom || p.borderTop ? {
        ...(p.borderBottom ? { bottom: { style: d.BorderStyle.SINGLE, size: Math.max(2, Math.round(p.borderBottom.w * 8)), color: p.borderBottom.color, space: Math.min(31, Math.round(p.borderBottom.space)) } } : {}),
        ...(p.borderTop ? { top: { style: d.BorderStyle.SINGLE, size: Math.max(2, Math.round(p.borderTop.w * 8)), color: p.borderTop.color, space: Math.min(31, Math.round(p.borderTop.space)) } } : {}),
      } : undefined,
    });
  }

  private image(b: ImageBlock, left: number, right: number) {
    const d = this.d;
    const pic = this.pics.get(b);
    if (!pic) return null;
    const width = right - left;
    const center = (b.x0 + b.x1) / 2;
    let alignment: (typeof d.AlignmentType)[keyof typeof d.AlignmentType] = d.AlignmentType.LEFT;
    let indent = Math.max(0, b.x0 - left);
    if (Math.abs(center - (left + right) / 2) < width * 0.03 && b.x0 > left + 4) { alignment = d.AlignmentType.CENTER; indent = 0; }
    else if (Math.abs(b.x1 - right) < 4 && b.x0 > left + width * 0.2) { alignment = d.AlignmentType.RIGHT; indent = 0; }
    const wPt = Math.min(pic.wPt, width + 2);
    const hPt = pic.hPt * (wPt / pic.wPt);
    return new d.Paragraph({
      alignment,
      indent: { left: twip(indent) },
      spacing: { before: twip(Math.min(b.spaceBefore, 200)), after: 0, line: 240, lineRule: d.LineRuleType.AUTO },
      children: [new d.ImageRun({ type: pic.type, data: pic.data, transformation: { width: px(wPt), height: px(hPt) } })],
    });
  }

  private floatImage(b: ImageBlock) {
    const d = this.d;
    const pic = this.pics.get(b);
    if (!pic) return null;
    return new d.ImageRun({
      type: pic.type,
      data: pic.data,
      transformation: { width: px(pic.wPt), height: px(pic.hPt) },
      floating: {
        horizontalPosition: { relative: d.HorizontalPositionRelativeFrom.PAGE, offset: emu(b.x0) },
        verticalPosition: { relative: d.VerticalPositionRelativeFrom.PAGE, offset: emu(b.top) },
        allowOverlap: true,
        behindDocument: !!b.behind,
        lockAnchor: true,
        wrap: b.behind ? { type: d.TextWrappingType.NONE } : { type: d.TextWrappingType.SQUARE, side: d.TextWrappingSide.BOTH_SIDES },
        margins: { top: 0, bottom: 0, left: emu(4), right: emu(4) },
      },
    });
  }

  private table(t: TableBlock, left: number) {
    const d = this.d;
    const nc = t.cols.length - 1;
    const nr = t.rowsY.length - 1;
    const colW = t.cols.slice(1).map((x, i) => Math.max(1, x - t.cols[i]));
    const none = { style: d.BorderStyle.NONE, size: 0, color: 'auto' };
    const line = { style: d.BorderStyle.SINGLE, size: Math.max(2, Math.min(48, Math.round(t.borderWidth * 8))), color: t.borderColor || '000000' };
    const rows: InstanceType<Docx['TableRow']>[] = [];
    for (let r = 0; r < nr; r++) {
      const cells = t.cells.filter((c) => c.r === r).sort((a, b) => a.c - b.c);
      const tcells = cells.map((c) => {
        const x0 = t.cols[c.c], x1 = t.cols[c.c + c.colSpan];
        const prevDark = this.darkBg;
        this.darkBg = !!c.fill && !isNearWhite(c.fill);
        let kids = this.blocks(c.blocks, x0 + 2, x1 - 2);
        this.darkBg = prevDark;
        if (!kids.length || !(kids[kids.length - 1] instanceof d.Paragraph)) kids = [...kids, new d.Paragraph({})];
        let borders;
        if (c.borders) {
          const bd = (e: { w: number; color: string } | null) => (e ? { style: d.BorderStyle.SINGLE, size: Math.max(2, Math.min(48, Math.round(e.w * 8))), color: e.color || '000000' } : none);
          borders = { top: bd(c.borders.top), bottom: bd(c.borders.bottom), left: bd(c.borders.left), right: bd(c.borders.right) };
        } else if (t.ruled) borders = { top: line, bottom: line, left: line, right: line };
        else {
          const top = t.hRules?.includes(c.r) ? line : none;
          const bottom = t.hRules?.includes(c.r + c.rowSpan) ? line : none;
          borders = { top, bottom, left: none, right: none };
        }
        return new d.TableCell({
          children: kids,
          columnSpan: c.colSpan > 1 ? c.colSpan : undefined,
          rowSpan: c.rowSpan > 1 ? c.rowSpan : undefined,
          width: { size: twip(x1 - x0), type: d.WidthType.DXA },
          shading: c.fill ? { fill: c.fill, type: d.ShadingType.CLEAR, color: 'auto' } : undefined,
          verticalAlign: c.vAlign === 'center' ? d.VerticalAlignTable.CENTER : c.vAlign === 'bottom' ? d.VerticalAlignTable.BOTTOM : d.VerticalAlignTable.TOP,
          borders,
          margins: { top: 0, bottom: 0, left: 40, right: 40 },
        });
      });
      rows.push(new d.TableRow({
        children: tcells,
        height: { value: twip(Math.min(400, Math.max(4, t.rowsY[r + 1] - t.rowsY[r]))), rule: d.HeightRule.ATLEAST },
        cantSplit: t.rowsY[r + 1] - t.rowsY[r] < 120 || undefined,
      }));
    }
    if (!rows.length) return [];
    const table = new d.Table({
      rows,
      columnWidths: colW.map(twip),
      width: { size: twip(colW.reduce((a, b) => a + b, 0)), type: d.WidthType.DXA },
      layout: d.TableLayoutType.FIXED,
      indent: t.float ? undefined : { size: twip(Math.max(0, t.x0 - left - 2)), type: d.WidthType.DXA },
      float: t.float ? {
        horizontalAnchor: d.TableAnchorType.PAGE, verticalAnchor: d.TableAnchorType.PAGE,
        absoluteHorizontalPosition: twip(t.x0), absoluteVerticalPosition: twip(t.top),
        overlap: d.OverlapType.NEVER, leftFromText: 120, rightFromText: 120, topFromText: 0, bottomFromText: 60,
      } : undefined,
      borders: { top: none, bottom: none, left: none, right: none, insideHorizontal: none, insideVertical: none },
    });
    void nc;
    const spacer = t.spaceBefore > 3 && !t.float ? [new d.Paragraph({ spacing: { before: 0, after: 0, line: twip(Math.min(t.spaceBefore, 100)), lineRule: d.LineRuleType.EXACT }, children: [] })] : [];
    return [...spacer, table];
  }

  private columns(c: ColumnsBlock, left: number) {
    const d = this.d;
    const none = { style: d.BorderStyle.NONE, size: 0, color: 'auto' };
    const cells = c.cols.map((col) => {
      let kids = this.blocks(col.blocks, col.x0 + (col === c.cols[0] ? 0 : 4), col.x1 - (col === c.cols[c.cols.length - 1] ? 0 : 4));
      if (!kids.length || !(kids[kids.length - 1] instanceof d.Paragraph)) kids = [...kids, new d.Paragraph({})];
      return new d.TableCell({
        children: kids,
        width: { size: twip(col.x1 - col.x0), type: d.WidthType.DXA },
        borders: { top: none, bottom: none, left: none, right: none },
        margins: { top: 0, bottom: 0, left: col === c.cols[0] ? 0 : 80, right: col === c.cols[c.cols.length - 1] ? 0 : 80 },
      });
    });
    const table = new d.Table({
      rows: [new d.TableRow({ children: cells })],
      columnWidths: c.cols.map((col) => twip(col.x1 - col.x0)),
      width: { size: twip(c.x1 - c.x0), type: d.WidthType.DXA },
      layout: d.TableLayoutType.FIXED,
      indent: { size: twip(Math.max(0, c.x0 - left)), type: d.WidthType.DXA },
      borders: { top: none, bottom: none, left: none, right: none, insideHorizontal: none, insideVertical: none },
    });
    const spacer = c.spaceBefore > 3 ? [new d.Paragraph({ spacing: { before: 0, after: 0, line: twip(Math.min(c.spaceBefore, 100)), lineRule: d.LineRuleType.EXACT }, children: [] })] : [];
    return [...spacer, table];
  }
}

/** An empty paragraph of an exact height (vertical gap that must not collapse). */
function spacer(d: Docx, pt: number) {
  return new d.Paragraph({ spacing: { before: 0, after: 0, line: Math.max(1, twip(pt)), lineRule: d.LineRuleType.EXACT }, children: [] });
}

function sameFormat(a: Run, b: Run): boolean {
  return a.font.family === b.font.family && a.font.bold === b.font.bold && a.font.italic === b.font.italic
    && Math.abs(a.size - b.size) < 0.26 && a.color === b.color && !!a.underline === !!b.underline && a.script === b.script
    && a.link === b.link && a.rtl === b.rtl && !!a.strike === !!b.strike && a.bg === b.bg;
}

function isDark(hex: string): boolean {
  const v = parseInt(hex, 16);
  const r = (v >> 16) & 255, g = (v >> 8) & 255, b = v & 255;
  return 0.299 * r + 0.587 * g + 0.114 * b < 110;
}

function isNearWhite(hex: string): boolean {
  const v = parseInt(hex, 16);
  const r = (v >> 16) & 255, g = (v >> 8) & 255, b = v & 255;
  return r > 235 && g > 235 && b > 235;
}

export default run;
