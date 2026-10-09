import type { PDFDocumentProxy } from 'pdfjs-dist';

// The legacy build is required: the modern build of PDF.js 6 uses very recent
// JS APIs (e.g. Map.prototype.getOrInsertComputed) missing in many browsers.
type PdfJs = typeof import('pdfjs-dist');

let lib: Promise<PdfJs> | null = null;

/** Lazily load PDF.js with its worker served from our own origin. */
export function loadPdfjs(): Promise<PdfJs> {
  if (!lib) {
    lib = Promise.all([
      import('pdfjs-dist/legacy/build/pdf.mjs') as unknown as Promise<PdfJs>,
      import('pdfjs-dist/legacy/build/pdf.worker.min.mjs?url'),
    ]).then(([pdfjs, worker]) => {
      pdfjs.GlobalWorkerOptions.workerSrc = worker.default;
      return pdfjs;
    });
  }
  return lib;
}

export async function openPdf(file: File, password?: string): Promise<PDFDocumentProxy> {
  const pdfjs = await loadPdfjs();
  return pdfjs.getDocument({ data: new Uint8Array(await file.arrayBuffer()), password, isEvalSupported: false }).promise;
}

/** Render a page to a small JPEG data URL for thumbnails. */
export async function renderThumb(doc: PDFDocumentProxy, pageNumber: number, width = 160): Promise<string> {
  const page = await doc.getPage(pageNumber);
  const base = page.getViewport({ scale: 1 });
  const viewport = page.getViewport({ scale: (width * (window.devicePixelRatio > 1 ? 2 : 1)) / base.width });
  const canvas = document.createElement('canvas');
  canvas.width = Math.ceil(viewport.width);
  canvas.height = Math.ceil(viewport.height);
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  await page.render({ canvasContext: ctx, viewport, canvas }).promise;
  page.cleanup();
  const url = canvas.toDataURL('image/jpeg', 0.75);
  canvas.width = canvas.height = 0;
  return url;
}
