// PDF → PowerPoint (PPTX). One slide per page, slide size = page size. The page
// is rendered without its text as a high-resolution background picture, and the
// text is put back on top as editable text boxes (one per paragraph, original
// line breaks, font, size, colour, bold/italic) at the original positions.
import { openPdf } from '@/scripts/lib/office-pdfjs';
import { extractPage } from '@/scripts/lib/office-pdf-extract';
import { PageAnalyzer, lineText, lineMax, type Block, type ParaBlock } from '@/scripts/lib/office-pdf-layout';
import { renderPage } from '@/scripts/lib/office-pdf-render';
import { canvasToBlob, freeCanvas, yieldToUi } from '@/scripts/lib/office-common';
import { throwIfAborted, withExt, type Engine } from '@/scripts/runtime/types';

function blobToDataUrl(b: Blob): Promise<string> {
  return new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(String(r.result)); r.onerror = rej; r.readAsDataURL(b); });
}

function paras(blocks: Block[], out: ParaBlock[] = []): ParaBlock[] {
  for (const b of blocks) {
    if (b.kind === 'para') out.push(b);
    else if (b.kind === 'table') b.cells.forEach((c) => paras(c.blocks, out));
    else if (b.kind === 'columns') b.cols.forEach((c) => paras(c.blocks, out));
  }
  return out;
}

const run: Engine = async ({ files, progress, signal }) => {
  const file = files[0];
  const PptxGenJS = ((await import('pptxgenjs')) as unknown as { default: new () => import('pptxgenjs').default }).default;
  const { pdfjs, doc, close } = await openPdf(file, signal);
  const pptx = new PptxGenJS();
  try {
    const first = (await doc.getPage(1)).getViewport({ scale: 1 });
    // slide size in inches (PowerPoint limits: 1–56 in)
    const k = Math.min(1, 56 / (Math.max(first.width, first.height) / 72));
    const sw = Math.max(1, (first.width / 72) * k), sh = Math.max(1, (first.height / 72) * k);
    pptx.defineLayout({ name: 'PDF', width: sw, height: sh });
    pptx.layout = 'PDF';
    pptx.title = file.name.replace(/\.pdf$/i, '');
    const n = doc.numPages;
    for (let p = 1; p <= n; p++) {
      throwIfAborted(signal);
      const page = await doc.getPage(p);
      const vp = page.getViewport({ scale: 1 });
      const sx = sw / vp.width, sy = sh / vp.height; // inches per point (pages of other sizes are fitted)
      const pd = await extractPage(page, pdfjs, { images: false, graphics: false });
      // text that pdf.js draws as shapes (Type3 fonts) or invisible OCR text stays in the picture only
      const editable = pd.runs.filter((r) => !r.invisible && !r.font.type3);
      const slide = pptx.addSlide();
      const hidden = editable.length > 0;
      const { canvas } = await renderPage(page, { scale: 2, noText: hidden, maxPixels: 12_000_000 });
      const blob = await canvasToBlob(canvas, 'image/jpeg', 0.9);
      freeCanvas(canvas);
      slide.addImage({ data: await blobToDataUrl(blob), x: 0, y: 0, w: sw, h: sh });
      if (hidden) {
        const layout = new PageAnalyzer({ ...pd, runs: editable }, { headerFooter: false, columns: true }).analyze();
        const all = [...paras(layout.blocks), ...paras(layout.header), ...paras(layout.footer)];
        for (const para of all) {
          const lines = para.lines;
          const textRuns: import('pptxgenjs').default.TextProps[] = [];
          lines.forEach((l, li) => {
            l.runs.forEach((r, ri) => {
              let t = r.str;
              if (ri === 0 && li > 0) t = t.replace(/^\s+/, '');
              if (!t) return;
              const last = ri === l.runs.length - 1 && li < lines.length - 1;
              textRuns.push({
                text: t,
                options: {
                  fontFace: r.font.family, fontSize: Math.max(1, Math.round(r.size * k * 2) / 2), bold: r.font.bold, italic: r.font.italic,
                  color: r.color && r.color !== 'transparent' ? r.color.toUpperCase() : '000000', breakLine: last,
                  superscript: r.script === 1, subscript: r.script === -1,
                },
              });
            });
          });
          if (!textRuns.length || !lines.map(lineText).join('').trim()) continue;
          const size = Math.max(...lines.map(lineMax));
          const x0 = Math.min(...lines.map((l) => l.x0)), x1 = Math.max(...lines.map((l) => l.x1));
          const top = lines[0].base - size * 0.95, bottom = lines[lines.length - 1].base + size * 0.3;
          const pitch = lines.length > 1 ? (lines[lines.length - 1].base - lines[0].base) / (lines.length - 1) : size * 1.2;
          slide.addText(textRuns, {
            x: x0 * sx, y: top * sy, w: Math.max(0.2, (x1 - x0) * sx * 1.08 + 0.05), h: Math.max(0.1, (bottom - top) * sy),
            margin: 0, valign: 'top', wrap: false, fit: 'none',
            align: para.align === 'center' ? 'center' : para.align === 'right' ? 'right' : 'left',
            lineSpacing: Math.max(1, pitch * k), paraSpaceBefore: 0, paraSpaceAfter: 0,
          });
        }
      }
      page.cleanup();
      progress((p / n) * 0.9);
      await yieldToUi();
    }
  } finally {
    await close();
  }
  const out = (await pptx.write({ outputType: 'blob', compression: true })) as Blob;
  progress(1);
  return [{ name: withExt(file.name, 'pptx'), blob: new Blob([out], { type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' }) }];
};

export default run;
