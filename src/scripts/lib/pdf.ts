import { PDFDocument } from 'pdf-lib';
import { UserError } from '@/scripts/runtime/types';

/** Load a PDF with pdf-lib, turning encryption errors into a clear message. */
export async function loadPdf(file: File | ArrayBuffer | Uint8Array, opts: { allowEncrypted?: boolean } = {}): Promise<PDFDocument> {
  const bytes = file instanceof File ? await file.arrayBuffer() : file;
  try {
    const doc = await PDFDocument.load(bytes, { ignoreEncryption: !!opts.allowEncrypted, updateMetadata: false });
    if (doc.isEncrypted && !opts.allowEncrypted) throw new UserError('password', '');
    return doc;
  } catch (e) {
    if (e instanceof UserError) throw e;
    const msg = (e as Error)?.message ?? '';
    if (/encrypt/i.test(msg)) throw new UserError('password', '');
    throw new UserError('invalid', '');
  }
}

export async function savePdf(doc: PDFDocument): Promise<Blob> {
  doc.setProducer('TurboConvert (turboconvert.io)');
  doc.setCreator('TurboConvert');
  const bytes = await doc.save({ useObjectStreams: true });
  return new Blob([bytes as BlobPart], { type: 'application/pdf' });
}
