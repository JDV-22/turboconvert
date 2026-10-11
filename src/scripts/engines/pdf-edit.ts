import {
  PDFCheckBox, PDFDropdown, PDFOptionList, PDFRadioGroup, PDFTextField, StandardFonts, degrees, rgb,
  type PDFFont, type PDFImage, type PDFPage,
} from 'pdf-lib';
import { loadPdf, savePdf } from '@/scripts/lib/pdf';
import { UserError, withExt, baseName, type Engine } from '@/scripts/runtime/types';

/**
 * Items placed by the edit UI. Positions are fractions of the page as displayed
 * (after /Rotate), origin top-left: x,y = top-left corner, w,h = size.
 */
export type EditItem =
  | { kind: 'text'; page: number; x: number; y: number; size: number; color: string; text: string }
  | { kind: 'image'; page: number; x: number; y: number; w: number; h: number; src: string }
  | { kind: 'rect'; page: number; x: number; y: number; w: number; h: number; fill: 'white' | 'highlight' };

export interface EditPlan { items: EditItem[]; fields: Record<string, string | boolean> }

const SUFFIX: Record<string, string> = { edit: 'edited', sign: 'signed', fill: 'filled' };

function hexColor(hex: string) {
  const n = parseInt(hex.replace('#', ''), 16) || 0;
  return rgb(((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255);
}

/** Map a displayed-page point (fractions, origin top-left) to PDF user space. */
function toUser(page: PDFPage, u: number, v: number): { x: number; y: number } {
  const { x: x0, y: y0, width: W, height: H } = page.getCropBox();
  switch (((page.getRotation().angle % 360) + 360) % 360) {
    case 90: return { x: x0 + v * W, y: y0 + u * H };
    case 180: return { x: x0 + (1 - u) * W, y: y0 + v * H };
    case 270: return { x: x0 + (1 - v) * W, y: y0 + (1 - u) * H };
    default: return { x: x0 + u * W, y: y0 + (1 - v) * H };
  }
}

/** Displayed width/height of a page in points (swapped when rotated 90/270). */
function displaySize(page: PDFPage): { w: number; h: number; rot: number } {
  const { width, height } = page.getCropBox();
  const rot = ((page.getRotation().angle % 360) + 360) % 360;
  return rot % 180 ? { w: height, h: width, rot } : { w: width, h: height, rot };
}

const run: Engine = async ({ files, options, params, progress }) => {
  const file = files[0];
  const plan: EditPlan = JSON.parse(String(options.edits || '{"items":[],"fields":{}}'));
  if (!plan.items.length && !Object.keys(plan.fields).length) throw new UserError('options', String(options.emptyMsg || ''));
  const doc = await loadPdf(file);
  progress(0.2);

  const helv = await doc.embedFont(StandardFonts.Helvetica);
  // Standard fonts only cover Western European characters: drop the rest
  // rather than failing the whole document.
  const clean = (font: PDFFont, s: string) =>
    Array.from(s).filter((ch) => {
      if (ch === '\n') return true;
      try { font.encodeText(ch); return true; } catch { return false; }
    }).join('');

  // 1. Form fields.
  const names = Object.keys(plan.fields);
  if (names.length) {
    const form = doc.getForm();
    for (const name of names) {
      const value = plan.fields[name];
      const field = form.getFieldMaybe(name);
      if (!field) continue;
      try {
        if (field instanceof PDFTextField) {
          const text = clean(helv, String(value));
          const max = field.getMaxLength();
          field.setText(max ? text.slice(0, max) : text);
        } else if (field instanceof PDFCheckBox) {
          if (value === true || value === 'true') field.check(); else field.uncheck();
        } else if (field instanceof PDFRadioGroup) {
          if (value) field.select(String(value));
        } else if (field instanceof PDFDropdown || field instanceof PDFOptionList) {
          if (value) field.select(String(value));
        }
      } catch (e) {
        console.warn('field', name, e);
      }
    }
    form.updateFieldAppearances(helv);
  }
  progress(0.4);

  // 2. Placed items.
  const pages = doc.getPages();
  const images = new Map<string, PDFImage>();
  for (const item of plan.items) {
    const page = pages[item.page];
    if (!page) continue;
    const { w: DW, h: DH, rot } = displaySize(page);
    if (item.kind === 'text') {
      const size = Math.max(4, item.size * DW);
      const lines = clean(helv, item.text).split('\n');
      lines.forEach((line, i) => {
        if (!line.trim()) return;
        // Baseline of line i, matching the editor's line-height of 1.2.
        const p = toUser(page, item.x, item.y + ((0.95 + i * 1.2) * size) / DH);
        page.drawText(line, { x: p.x, y: p.y, size, font: helv, color: hexColor(item.color), rotate: degrees(rot) });
      });
    } else if (item.kind === 'image') {
      let img = images.get(item.src);
      if (!img) {
        const bytes = await (await fetch(item.src)).arrayBuffer();
        img = item.src.startsWith('data:image/png') ? await doc.embedPng(bytes) : await doc.embedJpg(bytes);
        images.set(item.src, img);
      }
      const p = toUser(page, item.x, item.y + item.h);
      page.drawImage(img, { x: p.x, y: p.y, width: item.w * DW, height: item.h * DH, rotate: degrees(rot) });
    } else if (item.kind === 'rect') {
      const p = toUser(page, item.x, item.y + item.h);
      const hl = item.fill === 'highlight';
      page.drawRectangle({
        x: p.x, y: p.y, width: item.w * DW, height: item.h * DH, rotate: degrees(rot),
        color: hl ? rgb(1, 0.9, 0.2) : rgb(1, 1, 1), opacity: hl ? 0.4 : 1, borderWidth: 0,
      });
    }
  }
  progress(0.8);
  const blob = await savePdf(doc);
  progress(1);
  const suffix = SUFFIX[String(params.mode)] ?? 'edited';
  return [{ name: withExt(`${baseName(file.name)}-${suffix}`, 'pdf'), blob }];
};

export default run;
