// Rebuild readable plain text from pdf.js text items: items are placed by
// their on-screen position (rotation applied), grouped into lines, joined with
// spaces where there is a visible gap, and separated by a blank line where the
// vertical gap is clearly larger than the normal line spacing (paragraphs).
import type { PDFPageProxy } from 'pdfjs-dist';

interface Item { x: number; y: number; w: number; h: number; str: string; rtl: boolean }
interface Line { y: number; h: number; items: Item[] }

/** Vertical extent of an item (top-down coordinates): from ascender to descender. */
const top = (i: { y: number; h: number }) => i.y - i.h * 0.8;
const bottom = (i: { y: number; h: number }) => i.y + i.h * 0.2;

type Util = { transform: (a: number[], b: number[]) => number[] };

export async function pageText(page: PDFPageProxy, util: Util): Promise<string> {
  const viewport = page.getViewport({ scale: 1 });
  const content = await page.getTextContent();
  const items: Item[] = [];
  const sideways: string[] = [];
  for (const it of content.items as Array<{ str?: string; transform?: number[]; width?: number; dir?: string }>) {
    if (typeof it.str !== 'string' || !it.transform || !it.str.trim()) continue;
    const t = util.transform(viewport.transform as number[], it.transform);
    // Rotated text (e.g. a vertical margin note) would break lines: keep it apart.
    if (Math.abs(t[1]) > Math.abs(t[0]) * 0.1) {
      sideways.push(it.str.trim());
      continue;
    }
    const h = Math.hypot(t[2], t[3]) || 1;
    // Width in viewport units: text space width scaled like the font size.
    const fs = Math.hypot(it.transform[2], it.transform[3]) || 1;
    const w = ((it.width ?? 0) * h) / fs;
    items.push({ x: t[4], y: t[5], w, h, str: it.str, rtl: it.dir === 'rtl' });
  }
  if (!items.length) return sideways.join('\n');

  items.sort((a, b) => a.y - b.y || a.x - b.x);
  const lines: Line[] = [];
  for (const it of items) {
    const line = lines[lines.length - 1];
    // Same line when the vertical extents overlap by at least half of the smaller one
    // (keeps superscripts and footnote marks on their line).
    const overlap = line ? Math.min(bottom(it), bottom(line)) - Math.max(top(it), top(line)) : 0;
    if (line && overlap > 0.5 * Math.min(it.h, line.h)) {
      line.items.push(it);
      if (it.h > line.h) {
        line.h = it.h;
        line.y = it.y;
      }
    } else {
      lines.push({ y: it.y, h: it.h, items: [it] });
    }
  }

  const texts = lines.map((line) => {
    const rtl = line.items.filter((i) => i.rtl).length > line.items.length / 2;
    line.items.sort((a, b) => (rtl ? b.x - a.x : a.x - b.x));
    let s = '';
    let prev: Item | null = null;
    for (const it of line.items) {
      if (prev) {
        const gap = rtl ? prev.x - (it.x + it.w) : it.x - (prev.x + prev.w);
        const size = Math.max(prev.h, it.h);
        if (gap > size * 2.5) s += '    ';
        else if (gap > size * 0.12 && !/\s$/.test(s) && !/^\s/.test(it.str)) s += ' ';
      }
      s += it.str;
      prev = it;
    }
    return s.replace(/[ \t]+$/, '');
  });

  // Typical line spacing on this page (median of baseline steps).
  const steps: number[] = [];
  for (let i = 1; i < lines.length; i++) {
    const d = lines[i].y - lines[i - 1].y;
    if (d > 0 && d < lines[i].h * 3) steps.push(d);
  }
  steps.sort((a, b) => a - b);
  const median = steps.length ? steps[Math.floor(steps.length / 2)] : 0;

  let out = texts[0];
  for (let i = 1; i < lines.length; i++) {
    const d = lines[i].y - lines[i - 1].y;
    const h = Math.max(lines[i].h, lines[i - 1].h);
    const paragraph = d > Math.max(median * 1.45, h * 1.6) || d < 0;
    out += (paragraph ? '\n\n' : '\n') + texts[i];
  }
  if (sideways.length) out += `\n\n${sideways.join('\n')}`;
  return out;
}

export function pageSeparator(n: number, label: string): string {
  return `--- ${label} ${n} ---`;
}
