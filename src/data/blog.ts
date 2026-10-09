import { getCollection, type CollectionEntry } from 'astro:content';
import { localePath, PUBLISHED_LOCALES, type Locale } from '@/i18n/locales';

export type Post = CollectionEntry<'blog'>;

export function postLocale(p: Post): Locale {
  return p.id.split('/')[0] as Locale;
}

export function postHref(p: Post): string {
  return localePath(postLocale(p), `blog/${p.data.permalink}`);
}

export async function getPosts(locale: Locale): Promise<Post[]> {
  const all = await getCollection('blog', (p) => !p.data.draft && postLocale(p) === locale);
  return all.sort((a, b) => b.data.updated.getTime() - a.data.updated.getTime());
}

/** Posts sharing the same file name across locales are translations. */
export async function postAlternates(p: Post): Promise<{ locale: Locale; href: string }[]> {
  const key = p.id.split('/').slice(1).join('/');
  const all = await getCollection('blog', (x) => !x.data.draft && x.id.split('/').slice(1).join('/') === key);
  return all.filter((x) => PUBLISHED_LOCALES.includes(postLocale(x))).map((x) => ({ locale: postLocale(x), href: postHref(x) }));
}

export function readingMinutes(body = ''): number {
  return Math.max(2, Math.round(body.split(/\s+/).length / 220));
}
