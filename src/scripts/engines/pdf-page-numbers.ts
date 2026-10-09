import { StandardFonts, rgb, degrees } from 'pdf-lib';
import { savePdf } from '@/scripts/lib/pdf';
import { loadPdfLenient } from '@/scripts/lib/pdf-qpdf';
import { displayFrame } from '@/scripts/lib/pdf-geom';
import { msg } from '@/scripts/lib/pdf-msg';
import { baseName, throwIfAborted, type Engine } from '@/scripts/runtime/types';

// Stamp page numbers on every page, upright as the reader sees the page
// (rotation and crop box respected).
const run: Engine = async ({ files, options, progress, signal }) => {
  const file = files[0];
  const position = String(options.position ?? 'bottom-center');
  const ofTotal = String(options.format ?? 'n') === 'n-of-total';
  const startRaw = Number(options.start);
  const start = Number.isFinite(startRaw) && options.start !== '' ? Math.max(0, Math.floor(startRaw)) : 1;
  const doc = await loadPdfLenient(file, signal);
  progress(0.2);
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const pages = doc.getPages();
  const last = start + pages.length - 1;
  const of = msg('of');
  pages.forEach((page, i) => {
    if (i % 50 === 0) throwIfAborted(signal);
    const f = displayFrame(page);
    const short = Math.min(f.width, f.height);
    const size = Math.max(8, Math.min(14, short / 55));
    const margin = Math.max(18, Math.min(40, short / 22));
    const text = ofTotal ? `${start + i} ${of} ${last}` : String(start + i);
    const tw = font.widthOfTextAtSize(text, size);
    const x = position === 'bottom-center' ? (f.width - tw) / 2 : f.width - margin - tw;
    const y = position === 'top-right' ? f.height - margin - size * 0.72 : margin;
    const p = f.toUser(x, y);
    page.drawText(text, { x: p.x, y: p.y, size, font, color: rgb(0.13, 0.13, 0.13), rotate: degrees(f.rotation) });
  });
  progress(0.7);
  const blob = await savePdf(doc);
  progress(1);
  return [{ name: `${baseName(file.name)}-numbered.pdf`, blob }];
};

export default run;
