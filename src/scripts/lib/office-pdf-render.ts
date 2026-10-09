// Render a PDF page to a canvas with pdf.js, optionally without its text
// (used as a background under editable text in Word / PowerPoint output).
import type { PDFPageProxy } from 'pdfjs-dist';
import { safeScale } from './office-common';

let textHidden = 0;
const proto = typeof CanvasRenderingContext2D !== 'undefined' ? CanvasRenderingContext2D.prototype : null;
const origFill = proto?.fillText;
const origStroke = proto?.strokeText;

function hideText(on: boolean) {
  if (!proto || !origFill || !origStroke) return;
  textHidden += on ? 1 : -1;
  if (textHidden > 0) {
    proto.fillText = function () { /* text is added as editable text instead */ };
    proto.strokeText = function () { /* idem */ };
  } else {
    proto.fillText = origFill;
    proto.strokeText = origStroke;
  }
}

export interface RenderOptions {
  /** Pixels per PDF point (2 ≈ 144 dpi). Reduced automatically for huge pages. */
  scale?: number;
  noText?: boolean;
  background?: string;
  maxPixels?: number;
}

export async function renderPage(page: PDFPageProxy, opts: RenderOptions = {}): Promise<{ canvas: HTMLCanvasElement; scale: number }> {
  const vp1 = page.getViewport({ scale: 1 });
  const scale = safeScale(vp1.width, vp1.height, opts.scale ?? 2, opts.maxPixels ?? 16_000_000);
  const vp = page.getViewport({ scale });
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.ceil(vp.width));
  canvas.height = Math.max(1, Math.ceil(vp.height));
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = opts.background ?? '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  if (opts.noText) hideText(true);
  try {
    await page.render({ canvasContext: ctx, viewport: vp, canvas } as Parameters<PDFPageProxy['render']>[0]).promise;
  } finally {
    if (opts.noText) hideText(false);
  }
  return { canvas, scale };
}
