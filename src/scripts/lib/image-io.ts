import { UserError, extOf } from '@/scripts/runtime/types';

export type Drawable = ImageBitmap | HTMLImageElement | HTMLCanvasElement | OffscreenCanvas;

export interface DecodedImage {
  source: Drawable;
  width: number;
  height: number;
}

const MAX_PIXELS = 268_000_000; // ~16k × 16k, Chrome's canvas limit

async function decodeHeic(file: File): Promise<DecodedImage> {
  const mod = await import('libheif-js/libheif-wasm/libheif-bundle.mjs');
  const factory = mod.default as unknown as (opts?: object) => any;
  const lib = factory();
  if (lib.ready) await lib.ready;
  const decoder = new lib.HeifDecoder();
  const images = decoder.decode(new Uint8Array(await file.arrayBuffer()));
  if (!images?.length) throw new UserError('invalid', '');
  const img = images[0];
  const width = img.get_width();
  const height = img.get_height();
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;
  const data = ctx.createImageData(width, height);
  await new Promise<void>((resolve, reject) => {
    img.display(data, (out: ImageData | null) => (out ? resolve() : reject(new UserError('invalid', ''))));
  });
  ctx.putImageData(data, 0, 0);
  for (const i of images) i.free?.();
  return { source: canvas, width, height };
}

async function decodeTiff(file: File): Promise<DecodedImage> {
  const UTIF = (await import('utif')).default as any;
  const buf = await file.arrayBuffer();
  const ifds = UTIF.decode(buf);
  if (!ifds.length) throw new UserError('invalid', '');
  UTIF.decodeImage(buf, ifds[0]);
  const rgba = UTIF.toRGBA8(ifds[0]);
  const { width, height } = ifds[0];
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  canvas.getContext('2d')!.putImageData(new ImageData(new Uint8ClampedArray(rgba.buffer), width, height), 0, 0);
  return { source: canvas, width, height };
}

function loadImageElement(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.decoding = 'async';
    img.onload = () => resolve(img);
    img.onerror = () => reject(new UserError('invalid', ''));
    img.src = url;
  });
}

async function decodeSvg(file: File, scale: number): Promise<DecodedImage> {
  const text = await file.text();
  const url = URL.createObjectURL(new Blob([text], { type: 'image/svg+xml' }));
  try {
    const img = await loadImageElement(url);
    let w = img.naturalWidth || 0;
    let h = img.naturalHeight || 0;
    if (!w || !h) {
      const vb = text.match(/viewBox\s*=\s*["']\s*[-\d.]+[\s,]+[-\d.]+[\s,]+([\d.]+)[\s,]+([\d.]+)/i);
      w = vb ? parseFloat(vb[1]) : 512;
      h = vb ? parseFloat(vb[2]) : 512;
    }
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(w * scale);
    canvas.height = Math.round(h * scale);
    canvas.getContext('2d')!.drawImage(img, 0, 0, canvas.width, canvas.height);
    return { source: canvas, width: canvas.width, height: canvas.height };
  } finally {
    URL.revokeObjectURL(url);
  }
}

/** Decode any supported image file into something drawable on a canvas. */
export async function decodeImage(file: File, opts: { svgScale?: number } = {}): Promise<DecodedImage> {
  const ext = extOf(file.name);
  const type = file.type.toLowerCase();
  if (ext === 'heic' || ext === 'heif' || type.includes('heic') || type.includes('heif')) return decodeHeic(file);
  if (ext === 'tif' || ext === 'tiff' || type === 'image/tiff') return decodeTiff(file);
  if (ext === 'svg' || type === 'image/svg+xml') return decodeSvg(file, opts.svgScale ?? 1);
  try {
    const bmp = await createImageBitmap(file, { imageOrientation: 'from-image' });
    return { source: bmp, width: bmp.width, height: bmp.height };
  } catch {
    const url = URL.createObjectURL(file);
    try {
      const img = await loadImageElement(url);
      return { source: img, width: img.naturalWidth, height: img.naturalHeight };
    } finally {
      URL.revokeObjectURL(url);
    }
  }
}

export const MIME: Record<string, string> = {
  jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', webp: 'image/webp', avif: 'image/avif', gif: 'image/gif', bmp: 'image/bmp',
};

/** Draw an image to a canvas at the given size and encode it. */
export async function encodeImage(
  img: DecodedImage,
  format: 'jpg' | 'png' | 'webp',
  opts: { width?: number; height?: number; quality?: number; background?: string } = {},
): Promise<Blob> {
  const width = Math.max(1, Math.round(opts.width ?? img.width));
  const height = Math.max(1, Math.round(opts.height ?? img.height));
  if (width * height > MAX_PIXELS) throw new UserError('memory', `${width}×${height}px`);
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d', { alpha: format !== 'jpg' })!;
  if (format === 'jpg' || opts.background) {
    ctx.fillStyle = opts.background ?? '#ffffff';
    ctx.fillRect(0, 0, width, height);
  }
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  if (width < img.width / 2 || height < img.height / 2) {
    // Step down in halves for sharper downscaling.
    let src: Drawable = img.source;
    let w = img.width;
    let h = img.height;
    while (w / 2 > width && h / 2 > height) {
      w = Math.round(w / 2);
      h = Math.round(h / 2);
      const step = document.createElement('canvas');
      step.width = w;
      step.height = h;
      const sctx = step.getContext('2d')!;
      sctx.imageSmoothingQuality = 'high';
      sctx.drawImage(src as CanvasImageSource, 0, 0, w, h);
      src = step;
    }
    ctx.drawImage(src as CanvasImageSource, 0, 0, width, height);
  } else {
    ctx.drawImage(img.source as CanvasImageSource, 0, 0, width, height);
  }
  const q = opts.quality !== undefined ? Math.min(1, Math.max(0.01, opts.quality / 100)) : undefined;
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, MIME[format], format === 'png' ? undefined : q));
  canvas.width = canvas.height = 0;
  if (!blob) throw new UserError('memory', '');
  return blob;
}
