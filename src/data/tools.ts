import type { Locale } from '@/i18n/locales';

export type Category = 'pdf' | 'image' | 'document' | 'video' | 'audio';

export const CATEGORIES: Category[] = ['pdf', 'image', 'document', 'video', 'audio'];

/** Hub page slug per category and locale. */
export const CATEGORY_SLUGS: Record<Category, Partial<Record<Locale, string>>> = {
  pdf: { en: 'pdf-tools', fr: 'outils-pdf' },
  image: { en: 'image-tools', fr: 'outils-image' },
  document: { en: 'document-tools', fr: 'outils-documents' },
  video: { en: 'video-tools', fr: 'outils-video' },
  audio: { en: 'audio-tools', fr: 'outils-audio' },
};

export type OptionDef =
  | { id: string; type: 'select'; label: string; default: string; choices: { value: string; label: string }[] }
  | { id: string; type: 'range'; label: string; default: number; min: number; max: number; step: number; unit?: string }
  | { id: string; type: 'number'; label: string; default: number | ''; min?: number; max?: number; placeholder?: string }
  | { id: string; type: 'text'; label: string; default: string; placeholder?: string }
  | { id: string; type: 'checkbox'; label: string; default: boolean };

export interface ToolDef {
  id: string;
  category: Category;
  /** Engine module in src/scripts/engines (without extension). */
  engine: string;
  /** Fixed parameters passed to the engine (e.g. target format). */
  params?: Record<string, string | number | boolean>;
  /** Accepted extensions, lowercase, without dot. */
  accept: string[];
  multiple: boolean;
  /** 'each' = engine runs once per file (batch); 'all' = all files at once. */
  mode: 'each' | 'all';
  /** Minimum number of files before converting (merge needs 2). */
  minFiles?: number;
  options?: OptionDef[];
  /** Max input size in MB (enforced in the browser). */
  maxMb: number;
  slugs: Partial<Record<Locale, string>>;
  popular?: boolean;
  related?: string[];
  /** Format badges shown on cards, e.g. ['PDF', 'DOCX']. */
  from: string;
  to: string;
  /** Uses ffmpeg/ghostscript/etc.: show "first run downloads the engine" hint. */
  heavy?: boolean;
}

const quality = (def = 85): OptionDef => ({
  id: 'quality', type: 'range', label: 'opt.quality', default: def, min: 10, max: 100, step: 1, unit: '%',
});
const imageFormat = (def: string, formats = ['jpg', 'png', 'webp']): OptionDef => ({
  id: 'format', type: 'select', label: 'opt.format', default: def,
  choices: formats.map((f) => ({ value: f, label: f === 'original' ? 'opt.keepFormat' : f.toUpperCase() })),
});
const mp3Bitrate: OptionDef = {
  id: 'bitrate', type: 'select', label: 'opt.bitrate', default: '192',
  choices: [
    { value: '128', label: '128 kbps' },
    { value: '192', label: '192 kbps' },
    { value: '256', label: '256 kbps' },
    { value: '320', label: '320 kbps' },
  ],
};
const pageSize: OptionDef = {
  id: 'pageSize', type: 'select', label: 'opt.pageSize', default: 'fit',
  choices: [
    { value: 'fit', label: 'opt.pageSize.fit' },
    { value: 'a4', label: 'A4' },
    { value: 'letter', label: 'Letter' },
  ],
};
const margin: OptionDef = {
  id: 'margin', type: 'select', label: 'opt.margin', default: '0',
  choices: [
    { value: '0', label: 'opt.margin.none' },
    { value: '20', label: 'opt.margin.small' },
    { value: '40', label: 'opt.margin.large' },
  ],
};
const resizeMax: OptionDef = {
  id: 'maxWidth', type: 'number', label: 'opt.maxWidth', default: '', min: 1, max: 20000, placeholder: 'opt.keepOriginal',
};

const targetSize: OptionDef = {
  id: 'target', type: 'select', label: 'opt.maxSize', default: '',
  choices: [
    { value: '', label: 'opt.noLimit' },
    { value: '100', label: '100 KB' }, { value: '200', label: '200 KB' }, { value: '300', label: '300 KB' },
    { value: '500', label: '500 KB' }, { value: '1024', label: '1 MB' }, { value: '2048', label: '2 MB' },
    { value: '5120', label: '5 MB' }, { value: '10240', label: '10 MB' }, { value: '20480', label: '20 MB' },
  ],
};

const IMG_IN = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'bmp', 'avif', 'heic', 'heif', 'tif', 'tiff', 'svg', 'ico'];
const VIDEO_IN = ['mp4', 'mov', 'webm', 'mkv', 'avi', 'm4v', 'wmv', 'flv', '3gp', 'mpeg', 'mpg', 'ts'];
const AUDIO_IN = ['mp3', 'wav', 'm4a', 'aac', 'ogg', 'oga', 'flac', 'opus', 'wma', 'aiff', 'aif', 'amr'];

export const TOOLS: ToolDef[] = [
  // ───────────────────────── PDF ─────────────────────────
  {
    id: 'compress-pdf', category: 'pdf', engine: 'pdf-compress', accept: ['pdf'], multiple: true, mode: 'each',
    maxMb: 200, heavy: true, popular: true, from: 'PDF', to: 'PDF',
    options: [{
      id: 'level', type: 'select', label: 'opt.compression', default: 'ebook',
      choices: [
        { value: 'screen', label: 'opt.compression.strong' },
        { value: 'ebook', label: 'opt.compression.recommended' },
        { value: 'printer', label: 'opt.compression.light' },
      ],
    }, targetSize],
    slugs: { en: 'compress-pdf', fr: 'compresser-pdf' },
    related: ['merge-pdf', 'split-pdf', 'pdf-to-jpg', 'compress-image'],
  },
  {
    id: 'merge-pdf', category: 'pdf', engine: 'pdf-merge', accept: ['pdf'], multiple: true, mode: 'all', minFiles: 2,
    maxMb: 200, popular: true, from: 'PDF', to: 'PDF',
    slugs: { en: 'merge-pdf', fr: 'fusionner-pdf' },
    related: ['split-pdf', 'compress-pdf', 'organize-pdf', 'jpg-to-pdf'],
  },
  {
    id: 'split-pdf', category: 'pdf', engine: 'pdf-split', accept: ['pdf'], multiple: false, mode: 'each',
    maxMb: 200, popular: true, from: 'PDF', to: 'PDF',
    options: [
      {
        id: 'mode', type: 'select', label: 'opt.splitMode', default: 'ranges',
        choices: [
          { value: 'ranges', label: 'opt.splitMode.ranges' },
          { value: 'every', label: 'opt.splitMode.every' },
        ],
      },
      { id: 'ranges', type: 'text', label: 'opt.ranges', default: '', placeholder: 'opt.ranges.placeholder' },
    ],
    slugs: { en: 'split-pdf', fr: 'diviser-pdf' },
    related: ['merge-pdf', 'organize-pdf', 'compress-pdf', 'rotate-pdf'],
  },
  {
    id: 'rotate-pdf', category: 'pdf', engine: 'pdf-rotate', accept: ['pdf'], multiple: true, mode: 'each',
    maxMb: 200, from: 'PDF', to: 'PDF',
    options: [
      {
        id: 'angle', type: 'select', label: 'opt.angle', default: '90',
        choices: [
          { value: '90', label: 'opt.angle.right' },
          { value: '180', label: '180°' },
          { value: '270', label: 'opt.angle.left' },
        ],
      },
      {
        id: 'pages', type: 'select', label: 'opt.pages', default: 'all',
        choices: [
          { value: 'all', label: 'opt.pages.all' },
          { value: 'odd', label: 'opt.pages.odd' },
          { value: 'even', label: 'opt.pages.even' },
        ],
      },
    ],
    slugs: { en: 'rotate-pdf', fr: 'pivoter-pdf' },
    related: ['organize-pdf', 'split-pdf', 'merge-pdf'],
  },
  {
    id: 'organize-pdf', category: 'pdf', engine: 'pdf-organize', accept: ['pdf'], multiple: false, mode: 'each',
    maxMb: 200, from: 'PDF', to: 'PDF',
    slugs: { en: 'organize-pdf', fr: 'organiser-pdf' },
    related: ['merge-pdf', 'split-pdf', 'rotate-pdf'],
  },
  {
    id: 'pdf-to-jpg', category: 'pdf', engine: 'pdf-to-image', params: { format: 'jpg' }, accept: ['pdf'], multiple: true, mode: 'each',
    maxMb: 200, popular: true, from: 'PDF', to: 'JPG',
    options: [
      {
        id: 'dpi', type: 'select', label: 'opt.resolution', default: '150',
        choices: [
          { value: '72', label: 'opt.resolution.low' },
          { value: '150', label: 'opt.resolution.medium' },
          { value: '300', label: 'opt.resolution.high' },
        ],
      },
      quality(90),
    ],
    slugs: { en: 'pdf-to-jpg', fr: 'pdf-en-jpg' },
    related: ['pdf-to-png', 'jpg-to-pdf', 'compress-pdf'],
  },
  {
    id: 'pdf-to-png', category: 'pdf', engine: 'pdf-to-image', params: { format: 'png' }, accept: ['pdf'], multiple: true, mode: 'each',
    maxMb: 200, from: 'PDF', to: 'PNG',
    options: [{
      id: 'dpi', type: 'select', label: 'opt.resolution', default: '150',
      choices: [
        { value: '72', label: 'opt.resolution.low' },
        { value: '150', label: 'opt.resolution.medium' },
        { value: '300', label: 'opt.resolution.high' },
      ],
    }],
    slugs: { en: 'pdf-to-png', fr: 'pdf-en-png' },
    related: ['pdf-to-jpg', 'png-to-pdf', 'compress-pdf'],
  },
  {
    id: 'jpg-to-pdf', category: 'pdf', engine: 'images-to-pdf', accept: ['jpg', 'jpeg', 'png', 'webp', 'heic', 'heif', 'gif', 'bmp', 'avif'], multiple: true, mode: 'all',
    maxMb: 100, popular: true, from: 'JPG', to: 'PDF',
    options: [pageSize, margin],
    slugs: { en: 'jpg-to-pdf', fr: 'jpg-en-pdf' },
    related: ['png-to-pdf', 'pdf-to-jpg', 'merge-pdf', 'compress-pdf'],
  },
  {
    id: 'png-to-pdf', category: 'pdf', engine: 'images-to-pdf', accept: ['png', 'jpg', 'jpeg', 'webp', 'gif', 'bmp', 'avif'], multiple: true, mode: 'all',
    maxMb: 100, from: 'PNG', to: 'PDF',
    options: [pageSize, margin],
    slugs: { en: 'png-to-pdf', fr: 'png-en-pdf' },
    related: ['jpg-to-pdf', 'pdf-to-png', 'merge-pdf'],
  },
  {
    id: 'add-page-numbers', category: 'pdf', engine: 'pdf-page-numbers', accept: ['pdf'], multiple: true, mode: 'each',
    maxMb: 200, from: 'PDF', to: 'PDF',
    options: [
      {
        id: 'position', type: 'select', label: 'opt.position', default: 'bottom-center',
        choices: [
          { value: 'bottom-center', label: 'opt.position.bottomCenter' },
          { value: 'bottom-right', label: 'opt.position.bottomRight' },
          { value: 'top-right', label: 'opt.position.topRight' },
        ],
      },
      {
        id: 'format', type: 'select', label: 'opt.numberFormat', default: 'n',
        choices: [
          { value: 'n', label: '1, 2, 3' },
          { value: 'n-of-total', label: 'opt.numberFormat.ofTotal' },
        ],
      },
      { id: 'start', type: 'number', label: 'opt.startAt', default: 1, min: 0, max: 99999 },
    ],
    slugs: { en: 'add-page-numbers', fr: 'numeroter-pdf' },
    related: ['watermark-pdf', 'merge-pdf', 'organize-pdf'],
  },
  {
    id: 'watermark-pdf', category: 'pdf', engine: 'pdf-watermark', accept: ['pdf'], multiple: true, mode: 'each',
    maxMb: 200, from: 'PDF', to: 'PDF',
    options: [
      { id: 'text', type: 'text', label: 'opt.watermarkText', default: 'opt.watermarkDefault', placeholder: 'opt.watermarkDefault' },
      { id: 'opacity', type: 'range', label: 'opt.opacity', default: 20, min: 5, max: 100, step: 5, unit: '%' },
      {
        id: 'layout', type: 'select', label: 'opt.layout', default: 'diagonal',
        choices: [
          { value: 'diagonal', label: 'opt.layout.diagonal' },
          { value: 'tiled', label: 'opt.layout.tiled' },
        ],
      },
    ],
    slugs: { en: 'watermark-pdf', fr: 'filigrane-pdf' },
    related: ['add-page-numbers', 'protect-pdf', 'compress-pdf'],
  },
  {
    id: 'protect-pdf', category: 'pdf', engine: 'pdf-protect', accept: ['pdf'], multiple: false, mode: 'each',
    maxMb: 200, from: 'PDF', to: 'PDF',
    options: [{ id: 'password', type: 'text', label: 'opt.password', default: '', placeholder: 'opt.password.placeholder' }],
    slugs: { en: 'protect-pdf', fr: 'proteger-pdf' },
    related: ['unlock-pdf', 'watermark-pdf', 'compress-pdf'],
  },
  {
    id: 'unlock-pdf', category: 'pdf', engine: 'pdf-unlock', accept: ['pdf'], multiple: false, mode: 'each',
    maxMb: 200, from: 'PDF', to: 'PDF',
    options: [{ id: 'password', type: 'text', label: 'opt.currentPassword', default: '', placeholder: 'opt.currentPassword.placeholder' }],
    slugs: { en: 'unlock-pdf', fr: 'deverrouiller-pdf' },
    related: ['protect-pdf', 'compress-pdf', 'merge-pdf'],
  },
  {
    id: 'pdf-to-text', category: 'pdf', engine: 'pdf-to-text', accept: ['pdf'], multiple: true, mode: 'each',
    maxMb: 200, from: 'PDF', to: 'TXT',
    slugs: { en: 'pdf-to-text', fr: 'pdf-en-texte' },
    related: ['pdf-to-word', 'ocr-pdf', 'pdf-to-excel'],
  },
  {
    id: 'ocr-pdf', category: 'pdf', engine: 'ocr', accept: ['pdf', 'jpg', 'jpeg', 'png', 'webp'], multiple: false, mode: 'each',
    maxMb: 100, heavy: true, from: 'PDF', to: 'TXT',
    options: [{
      id: 'lang', type: 'select', label: 'opt.ocrLanguage', default: 'eng',
      choices: [
        { value: 'eng', label: 'English' }, { value: 'fra', label: 'Français' }, { value: 'spa', label: 'Español' },
        { value: 'deu', label: 'Deutsch' }, { value: 'por', label: 'Português' }, { value: 'ita', label: 'Italiano' },
      ],
    }],
    slugs: { en: 'ocr-pdf', fr: 'ocr-pdf' },
    related: ['pdf-to-text', 'pdf-to-word', 'image-to-text'],
  },

  {
    id: 'delete-pdf-pages', category: 'pdf', engine: 'pdf-organize', accept: ['pdf'], multiple: false, mode: 'each',
    maxMb: 200, from: 'PDF', to: 'PDF',
    slugs: { en: 'delete-pdf-pages', fr: 'supprimer-pages-pdf' },
    related: ['organize-pdf', 'split-pdf', 'merge-pdf'],
  },
  {
    id: 'heic-to-pdf', category: 'pdf', engine: 'images-to-pdf', accept: ['heic', 'heif', 'jpg', 'jpeg', 'png'], multiple: true, mode: 'all',
    maxMb: 100, heavy: true, from: 'HEIC', to: 'PDF',
    options: [pageSize, margin],
    slugs: { en: 'heic-to-pdf', fr: 'heic-en-pdf' },
    related: ['heic-to-jpg', 'jpg-to-pdf', 'compress-pdf'],
  },
  {
    id: 'tiff-to-pdf', category: 'pdf', engine: 'images-to-pdf', accept: ['tif', 'tiff', 'jpg', 'jpeg', 'png'], multiple: true, mode: 'all',
    maxMb: 100, from: 'TIFF', to: 'PDF',
    options: [pageSize, margin],
    slugs: { en: 'tiff-to-pdf', fr: 'tiff-en-pdf' },
    related: ['tiff-to-jpg', 'jpg-to-pdf', 'merge-pdf'],
  },
  {
    id: 'flatten-pdf', category: 'pdf', engine: 'pdf-flatten', accept: ['pdf'], multiple: true, mode: 'each',
    maxMb: 200, from: 'PDF', to: 'PDF',
    slugs: { en: 'flatten-pdf', fr: 'aplatir-pdf' },
    related: ['protect-pdf', 'compress-pdf', 'merge-pdf'],
  },

  // ───────────────────── Documents (Office) ─────────────────────
  {
    id: 'pdf-to-word', category: 'document', engine: 'pdf-to-docx', accept: ['pdf'], multiple: true, mode: 'each',
    maxMb: 100, popular: true, from: 'PDF', to: 'DOCX',
    slugs: { en: 'pdf-to-word', fr: 'pdf-en-word' },
    related: ['word-to-pdf', 'pdf-to-text', 'ocr-pdf', 'pdf-to-excel'],
  },
  {
    id: 'word-to-pdf', category: 'document', engine: 'docx-to-pdf', accept: ['docx'], multiple: true, mode: 'each',
    maxMb: 100, popular: true, from: 'DOCX', to: 'PDF',
    slugs: { en: 'word-to-pdf', fr: 'word-en-pdf' },
    related: ['pdf-to-word', 'excel-to-pdf', 'ppt-to-pdf', 'compress-pdf'],
  },
  {
    id: 'pdf-to-excel', category: 'document', engine: 'pdf-to-xlsx', accept: ['pdf'], multiple: true, mode: 'each',
    maxMb: 100, from: 'PDF', to: 'XLSX',
    slugs: { en: 'pdf-to-excel', fr: 'pdf-en-excel' },
    related: ['excel-to-pdf', 'pdf-to-word', 'pdf-to-text'],
  },
  {
    id: 'excel-to-pdf', category: 'document', engine: 'xlsx-to-pdf', accept: ['xlsx', 'csv'], multiple: true, mode: 'each',
    maxMb: 100, from: 'XLSX', to: 'PDF',
    options: [{
      id: 'orientation', type: 'select', label: 'opt.orientation', default: 'auto',
      choices: [
        { value: 'auto', label: 'opt.orientation.auto' },
        { value: 'portrait', label: 'opt.orientation.portrait' },
        { value: 'landscape', label: 'opt.orientation.landscape' },
      ],
    }],
    slugs: { en: 'excel-to-pdf', fr: 'excel-en-pdf' },
    related: ['pdf-to-excel', 'word-to-pdf', 'ppt-to-pdf'],
  },
  {
    id: 'pdf-to-ppt', category: 'document', engine: 'pdf-to-pptx', accept: ['pdf'], multiple: true, mode: 'each',
    maxMb: 100, from: 'PDF', to: 'PPTX',
    slugs: { en: 'pdf-to-ppt', fr: 'pdf-en-ppt' },
    related: ['ppt-to-pdf', 'pdf-to-jpg', 'pdf-to-word'],
  },
  {
    id: 'ppt-to-pdf', category: 'document', engine: 'pptx-to-pdf', accept: ['pptx'], multiple: true, mode: 'each',
    maxMb: 100, from: 'PPTX', to: 'PDF',
    slugs: { en: 'ppt-to-pdf', fr: 'ppt-en-pdf' },
    related: ['pdf-to-ppt', 'word-to-pdf', 'excel-to-pdf'],
  },
  {
    id: 'word-to-jpg', category: 'document', engine: 'docx-to-image', accept: ['docx'], multiple: true, mode: 'each',
    maxMb: 100, from: 'DOCX', to: 'JPG',
    slugs: { en: 'word-to-jpg', fr: 'word-en-jpg' },
    related: ['word-to-pdf', 'pdf-to-jpg'],
  },

  // ───────────────────────── Images ─────────────────────────
  {
    id: 'compress-image', category: 'image', engine: 'image-compress', accept: ['jpg', 'jpeg', 'png', 'webp', 'avif', 'bmp'], multiple: true, mode: 'each',
    maxMb: 100, popular: true, from: 'IMG', to: 'IMG',
    options: [quality(75), resizeMax],
    slugs: { en: 'compress-image', fr: 'compresser-image' },
    related: ['resize-image', 'jpg-to-webp', 'compress-pdf'],
  },
  {
    id: 'resize-image', category: 'image', engine: 'image-resize', accept: IMG_IN.filter((e) => e !== 'svg'), multiple: true, mode: 'each',
    maxMb: 100, popular: true, from: 'IMG', to: 'IMG',
    options: [
      {
        id: 'by', type: 'select', label: 'opt.resizeBy', default: 'percent',
        choices: [
          { value: 'percent', label: 'opt.resizeBy.percent' },
          { value: 'width', label: 'opt.resizeBy.width' },
          { value: 'height', label: 'opt.resizeBy.height' },
        ],
      },
      { id: 'value', type: 'number', label: 'opt.value', default: 50, min: 1, max: 20000 },
      imageFormat('original', ['original', 'jpg', 'png', 'webp']),
    ],
    slugs: { en: 'resize-image', fr: 'redimensionner-image' },
    related: ['compress-image', 'jpg-to-webp', 'jpg-to-png'],
  },
  {
    id: 'heic-to-jpg', category: 'image', engine: 'image-convert', params: { to: 'jpg' }, accept: ['heic', 'heif'], multiple: true, mode: 'each',
    maxMb: 100, heavy: true, popular: true, from: 'HEIC', to: 'JPG',
    options: [quality(92)],
    slugs: { en: 'heic-to-jpg', fr: 'heic-en-jpg' },
    related: ['heic-to-png', 'compress-image', 'jpg-to-pdf'],
  },
  {
    id: 'heic-to-png', category: 'image', engine: 'image-convert', params: { to: 'png' }, accept: ['heic', 'heif'], multiple: true, mode: 'each',
    maxMb: 100, heavy: true, from: 'HEIC', to: 'PNG',
    slugs: { en: 'heic-to-png', fr: 'heic-en-png' },
    related: ['heic-to-jpg', 'png-to-jpg'],
  },
  {
    id: 'png-to-jpg', category: 'image', engine: 'image-convert', params: { to: 'jpg' }, accept: ['png'], multiple: true, mode: 'each',
    maxMb: 100, popular: true, from: 'PNG', to: 'JPG',
    options: [quality(92)],
    slugs: { en: 'png-to-jpg', fr: 'png-en-jpg' },
    related: ['jpg-to-png', 'png-to-webp', 'compress-image'],
  },
  {
    id: 'jpg-to-png', category: 'image', engine: 'image-convert', params: { to: 'png' }, accept: ['jpg', 'jpeg'], multiple: true, mode: 'each',
    maxMb: 100, popular: true, from: 'JPG', to: 'PNG',
    slugs: { en: 'jpg-to-png', fr: 'jpg-en-png' },
    related: ['png-to-jpg', 'jpg-to-webp', 'resize-image'],
  },
  {
    id: 'webp-to-jpg', category: 'image', engine: 'image-convert', params: { to: 'jpg' }, accept: ['webp'], multiple: true, mode: 'each',
    maxMb: 100, popular: true, from: 'WEBP', to: 'JPG',
    options: [quality(92)],
    slugs: { en: 'webp-to-jpg', fr: 'webp-en-jpg' },
    related: ['webp-to-png', 'jpg-to-webp', 'png-to-jpg'],
  },
  {
    id: 'webp-to-png', category: 'image', engine: 'image-convert', params: { to: 'png' }, accept: ['webp'], multiple: true, mode: 'each',
    maxMb: 100, from: 'WEBP', to: 'PNG',
    slugs: { en: 'webp-to-png', fr: 'webp-en-png' },
    related: ['webp-to-jpg', 'png-to-webp'],
  },
  {
    id: 'jpg-to-webp', category: 'image', engine: 'image-convert', params: { to: 'webp' }, accept: ['jpg', 'jpeg'], multiple: true, mode: 'each',
    maxMb: 100, from: 'JPG', to: 'WEBP',
    options: [quality(82)],
    slugs: { en: 'jpg-to-webp', fr: 'jpg-en-webp' },
    related: ['png-to-webp', 'webp-to-jpg', 'compress-image'],
  },
  {
    id: 'png-to-webp', category: 'image', engine: 'image-convert', params: { to: 'webp' }, accept: ['png'], multiple: true, mode: 'each',
    maxMb: 100, from: 'PNG', to: 'WEBP',
    options: [quality(82)],
    slugs: { en: 'png-to-webp', fr: 'png-en-webp' },
    related: ['jpg-to-webp', 'webp-to-png', 'compress-image'],
  },
  {
    id: 'svg-to-png', category: 'image', engine: 'image-convert', params: { to: 'png' }, accept: ['svg'], multiple: true, mode: 'each',
    maxMb: 20, from: 'SVG', to: 'PNG',
    options: [{ id: 'scale', type: 'select', label: 'opt.scale', default: '2', choices: [
      { value: '1', label: '1×' }, { value: '2', label: '2×' }, { value: '4', label: '4×' },
    ] }],
    slugs: { en: 'svg-to-png', fr: 'svg-en-png' },
    related: ['png-to-jpg', 'image-to-ico'],
  },
  {
    id: 'avif-to-jpg', category: 'image', engine: 'image-convert', params: { to: 'jpg' }, accept: ['avif'], multiple: true, mode: 'each',
    maxMb: 100, from: 'AVIF', to: 'JPG',
    options: [quality(92)],
    slugs: { en: 'avif-to-jpg', fr: 'avif-en-jpg' },
    related: ['webp-to-jpg', 'heic-to-jpg'],
  },
  {
    id: 'image-to-ico', category: 'image', engine: 'image-to-ico', accept: ['png', 'jpg', 'jpeg', 'webp', 'svg'], multiple: false, mode: 'each',
    maxMb: 20, from: 'PNG', to: 'ICO',
    slugs: { en: 'png-to-ico', fr: 'png-en-ico' },
    related: ['svg-to-png', 'resize-image'],
  },

  {
    id: 'image-to-text', category: 'image', engine: 'ocr', accept: ['jpg', 'jpeg', 'png', 'webp', 'bmp', 'gif'], multiple: false, mode: 'each',
    maxMb: 50, heavy: true, from: 'IMG', to: 'TXT',
    options: [{
      id: 'lang', type: 'select', label: 'opt.ocrLanguage', default: 'eng',
      choices: [
        { value: 'eng', label: 'English' }, { value: 'fra', label: 'Français' }, { value: 'spa', label: 'Español' },
        { value: 'deu', label: 'Deutsch' }, { value: 'por', label: 'Português' }, { value: 'ita', label: 'Italiano' },
      ],
    }],
    slugs: { en: 'image-to-text', fr: 'image-en-texte' },
    related: ['ocr-pdf', 'pdf-to-text', 'compress-image'],
  },
  {
    id: 'jfif-to-jpg', category: 'image', engine: 'image-convert', params: { to: 'jpg' }, accept: ['jfif', 'jpe', 'jpg', 'jpeg'], multiple: true, mode: 'each',
    maxMb: 100, from: 'JFIF', to: 'JPG',
    options: [quality(95)],
    slugs: { en: 'jfif-to-jpg', fr: 'jfif-en-jpg' },
    related: ['webp-to-jpg', 'png-to-jpg', 'compress-image'],
  },
  {
    id: 'tiff-to-jpg', category: 'image', engine: 'image-convert', params: { to: 'jpg' }, accept: ['tif', 'tiff'], multiple: true, mode: 'each',
    maxMb: 100, from: 'TIFF', to: 'JPG',
    options: [quality(92)],
    slugs: { en: 'tiff-to-jpg', fr: 'tiff-en-jpg' },
    related: ['tiff-to-pdf', 'png-to-jpg', 'compress-image'],
  },

  // ───────────────────────── Video ─────────────────────────
  {
    id: 'mp4-to-mp3', category: 'video', engine: 'ffmpeg', params: { preset: 'extract-mp3' }, accept: VIDEO_IN, multiple: true, mode: 'each',
    maxMb: 1024, heavy: true, popular: true, from: 'MP4', to: 'MP3',
    options: [mp3Bitrate],
    slugs: { en: 'mp4-to-mp3', fr: 'mp4-en-mp3' },
    related: ['video-to-gif', 'compress-video', 'wav-to-mp3'],
  },
  {
    id: 'video-to-gif', category: 'video', engine: 'ffmpeg', params: { preset: 'gif' }, accept: VIDEO_IN, multiple: false, mode: 'each',
    maxMb: 500, heavy: true, from: 'MP4', to: 'GIF',
    options: [
      { id: 'fps', type: 'select', label: 'opt.fps', default: '12', choices: [
        { value: '8', label: '8 fps' }, { value: '12', label: '12 fps' }, { value: '15', label: '15 fps' }, { value: '24', label: '24 fps' },
      ] },
      { id: 'width', type: 'select', label: 'opt.width', default: '480', choices: [
        { value: '320', label: '320 px' }, { value: '480', label: '480 px' }, { value: '640', label: '640 px' }, { value: '800', label: '800 px' },
      ] },
      { id: 'start', type: 'number', label: 'opt.startSeconds', default: 0, min: 0 },
      { id: 'duration', type: 'number', label: 'opt.durationSeconds', default: 5, min: 1, max: 60 },
    ],
    slugs: { en: 'video-to-gif', fr: 'video-en-gif' },
    related: ['mp4-to-mp3', 'compress-video', 'trim-video'],
  },
  {
    id: 'compress-video', category: 'video', engine: 'ffmpeg', params: { preset: 'compress' }, accept: VIDEO_IN, multiple: false, mode: 'each',
    maxMb: 1024, heavy: true, popular: true, from: 'MP4', to: 'MP4',
    options: [
      { id: 'level', type: 'select', label: 'opt.compression', default: '28', choices: [
        { value: '32', label: 'opt.compression.strong' },
        { value: '28', label: 'opt.compression.recommended' },
        { value: '24', label: 'opt.compression.light' },
      ] },
      { id: 'height', type: 'select', label: 'opt.maxResolution', default: '720', choices: [
        { value: '0', label: 'opt.keepOriginal' }, { value: '1080', label: '1080p' }, { value: '720', label: '720p' }, { value: '480', label: '480p' },
      ] },
    ],
    slugs: { en: 'compress-video', fr: 'compresser-video' },
    related: ['trim-video', 'mov-to-mp4', 'mp4-to-mp3'],
  },
  {
    id: 'trim-video', category: 'video', engine: 'ffmpeg', params: { preset: 'trim' }, accept: VIDEO_IN, multiple: false, mode: 'each',
    maxMb: 1024, heavy: true, from: 'MP4', to: 'MP4',
    options: [
      { id: 'start', type: 'text', label: 'opt.startTime', default: '00:00:00', placeholder: '00:00:00' },
      { id: 'end', type: 'text', label: 'opt.endTime', default: '', placeholder: '00:00:30' },
    ],
    slugs: { en: 'trim-video', fr: 'couper-video' },
    related: ['compress-video', 'video-to-gif', 'mute-video'],
  },
  {
    id: 'mute-video', category: 'video', engine: 'ffmpeg', params: { preset: 'mute' }, accept: VIDEO_IN, multiple: true, mode: 'each',
    maxMb: 1024, heavy: true, from: 'MP4', to: 'MP4',
    slugs: { en: 'mute-video', fr: 'supprimer-son-video' },
    related: ['trim-video', 'compress-video', 'mp4-to-mp3'],
  },
  {
    id: 'mov-to-mp4', category: 'video', engine: 'ffmpeg', params: { preset: 'to-mp4' }, accept: ['mov', 'm4v', 'qt'], multiple: true, mode: 'each',
    maxMb: 1024, heavy: true, from: 'MOV', to: 'MP4',
    slugs: { en: 'mov-to-mp4', fr: 'mov-en-mp4' },
    related: ['webm-to-mp4', 'compress-video', 'mp4-to-mp3'],
  },
  {
    id: 'webm-to-mp4', category: 'video', engine: 'ffmpeg', params: { preset: 'to-mp4' }, accept: ['webm'], multiple: true, mode: 'each',
    maxMb: 1024, heavy: true, from: 'WEBM', to: 'MP4',
    slugs: { en: 'webm-to-mp4', fr: 'webm-en-mp4' },
    related: ['mov-to-mp4', 'mkv-to-mp4', 'compress-video'],
  },
  {
    id: 'mkv-to-mp4', category: 'video', engine: 'ffmpeg', params: { preset: 'to-mp4' }, accept: ['mkv'], multiple: true, mode: 'each',
    maxMb: 1024, heavy: true, from: 'MKV', to: 'MP4',
    slugs: { en: 'mkv-to-mp4', fr: 'mkv-en-mp4' },
    related: ['mov-to-mp4', 'webm-to-mp4'],
  },
  {
    id: 'mp3-to-mp4', category: 'video', engine: 'ffmpeg', params: { preset: 'audio-to-video' }, accept: ['mp3', 'wav', 'm4a', 'aac', 'ogg', 'flac', 'jpg', 'jpeg', 'png', 'webp'], multiple: true, mode: 'all',
    maxMb: 500, heavy: true, from: 'MP3', to: 'MP4',
    slugs: { en: 'mp3-to-mp4', fr: 'mp3-en-mp4' },
    related: ['mp4-to-mp3', 'wav-to-mp3'],
  },

  {
    id: 'video-to-mp3', category: 'video', engine: 'ffmpeg', params: { preset: 'extract-mp3' }, accept: VIDEO_IN, multiple: true, mode: 'each',
    maxMb: 1024, heavy: true, from: 'VIDEO', to: 'MP3',
    options: [mp3Bitrate],
    slugs: { en: 'video-to-mp3', fr: 'video-en-mp3' },
    related: ['mp4-to-mp3', 'mov-to-mp3', 'video-to-gif'],
  },
  {
    id: 'mov-to-mp3', category: 'video', engine: 'ffmpeg', params: { preset: 'extract-mp3' }, accept: ['mov', 'm4v', 'qt'], multiple: true, mode: 'each',
    maxMb: 1024, heavy: true, from: 'MOV', to: 'MP3',
    options: [mp3Bitrate],
    slugs: { en: 'mov-to-mp3', fr: 'mov-en-mp3' },
    related: ['mov-to-mp4', 'mp4-to-mp3', 'video-to-mp3'],
  },
  {
    id: 'gif-to-mp4', category: 'video', engine: 'ffmpeg', params: { preset: 'to-mp4' }, accept: ['gif'], multiple: true, mode: 'each',
    maxMb: 200, heavy: true, from: 'GIF', to: 'MP4',
    slugs: { en: 'gif-to-mp4', fr: 'gif-en-mp4' },
    related: ['video-to-gif', 'compress-video'],
  },

  // ───────────────────────── Audio ─────────────────────────
  {
    id: 'wav-to-mp3', category: 'audio', engine: 'ffmpeg', params: { preset: 'to-mp3' }, accept: ['wav', 'aiff', 'aif'], multiple: true, mode: 'each',
    maxMb: 1024, heavy: true, popular: true, from: 'WAV', to: 'MP3',
    options: [mp3Bitrate],
    slugs: { en: 'wav-to-mp3', fr: 'wav-en-mp3' },
    related: ['mp3-to-wav', 'm4a-to-mp3', 'mp4-to-mp3'],
  },
  {
    id: 'mp3-to-wav', category: 'audio', engine: 'ffmpeg', params: { preset: 'to-wav' }, accept: ['mp3', 'm4a', 'aac', 'ogg', 'flac', 'opus', 'wma'], multiple: true, mode: 'each',
    maxMb: 1024, heavy: true, from: 'MP3', to: 'WAV',
    slugs: { en: 'mp3-to-wav', fr: 'mp3-en-wav' },
    related: ['wav-to-mp3', 'audio-converter'],
  },
  {
    id: 'm4a-to-mp3', category: 'audio', engine: 'ffmpeg', params: { preset: 'to-mp3' }, accept: ['m4a', 'aac', 'mp4'], multiple: true, mode: 'each',
    maxMb: 1024, heavy: true, from: 'M4A', to: 'MP3',
    options: [mp3Bitrate],
    slugs: { en: 'm4a-to-mp3', fr: 'm4a-en-mp3' },
    related: ['wav-to-mp3', 'ogg-to-mp3', 'flac-to-mp3'],
  },
  {
    id: 'ogg-to-mp3', category: 'audio', engine: 'ffmpeg', params: { preset: 'to-mp3' }, accept: ['ogg', 'oga', 'opus'], multiple: true, mode: 'each',
    maxMb: 1024, heavy: true, from: 'OGG', to: 'MP3',
    options: [mp3Bitrate],
    slugs: { en: 'ogg-to-mp3', fr: 'ogg-en-mp3' },
    related: ['m4a-to-mp3', 'flac-to-mp3'],
  },
  {
    id: 'flac-to-mp3', category: 'audio', engine: 'ffmpeg', params: { preset: 'to-mp3' }, accept: ['flac'], multiple: true, mode: 'each',
    maxMb: 1024, heavy: true, from: 'FLAC', to: 'MP3',
    options: [mp3Bitrate],
    slugs: { en: 'flac-to-mp3', fr: 'flac-en-mp3' },
    related: ['wav-to-mp3', 'm4a-to-mp3'],
  },
  {
    id: 'audio-converter', category: 'audio', engine: 'ffmpeg', params: { preset: 'audio-convert' }, accept: AUDIO_IN.concat(VIDEO_IN), multiple: true, mode: 'each',
    maxMb: 1024, heavy: true, from: 'AUDIO', to: 'AUDIO',
    options: [{
      id: 'format', type: 'select', label: 'opt.format', default: 'mp3', choices: [
        { value: 'mp3', label: 'MP3' }, { value: 'wav', label: 'WAV' }, { value: 'm4a', label: 'M4A (AAC)' },
        { value: 'ogg', label: 'OGG (Vorbis)' }, { value: 'flac', label: 'FLAC' },
      ],
    }],
    slugs: { en: 'audio-converter', fr: 'convertisseur-audio' },
    related: ['wav-to-mp3', 'm4a-to-mp3', 'trim-audio'],
  },
  {
    id: 'trim-audio', category: 'audio', engine: 'ffmpeg', params: { preset: 'trim-audio' }, accept: AUDIO_IN, multiple: false, mode: 'each',
    maxMb: 1024, heavy: true, from: 'MP3', to: 'MP3',
    options: [
      { id: 'start', type: 'text', label: 'opt.startTime', default: '00:00:00', placeholder: '00:00:00' },
      { id: 'end', type: 'text', label: 'opt.endTime', default: '', placeholder: '00:00:30' },
    ],
    slugs: { en: 'trim-audio', fr: 'couper-audio' },
    related: ['audio-converter', 'wav-to-mp3'],
  },
  {
    id: 'm4a-to-wav', category: 'audio', engine: 'ffmpeg', params: { preset: 'to-wav' }, accept: ['m4a', 'aac', 'mp4'], multiple: true, mode: 'each',
    maxMb: 1024, heavy: true, from: 'M4A', to: 'WAV',
    slugs: { en: 'm4a-to-wav', fr: 'm4a-en-wav' },
    related: ['m4a-to-mp3', 'mp3-to-wav', 'audio-converter'],
  },
];

// "Compress PDF to <size>" landing pages: same engine, size preselected.
const PDF_SIZE_TARGETS: { kb: number; en: string; fr: string }[] = [
  { kb: 100, en: '100kb', fr: '100-ko' },
  { kb: 200, en: '200kb', fr: '200-ko' },
  { kb: 500, en: '500kb', fr: '500-ko' },
  { kb: 1024, en: '1mb', fr: '1-mo' },
];
for (const t of PDF_SIZE_TARGETS) {
  TOOLS.push({
    id: `compress-pdf-to-${t.en}`, category: 'pdf', engine: 'pdf-compress', accept: ['pdf'], multiple: true, mode: 'each',
    maxMb: 200, heavy: true, from: 'PDF', to: 'PDF',
    options: [{ ...targetSize, default: String(t.kb) }],
    slugs: { en: `compress-pdf-to-${t.en}`, fr: `compresser-pdf-${t.fr}` },
    related: ['compress-pdf', 'split-pdf', 'pdf-to-jpg', 'compress-image'],
  });
}

export const TOOL_BY_ID = new Map(TOOLS.map((t) => [t.id, t]));

export function toolSlug(tool: ToolDef, locale: Locale): string | undefined {
  return tool.slugs[locale];
}
