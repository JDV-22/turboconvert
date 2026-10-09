import { qpdf, qpdfOutput, QPDF_IN, QPDF_OUT } from '@/scripts/lib/pdf-qpdf';
import { msg } from '@/scripts/lib/pdf-msg';
import { UserError, baseName, type Engine } from '@/scripts/runtime/types';

// Encrypt a PDF with AES-256 (PDF 2.0 / R6 security handler) using QPDF.
// The same password is used to open the file and as owner password, and all
// permissions are left on: the goal is "nobody can open it without the password".
const run: Engine = async ({ files, options, progress, signal }) => {
  const file = files[0];
  const password = String(options.password ?? '');
  if (!password.trim()) throw new UserError('options', msg('passwordEmpty'));
  progress(0.1);
  const r = await qpdf(file, ['--encrypt', password, password, '256', '--', QPDF_IN, QPDF_OUT], signal);
  const blob = qpdfOutput(r);
  progress(1);
  return [{ name: `${baseName(file.name)}-protected.pdf`, blob }];
};

export default run;
