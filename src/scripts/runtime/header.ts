interface SearchItem { n: string; h: string; c: string; k: string }

const CAT_ICON: Record<string, string> = {
  pdf: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6',
  image: 'M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM21 15l-5-5L5 21',
  document: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M8 13h8M8 17h8',
  video: 'M4 5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM22 8l-6 4 6 4z',
  audio: 'M9 18V5l12-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM21 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z',
};

function normalize(s: string): string {
  return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
}

function score(item: SearchItem, terms: string[]): number {
  const name = normalize(item.n);
  const hay = normalize(`${item.n} ${item.k}`);
  let s = 0;
  for (const term of terms) {
    if (!hay.includes(term)) return 0;
    s += name.startsWith(term) ? 6 : name.includes(term) ? 4 : 1;
  }
  return s;
}

export function initHeader(): void {
  const dialog = document.querySelector<HTMLDialogElement>('[data-search-dialog]');
  const input = document.querySelector<HTMLInputElement>('[data-search-input]');
  const list = document.querySelector<HTMLUListElement>('[data-search-list]');
  const empty = document.querySelector<HTMLElement>('[data-search-empty]');
  const indexEl = document.getElementById('search-index');
  const items: SearchItem[] = indexEl ? JSON.parse(indexEl.textContent || '[]') : [];
  let active = 0;

  const render = () => {
    if (!list || !input || !empty) return;
    const terms = normalize(input.value.trim()).split(/\s+|\bto\b|\ben\b|→/).filter(Boolean);
    const results = terms.length
      ? items.map((i) => ({ i, s: score(i, terms) })).filter((r) => r.s > 0).sort((a, b) => b.s - a.s).map((r) => r.i)
      : items;
    active = 0;
    list.innerHTML = '';
    results.slice(0, 40).forEach((r, idx) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = r.h;
      a.setAttribute('role', 'option');
      a.setAttribute('aria-selected', String(idx === 0));
      const icon = document.createElement('span');
      icon.className = 'cat-icon sm';
      icon.dataset.cat = r.c;
      icon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${CAT_ICON[r.c] ?? ''}"/></svg>`;
      const label = document.createElement('span');
      label.textContent = r.n;
      a.append(icon, label);
      li.append(a);
      list.append(li);
    });
    empty.hidden = results.length > 0;
  };

  const move = (delta: number) => {
    const links = list ? Array.from(list.querySelectorAll('a')) : [];
    if (!links.length) return;
    links[active]?.setAttribute('aria-selected', 'false');
    active = (active + delta + links.length) % links.length;
    links[active].setAttribute('aria-selected', 'true');
    links[active].scrollIntoView({ block: 'nearest' });
  };

  const open = () => {
    if (!dialog || !input) return;
    render();
    dialog.showModal();
    input.focus();
    input.select();
  };

  document.querySelectorAll('[data-search-open]').forEach((b) => b.addEventListener('click', open));
  document.querySelector('[data-search-close]')?.addEventListener('click', () => dialog?.close());
  dialog?.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
  input?.addEventListener('input', render);
  input?.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); move(1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
    else if (e.key === 'Enter') {
      const link = list?.querySelectorAll('a')[active];
      if (link) { e.preventDefault(); window.location.href = link.href; }
    }
  });
  document.addEventListener('keydown', (e) => {
    const target = e.target as HTMLElement;
    const typing = target.closest('input, textarea, select, [contenteditable]');
    if (!typing && (e.key === '/' || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k'))) {
      e.preventDefault();
      open();
    }
  });

  const lang = document.querySelector<HTMLSelectElement>('[data-lang-switch]');
  lang?.addEventListener('change', () => { window.location.href = lang.value; });

  const menuBtn = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const mobileNav = document.getElementById('mobile-nav');
  menuBtn?.addEventListener('click', () => {
    if (!mobileNav) return;
    const isOpen = !mobileNav.hidden;
    mobileNav.hidden = isOpen;
    menuBtn.setAttribute('aria-expanded', String(!isOpen));
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });

  // Suggest (never force) the visitor's language version of this page.
  try {
    const sel = document.querySelector<HTMLSelectElement>('[data-lang-switch]');
    const current = document.documentElement.lang.slice(0, 2);
    const wanted = (navigator.languages || [navigator.language]).map((l) => l.slice(0, 2).toLowerCase());
    if (sel && !localStorage.getItem('tc-lang-hint')) {
      const opts = Array.from(sel.options);
      const match = wanted.find((w) => w !== current && opts.some((o) => o.textContent?.toLowerCase() === w));
      if (match && wanted[0] !== current) {
        const opt = opts.find((o) => o.textContent?.toLowerCase() === match)!;
        const names: Record<string, [string, string]> = {
          en: ['This page is available in English', 'Switch'], fr: ['Cette page existe en français', 'Afficher'],
          es: ['Esta página está disponible en español', 'Ver'], de: ['Diese Seite gibt es auf Deutsch', 'Anzeigen'],
          pt: ['Esta página está disponível em português', 'Ver'], it: ['Questa pagina è disponibile in italiano', 'Vedi'],
        };
        const [text, cta] = names[match] ?? names.en;
        const bar = document.createElement('div');
        bar.className = 'lang-hint';
        bar.setAttribute('role', 'status');
        bar.innerHTML = `<span>${text}</span><a href="${opt.value}">${cta} →</a><button type="button" class="icon-btn" aria-label="Close">✕</button>`;
        bar.querySelector('button')!.addEventListener('click', () => { localStorage.setItem('tc-lang-hint', '1'); bar.remove(); });
        bar.querySelector('a')!.addEventListener('click', () => localStorage.setItem('tc-lang-hint', '1'));
        document.body.append(bar);
      }
    }
  } catch { /* storage blocked */ }
}
