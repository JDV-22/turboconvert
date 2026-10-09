import type { ToolUI } from '@/scripts/runtime/tool';
import { openPdf, renderThumb } from '@/scripts/lib/pdfjs-thumbs';

interface PageState { index: number; rotate: number; deleted: boolean; thumb?: string }

const ICON = {
  rot: '<path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/>',
  del: '<path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/>',
  undo: '<path d="M9 14 4 9l5-5"/><path d="M4 9h11a5 5 0 0 1 0 10h-3"/>',
  left: '<path d="m15 18-6-6 6-6"/>',
  right: '<path d="m9 18 6-6-6-6"/>',
};
const svg = (k: keyof typeof ICON) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[k]}</svg>`;

// Page grid for "Organize PDF": reorder (drag or arrows), rotate, delete.
export default function createOrganizeUI(host: HTMLElement, s: Record<string, string>): ToolUI {
  let pages: PageState[] = [];
  let current: File | null = null;
  let token = 0;
  const str = (k: string) => s[`org.${k}`] ?? '';
  const fill = (k: string, n: number) => str(k).replace('{n}', String(n));

  const style = document.createElement('style');
  style.textContent = `
    .org-hint{font-size:14px;color:var(--muted);margin-bottom:12px}
    .org-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(128px,1fr));gap:12px}
    .org-page{position:relative;border:1px solid var(--line);border-radius:12px;background:var(--bg);padding:8px 8px 6px;cursor:grab;user-select:none;transition:border-color .15s,opacity .15s}
    .org-page:hover{border-color:var(--line-strong)}
    .org-page.dragging{opacity:.4}
    .org-page.over{border-color:var(--accent);box-shadow:0 0 0 2px var(--accent-soft)}
    .org-page.deleted .org-img{opacity:.18}
    .org-img{aspect-ratio:3/4;display:grid;place-items:center;overflow:hidden;border-radius:6px;background:var(--surface)}
    .org-img img{max-width:100%;max-height:100%;box-shadow:0 1px 3px rgb(0 0 0/.15);transition:transform .2s}
    .org-bar{display:flex;align-items:center;justify-content:space-between;margin-top:6px;font-size:12.5px;color:var(--muted);font-weight:600}
    .org-actions{display:flex;gap:0}
    .org-actions button{width:28px;height:28px;display:grid;place-items:center;border:0;background:transparent;border-radius:7px;color:var(--muted);cursor:pointer}
    .org-actions button:hover{background:var(--bg-soft);color:var(--ink)}
    .org-actions svg{width:16px;height:16px}
    .org-warn{margin-top:10px;color:var(--err);font-size:14px}
  `;
  host.append(style);
  const hint = document.createElement('p');
  hint.className = 'org-hint';
  const grid = document.createElement('div');
  grid.className = 'org-grid';
  const warn = document.createElement('p');
  warn.className = 'org-warn';
  warn.hidden = true;
  warn.textContent = str('none');
  host.append(hint, grid, warn);

  let dragFrom = -1;

  const draw = () => {
    grid.innerHTML = '';
    pages.forEach((p, pos) => {
      const n = p.index + 1;
      const card = document.createElement('div');
      card.className = `org-page${p.deleted ? ' deleted' : ''}`;
      card.draggable = true;
      card.dataset.pos = String(pos);
      const img = document.createElement('div');
      img.className = 'org-img';
      if (p.thumb) {
        const im = document.createElement('img');
        im.src = p.thumb;
        im.alt = '';
        im.style.transform = `rotate(${p.rotate}deg)${p.rotate % 180 ? ' scale(0.72)' : ''}`;
        img.append(im);
      }
      const bar = document.createElement('div');
      bar.className = 'org-bar';
      const label = document.createElement('span');
      label.textContent = String(n);
      const actions = document.createElement('span');
      actions.className = 'org-actions';
      const btn = (icon: keyof typeof ICON, title: string, fn: () => void) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.innerHTML = svg(icon);
        b.title = title;
        b.setAttribute('aria-label', title);
        b.addEventListener('click', (e) => { e.stopPropagation(); fn(); draw(); });
        actions.append(b);
      };
      if (pos > 0) btn('left', fill('left', n), () => { [pages[pos - 1], pages[pos]] = [pages[pos], pages[pos - 1]]; });
      btn('rot', fill('rotate', n), () => { p.rotate = (p.rotate + 90) % 360; });
      btn(p.deleted ? 'undo' : 'del', fill(p.deleted ? 'restore' : 'delete', n), () => { p.deleted = !p.deleted; });
      if (pos < pages.length - 1) btn('right', fill('right', n), () => { [pages[pos + 1], pages[pos]] = [pages[pos], pages[pos + 1]]; });
      bar.append(label, actions);
      card.append(img, bar);

      card.addEventListener('dragstart', (e) => { dragFrom = pos; card.classList.add('dragging'); e.dataTransfer?.setData('text/plain', String(pos)); });
      card.addEventListener('dragend', () => { card.classList.remove('dragging'); grid.querySelectorAll('.over').forEach((x) => x.classList.remove('over')); });
      card.addEventListener('dragover', (e) => { if (dragFrom >= 0) { e.preventDefault(); e.stopPropagation(); card.classList.add('over'); } });
      card.addEventListener('dragleave', () => card.classList.remove('over'));
      card.addEventListener('drop', (e) => {
        if (dragFrom < 0) return;
        e.preventDefault();
        e.stopPropagation();
        const [moved] = pages.splice(dragFrom, 1);
        pages.splice(pos, 0, moved);
        dragFrom = -1;
        draw();
      });
      grid.append(card);
    });
    warn.hidden = !pages.length || pages.some((p) => !p.deleted);
  };

  const load = async (file: File) => {
    const my = ++token;
    hint.textContent = str('loading');
    pages = [];
    draw();
    try {
      const doc = await openPdf(file);
      if (my !== token) return;
      pages = Array.from({ length: doc.numPages }, (_, i) => ({ index: i, rotate: 0, deleted: false }));
      hint.textContent = str('hint');
      draw();
      for (let i = 0; i < doc.numPages; i++) {
        if (my !== token) return;
        const thumb = await renderThumb(doc, i + 1, 140);
        const p = pages.find((x) => x.index === i);
        if (p) p.thumb = thumb;
        if (i % 4 === 3 || i === doc.numPages - 1) draw();
      }
      doc.destroy();
    } catch (e) {
      console.error(e);
      hint.textContent = '';
    }
  };

  return {
    update(files) {
      const f = files[0] ?? null;
      if (f === current) return;
      current = f;
      if (f) load(f);
      else { token++; pages = []; hint.textContent = ''; draw(); }
    },
    values() {
      return { pages: JSON.stringify(pages.filter((p) => !p.deleted).map((p) => ({ i: p.index, r: p.rotate }))) };
    },
  };
}
