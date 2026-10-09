import { loadPdf, savePdf } from '@/scripts/lib/pdf';
import { baseName, type Engine } from '@/scripts/runtime/types';

// Flatten fillable form fields into regular page content so the values can no
// longer be edited (useful before sending a filled-in form).
const run: Engine = async ({ files, progress }) => {
  const file = files[0];
  const doc = await loadPdf(file);
  progress(0.4);
  const form = doc.getForm();
  if (form.getFields().length) {
    form.updateFieldAppearances();
    form.flatten();
  }
  progress(0.8);
  const blob = await savePdf(doc);
  progress(1);
  return [{ name: `${baseName(file.name)}-flattened.pdf`, blob }];
};

export default run;
