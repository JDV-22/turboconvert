// Renders a DOCX file page by page in the browser: docx-preview lays the
// document out as HTML at its real page size, long sections are cut into pages
// between lines, and each page is painted to a canvas with html2canvas-pro.
import { UserError, throwIfAborted } from '@/scripts/runtime/types';
import { collectWords, type TextBox } from './office-textlayer';
import { say, yieldToUi } from './office-common';

export interface RenderedPage {
  canvas: HTMLCanvasElement;
  /** Page size in points. */
  wPt: number;
  hPt: number;
  words: TextBox[];
}

interface Slice { section: HTMLElement; start: number; end: number; first: boolean; pageW: number; pageH: number; padT: number; padB: number }

const PX_TO_PT = 0.75;

function waitImages(root: HTMLElement): Promise<void> {
  const imgs = Array.from(root.querySelectorAll('img')).filter((i) => !i.complete);
  return Promise.all(imgs.map((i) => new Promise<void>((r) => { i.onload = i.onerror = () => r(); setTimeout(r, 5000); }))).then(() => undefined);
}

function slicesOf(section: HTMLElement): Slice[] {
  const cs = getComputedStyle(section);
  const pageW = section.offsetWidth;
  const pageH = parseFloat(cs.minHeight) || parseFloat(cs.height) || Math.round(pageW * 1.414);
  const padT = parseFloat(cs.paddingTop) || 0;
  const padB = parseFloat(cs.paddingBottom) || 0;
  const total = section.scrollHeight;
  if (total <= pageH + 2) return [{ section, start: padT, end: pageH - padB, first: true, pageW, pageH, padT, padB }];
  const top = section.getBoundingClientRect().top;
  const ch = Math.max(50, pageH - padT - padB);
  // break candidates: bottoms of lines / rows / pictures
  const cands = new Set<number>();
  for (const el of Array.from(section.querySelectorAll('p, li, tr, img, svg, h1, h2, h3, h4, h5, h6, table, article > *'))) {
    const r = (el as HTMLElement).getBoundingClientRect();
    if (r.height > 0) cands.add(Math.round((r.bottom - top) * 10) / 10);
  }
  // line bottoms inside paragraphs (so long paragraphs can be split)
  const range = document.createRange();
  for (const p of Array.from(section.querySelectorAll('p'))) {
    const pr = p.getBoundingClientRect();
    if (pr.height < ch * 0.3) continue;
    range.selectNodeContents(p);
    for (const r of Array.from(range.getClientRects())) cands.add(Math.round((r.bottom - top) * 10) / 10);
  }
  const sorted = [...cands].sort((a, b) => a - b);
  const contentEnd = Math.max(...sorted.filter((c) => c <= total), padT + 1);
  const out: Slice[] = [];
  let start = padT;
  let guard = 0;
  while (start < contentEnd - 1 && guard++ < 2000) {
    const target = start + ch;
    let end = target;
    for (const c of sorted) if (c > start + 5 && c <= target) end = c;
    if (target >= contentEnd) end = Math.min(target, Math.max(contentEnd, start + 1));
    out.push({ section, start, end, first: out.length === 0, pageW, pageH, padT, padB });
    start = end;
  }
  return out;
}

export async function renderDocx(
  file: File,
  opts: { scale: number; signal: AbortSignal; progress: (r: number) => void; onPage: (p: RenderedPage, index: number, total: number) => Promise<void> },
): Promise<number> {
  const [{ renderAsync }, h2c] = await Promise.all([import('docx-preview'), import('html2canvas-pro')]);
  const html2canvas = (h2c as unknown as { default: typeof import('html2canvas-pro').default }).default;
  const host = document.createElement('div');
  host.setAttribute('aria-hidden', 'true');
  host.style.cssText = 'position:absolute;left:-30000px;top:0;width:auto;background:#fff;pointer-events:none;';
  document.body.append(host);
  const styleHost = document.createElement('div');
  document.body.append(styleHost);
  try {
    try {
      await renderAsync(await file.arrayBuffer(), host, styleHost, {
        inWrapper: false, breakPages: true, ignoreLastRenderedPageBreak: false, experimental: true, useBase64URL: true,
        renderHeaders: true, renderFooters: true, renderFootnotes: true, renderEndnotes: true, renderComments: false, renderChanges: false,
      });
    } catch (e) {
      console.error(e);
      throw new UserError('invalid', say({ en: 'This file could not be read as a Word document (.docx).', fr: 'Ce fichier ne peut pas être lu comme un document Word (.docx).' }));
    }
    await waitImages(host);
    try { await document.fonts.ready; } catch { /* ignore */ }
    opts.progress(0.1);
    const sections = Array.from(host.querySelectorAll<HTMLElement>('section.docx'));
    if (!sections.length) throw new UserError('empty', say({ en: 'This document has no content to convert.', fr: 'Ce document ne contient rien à convertir.' }));
    const slices = sections.flatMap(slicesOf);
    // Each page is painted from a viewport that shows one slice of its section.
    const viewport = document.createElement('div');
    for (let i = 0; i < slices.length; i++) {
      throwIfAborted(opts.signal);
      const s = slices[i];
      const sectionHeight = s.section.scrollHeight;
      viewport.style.cssText = `position:relative;width:${s.pageW}px;height:${s.pageH}px;overflow:hidden;background:#fff;`;
      const holder = s.section.parentElement!;
      const next = s.section.nextSibling;
      viewport.replaceChildren();
      host.append(viewport);
      viewport.append(s.section);
      const offset = s.start - s.padT;
      s.section.style.position = 'relative';
      s.section.style.top = `${-offset}px`;
      s.section.style.margin = '0';
      s.section.style.boxShadow = 'none';
      // white masks hide what belongs to the previous / next page
      const maskTop = document.createElement('div');
      maskTop.style.cssText = `position:absolute;left:0;top:0;width:100%;height:${s.first ? 0 : s.padT}px;background:#fff;z-index:5`;
      const visibleEnd = s.padT + (s.end - s.start);
      const isLast = i === slices.length - 1 || slices[i + 1].section !== s.section;
      const maskBottom = document.createElement('div');
      maskBottom.style.cssText = `position:absolute;left:0;top:${isLast ? s.pageH : visibleEnd}px;width:100%;height:${Math.max(0, s.pageH - visibleEnd)}px;background:#fff;z-index:5`;
      viewport.append(maskTop, maskBottom);
      const canvas = await html2canvas(viewport, {
        scale: opts.scale, backgroundColor: '#ffffff', logging: false, useCORS: true, width: s.pageW, height: s.pageH,
        onclone: (_doc: Document, el: HTMLElement) => { el.parentElement!.style.left = '0px'; },
      } as Parameters<typeof html2canvas>[1]);
      const frame = viewport.getBoundingClientRect();
      const bandTop = frame.top + (s.first ? 0 : s.padT);
      const bandBottom = frame.top + (isLast ? s.pageH : visibleEnd);
      const words = collectWords(s.section, new DOMRect(frame.left, frame.top, frame.width, frame.height), PX_TO_PT)
        .filter((w) => w.y / PX_TO_PT + frame.top >= bandTop - 1 && (w.y + w.h) / PX_TO_PT + frame.top <= bandBottom + 1);
      // put the section back
      s.section.style.top = '';
      holder.insertBefore(s.section, next);
      viewport.remove();
      void sectionHeight;
      await opts.onPage({ canvas, wPt: s.pageW * PX_TO_PT, hPt: s.pageH * PX_TO_PT, words }, i, slices.length);
      opts.progress(0.1 + ((i + 1) / slices.length) * 0.85);
      await yieldToUi();
    }
    return slices.length;
  } finally {
    host.remove();
    styleHost.remove();
  }
}
