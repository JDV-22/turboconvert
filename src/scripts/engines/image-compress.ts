// Compress images while keeping their format:
// - JPG → JPG and WebP → WebP: re-encoded at the chosen quality.
// - PNG (and BMP) → PNG: colour quantization to a ≤256-colour palette with
//   Floyd–Steinberg dithering (like TinyPNG), or lossless re-compression at 95%+.
// - AVIF → WebP (browsers cannot encode AVIF); kept only if smaller.
// The original file is returned whenever the result would not be smaller
// (unless the user asked for a resize).
import { canvasToBlob, decodeImage, renderToCanvas } from '@/scripts/lib/image-io';
import { mt } from '@/scripts/lib/media-i18n';
import { UserError, baseName, extOf, throwIfAborted, type Engine } from '@/scripts/runtime/types';

// @pdf-lib/upng (MIT, photopea's UPNG.js) ships as a default export, but its
// typings declare named exports; describe the parts we use.
interface KdNode { ind: number; est: { q: number[] } }
interface Upng {
  encode(bufs: ArrayBuffer[], w: number, h: number, ps: number): ArrayBuffer;
  quantize: {
    getKDtree(data: Uint8Array, ps: number): [KdNode, KdNode[]];
    getNearest(root: KdNode, r: number, g: number, b: number, a: number): KdNode;
  };
}
const loadUpng = async (): Promise<Upng> => ((await import('@pdf-lib/upng')) as unknown as { default: Upng }).default;

/** Quality slider → palette size (0 = lossless). */
function paletteSize(q: number): number {
  if (q >= 95) return 0;
  if (q >= 60) return 256;
  if (q >= 40) return 128;
  if (q >= 25) return 64;
  return 32;
}

const tick = () => new Promise<void>((r) => setTimeout(r, 0));

/**
 * Reduce an RGBA image to `colors` colours with Floyd–Steinberg dithering.
 * The palette comes from UPNG's KD-tree (variance-based splits); a small colour
 * cache keeps nearest-colour lookups fast on multi-megapixel images.
 */
async function quantize(UPNG: Upng, data: Uint8ClampedArray, w: number, h: number, colors: number, signal: AbortSignal): Promise<Uint8Array> {
  const n = w * h;
  // Normalise fully transparent pixels so they share one palette entry.
  for (let i = 0; i < n * 4; i += 4) if (data[i + 3] === 0) data[i] = data[i + 1] = data[i + 2] = 0;
  // Build the palette from at most ~1M sampled pixels.
  const stride = Math.max(1, Math.floor(n / 1_000_000));
  const sample = new Uint8Array(Math.ceil(n / stride) * 4);
  for (let p = 0, j = 0; p < n; p += stride, j += 4) sample.set(data.subarray(p * 4, p * 4 + 4), j);
  const [root, leafs] = UPNG.quantize.getKDtree(sample, colors);
  const nearest = UPNG.quantize.getNearest;
  const pal = leafs.map((l) => l.est.q.map((v) => Math.round(v * 255)));
  const cache = new Int16Array(1 << 18).fill(-1); // 5 bits per RGB + 3 bits alpha
  const lookup = (r: number, g: number, b: number, a: number): number => {
    const key = ((r >> 3) << 13) | ((g >> 3) << 8) | ((b >> 3) << 3) | (a >> 5);
    let idx = cache[key];
    if (idx < 0) {
      idx = nearest(root, r / 255, g / 255, b / 255, a / 255).ind;
      cache[key] = idx;
    }
    return idx;
  };
  const outBuf = new Uint8Array(n * 4);
  let errCur = new Float32Array((w + 2) * 3);
  let errNext = new Float32Array((w + 2) * 3);
  const clamp = (v: number) => (v < 0 ? 0 : v > 255 ? 255 : v);
  for (let y = 0; y < h; y++) {
    if ((y & 63) === 0) {
      await tick();
      throwIfAborted(signal);
    }
    errNext.fill(0);
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      const a = data[i + 3];
      if (a === 0) continue; // stays transparent black (outBuf is zeroed)
      const e = (x + 1) * 3;
      const r = clamp(data[i] + errCur[e]);
      const g = clamp(data[i + 1] + errCur[e + 1]);
      const b = clamp(data[i + 2] + errCur[e + 2]);
      const c = pal[lookup(r, g, b, a)];
      outBuf[i] = c[0]; outBuf[i + 1] = c[1]; outBuf[i + 2] = c[2]; outBuf[i + 3] = c[3];
      const er = r - c[0], eg = g - c[1], eb = b - c[2];
      // 7/16 right, 3/16 down-left, 5/16 down, 1/16 down-right
      errCur[e + 3] += er * 0.4375; errCur[e + 4] += eg * 0.4375; errCur[e + 5] += eb * 0.4375;
      errNext[e - 3] += er * 0.1875; errNext[e - 2] += eg * 0.1875; errNext[e - 1] += eb * 0.1875;
      errNext[e] += er * 0.3125; errNext[e + 1] += eg * 0.3125; errNext[e + 2] += eb * 0.3125;
      errNext[e + 3] += er * 0.0625; errNext[e + 4] += eg * 0.0625; errNext[e + 5] += eb * 0.0625;
    }
    [errCur, errNext] = [errNext, errCur];
  }
  return outBuf;
}

async function compressPng(canvas: HTMLCanvasElement, q: number, signal: AbortSignal, progress: (r: number) => void): Promise<Blob> {
  const UPNG = await loadUpng();
  const { width: w, height: h } = canvas;
  const data = canvas.getContext('2d')!.getImageData(0, 0, w, h).data;
  const colors = paletteSize(q);
  progress(0.4);
  const rgba = colors ? await quantize(UPNG, data, w, h, colors, signal) : new Uint8Array(data.buffer);
  progress(0.8);
  await tick();
  throwIfAborted(signal);
  // ps = 0: lossless encode; UPNG writes an indexed PNG when ≤ 256 colours remain.
  const png = UPNG.encode([rgba.buffer as ArrayBuffer], w, h, 0);
  return new Blob([png], { type: 'image/png' });
}

/**
 * Size-target mode ("compress to 50 KB"): binary-search the JPEG/WebP quality,
 * then downscale step by step if even low quality doesn't fit. Keeps the
 * sharpest result under the limit. PNG/BMP inputs are saved as JPG (a palette
 * PNG can't reach small targets for photos).
 */
async function compressToTarget(file: File, targetBytes: number, signal: AbortSignal, progress: (r: number) => void): Promise<Blob> {
  const ext = extOf(file.name);
  const format: 'jpg' | 'webp' = ext === 'webp' || ext === 'avif' ? 'webp' : 'jpg';
  const img = await decodeImage(file);
  let width = img.width;
  let height = img.height;
  let best: Blob | null = null;
  let smallest: Blob | null = null;
  for (let round = 0; round < 8 && !best; round++) {
    throwIfAborted(signal);
    const canvas = renderToCanvas(img, { width, height, alpha: format !== 'jpg', background: format === 'jpg' ? '#ffffff' : undefined });
    try {
      let lo = 30, hi = 92;
      for (let i = 0; i < 6 && lo <= hi; i++) {
        const q = Math.round((lo + hi) / 2);
        const blob = await canvasToBlob(canvas, format, q);
        if (!smallest || blob.size < smallest.size) smallest = blob;
        if (blob.size <= targetBytes) { best = blob; lo = q + 1; } else hi = q - 1;
        progress(Math.min(0.95, 0.1 + (round * 6 + i) / 48));
      }
      if (!best) {
        const low = await canvasToBlob(canvas, format, 30);
        if (low.size <= targetBytes) best = low;
        else {
          const f = Math.max(0.35, Math.min(0.9, Math.sqrt(targetBytes / low.size) * 0.95));
          width = Math.max(16, Math.round(width * f));
          height = Math.max(16, Math.round(height * f));
        }
      }
    } finally {
      canvas.width = canvas.height = 0;
    }
  }
  if ('close' in img.source) (img.source as ImageBitmap).close();
  return best ?? smallest!;
}

const run: Engine = async ({ files, options, params, progress, signal }) => {
  const file = files[0];
  const ext = extOf(file.name);
  const targetKb = Number(options.target || params.target || 0);
  if (targetKb > 0) {
    const target = targetKb * 1024;
    if (file.size <= target) return [{ name: file.name, blob: file }];
    const blob = await compressToTarget(file, target, signal, progress);
    progress(1);
    const outExt = blob.type === 'image/webp' ? 'webp' : 'jpg';
    return [{ name: `${baseName(file.name)}-${targetKb}kb.${outExt}`, blob }];
  }
  const q = Math.min(100, Math.max(10, Number(options.quality ?? 75) || 75));
  let maxWidth = 0;
  if (options.maxWidth !== '' && options.maxWidth !== undefined) {
    maxWidth = Number(options.maxWidth);
    if (!Number.isInteger(maxWidth) || maxWidth < 1 || maxWidth > 20000) {
      throw new UserError('options', mt('badNumber', { v: String(options.maxWidth) }));
    }
  }
  const format: 'jpg' | 'png' | 'webp' = ext === 'jpg' || ext === 'jpeg' ? 'jpg' : ext === 'webp' || ext === 'avif' ? 'webp' : 'png';
  progress(0.05);
  const img = await decodeImage(file);
  let { width, height } = img;
  const resized = maxWidth > 0 && width > maxWidth;
  if (resized) {
    height = Math.max(1, Math.round((height * maxWidth) / width));
    width = maxWidth;
  }
  progress(0.2);
  const canvas = renderToCanvas(img, {
    width, height, alpha: format !== 'jpg', background: format === 'jpg' ? '#ffffff' : undefined,
  });
  if ('close' in img.source) (img.source as ImageBitmap).close();
  let blob: Blob;
  try {
    blob = format === 'png'
      ? await compressPng(canvas, q, signal, progress)
      : await canvasToBlob(canvas, format, q);
  } finally {
    canvas.width = canvas.height = 0;
  }
  progress(1);
  const outExt = format === 'jpg' ? (ext === 'jpeg' ? 'jpeg' : 'jpg') : format;
  // Never return a bigger file for the same pixels: keep the original instead.
  if (!resized && blob.size >= file.size) return [{ name: file.name, blob: file }];
  return [{ name: `${baseName(file.name)}.${outExt}`, blob }];
};

export default run;
