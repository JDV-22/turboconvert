// Word (DOCX) → PDF. Pages are laid out by docx-preview at their real size and
// painted as high-resolution images, with an invisible text layer so the text
// stays selectable and searchable (works for any script).
import { PDFDocument } from 'pdf-lib';
import { renderDocx } from '@/scripts/lib/office-docx-render';
import { addTextLayer } from '@/scripts/lib/office-textlayer';
import { canvasToBlob, freeCanvas } from '@/scripts/lib/office-common';
import { savePdf } from '@/scripts/lib/pdf';
import { withExt, type Engine } from '@/scripts/runtime/types';

const run: Engine = async ({ files, progress, signal }) => {
  const file = files[0];
  const pdf = await PDFDocument.create();
  pdf.setTitle(file.name.replace(/\.docx$/i, ''));
  await renderDocx(file, {
    scale: 2, signal, progress: (r) => progress(r * 0.95),
    onPage: async (p) => {
      const blob = await canvasToBlob(p.canvas, 'image/jpeg', 0.9);
      freeCanvas(p.canvas);
      const img = await pdf.embedJpg(new Uint8Array(await blob.arrayBuffer()));
      const page = pdf.addPage([p.wPt, p.hPt]);
      page.drawImage(img, { x: 0, y: 0, width: p.wPt, height: p.hPt });
      addTextLayer(pdf, page, p.words);
    },
  });
  const blob = await savePdf(pdf);
  progress(1);
  return [{ name: withExt(file.name, 'pdf'), blob }];
};

export default run;
