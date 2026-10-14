// Document-scan image processing, shared by the scan-to-PDF UI (previews) and
// engine (full size): perspective correction from 4 corners, 90° rotation and
// "scanner" filters that whiten the paper and darken the ink.

import type { Drawable } from '@/scripts/lib/image-io';

/** Corners as fractions of the source image: [tlx, tly, trx, try, brx, bry, blx, bly]. */
export type Quad = [number, number, number, number, number, number, number, number];
export type ScanFilter = 'enhanced' | 'bw' | 'gray' | 'original';

export const FULL_QUAD: Quad = [0, 0, 1, 0, 1, 1, 0, 1];

/** Output size (px) of the straightened page, before any downscale. */
export function quadSize(q: Quad, w: number, h: number): { w: number; h: number } {
  const p = (i: number) => [q[i * 2] * w, q[i * 2 + 1] * h];
  const d = (a: number[], b: number[]) => Math.hypot(a[0] - b[0], a[1] - b[1]);
  const [tl, tr, br, bl] = [p(0), p(1), p(2), p(3)];
  return { w: Math.max(d(tl, tr), d(bl, br)), h: Math.max(d(tl, bl), d(tr, br)) };
}

/** Square-to-quad projective mapping (Heckbert): unit (u, v) → source (x, y). */
function squareToQuad(xs: number[], ys: number[]) {
  const [x0, x1, x2, x3] = xs, [y0, y1, y2, y3] = ys;
  const dx3 = x0 - x1 + x2 - x3, dy3 = y0 - y1 + y2 - y3;
  let a, b, d, e, g = 0, h = 0;
  if (Math.abs(dx3) < 1e-9 && Math.abs(dy3) < 1e-9) {
    a = x1 - x0; b = x3 - x0; d = y1 - y0; e = y3 - y0;
  } else {
    const dx1 = x1 - x2, dx2 = x3 - x2, dy1 = y1 - y2, dy2 = y3 - y2;
    const den = dx1 * dy2 - dx2 * dy1 || 1e-9;
    g = (dx3 * dy2 - dx2 * dy3) / den;
    h = (dx1 * dy3 - dx3 * dy1) / den;
    a = x1 - x0 + g * x1; b = x3 - x0 + h * x3;
    d = y1 - y0 + g * y1; e = y3 - y0 + h * y3;
  }
  return { a, b, c: x0, d, e, f: y0, g, h };
}

/** Draw a source onto a canvas no larger than maxSide (keeps memory bounded). */
export function toCanvas(src: Drawable, w: number, h: number, maxSide: number): HTMLCanvasElement {
  const k = Math.min(1, maxSide / Math.max(w, h));
  const c = document.createElement('canvas');
  c.width = Math.max(1, Math.round(w * k));
  c.height = Math.max(1, Math.round(h * k));
  const ctx = c.getContext('2d')!;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(src as CanvasImageSource, 0, 0, c.width, c.height);
  return c;
}

/**
 * Straighten the quad of `src` into an upright rectangle whose long side is at
 * most `maxSide`, rotate it by `rot` quarter turns and apply `filter`.
 */
export function processScan(src: HTMLCanvasElement, q: Quad, rot: number, filter: ScanFilter, maxSide: number): HTMLCanvasElement {
  const sw = src.width, sh = src.height;
  const size = quadSize(q, sw, sh);
  const k = Math.min(1, maxSide / Math.max(size.w, size.h));
  const W = Math.max(1, Math.round(size.w * k)), H = Math.max(1, Math.round(size.h * k));
  const sdata = src.getContext('2d')!.getImageData(0, 0, sw, sh).data;
  const out = document.createElement('canvas');
  out.width = W; out.height = H;
  const octx = out.getContext('2d')!;
  const img = octx.createImageData(W, H);
  const o = img.data;
  const m = squareToQuad([q[0] * sw, q[2] * sw, q[4] * sw, q[6] * sw], [q[1] * sh, q[3] * sh, q[5] * sh, q[7] * sh]);
  for (let y = 0; y < H; y++) {
    const v = (y + 0.5) / H;
    for (let x = 0; x < W; x++) {
      const u = (x + 0.5) / W;
      const z = m.g * u + m.h * v + 1;
      let sx = (m.a * u + m.b * v + m.c) / z - 0.5;
      let sy = (m.d * u + m.e * v + m.f) / z - 0.5;
      sx = sx < 0 ? 0 : sx > sw - 1 ? sw - 1 : sx;
      sy = sy < 0 ? 0 : sy > sh - 1 ? sh - 1 : sy;
      const x0 = sx | 0, y0 = sy | 0;
      const x1 = x0 + 1 < sw ? x0 + 1 : x0, y1 = y0 + 1 < sh ? y0 + 1 : y0;
      const fx = sx - x0, fy = sy - y0;
      const i00 = (y0 * sw + x0) * 4, i10 = (y0 * sw + x1) * 4, i01 = (y1 * sw + x0) * 4, i11 = (y1 * sw + x1) * 4;
      const oi = (y * W + x) * 4;
      for (let ch = 0; ch < 3; ch++) {
        const top = sdata[i00 + ch] + (sdata[i10 + ch] - sdata[i00 + ch]) * fx;
        const bot = sdata[i01 + ch] + (sdata[i11 + ch] - sdata[i01 + ch]) * fx;
        o[oi + ch] = top + (bot - top) * fy;
      }
      o[oi + 3] = 255;
    }
  }
  if (filter !== 'original') applyFilter(o, W, H, filter);
  octx.putImageData(img, 0, 0);
  return rotate(out, rot);
}

function rotate(c: HTMLCanvasElement, rot: number): HTMLCanvasElement {
  const r = ((rot % 4) + 4) % 4;
  if (!r) return c;
  const out = document.createElement('canvas');
  out.width = r % 2 ? c.height : c.width;
  out.height = r % 2 ? c.width : c.height;
  const ctx = out.getContext('2d')!;
  ctx.translate(out.width / 2, out.height / 2);
  ctx.rotate((r * Math.PI) / 2);
  ctx.drawImage(c, -c.width / 2, -c.height / 2);
  c.width = c.height = 0;
  return out;
}

/**
 * Estimate the paper brightness around every pixel: a coarse grid of local
 * maxima (paper is the brightest thing nearby), smoothed and interpolated.
 * Dividing by it removes shadows and uneven lighting.
 */
function paperMap(lum: Float32Array, W: number, H: number): (x: number, y: number) => number {
  const cell = Math.max(8, Math.round(Math.max(W, H) / 40));
  const gw = Math.ceil(W / cell), gh = Math.ceil(H / cell);
  const grid = new Float32Array(gw * gh);
  for (let gy = 0; gy < gh; gy++) {
    for (let gx = 0; gx < gw; gx++) {
      // 90th percentile of the cell via a coarse histogram, robust to specks.
      const hist = new Uint32Array(32);
      let n = 0;
      for (let y = gy * cell; y < Math.min(H, (gy + 1) * cell); y += 2) {
        for (let x = gx * cell; x < Math.min(W, (gx + 1) * cell); x += 2) { hist[lum[y * W + x] >> 3]++; n++; }
      }
      let acc = 0, k = 31;
      for (; k > 0; k--) { acc += hist[k]; if (acc >= n * 0.1) break; }
      grid[gy * gw + gx] = k * 8 + 4;
    }
  }
  // Max then blur over neighbours: text-heavy cells borrow the paper level around them.
  const mx = new Float32Array(grid.length);
  for (let gy = 0; gy < gh; gy++) for (let gx = 0; gx < gw; gx++) {
    let v = 0;
    for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
      const yy = gy + dy, xx = gx + dx;
      if (yy >= 0 && yy < gh && xx >= 0 && xx < gw) v = Math.max(v, grid[yy * gw + xx]);
    }
    mx[gy * gw + gx] = v;
  }
  const bl = new Float32Array(grid.length);
  for (let gy = 0; gy < gh; gy++) for (let gx = 0; gx < gw; gx++) {
    let s = 0, c = 0;
    for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) {
      const yy = gy + dy, xx = gx + dx;
      if (yy >= 0 && yy < gh && xx >= 0 && xx < gw) { s += mx[yy * gw + xx]; c++; }
    }
    bl[gy * gw + gx] = Math.max(40, s / c);
  }
  return (x, y) => {
    const fx = Math.min(gw - 1, Math.max(0, x / cell - 0.5)), fy = Math.min(gh - 1, Math.max(0, y / cell - 0.5));
    const x0 = fx | 0, y0 = fy | 0, x1 = Math.min(gw - 1, x0 + 1), y1 = Math.min(gh - 1, y0 + 1);
    const tx = fx - x0, ty = fy - y0;
    const a = bl[y0 * gw + x0] + (bl[y0 * gw + x1] - bl[y0 * gw + x0]) * tx;
    const b = bl[y1 * gw + x0] + (bl[y1 * gw + x1] - bl[y1 * gw + x0]) * tx;
    return a + (b - a) * ty;
  };
}

function applyFilter(o: Uint8ClampedArray, W: number, H: number, filter: ScanFilter): void {
  const n = W * H;
  const lum = new Float32Array(n);
  for (let i = 0; i < n; i++) lum[i] = 0.299 * o[i * 4] + 0.587 * o[i * 4 + 1] + 0.114 * o[i * 4 + 2];
  if (filter === 'gray') {
    // Grey with a contrast stretch between the 1st and 99th percentiles.
    const hist = new Uint32Array(256);
    for (let i = 0; i < n; i++) hist[lum[i] | 0]++;
    let lo = 0, hi = 255, acc = 0;
    for (; lo < 255; lo++) { acc += hist[lo]; if (acc > n * 0.01) break; }
    acc = 0;
    for (; hi > 0; hi--) { acc += hist[hi]; if (acc > n * 0.01) break; }
    const k = 255 / Math.max(1, hi - lo);
    for (let i = 0; i < n; i++) { const v = (lum[i] - lo) * k; o[i * 4] = o[i * 4 + 1] = o[i * 4 + 2] = v; }
    return;
  }
  const paper = paperMap(lum, W, H);
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const i = y * W + x, p = i * 4;
      const bg = paper(x, y);
      if (filter === 'bw') {
        // Normalised brightness, then a curve that pushes paper to white and ink to black.
        const t = Math.min(1, lum[i] / bg);
        const v = t > 0.86 ? 255 : t < 0.45 ? 0 : ((t - 0.45) / 0.41) ** 1.6 * 255;
        o[p] = o[p + 1] = o[p + 2] = v;
      } else {
        // Enhanced colour: divide every channel by the paper level, keep hues.
        const k = 255 / bg;
        for (let ch = 0; ch < 3; ch++) {
          const v = o[p + ch] * k;
          o[p + ch] = v > 242 ? 255 : v * 1.02 - 4;
        }
      }
    }
  }
}
