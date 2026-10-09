import { localePath, type Locale } from '@/i18n/locales';

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

export function pageHref(id: PageId, locale: Locale): string {
  const slugs = PAGES[id] as Partial<Record<Locale, string>>;
  return localePath(locale, slugs[locale] ?? slugs.en);
}

export function pageAlternates(id: PageId): { locale: Locale; href: string }[] {
  return (Object.entries(PAGES[id]) as [Locale, string][]).map(([locale, slug]) => ({ locale, href: localePath(locale, slug) }));
}
