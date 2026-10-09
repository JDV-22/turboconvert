import { decodeImage, encodeImage } from '@/scripts/lib/image-io';
import { withExt, type Engine } from '@/scripts/runtime/types';

// Convert one image to JPG, PNG or WebP. Target comes from params.to, or the
// user-selected "format" option when the tool lets them choose.
const run: Engine = async ({ files, options, params, progress }) => {
  const file = files[0];
  const to = String(options.format ?? params.to ?? 'jpg') as 'jpg' | 'png' | 'webp';
  progress(0.1);
  const img = await decodeImage(file, { svgScale: Number(options.scale ?? 1) });
  progress(0.6);
  const blob = await encodeImage(img, to, { quality: Number(options.quality ?? 92) });
  if ('close' in img.source) (img.source as ImageBitmap).close();
  progress(1);
  return [{ name: withExt(file.name, to), blob }];
};

export default run;
