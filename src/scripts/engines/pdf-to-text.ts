import { loadPdfJs, openPdfJs, closePdfJs } from '@/scripts/lib/pdf-js';
import { pageText, pageSeparator } from '@/scripts/lib/pdf-text';
import { msg } from '@/scripts/lib/pdf-msg';
import { UserError, baseName, throwIfAborted, type Engine } from '@/scripts/runtime/types';

// Extract the text layer of a PDF into a UTF-8 .txt file.
const run: Engine = async ({ files, progress, signal }) => {
  const file = files[0];
  const pdfjs = await loadPdfJs();
  const doc = await openPdfJs(file);
  try {
    const n = doc.numPages;
    const parts: string[] = [];
    let chars = 0;
    for (let i = 1; i <= n; i++) {
      throwIfAborted(signal);
      const page = await doc.getPage(i);
      const text = await pageText(page, pdfjs.Util);
      page.cleanup();
      chars += text.replace(/\s/g, '').length;
      parts.push(n > 1 ? `${pageSeparator(i, msg('page'))}\n\n${text}` : text);
      progress(i / n);
    }
    if (chars < 3) throw new UserError('empty', msg('noText'));
    const out = parts.join('\n\n\n').replace(/\n{4,}/g, '\n\n\n') + '\n';
    return [{ name: `${baseName(file.name)}.txt`, blob: new Blob([out], { type: 'text/plain;charset=utf-8' }) }];
  } finally {
    await closePdfJs(doc);
  }
};

export default run;
