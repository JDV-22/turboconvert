import gsGlueUrl from '@jspawn/ghostscript-wasm/gs.js?url';
import gsWasmUrl from '@jspawn/ghostscript-wasm/gs.wasm?url';
import { runWasmTool, isOutOfMemory } from '@/scripts/lib/pdf-wasm';
import { loadForRestore, restoreStructure } from '@/scripts/lib/pdf-restore';
import { qpdf, qpdfOutput, QPDF_IN, QPDF_OUT } from '@/scripts/lib/pdf-qpdf';
import { msg } from '@/scripts/lib/pdf-msg';
import { UserError, baseName, throwIfAborted, type Engine } from '@/scripts/runtime/types';

// Compress a PDF with Ghostscript (pdfwrite), run in a Web Worker.
// Images above the target resolution are downsampled and re-encoded, fonts
// are subset and compressed, duplicate images are stored once. Links,
// bookmarks, form fields and comments are then copied back from the original
// (Ghostscript would otherwise drop or flatten them).

const LEVELS: Record<string, { preset: string; color: number; gray: number; mono: number }> = {
  screen: { preset: 'screen', color: 96, gray: 96, mono: 300 },
  ebook: { preset: 'ebook', color: 150, gray: 150, mono: 300 },
  printer: { preset: 'printer', color: 300, gray: 300, mono: 600 },
};

const NAME = 'input.pdf';
const OUT = '/out/output.pdf';

function gsArgs(level: (typeof LEVELS)[string], showAnnots: boolean): string[] {
  return [
    '-dNOPAUSE', '-dBATCH', '-dSAFER',
    '-sDEVICE=pdfwrite',
    `-dPDFSETTINGS=/${level.preset}`,
    '-dCompatibilityLevel=1.5',
    '-dAutoRotatePages=/None',
    '-dDetectDuplicateImages=true',
    '-dCompressFonts=true',
    '-dSubsetFonts=true',
    '-dEmbedAllFonts=true',
    '-dCompressPages=true',
    '-dDownsampleColorImages=true', '-dColorImageDownsampleType=/Bicubic', `-dColorImageResolution=${level.color}`, '-dColorImageDownsampleThreshold=1.5',
    '-dDownsampleGrayImages=true', '-dGrayImageDownsampleType=/Bicubic', `-dGrayImageResolution=${level.gray}`, '-dGrayImageDownsampleThreshold=1.5',
    '-dDownsampleMonoImages=true', '-dMonoImageDownsampleType=/Subsample', `-dMonoImageResolution=${level.mono}`, '-dMonoImageDownsampleThreshold=1.5',
    // Print quality keeps CMYK as is; the other presets convert to sRGB (smaller).
    ...(level.preset === 'printer' ? ['-sColorConversionStrategy=LeaveColorUnchanged'] : []),
    // When the interactive layer is restored afterwards, don't also paint it into the page.
    ...(showAnnots ? [] : ['-dShowAnnots=false', '-dShowAcroForm=false']),
    `-sOutputFile=${OUT}`,
    `/in/${NAME}`,
  ];
}

const run: Engine = async ({ files, options, progress, signal }) => {
  const file = files[0];
  const level = LEVELS[String(options.level ?? 'ebook')] ?? LEVELS.ebook;

  let input: Blob = file;
  const gs = async (showAnnots: boolean, from: number, span: number): Promise<Uint8Array> => {
    let pages = 0;
    let done = 0;
    const result = await runWasmTool({
      glueUrl: gsGlueUrl, wasmUrl: gsWasmUrl, precompile: true, wasmBytes: 16_177_271,
      args: gsArgs(level, showAnnots), input: { name: NAME, blob: input }, outputs: [OUT], signal,
      onDownload: (r) => progress(from + r * 0.15 * span),
      onLine: (line) => {
        const total = line.match(/^Processing pages \d+ through (\d+)/);
        if (total) pages = Number(total[1]);
        const page = line.match(/^Page (\d+)/);
        if (page) done = Number(page[1]);
        if (page && pages) progress(from + span * (0.15 + 0.85 * (done / pages)));
      },
    });
    throwIfAborted(signal);
    const log = result.log.join('\n');
    const data = result.files[OUT];
    if (/requires a password|password for access/i.test(log)) throw new UserError('password', '');
    // Ghostscript can exit 0 after skipping a broken file: insist on every page.
    if (result.code !== 0 || !data || data.length < 100 || !pages || done !== pages) {
      if (isOutOfMemory(log)) throw new UserError('memory', msg('tooLarge'));
      throw new UserError('invalid', msg('damaged'));
    }
    return data;
  };

  // Source structure (links, bookmarks, forms…): only when there is something to keep.
  let { doc: src, encrypted } = await loadForRestore(await file.arrayBuffer());
  if (encrypted) {
    // Restricted PDF (opens without a password): decrypt so the structure can be kept.
    // Needs a password to open: qpdfOutput throws UserError('password').
    input = qpdfOutput(await qpdf(file, ['--decrypt', QPDF_IN, QPDF_OUT], signal));
    ({ doc: src } = await loadForRestore(await input.arrayBuffer()));
  }
  throwIfAborted(signal);
  let data = await gs(!src, 0.02, src ? 0.83 : 0.96);
  if (src) {
    let restored = null;
    try {
      restored = await restoreStructure(src, data);
    } catch (e) {
      console.error(e);
    }
    progress(0.9);
    if (restored) {
      restored.setProducer('TurboConvert (turboconvert.io)');
      data = await restored.save({ useObjectStreams: true });
    } else {
      // Page geometry didn't line up: let Ghostscript keep the annotations' look instead.
      data = await gs(true, 0.9, 0.09);
    }
  }
  progress(1);
  const outName = `${baseName(file.name)}-compressed.pdf`;
  // Already optimized: never hand back a bigger file.
  if (data.length >= file.size) return [{ name: outName, blob: file.slice(0, file.size, 'application/pdf') }];
  return [{ name: outName, blob: new Blob([data as BlobPart], { type: 'application/pdf' }) }];
};

export default run;
