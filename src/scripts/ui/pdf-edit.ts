import type { PDFDocumentProxy, PageViewport } from 'pdfjs-dist';
import type { ToolUI } from '@/scripts/runtime/tool';
import { openPdf } from '@/scripts/lib/pdfjs-thumbs';
import type { EditItem } from '@/scripts/engines/pdf-edit';

// Editor for "Edit PDF", "Sign PDF" and "Fill PDF form": pages are rendered
// with PDF.js, items are HTML overlays positioned in page fractions, and the
// pdf-edit engine writes them into the file with pdf-lib.

type Tool = 'text' | 'date' | 'sign' | 'image' | 'check' | 'cross' | 'whiteout' | 'highlight';
type Item = EditItem & { id: number; el?: HTMLElement; aspect?: number };
interface Field { name: string; type: 'text' | 'check' | 'radio' | 'choice'; input: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement; initial: string | boolean; value?: string }

const COLORS = ['#111111', '#1a3fbf', '#c4291c'];
const ICON: Record<string, string> = {
  text: '<path d="M4 7V5h16v2M9 19h6M12 5v14"/>',
  date: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
  sign: '<path d="M3 17c3-1 4-9 7-9s-1 9 2 9 3-4 5-4 1 3 4 3"/><path d="M3 21h18"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  cross: '<path d="M18 6 6 18M6 6l12 12"/>',
  whiteout: '<rect x="3" y="7" width="18" height="10" rx="1.5"/><path d="M7 12h10" stroke-dasharray="2 2"/>',
  highlight: '<path d="m9 11-6 6v3h9l3-3"/><path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"/>',
  del: '<path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/>',
  minus: '<path d="M5 12h14"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
};
const svg = (k: string) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[k]}</svg>`;

const CSS = `
.pe-bar{position:sticky;top:calc(var(--header-h) + 6px);z-index:5;display:flex;flex-wrap:wrap;gap:6px;padding:8px;margin-bottom:10px;background:var(--surface);border:1px solid var(--line);border-radius:12px;box-shadow:var(--shadow-s)}
.pe-tool{display:inline-flex;align-items:center;gap:6px;height:36px;padding:0 11px;border:1px solid var(--line);border-radius:9px;background:var(--bg);color:var(--ink);font:inherit;font-size:14px;font-weight:550;cursor:pointer}
.pe-tool svg{width:17px;height:17px}
.pe-tool:hover{border-color:var(--line-strong)}
.pe-tool[aria-pressed=true]{background:var(--accent);border-color:var(--accent);color:var(--accent-ink)}
.pe-tool.pe-main{border-color:var(--accent);color:var(--accent)}
.pe-tool.pe-main[aria-pressed=true]{color:var(--accent-ink)}
.pe-hint{font-size:14px;color:var(--muted);margin:0 0 10px}
.pe-pages{display:flex;flex-direction:column;gap:14px;align-items:center;max-height:78vh;overflow:auto;padding:12px;background:var(--bg-soft);border-radius:12px;border:1px solid var(--line)}
.pe-page{position:relative;width:100%;max-width:860px;background:#fff;box-shadow:0 1px 4px rgb(0 0 0/.18);container-type:inline-size;touch-action:pan-y}
.pe-page canvas{display:block;width:100%;height:100%}
.pe-page.placing{cursor:crosshair}
.pe-num{position:absolute;right:6px;bottom:4px;font-size:11px;color:#888;pointer-events:none}
.pe-item{position:absolute;box-sizing:border-box;touch-action:none;cursor:move;outline:1px dashed transparent}
.pe-item:hover,.pe-item.sel{outline-color:var(--accent)}
.pe-item img{display:block;width:100%;height:100%;pointer-events:none;user-select:none}
.pe-text{white-space:pre;line-height:1.2;font-family:Helvetica,Arial,sans-serif;min-width:1ch;padding:0;outline-offset:2px}
.pe-text[contenteditable=true]{cursor:text;outline:1px solid var(--accent)}
.pe-text:empty::before{content:attr(data-ph);color:#999}
.pe-rect.white{background:#fff;outline:1px dashed #bbb}
.pe-rect.highlight{background:rgb(255 230 51/.4)}
.pe-handle{position:absolute;right:-7px;bottom:-7px;width:14px;height:14px;border-radius:50%;background:var(--accent);border:2px solid #fff;cursor:nwse-resize;display:none;touch-action:none}
.pe-item.sel .pe-handle{display:block}
.pe-mini{position:absolute;left:0;bottom:calc(100% + 6px);display:none;gap:2px;padding:3px;background:var(--surface);border:1px solid var(--line);border-radius:9px;box-shadow:var(--shadow);white-space:nowrap;z-index:2}
.pe-item.sel .pe-mini{display:flex}
.pe-mini button{width:28px;height:28px;display:grid;place-items:center;border:0;border-radius:7px;background:transparent;color:var(--ink);cursor:pointer}
.pe-mini button:hover{background:var(--bg-soft)}
.pe-mini svg{width:15px;height:15px}
.pe-dot{width:14px;height:14px;border-radius:50%}
.pe-field{position:absolute;box-sizing:border-box;margin:0;padding:0 2px;border:0;background:rgb(51 82 245/.12);font-family:Helvetica,Arial,sans-serif;color:#111;border-radius:2px}
.pe-field:focus{outline:2px solid var(--accent);background:rgb(51 82 245/.06)}
.pe-field[type=checkbox],.pe-field[type=radio]{accent-color:#1a3fbf;cursor:pointer}
textarea.pe-field{resize:none;line-height:1.15}
.pe-modal{border:0;border-radius:16px;padding:0;width:min(520px,calc(100vw - 32px));box-shadow:var(--shadow-l);background:var(--surface);color:var(--ink)}
.pe-modal::backdrop{background:rgb(0 0 0/.45)}
.pe-modal-in{padding:18px}
.pe-modal h3{margin:0 0 12px;font-size:18px}
.pe-tabs{display:flex;gap:6px;margin-bottom:12px}
.pe-tabs button{flex:1}
.pe-pad{width:100%;height:180px;border:1px dashed var(--line-strong);border-radius:10px;background:#fff;touch-action:none;display:block}
.pe-typed{width:100%;height:48px;font-size:18px;padding:0 12px;border:1px solid var(--line-strong);border-radius:10px;background:var(--bg);color:var(--ink);box-sizing:border-box}
.pe-preview{height:90px;display:grid;place-items:center;font-size:42px;color:#111;background:#fff;border-radius:10px;margin-top:10px;font-family:'Segoe Script','Brush Script MT','Snell Roundhand','Apple Chancery',cursive;overflow:hidden}
.pe-row{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-top:12px;flex-wrap:wrap}
.pe-colors{display:flex;gap:8px}
.pe-colors button{width:26px;height:26px;border-radius:50%;border:2px solid transparent;cursor:pointer}
.pe-colors button[aria-pressed=true]{border-color:var(--accent);box-shadow:0 0 0 2px var(--surface) inset}
.pe-small{font-size:13px;color:var(--muted);margin:6px 0 0}
`;

export default function createEditUI(host: HTMLElement, s: Record<string, string>): ToolUI {
  const cfgEl = host.closest('[data-tool-app]')?.querySelector('script[data-config]');
  const mode = String(cfgEl ? JSON.parse(cfgEl.textContent || '{}').params?.mode ?? 'edit' : 'edit');
  const str = (k: string, n?: number) => (s[`edit.${k}`] ?? '').replace('{n}', String(n ?? ''));
  const lang = document.documentElement.lang || 'en';

  let items: Item[] = [];
  let fields: Field[] = [];
  let nextId = 1;
  let tool: Tool | null = null;
  let pending: { src: string; aspect: number; w: number } | null = null;
  let signature: { src: string; aspect: number } | null = null;
  let current: File | null = null;
  let token = 0;
  let selected: Item | null = null;
  let pageEls: HTMLElement[] = [];
  // New texts reuse the last size/colour, so a form is filled consistently.
  let textSize = 0.018;
  let textColor = COLORS[0];

  const style = document.createElement('style');
  style.textContent = CSS;
  const bar = document.createElement('div');
  bar.className = 'pe-bar';
  bar.hidden = true;
  const hint = document.createElement('p');
  hint.className = 'pe-hint';
  const pagesBox = document.createElement('div');
  pagesBox.className = 'pe-pages';
  pagesBox.hidden = true;
  const imgInput = document.createElement('input');
  imgInput.type = 'file';
  imgInput.accept = 'image/png,image/jpeg,image/webp';
  imgInput.hidden = true;
  host.append(style, bar, hint, pagesBox, imgInput);

  // ── Toolbar ──
  const order: Tool[] = mode === 'sign'
    ? ['sign', 'text', 'date', 'check', 'cross', 'image', 'whiteout', 'highlight']
    : mode === 'fill'
      ? ['text', 'check', 'cross', 'date', 'sign', 'image', 'whiteout', 'highlight']
      : ['text', 'sign', 'image', 'check', 'cross', 'date', 'whiteout', 'highlight'];
  const toolBtns = new Map<Tool, HTMLButtonElement>();
  for (const t of order) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = `pe-tool${t === order[0] ? ' pe-main' : ''}`;
    b.innerHTML = `${svg(t)}<span>${str(t)}</span>`;
    b.setAttribute('aria-pressed', 'false');
    b.addEventListener('click', () => pickTool(t));
    toolBtns.set(t, b);
    bar.append(b);
  }

  const baseHint = () => (mode === 'sign' ? str('hintSign') : mode === 'fill' ? str('hintFill') : str('hintEdit'));
  const setTool = (t: Tool | null) => {
    tool = t;
    toolBtns.forEach((b, k) => b.setAttribute('aria-pressed', String(k === t)));
    pageEls.forEach((p) => p.classList.toggle('placing', !!t));
    hint.textContent = t ? str('place') : baseHint() + fieldsNote();
  };
  const pickTool = (t: Tool) => {
    if (tool === t) { setTool(null); pending = null; return; }
    if (t === 'sign') { openSignature(); return; }
    if (t === 'image') { imgInput.value = ''; imgInput.click(); return; }
    pending = null;
    setTool(t);
  };
  imgInput.addEventListener('change', async () => {
    const f = imgInput.files?.[0];
    const forSignature = !!imgInput.dataset.sig;
    delete imgInput.dataset.sig;
    if (!f) return;
    let img: { src: string; aspect: number };
    try { img = await toPng(f); } catch (e) { console.error(e); return; }
    if (forSignature) signature = img;
    pending = { ...img, w: forSignature ? 0.28 : 0.3 };
    setTool(forSignature ? 'sign' : 'image');
  });

  // ── Selection ──
  const select = (it: Item | null) => {
    if (selected && selected !== it) {
      selected.el?.classList.remove('sel');
      stopEditing(selected);
    }
    selected = it;
    it?.el?.classList.add('sel');
  };
  const stopEditing = (it: Item) => {
    if (it.kind !== 'text' || !it.el) return;
    const t = it.el.querySelector<HTMLElement>('.pe-text');
    if (!t || t.contentEditable !== 'true') return;
    t.contentEditable = 'false';
    it.text = t.innerText.replace(/\n$/, '');
    if (!it.text.trim()) remove(it);
  };
  const startEditing = (it: Item) => {
    const t = it.el?.querySelector<HTMLElement>('.pe-text');
    if (!t) return;
    t.contentEditable = 'true';
    t.focus();
    const r = document.createRange();
    r.selectNodeContents(t);
    r.collapse(false);
    const sel = window.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(r);
  };
  const remove = (it: Item) => {
    items = items.filter((x) => x !== it);
    it.el?.remove();
    if (selected === it) selected = null;
  };
  document.addEventListener('pointerdown', (e) => {
    if (!host.isConnected || !selected) return;
    const target = e.target as HTMLElement;
    if (!target.closest('.pe-item') && !target.closest('.pe-bar')) select(null);
  });
  document.addEventListener('keydown', (e) => {
    if (!selected || !host.isConnected) return;
    const editing = (e.target as HTMLElement).isContentEditable;
    if ((e.key === 'Delete' || e.key === 'Backspace') && !editing && !(e.target as HTMLElement).closest('input,textarea,select')) {
      e.preventDefault();
      remove(selected);
    } else if (e.key === 'Escape') select(null);
  });

  // ── Items ──
  const place = (it: Item) => {
    const page = pageEls[it.page];
    if (!page) return;
    const el = document.createElement('div');
    el.className = `pe-item${it.kind === 'rect' ? ` pe-rect ${it.fill === 'white' ? 'white' : 'highlight'}` : ''}`;
    it.el = el;
    const mini = document.createElement('div');
    mini.className = 'pe-mini';
    const mbtn = (html: string, title: string, fn: () => void) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.innerHTML = html;
      b.title = title;
      b.setAttribute('aria-label', title);
      b.addEventListener('pointerdown', (e) => e.stopPropagation());
      b.addEventListener('click', (e) => { e.stopPropagation(); fn(); });
      mini.append(b);
      return b;
    };
    if (it.kind === 'text') {
      const t = document.createElement('div');
      t.className = 'pe-text';
      t.dataset.ph = str('typeHere');
      t.textContent = it.text;
      t.contentEditable = 'false';
      t.addEventListener('input', () => { it.text = t.innerText.replace(/\n$/, ''); });
      el.append(t);
      const sizeFx = () => { t.style.fontSize = `${it.size * 100}cqw`; t.style.color = it.color; textSize = it.size; textColor = it.color; };
      mbtn(svg('minus'), str('smaller'), () => { it.size = Math.max(0.008, it.size / 1.15); sizeFx(); });
      mbtn(svg('plus'), str('bigger'), () => { it.size = Math.min(0.12, it.size * 1.15); sizeFx(); });
      const dot = mbtn('<span class="pe-dot"></span>', str('color'), () => {
        it.color = COLORS[(COLORS.indexOf(it.color) + 1) % COLORS.length];
        (dot.firstChild as HTMLElement).style.background = it.color;
        sizeFx();
      });
      (dot.firstChild as HTMLElement).style.background = it.color;
      sizeFx();
    } else if (it.kind === 'image') {
      const im = document.createElement('img');
      im.src = it.src;
      im.alt = '';
      el.append(im);
    }
    mbtn(svg('del'), str('delete'), () => remove(it));
    el.append(mini);
    if (it.kind !== 'text') {
      const h = document.createElement('span');
      h.className = 'pe-handle';
      el.append(h);
      h.addEventListener('pointerdown', (e) => resizeStart(e, it));
    }
    const pos = () => {
      el.style.left = `${it.x * 100}%`;
      el.style.top = `${it.y * 100}%`;
      if (it.kind !== 'text') { el.style.width = `${it.w * 100}%`; el.style.height = `${it.h * 100}%`; }
    };
    pos();
    el.addEventListener('pointerdown', (e) => dragStart(e, it, pos));
    page.append(el);
  };

  const dragStart = (e: PointerEvent, it: Item, pos: () => void) => {
    const t = (e.target as HTMLElement);
    if (t.isContentEditable || e.button > 0) return;
    e.preventDefault();
    e.stopPropagation();
    const page = pageEls[it.page].getBoundingClientRect();
    const sx = e.clientX, sy = e.clientY, ox = it.x, oy = it.y;
    let moved = false;
    const wasSelected = selected === it;
    select(it);
    const el = it.el!;
    el.setPointerCapture(e.pointerId);
    const move = (ev: PointerEvent) => {
      const dx = ev.clientX - sx, dy = ev.clientY - sy;
      if (!moved && Math.hypot(dx, dy) < 4) return;
      moved = true;
      const bw = el.offsetWidth / page.width, bh = el.offsetHeight / page.height;
      it.x = Math.min(Math.max(ox + dx / page.width, 0), Math.max(0, 1 - bw));
      it.y = Math.min(Math.max(oy + dy / page.height, 0), Math.max(0, 1 - bh));
      pos();
    };
    const up = () => {
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerup', up);
      el.removeEventListener('pointercancel', up);
      if (!moved && wasSelected && it.kind === 'text') startEditing(it);
    };
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerup', up);
    el.addEventListener('pointercancel', up);
  };

  const resizeStart = (e: PointerEvent, it: Item) => {
    if (it.kind === 'text') return;
    e.preventDefault();
    e.stopPropagation();
    const page = pageEls[it.page].getBoundingClientRect();
    const h = e.target as HTMLElement;
    h.setPointerCapture(e.pointerId);
    const sx = e.clientX, sy = e.clientY, ow = it.w, oh = it.h;
    const move = (ev: PointerEvent) => {
      const w = Math.min(Math.max(ow + (ev.clientX - sx) / page.width, 0.02), 1 - it.x);
      if (it.kind === 'image' && it.aspect) {
        it.w = w;
        it.h = Math.min((w * page.width) / it.aspect / page.height, 1 - it.y);
      } else {
        it.w = w;
        it.h = Math.min(Math.max(oh + (ev.clientY - sy) / page.height, 0.008), 1 - it.y);
      }
      it.el!.style.width = `${it.w * 100}%`;
      it.el!.style.height = `${it.h * 100}%`;
    };
    const up = () => { h.removeEventListener('pointermove', move); h.removeEventListener('pointerup', up); };
    h.addEventListener('pointermove', move);
    h.addEventListener('pointerup', up);
  };

  const addAt = (pageIndex: number, u: number, v: number, rect: DOMRect) => {
    if (!tool) return;
    const ratio = rect.width / rect.height;
    let it: Item | null = null;
    if (tool === 'text' || tool === 'date') {
      const text = tool === 'date' ? new Date().toLocaleDateString(lang) : '';
      const size = textSize;
      it = { id: nextId++, kind: 'text', page: pageIndex, x: u, y: Math.max(0, v - size * ratio * 0.6), size, color: textColor, text };
    } else if (tool === 'check' || tool === 'cross') {
      const w = 0.03;
      it = { id: nextId++, kind: 'image', page: pageIndex, x: u - w / 2, y: v - (w * ratio) / 2, w, h: w * ratio, src: markPng(tool), aspect: 1 };
    } else if ((tool === 'sign' || tool === 'image') && pending) {
      const w = pending.w;
      const h = (w * ratio) / pending.aspect;
      it = { id: nextId++, kind: 'image', page: pageIndex, x: Math.min(u, 1 - w), y: Math.min(Math.max(0, v - h / 2), 1 - h), w, h, src: pending.src, aspect: pending.aspect };
    } else if (tool === 'whiteout' || tool === 'highlight') {
      const w = 0.25, h = 0.03;
      it = { id: nextId++, kind: 'rect', page: pageIndex, x: Math.min(u, 1 - w), y: Math.max(0, v - h / 2), w, h, fill: tool === 'whiteout' ? 'white' : 'highlight' };
    }
    if (!it) return;
    it.x = Math.max(0, it.x);
    it.y = Math.max(0, it.y);
    items.push(it);
    place(it);
    select(it);
    const wasText = it.kind === 'text' && tool === 'text';
    // Signatures are often needed several times (initials on each page): keep the tool.
    if (tool !== 'sign') { setTool(null); pending = null; }
    if (wasText) startEditing(it);
  };

  // ── Signature dialog ──
  let dialog: HTMLDialogElement | null = null;
  const openSignature = () => {
    if (!dialog) dialog = buildSignatureDialog();
    dialog.showModal();
  };
  const buildSignatureDialog = (): HTMLDialogElement => {
    const d = document.createElement('dialog');
    d.className = 'pe-modal';
    d.innerHTML = `<div class="pe-modal-in"><h3></h3><div class="pe-tabs"></div><div data-pane="draw"><canvas class="pe-pad" width="960" height="360"></canvas><p class="pe-small"></p></div><div data-pane="type" hidden><input class="pe-typed" maxlength="60" /><div class="pe-preview"></div></div><div class="pe-row"><div class="pe-colors"></div><div style="display:flex;gap:8px"><button type="button" class="btn btn-sm btn-ghost" data-clear></button><button type="button" class="btn btn-sm" data-cancel></button><button type="button" class="btn btn-sm btn-primary" data-use></button></div></div></div>`;
    d.querySelector('h3')!.textContent = str('sigTitle');
    d.querySelector('.pe-small')!.textContent = str('sigDrawHint');
    const typed = d.querySelector<HTMLInputElement>('.pe-typed')!;
    typed.placeholder = str('sigName');
    const preview = d.querySelector<HTMLElement>('.pe-preview')!;
    const clearBtn = d.querySelector<HTMLButtonElement>('[data-clear]')!;
    clearBtn.textContent = str('sigClear');
    d.querySelector<HTMLButtonElement>('[data-cancel]')!.textContent = str('cancel');
    const useBtn = d.querySelector<HTMLButtonElement>('[data-use]')!;
    useBtn.textContent = str('sigUse');
    const pad = d.querySelector<HTMLCanvasElement>('.pe-pad')!;
    const ctx = pad.getContext('2d')!;
    let color = COLORS[1];
    let pane: 'draw' | 'type' = 'draw';
    let drawn = false;

    const tabs = d.querySelector('.pe-tabs')!;
    const tabBtn = (k: 'draw' | 'type' | 'upload') => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'pe-tool';
      b.textContent = str(k === 'draw' ? 'sigDraw' : k === 'type' ? 'sigType' : 'sigUpload');
      b.setAttribute('aria-pressed', String(k === 'draw'));
      b.addEventListener('click', () => {
        if (k === 'upload') { d.close(); imgInput.dataset.sig = '1'; imgInput.value = ''; imgInput.click(); return; }
        pane = k;
        tabs.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
        d.querySelector<HTMLElement>('[data-pane=draw]')!.hidden = k !== 'draw';
        d.querySelector<HTMLElement>('[data-pane=type]')!.hidden = k !== 'type';
        if (k === 'type') typed.focus();
      });
      tabs.append(b);
    };
    tabBtn('draw'); tabBtn('type'); tabBtn('upload');

    const colors = d.querySelector('.pe-colors')!;
    for (const c of COLORS.slice(0, 2)) {
      const b = document.createElement('button');
      b.type = 'button';
      b.style.background = c;
      b.setAttribute('aria-label', c);
      b.setAttribute('aria-pressed', String(c === color));
      b.addEventListener('click', () => {
        color = c;
        colors.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
        preview.style.color = c;
      });
      colors.append(b);
    }
    preview.style.color = color;
    typed.addEventListener('input', () => { preview.textContent = typed.value; });

    let last: { x: number; y: number } | null = null;
    const pt = (e: PointerEvent) => {
      const r = pad.getBoundingClientRect();
      return { x: ((e.clientX - r.left) / r.width) * pad.width, y: ((e.clientY - r.top) / r.height) * pad.height };
    };
    pad.addEventListener('pointerdown', (e) => { pad.setPointerCapture(e.pointerId); last = pt(e); });
    pad.addEventListener('pointermove', (e) => {
      if (!last) return;
      const p = pt(e);
      ctx.strokeStyle = color;
      ctx.lineWidth = 6;
      ctx.lineCap = ctx.lineJoin = 'round';
      ctx.beginPath();
      ctx.moveTo(last.x, last.y);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
      last = p;
      drawn = true;
    });
    const end = () => { last = null; };
    pad.addEventListener('pointerup', end);
    pad.addEventListener('pointercancel', end);
    clearBtn.addEventListener('click', () => { ctx.clearRect(0, 0, pad.width, pad.height); drawn = false; typed.value = ''; preview.textContent = ''; });
    d.querySelector('[data-cancel]')!.addEventListener('click', () => d.close());
    useBtn.addEventListener('click', () => {
      let out: { src: string; aspect: number } | null = null;
      if (pane === 'draw' && drawn) out = trimCanvas(pad);
      if (pane === 'type' && typed.value.trim()) out = typedSignature(typed.value.trim(), color, getComputedStyle(preview).fontFamily);
      if (!out) return;
      signature = out;
      d.close();
      pending = { ...out, w: 0.28 };
      setTool('sign');
    });
    host.append(d);
    return d;
  };
  // ── Pages ──
  const fieldsNote = () => {
    if (!current) return '';
    if (!fields.length) return mode === 'fill' ? ` ${str('noFields')}` : '';
    return ` ${str('fieldsFound', new Set(fields.map((f) => f.name)).size)}`;
  };

  const renderPage = async (doc: PDFDocumentProxy, n: number, box: HTMLElement, my: number) => {
    const page = await doc.getPage(n);
    if (my !== token) return;
    const base = page.getViewport({ scale: 1 });
    const width = Math.min(box.clientWidth || 800, 860);
    const scale = (width * Math.min(window.devicePixelRatio || 1, 2)) / base.width;
    const viewport = page.getViewport({ scale });
    const canvas = document.createElement('canvas');
    canvas.width = Math.ceil(viewport.width);
    canvas.height = Math.ceil(viewport.height);
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    await page.render({ canvasContext: ctx, viewport, canvas, annotationMode: 2 }).promise;
    if (my !== token) return;
    box.prepend(canvas);
    page.cleanup();
  };

  const addFields = async (doc: PDFDocumentProxy, n: number, box: HTMLElement, viewport: PageViewport) => {
    const page = await doc.getPage(n);
    const annots = await page.getAnnotations({ intent: 'display' });
    for (const a of annots as Record<string, any>[]) {
      if (a.subtype !== 'Widget' || !a.fieldName || a.readOnly || a.hidden) continue;
      const [x1, y1] = viewport.convertToViewportPoint(a.rect[0], a.rect[1]);
      const [x2, y2] = viewport.convertToViewportPoint(a.rect[2], a.rect[3]);
      const left = Math.min(x1, x2) / viewport.width, top = Math.min(y1, y2) / viewport.height;
      const w = Math.abs(x2 - x1) / viewport.width, h = Math.abs(y2 - y1) / viewport.height;
      let input: Field['input'] | null = null;
      let f: Field | null = null;
      if (a.fieldType === 'Tx') {
        input = document.createElement(a.multiLine ? 'textarea' : 'input');
        input.value = typeof a.fieldValue === 'string' ? a.fieldValue : '';
        if (a.maxLen) (input as HTMLInputElement).maxLength = a.maxLen;
        const px = Math.min(Math.abs(y2 - y1) * 0.62, 14);
        input.style.fontSize = `${(px / viewport.width) * 100}cqw`;
        f = { name: a.fieldName, type: 'text', input, initial: input.value };
      } else if (a.fieldType === 'Btn' && a.checkBox) {
        const c = document.createElement('input');
        c.type = 'checkbox';
        c.checked = !!a.fieldValue && a.fieldValue !== 'Off';
        input = c;
        f = { name: a.fieldName, type: 'check', input, initial: c.checked };
      } else if (a.fieldType === 'Btn' && a.radioButton) {
        const c = document.createElement('input');
        c.type = 'radio';
        c.name = `pe-${token}-${a.fieldName}`;
        c.checked = a.fieldValue === a.buttonValue;
        input = c;
        f = { name: a.fieldName, type: 'radio', input, initial: c.checked, value: String(a.buttonValue ?? '') };
      } else if (a.fieldType === 'Ch' && Array.isArray(a.options)) {
        const sel = document.createElement('select');
        sel.append(new Option('', ''));
        for (const o of a.options) sel.append(new Option(o.displayValue ?? o.exportValue, o.exportValue));
        sel.value = Array.isArray(a.fieldValue) ? a.fieldValue[0] ?? '' : a.fieldValue ?? '';
        const px = Math.min(Math.abs(y2 - y1) * 0.6, 14);
        sel.style.fontSize = `${(px / viewport.width) * 100}cqw`;
        input = sel;
        f = { name: a.fieldName, type: 'choice', input, initial: sel.value };
      }
      if (!input || !f) continue;
      input.className = 'pe-field';
      input.setAttribute('aria-label', a.alternativeText || a.fieldName);
      Object.assign(input.style, { left: `${left * 100}%`, top: `${top * 100}%`, width: `${w * 100}%`, height: `${h * 100}%` });
      input.addEventListener('pointerdown', (e) => e.stopPropagation());
      box.append(input);
      fields.push(f);
    }
    page.cleanup();
  };

  const load = async (file: File) => {
    const my = ++token;
    items = []; fields = []; selected = null; pageEls = [];
    pagesBox.innerHTML = '';
    pagesBox.hidden = false;
    bar.hidden = false;
    hint.textContent = str('loading');
    let doc: PDFDocumentProxy;
    try {
      doc = await openPdf(file);
    } catch (e) {
      console.error(e);
      hint.textContent = '';
      pagesBox.hidden = bar.hidden = true;
      return;
    }
    if (my !== token) return;
    // Create every page box first (right size, so the scrollbar is right), render lazily.
    for (let n = 1; n <= doc.numPages; n++) {
      const page = await doc.getPage(n);
      if (my !== token) return;
      const vp = page.getViewport({ scale: 1 });
      const box = document.createElement('div');
      box.className = 'pe-page';
      box.style.aspectRatio = `${vp.width} / ${vp.height}`;
      box.dataset.n = String(n);
      const num = document.createElement('span');
      num.className = 'pe-num';
      num.textContent = str('page', n);
      box.append(num);
      box.addEventListener('click', (e) => {
        if (!tool || (e.target as HTMLElement).closest('.pe-item,.pe-field')) return;
        const r = box.getBoundingClientRect();
        addAt(n - 1, (e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height, r);
      });
      pagesBox.append(box);
      pageEls.push(box);
      await addFields(doc, n, box, vp);
      page.cleanup();
    }
    setTool(null);
    const io = new IntersectionObserver((entries) => {
      for (const en of entries) {
        if (!en.isIntersecting) continue;
        io.unobserve(en.target);
        renderPage(doc, Number((en.target as HTMLElement).dataset.n), en.target as HTMLElement, my).catch(console.error);
      }
    }, { root: pagesBox, rootMargin: '600px 0px' });
    pageEls.forEach((p) => io.observe(p));
    if (mode === 'sign' && !signature) openSignature();
  };

  return {
    update(files) {
      const f = files[0] ?? null;
      if (f === current) return;
      current = f;
      if (f) load(f);
      else { token++; items = []; fields = []; pageEls = []; pagesBox.innerHTML = ''; pagesBox.hidden = bar.hidden = true; hint.textContent = ''; }
    },
    values() {
      if (selected) stopEditing(selected);
      const out: Record<string, string | boolean> = {};
      for (const f of fields) {
        if (f.type === 'radio') {
          const r = f.input as HTMLInputElement;
          if (r.checked && !f.initial) out[f.name] = f.value ?? '';
        } else if (f.type === 'check') {
          const c = (f.input as HTMLInputElement).checked;
          if (c !== f.initial) out[f.name] = c;
        } else if (f.input.value !== f.initial) out[f.name] = f.input.value;
      }
      const clean: EditItem[] = items
        .filter((it) => it.kind !== 'text' || it.text.trim())
        .map(({ id, el, aspect, ...rest }) => rest as EditItem);
      return { edits: JSON.stringify({ items: clean, fields: out }), emptyMsg: str('nothing') };
    },
  };
}

/** Draw a check mark or cross into a transparent PNG. */
function markPng(kind: 'check' | 'cross'): string {
  const c = document.createElement('canvas');
  c.width = c.height = 96;
  const ctx = c.getContext('2d')!;
  ctx.strokeStyle = '#111';
  ctx.lineWidth = 11;
  ctx.lineCap = ctx.lineJoin = 'round';
  ctx.beginPath();
  if (kind === 'check') { ctx.moveTo(14, 52); ctx.lineTo(38, 76); ctx.lineTo(84, 20); }
  else { ctx.moveTo(18, 18); ctx.lineTo(78, 78); ctx.moveTo(78, 18); ctx.lineTo(18, 78); }
  ctx.stroke();
  return c.toDataURL('image/png');
}

/** Crop a drawn signature to its ink and return it as PNG. */
function trimCanvas(src: HTMLCanvasElement): { src: string; aspect: number } {
  const { width, height } = src;
  const data = src.getContext('2d')!.getImageData(0, 0, width, height).data;
  let x0 = width, y0 = height, x1 = 0, y1 = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (data[(y * width + x) * 4 + 3] > 8) {
        if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y;
      }
    }
  }
  const pad = 8;
  x0 = Math.max(0, x0 - pad); y0 = Math.max(0, y0 - pad);
  x1 = Math.min(width - 1, x1 + pad); y1 = Math.min(height - 1, y1 + pad);
  const w = Math.max(1, x1 - x0), h = Math.max(1, y1 - y0);
  const out = document.createElement('canvas');
  out.width = w; out.height = h;
  out.getContext('2d')!.drawImage(src, x0, y0, w, h, 0, 0, w, h);
  return { src: out.toDataURL('image/png'), aspect: w / h };
}

/** Render a typed name in a handwriting-style font as PNG. */
function typedSignature(text: string, color: string, family: string): { src: string; aspect: number } {
  const c = document.createElement('canvas');
  const ctx = c.getContext('2d')!;
  const size = 96;
  ctx.font = `${size}px ${family}`;
  const w = Math.ceil(ctx.measureText(text).width) + 24;
  c.width = w;
  c.height = Math.ceil(size * 1.4);
  ctx.font = `${size}px ${family}`;
  ctx.fillStyle = color;
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 12, c.height / 2);
  return { src: c.toDataURL('image/png'), aspect: c.width / c.height };
}

/** Load any browser-readable image as PNG (keeps transparency, normalises WebP). */
async function toPng(file: File): Promise<{ src: string; aspect: number }> {
  const bmp = await createImageBitmap(file);
  const max = 1600;
  const k = Math.min(1, max / Math.max(bmp.width, bmp.height));
  const c = document.createElement('canvas');
  c.width = Math.round(bmp.width * k);
  c.height = Math.round(bmp.height * k);
  c.getContext('2d')!.drawImage(bmp, 0, 0, c.width, c.height);
  bmp.close();
  return { src: c.toDataURL('image/png'), aspect: c.width / c.height };
}
