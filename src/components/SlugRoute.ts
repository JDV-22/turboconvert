import { getTools, categorySlug, type ToolEntry } from '@/data/catalog';
import { CATEGORIES, type Category } from '@/data/tools';
import { pageSlug } from '@/data/pages';
import type { Locale } from '@/i18n/locales';

export type SlugProps = { kind: 'tool'; entry: ToolEntry } | { kind: 'hub'; category: Category | 'all' };

/** Static paths for every tool page, category hub and the all-tools page of a locale. */
export async function slugPaths(locale: Locale) {
  const tools = await getTools(locale);
  const paths: { params: { slug: string }; props: SlugProps }[] = tools.map((entry) => ({
    params: { slug: entry.slug },
    props: { kind: 'tool', entry },
  }));
  for (const category of CATEGORIES) {
    const slug = categorySlug(category, locale);
    if (slug && tools.some((e) => e.tool.category === category)) {
      paths.push({ params: { slug }, props: { kind: 'hub', category } });
    }
  }
  if (locale !== 'en') {
    const all = pageSlug('tools', locale);
    if (all) paths.push({ params: { slug: all }, props: { kind: 'hub', category: 'all' } });
  }
  return paths;
}
