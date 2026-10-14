import type { ToolUI } from '@/scripts/runtime/tool';
import { decodeImage } from '@/scripts/lib/image-io';
import { FULL_QUAD, processScan, toCanvas, type Quad, type ScanFilter } from '@/scripts/lib/scan';

// Scanner UI: one card per photo (live preview with the chosen filter),
// corner-crop editor with a magnifier, rotate, reorder, delete, and a camera
// button to add pages. The engine redoes the same processing at full size.

interface PageState { c: Quad; r: number; src?: HTMLCanvasElement; loading?: Promise<HTMLCanvasElement> }

const ICON: Record<string, string> = {
  cam: '<path d="M3 8a2 2 0 0 1 2-2h2l2-2h6l2 2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="13" r="3.5"/>',
  crop: '<path d="M6 2v14a2 2 0 0 0 2 2h14"/><path d="M18 22V8a2 2 0 0 0-2-2H2"/>',
  rot: '<path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/>',
  del: '<path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/>',
  left: '<path d="m15 18-6-6 6-6"/>',
  right: '<path d="m9 18 6-6-6-6"/>',
};
const svg = (k: string) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[k]}</svg>`;

const CSS = `
.sc-top{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin-bottom:12px}
.sc-hint{font-size:14px;color:var(--muted);margin:0;flex:1 1 260px}
.sc-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px}
@media (max-width:420px){.sc-grid{grid-template-columns:1fr 1fr}.sc-card{padding:6px}.sc-acts button{width:25px}}
.sc-card{border:1px solid var(--line);border-radius:12px;background:var(--bg);padding:8px}
.sc-prev{aspect-ratio:3/4;display:grid;place-items:center;background:var(--surface);border-radius:6px;overflow:hidden;cursor:pointer}
.sc-prev canvas{max-width:100%;max-height:100%;box-shadow:0 1px 3px rgb(0 0 0/.2)}
.sc-bar{display:flex;align-items:center;justify-content:space-between;gap:2px;margin-top:6px;font-size:12.5px;color:var(--muted);font-weight:600}
.sc-bar>span:first-child{white-space:nowrap}
.sc-acts{display:flex}
.sc-acts button{width:28px;height:30px;display:grid;place-items:center;border:0;background:transparent;border-radius:7px;color:var(--muted);cursor:pointer}
.sc-acts button:hover{background:var(--bg-soft);color:var(--ink)}
.sc-acts svg{width:16px;height:16px}
.sc-cam svg{width:18px;height:18px}
.sc-ed{border:0;padding:0;width:100vw;height:100dvh;max-width:none;max-height:none;margin:0;background:#111;color:#fff}
.sc-ed::backdrop{background:#111}
.sc-ed-in{display:flex;flex-direction:column;height:100%}
.sc-ed-head{padding:12px 16px;font-size:14px;color:#ccc;text-align:center}
.sc-stage{position:relative;flex:1;min-height:0;display:grid;place-items:center;padding:24px;touch-action:none}
.sc-wrap{position:relative;line-height:0}
.sc-wrap canvas{max-width:calc(100vw - 48px);max-height:calc(100dvh - 170px);display:block}
.sc-wrap svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.sc-h{fill:#fff;stroke:#3352f5;stroke-width:3;cursor:grab;touch-action:none}
.sc-loupe{position:absolute;width:120px;height:120px;border-radius:50%;border:3px solid #fff;box-shadow:0 4px 16px rgb(0 0 0/.5);pointer-events:none;display:none;overflow:hidden;background:#000}
.sc-ed-foot{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;padding:12px 16px calc(12px + env(safe-area-inset-bottom))}
.sc-ed-foot .btn{min-width:110px}
`;

export default function createScanUI(host: HTMLElement, s: Record<string, string>): ToolUI {
  const root = host.closest<HTMLElement>('[data-tool-app]')!;
  const str = (k: string, n?: number) => (s[`scan.${k}`] ?? '').replace('{n}', String(n ?? ''));
  const state = new Map<File, PageState>();
  let files: File[] = [];
  let token = 0;

  const style = document.createElement('style');
  style.textContent = CSS;
  const top = document.createElement('div');
  top.className = 'sc-top';
  const hint = document.createElement('p');
  hint.className = 'sc-hint';
  hint.textContent = str('hint');
  const cam = document.createElement('button');
  cam.type = 'button';
  cam.className = 'btn btn-sm sc-cam';
  cam.innerHTML = `${svg('cam')}<span>${str('takePhoto')}</span>`;
  const camInput = document.createElement('input');
  camInput.type = 'file';
  camInput.accept = 'image/*';
  camInput.setAttribute('capture', 'environment');
  camInput.hidden = true;
  cam.addEventListener('click', () => { camInput.value = ''; camInput.click(); });
  camInput.addEventListener('change', () => {
    const picked = Array.from(camInput.files ?? []).map((f, i) =>
      // Camera shots are often all named "image.jpg": give each page a unique name.
      new File([f], f.name && f.name !== 'image.jpg' ? f.name : `scan-${Date.now()}-${i}.jpg`, { type: f.type || 'image/jpeg' }));
    if (picked.length) root.dispatchEvent(new CustomEvent('tc:add-files', { detail: picked }));
  });
  top.append(hint, cam, camInput);
  const grid = document.createElement('div');
  grid.className = 'sc-grid';
  host.append(style, top, grid);

  // The scanner shows its own page cards: hide the generic file list.
  const list = root.querySelector<HTMLElement>('[data-file-list]');
  if (list) list.style.display = 'none';

  const filterSel = root.querySelector<HTMLSelectElement>('[data-options] select[name="filter"]');
  const filter = (): ScanFilter => (filterSel?.value as ScanFilter) || 'enhanced';
  filterSel?.addEventListener('change', () => draw());

  const pageOf = (f: File): PageState => {
    let p = state.get(f);
    if (!p) { p = { c: [...FULL_QUAD] as Quad, r: 0 }; state.set(f, p); }
    return p;
  };
  // Working copy of each photo at editor resolution, decoded once.
  const source = (f: File): Promise<HTMLCanvasElement> => {
    const p = pageOf(f);
    if (p.src) return Promise.resolve(p.src);
    if (!p.loading) {
      p.loading = decodeImage(f).then((d) => {
        const c = toCanvas(d.source, d.width, d.height, 1600);
        if ('close' in d.source && typeof d.source.close === 'function') d.source.close();
        p.src = c;
        return c;
      });
    }
    return p.loading;
  };

  const setFiles = (next: File[]) => root.dispatchEvent(new CustomEvent('tc:set-files', { detail: next }));

  const draw = () => {
    const my = ++token;
    grid.innerHTML = '';
    files.forEach((f, i) => {
      const card = document.createElement('div');
      card.className = 'sc-card';
      const prev = document.createElement('div');
      prev.className = 'sc-prev';
      prev.title = str('crop');
      prev.addEventListener('click', () => openEditor(f));
      const bar = document.createElement('div');
      bar.className = 'sc-bar';
      const label = document.createElement('span');
      label.textContent = str('page', i + 1);
      const acts = document.createElement('span');
      acts.className = 'sc-acts';
      const btn = (icon: string, title: string, fn: () => void) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.innerHTML = svg(icon);
        b.title = title;
        b.setAttribute('aria-label', title);
        b.addEventListener('click', fn);
        acts.append(b);
      };
      if (i > 0) btn('left', str('left'), () => { const n = files.slice(); [n[i - 1], n[i]] = [n[i], n[i - 1]]; setFiles(n); });
      btn('crop', str('crop'), () => openEditor(f));
      btn('rot', str('rotate'), () => { pageOf(f).r = (pageOf(f).r + 1) % 4; draw(); });
      btn('del', str('delete'), () => { state.delete(f); setFiles(files.filter((x) => x !== f)); });
      if (i < files.length - 1) btn('right', str('right'), () => { const n = files.slice(); [n[i + 1], n[i]] = [n[i], n[i + 1]]; setFiles(n); });
      bar.append(label, acts);
      card.append(prev, bar);
      grid.append(card);
      source(f).then((src) => {
        if (my !== token) return;
        const small = toCanvas(src, src.width, src.height, 700);
        const p = pageOf(f);
        prev.replaceChildren(processScan(small, p.c, p.r, filter(), 360));
      }).catch(() => { prev.textContent = '⚠'; });
    });
  };

  // ── Corner editor ──
  const openEditor = async (f: File) => {
    const p = pageOf(f);
    const src = await source(f).catch(() => null);
    if (!src) return;
    const dlg = document.createElement('dialog');
    dlg.className = 'sc-ed';
    dlg.innerHTML = `<div class="sc-ed-in"><p class="sc-ed-head"></p><div class="sc-stage"><div class="sc-wrap"><svg viewBox="0 0 1000 1000" preserveAspectRatio="none"><polygon fill="rgb(51 82 245/.18)" stroke="#3352f5" stroke-width="3" vector-effect="non-scaling-stroke"/></svg><canvas class="sc-loupe" width="240" height="240"></canvas></div></div><div class="sc-ed-foot"><button type="button" class="btn btn-sm" data-full></button><button type="button" class="btn btn-sm" data-cancel></button><button type="button" class="btn btn-sm btn-primary" data-ok></button></div></div>`;
    dlg.querySelector('.sc-ed-head')!.textContent = str('cropHint');
    dlg.querySelector('[data-full]')!.textContent = str('whole');
    dlg.querySelector('[data-cancel]')!.textContent = str('cancel');
    dlg.querySelector('[data-ok]')!.textContent = str('apply');
    const wrap = dlg.querySelector<HTMLElement>('.sc-wrap')!;
    const view = toCanvas(src, src.width, src.height, 1600);
    wrap.prepend(view);
    const poly = dlg.querySelector('polygon')!;
    const svgEl = dlg.querySelector('svg')!;
    const loupe = dlg.querySelector<HTMLCanvasElement>('.sc-loupe')!;
    const lctx = loupe.getContext('2d')!;
    const q = [...p.c] as Quad;
    const handles: SVGCircleElement[] = [];
    const sync = () => {
      poly.setAttribute('points', [0, 1, 2, 3].map((k) => `${q[k * 2] * 1000},${q[k * 2 + 1] * 1000}`).join(' '));
      handles.forEach((h, k) => { h.setAttribute('cx', String(q[k * 2] * 1000)); h.setAttribute('cy', String(q[k * 2 + 1] * 1000)); });
    };
    for (let k = 0; k < 4; k++) {
      const h = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      h.setAttribute('class', 'sc-h');
      h.setAttribute('r', '18');
      h.setAttribute('vector-effect', 'non-scaling-stroke');
      // Keep handles round although the SVG is stretched to the photo's ratio.
      const fixRadius = () => {
        const r = wrap.getBoundingClientRect();
        h.setAttribute('r', String(Math.round(14 * 1000 / Math.max(1, r.width))));
        h.style.transform = `scale(1, ${r.width / Math.max(1, r.height)})`;
        h.style.transformBox = 'fill-box';
        h.style.transformOrigin = 'center';
      };
      requestAnimationFrame(fixRadius);
      h.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        h.setPointerCapture(e.pointerId);
        const move = (ev: PointerEvent) => {
          const r = wrap.getBoundingClientRect();
          q[k * 2] = Math.min(1, Math.max(0, (ev.clientX - r.left) / r.width));
          q[k * 2 + 1] = Math.min(1, Math.max(0, (ev.clientY - r.top) / r.height));
          sync();
          // Magnifier above the finger, showing the photo around the corner at 2×.
          const sx = q[k * 2] * view.width, sy = q[k * 2 + 1] * view.height;
          const zoom = (2 * view.width) / r.width;
          lctx.fillStyle = '#000';
          lctx.fillRect(0, 0, 240, 240);
          lctx.drawImage(view, sx - 120 / zoom, sy - 120 / zoom, 240 / zoom, 240 / zoom, 0, 0, 240, 240);
          lctx.strokeStyle = '#3352f5';
          lctx.lineWidth = 2;
          lctx.beginPath(); lctx.moveTo(120, 100); lctx.lineTo(120, 140); lctx.moveTo(100, 120); lctx.lineTo(140, 120); lctx.stroke();
          const lx = q[k * 2] * r.width - 60, ly = q[k * 2 + 1] * r.height - 150;
          loupe.style.left = `${lx}px`;
          loupe.style.top = `${ly < -40 ? q[k * 2 + 1] * r.height + 40 : ly}px`;
          loupe.style.display = 'block';
        };
        const up = () => {
          loupe.style.display = 'none';
          h.removeEventListener('pointermove', move);
          h.removeEventListener('pointerup', up);
          h.removeEventListener('pointercancel', up);
        };
        h.addEventListener('pointermove', move);
        h.addEventListener('pointerup', up);
        h.addEventListener('pointercancel', up);
      });
      handles.push(h);
      svgEl.append(h);
    }
    sync();
    const close = () => { dlg.close(); dlg.remove(); view.width = view.height = 0; };
    dlg.querySelector('[data-full]')!.addEventListener('click', () => { q.splice(0, 8, ...FULL_QUAD); sync(); });
    dlg.querySelector('[data-cancel]')!.addEventListener('click', close);
    dlg.querySelector('[data-ok]')!.addEventListener('click', () => { p.c = [...q] as Quad; close(); draw(); });
    dlg.addEventListener('cancel', (e) => { e.preventDefault(); close(); });
    document.body.append(dlg);
    dlg.showModal();
  };

  return {
    update(next) {
      files = next.slice();
      for (const f of Array.from(state.keys())) if (!files.includes(f)) state.delete(f);
      draw();
    },
    values() {
      return { pages: JSON.stringify(files.map((f) => ({ c: pageOf(f).c, r: pageOf(f).r }))) };
    },
  };
}
