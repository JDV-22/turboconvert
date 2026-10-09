// Audio/video engine on ffmpeg.wasm (single thread). params.preset picks the job.
import type { FFmpeg } from '@ffmpeg/ffmpeg';
import {
  exclusive, getFFmpeg, measureDuration, probe, runFFmpeg, workspace,
  type MediaInfo, type Workspace,
} from '@/scripts/lib/media-ffmpeg';
import { fmtTime, mt } from '@/scripts/lib/media-i18n';
import { UserError, baseName, extOf, type Engine, type EngineInput, type EngineOutput } from '@/scripts/runtime/types';

const MIME: Record<string, string> = {
  mp3: 'audio/mpeg', wav: 'audio/wav', m4a: 'audio/mp4', ogg: 'audio/ogg', oga: 'audio/ogg', opus: 'audio/ogg',
  flac: 'audio/flac', aac: 'audio/aac', aiff: 'audio/aiff', aif: 'audio/aiff', wma: 'audio/x-ms-wma', amr: 'audio/amr',
  mp4: 'video/mp4', mov: 'video/quicktime', m4v: 'video/mp4', webm: 'video/webm', mkv: 'video/x-matroska', gif: 'image/gif',
};

/** Codecs that MP4 players (browsers, iOS, Windows, editors) handle when stream-copied. */
const MP4_VIDEO = new Set(['h264', 'hevc', 'av1']);
const MP4_AUDIO = new Set(['aac', 'mp3']);

/** Fast x264 settings: wasm is single-threaded, so speed presets matter a lot. */
const X264 = (crf: number, preset = 'veryfast') => ['-c:v', 'libx264', '-preset', preset, '-crf', String(crf), '-pix_fmt', 'yuv420p'];
const AAC = (kbps = 160) => ['-c:a', 'aac', '-b:a', `${kbps}k`];
const FASTSTART = ['-movflags', '+faststart'];

interface Ctx {
  ff: FFmpeg;
  ws: Workspace;
  input: EngineInput;
  file: File;
  src: string;
  info: MediaInfo;
}

// ───────────────────────── Option parsing ─────────────────────────

/** "90", "90.5", "1:30", "01:30.5", "1:02:03", "1,5" → seconds. Empty → null. */
export function parseTime(raw: unknown): number | null {
  const s = String(raw ?? '').trim().replace(',', '.');
  if (!s) return null;
  const parts = s.split(':');
  if (parts.length > 3 || parts.some((p) => !/^\d+(\.\d+)?$/.test(p))) throw new UserError('options', mt('badTime', { v: s }));
  const nums = parts.map(Number);
  // Only the last part may carry decimals; minutes/seconds must be < 60 when a larger unit is given.
  if (nums.slice(0, -1).some((n, i) => !Number.isInteger(n) || (i > 0 && n >= 60)) || (parts.length > 1 && nums[nums.length - 1] >= 60)) {
    throw new UserError('options', mt('badTime', { v: s }));
  }
  return nums.reduce((acc, n) => acc * 60 + n, 0);
}

function numberOption(raw: unknown, min: number, max: number, fallback: number): number {
  if (raw === '' || raw === undefined || raw === null) return fallback;
  const n = Number(raw);
  if (!Number.isFinite(n) || n < min || n > max) throw new UserError('options', mt('badNumber', { v: String(raw) }));
  return n;
}

function choice<T extends string>(raw: unknown, allowed: readonly T[], fallback: T): T {
  const v = String(raw ?? '') as T;
  if (!v) return fallback;
  if (!allowed.includes(v)) throw new UserError('options', mt('badNumber', { v }));
  return v;
}

const sec = (n: number) => n.toFixed(3);

function out(data: Uint8Array, name: string): EngineOutput {
  return { name, blob: new Blob([data as BlobPart], { type: MIME[extOf(name)] ?? 'application/octet-stream' }) };
}

function needAudio(info: MediaInfo) {
  if (!info.audio) throw new UserError('invalid', mt('noAudio'));
}
function needVideo(info: MediaInfo) {
  if (!info.video) throw new UserError('invalid', mt('noVideo'));
}

/** Resolve start/end options against the file duration. */
function trimRange(ctx: Ctx): { start: number; end: number | null } {
  const start = parseTime(ctx.input.options.start) ?? 0;
  let end = parseTime(ctx.input.options.end);
  const d = ctx.info.duration;
  if (end !== null && end <= start) throw new UserError('options', mt('endBeforeStart'));
  if (d) {
    if (start >= d) throw new UserError('options', mt('startTooLate', { d: fmtTime(d) }));
    if (end !== null && end >= d) end = null; // until the end
  }
  return { start, end };
}

/** Run a job and read the output, keeping progress on the 0.05–1 range. */
async function encode(ctx: Ctx, args: string[], ext: string, duration: number | null, label = mt('converting'), from = 0.05, to = 0.98) {
  const dst = ctx.ws.tmp(ext);
  await runFFmpeg(ctx.ff, ['-hide_banner', ...args, '-y', dst], {
    signal: ctx.input.signal, duration, progress: ctx.input.progress, from, to, label,
  });
  return ctx.ws.read(dst);
}

// ───────────────────────── Presets ─────────────────────────

type Preset = (ctx: Ctx) => Promise<EngineOutput[]>;

const mp3Args = (ctx: Ctx) => {
  const kbps = choice(String(ctx.input.options.bitrate ?? '192'), ['128', '192', '256', '320'] as const, '192');
  return ['-c:a', 'libmp3lame', '-b:a', `${kbps}k`];
};

/** Video or audio file → MP3 (first audio track). */
const toMp3: Preset = async (ctx) => {
  needAudio(ctx.info);
  const data = await encode(ctx, ['-i', ctx.src, '-map', '0:a:0', '-vn', ...mp3Args(ctx)], 'mp3', ctx.info.duration);
  return [out(data, `${baseName(ctx.file.name)}.mp3`)];
};

const toWav: Preset = async (ctx) => {
  needAudio(ctx.info);
  const data = await encode(ctx, ['-i', ctx.src, '-map', '0:a:0', '-vn', '-c:a', 'pcm_s16le'], 'wav', ctx.info.duration);
  return [out(data, `${baseName(ctx.file.name)}.wav`)];
};

const AUDIO_FORMATS = {
  mp3: ['-c:a', 'libmp3lame', '-b:a', '192k'],
  wav: ['-c:a', 'pcm_s16le'],
  m4a: ['-c:a', 'aac', '-b:a', '192k', ...FASTSTART],
  ogg: ['-c:a', 'libvorbis', '-q:a', '5'],
  flac: ['-c:a', 'flac'],
  // No Opus output: libopus in @ffmpeg/core 0.12.10 crashes ("memory access out of
  // bounds") on every input, and ffmpeg's native Opus encoder is experimental.
} as const;

const audioConvert: Preset = async (ctx) => {
  needAudio(ctx.info);
  const fmt = choice(ctx.input.options.format, Object.keys(AUDIO_FORMATS) as (keyof typeof AUDIO_FORMATS)[], 'mp3');
  const data = await encode(ctx, ['-i', ctx.src, '-map', '0:a:0', '-vn', ...AUDIO_FORMATS[fmt]], fmt, ctx.info.duration);
  return [out(data, `${baseName(ctx.file.name)}.${fmt}`)];
};

const gif: Preset = async (ctx) => {
  needVideo(ctx.info);
  const o = ctx.input.options;
  const fps = choice(String(o.fps ?? '12'), ['8', '10', '12', '15', '20', '24'] as const, '12');
  const width = choice(String(o.width ?? '480'), ['240', '320', '480', '640', '800'] as const, '480');
  const start = numberOption(o.start, 0, 1e7, 0);
  let dur = numberOption(o.duration, 0.1, 60, 5);
  const d = ctx.info.duration;
  if (d) {
    if (start >= d) throw new UserError('options', mt('startTooLate', { d: fmtTime(d) }));
    dur = Math.min(dur, d - start);
  }
  const seek = ['-ss', sec(start), '-t', sec(dur), '-i', ctx.src];
  const scale = `fps=${fps},scale='min(${width},iw)':-1:flags=lanczos`;
  // Two passes: a palette tuned to this clip, then dithered rendering with it.
  const palette = ctx.ws.tmp('png');
  await runFFmpeg(ctx.ff, ['-hide_banner', ...seek, '-vf', `${scale},palettegen=stats_mode=diff`, '-y', palette], {
    signal: ctx.input.signal, duration: dur, progress: ctx.input.progress, from: 0.05, to: 0.4, label: mt('palette'),
  });
  const data = await encode(ctx, [
    ...seek, '-i', palette,
    '-lavfi', `${scale}[x];[x][1:v]paletteuse=dither=bayer:bayer_scale=5:diff_mode=rectangle`,
    '-loop', '0',
  ], 'gif', dur, mt('rendering'), 0.4, 0.98);
  return [out(data, `${baseName(ctx.file.name)}.gif`)];
};

/** Scale filter keeping the shorter side ≤ maxShort (0 = keep), even dimensions, sane frame rate. */
function videoFilter(ctx: Ctx, maxShort: number): string {
  const f: string[] = [];
  if (maxShort > 0) {
    f.push(`scale=w='if(gte(iw,ih),-2,trunc(min(iw,${maxShort})/2)*2)':h='if(gte(iw,ih),trunc(min(ih,${maxShort})/2)*2,-2)'`);
  } else {
    f.push(`scale=trunc(iw/2)*2:trunc(ih/2)*2`);
  }
  // Unknown or variable rate (e.g. "1k tbr" from MediaRecorder) would make the
  // encoder duplicate frames up to 1000 fps: normalise to 30. Slow-motion → 60.
  const fps = ctx.info.video?.fps ?? 0;
  if (!fps || fps > 240) f.push('fps=30');
  else if (fps > 60) f.push('fps=60');
  return f.join(',');
}

const compress: Preset = async (ctx) => {
  needVideo(ctx.info);
  const crf = choice(String(ctx.input.options.level ?? '28'), ['24', '28', '32'] as const, '28');
  const height = choice(String(ctx.input.options.height ?? '720'), ['0', '1080', '720', '480'] as const, '720');
  const data = await encode(ctx, [
    '-i', ctx.src, '-map', '0:v:0', '-map', '0:a:0?',
    '-vf', videoFilter(ctx, Number(height)),
    ...X264(Number(crf)), ...AAC(128), ...FASTSTART,
  ], 'mp4', ctx.info.duration, mt('compressing'));
  // Never hand back a bigger file than the user gave us.
  if (data.byteLength >= ctx.file.size && extOf(ctx.file.name) === 'mp4') return [{ name: ctx.file.name, blob: ctx.file }];
  return [out(data, `${baseName(ctx.file.name)}-compressed.mp4`)];
};

/** Video args for an MP4 output: copy when the codec is MP4-friendly, else H.264. */
function mp4VideoArgs(ctx: Ctx, crf = 23): string[] {
  const v = ctx.info.video!;
  if (MP4_VIDEO.has(v.codec)) return ['-c:v', 'copy', ...(v.codec === 'hevc' ? ['-tag:v', 'hvc1'] : [])];
  return ['-vf', videoFilter(ctx, 0), ...X264(crf)];
}
function mp4AudioArgs(ctx: Ctx): string[] {
  const a = ctx.info.audio;
  if (!a) return [];
  return MP4_AUDIO.has(a.codec) ? ['-c:a', 'copy'] : AAC(192);
}

const toMp4: Preset = async (ctx) => {
  needVideo(ctx.info);
  const data = await encode(ctx, [
    '-i', ctx.src, '-map', '0:v:0', '-map', '0:a:0?',
    ...mp4VideoArgs(ctx), ...mp4AudioArgs(ctx), ...FASTSTART,
  ], 'mp4', ctx.info.duration);
  return [out(data, `${baseName(ctx.file.name)}.mp4`)];
};

/** Container to stream-copy into for "same format" jobs, or null when we must transcode to MP4. */
function copyContainer(ctx: Ctx): 'mp4' | 'mov' | 'mkv' | 'webm' | null {
  const ext = extOf(ctx.file.name);
  const v = ctx.info.video!.codec;
  if ((ext === 'mp4' || ext === 'm4v') && MP4_VIDEO.has(v)) return 'mp4';
  if (ext === 'mov' && MP4_VIDEO.has(v)) return 'mp4';
  if (ext === 'mov') return 'mov';
  if (ext === 'webm' && ['vp8', 'vp9', 'av1'].includes(v)) return 'webm';
  if (ext === 'mkv') return 'mkv';
  if (MP4_VIDEO.has(v)) return 'mp4';
  return null;
}

const mute: Preset = async (ctx) => {
  needVideo(ctx.info);
  const container = copyContainer(ctx);
  const args = container
    ? ['-i', ctx.src, '-map', '0:v:0', '-an', '-c:v', 'copy', ...(container === 'mp4' ? [...(ctx.info.video!.codec === 'hevc' ? ['-tag:v', 'hvc1'] : []), ...FASTSTART] : [])]
    : ['-i', ctx.src, '-map', '0:v:0', '-an', '-vf', videoFilter(ctx, 0), ...X264(20), ...FASTSTART];
  const ext = container ?? 'mp4';
  const data = await encode(ctx, args, ext, ctx.info.duration);
  return [out(data, `${baseName(ctx.file.name)}-muted.${ext}`)];
};

/**
 * Trim video, choosing the fastest exact method:
 * 1. H.264/HEVC/AV1 (any container): stream-copy the video into MP4. The copied data
 *    starts at the previous keyframe, but ffmpeg writes an MP4 edit list so players
 *    start exactly at the requested time (verified frame-exact). Near-instant, lossless.
 * 2. Other codecs (VP8/VP9, MPEG-4…) cut from 0: stream copy into the same container.
 * 3. Otherwise re-encode to H.264 MP4 (exact) when the clip is short enough to stay fast.
 * 4. Long VP8/VP9 clips: stream copy in WebM/MKV, starting at the nearest keyframe.
 */
const trim: Preset = async (ctx) => {
  needVideo(ctx.info);
  const { start, end } = trimRange(ctx);
  const total = ctx.info.duration;
  const segDur = end !== null ? end - start : total ? total - start : null;
  const v = ctx.info.video!;
  const ext = extOf(ctx.file.name);
  const name = (e: string) => `${baseName(ctx.file.name)}-trimmed.${e}`;
  const seek = [...(start > 0 ? ['-ss', sec(start)] : []), '-i', ctx.src, ...(end !== null ? ['-t', sec(end - start)] : [])];
  const maps = ['-map', '0:v:0', '-map', '0:a:0?'];

  if (MP4_VIDEO.has(v.codec)) {
    const data = await encode(ctx, [
      ...seek, ...maps, '-c:v', 'copy', ...(v.codec === 'hevc' ? ['-tag:v', 'hvc1'] : []), ...mp4AudioArgs(ctx), ...FASTSTART,
    ], 'mp4', segDur);
    return [out(data, name('mp4'))];
  }
  const same = ext === 'webm' || ext === 'mkv' ? ext : null;
  // Rough wasm x264 'veryfast' budget: ~90 s of 720p30 worth of frames (≈ 1–3 min of work).
  const pixels = Math.max(1, v.width * v.height);
  const cost = segDur !== null ? segDur * (pixels / (1280 * 720)) * (Math.min(v.fps || 30, 60) / 30) : Infinity;
  if (same && (start === 0 || cost > 90)) {
    const data = await encode(ctx, [...seek, ...maps, '-c', 'copy', '-avoid_negative_ts', 'make_zero'], same, segDur);
    return [out(data, name(same))];
  }
  const data = await encode(ctx, [...seek, ...maps, '-vf', videoFilter(ctx, 0), ...X264(20), ...AAC(192), ...FASTSTART], 'mp4', segDur);
  return [out(data, name('mp4'))];
};

/**
 * Trim audio: stream copy into the same format first (lossless, instant, accurate
 * to one audio frame ≈ 20–26 ms); re-encode to MP3 if the format can't be copied.
 * Re-encoding lossy audio would cost quality for no gain in accuracy that anyone hears.
 */
const trimAudio: Preset = async (ctx) => {
  needAudio(ctx.info);
  const { start, end } = trimRange(ctx);
  const segDur = end !== null ? end - start : ctx.info.duration ? ctx.info.duration - start : null;
  const ext = extOf(ctx.file.name) || 'mp3';
  const head = [...(start > 0 ? ['-ss', sec(start)] : []), '-i', ctx.src, ...(end !== null ? ['-t', sec(end - start)] : []), '-map', '0:a:0', '-vn'];
  const name = (e: string) => `${baseName(ctx.file.name)}-trimmed.${e}`;
  const copyExt = ext === 'aif' ? 'aiff' : ext;
  const dst = ctx.ws.tmp(copyExt);
  // FLAC: re-encode (still lossless) so the header carries the new duration.
  const codec = ctx.info.audio!.codec === 'flac' && copyExt === 'flac' ? ['-c:a', 'flac'] : ['-c:a', 'copy'];
  const res = await runFFmpeg(ctx.ff, ['-hide_banner', ...head, ...codec, ...(copyExt === 'm4a' ? FASTSTART : []), '-y', dst], {
    signal: ctx.input.signal, duration: segDur, progress: ctx.input.progress, from: 0.05, to: 0.98, label: mt('converting'), allowFail: true,
  });
  if (res.code === 0) {
    const data = await ctx.ws.read(dst).catch(() => null);
    if (data && data.byteLength > 0) return [out(data, name(ext))];
  }
  const data = await encode(ctx, [...head, '-c:a', 'libmp3lame', '-b:a', '192k'], 'mp3', segDur);
  return [out(data, name('mp3'))];
};

const PRESETS: Record<string, Preset> = {
  'extract-mp3': toMp3,
  'to-mp3': toMp3,
  'to-wav': toWav,
  'audio-convert': audioConvert,
  gif,
  compress,
  trim,
  'trim-audio': trimAudio,
  mute,
  'to-mp4': toMp4,
};

// ───────────────────────── Audio + image → MP4 ─────────────────────────

const IMAGE_EXT = new Set(['jpg', 'jpeg', 'png', 'webp', 'gif', 'bmp', 'avif', 'heic', 'heif']);

/** Draw the picture (or a neutral background) at an even size the encoder accepts. */
async function stillFrame(image: File | undefined): Promise<Uint8Array> {
  let w = 1280;
  let h = 720;
  let draw: ((ctx: CanvasRenderingContext2D) => void) | null = null;
  if (image) {
    const { decodeImage } = await import('@/scripts/lib/image-io');
    const img = await decodeImage(image);
    const long = Math.min(1280, Math.max(720, img.width, img.height));
    const k = long / Math.max(img.width, img.height);
    w = Math.max(2, Math.round((img.width * k) / 2) * 2);
    h = Math.max(2, Math.round((img.height * k) / 2) * 2);
    draw = (c) => {
      c.imageSmoothingQuality = 'high';
      c.drawImage(img.source as CanvasImageSource, 0, 0, w, h);
      if ('close' in img.source) (img.source as ImageBitmap).close();
    };
  }
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const c = canvas.getContext('2d', { alpha: false })!;
  const g = c.createLinearGradient(0, 0, w, h);
  g.addColorStop(0, '#1f2430');
  g.addColorStop(1, '#0f1218');
  c.fillStyle = g;
  c.fillRect(0, 0, w, h);
  draw?.(c);
  const blob = await new Promise<Blob | null>((r) => canvas.toBlob(r, 'image/png'));
  canvas.width = canvas.height = 0;
  if (!blob) throw new UserError('memory', '');
  return new Uint8Array(await blob.arrayBuffer());
}

async function audioToVideo(input: EngineInput): Promise<EngineOutput[]> {
  const images = input.files.filter((f) => IMAGE_EXT.has(extOf(f.name)) || f.type.startsWith('image/'));
  const audios = input.files.filter((f) => !images.includes(f));
  if (audios.length !== 1 || images.length > 1) throw new UserError('options', mt('audioImage'));
  const audio = audios[0];
  const frame = await stillFrame(images[0]);
  return withJob(input, [audio], async (ff, ws) => {
    const info = await inspect(ff, ws.inputs[0], input);
    needAudio(info);
    const img = await ws.write('png', frame);
    const dur = info.duration;
    const ctx: Ctx = { ff, ws, input, file: audio, src: ws.inputs[0], info };
    const data = await encode(ctx, [
      '-loop', '1', '-framerate', '1', '-i', img, '-i', ws.inputs[0],
      '-map', '0:v', '-map', '1:a:0',
      '-c:v', 'libx264', '-tune', 'stillimage', '-preset', 'veryfast', '-crf', '20', '-pix_fmt', 'yuv420p', '-r', '1', '-g', '10',
      ...(info.audio!.codec === 'aac' ? ['-c:a', 'copy'] : AAC(192)),
      ...(dur ? ['-t', sec(dur)] : []), '-shortest', ...FASTSTART,
    ], 'mp4', dur);
    return [out(data, `${baseName(audio.name)}.mp4`)];
  });
}

// ───────────────────────── Plumbing ─────────────────────────

async function inspect(ff: FFmpeg, path: string, input: EngineInput): Promise<MediaInfo> {
  input.progress(0.02, mt('analysing'));
  const info = await probe(ff, path, input.signal);
  if (!info.format) throw new UserError('invalid', mt('unreadable'));
  if (!info.duration && (info.video || info.audio)) info.duration = await measureDuration(ff, path, input.signal);
  return info;
}

function withJob<T>(input: EngineInput, files: File[], fn: (ff: FFmpeg, ws: Workspace) => Promise<T>): Promise<T> {
  return exclusive(async () => {
    const ff = await getFFmpeg(input.progress, input.signal);
    const ws = await workspace(ff, files);
    try {
      return await fn(ff, ws);
    } finally {
      await ws.dispose();
    }
  });
}

const run: Engine = async (input) => {
  const preset = String(input.params.preset ?? '');
  if (preset === 'audio-to-video') return audioToVideo(input);
  const job = PRESETS[preset];
  if (!job) throw new Error(`Unknown ffmpeg preset ${preset}`);
  const file = input.files[0];
  // Validate options before downloading anything.
  if ('start' in input.options) parseTime(input.options.start);
  if ('end' in input.options) parseTime(input.options.end);
  return withJob(input, [file], async (ff, ws) => {
    const info = await inspect(ff, ws.inputs[0], input);
    const outputs = await job({ ff, ws, input, file, src: ws.inputs[0], info });
    input.progress(1, mt('finishing'));
    return outputs;
  });
};

export default run;
