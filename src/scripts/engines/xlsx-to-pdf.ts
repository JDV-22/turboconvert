// Excel (XLSX) / CSV → PDF. Every non-empty sheet is drawn as a table with the
// sheet's column widths, fonts, fills, borders, alignment, merged cells and
// number formats; cell text wraps (never cut), the header row repeats on each
// page, wide sheets switch to landscape and are scaled to the page width.
// Pages are painted as images with an invisible, selectable text layer.
import { PDFDocument } from 'pdf-lib';
import { addTextLayer, collectWords } from '@/scripts/lib/office-textlayer';
import { canvasToBlob, freeCanvas, say, yieldToUi } from '@/scripts/lib/office-common';
import { savePdf } from '@/scripts/lib/pdf';
import { UserError, extOf, throwIfAborted, withExt, type Engine } from '@/scripts/runtime/types';

interface SCell { text: string; style: string; colSpan: number; rowSpan: number; skip: boolean; num: boolean }
interface SSheet { name: string; widths: number[]; rows: SCell[][]; /** index of the header row repeated on every page, -1 if none */ header: number }

const PAGE = { w: 794, h: 1123 }; // A4 at 96 dpi
const MARGIN = 36;

// ───────────── CSV ─────────────
function parseCsv(text: string): string[][] {
  const first = text.split('\n', 1)[0];
  const delim = [',', ';', '\t', '|'].sort((a, b) => first.split(b).length - first.split(a).length)[0];
  const rows: string[][] = [];
  let row: string[] = [];
  let cur = '';
  let q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"') { if (text[i + 1] === '"') { cur += '"'; i++; } else q = false; }
      else cur += c;
    } else if (c === '"') q = true;
    else if (c === delim) { row.push(cur); cur = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(cur); rows.push(row); row = []; cur = '';
    } else cur += c;
  }
  if (cur || row.length) { row.push(cur); rows.push(row); }
  return rows.filter((r) => r.some((x) => x.trim()));
}

// ───────────── Number formats ─────────────
function pad(n: number, l = 2) { return String(n).padStart(l, '0'); }
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function fmtDate(d: Date, f: string): string {
  const y = d.getUTCFullYear(), m = d.getUTCMonth() + 1, day = d.getUTCDate(), h = d.getUTCHours(), mi = d.getUTCMinutes(), s = d.getUTCSeconds();
  if (!f || /general/i.test(f)) return `${y}-${pad(m)}-${pad(day)}${h || mi ? ` ${pad(h)}:${pad(mi)}` : ''}`;
  let out = f.replace(/\[[^\]]*\]/g, '').replace(/\\/g, '').replace(/"/g, '');
  out = out.replace(/yyyy/gi, String(y)).replace(/yy/gi, pad(y % 100))
    .replace(/mmmm/g, MONTHS[m - 1]).replace(/mmm/g, MONTHS[m - 1])
    .replace(/(h+)(:)mm/gi, (_a, hh, c) => `${hh}${c}${pad(mi)}`).replace(/mm(:ss)/g, `${pad(mi)}$1`)
    .replace(/mm/gi, pad(m)).replace(/(^|[^a-z])m([^a-z]|$)/gi, `$1${m}$2`)
    .replace(/dd/gi, pad(day)).replace(/(^|[^a-z])d([^a-z]|$)/gi, `$1${day}$2`)
    .replace(/hh/gi, pad(h)).replace(/ss/gi, pad(s));
  return out;
}

function fmtNumber(v: number, f: string): string {
  if (!f || /^general$/i.test(f)) {
    if (Number.isInteger(v)) return String(v);
    return String(Number(v.toPrecision(11)));
  }
  const parts = f.split(';');
  let sec = parts[0];
  let neg = v < 0;
  if (v < 0 && parts[1]) { sec = parts[1]; neg = false; }
  else if (v === 0 && parts[2]) sec = parts[2];
  const lit = sec.replace(/\[[^\]]*\]/g, '');
  const pct = lit.includes('%');
  const m = lit.replace(/"[^"]*"/g, '').match(/[#0,]*\.?[0#]*/g)?.find((x) => /[0#]/.test(x)) ?? '0';
  const decimals = (m.split('.')[1] ?? '').replace(/[^0#]/g, '').length;
  const group = m.includes(',');
  let x = Math.abs(v) * (pct ? 100 : 1);
  let s = x.toFixed(decimals);
  if (group) { const [i, d] = s.split('.'); s = i.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (d ? '.' + d : ''); }
  void x;
  // rebuild with literal prefix / suffix
  const idx = lit.indexOf(m);
  const pre = lit.slice(0, idx).replace(/"([^"]*)"/g, '$1').replace(/[_*\\].?/g, '').replace(/[()]/g, (c) => c);
  const post = lit.slice(idx + m.length).replace(/"([^"]*)"/g, '$1').replace(/[_*\\].?/g, '');
  let out = `${pre}${s}${post}`.trim();
  if (neg) out = '-' + out;
  return out;
}

function cellText(cell: import('exceljs').Cell): { text: string; num: boolean } {
  let v: unknown = cell.value;
  if (v && typeof v === 'object' && ('formula' in (v as object) || 'sharedFormula' in (v as object) || 'result' in (v as object))) {
    v = (v as { result?: unknown }).result;
    if (v && typeof v === 'object' && 'error' in (v as object)) return { text: String((v as { error: unknown }).error), num: false };
  }
  if (v && typeof v === 'object' && 'richText' in (v as object)) return { text: (v as { richText: { text: string }[] }).richText.map((r) => r.text).join(''), num: false };
  if (v && typeof v === 'object' && 'text' in (v as object)) return { text: String((v as { text: unknown }).text), num: false };
  if (v && typeof v === 'object' && 'error' in (v as object)) return { text: String((v as { error: unknown }).error), num: false };
  const f = cell.numFmt ?? '';
  if (v instanceof Date) return { text: fmtDate(v, f), num: true };
  if (typeof v === 'number') {
    if (/[dmy]/i.test(f.replace(/"[^"]*"|\[[^\]]*\]/g, '')) && !/^[#0,.%]+$/.test(f)) {
      const d = new Date(Math.round((v - 25569) * 86400000));
      return { text: fmtDate(d, f), num: true };
    }
    return { text: fmtNumber(v, f), num: true };
  }
  if (typeof v === 'boolean') return { text: v ? 'TRUE' : 'FALSE', num: true };
  return { text: v == null ? '' : String(v), num: false };
}

function argb(c: { argb?: string } | undefined): string | null {
  const a = c?.argb;
  if (!a || a.length < 6) return null;
  return '#' + a.slice(-6);
}

function esc(s: string): string {
  return s.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c]!);
}

async function readSheets(file: File): Promise<SSheet[]> {
  const ext = extOf(file.name);
  if (ext === 'csv') {
    const rows = parseCsv(await file.text());
    const nc = Math.max(0, ...rows.map((r) => r.length));
    const widths = Array.from({ length: nc }, (_, c) => Math.min(320, Math.max(48, Math.max(...rows.map((r) => (r[c] ?? '').length)) * 7 + 12)));
    return [{
      name: file.name, widths, header: 0,
      rows: rows.map((r, ri) => Array.from({ length: nc }, (_, c) => {
        const t = r[c] ?? '';
        const num = /^-?[\d.,\s]+%?$/.test(t.trim()) && /\d/.test(t);
        return { text: t, num, style: ri === 0 ? 'font-weight:700;background:#f1f3f6;' : '', colSpan: 1, rowSpan: 1, skip: false };
      })),
    }];
  }
  const ExcelJS = ((await import('exceljs')) as unknown as { default: typeof import('exceljs') }).default;
  const wb = new ExcelJS.Workbook();
  try {
    await wb.xlsx.load(await file.arrayBuffer());
  } catch {
    throw new UserError('invalid', say({ en: 'This file could not be read as an Excel workbook (.xlsx).', fr: 'Ce fichier ne peut pas être lu comme un classeur Excel (.xlsx).' }));
  }
  const sheets: SSheet[] = [];
  wb.eachSheet((ws) => {
    if (ws.state && ws.state !== 'visible') return;
    const nr = ws.actualRowCount ? ws.rowCount : 0;
    const nc = ws.columnCount;
    if (!nr || !nc) return;
    // last row / column with content
    let maxR = 0, maxC = 0;
    ws.eachRow({ includeEmpty: false }, (row, r) => {
      row.eachCell({ includeEmpty: false }, (cell, c) => {
        if (cellText(cell).text.trim() || cell.fill) { maxR = Math.max(maxR, r); maxC = Math.max(maxC, c); }
      });
    });
    if (!maxR) return;
    const widths: number[] = [];
    for (let c = 1; c <= maxC; c++) {
      const col = ws.getColumn(c);
      widths.push(col.hidden ? 0 : Math.round((col.width ?? 8.43) * 7 + 5));
    }
    const rows: SCell[][] = [];
    for (let r = 1; r <= maxR; r++) {
      const row = ws.getRow(r);
      const cells: SCell[] = [];
      for (let c = 1; c <= maxC; c++) {
        const cell = row.getCell(c);
        const { text, num } = cellText(cell);
        let st = '';
        const f = cell.font;
        if (f?.bold) st += 'font-weight:700;';
        if (f?.italic) st += 'font-style:italic;';
        if (f?.underline) st += 'text-decoration:underline;';
        if (f?.size) st += `font-size:${Math.max(6, Math.min(36, f.size)) * 1.333}px;`;
        if (f?.name) st += `font-family:"${f.name.replace(/"/g, '')}",Calibri,Carlito,Arial,sans-serif;`;
        const fc = argb(f?.color as { argb?: string });
        if (fc) st += `color:${fc};`;
        const fill = cell.fill as { type?: string; pattern?: string; fgColor?: { argb?: string } } | undefined;
        if (fill?.type === 'pattern' && fill.pattern === 'solid') { const bg = argb(fill.fgColor); if (bg) st += `background:${bg};`; }
        const a = cell.alignment;
        const h = !a?.horizontal || (a.horizontal as string) === 'general' ? (num ? 'right' : 'left') : a.horizontal;
        st += `text-align:${h === 'centerContinuous' ? 'center' : h === 'fill' || h === 'distributed' || h === 'justify' ? 'left' : h};`;
        st += `vertical-align:${a?.vertical === 'top' ? 'top' : a?.vertical === 'middle' ? 'middle' : 'bottom'};`;
        if (a?.wrapText) st += 'white-space:pre-wrap;';
        const b = cell.border;
        for (const side of ['top', 'right', 'bottom', 'left'] as const) {
          const e = b?.[side];
          if (e?.style) st += `border-${side}:${/medium|thick|double/.test(e.style) ? 2 : 1}px solid ${argb(e.color as { argb?: string }) ?? '#000'};`;
        }
        cells.push({ text, num, style: st, colSpan: 1, rowSpan: 1, skip: false });
      }
      if (row.hidden) continue;
      rows.push(cells);
    }
    // merged cells
    for (const range of (ws.model as { merges?: string[] }).merges ?? []) {
      const m = range.match(/^([A-Z]+)(\d+):([A-Z]+)(\d+)$/);
      if (!m) continue;
      const col = (s: string) => s.split('').reduce((acc, ch) => acc * 26 + ch.charCodeAt(0) - 64, 0);
      const r0 = +m[2] - 1, c0 = col(m[1]) - 1, r1 = +m[4] - 1, c1 = col(m[3]) - 1;
      if (!rows[r0]?.[c0]) continue;
      rows[r0][c0].colSpan = Math.min(c1, maxC - 1) - c0 + 1;
      rows[r0][c0].rowSpan = Math.min(r1, rows.length - 1) - r0 + 1;
      for (let r = r0; r <= r1; r++) for (let c = c0; c <= c1; c++) if ((r !== r0 || c !== c0) && rows[r]?.[c]) rows[r][c].skip = true;
    }
    // first row is a header when it is all text and the next rows hold numbers
    let header = -1;
    for (let r = 0; r < Math.min(6, rows.length - 1) && header < 0; r++) {
      const t = rows[r].filter((c) => c.text.trim() && !c.skip);
      if (t.length >= 2 && t.every((c) => !c.num) && rows.slice(r + 1, r + 6).some((x) => x.some((c) => c.num))) header = r;
    }
    sheets.push({ name: ws.name, widths, rows, header });
  });
  return sheets;
}

function rowHtml(cells: SCell[], widths: number[]): string {
  let h = '<tr>';
  cells.forEach((c, i) => {
    if (c.skip || !widths[i]) return;
    h += `<td${c.colSpan > 1 ? ` colspan="${c.colSpan}"` : ''}${c.rowSpan > 1 ? ` rowspan="${c.rowSpan}"` : ''} style="${c.style}">${esc(c.text)}</td>`;
  });
  return h + '</tr>';
}

const run: Engine = async ({ files, options, progress, signal }) => {
  const file = files[0];
  const [sheets, h2c] = await Promise.all([readSheets(file), import('html2canvas-pro')]);
  const html2canvas = (h2c as unknown as { default: typeof import('html2canvas-pro').default }).default;
  if (!sheets.length) throw new UserError('empty', say({ en: 'This spreadsheet has no data to convert.', fr: 'Ce classeur ne contient aucune donnée à convertir.' }));
  progress(0.1);
  const pdf = await PDFDocument.create();
  pdf.setTitle(file.name.replace(/\.[^.]+$/, ''));
  const host = document.createElement('div');
  host.setAttribute('aria-hidden', 'true');
  host.style.cssText = 'position:absolute;left:-30000px;top:0;background:#fff;';
  document.body.append(host);
  const css = 'table{border-collapse:collapse;table-layout:fixed;font:13px Calibri,Carlito,Arial,sans-serif;color:#000}'
    + 'td{padding:2px 4px;overflow-wrap:anywhere;white-space:pre-wrap;line-height:1.25}';
  try {
    for (let si = 0; si < sheets.length; si++) {
      const sh = sheets[si];
      const tableW = sh.widths.reduce((a, b) => a + b, 0);
      const orient = String(options.orientation ?? 'auto');
      const landscape = orient === 'landscape' || (orient === 'auto' && tableW > PAGE.w - 2 * MARGIN);
      const pw = landscape ? PAGE.h : PAGE.w, ph = landscape ? PAGE.w : PAGE.h;
      const cw = pw - 2 * MARGIN, chH = ph - 2 * MARGIN;
      // column groups: scale to width down to 60 %, split the columns beyond that
      const groups: number[][] = [];
      let scale = Math.min(1, cw / Math.max(1, tableW));
      if (scale < 0.6) {
        scale = 0.6;
        let cur: number[] = [], w = 0;
        sh.widths.forEach((cwid, i) => {
          if (w + cwid > cw / scale && cur.length) { groups.push(cur); cur = []; w = 0; }
          cur.push(i); w += cwid;
        });
        if (cur.length) groups.push(cur);
      } else groups.push(sh.widths.map((_, i) => i));
      for (const g of groups) {
        const widths = sh.widths.map((w, i) => (g.includes(i) ? w : 0));
        const gw = widths.reduce((a, b) => a + b, 0);
        const colgroup = `<colgroup>${widths.filter(Boolean).map((w) => `<col style="width:${w}px">`).join('')}</colgroup>`;
        // measure rows
        host.innerHTML = `<style>${css}</style><table style="width:${gw}px">${colgroup}${sh.rows.map((r) => rowHtml(r, widths)).join('')}</table>`;
        const trs = Array.from(host.querySelectorAll('tr'));
        const heights = trs.map((tr) => tr.getBoundingClientRect().height);
        const avail = chH / scale;
        const hr = sh.header;
        const headH = hr >= 0 ? heights[hr] : 0;
        const pages: number[][] = [];
        let cur: number[] = [], used = 0;
        for (let r = 0; r < sh.rows.length; r++) {
          if (r === hr && !pages.length && !cur.length) { cur.push(r); used += heights[r]; continue; }
          if (r === hr) { cur.push(r); used += heights[r]; continue; }
          const hgt = heights[r];
          if (cur.length && used + hgt > avail - headH) { pages.push(cur); cur = []; used = 0; }
          cur.push(r); used += hgt;
        }
        if (cur.length || !pages.length) pages.push(cur);
        for (let pi = 0; pi < pages.length; pi++) {
          throwIfAborted(signal);
          const rowsIdx = pi > 0 && hr >= 0 && !pages[pi].includes(hr) ? [hr, ...pages[pi]] : pages[pi];
          const body = rowsIdx.map((r) => {
            // clip row spans at the page end
            const cells = sh.rows[r].map((c) => ({ ...c, rowSpan: Math.min(c.rowSpan, rowsIdx.length - rowsIdx.indexOf(r)) }));
            return rowHtml(cells, widths);
          }).join('');
          host.innerHTML = `<style>${css}</style><div class="pg" style="position:relative;width:${pw}px;height:${ph}px;background:#fff;overflow:hidden">`
            + `<div style="position:absolute;left:${MARGIN}px;top:${MARGIN}px;transform:scale(${scale});transform-origin:0 0">`
            + `<table style="width:${gw}px">${colgroup}${body}</table></div></div>`;
          const pg = host.querySelector<HTMLElement>('.pg')!;
          const canvas = await html2canvas(pg, {
            scale: 2, backgroundColor: '#ffffff', logging: false, width: pw, height: ph,
            onclone: (_d: Document, el: HTMLElement) => { el.parentElement!.style.left = '0px'; },
          } as Parameters<typeof html2canvas>[1]);
          const frame = pg.getBoundingClientRect();
          const words = collectWords(pg, frame, 0.75);
          const blob = await canvasToBlob(canvas, 'image/jpeg', 0.85);
          freeCanvas(canvas);
          const img = await pdf.embedJpg(new Uint8Array(await blob.arrayBuffer()));
          const page = pdf.addPage([pw * 0.75, ph * 0.75]);
          page.drawImage(img, { x: 0, y: 0, width: pw * 0.75, height: ph * 0.75 });
          addTextLayer(pdf, page, words);
          await yieldToUi();
        }
      }
      progress(0.1 + ((si + 1) / sheets.length) * 0.85);
    }
  } finally {
    host.remove();
  }
  const blob = await savePdf(pdf);
  progress(1);
  return [{ name: withExt(file.name, 'pdf'), blob }];
};

export default run;
