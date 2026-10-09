import { openPdfJs, closePdfJs, renderPage, safeScale, canvasToBlob } from '@/scripts/lib/pdf-js';
import { baseName, throwIfAborted, type Engine, type EngineOutput } from '@/scripts/runtime/types';

/** Write the resolution into the file so it prints at the page's real size. */
async function withDpi(blob: Blob, dpi: number, png: boolean): Promise<Blob> {
  const b = new Uint8Array(await blob.arrayBuffer());
  if (!png) {
    // JFIF APP0: FFD8 FFE0 len 'JFIF\0' ver(2) units(1) xdens(2) ydens(2)
    if (b[2] === 0xff && b[3] === 0xe0 && b[6] === 0x4a && b[7] === 0x46 && b[8] === 0x49 && b[9] === 0x46) {
      b[13] = 1;
      b[14] = dpi >> 8; b[15] = dpi & 255;
      b[16] = dpi >> 8; b[17] = dpi & 255;
    }
    return new Blob([b as BlobPart], { type: 'image/jpeg' });
  }
  // PNG: insert a pHYs chunk right after IHDR (8-byte signature + 25-byte IHDR).
  const ppm = Math.round(dpi / 0.0254);
  const chunk = new Uint8Array(21);
  const dv = new DataView(chunk.buffer);
  dv.setUint32(0, 9);
  chunk.set([0x70, 0x48, 0x59, 0x73], 4);
  dv.setUint32(8, ppm);
  dv.setUint32(12, ppm);
  chunk[16] = 1;
  dv.setUint32(17, crc32(chunk.subarray(4, 17)));
  return new Blob([b.subarray(0, 33), chunk, b.subarray(33)] as BlobPart[], { type: 'image/png' });
}

let crcTable: Uint32Array | null = null;
function crc32(data: Uint8Array): number {
  if (!crcTable) {
    crcTable = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      crcTable[n] = c >>> 0;
    }
  }
  let c = 0xffffffff;
  for (const x of data) c = crcTable[(c ^ x) & 255] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

// One image per PDF page, rendered with pdf.js at the chosen DPI.
const run: Engine = async ({ files, options, params, progress, signal }) => {
  const file = files[0];
  const format = String(params.format ?? options.format ?? 'jpg') === 'png' ? 'png' : 'jpg';
  const dpi = Math.min(600, Math.max(36, Number(options.dpi) || 150));
  const quality = Math.min(100, Math.max(10, Number(options.quality) || 90)) / 100;
  const doc = await openPdfJs(file);
  try {
    const n = doc.numPages;
    const pad = Math.max(2, String(n).length);
    const base = baseName(file.name);
    const out: EngineOutput[] = [];
    for (let i = 1; i <= n; i++) {
      throwIfAborted(signal);
      const page = await doc.getPage(i);
      const scale = safeScale(page, dpi / 72);
      const { canvas } = await renderPage(page, scale);
      const raw = format === 'png' ? await canvasToBlob(canvas, 'image/png') : await canvasToBlob(canvas, 'image/jpeg', quality);
      const blob = await withDpi(raw, Math.round(scale * 72), format === 'png');
      canvas.width = canvas.height = 0;
      page.cleanup();
      out.push({ name: `${base}-page-${String(i).padStart(pad, '0')}.${format}`, blob });
      progress(i / n);
    }
    return out;
  } finally {
    await closePdfJs(doc);
  }
};

export default run;
