import { PDFDocument } from 'pdf-lib';
import { decodeImage } from '@/scripts/lib/image-io';
import { savePdf } from '@/scripts/lib/pdf';
import { FULL_QUAD, processScan, toCanvas, type Quad, type ScanFilter } from '@/scripts/lib/scan';
import { UserError, baseName, throwIfAborted, type Engine } from '@/scripts/runtime/types';

// Photos of paper documents → one PDF: each photo is straightened from the
// corners chosen in the scan UI, rotated, cleaned with a "scanner" filter and
// placed on its own page, in the order of the file list.

const PAGE: Record<string, [number, number]> = { a4: [595.28, 841.89], letter: [612, 792] };
// Long side of the straightened page (px) and JPEG quality per output setting.
const QUALITY: Record<string, { side: number; q: number }> = {
  high: { side: 2480, q: 0.85 },   // ≈ 300 dpi on A4
  medium: { side: 1754, q: 0.75 }, // ≈ 150 dpi on A4
  small: { side: 1240, q: 0.6 },   // ≈ 100 dpi on A4, smallest files
};
const FILTERS: ScanFilter[] = ['enhanced', 'bw', 'gray', 'original'];

const run: Engine = async ({ files, options, progress, signal }) => {
  const plan: { c?: Quad; r?: number }[] = JSON.parse(String(options.pages || '[]'));
  const filter = (FILTERS.includes(options.filter as ScanFilter) ? options.filter : 'enhanced') as ScanFilter;
  const quality = QUALITY[String(options.quality)] ?? QUALITY.medium;
  const size = String(options.pageSize || 'a4');
  if (!files.length) throw new UserError('empty', '');

  const doc = await PDFDocument.create();
  for (let i = 0; i < files.length; i++) {
    throwIfAborted(signal);
    progress(i / files.length);
    const step = plan[i] ?? {};
    const decoded = await decodeImage(files[i]);
    // Work at a bit more than the output resolution so the warp stays sharp.
    const src = toCanvas(decoded.source, decoded.width, decoded.height, Math.round(quality.side * 1.4));
    if ('close' in decoded.source && typeof decoded.source.close === 'function') decoded.source.close();
    const page = processScan(src, step.c ?? FULL_QUAD, step.r ?? 0, filter, quality.side);
    src.width = src.height = 0;
    const blob = await new Promise<Blob>((res, rej) => page.toBlob((b) => (b ? res(b) : rej(new UserError('memory', ''))), 'image/jpeg', quality.q));
    const img = await doc.embedJpg(await blob.arrayBuffer());
    const iw = page.width, ih = page.height;
    page.width = page.height = 0;

    let pw: number, ph: number;
    if (size === 'fit') {
      // Same proportions as the scan, long side of an A4 page.
      const k = 841.89 / Math.max(iw, ih);
      pw = iw * k; ph = ih * k;
    } else {
      [pw, ph] = PAGE[size] ?? PAGE.a4;
      if (iw > ih) [pw, ph] = [ph, pw];
    }
    const k = Math.min(pw / iw, ph / ih);
    const w = iw * k, h = ih * k;
    doc.addPage([pw, ph]).drawImage(img, { x: (pw - w) / 2, y: (ph - h) / 2, width: w, height: h });
    progress((i + 1) / files.length);
  }
  const blob = await savePdf(doc);
  const name = files.length === 1 ? `${baseName(files[0].name)}-scan.pdf` : 'scan.pdf';
  return [{ name, blob }];
};

export default run;
