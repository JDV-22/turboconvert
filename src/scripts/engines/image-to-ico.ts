// Build a multi-size .ico (16–256 px, PNG-compressed entries, 32-bit with alpha).
// Non-square images are centred on a transparent square, never cropped or stretched.
import { decodeImage, renderToCanvas, type DecodedImage } from '@/scripts/lib/image-io';
import { baseName, extOf, throwIfAborted, type Engine } from '@/scripts/runtime/types';

const SIZES = [16, 32, 48, 64, 128, 256];
/** Always included even when upscaling: the classic favicon set. */
const BASE_SIZES = new Set([16, 32, 48]);

function pngBytes(canvas: HTMLCanvasElement): Promise<Uint8Array> {
  return new Promise((resolve, reject) => canvas.toBlob(async (b) => {
    if (!b) return reject(new Error('PNG encoding failed'));
    resolve(new Uint8Array(await b.arrayBuffer()));
  }, 'image/png'));
}

/** ICONDIR + ICONDIRENTRY[] followed by the PNG payloads. */
function buildIco(entries: { size: number; data: Uint8Array }[]): Blob {
  const header = new DataView(new ArrayBuffer(6 + 16 * entries.length));
  header.setUint16(0, 0, true); // reserved
  header.setUint16(2, 1, true); // type: icon
  header.setUint16(4, entries.length, true);
  let offset = header.byteLength;
  entries.forEach((e, i) => {
    const p = 6 + 16 * i;
    header.setUint8(p, e.size >= 256 ? 0 : e.size); // 0 means 256
    header.setUint8(p + 1, e.size >= 256 ? 0 : e.size);
    header.setUint8(p + 2, 0); // no palette
    header.setUint8(p + 3, 0);
    header.setUint16(p + 4, 1, true); // colour planes
    header.setUint16(p + 6, 32, true); // bits per pixel
    header.setUint32(p + 8, e.data.byteLength, true);
    header.setUint32(p + 12, offset, true);
    offset += e.data.byteLength;
  });
  return new Blob([header.buffer, ...entries.map((e) => e.data as BlobPart)], { type: 'image/x-icon' });
}

const run: Engine = async ({ files, progress, signal }) => {
  const file = files[0];
  let img: DecodedImage = await decodeImage(file);
  // Vector input: rasterise large enough for the 256 px entry.
  if (extOf(file.name) === 'svg' || file.type === 'image/svg+xml') {
    const long = Math.max(img.width, img.height);
    if (long < 512) img = await decodeImage(file, { svgScale: 512 / long });
  }
  progress(0.2);
  // Centre on a transparent square.
  const side = Math.max(img.width, img.height);
  const square = document.createElement('canvas');
  square.width = square.height = side;
  const sctx = square.getContext('2d')!;
  sctx.imageSmoothingQuality = 'high';
  sctx.drawImage(img.source as CanvasImageSource, Math.round((side - img.width) / 2), Math.round((side - img.height) / 2), img.width, img.height);
  if ('close' in img.source) (img.source as ImageBitmap).close();
  const squared: DecodedImage = { source: square, width: side, height: side };

  const sizes = SIZES.filter((s) => s <= side || BASE_SIZES.has(s));
  const entries: { size: number; data: Uint8Array }[] = [];
  for (const [i, size] of sizes.entries()) {
    throwIfAborted(signal);
    const c = renderToCanvas(squared, { width: size, height: size });
    entries.push({ size, data: await pngBytes(c) });
    c.width = c.height = 0;
    progress(0.2 + (0.8 * (i + 1)) / sizes.length);
  }
  square.width = square.height = 0;
  return [{ name: `${baseName(file.name)}.ico`, blob: buildIco(entries) }];
};

export default run;
