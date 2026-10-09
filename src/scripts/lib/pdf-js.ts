// pdf.js (v6, legacy build: the modern build needs Map#getOrInsertComputed,
// missing in many browsers) with every asset self-hosted: worker, CMaps for
// CJK text, standard fonts, JPX/JBIG2 decoders and the CMYK ICC profile.
import type { PDFDocumentProxy, PDFPageProxy, PageViewport } from 'pdfjs-dist';
import { UserError } from '@/scripts/runtime/types';
import { msg } from '@/scripts/lib/pdf-msg';

const assets = import.meta.glob(
  [
    '/node_modules/pdfjs-dist/cmaps/*.bcmap',
    '/node_modules/pdfjs-dist/standard_fonts/*.{pfb,ttf}',
    '/node_modules/pdfjs-dist/wasm/*.{wasm,js}',
    '!/node_modules/pdfjs-dist/wasm/quickjs*',
  ],
  { query: '?url', import: 'default', eager: true },
) as Record<string, string>;

const byName = new Map<string, string>();
for (const [path, url] of Object.entries(assets)) byName.set(path.slice(path.lastIndexOf('/') + 1), url);

/** Serves pdf.js binary data (CMaps, fonts, wasm) from our hashed asset URLs. */
class AssetDataFactory {
  constructor(_opts: unknown) {}
  async fetch({ filename }: { kind: string; filename: string }): Promise<Uint8Array> {
    const url = byName.get(filename);
    if (!url) throw new Error(`pdf.js asset not bundled: ${filename}`);
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
    return new Uint8Array(await res.arrayBuffer());
  }
}

type PdfJs = typeof import('pdfjs-dist');
let lib: Promise<PdfJs> | null = null;

export function loadPdfJs(): Promise<PdfJs> {
  if (!lib) {
    lib = Promise.all([
      import('pdfjs-dist/legacy/build/pdf.mjs'),
      import('pdfjs-dist/legacy/build/pdf.worker.min.mjs?url'),
    ]).then(([m, w]) => {
      const pdfjs = m as unknown as PdfJs;
      pdfjs.GlobalWorkerOptions.workerSrc = (w as { default: string }).default;
      return pdfjs;
    });
    lib.catch(() => { lib = null; });
  }
  return lib;
}

const tasks = new WeakMap<PDFDocumentProxy, { destroy(): Promise<void> }>();

/** Free a document opened with openPdfJs (terminates its pdf.js worker). */
export async function closePdfJs(doc: PDFDocumentProxy): Promise<void> {
  await tasks.get(doc)?.destroy();
}

/** Open a PDF with pdf.js. Throws UserError('password') when a password is needed or wrong. */
export async function openPdfJs(file: Blob, opts: { password?: string } = {}): Promise<PDFDocumentProxy> {
  const pdfjs = await loadPdfJs();
  const { default: iccUrl } = await import('pdfjs-dist/iccs/CGATS001Compat-v2-micro.icc?url');
  const data = new Uint8Array(await file.arrayBuffer());
  const task = pdfjs.getDocument({
    data,
    password: opts.password || undefined,
    BinaryDataFactory: AssetDataFactory,
    useWorkerFetch: false,
    cMapUrl: 'cmaps/',
    standardFontDataUrl: 'standard_fonts/',
    wasmUrl: 'wasm/',
    // The worker appends the profile name; the fragment makes the server ignore it.
    iccUrl: `${new URL(iccUrl, location.href).href}#/`,
    isEvalSupported: false,
    enableXfa: false,
  } as Parameters<PdfJs['getDocument']>[0]);
  try {
    const doc = await task.promise;
    tasks.set(doc, task);
    return doc;
  } catch (e) {
    void task.destroy();
    const name = (e as Error)?.name ?? '';
    if (name === 'PasswordException') throw new UserError('password', '');
    throw new UserError('invalid', msg('damaged'));
  }
}

/** Largest canvas we create: Chrome/Safari cap canvas area (~268 MP desktop, ~16 MP on iOS). */
const MAX_AREA = 40_000_000;
const MAX_SIDE = 16_000;

/** Scale so that the page fits in the canvas limits, as close as possible to the wanted scale. */
export function safeScale(page: PDFPageProxy, wanted: number, maxArea = MAX_AREA): number {
  const vp = page.getViewport({ scale: 1 });
  let s = wanted;
  const area = vp.width * vp.height * s * s;
  if (area > maxArea) s = Math.sqrt(maxArea / (vp.width * vp.height));
  const side = Math.max(vp.width, vp.height) * s;
  if (side > MAX_SIDE) s *= MAX_SIDE / side;
  return s;
}

/** Render a page (with its /Rotate applied) onto a new canvas with a white background. */
export async function renderPage(page: PDFPageProxy, scale: number): Promise<{ canvas: HTMLCanvasElement; viewport: PageViewport }> {
  const viewport = page.getViewport({ scale });
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.floor(viewport.width));
  canvas.height = Math.max(1, Math.floor(viewport.height));
  const task = page.render({ canvas, viewport, intent: 'print', background: '#ffffff' });
  try {
    await task.promise;
  } catch (e) {
    canvas.width = canvas.height = 0;
    throw e;
  }
  return { canvas, viewport };
}

export function canvasToBlob(canvas: HTMLCanvasElement, type: string, quality?: number): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob((b) => (b ? resolve(b) : reject(new UserError('memory', msg('tooLarge')))), type, quality);
  });
}
