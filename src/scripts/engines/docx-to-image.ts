// Word (DOCX) → JPG: one image per page, rendered at 2× (≈ 192 dpi).
import { renderDocx } from '@/scripts/lib/office-docx-render';
import { canvasToBlob, freeCanvas } from '@/scripts/lib/office-common';
import { baseName, type Engine } from '@/scripts/runtime/types';

const run: Engine = async ({ files, progress, signal }) => {
  const file = files[0];
  const pages: Blob[] = [];
  await renderDocx(file, {
    scale: 2, signal, progress,
    onPage: async (p) => {
      pages.push(await canvasToBlob(p.canvas, 'image/jpeg', 0.92));
      freeCanvas(p.canvas);
    },
  });
  const pad = String(pages.length).length;
  progress(1);
  return pages.map((blob, i) => ({
    name: pages.length === 1 ? `${baseName(file.name)}.jpg` : `${baseName(file.name)}-page-${String(i + 1).padStart(pad, '0')}.jpg`,
    blob,
  }));
};

export default run;
