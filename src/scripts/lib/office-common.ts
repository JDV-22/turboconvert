// Small helpers shared by the Office engines.

/** Pick a user-facing message in the page language (engines don't receive the locale). */
export function say(msgs: { en: string; fr?: string }): string {
  const lang = (typeof document !== 'undefined' ? document.documentElement.lang : 'en').slice(0, 2);
  return (msgs as Record<string, string | undefined>)[lang] ?? msgs.en;
}

export function yieldToUi(): Promise<void> {
  return new Promise((r) => setTimeout(r, 0));
}

export function canvasToBlob(canvas: HTMLCanvasElement, type: string, quality?: number): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('Canvas encoding failed'))), type, quality);
  });
}

/** Release a canvas' backing store right away (Safari keeps it alive otherwise). */
export function freeCanvas(canvas: HTMLCanvasElement | null | undefined): void {
  if (!canvas) return;
  canvas.width = 0;
  canvas.height = 0;
}

/** Largest scale that keeps a canvas within browser limits (iOS Safari: 16.7 Mpx). */
export function safeScale(widthPt: number, heightPt: number, wanted: number, maxPixels = 16_000_000, maxSide = 8000): number {
  let s = wanted;
  if (widthPt * s > maxSide) s = maxSide / widthPt;
  if (heightPt * s > maxSide) s = maxSide / heightPt;
  if (widthPt * heightPt * s * s > maxPixels) s = Math.sqrt(maxPixels / (widthPt * heightPt));
  return s;
}
