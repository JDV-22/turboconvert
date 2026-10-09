import { StandardFonts, rgb, degrees, type PDFDocument, type PDFFont, type PDFImage, type PDFPage } from 'pdf-lib';
import { savePdf } from '@/scripts/lib/pdf';
import { loadPdfLenient } from '@/scripts/lib/pdf-qpdf';
import { displayFrame } from '@/scripts/lib/pdf-geom';
import { msg } from '@/scripts/lib/pdf-msg';
import { UserError, baseName, throwIfAborted, type Engine } from '@/scripts/runtime/types';

// Text watermark, diagonal or tiled, drawn over every page as the reader sees
// it. Latin text (WinAnsi) is real vector text in Helvetica Bold. Any other
// script (Cyrillic, Greek, Arabic, Hebrew, CJK, Hindi, emoji…) is rendered
// once by the browser with the device's own fonts — so shaping and
// right-to-left text are correct — and placed as a high-resolution
// transparent image reused on every page.

const GRAY = 0.5;

interface Mark {
  /** Width in points of the text at size 1. */
  widthPerPt: number;
  /** Height of the drawn block relative to size (cap height for text, box height for images). */
  heightPerPt: number;
  draw: (page: PDFPage, x: number, y: number, size: number, rotate: number, opacity: number) => void;
}

function textMark(font: PDFFont, text: string): Mark {
  return {
    widthPerPt: font.widthOfTextAtSize(text, 1),
    heightPerPt: 0.72,
    draw: (page, x, y, size, rotate, opacity) =>
      page.drawText(text, { x, y, size, font, color: rgb(GRAY, GRAY, GRAY), opacity, rotate: degrees(rotate) }),
  };
}

async function imageMark(doc: PDFDocument, text: string): Promise<Mark> {
  const fontCss = (px: number) => `bold ${px}px system-ui, -apple-system, "Segoe UI", "Noto Sans", Roboto, Arial, sans-serif`;
  const probe = document.createElement('canvas').getContext('2d')!;
  probe.font = fontCss(100);
  const w100 = Math.max(1, probe.measureText(text).width);
  const px = Math.max(40, Math.min(320, Math.floor((6000 / w100) * 100)));
  probe.font = fontCss(px);
  const m = probe.measureText(text);
  const ascent = m.actualBoundingBoxAscent || px * 0.8;
  const descent = m.actualBoundingBoxDescent || px * 0.2;
  const pad = Math.ceil(px * 0.1);
  const canvas = document.createElement('canvas');
  canvas.width = Math.ceil(m.width) + pad * 2;
  canvas.height = Math.ceil(ascent + descent) + pad * 2;
  const ctx = canvas.getContext('2d')!;
  ctx.font = fontCss(px);
  ctx.fillStyle = `rgb(${GRAY * 255}, ${GRAY * 255}, ${GRAY * 255})`;
  ctx.textBaseline = 'alphabetic';
  ctx.fillText(text, pad, pad + ascent);
  const blob = await new Promise<Blob | null>((r) => canvas.toBlob(r, 'image/png'));
  if (!blob) throw new UserError('memory', msg('tooLarge'));
  const image: PDFImage = await doc.embedPng(await blob.arrayBuffer());
  const widthPerPt = canvas.width / px;
  const heightPerPt = canvas.height / px;
  return {
    widthPerPt,
    heightPerPt,
    draw: (page, x, y, size, rotate, opacity) =>
      page.drawImage(image, { x, y, width: widthPerPt * size, height: heightPerPt * size, opacity, rotate: degrees(rotate) }),
  };
}

const run: Engine = async ({ files, options, progress, signal }) => {
  const file = files[0];
  const text = String(options.text ?? '').trim();
  if (!text) throw new UserError('options', msg('watermarkEmpty'));
  const opacity = Math.min(1, Math.max(0.05, Number(options.opacity ?? 20) / 100));
  const tiled = String(options.layout ?? 'diagonal') === 'tiled';
  const doc = await loadPdfLenient(file, signal);
  progress(0.15);

  let mark: Mark;
  const font = await doc.embedFont(StandardFonts.HelveticaBold);
  try {
    font.encodeText(text); // throws when the text is not WinAnsi-encodable
    mark = textMark(font, text);
  } catch {
    mark = await imageMark(doc, text);
  }

  const pages = doc.getPages();
  pages.forEach((page, i) => {
    if (i % 25 === 0) throwIfAborted(signal);
    const f = displayFrame(page);
    const short = Math.min(f.width, f.height);
    const theta = tiled ? Math.PI / 6 : Math.atan2(f.height, f.width);
    const d = { x: Math.cos(theta), y: Math.sin(theta) };
    const n = { x: -d.y, y: d.x };
    const place = (cx: number, cy: number, size: number) => {
      const w = mark.widthPerPt * size;
      const h = mark.heightPerPt * size;
      const sx = cx - (w / 2) * d.x - (h / 2) * n.x;
      const sy = cy - (w / 2) * d.y - (h / 2) * n.y;
      const p = f.toUser(sx, sy);
      mark.draw(page, p.x, p.y, size, f.rotation + (theta * 180) / Math.PI, opacity);
    };
    if (!tiled) {
      const diag = Math.hypot(f.width, f.height);
      const size = Math.min((diag * 0.7) / mark.widthPerPt, (short * 0.2) / mark.heightPerPt);
      place(f.width / 2, f.height / 2, size);
      return;
    }
    const size = Math.max(12, Math.min(40, short / 16));
    const w = mark.widthPerPt * size;
    const stepU = w + size * 3;
    const stepV = size * 5;
    const reach = Math.hypot(f.width, f.height) / 2 + w;
    const cx0 = f.width / 2;
    const cy0 = f.height / 2;
    let row = 0;
    for (let v = -reach; v <= reach; v += stepV, row++) {
      const shift = row % 2 ? stepU / 2 : 0;
      for (let u = -reach - shift; u <= reach; u += stepU) {
        const cx = cx0 + u * d.x + v * n.x;
        const cy = cy0 + u * d.y + v * n.y;
        if (cx < -w / 2 || cx > f.width + w / 2 || cy < -w / 2 || cy > f.height + w / 2) continue;
        place(cx, cy, size);
      }
    }
  });
  progress(0.7);
  const blob = await savePdf(doc);
  progress(1);
  return [{ name: `${baseName(file.name)}-watermarked.pdf`, blob }];
};

export default run;
