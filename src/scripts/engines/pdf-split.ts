import { PDFDocument } from 'pdf-lib';
import { savePdf } from '@/scripts/lib/pdf';
import { loadPdfLenient } from '@/scripts/lib/pdf-qpdf';
import { msg } from '@/scripts/lib/pdf-msg';
import { UserError, baseName, parseRanges, throwIfAborted, type Engine, type EngineOutput } from '@/scripts/runtime/types';

// Split a PDF: one output per comma-separated range ("1-3, 5" → 2 files),
// or one PDF per page.
const run: Engine = async ({ files, options, progress, signal }) => {
  const file = files[0];
  const mode = String(options.mode ?? 'ranges');
  const src = await loadPdfLenient(file, signal);
  const count = src.getPageCount();
  const base = baseName(file.name);
  let groups: number[][];
  if (mode === 'every') {
    groups = src.getPageIndices().map((i) => [i]);
  } else {
    const input = String(options.ranges ?? '').trim();
    if (!input) throw new UserError('options', msg('rangesEmpty'));
    try {
      groups = parseRanges(input, count);
    } catch (e) {
      const part = e instanceof UserError ? e.message.replace(/[“”]/g, '') : input;
      throw new UserError('options', msg('rangesBad', { part, n: count }));
    }
    if (!groups.length) throw new UserError('options', msg('rangesEmpty'));
  }
  const pad = mode === 'every' ? String(count).length : 0;
  const label = (g: number[]) => {
    const a = String(g[0] + 1).padStart(pad, '0');
    const b = String(g[g.length - 1] + 1).padStart(pad, '0');
    return g.length === 1 ? `p${a}` : `p${a}-${b}`;
  };
  const out: EngineOutput[] = [];
  for (let i = 0; i < groups.length; i++) {
    throwIfAborted(signal);
    const doc = await PDFDocument.create();
    const pages = await doc.copyPages(src, groups[i]);
    pages.forEach((p) => doc.addPage(p));
    out.push({ name: `${base}-${label(groups[i])}.pdf`, blob: await savePdf(doc) });
    progress((i + 1) / groups.length);
  }
  return out;
};

export default run;
