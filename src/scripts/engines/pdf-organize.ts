import { PDFDocument, degrees } from 'pdf-lib';
import { loadPdf, savePdf } from '@/scripts/lib/pdf';
import { UserError, withExt, baseName, type Engine } from '@/scripts/runtime/types';

// Rebuild a PDF from the page order/rotation chosen in the organize UI.
const run: Engine = async ({ files, options, progress }) => {
  const file = files[0];
  const plan: { i: number; r: number }[] = JSON.parse(String(options.pages || '[]'));
  if (!plan.length) throw new UserError('options', '');
  const src = await loadPdf(file);
  progress(0.3);
  const out = await PDFDocument.create();
  const copied = await out.copyPages(src, plan.map((p) => p.i));
  copied.forEach((page, k) => {
    if (plan[k].r) page.setRotation(degrees((page.getRotation().angle + plan[k].r) % 360));
    out.addPage(page);
  });
  progress(0.8);
  const blob = await savePdf(out);
  progress(1);
  return [{ name: withExt(`${baseName(file.name)}-organized`, 'pdf'), blob }];
};

export default run;
