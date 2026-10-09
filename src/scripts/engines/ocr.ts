import workerUrl from 'tesseract.js/dist/worker.min.js?url';
import coreSimdUrl from 'tesseract.js-core/tesseract-core-simd-lstm.wasm.js?url';
import coreUrl from 'tesseract.js-core/tesseract-core-lstm.wasm.js?url';
import { PDFDocument, degrees, type PDFPage } from 'pdf-lib';
import { loadPdfJs, openPdfJs, closePdfJs, renderPage, safeScale, canvasToBlob } from '@/scripts/lib/pdf-js';
import { pageText, pageSeparator } from '@/scripts/lib/pdf-text';
import { displayFrame } from '@/scripts/lib/pdf-geom';
import { decodeImage } from '@/scripts/lib/image-io';
import { savePdf } from '@/scripts/lib/pdf';
import { loadPdfLenient } from '@/scripts/lib/pdf-qpdf';
import { msg } from '@/scripts/lib/pdf-msg';
import { UserError, baseName, extOf, throwIfAborted, type Engine, type EngineOutput } from '@/scripts/runtime/types';

// OCR with Tesseract (LSTM engine, self-hosted core; language data from the
// tesseract.js CDN, cached by the browser after the first use).
// PDFs: each page is rendered at 200 dpi and recognized; pages that already
// have a real text layer are read directly instead. Outputs a searchable PDF
// (the original pages with an invisible text layer on top) and a .txt file.

const DPI = 200;
const LANGS = new Set(['eng', 'fra', 'spa', 'deu', 'por', 'ita', 'nld', 'pol', 'tur', 'rus', 'ukr', 'ara', 'hin', 'jpn', 'chi_sim', 'kor']);
const NATIVE_TEXT_MIN = 30;
// Smallest wasm module using SIMD (from wasm-feature-detect).
const SIMD_PROBE = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11]);

const abs = (u: string) => new URL(u, location.href).href;

type TWorker = Awaited<ReturnType<typeof import('tesseract.js')['createWorker']>>;

/** Lay the invisible text page from Tesseract over a page, matching what the reader sees. */
async function overlay(out: PDFDocument, page: PDFPage, textPdf: Uint8Array) {
  const [emb] = await out.embedPdf(textPdf, [0]);
  const f = displayFrame(page);
  const o = f.toUser(0, 0);
  page.drawPage(emb, {
    x: o.x, y: o.y,
    xScale: f.width / emb.width, yScale: f.height / emb.height,
    rotate: degrees(f.rotation),
  });
}

const run: Engine = async ({ files, options, progress, signal }) => {
  const file = files[0];
  const lang = LANGS.has(String(options.lang)) ? String(options.lang) : 'eng';
  const isPdf = extOf(file.name) === 'pdf' || file.type === 'application/pdf';
  const base = baseName(file.name);

  // ── Tesseract worker ──
  let stage: { from: number; span: number; label?: string } = { from: 0, span: 0.08 };
  const T = await import('tesseract.js');
  const simd = typeof WebAssembly === 'object' && WebAssembly.validate(SIMD_PROBE);
  const abortable = <R>(p: Promise<R>) => new Promise<R>((resolve, reject) => {
    if (signal.aborted) reject(new DOMException('Aborted', 'AbortError'));
    signal.addEventListener('abort', () => reject(new DOMException('Aborted', 'AbortError')), { once: true });
    p.then(resolve, reject);
  });
  const starting = T.createWorker(lang, 1, {
    workerPath: abs(workerUrl),
    corePath: abs(simd ? coreSimdUrl : coreUrl),
    logger: (m: { status: string; progress: number }) => {
      if (typeof m.progress === 'number') progress(stage.from + stage.span * m.progress, stage.label);
    },
  });
  // Cancel while the engine/language data is still loading: stop waiting, clean up later.
  const worker: TWorker = await abortable(starting).catch((e) => {
    starting.then((w) => w.terminate()).catch(() => {});
    if ((e as Error)?.name === 'AbortError') throw e;
    console.error(e);
    throw new UserError('unsupported', msg('ocrDownload'));
  });
  const onAbort = () => { worker.terminate(); };
  signal.addEventListener('abort', onAbort, { once: true });

  try {
    throwIfAborted(signal);
    await worker.setParameters({ user_defined_dpi: String(DPI) });
    const recognize = async (canvas: HTMLCanvasElement) => {
      const r = await abortable(worker.recognize(canvas, { pdfTitle: base, pdfTextOnly: true }, { text: true, pdf: true }));
      return { text: (r.data.text ?? '').replace(/[ \t]+\n/g, '\n').trim(), pdf: new Uint8Array(r.data.pdf ?? []) };
    };

    const texts: string[] = [];
    let chars = 0;
    let layered = 0;
    let searchable: Blob | null = null;

    if (isPdf) {
      const pdfjs = await loadPdfJs();
      const doc = await openPdfJs(file);
      // Searchable copy of the original (restricted PDFs are decrypted first);
      // if pdf-lib can't handle the file, still give the text.
      const out: PDFDocument | null = await loadPdfLenient(file, signal).catch(() => null);
      throwIfAborted(signal);
      try {
        const n = doc.numPages;
        for (let i = 1; i <= n; i++) {
          throwIfAborted(signal);
          const label = `${msg('page')} ${i} / ${n}`;
          const from = 0.08 + (0.88 * (i - 1)) / n;
          progress(from, label);
          const page = await doc.getPage(i);
          const native = await pageText(page, pdfjs.Util);
          let text: string;
          if (native.replace(/\s/g, '').length >= NATIVE_TEXT_MIN) {
            text = native;
          } else {
            const { canvas } = await renderPage(page, safeScale(page, DPI / 72, 30_000_000));
            stage = { from, span: 0.88 / n, label };
            const r = await recognize(canvas);
            canvas.width = canvas.height = 0;
            text = r.text;
            if (out && r.pdf.length && r.text) {
              await overlay(out, out.getPage(i - 1), r.pdf);
              layered++;
            }
          }
          page.cleanup();
          chars += text.replace(/\s/g, '').length;
          texts.push(n > 1 ? `${pageSeparator(i, msg('page'))}\n\n${text}` : text);
        }
      } finally {
        await closePdfJs(doc);
      }
      // Every page already had real text: the PDF is searchable as it is.
      if (out && layered) searchable = await savePdf(out);
    } else {
      const img = await decodeImage(file);
      const k = Math.min(1, Math.sqrt(30_000_000 / (img.width * img.height)));
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(img.width * k);
      canvas.height = Math.round(img.height * k);
      const ctx = canvas.getContext('2d')!;
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img.source as CanvasImageSource, 0, 0, canvas.width, canvas.height);
      if ('close' in img.source) (img.source as ImageBitmap).close();
      stage = { from: 0.08, span: 0.85, label: `${msg('page')} 1 / 1` };
      progress(0.08, `${msg('page')} 1 / 1`);
      const r = await recognize(canvas);
      texts.push(r.text);
      chars += r.text.replace(/\s/g, '').length;
      // Searchable PDF: the picture as the page, the recognized text invisible on top.
      const out = await PDFDocument.create();
      const scale = Math.min(0.75, 1190 / Math.max(canvas.width, canvas.height));
      const page = out.addPage([canvas.width * scale, canvas.height * scale]);
      const pic = await out.embedJpg(await (await canvasToBlob(canvas, 'image/jpeg', 0.92)).arrayBuffer());
      canvas.width = canvas.height = 0;
      page.drawImage(pic, { x: 0, y: 0, width: page.getWidth(), height: page.getHeight() });
      if (r.pdf.length && r.text) await overlay(out, page, r.pdf);
      searchable = await savePdf(out);
    }

    const all = texts.join('\n\n\n');
    if (chars < 3) throw new UserError('empty', msg('noTextOcr'));
    progress(1);
    const outputs: EngineOutput[] = [];
    if (searchable) outputs.push({ name: `${base}-ocr.pdf`, blob: searchable });
    outputs.push({ name: `${base}.txt`, blob: new Blob([all.replace(/\n{4,}/g, '\n\n\n') + '\n'], { type: 'text/plain;charset=utf-8' }) });
    return outputs;
  } finally {
    signal.removeEventListener('abort', onAbort);
    worker.terminate().catch(() => {});
  }
};

export default run;
