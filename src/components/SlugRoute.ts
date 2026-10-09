import { getTools, type ToolEntry } from '@/data/catalog';
import { CATEGORIES, CATEGORY_SLUGS, type Category } from '@/data/tools';
import type { Locale } from '@/i18n/locales';

export type SlugProps = { kind: 'tool'; entry: ToolEntry } | { kind: 'hub'; category: Category };

/** Static paths for every tool page and category hub of a locale. */
export async function slugPaths(locale: Locale) {
  const tools = await getTools(locale);
  const paths: { params: { slug: string }; props: SlugProps }[] = tools.map((entry) => ({
    params: { slug: entry.slug },
    props: { kind: 'tool', entry },
  }));
  for (const category of CATEGORIES) {
    const slug = CATEGORY_SLUGS[category][locale];
    if (slug && tools.some((e) => e.tool.category === category)) {
      paths.push({ params: { slug }, props: { kind: 'hub', category } });
    }
  }
  return paths;
}
