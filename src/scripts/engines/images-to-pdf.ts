import {
  PDFDocument, concatTransformationMatrix, drawObject, popGraphicsState, pushGraphicsState,
  type PDFPage, type PDFRef,
} from 'pdf-lib';
import { embedCanvasLossless, type EmbeddedImage } from '@/scripts/lib/pdf-image';
import { decodeImage } from '@/scripts/lib/image-io';
import { savePdf } from '@/scripts/lib/pdf';
import { msg } from '@/scripts/lib/pdf-msg';
import { UserError, baseName, extOf, throwIfAborted, type Engine } from '@/scripts/runtime/types';

// All images into one PDF, one image per page, in the user's order.
// JPEGs are embedded as-is (no quality loss) and turned upright from their
// EXIF orientation with a PDF transform. PNG, GIF and BMP stay lossless
// (transparency kept). Other formats (HEIC, WebP, AVIF, TIFF) are decoded by
// the browser and stored as JPEG 92 %, or lossless when they have transparency.

const PAGE: Record<string, [number, number]> = { a4: [595.28, 841.89], letter: [612, 792] };
const FIT_PX_TO_PT = 0.75; // 96 dpi
const FIT_MAX_SIDE = 1190; // ≈ A3 long side: big photos keep all pixels on a printable page
const MAX_PIXELS = 60_000_000;

/** EXIF orientation (1–8) of a JPEG, 1 when absent. */
function jpegOrientation(b: Uint8Array): number {
  if (b[0] !== 0xff || b[1] !== 0xd8) return 1;
  let i = 2;
  while (i + 4 < b.length) {
    if (b[i] !== 0xff) return 1;
    const marker = b[i + 1];
    const len = (b[i + 2] << 8) | b[i + 3];
    if (marker === 0xda || marker === 0xd9) return 1;
    if (marker === 0xe1 && b[i + 4] === 0x45 && b[i + 5] === 0x78 && b[i + 6] === 0x69 && b[i + 7] === 0x66) {
      const t = i + 10; // TIFF header
      const le = b[t] === 0x49;
      const u16 = (o: number) => (le ? b[o] | (b[o + 1] << 8) : (b[o] << 8) | b[o + 1]);
      const u32 = (o: number) => (le ? (b[o] | (b[o + 1] << 8) | (b[o + 2] << 16) | (b[o + 3] << 24)) >>> 0 : ((b[o] << 24) | (b[o + 1] << 16) | (b[o + 2] << 8) | b[o + 3]) >>> 0);
      const ifd = t + u32(t + 4);
      const n = u16(ifd);
      for (let k = 0; k < n; k++) {
        const e = ifd + 2 + k * 12;
        if (e + 10 > b.length) return 1;
        if (u16(e) === 0x0112) {
          const v = u16(e + 8);
          return v >= 1 && v <= 8 ? v : 1;
        }
      }
      return 1;
    }
    i += 2 + len;
  }
  return 1;
}

// Maps the image unit square (u, v) to the displayed unit square (X, Y):
// X = ax·u + cx·v + ex, Y = bx·u + dx·v + fx — one entry per EXIF orientation.
const ORIENT: Record<number, [number, number, number, number, number, number]> = {
  1: [1, 0, 0, 1, 0, 0],
  2: [-1, 0, 0, 1, 1, 0],
  3: [-1, 0, 0, -1, 1, 1],
  4: [1, 0, 0, -1, 0, 1],
  5: [0, -1, -1, 0, 1, 1],
  6: [0, -1, 1, 0, 0, 1],
  7: [0, 1, 1, 0, 0, 0],
  8: [0, 1, -1, 0, 1, 0],
};

function drawOriented(page: PDFPage, ref: PDFRef, orientation: number, x: number, y: number, w: number, h: number) {
  const [ax, bx, cx, dx, ex, fx] = ORIENT[orientation] ?? ORIENT[1];
  const name = page.node.newXObject('Image', ref);
  page.pushOperators(
    pushGraphicsState(),
    concatTransformationMatrix(w * ax, h * bx, w * cx, h * dx, x + w * ex, y + h * fx),
    drawObject(name),
    popGraphicsState(),
  );
}

function hasAlpha(ctx: CanvasRenderingContext2D, w: number, h: number): boolean {
  const data = ctx.getImageData(0, 0, w, h).data;
  for (let i = 3; i < data.length; i += 4) if (data[i] < 255) return true;
  return false;
}

async function embedViaCanvas(doc: PDFDocument, file: File, lossless: boolean): Promise<EmbeddedImage> {
  const img = await decodeImage(file);
  let { width, height } = img;
  if (width * height > MAX_PIXELS) {
    const k = Math.sqrt(MAX_PIXELS / (width * height));
    width = Math.floor(width * k);
    height = Math.floor(height * k);
  }
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img.source as CanvasImageSource, 0, 0, width, height);
  if ('close' in img.source) (img.source as ImageBitmap).close();
  try {
    if (lossless || hasAlpha(ctx, width, height)) return await embedCanvasLossless(doc, canvas);
    const blob = await new Promise<Blob | null>((r) => canvas.toBlob(r, 'image/jpeg', 0.92));
    if (!blob) throw new UserError('memory', msg('tooLarge'));
    const image = await doc.embedJpg(await blob.arrayBuffer());
    return { ref: image.ref, width: image.width, height: image.height };
  } finally {
    canvas.width = canvas.height = 0;
  }
}

const run: Engine = async ({ files, options, progress, signal }) => {
  const size = PAGE[String(options.pageSize ?? 'fit')];
  const margin = Math.max(0, Number(options.margin ?? 0) || 0);
  const doc = await PDFDocument.create();
  for (let i = 0; i < files.length; i++) {
    throwIfAborted(signal);
    const file = files[i];
    const ext = extOf(file.name);
    const type = file.type.toLowerCase();
    let image: EmbeddedImage;
    let orientation = 1;
    try {
      if (ext === 'jpg' || ext === 'jpeg' || type === 'image/jpeg') {
        const bytes = new Uint8Array(await file.arrayBuffer());
        try {
          const jpg = await doc.embedJpg(bytes);
          image = { ref: jpg.ref, width: jpg.width, height: jpg.height };
          orientation = jpegOrientation(bytes);
        } catch {
          image = await embedViaCanvas(doc, file, false); // unusual JPEG (e.g. arithmetic coding)
        }
      } else {
        image = await embedViaCanvas(doc, file, ['png', 'gif', 'bmp'].includes(ext) || /png|gif|bmp/.test(type));
      }
    } catch (e) {
      if ((e as Error)?.name === 'AbortError') throw e;
      console.error(e);
      // Never drop a page silently: say which image is the problem.
      throw new UserError(e instanceof UserError && e.code === 'memory' ? 'memory' : 'invalid', msg('imageUnreadable', { name: file.name }));
    }
    // Displayed size: orientations 5–8 swap width and height.
    const swap = orientation >= 5;
    const iw = swap ? image.height : image.width;
    const ih = swap ? image.width : image.height;
    let pw: number, ph: number, dw: number, dh: number;
    if (!size) {
      const k = Math.min(FIT_PX_TO_PT, FIT_MAX_SIDE / Math.max(iw, ih));
      dw = iw * k;
      dh = ih * k;
      pw = dw + 2 * margin;
      ph = dh + 2 * margin;
    } else {
      const landscape = iw > ih;
      [pw, ph] = landscape ? [size[1], size[0]] : size;
      const k = Math.min((pw - 2 * margin) / iw, (ph - 2 * margin) / ih);
      dw = iw * k;
      dh = ih * k;
    }
    const page = doc.addPage([pw, ph]);
    drawOriented(page, image.ref, orientation, (pw - dw) / 2, (ph - dh) / 2, dw, dh);
    progress((i + 1) / (files.length + 1));
  }
  doc.setTitle(files.length === 1 ? baseName(files[0].name) : 'Images', { showInWindowTitleBar: false });
  const blob = await savePdf(doc);
  progress(1);
  const name = files.length === 1 ? `${baseName(files[0].name)}.pdf` : 'images.pdf';
  return [{ name, blob }];
};

export default run;
