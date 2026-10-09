// PowerPoint (PPTX) → PDF. Slides are rendered by pptx-preview at the deck's
// aspect ratio, painted at 2× with html2canvas-pro, one PDF page per slide in
// presentation order, with an invisible selectable text layer.
import { PDFDocument } from 'pdf-lib';
import { addTextLayer, collectWords } from '@/scripts/lib/office-textlayer';
import { canvasToBlob, freeCanvas, say, yieldToUi } from '@/scripts/lib/office-common';
import { savePdf } from '@/scripts/lib/pdf';
import { UserError, throwIfAborted, withExt, type Engine } from '@/scripts/runtime/types';

const run: Engine = async ({ files, progress, signal }) => {
  const file = files[0];
  const [{ init }, h2c, JSZip] = await Promise.all([import('pptx-preview'), import('html2canvas-pro'), import('jszip')]);
  const html2canvas = (h2c as unknown as { default: typeof import('html2canvas-pro').default }).default;
  const buf = await file.arrayBuffer();
  // Slide size from presentation.xml (EMU), default 16:9.
  let ratio = 9 / 16;
  try {
    const zip = await (JSZip as unknown as { default: typeof import('jszip') }).default.loadAsync(buf);
    const xml = await zip.file('ppt/presentation.xml')?.async('string');
    const m = xml?.match(/<p:sldSz[^>]*cx="(\d+)"[^>]*cy="(\d+)"/);
    if (m) ratio = +m[2] / +m[1];
  } catch {
    throw new UserError('invalid', say({ en: 'This file could not be read as a PowerPoint presentation (.pptx).', fr: 'Ce fichier ne peut pas être lu comme une présentation PowerPoint (.pptx).' }));
  }
  const W = 960;
  const H = Math.round(W * ratio);
  const host = document.createElement('div');
  host.setAttribute('aria-hidden', 'true');
  host.setAttribute('data-pptx-host', '');
  host.style.cssText = `position:absolute;left:-30000px;top:0;width:${W}px;background:#fff;`;
  document.body.append(host);
  const pdf = await PDFDocument.create();
  pdf.setTitle(file.name.replace(/\.pptx$/i, ''));
  try {
    const previewer = init(host, { width: W, height: H, mode: 'slide' });
    try {
      await previewer.load(buf);
    } catch (e) {
      console.error(e);
      throw new UserError('invalid', say({ en: 'This file could not be read as a PowerPoint presentation (.pptx).', fr: 'Ce fichier ne peut pas être lu comme une présentation PowerPoint (.pptx).' }));
    }
    const count = previewer.slideCount;
    if (!count) throw new UserError('empty', say({ en: 'This presentation has no slides.', fr: 'Cette présentation ne contient aucune diapositive.' }));
    const wPt = 720, hPt = Math.round(720 * ratio * 100) / 100;
    for (let i = 0; i < count; i++) {
      throwIfAborted(signal);
      previewer.renderSingleSlide(i);
      const slide = (previewer.wrapper.querySelector('.pptx-preview-slide-wrapper') as HTMLElement | null) ?? previewer.wrapper;
      const imgs = Array.from(slide.querySelectorAll('img')).filter((im) => !im.complete);
      await Promise.all(imgs.map((im) => new Promise<void>((r) => { im.onload = im.onerror = () => r(); setTimeout(r, 4000); })));
      await new Promise((r) => requestAnimationFrame(() => r(null)));
      const canvas = await html2canvas(slide, {
        scale: 2, backgroundColor: '#ffffff', logging: false, useCORS: true, width: W, height: H,
        onclone: (d: Document) => { const h = d.querySelector<HTMLElement>('[data-pptx-host]'); if (h) h.style.left = '0px'; },
      } as Parameters<typeof html2canvas>[1]);
      const frame = slide.getBoundingClientRect();
      const words = collectWords(slide, new DOMRect(frame.left, frame.top, W, H), wPt / W);
      const blob = await canvasToBlob(canvas, 'image/jpeg', 0.9);
      freeCanvas(canvas);
      const img = await pdf.embedJpg(new Uint8Array(await blob.arrayBuffer()));
      const page = pdf.addPage([wPt, hPt]);
      page.drawImage(img, { x: 0, y: 0, width: wPt, height: hPt });
      addTextLayer(pdf, page, words);
      progress((i + 1) / count * 0.95);
      await yieldToUi();
    }
    previewer.destroy();
  } finally {
    host.remove();
  }
  const blob = await savePdf(pdf);
  progress(1);
  return [{ name: withExt(file.name, 'pdf'), blob }];
};

export default run;
