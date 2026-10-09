// ffmpeg.wasm (single-thread core 0.12) loader and runner shared by the media engines.
//
// Why the core comes from a CDN and not from our own domain: the wasm file is 32 MB
// (≈ 9 MB brotli). Self-hosting would work technically on Vercel, but every first-time
// media user would cost ~10 MB of our Fast Data Transfer quota (Hobby: 100 GB/month),
// which caps free media usage at roughly 10k new users a month before paying. jsDelivr
// (unpkg as fallback) serves the exact npm build for free, brotli-compressed and with an
// immutable 1-year cache. The files are pinned to one version AND verified against a
// SHA-384 hash before use, so a compromised or changed CDN file is rejected.
//
// The single-thread core needs no SharedArrayBuffer, so pages do NOT need
// cross-origin isolation (COOP/COEP), which would break ads.
import type { FFmpeg } from '@ffmpeg/ffmpeg';
import { UserError } from '@/scripts/runtime/types';
import { mt } from './media-i18n';

const CORE_VERSION = '0.12.10';
const MIRRORS = [
  `https://cdn.jsdelivr.net/npm/@ffmpeg/core@${CORE_VERSION}/dist/esm/`,
  `https://unpkg.com/@ffmpeg/core@${CORE_VERSION}/dist/esm/`,
];
const CORE_FILES = {
  js: { name: 'ffmpeg-core.js', size: 111_804, type: 'text/javascript', sri: '9KlAmgHu5wDqdgQvFhQGZOtKdCwGcMppDhM/kBkUpZ5LS7KGuAHbE+NgtJQEf84i' },
  wasm: { name: 'ffmpeg-core.wasm', size: 32_232_419, type: 'application/wasm', sri: 'U1VDhkPYrM3wTCT4/vjSpSsKqG/UjljYrYCI4hBSJ02svbCkxuCi6U6u/peg5vpW' },
};

type Progress = (ratio: number, label?: string) => void;

function abortError(): DOMException {
  return new DOMException('Aborted', 'AbortError');
}

function toBase64(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf);
  let s = '';
  for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(s);
}

/** Download one core file (streaming, with progress), verify its hash, return a blob URL. */
async function fetchVerified(
  file: (typeof CORE_FILES)['js'],
  onBytes: (n: number) => void,
  signal: AbortSignal,
): Promise<string> {
  let lastErr: unknown;
  for (const base of MIRRORS) {
    let received = 0;
    try {
      const res = await fetch(base + file.name, { signal, mode: 'cors', credentials: 'omit' });
      if (!res.ok || !res.body) throw new Error(`HTTP ${res.status}`);
      const reader = res.body.getReader();
      const chunks: Uint8Array[] = [];
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        received += value.length;
        onBytes(value.length);
      }
      const blob = new Blob(chunks as BlobPart[], { type: file.type });
      const digest = await crypto.subtle.digest('SHA-384', await blob.arrayBuffer());
      if (toBase64(digest) !== file.sri) throw new Error(`integrity mismatch for ${base}${file.name}`);
      return URL.createObjectURL(blob);
    } catch (e) {
      if (signal.aborted) throw abortError();
      onBytes(-received); // roll back progress before trying the next mirror
      lastErr = e;
      console.warn('[ffmpeg] core download failed', base, e);
    }
  }
  console.error('[ffmpeg] all mirrors failed', lastErr);
  throw new UserError('invalid', mt('engineDownload'));
}

let coreUrls: Promise<{ coreURL: string; wasmURL: string }> | null = null;
let instance: Promise<FFmpeg> | null = null;
let logSink: ((line: string) => void) | null = null;

function downloadCore(progress: Progress, signal: AbortSignal) {
  if (!coreUrls) {
    const total = CORE_FILES.js.size + CORE_FILES.wasm.size;
    let got = 0;
    let lastPct = -1;
    const onBytes = (n: number) => {
      got += n;
      const pct = Math.min(99, Math.floor((got / total) * 100));
      if (pct !== lastPct) {
        lastPct = pct;
        progress(0, mt('downloadingEngine', { pct }));
      }
    };
    coreUrls = Promise.all([fetchVerified(CORE_FILES.js, onBytes, signal), fetchVerified(CORE_FILES.wasm, onBytes, signal)])
      .then(([coreURL, wasmURL]) => ({ coreURL, wasmURL }));
    coreUrls.catch(() => { coreUrls = null; });
  }
  return coreUrls;
}

/** Load (once per page) and return the shared FFmpeg instance. */
export async function getFFmpeg(progress: Progress, signal: AbortSignal): Promise<FFmpeg> {
  if (signal.aborted) throw abortError();
  if (!instance) {
    instance = (async () => {
      const [{ FFmpeg }, urls] = await Promise.all([import('@ffmpeg/ffmpeg'), downloadCore(progress, signal)]);
      progress(0, mt('startingEngine'));
      const ff = new FFmpeg();
      ff.on('log', ({ message }) => logSink?.(message));
      await ff.load(urls);
      return ff;
    })();
    instance.catch(() => { instance = null; });
  }
  const ff = await instance;
  if (signal.aborted) throw abortError();
  return ff;
}

/** Kill the worker (used on abort or after a crash); the next run starts a fresh one. */
async function resetFFmpeg(): Promise<void> {
  const p = instance;
  instance = null;
  if (p) {
    try { (await p).terminate(); } catch { /* already gone */ }
  }
}

// ───────────────────────── Running commands ─────────────────────────

let queue: Promise<unknown> = Promise.resolve();
/** Serialize jobs: one ffmpeg instance can only run one command at a time. */
export function exclusive<T>(fn: () => Promise<T>): Promise<T> {
  const next = queue.then(fn, fn);
  queue = next.catch(() => {});
  return next;
}

function parseClock(s: string): number {
  const m = s.match(/(-?\d+):(\d{2}):(\d{2}(?:\.\d+)?)/);
  return m ? Math.abs(Number(m[1])) * 3600 + Number(m[2]) * 60 + Number(m[3]) : NaN;
}

export interface RunOptions {
  signal: AbortSignal;
  /** Expected output duration in seconds (for progress). */
  duration?: number | null;
  /** Map ffmpeg progress into [from, to] of the overall job. */
  from?: number;
  to?: number;
  label?: string;
  progress?: Progress;
  /** Return the non-zero exit code instead of throwing. */
  allowFail?: boolean;
}

export interface RunResult { code: number; logs: string[]; lastTime: number }

/** Run one ffmpeg command; honours abort (terminates the worker) and reports progress. */
export async function runFFmpeg(ff: FFmpeg, args: string[], o: RunOptions): Promise<RunResult> {
  if (o.signal.aborted) throw abortError();
  const logs: string[] = [];
  const from = o.from ?? 0;
  const to = o.to ?? 1;
  let lastTime = 0;
  const started = performance.now();
  logSink = (line) => {
    if (logs.length > 400) logs.splice(0, 200);
    logs.push(line);
    const tm = line.match(/time=\s*(-?\d+:\d{2}:\d{2}(?:\.\d+)?)/);
    if (tm && o.progress) {
      const t = parseClock(tm[1]);
      if (Number.isFinite(t)) {
        lastTime = t;
        // Unknown duration: ease towards the end instead of a frozen bar.
        const r = o.duration && o.duration > 0 ? Math.min(1, t / o.duration) : 1 - Math.exp(-(performance.now() - started) / 60000);
        o.progress(from + (to - from) * r, o.label);
      }
    }
  };
  let aborted = false;
  const onAbort = () => { aborted = true; void resetFFmpeg(); };
  o.signal.addEventListener('abort', onAbort, { once: true });
  let code: number;
  try {
    code = await ff.exec(args);
  } catch (e) {
    if (aborted || o.signal.aborted) throw abortError();
    console.error('[ffmpeg] crashed', e, logs.slice(-30).join('\n'));
    await resetFFmpeg();
    throw mapFailure(String((e as Error)?.message ?? e), logs);
  } finally {
    o.signal.removeEventListener('abort', onAbort);
    logSink = null;
  }
  if (aborted || o.signal.aborted) throw abortError();
  if (code !== 0 && !o.allowFail) {
    console.error('[ffmpeg] exit code', code, args.join(' '), '\n', logs.slice(-40).join('\n'));
    throw mapFailure('', logs);
  }
  if (o.progress) o.progress(to, o.label);
  return { code, logs, lastTime };
}

function mapFailure(err: string, logs: string[]): Error {
  const text = `${err}\n${logs.slice(-40).join('\n')}`;
  if (/Aborted\(OOM\)|out of memory|Cannot enlarge memory|Cannot allocate memory/i.test(text)) {
    return new UserError('memory', mt('tooBig'));
  }
  if (/Invalid data found|moov atom not found|could not find codec parameters|Invalid argument|EBML header parsing failed|does not contain any stream/i.test(text)) {
    return new UserError('invalid', mt('unreadable'));
  }
  return new Error(`ffmpeg failed: ${err || logs.slice(-3).join(' | ')}`);
}

// ───────────────────────── Files ─────────────────────────

let seq = 0;

export interface Workspace {
  /** Paths (inside ffmpeg's FS) of the mounted input files, in order. */
  inputs: string[];
  /** Path for a new temporary file in MEMFS (auto-deleted on dispose). */
  tmp: (ext: string) => string;
  /** Write bytes to a new temporary file. */
  write: (ext: string, data: Uint8Array) => Promise<string>;
  read: (path: string) => Promise<Uint8Array>;
  dispose: () => Promise<void>;
}

/**
 * Expose input files to ffmpeg without copying them into wasm memory
 * (WORKERFS reads the File lazily), so large videos don't exhaust the heap.
 */
export async function workspace(ff: FFmpeg, files: File[]): Promise<Workspace> {
  const id = ++seq;
  const dir = `/in${id}`;
  const named = files.map((f, i) => {
    const ext = (f.name.match(/\.([a-z0-9]{1,5})$/i)?.[1] ?? 'bin').toLowerCase();
    return new File([f], `input${i}.${ext}`, { type: f.type });
  });
  await ff.createDir(dir);
  await ff.mount('WORKERFS' as never, { files: named }, dir);
  const temps: string[] = [];
  let n = 0;
  const tmp = (ext: string) => {
    const p = `/w${id}_${++n}.${ext}`;
    temps.push(p);
    return p;
  };
  return {
    inputs: named.map((f) => `${dir}/${f.name}`),
    tmp,
    write: async (ext, data) => {
      const p = tmp(ext);
      await ff.writeFile(p, data);
      return p;
    },
    read: async (path) => {
      const data = await ff.readFile(path);
      if (typeof data === 'string') throw new Error('unexpected text output');
      return data;
    },
    dispose: async () => {
      // The instance may have been terminated (abort/crash): ignore errors.
      for (const p of temps) await ff.deleteFile(p).catch(() => {});
      await ff.unmount(dir).catch(() => {});
      await ff.deleteDir(dir).catch(() => {});
    },
  };
}

// ───────────────────────── Probing ─────────────────────────

export interface StreamInfo { codec: string; index: number }
export interface VideoStream extends StreamInfo { width: number; height: number; fps: number; rotation: number }
export interface AudioStream extends StreamInfo { sampleRate: number; channels: string }

export interface MediaInfo {
  /** Container as reported by ffmpeg, e.g. "mov,mp4,m4a,3gp,3g2,mj2". */
  format: string;
  duration: number | null;
  video: VideoStream | null;
  audio: AudioStream | null;
  audioCount: number;
}

/** Inspect a file by parsing `ffmpeg -i` output (fast: reads headers only). */
export async function probe(ff: FFmpeg, path: string, signal: AbortSignal): Promise<MediaInfo> {
  const { logs } = await runFFmpeg(ff, ['-hide_banner', '-i', path], { signal, allowFail: true });
  return parseProbe(logs);
}

export function parseProbe(logs: string[]): MediaInfo {
  const info: MediaInfo = { format: '', duration: null, video: null, audio: null, audioCount: 0 };
  let lastVideo: VideoStream | null = null;
  for (const line of logs) {
    const fm = line.match(/^Input #0, (.+?), from /);
    if (fm) info.format = fm[1];
    const dm = line.match(/Duration: (\d+:\d{2}:\d{2}(?:\.\d+)?)/);
    if (dm) {
      const d = parseClock(dm[1]);
      if (Number.isFinite(d) && d > 0) info.duration = d;
    }
    const sm = line.match(/Stream #0:(\d+)[^:]*: (Video|Audio): ([\w-]+)/);
    if (sm) {
      const index = Number(sm[1]);
      const codec = sm[3];
      if (sm[2] === 'Video') {
        if (/attached pic/.test(line)) continue; // cover art, not a real video
        const size = line.match(/, (\d{2,5})x(\d{2,5})/);
        // "29.97 fps" when known; browser-recorded WebM only has "1k tbr" (variable rate).
        const fpsM = line.match(/, ([\d.]+)(k?) fps/) ?? line.match(/, ([\d.]+)(k?) tbr/);
        const fps = fpsM ? Number(fpsM[1]) * (fpsM[2] ? 1000 : 1) : 0;
        const v: VideoStream = {
          codec, index, width: size ? Number(size[1]) : 0, height: size ? Number(size[2]) : 0,
          fps, rotation: 0,
        };
        lastVideo = v;
        if (!info.video) info.video = v;
      } else {
        info.audioCount++;
        const sr = line.match(/, (\d+) Hz/);
        const ch = line.match(/Hz, ([^,]+)/);
        if (!info.audio) info.audio = { codec, index, sampleRate: sr ? Number(sr[1]) : 0, channels: ch ? ch[1].trim() : '' };
      }
      continue;
    }
    const rot = line.match(/rotation of (-?[\d.]+) degrees/);
    if (rot && lastVideo) lastVideo.rotation = Number(rot[1]);
  }
  return info;
}

/** Duration when the header has none (e.g. browser-recorded WebM): read all packets once. */
export async function measureDuration(ff: FFmpeg, path: string, signal: AbortSignal): Promise<number | null> {
  const { lastTime } = await runFFmpeg(ff, ['-hide_banner', '-i', path, '-map', '0', '-c', 'copy', '-f', 'null', '-'], {
    signal, allowFail: true, progress: () => {},
  });
  return lastTime > 0 ? lastTime : null;
}
