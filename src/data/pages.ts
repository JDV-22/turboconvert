import { localePath, PUBLISHED_LOCALES, type Locale } from '@/i18n/locales';
import { pack } from '@/i18n/packs';

// Static (non-tool) pages and their localized slugs.
export const PAGES = {
  about: { en: 'about', fr: 'a-propos' },
  contact: { en: 'contact', fr: 'contact' },
  privacy: { en: 'privacy', fr: 'confidentialite' },
  terms: { en: 'terms', fr: 'conditions' },
  blog: { en: 'blog', fr: 'blog' },
  tools: { en: 'tools', fr: 'outils' },
} satisfies Record<string, Partial<Record<Locale, string>>>;

export type PageId = keyof typeof PAGES;

export function pageSlug(id: PageId, locale: Locale): string | undefined {
  return (PAGES[id] as Partial<Record<Locale, string>>)[locale] ?? pack(locale)?.slugs.pages[id];
}

export function pageHref(id: PageId, locale: Locale): string {
  return localePath(locale, pageSlug(id, locale) ?? (PAGES[id] as Record<string, string>).en);
}

export function pageAlternates(id: PageId): { locale: Locale; href: string }[] {
  return PUBLISHED_LOCALES.flatMap((locale) => {
    const slug = pageSlug(id, locale);
    return slug ? [{ locale, href: localePath(locale, slug) }] : [];
  });
}
