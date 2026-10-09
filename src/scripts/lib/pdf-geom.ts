import type { PDFPage } from 'pdf-lib';

/**
 * A page as the reader sees it: crop box with /Rotate applied.
 * `toUser` maps a point in that displayed space (origin bottom-left, y up)
 * to pdf-lib user-space coordinates; anything drawn there must also be
 * rotated by `rotation` degrees (counter-clockwise) to appear upright.
 */
export interface DisplayFrame {
  width: number;
  height: number;
  rotation: number;
  toUser: (x: number, y: number) => { x: number; y: number };
}

export function displayFrame(page: PDFPage): DisplayFrame {
  const box = page.getCropBox();
  const rotation = (((page.getRotation().angle ?? 0) % 360) + 360) % 360;
  const { x: x0, y: y0, width: w, height: h } = box;
  switch (rotation) {
    case 90:
      return { width: h, height: w, rotation, toUser: (x, y) => ({ x: x0 + w - y, y: y0 + x }) };
    case 180:
      return { width: w, height: h, rotation, toUser: (x, y) => ({ x: x0 + w - x, y: y0 + h - y }) };
    case 270:
      return { width: h, height: w, rotation, toUser: (x, y) => ({ x: x0 + y, y: y0 + h - x }) };
    default:
      return { width: w, height: h, rotation: 0, toUser: (x, y) => ({ x: x0 + x, y: y0 + y }) };
  }
}
