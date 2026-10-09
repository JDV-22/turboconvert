import { qpdf, qpdfOutput, QPDF_IN, QPDF_OUT } from '@/scripts/lib/pdf-qpdf';
import { msg } from '@/scripts/lib/pdf-msg';
import { UserError, baseName, type Engine } from '@/scripts/runtime/types';

// Remove a PDF's encryption with QPDF. Files that only carry restrictions
// (owner password: no printing, no copying…) open without a password and are
// unlocked directly; files that need a password to open need the right one
// (either the open password or the owner password works).
const run: Engine = async ({ files, options, progress, signal }) => {
  const file = files[0];
  const password = String(options.password ?? '');
  const pw = password ? [`--password=${password}`] : [];
  const check = await qpdf(file, ['--show-encryption', ...pw, QPDF_IN], signal);
  const log = check.log.join('\n');
  progress(0.3);
  if (/invalid password/i.test(log)) throw new UserError('password', '');
  if (/not encrypted/i.test(log)) throw new UserError('options', msg('notEncrypted'));
  if (check.code !== 0) qpdfOutput(check); // throws the matching error
  const r = await qpdf(file, ['--decrypt', ...pw, QPDF_IN, QPDF_OUT], signal);
  const blob = qpdfOutput(r);
  progress(1);
  return [{ name: `${baseName(file.name)}-unlocked.pdf`, blob }];
};

export default run;
