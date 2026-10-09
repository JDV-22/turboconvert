// Run an Emscripten-compiled command-line tool (Ghostscript, QPDF…) inside a
// Web Worker, so long jobs never freeze the page. The input is read once in the
// worker and handed to MEMFS without copying (WORKERFS was tried: its many tiny
// synchronous reads made Ghostscript ~8× slower).

export interface WasmToolRun {
  /** URL of the Emscripten JS glue (classic script defining `Module`). */
  glueUrl: string;
  /** URL of the .wasm binary. */
  wasmUrl: string;
  /** Compile the wasm once on the main thread and reuse it for every run (needs `instantiateWasm` support in the glue). */
  precompile?: boolean;
  /** Byte size of the wasm, for download progress when the server does not send Content-Length. */
  wasmBytes?: number;
  /** Command-line arguments. The input file is available at `/in/<input.name>`; write outputs under `/out/`. */
  args: string[];
  input: { name: string; blob: Blob };
  /** Paths to read back after the run. Missing files are skipped. */
  outputs: string[];
  /** Every stdout/stderr line, as it is printed. */
  onLine?: (line: string) => void;
  /** Download progress of the wasm binary (0..1). */
  onDownload?: (ratio: number) => void;
  signal: AbortSignal;
}

export interface WasmToolResult {
  code: number;
  files: Record<string, Uint8Array>;
  log: string[];
}

// Plain JS, run as a classic worker from a Blob URL (importScripts is needed
// for the Emscripten glue, which is not an ES module).
const WORKER_SOURCE = `
self.onmessage = async (e) => {
  const { glueUrl, wasmUrl, module, args, input, outputs } = e.data;
  const line = (...a) => self.postMessage({ type: 'line', line: a.map(String).join(' ') });
  console.log = console.info = console.warn = console.error = line;
  try {
    importScripts(glueUrl);
    const opts = { locateFile: () => wasmUrl, print: line, printErr: line, noInitialRun: true };
    if (module) {
      opts.instantiateWasm = (imports, done) => {
        WebAssembly.instantiate(module, imports).then((inst) => done(inst), (err) => self.postMessage({ type: 'error', message: String(err) }));
        return {};
      };
    }
    const M = await self.Module(opts);
    M.FS.mkdir('/in');
    M.FS.mkdir('/out');
    // MEMFS keeps file data in plain JS arrays (outside the wasm heap); canOwn avoids a copy.
    M.FS.writeFile('/in/' + input.name, new Uint8Array(new FileReaderSync().readAsArrayBuffer(input.blob)), { canOwn: true });
    let code;
    try {
      code = M.callMain(args);
    } catch (err) {
      code = err && typeof err.status === 'number' ? err.status : -1;
      if (code === -1) line('[abort] ' + (err && err.message ? err.message : err));
    }
    if (typeof code !== 'number') code = 0;
    const files = {};
    const transfer = [];
    for (const p of outputs) {
      try {
        const d = M.FS.readFile(p);
        files[p] = d;
        transfer.push(d.buffer);
      } catch (err) {}
    }
    self.postMessage({ type: 'done', code, files }, transfer);
  } catch (err) {
    self.postMessage({ type: 'error', message: String(err && err.message ? err.message : err) });
  }
};
`;

let workerUrl: string | null = null;
const compiled = new Map<string, Promise<WebAssembly.Module>>();

const abs = (u: string) => new URL(u, location.href).href;

async function fetchWithProgress(url: string, expected: number | undefined, onRatio?: (r: number) => void): Promise<ArrayBuffer> {
  const res = await fetch(url);
  if (!res.ok || !res.body) throw new Error(`HTTP ${res.status} for ${url}`);
  const total = Number(res.headers.get('content-length')) || expected || 0;
  if (!onRatio || !total) return res.arrayBuffer();
  const reader = res.body.getReader();
  const chunks: Uint8Array[] = [];
  let got = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    got += value.length;
    onRatio(Math.min(1, got / total));
  }
  const out = new Uint8Array(got);
  let off = 0;
  for (const c of chunks) { out.set(c, off); off += c.length; }
  return out.buffer;
}

function compileOnce(url: string, expected?: number, onRatio?: (r: number) => void): Promise<WebAssembly.Module> {
  let p = compiled.get(url);
  if (!p) {
    p = fetchWithProgress(url, expected, onRatio).then((buf) => WebAssembly.compile(buf));
    p.catch(() => compiled.delete(url));
    compiled.set(url, p);
  }
  return p;
}

export async function runWasmTool(run: WasmToolRun): Promise<WasmToolResult> {
  const { signal } = run;
  if (signal.aborted) throw new DOMException('Aborted', 'AbortError');
  const wasmUrl = abs(run.wasmUrl);
  const module = run.precompile ? await compileOnce(wasmUrl, run.wasmBytes, run.onDownload) : undefined;
  run.onDownload?.(1);
  if (signal.aborted) throw new DOMException('Aborted', 'AbortError');
  if (!workerUrl) workerUrl = URL.createObjectURL(new Blob([WORKER_SOURCE], { type: 'text/javascript' }));
  const worker = new Worker(workerUrl);
  const log: string[] = [];
  try {
    return await new Promise<WasmToolResult>((resolve, reject) => {
      const onAbort = () => reject(new DOMException('Aborted', 'AbortError'));
      signal.addEventListener('abort', onAbort, { once: true });
      worker.onmessage = (e: MessageEvent) => {
        const m = e.data;
        if (m.type === 'line') {
          log.push(m.line);
          run.onLine?.(m.line);
        } else if (m.type === 'done') {
          signal.removeEventListener('abort', onAbort);
          resolve({ code: m.code, files: m.files, log });
        } else if (m.type === 'error') {
          signal.removeEventListener('abort', onAbort);
          reject(new Error(m.message));
        }
      };
      worker.onerror = (e) => {
        signal.removeEventListener('abort', onAbort);
        reject(new Error(e.message || 'Worker error'));
      };
      worker.postMessage({
        glueUrl: abs(run.glueUrl), wasmUrl, module, args: run.args,
        input: run.input, outputs: run.outputs,
      });
    });
  } finally {
    worker.terminate();
  }
}

/** True when the log or error looks like the wasm heap ran out (2 GB max). */
export function isOutOfMemory(text: string): boolean {
  return /out of memory|Cannot enlarge memory|VMerror|memory access out of bounds|Aborted\(OOM\)/i.test(text);
}
