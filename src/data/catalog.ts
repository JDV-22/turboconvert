import { getCollection, type CollectionEntry } from 'astro:content';
import { TOOLS, CATEGORY_SLUGS, type ToolDef, type Category } from './tools';
import { localePath, PUBLISHED_LOCALES, type Locale } from '@/i18n/locales';

// A tool is published in a locale only when its engine exists and its copy
// for that locale has been written. This keeps half-done tools off the site.
const ENGINE_FILES = import.meta.glob('/src/scripts/engines/*.ts');
const ENGINES = new Set(Object.keys(ENGINE_FILES).map((p) => p.split('/').pop()!.replace(/\.ts$/, '')));

export interface ToolEntry {
  tool: ToolDef;
  copy: CollectionEntry<'tools'>;
  slug: string;
  href: string;
}

let cache: Map<Locale, ToolEntry[]> | undefined;

export async function getTools(locale: Locale): Promise<ToolEntry[]> {
  if (!cache) {
    cache = new Map();
    const all = await getCollection('tools');
    for (const loc of PUBLISHED_LOCALES) {
      const list: ToolEntry[] = [];
      for (const tool of TOOLS) {
        const slug = tool.slugs[loc];
        const copy = all.find((e) => e.id === `${loc}/${tool.id}`);
        if (!slug || !copy || !ENGINES.has(tool.engine)) continue;
        list.push({ tool, copy, slug, href: localePath(loc, slug) });
      }
      cache.set(loc, list);
    }
  }
  return cache.get(locale) ?? [];
}

export async function getTool(locale: Locale, id: string): Promise<ToolEntry | undefined> {
  return (await getTools(locale)).find((t) => t.tool.id === id);
}

/** Every published locale version of a tool → used for hreflang. */
export async function toolAlternates(id: string): Promise<{ locale: Locale; href: string }[]> {
  const out: { locale: Locale; href: string }[] = [];
  for (const loc of PUBLISHED_LOCALES) {
    const t = await getTool(loc, id);
    if (t) out.push({ locale: loc, href: t.href });
  }
  return out;
}

export function categoryHref(cat: Category, locale: Locale): string | undefined {
  const s = CATEGORY_SLUGS[cat][locale];
  return s ? localePath(locale, s) : undefined;
}

export function formatList(exts: string[]): string {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const e of exts) {
    const label = e === 'jpeg' ? 'JPG' : e === 'heif' ? 'HEIC' : e === 'tiff' ? 'TIF' : e === 'aif' ? 'AIFF' : e === 'oga' ? 'OGG' : e === 'mpg' ? 'MPEG' : e.toUpperCase();
    if (!seen.has(label)) { seen.add(label); out.push(label); }
  }
  return out.length > 6 ? `${out.slice(0, 6).join(', ')}…` : out.join(', ');
}

export function formatMb(mb: number): string {
  return mb >= 1024 ? `${mb / 1024} GB` : `${mb} MB`;
}
