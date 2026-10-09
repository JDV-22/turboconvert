import { track, sizeBucket, durationBucket } from './analytics';
import { takeHandoff } from './handoff';
import { UserError, extOf, type Engine, type EngineOutput, type OptionValues } from './types';

interface ToolConfig {
  id: string;
  engine: string;
  params: OptionValues;
  accept: string[];
  multiple: boolean;
  mode: 'each' | 'all';
  minFiles: number;
  maxMb: number;
  compare: boolean;
  formats: string;
  s: Record<string, string>;
}

const engines = import.meta.glob<{ default: Engine }>('../engines/*.ts');

/** Optional per-engine custom UI (e.g. page thumbnails for organize-pdf). */
export interface ToolUI {
  update(files: File[]): void;
  values(): OptionValues;
}
const uis = import.meta.glob<{ default: (host: HTMLElement, strings: Record<string, string>) => ToolUI }>('../ui/*.ts');

function loadEngine(name: string): Promise<Engine> {
  const loader = engines[`../engines/${name}.ts`];
  if (!loader) return Promise.reject(new Error(`Unknown engine ${name}`));
  return loader().then((m) => m.default);
}

function fmtBytes(n: number): string {
  if (n < 1024) return `${n} B`;
  if (n < 1048576) return `${(n / 1024).toFixed(n < 10240 ? 1 : 0)} KB`;
  if (n < 1073741824) return `${(n / 1048576).toFixed(n < 10485760 ? 2 : 1)} MB`;
  return `${(n / 1073741824).toFixed(2)} GB`;
}

function fill(s: string, vars: Record<string, string | number>): string {
  return s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
}

function el<K extends keyof HTMLElementTagNameMap>(tag: K, cls?: string, text?: string): HTMLElementTagNameMap[K] {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

const ICON = {
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  up: '<path d="m18 15-6-6-6 6"/>',
  down: '<path d="m6 9 6 6 6-6"/>',
  dl: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5M12 15V3"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>',
  alert: '<circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>',
};
function svg(name: keyof typeof ICON): string {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[name]}</svg>`;
}

interface Result { source: string; outputs: EngineOutput[]; error?: string; inBytes: number }

export function initTool(root: HTMLElement): void {
  const cfg: ToolConfig = JSON.parse(root.querySelector('script[data-config]')!.textContent!);
  const s = cfg.s;
  const $ = <T extends HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const input = $<HTMLInputElement>('[data-input]');
  const list = $<HTMLUListElement>('[data-file-list]');
  const errorBox = $<HTMLDivElement>('[data-error]');
  const convertBtn = $<HTMLButtonElement>('[data-convert]');
  const bar = $<HTMLDivElement>('[data-bar]');
  const status = $<HTMLParagraphElement>('[data-status]');
  const results = $<HTMLUListElement>('[data-results]');
  const doneTitle = $<HTMLElement>('[data-done-title]');
  const zipBtn = $<HTMLButtonElement>('[data-zip]');
  const optionsForm = root.querySelector<HTMLFormElement>('[data-options]');

  let files: File[] = [];
  let customUI: ToolUI | null = null;
  const uiLoader = uis[`../ui/${cfg.engine}.ts`];
  const uiReady = uiLoader
    ? uiLoader().then((m) => { customUI = m.default(root.querySelector<HTMLElement>('[data-custom-ui]')!, s); customUI.update(files); })
    : Promise.resolve();
  let controller: AbortController | null = null;
  let lastResults: Result[] = [];
  const urls: string[] = [];

  const setState = (state: 'empty' | 'files' | 'working' | 'done') => {
    root.dataset.state = state;
  };

  const showError = (msg: string) => {
    errorBox.innerHTML = `${svg('alert')}<span></span>`;
    errorBox.querySelector('span')!.textContent = msg;
    errorBox.hidden = !msg;
  };

  const accepts = (f: File) => {
    const ext = extOf(f.name);
    if (cfg.accept.includes(ext)) return true;
    // Some browsers give HEIC files no extension-friendly name (e.g. "image").
    if (!ext && f.type) return cfg.accept.some((a) => f.type.includes(a));
    return false;
  };

  const addFiles = (incoming: FileList | File[], source: string) => {
    const arr = Array.from(incoming);
    if (!arr.length) return;
    const errors: string[] = [];
    const ok: File[] = [];
    for (const f of arr) {
      if (!accepts(f)) errors.push(fill(s.errType, { name: f.name, formats: cfg.formats }));
      else if (f.size > cfg.maxMb * 1048576) errors.push(fill(s.errSize, { name: f.name, max: s.maxLabel }));
      else ok.push(f);
    }
    files = cfg.multiple ? files.concat(ok) : ok.slice(0, 1).length ? ok.slice(0, 1) : files;
    showError(errors.join(' '));
    if (ok.length) {
      track('files_added', {
        tool: cfg.id, count: ok.length, ext: extOf(ok[0].name) || 'none',
        size: sizeBucket(ok.reduce((a, f) => a + f.size, 0)), source,
      });
    }
    render();
  };

  const render = () => {
    for (const u of urls.splice(0)) URL.revokeObjectURL(u);
    list.innerHTML = '';
    files.forEach((f, i) => {
      const li = el('li', 'ta-file');
      const thumb = el('span', 'ta-thumb');
      if (/^image\/(png|jpe?g|webp|gif|avif|bmp|svg\+xml)$/.test(f.type) && f.size < 30 * 1048576) {
        const img = el('img');
        const u = URL.createObjectURL(f);
        urls.push(u);
        img.src = u;
        img.alt = '';
        img.loading = 'lazy';
        thumb.append(img);
      } else {
        thumb.innerHTML = `${svg('file')}<b>${(extOf(f.name) || '?').slice(0, 4).toUpperCase()}</b>`;
      }
      const meta = el('span', 'ta-meta');
      meta.append(el('span', 'ta-name', f.name), el('span', 'ta-size', fmtBytes(f.size)));
      const actions = el('span', 'ta-file-actions');
      if (cfg.mode === 'all' && files.length > 1) {
        const up = el('button', 'icon-btn');
        up.type = 'button'; up.innerHTML = svg('up'); up.disabled = i === 0;
        up.setAttribute('aria-label', `${s.moveUp}: ${f.name}`);
        up.onclick = () => { [files[i - 1], files[i]] = [files[i], files[i - 1]]; render(); };
        const down = el('button', 'icon-btn');
        down.type = 'button'; down.innerHTML = svg('down'); down.disabled = i === files.length - 1;
        down.setAttribute('aria-label', `${s.moveDown}: ${f.name}`);
        down.onclick = () => { [files[i + 1], files[i]] = [files[i], files[i + 1]]; render(); };
        actions.append(up, down);
      }
      const rm = el('button', 'icon-btn');
      rm.type = 'button'; rm.innerHTML = svg('x');
      rm.setAttribute('aria-label', `${s.remove}: ${f.name}`);
      rm.onclick = () => { files.splice(i, 1); render(); };
      actions.append(rm);
      li.append(thumb, meta, actions);
      list.append(li);
    });
    const n = files.length;
    convertBtn.textContent = cfg.mode === 'each' && n > 1 ? fill(s.convertN, { n }) : s.convert;
    convertBtn.disabled = n < cfg.minFiles;
    root.querySelector<HTMLElement>('[data-min-hint]')!.hidden = n >= cfg.minFiles;
    setState(n ? 'files' : 'empty');
    customUI?.update(files);
  };

  const readOptions = (): OptionValues => {
    const out: OptionValues = { ...(customUI?.values() ?? {}) };
    if (!optionsForm) return out;
    for (const elx of Array.from(optionsForm.elements) as HTMLInputElement[]) {
      if (!elx.name) continue;
      if (elx.type === 'checkbox') out[elx.name] = elx.checked;
      else if (elx.type === 'range' || elx.type === 'number') out[elx.name] = elx.value === '' ? '' : Number(elx.value);
      else out[elx.name] = elx.value;
    }
    return out;
  };

  const progress = (ratio: number, label?: string) => {
    const pct = Math.max(0, Math.min(100, Math.round(ratio * 100)));
    bar.style.setProperty('--p', `${pct}%`);
    bar.setAttribute('aria-valuenow', String(pct));
    if (label !== undefined) status.textContent = label;
  };

  const errorMessage = (e: unknown, name: string): string => {
    if (e instanceof UserError) {
      if (e.code === 'password') return cfg.engine === 'pdf-unlock' ? s.errWrongPassword : s.errPassword;
      if ((e.code === 'options' || e.code === 'empty') && e.message) return e.message;
      return `${fill(s.errGeneric, { name })} ${e.message}`.trim();
    }
    const msg = e instanceof Error ? e.message : String(e);
    if (/password|encrypt/i.test(msg)) return s.errPassword;
    return fill(s.errGeneric, { name });
  };

  const convert = async () => {
    if (files.length < cfg.minFiles) return;
    await uiReady;
    showError('');
    const options = readOptions();
    controller = new AbortController();
    const signal = controller.signal;
    setState('working');
    progress(0, s.loadingEngine);
    const started = performance.now();
    track('convert_start', { tool: cfg.id, count: files.length });
    const out: Result[] = [];
    try {
      const engine = await loadEngine(cfg.engine);
      const batches = cfg.mode === 'all' ? [files] : files.map((f) => [f]);
      for (let i = 0; i < batches.length; i++) {
        const batch = batches[i];
        const label = batches.length > 1 ? `${s.working} (${i + 1}/${batches.length})` : s.working;
        progress(i / batches.length, label);
        const inBytes = batch.reduce((a, f) => a + f.size, 0);
        try {
          const outputs = await engine({
            files: batch, options, params: cfg.params, signal,
            progress: (r, l) => progress((i + Math.max(0, Math.min(1, r))) / batches.length, l ?? label),
          });
          out.push({ source: batch[0].name, outputs, inBytes });
        } catch (e) {
          if ((e as Error)?.name === 'AbortError') throw e;
          console.error(e);
          out.push({ source: batch[0].name, outputs: [], inBytes, error: errorMessage(e, batch[0].name) });
          track('convert_error', { tool: cfg.id, code: e instanceof UserError ? e.code : 'exception', ext: extOf(batch[0].name) });
        }
      }
    } catch (e) {
      if ((e as Error)?.name === 'AbortError') { render(); return; }
      console.error(e);
      showError(errorMessage(e, files[0]?.name ?? ''));
      track('convert_error', { tool: cfg.id, code: 'engine_load' });
      render();
      return;
    } finally {
      controller = null;
    }
    const okCount = out.filter((r) => !r.error).length;
    if (okCount) {
      track('convert_success', {
        tool: cfg.id, count: okCount, failed: out.length - okCount,
        duration: durationBucket(performance.now() - started),
        size: sizeBucket(out.reduce((a, r) => a + r.inBytes, 0)),
      });
    }
    showResults(out);
  };

  const download = (blob: Blob, name: string) => {
    const u = URL.createObjectURL(blob);
    const a = el('a');
    a.href = u;
    a.download = name;
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(u), 60_000);
  };

  const showResults = (res: Result[]) => {
    lastResults = res;
    results.innerHTML = '';
    const outputs = res.flatMap((r) => r.outputs);
    for (const r of res) {
      if (r.error) {
        const li = el('li', 'ta-result is-error');
        li.innerHTML = `<span class="ta-thumb">${svg('alert')}</span>`;
        const meta = el('span', 'ta-meta');
        meta.append(el('span', 'ta-name', r.source), el('span', 'ta-size', r.error));
        li.append(meta);
        results.append(li);
        continue;
      }
      const outBytes = r.outputs.reduce((a, o) => a + o.blob.size, 0);
      r.outputs.forEach((o, idx) => {
        const li = el('li', 'ta-result');
        const thumb = el('span', 'ta-thumb');
        if (o.blob.type.startsWith('image/') && o.blob.size < 30 * 1048576 && r.outputs.length <= 60) {
          const img = el('img');
          const u = URL.createObjectURL(o.blob);
          urls.push(u);
          img.src = u; img.alt = ''; img.loading = 'lazy';
          thumb.append(img);
        } else {
          thumb.innerHTML = `${svg('file')}<b>${extOf(o.name).toUpperCase()}</b>`;
        }
        const meta = el('span', 'ta-meta');
        meta.append(el('span', 'ta-name', o.name));
        const size = el('span', 'ta-size', fmtBytes(o.blob.size));
        if (cfg.compare && idx === 0 && r.outputs.length === 1) {
          const saved = 1 - outBytes / r.inBytes;
          if (saved <= 0.005) size.textContent = `${fmtBytes(o.blob.size)} · ${s.bigger}`;
          if (saved > 0.005) {
            const badge = el('span', 'ta-saved', fill(s.saved, { pct: `${Math.round(saved * 100)}%` }));
            size.textContent = `${fmtBytes(r.inBytes)} → ${fmtBytes(outBytes)} `;
            size.append(badge);
          }
        }
        meta.append(size);
        const btn = el('button', 'btn btn-sm btn-dark');
        btn.type = 'button';
        btn.innerHTML = `${svg('dl')}<span>${s.download}</span>`;
        btn.onclick = () => { download(o.blob, o.name); track('download', { tool: cfg.id, kind: 'single' }); };
        li.append(thumb, meta, btn);
        results.append(li);
      });
    }
    const ok = outputs.length;
    doneTitle.textContent = ok > 1 ? fill(s.doneN, { n: ok }) : ok === 1 ? s.done : s.failed;
    zipBtn.hidden = ok < 2;
    root.querySelector<HTMLElement>('[data-done-icon]')!.dataset.ok = String(ok > 0);
    setState('done');
    root.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    // Single result: start the download right away, like users expect.
    if (ok === 1 && res.length === 1) {
      const o = outputs[0];
      download(o.blob, o.name);
      track('download', { tool: cfg.id, kind: 'auto' });
    }
  };

  zipBtn.addEventListener('click', async () => {
    const outputs = lastResults.flatMap((r) => r.outputs);
    zipBtn.disabled = true;
    try {
      const { zip } = await import('fflate');
      const entries: Record<string, Uint8Array> = {};
      const used = new Set<string>();
      for (const o of outputs) {
        let name = o.name;
        let n = 1;
        while (used.has(name)) name = o.name.replace(/(\.[^.]+)?$/, ` (${++n})$1`);
        used.add(name);
        entries[name] = new Uint8Array(await o.blob.arrayBuffer());
      }
      const data = await new Promise<Uint8Array>((res, rej) => zip(entries, { level: 0 }, (err, d) => (err ? rej(err) : res(d))));
      download(new Blob([data as BlobPart], { type: 'application/zip' }), `turboconvert-${cfg.id}.zip`);
      track('download', { tool: cfg.id, kind: 'zip', count: outputs.length });
    } finally {
      zipBtn.disabled = false;
    }
  });

  // ── Wiring ──
  input.addEventListener('change', () => { addFiles(input.files ?? [], 'picker'); input.value = ''; });
  root.querySelectorAll('[data-pick]').forEach((b) => b.addEventListener('click', (e) => { e.preventDefault(); input.click(); }));
  $('[data-clear]').addEventListener('click', () => { files = []; showError(''); render(); });
  convertBtn.addEventListener('click', convert);
  $('[data-cancel]').addEventListener('click', () => controller?.abort());
  $('[data-again]').addEventListener('click', () => { files = []; lastResults = []; showError(''); render(); root.scrollIntoView({ block: 'start', behavior: 'smooth' }); });

  const drop = $('[data-drop]');
  drop.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); input.click(); } });
  let dragDepth = 0;
  window.addEventListener('dragenter', (e) => { if (e.dataTransfer?.types.includes('Files')) { dragDepth++; root.classList.add('is-dragging'); } });
  window.addEventListener('dragleave', () => { dragDepth = Math.max(0, dragDepth - 1); if (!dragDepth) root.classList.remove('is-dragging'); });
  window.addEventListener('dragover', (e) => { if (e.dataTransfer?.types.includes('Files')) e.preventDefault(); });
  window.addEventListener('drop', (e) => {
    if (!e.dataTransfer?.files.length) return;
    e.preventDefault();
    dragDepth = 0;
    root.classList.remove('is-dragging');
    if (root.dataset.state === 'working') return;
    if (root.dataset.state === 'done') files = [];
    addFiles(e.dataTransfer.files, 'drop');
  });
  window.addEventListener('paste', (e) => {
    const pasted = Array.from(e.clipboardData?.files ?? []);
    if (pasted.length && root.dataset.state !== 'working') addFiles(pasted, 'paste');
  });

  // Range inputs show their value.
  optionsForm?.querySelectorAll<HTMLInputElement>('input[type=range]').forEach((r) => {
    const out = optionsForm.querySelector<HTMLOutputElement>(`output[for="${r.id}"]`);
    const sync = () => { if (out) out.textContent = `${r.value}${r.dataset.unit ?? ''}`; };
    r.addEventListener('input', sync);
    sync();
  });
  // Split mode "every page" hides the ranges field.
  const splitMode = optionsForm?.querySelector<HTMLSelectElement>('select[name="mode"]');
  const rangesField = optionsForm?.querySelector<HTMLElement>('[data-field="ranges"]');
  if (splitMode && rangesField) {
    const sync = () => { rangesField.hidden = splitMode.value !== 'ranges'; };
    splitMode.addEventListener('change', sync);
    sync();
  }

  track('tool_view', { tool: cfg.id });
  takeHandoff().then((handed) => { if (handed.length) addFiles(handed, 'home'); }).catch(() => {});
  render();
}
