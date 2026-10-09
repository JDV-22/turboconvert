import type { Locale } from './locales';
import type { Category } from '@/data/tools';

export interface HomeCopy { title: string; description: string; faq: { q: string; a: string }[]; body: string }
export type HubKey = Category | 'all';
export interface HubCopy { title: string; description: string; h1: string; lead: string; body: string }

/**
 * Everything a new locale needs besides UI strings (src/i18n/dict/<locale>.ts)
 * and tool copy (src/content/tools/<locale>/): localized slugs, home and hub
 * copy. One file per locale in ./locale/<locale>.ts (default export).
 */
export interface LocalePack {
  slugs: {
    tools: Record<string, string>;
    categories: Partial<Record<Category, string>>;
    pages: Partial<Record<'about' | 'contact' | 'privacy' | 'terms' | 'blog' | 'tools', string>>;
  };
  home: HomeCopy;
  hubs: Record<HubKey, HubCopy>;
}

const modules = import.meta.glob<{ default: LocalePack }>('./locale/*.ts', { eager: true });
const PACKS: Partial<Record<Locale, LocalePack>> = {};
for (const [path, mod] of Object.entries(modules)) PACKS[path.split('/').pop()!.replace('.ts', '') as Locale] = mod.default;

export function pack(locale: Locale): LocalePack | undefined {
  return PACKS[locale];
}
