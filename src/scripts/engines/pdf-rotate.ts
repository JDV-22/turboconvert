import { degrees } from 'pdf-lib';
import { savePdf } from '@/scripts/lib/pdf';
import { loadPdfLenient } from '@/scripts/lib/pdf-qpdf';
import { baseName, type Engine } from '@/scripts/runtime/types';

// Rotate all, odd or even pages by 90/180/270° clockwise, on top of their
// current rotation. Lossless: only the page's /Rotate entry changes.
const run: Engine = async ({ files, options, progress, signal }) => {
  const file = files[0];
  const angle = Number(options.angle ?? 90);
  const which = String(options.pages ?? 'all');
  const doc = await loadPdfLenient(file, signal);
  progress(0.3);
  doc.getPages().forEach((page, i) => {
    const n = i + 1;
    if (which === 'odd' && n % 2 === 0) return;
    if (which === 'even' && n % 2 === 1) return;
    const current = page.getRotation().angle ?? 0;
    page.setRotation(degrees((((current + angle) % 360) + 360) % 360));
  });
  progress(0.6);
  const blob = await savePdf(doc);
  progress(1);
  return [{ name: `${baseName(file.name)}-rotated.pdf`, blob }];
};

export default run;
