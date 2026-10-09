export const LOCALES = ['en', 'fr', 'es', 'de', 'pt', 'it'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

// Locales that are actually published. A locale is only added here once its
// UI strings and tool copy are fully translated (no half-translated pages).
export const PUBLISHED_LOCALES: Locale[] = ['en', 'fr', 'es', 'pt', 'it'];

export const LOCALE_META: Record<Locale, { label: string; htmlLang: string; ogLocale: string }> = {
  en: { label: 'English', htmlLang: 'en', ogLocale: 'en_US' },
  fr: { label: 'Français', htmlLang: 'fr', ogLocale: 'fr_FR' },
  es: { label: 'Español', htmlLang: 'es', ogLocale: 'es_ES' },
  de: { label: 'Deutsch', htmlLang: 'de', ogLocale: 'de_DE' },
  pt: { label: 'Português', htmlLang: 'pt-BR', ogLocale: 'pt_BR' },
  it: { label: 'Italiano', htmlLang: 'it', ogLocale: 'it_IT' },
};

/** Path prefix for a locale: '' for the default locale, '/fr' otherwise. */
export function localePrefix(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? '' : `/${locale}`;
}

/** Build a localized path from a locale and a slug ('' = home). */
export function localePath(locale: Locale, slug = ''): string {
  const prefix = localePrefix(locale);
  if (!slug) return prefix || '/';
  return `${prefix}/${slug.replace(/^\//, '')}`;
}
