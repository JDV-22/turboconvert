import type { APIRoute } from 'astro';
import { SITE } from '@/config/site';
import { getTools } from '@/data/catalog';
import { CATEGORIES } from '@/data/tools';
import { useT } from '@/i18n/ui';
import { getPosts, postHref } from '@/data/blog';

// llms.txt (https://llmstxt.org) generated from the live catalog so it never
// describes tools that don't exist.
export const GET: APIRoute = async () => {
  const t = useT('en');
  const tools = await getTools('en');
  const fr = await getTools('fr');
  const posts = await getPosts('en');
  const lines: string[] = [
    '# TurboConvert',
    '',
    '> Free online file converter where every conversion runs locally in the browser (WebAssembly). Files are never uploaded to a server. No account, no watermark, no daily limit.',
    '',
    'Key facts:',
    '- Privacy: files are processed on the user\'s device; nothing is uploaded (verifiable in the browser Network tab).',
    '- Engines: Ghostscript (PDF compression), FFmpeg/ffmpeg.wasm (audio/video), PDF.js and pdf-lib (PDF), qpdf (encryption), libheif (HEIC), Tesseract (OCR), docx/mammoth/docx-preview/ExcelJS/jsPDF/PptxGenJS (Office).',
    '- Cost: free, funded by advertising.',
    '- Limits: depend on the device memory; each tool page lists its real limitations under "Good to know".',
    `- Languages: English (${SITE.url}/), French (${SITE.url}/fr).`,
    '',
  ];
  for (const c of CATEGORIES) {
    const list = tools.filter((e) => e.tool.category === c);
    if (!list.length) continue;
    lines.push(`## ${t(`cat.${c}.title`)}`, '');
    for (const e of list) lines.push(`- [${e.copy.data.name}](${SITE.url}${e.href}): ${e.copy.data.description}`);
    lines.push('');
  }
  if (posts.length) {
    lines.push('## Guides', '');
    for (const p of posts) lines.push(`- [${p.data.h1 ?? p.data.title}](${SITE.url}${postHref(p)}): ${p.data.description}`);
    lines.push('');
  }
  if (fr.length) {
    lines.push('## Optional', '', `- [Version française](${SITE.url}/fr): ${fr.length} outils en français.`, `- [About](${SITE.url}/about): how TurboConvert works and open-source licenses.`, '');
  }
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
