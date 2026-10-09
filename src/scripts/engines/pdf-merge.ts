import { PDFDocument } from 'pdf-lib';
import { loadPdf, savePdf } from '@/scripts/lib/pdf';
import { throwIfAborted, type Engine } from '@/scripts/runtime/types';

// Merge PDFs in the order chosen by the user.
const run: Engine = async ({ files, progress, signal }) => {
  const out = await PDFDocument.create();
  for (let i = 0; i < files.length; i++) {
    throwIfAborted(signal);
    const src = await loadPdf(files[i]);
    const pages = await out.copyPages(src, src.getPageIndices());
    pages.forEach((p) => out.addPage(p));
    progress((i + 1) / (files.length + 1));
  }
  const blob = await savePdf(out);
  progress(1);
  return [{ name: 'merged.pdf', blob }];
};

export default run;
