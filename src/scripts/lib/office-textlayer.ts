// Builds PDFs whose pages are images with an invisible, selectable and
// searchable text layer on top (like OCR'd scans). The text uses a
// "glyphless" CID font: any Unicode text (accents, CJK, Arabic…) can be
// copied/searched without shipping font files.
import { PDFDocument, PDFName, PDFNumber, PDFString, PDFHexString, PDFArray, PDFDict, PDFRef, type PDFPage } from 'pdf-lib';

export interface TextBox {
  text: string;
  /** Box in page points, origin top-left. */
  x: number;
  y: number;
  w: number;
  h: number;
}

let fontRef: PDFRef | null = null;
let fontDoc: PDFDocument | null = null;

function glyphlessFont(doc: PDFDocument): PDFRef {
  if (fontRef && fontDoc === doc) return fontRef;
  const ctx = doc.context;
  // ToUnicode: CID = UTF-16 code unit, mapped to itself.
  let ranges = '';
  for (let hi = 0; hi < 256; hi++) {
    const h = hi.toString(16).padStart(2, '0');
    ranges += `<${h}00> <${h}ff> <${h}00>\n`;
  }
  const cmap = `/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo << /Registry (Adobe) /Ordering (UCS) /Supplement 0 >> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000> <ffff>\nendcodespacerange\n${'256 beginbfrange\n' + ranges + 'endbfrange\n'}endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend\n`;
  const toUnicode = ctx.register(ctx.flateStream(new TextEncoder().encode(cmap)));
  const descriptor = ctx.register(ctx.obj({
    Type: 'FontDescriptor', FontName: 'GlyphLessFont', Flags: 5, FontBBox: [0, 0, 500, 1000],
    ItalicAngle: 0, Ascent: 1000, Descent: 0, CapHeight: 1000, StemV: 80,
  }));
  const cidFont = ctx.register(ctx.obj({
    Type: 'Font', Subtype: 'CIDFontType2', BaseFont: 'GlyphLessFont',
    CIDSystemInfo: { Registry: PDFString.of('Adobe'), Ordering: PDFString.of('Identity'), Supplement: 0 },
    FontDescriptor: descriptor, DW: 500, CIDToGIDMap: 'Identity',
  }));
  const font = ctx.register(ctx.obj({
    Type: 'Font', Subtype: 'Type0', BaseFont: 'GlyphLessFont', Encoding: 'Identity-H',
    DescendantFonts: [cidFont], ToUnicode: toUnicode,
  }));
  fontRef = font;
  fontDoc = doc;
  return font;
}

function hex16(s: string): string {
  let out = '';
  for (let i = 0; i < s.length; i++) out += s.charCodeAt(i).toString(16).padStart(4, '0');
  return out;
}

/** Add an invisible text layer to a page (boxes in top-left points). */
export function addTextLayer(doc: PDFDocument, page: PDFPage, boxes: TextBox[]): void {
  if (!boxes.length) return;
  const font = glyphlessFont(doc);
  const H = page.getHeight();
  // register font in page resources
  const resources = page.node.Resources() ?? (page.node.set(PDFName.of('Resources'), doc.context.obj({})), page.node.Resources()!);
  let fonts = resources.lookupMaybe(PDFName.of('Font'), PDFDict);
  if (!fonts) { fonts = doc.context.obj({}); resources.set(PDFName.of('Font'), fonts); }
  fonts.set(PDFName.of('TCTxt'), font);
  let ops = 'BT\n3 Tr\n';
  for (const b of boxes) {
    const text = b.text.replace(/[\r\n\t]+/g, ' ');
    if (!text.trim() || b.w <= 0 || b.h <= 0) continue;
    const size = Math.max(1, b.h * 0.85);
    const natural = text.length * size * 0.5;
    const tz = Math.max(1, Math.min(1000, (b.w / natural) * 100));
    const baseY = H - (b.y + b.h * 0.8);
    ops += `/TCTxt ${size.toFixed(2)} Tf ${tz.toFixed(2)} Tz 1 0 0 1 ${b.x.toFixed(2)} ${baseY.toFixed(2)} Tm <${hex16(text)}> Tj\n`;
  }
  ops += 'ET\n';
  const stream = doc.context.flateStream(new TextEncoder().encode(ops));
  const ref = doc.context.register(stream);
  const contents = page.node.get(PDFName.of('Contents'));
  if (contents instanceof PDFArray) contents.push(ref);
  else if (contents) page.node.set(PDFName.of('Contents'), doc.context.obj([contents, ref]));
  else page.node.set(PDFName.of('Contents'), ref);
  void PDFNumber; void PDFHexString;
}

/** Collect word boxes of the visible text inside an element, relative to a frame rectangle (CSS px). */
export function collectWords(root: HTMLElement, frame: DOMRect, pxToPt: number): TextBox[] {
  const out: TextBox[] = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const range = document.createRange();
  let node: Node | null;
  while ((node = walker.nextNode())) {
    const t = node.textContent ?? '';
    if (!t.trim()) continue;
    const el = node.parentElement;
    if (el) {
      const cs = getComputedStyle(el);
      if (cs.visibility === 'hidden' || cs.display === 'none') continue;
    }
    const re = /\S+/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(t))) {
      range.setStart(node, m.index);
      range.setEnd(node, m.index + m[0].length);
      const rects = range.getClientRects();
      if (!rects.length) continue;
      // a word broken across lines yields several rects: keep the text on the first, widths summed approx.
      const r = rects[0];
      if (r.width <= 0 || r.height <= 0) continue;
      if (r.bottom < frame.top || r.top > frame.bottom || r.right < frame.left || r.left > frame.right) continue;
      out.push({ text: m[0] + ' ', x: (r.left - frame.left) * pxToPt, y: (r.top - frame.top) * pxToPt, w: (r.width + 3) * pxToPt, h: r.height * pxToPt });
    }
  }
  return out;
}
