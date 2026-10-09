// pdf.js loader shared by the Office engines (PDF → Word/Excel/PowerPoint).
// Uses the legacy build so older Safari/Chrome versions (still common on
// phones) keep working. CMaps (needed for CJK text), standard fonts and the
// image-decoder WASM files are bundled as lazy assets: only the files a given
// PDF needs are downloaded.
import { UserError } from '@/scripts/runtime/types';
import type { PDFDocumentProxy } from 'pdfjs-dist';

type PdfJs = typeof import('pdfjs-dist');

const cmapUrls = import.meta.glob('/node_modules/pdfjs-dist/cmaps/*.bcmap', { query: '?url', import: 'default' }) as Record<string, () => Promise<string>>;
const fontUrls = import.meta.glob(['/node_modules/pdfjs-dist/standard_fonts/*.pfb', '/node_modules/pdfjs-dist/standard_fonts/*.ttf'], { query: '?url', import: 'default' }) as Record<string, () => Promise<string>>;
const wasmUrls = import.meta.glob(['/node_modules/pdfjs-dist/wasm/*.wasm', '/node_modules/pdfjs-dist/wasm/*.js'], { query: '?url', import: 'default' }) as Record<string, () => Promise<string>>;

const dirs: Record<string, [string, Record<string, () => Promise<string>>]> = {
  cMapUrl: ['/node_modules/pdfjs-dist/cmaps/', cmapUrls],
  standardFontDataUrl: ['/node_modules/pdfjs-dist/standard_fonts/', fontUrls],
  wasmUrl: ['/node_modules/pdfjs-dist/wasm/', wasmUrls],
};

/** Serves pdf.js binary data (CMaps, fonts, wasm) from bundled assets. */
class BundledDataFactory {
  constructor(_opts: unknown) {}
  async fetch({ kind, filename }: { kind: string; filename: string }): Promise<Uint8Array> {
    const entry = dirs[kind];
    const loader = entry?.[1][entry[0] + filename];
    if (!loader) throw new Error(`Missing pdf.js data ${kind}/${filename}`);
    const res = await fetch(await loader());
    if (!res.ok) throw new Error(`Failed to load ${filename}`);
    return new Uint8Array(await res.arrayBuffer());
  }
}

let pdfjsPromise: Promise<PdfJs> | null = null;

export function loadPdfJs(): Promise<PdfJs> {
  pdfjsPromise ??= (async () => {
    const [lib, worker] = await Promise.all([
      import('pdfjs-dist/legacy/build/pdf.mjs') as unknown as Promise<PdfJs>,
      import('pdfjs-dist/legacy/build/pdf.worker.min.mjs?url'),
    ]);
    lib.GlobalWorkerOptions.workerSrc = (worker as { default: string }).default;
    return lib;
  })();
  return pdfjsPromise;
}

/** Open a PDF with pdf.js, mapping errors to user-facing ones. */
export async function openPdf(file: File, signal?: AbortSignal): Promise<{ pdfjs: PdfJs; doc: PDFDocumentProxy; close: () => Promise<void> }> {
  const pdfjs = await loadPdfJs();
  const data = new Uint8Array(await file.arrayBuffer());
  const task = pdfjs.getDocument({
    data,
    // Fake URLs so pdf.js asks our factory for the data (they are never fetched directly).
    cMapUrl: '/pdfjs/cmaps/',
    cMapPacked: true,
    standardFontDataUrl: '/pdfjs/standard_fonts/',
    wasmUrl: '/pdfjs/wasm/',
    useWorkerFetch: false,
    BinaryDataFactory: BundledDataFactory,
    isEvalSupported: false,
    fontExtraProperties: true,
  } as Parameters<PdfJs['getDocument']>[0]);
  const onAbort = () => task.destroy();
  signal?.addEventListener('abort', onAbort, { once: true });
  try {
    const doc = await task.promise;
    return { pdfjs, doc, close: () => task.destroy().catch(() => {}) };
  } catch (e) {
    if (signal?.aborted) throw new DOMException('Aborted', 'AbortError');
    const name = (e as Error)?.name ?? '';
    if (name === 'PasswordException') throw new UserError('password', '');
    throw new UserError('invalid', '');
  } finally {
    signal?.removeEventListener('abort', onAbort);
  }
}
