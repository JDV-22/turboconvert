import { PDFName, PDFRawStream, type PDFDocument, type PDFRef } from 'pdf-lib';

export interface EmbeddedImage { ref: PDFRef; width: number; height: number }

async function zlibAsync(data: Uint8Array): Promise<Uint8Array> {
  const { zlib } = await import('fflate');
  return new Promise((resolve, reject) => {
    zlib(data, { level: 6 }, (err, out) => (err ? reject(err) : resolve(out)));
  });
}

/**
 * Embed a canvas as a lossless (Flate) image, with a soft mask when it has
 * transparency. Compression runs in fflate's worker, so even big screenshots
 * don't freeze the page (pdf-lib's embedPng decodes and deflates on the main thread).
 */
export async function embedCanvasLossless(doc: PDFDocument, canvas: HTMLCanvasElement): Promise<EmbeddedImage> {
  const { width, height } = canvas;
  const px = canvas.getContext('2d')!.getImageData(0, 0, width, height).data;
  const n = width * height;
  const rgb = new Uint8Array(n * 3);
  const alpha = new Uint8Array(n);
  let transparent = false;
  for (let i = 0, j = 0; i < n; i++, j += 4) {
    rgb[i * 3] = px[j];
    rgb[i * 3 + 1] = px[j + 1];
    rgb[i * 3 + 2] = px[j + 2];
    const a = px[j + 3];
    alpha[i] = a;
    if (a !== 255) transparent = true;
  }
  const ctx = doc.context;
  const base = { Type: 'XObject', Subtype: 'Image', Width: width, Height: height, BitsPerComponent: 8, Filter: 'FlateDecode' };
  let smask: PDFRef | undefined;
  if (transparent) {
    const data = await zlibAsync(alpha);
    smask = ctx.register(PDFRawStream.of(ctx.obj({ ...base, ColorSpace: 'DeviceGray', Length: data.length }), data));
  }
  const data = await zlibAsync(rgb);
  const dict = ctx.obj({ ...base, ColorSpace: 'DeviceRGB', Length: data.length });
  if (smask) dict.set(PDFName.of('SMask'), smask);
  const ref = ctx.register(PDFRawStream.of(dict, data));
  return { ref, width, height };
}
