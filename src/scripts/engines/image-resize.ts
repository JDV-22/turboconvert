// Resize an image by percentage, width or height (aspect ratio always kept).
// "Original" format keeps JPG/PNG/WebP; formats browsers cannot write fall back
// to JPG (HEIC, TIFF, BMP), PNG (GIF, ICO: keeps transparency) or WebP (AVIF).
import { decodeImage, encodeImage } from '@/scripts/lib/image-io';
import { mt } from '@/scripts/lib/media-i18n';
import { UserError, baseName, extOf, type Engine } from '@/scripts/runtime/types';

type Fmt = 'jpg' | 'png' | 'webp';

const ORIGINAL: Record<string, Fmt> = {
  jpg: 'jpg', jpeg: 'jpg', png: 'png', webp: 'webp', gif: 'png', ico: 'png', avif: 'webp',
  heic: 'jpg', heif: 'jpg', tif: 'jpg', tiff: 'jpg', bmp: 'jpg',
};

const run: Engine = async ({ files, options, progress }) => {
  const file = files[0];
  const ext = extOf(file.name);
  const by = String(options.by ?? 'percent');
  const value = Number(options.value);
  const max = by === 'percent' ? 1000 : 20000;
  if (options.value === '' || !Number.isFinite(value) || value <= 0 || value > max || !['percent', 'width', 'height'].includes(by)) {
    throw new UserError('options', mt('badNumber', { v: String(options.value ?? '') }));
  }
  const choice = String(options.format ?? 'original');
  const format: Fmt = choice === 'jpg' || choice === 'png' || choice === 'webp' ? choice : ORIGINAL[ext] ?? 'jpg';
  progress(0.1);
  const img = await decodeImage(file);
  progress(0.5);
  let w: number;
  let h: number;
  if (by === 'percent') {
    w = (img.width * value) / 100;
    h = (img.height * value) / 100;
  } else if (by === 'width') {
    w = value;
    h = (img.height * value) / img.width;
  } else {
    h = value;
    w = (img.width * value) / img.height;
  }
  w = Math.max(1, Math.round(w));
  h = Math.max(1, Math.round(h));
  const blob = await encodeImage(img, format, { width: w, height: h, quality: 92 });
  if ('close' in img.source) (img.source as ImageBitmap).close();
  progress(1);
  const outExt = format === 'jpg' && ext === 'jpeg' ? 'jpeg' : format;
  return [{ name: `${baseName(file.name)}-${w}x${h}.${outExt}`, blob }];
};

export default run;
