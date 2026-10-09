import type { APIRoute } from 'astro';
import { execSync } from 'node:child_process';
import { SITE } from '@/config/site';
import { LOCALE_META, PUBLISHED_LOCALES, localePath, type Locale } from '@/i18n/locales';
import { getTools, toolAlternates, categoryHref } from '@/data/catalog';
import { CATEGORIES, CATEGORY_SLUGS } from '@/data/tools';
import { getPosts, postAlternates, postHref } from '@/data/blog';
import { PAGES, pageHref, pageAlternates, type PageId } from '@/data/pages';

type Alt = { locale: Locale; href: string };
interface Url { loc: string; alternates: Alt[]; lastmod?: string }

const gitDates = new Map<string, string>();
function gitDate(file: string): string | undefined {
  if (gitDates.has(file)) return gitDates.get(file);
  let d: string | undefined;
  try { d = execSync(`git log -1 --format=%cI -- "${file}"`, { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim() || undefined; } catch { d = undefined; }
  gitDates.set(file, d ?? '');
  return d;
}

const abs = (href: string) => (href === '/' ? `${SITE.url}/` : `${SITE.url}${href}`);
const esc = (s: string) => s.replace(/&/g, '&amp;');

export const GET: APIRoute = async () => {
  const urls: Url[] = [];
  const homeAlts = PUBLISHED_LOCALES.map((l) => ({ locale: l, href: localePath(l) }));
  for (const l of PUBLISHED_LOCALES) {
    urls.push({ loc: localePath(l), alternates: homeAlts, lastmod: SITE.updated });

    for (const e of await getTools(l)) {
      urls.push({
        loc: e.href,
        alternates: await toolAlternates(e.tool.id),
        lastmod: gitDate(`src/content/tools/${l}/${e.tool.id}.md`) ?? SITE.updated,
      });
    }
    for (const c of CATEGORIES) {
      const href = categoryHref(c, l);
      if (!href || !(await getTools(l)).some((e) => e.tool.category === c)) continue;
      const alts = PUBLISHED_LOCALES.map((x) => (CATEGORY_SLUGS[c][x] ? { locale: x, href: localePath(x, CATEGORY_SLUGS[c][x]) } : null)).filter((a): a is Alt => !!a);
      urls.push({ loc: href, alternates: alts, lastmod: SITE.updated });
    }
    for (const id of Object.keys(PAGES) as PageId[]) {
      if (!(PAGES[id] as Partial<Record<Locale, string>>)[l]) continue;
      urls.push({ loc: pageHref(id, l), alternates: pageAlternates(id), lastmod: SITE.updated });
    }
    for (const p of await getPosts(l)) {
      urls.push({ loc: postHref(p), alternates: await postAlternates(p), lastmod: p.data.updated.toISOString().slice(0, 10) });
    }
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map((u) => {
  const alts = u.alternates.length > 1
    ? [...u.alternates.map((a) => `    <xhtml:link rel="alternate" hreflang="${LOCALE_META[a.locale].htmlLang}" href="${esc(abs(a.href))}"/>`),
       ...u.alternates.filter((a) => a.locale === 'en').map((a) => `    <xhtml:link rel="alternate" hreflang="x-default" href="${esc(abs(a.href))}"/>`)].join('\n')
    : '';
  return `  <url>
    <loc>${esc(abs(u.loc))}</loc>${u.lastmod ? `\n    <lastmod>${u.lastmod.slice(0, 10)}</lastmod>` : ''}${alts ? `\n${alts}` : ''}
  </url>`;
}).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
