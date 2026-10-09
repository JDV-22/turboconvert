// PDF → Excel (XLSX). Finds tables on each page (ruled grids, partially ruled
// grids and tables aligned with spaces only), keeps merged cells, converts
// numbers / percentages / dates into real Excel values with a matching number
// format, and sizes columns. Text outside tables is kept as rows too.
// Statements that continue over several pages end up in one sheet.
import { openPdf } from '@/scripts/lib/office-pdfjs';
import { extractPage } from '@/scripts/lib/office-pdf-extract';
import { PageAnalyzer, lineText, type Block, type ParaBlock, type TableBlock, type Line } from '@/scripts/lib/office-pdf-layout';
import { say, yieldToUi } from '@/scripts/lib/office-common';
import { UserError, throwIfAborted, withExt, type Engine } from '@/scripts/runtime/types';

interface OutCell {
  text: string;
  bold: boolean;
  italic: boolean;
  fill?: string;
  color?: string;
  borders?: { top: boolean; bottom: boolean; left: boolean; right: boolean };
  align?: 'left' | 'center' | 'right';
  colSpan?: number;
  rowSpan?: number;
  multiline?: boolean;
}
interface OutRow { cells: (OutCell | null)[]; tableId: number | null; header?: boolean }
interface PageRows { rows: OutRow[]; mainCols: number; mainBounds: number[] | null }

const run: Engine = async ({ files, progress, signal }) => {
  const file = files[0];
  const { pdfjs, doc, close } = await openPdf(file, signal);
  const pages: PageRows[] = [];
  let chars = 0;
  let images = 0;
  let tableId = 0;
  try {
    const n = doc.numPages;
    for (let p = 1; p <= n; p++) {
      throwIfAborted(signal);
      const page = await doc.getPage(p);
      const pd = await extractPage(page, pdfjs, { images: true, graphics: false });
      images += pd.images.length;
      for (const r of pd.runs) chars += r.str.trim().length;
      const layout = new PageAnalyzer(pd, { columns: false, headerFooter: false }).analyze();
      page.cleanup();
      const rows: OutRow[] = [];
      const tables = layout.blocks.filter((b): b is TableBlock => b.kind === 'table');
      const main = tables.sort((a, b) => b.cells.length - a.cells.length)[0] ?? null;
      for (const b of layout.blocks) emitBlock(b, rows, main, () => ++tableId);
      pages.push({ rows, mainCols: main ? main.cols.length - 1 : 0, mainBounds: main ? main.cols : null });
      progress((p / n) * 0.85);
      await yieldToUi();
    }
  } finally {
    await close();
  }
  if (chars < 3) {
    throw new UserError('empty', images
      ? say({ en: 'This PDF is a scanned image without a text layer. Run it through OCR PDF first, then convert it to Excel.', fr: 'Ce PDF est une image numérisée sans texte. Passez-le d’abord dans l’outil OCR PDF, puis convertissez-le en Excel.' })
      : say({ en: 'This PDF contains no text to convert.', fr: 'Ce PDF ne contient aucun texte à convertir.' }));
  }

  // ── Number conventions of the whole document ──
  const allText = pages.flatMap((pg) => pg.rows.flatMap((r) => r.cells.filter(Boolean).map((c) => c!.text)));
  const conv = detectConventions(allText);

  const ExcelJS = ((await import('exceljs')) as unknown as { default: typeof import('exceljs') }).default ?? (await import('exceljs'));
  const wb = new ExcelJS.Workbook();
  wb.creator = 'TurboConvert';
  wb.created = new Date();

  // One sheet for statements whose table continues on every page, one per page otherwise.
  const first = pages.find((pg) => pg.mainCols >= 2);
  const continuous = pages.length > 1 && !!first && pages.filter((pg) => pg.mainCols === first.mainCols
    && pg.mainBounds && first.mainBounds && Math.abs(pg.mainBounds[0] - first.mainBounds[0]) < 25).length >= Math.max(2, pages.length * 0.6);
  if (continuous) {
    const ws = wb.addWorksheet('Tables');
    let header: string | null = null;
    const rows: OutRow[] = [];
    pages.forEach((pg, i) => {
      for (const r of pg.rows) {
        if (r.header) {
          const key = r.cells.map((c) => c?.text ?? '').join('\u0001');
          if (header === key && i > 0) continue; // repeated table header
          header ??= key;
        }
        rows.push(r);
      }
    });
    writeSheet(ws, rows, conv);
  } else {
    pages.forEach((pg, i) => writeSheet(wb.addWorksheet(`Page ${i + 1}`), pg.rows, conv));
  }
  progress(0.95);
  const buf = await wb.xlsx.writeBuffer();
  progress(1);
  return [{ name: withExt(file.name, 'xlsx'), blob: new Blob([buf as ArrayBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }) }];
};

// ───────────── Blocks → rows ─────────────
function paraText(p: ParaBlock): string {
  let s = '';
  p.lines.forEach((l, i) => {
    const t = lineText(l).trim();
    if (i > 0) {
      if (/\p{L}-$/u.test(s) && /^\p{Ll}/u.test(t)) s = s.slice(0, -1);
      else s += ' ';
    }
    s += t;
  });
  return s.replace(/\s+/g, ' ').trim();
}

function styleOf(lines: Line[]) {
  const ink = lines.flatMap((l) => l.runs.filter((r) => r.str.trim()));
  const bold = ink.length > 0 && ink.every((r) => r.font.bold);
  const italic = ink.length > 0 && ink.every((r) => r.font.italic);
  const colors = new Set(ink.map((r) => r.color));
  const color = colors.size === 1 ? [...colors][0] : undefined;
  return { bold, italic, color: color && color !== '000000' ? color : undefined };
}

function blocksText(blocks: Block[]): { text: string; lines: Line[]; align?: 'left' | 'center' | 'right' } {
  const parts: string[] = [];
  const lines: Line[] = [];
  let align: 'left' | 'center' | 'right' | undefined;
  for (const b of blocks) {
    if (b.kind === 'para') {
      parts.push(b.tabs ? b.lines.map((l) => lineText(l).trim()).join(' ') : paraText(b));
      lines.push(...b.lines);
      align ??= b.align === 'justify' ? 'left' : b.align;
    } else if (b.kind === 'table') {
      for (const c of b.cells) { const t = blocksText(c.blocks); if (t.text) { parts.push(t.text); lines.push(...t.lines); } }
    }
  }
  return { text: parts.join('\n'), lines, align };
}

function emitBlock(b: Block, rows: OutRow[], main: TableBlock | null, nextId: () => number) {
  if (b.kind === 'table') {
    const id = nextId();
    const nr = b.rowsY.length - 1;
    const nc = b.cols.length - 1;
    const grid: OutRow[] = Array.from({ length: nr }, () => ({ cells: new Array(nc).fill(null), tableId: id }));
    for (const c of b.cells) {
      const t = blocksText(c.blocks);
      const st = styleOf(t.lines);
      // numbers are right-aligned by Excel anyway; keep explicit centre/right for text
      grid[c.r].cells[c.c] = {
        text: t.text, ...st, fill: c.fill, align: t.align,
        colSpan: c.colSpan, rowSpan: c.rowSpan, multiline: t.text.includes('\n'),
        borders: c.borders ? { top: !!c.borders.top, bottom: !!c.borders.bottom, left: !!c.borders.left, right: !!c.borders.right } : undefined,
      };
    }
    // header row: first row whose cells are text (not numbers) while later rows hold numbers
    if (grid.length >= 2) {
      const firstTexts = grid[0].cells.filter(Boolean).map((c) => c!.text).filter(Boolean);
      if (firstTexts.length >= 2 && firstTexts.every((t) => !/^[\d\s.,()%$€£¥+\-]+$/.test(t))) grid[0].header = true;
    }
    rows.push(...grid);
    return;
  }
  if (b.kind === 'columns') {
    for (const col of b.cols) for (const x of col.blocks) emitBlock(x, rows, main, nextId);
    return;
  }
  if (b.kind !== 'para') return;
  if (b.tabs) {
    // segments placed under the page's main table columns when possible
    const cells: (OutCell | null)[] = [];
    b.lines.forEach((seg, k) => {
      let col = k;
      if (main) {
        const cx = (seg.x0 + seg.x1) / 2;
        const ci = main.cols.findIndex((x, i) => i < main.cols.length - 1 && cx >= x && cx <= main.cols[i + 1]);
        if (ci >= 0) col = Math.max(ci, cells.length);
        else if (cx > main.cols[main.cols.length - 1]) col = Math.max(main.cols.length - 1, cells.length);
      }
      while (cells.length < col) cells.push(null);
      cells.push({ text: lineText(seg).trim(), ...styleOf([seg]) });
    });
    rows.push({ cells, tableId: null });
    return;
  }
  const text = paraText(b);
  if (text) rows.push({ cells: [{ text, ...styleOf(b.lines) }], tableId: null });
}

// ───────────── Values ─────────────
interface Conventions { decimalComma: boolean; dayFirst: boolean | null }

function detectConventions(texts: string[]): Conventions {
  let dot = 0, comma = 0, dayFirst = 0, monthFirst = 0;
  for (const raw of texts) {
    for (const t of raw.split(/\s{2,}|\n/)) {
      const s = t.trim();
      if (/\d[.,]\d{3}[,]\d{1,2}\b/.test(s) || /\d\s\d{3},\d{1,2}\b/.test(s) || /^-?\d+,\d{1,2}$/.test(s)) comma++;
      if (/\d[,]\d{3}[.]\d{1,2}\b/.test(s) || /^-?\d+\.\d{1,2}$/.test(s)) dot++;
      const m = s.match(/^(\d{1,2})[/.-](\d{1,2})[/.-](\d{2,4})$/);
      if (m) {
        if (+m[1] > 12) dayFirst++;
        if (+m[2] > 12) monthFirst++;
      }
    }
  }
  return { decimalComma: comma > dot, dayFirst: dayFirst > monthFirst ? true : monthFirst > dayFirst ? false : null };
}

interface Value { v: number | Date | string; fmt?: string }

function toValue(text: string, conv: Conventions): Value {
  const s0 = text.trim();
  if (!s0 || s0.length > 40 || s0.includes('\n')) return { v: text };
  // dates
  let m = s0.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (m) return dateVal(+m[1], +m[2], +m[3], 'yyyy-mm-dd', text);
  m = s0.match(/^(\d{1,2})([/.-])(\d{1,2})\2(\d{4})$/);
  if (m && conv.dayFirst !== null) {
    const sep = m[2];
    return conv.dayFirst ? dateVal(+m[4], +m[3], +m[1], `dd${sep}mm${sep}yyyy`, text) : dateVal(+m[4], +m[1], +m[3], `mm${sep}dd${sep}yyyy`, text);
  }
  // numbers
  let s = s0.replace(/[   ]/g, ' ');
  let neg = false;
  let pct = false;
  let currency = '';
  const cur = s.match(/^([$€£¥₹]|USD|EUR|GBP|CHF|CAD|AUD)\s?/) || s.match(/\s?([$€£¥₹]|USD|EUR|GBP|CHF|CAD|AUD)$/);
  if (cur) { currency = cur[1]; s = s.replace(cur[0], '').trim(); }
  if (/^\(.*\)$/.test(s)) { neg = true; s = s.slice(1, -1).trim(); }
  if (/^[-−–]/.test(s)) { neg = !neg; s = s.slice(1).trim(); }
  else if (/^\+/.test(s)) s = s.slice(1).trim();
  if (/[-−]$/.test(s)) { neg = !neg; s = s.slice(0, -1).trim(); }
  if (!currency) {
    const cur2 = s.match(/^([$€£¥₹])\s?/) || s.match(/\s?([$€£¥₹])$/);
    if (cur2) { currency = cur2[1]; s = s.replace(cur2[0], '').trim(); }
  }
  if (/%$/.test(s)) { pct = true; s = s.slice(0, -1).trim(); }
  if (!/^\d/.test(s)) return { v: text };
  if (/^0\d/.test(s) && !/^0[.,]/.test(s)) return { v: text }; // leading zero: an identifier
  const dec = conv.decimalComma ? ',' : '.';
  const thou = conv.decimalComma ? '[.\\s]' : '[,\\s]';
  const re = new RegExp(`^\\d{1,3}(${thou}\\d{3})*(\\${dec}\\d+)?$|^\\d+(\\${dec}\\d+)?$`);
  if (!re.test(s)) return { v: text };
  const digits = s.replace(/[^\d]/g, '');
  if (digits.length > 15) return { v: text };
  const grouped = conv.decimalComma ? /[.\s]\d{3}/.test(s.split(',')[0]) : /[,\s]\d{3}/.test(s.split('.')[0]);
  const decimals = (s.split(dec)[1] ?? '').length;
  let num = parseFloat(s.replace(new RegExp(thou, 'g'), '').replace(dec, '.'));
  if (!Number.isFinite(num)) return { v: text };
  if (neg) num = -num;
  let fmt = `${grouped ? '#,##0' : '0'}${decimals ? '.' + '0'.repeat(Math.min(decimals, 10)) : ''}`;
  if (pct) { num /= 100; fmt = `${fmt}%`; }
  else if (currency) {
    const sym = currency.length === 1 ? currency : `${currency} `;
    fmt = /^[€]$/.test(currency) && conv.decimalComma ? `${fmt} "€"` : `"${sym}"${fmt}`;
  }
  if (/\(.*\)/.test(s0)) fmt = `${fmt};(${fmt})`;
  return { v: num, fmt };
}

function dateVal(y: number, mo: number, d: number, fmt: string, text: string): Value {
  if (mo < 1 || mo > 12 || d < 1 || d > 31 || y < 1900 || y > 2200) return { v: text };
  const dt = new Date(Date.UTC(y, mo - 1, d));
  if (dt.getUTCDate() !== d) return { v: text };
  return { v: dt, fmt };
}

// ───────────── Sheet writer ─────────────
function writeSheet(ws: import('exceljs').Worksheet, rows: OutRow[], conv: Conventions) {
  const widths: number[] = [];
  const thin = { style: 'thin' as const, color: { argb: 'FF808080' } };
  let r = 1;
  let prevTable: number | null = null;
  for (const row of rows) {
    // blank line between separate tables / text
    if (row.tableId !== prevTable && r > 1 && (row.tableId !== null || prevTable !== null)) r++;
    prevTable = row.tableId;
    row.cells.forEach((c, ci) => {
      if (!c || (!c.text && !c.fill && !c.borders)) return;
      const cell = ws.getCell(r, ci + 1);
      const val = c.multiline ? { v: c.text } : toValue(c.text, conv);
      if (c.text) cell.value = val.v as never;
      if (val.fmt) cell.numFmt = val.fmt;
      const font: Partial<import('exceljs').Font> = {};
      if (c.bold) font.bold = true;
      if (c.italic) font.italic = true;
      if (c.color && c.color !== 'ffffff') font.color = { argb: 'FF' + c.color.toUpperCase() };
      else if (c.color === 'ffffff' && c.fill) font.color = { argb: 'FFFFFFFF' };
      if (Object.keys(font).length) cell.font = font;
      if (c.fill) cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + c.fill.toUpperCase() } };
      if (c.borders && (c.borders.top || c.borders.bottom || c.borders.left || c.borders.right)) {
        cell.border = {
          ...(c.borders.top ? { top: thin } : {}), ...(c.borders.bottom ? { bottom: thin } : {}),
          ...(c.borders.left ? { left: thin } : {}), ...(c.borders.right ? { right: thin } : {}),
        };
      }
      const alignment: Partial<import('exceljs').Alignment> = { vertical: 'top' };
      if (c.multiline) alignment.wrapText = true;
      if (typeof val.v === 'string' && c.align && c.align !== 'left') alignment.horizontal = c.align;
      cell.alignment = alignment;
      const span = c.colSpan ?? 1;
      const longest = Math.max(...c.text.split('\n').map((l) => l.length));
      const fmtLen = typeof val.v === 'number' ? String(val.v.toFixed(2)).length + 3 : longest;
      const perCol = (c.multiline ? Math.min(fmtLen, 50) : fmtLen) / span;
      // long free text (titles, paragraphs) should not blow up the first column
      const w = row.tableId === null && row.cells.length === 1 ? Math.min(perCol, 14) : perCol;
      for (let k = 0; k < span; k++) widths[ci + k] = Math.max(widths[ci + k] ?? 0, w);
      if ((c.colSpan ?? 1) > 1 || (c.rowSpan ?? 1) > 1) {
        try { ws.mergeCells(r, ci + 1, r + (c.rowSpan ?? 1) - 1, ci + (c.colSpan ?? 1)); } catch { /* overlapping merge */ }
      }
    });
    r++;
  }
  widths.forEach((w, i) => { ws.getColumn(i + 1).width = Math.max(6, Math.min(60, Math.round(w * 1.1 + 2))); });
}

export default run;
