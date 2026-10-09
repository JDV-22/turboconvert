import qpdfGlueUrl from '@neslinesli93/qpdf-wasm/dist/qpdf.js?url';
import qpdfWasmUrl from '@neslinesli93/qpdf-wasm/dist/qpdf.wasm?url';
import type { PDFDocument } from 'pdf-lib';
import { runWasmTool, isOutOfMemory, type WasmToolResult } from '@/scripts/lib/pdf-wasm';
import { loadPdf } from '@/scripts/lib/pdf';
import { msg } from '@/scripts/lib/pdf-msg';
import { UserError } from '@/scripts/runtime/types';

export const QPDF_IN = '/in/input.pdf';
export const QPDF_OUT = '/out/output.pdf';

/** Run qpdf (in a worker) on `file`, mounted at QPDF_IN. */
export function qpdf(file: Blob, args: string[], signal: AbortSignal): Promise<WasmToolResult> {
  return runWasmTool({
    glueUrl: qpdfGlueUrl, wasmUrl: qpdfWasmUrl,
    args, input: { name: 'input.pdf', blob: file }, outputs: [QPDF_OUT], signal,
  });
}

/** qpdf exit codes: 0 ok, 2 error, 3 warnings (output still written). */
export function qpdfOutput(r: WasmToolResult): Blob {
  const data = r.files[QPDF_OUT];
  const log = r.log.join('\n');
  if ((r.code === 0 || r.code === 3) && data && data.length > 0) return new Blob([data as BlobPart], { type: 'application/pdf' });
  if (/invalid password/i.test(log)) throw new UserError('password', '');
  if (isOutOfMemory(log)) throw new UserError('memory', msg('tooLarge'));
  throw new UserError('invalid', msg('damaged'));
}

/**
 * Load a PDF with pdf-lib. PDFs that are encrypted but open without a password
 * (owner password: "no editing / printing" restrictions) are decrypted with
 * QPDF first, so editing tools work on them. The result is no longer restricted.
 * PDFs that need a password to open still throw UserError('password').
 */
export async function loadPdfLenient(file: File, signal: AbortSignal): Promise<PDFDocument> {
  try {
    return await loadPdf(file);
  } catch (e) {
    if (!(e instanceof UserError) || e.code !== 'password') throw e;
  }
  const r = await qpdf(file, ['--decrypt', QPDF_IN, QPDF_OUT], signal);
  const data = r.files[QPDF_OUT];
  if ((r.code !== 0 && r.code !== 3) || !data?.length) throw new UserError('password', '');
  return loadPdf(data);
}
