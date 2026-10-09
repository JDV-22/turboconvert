import type { Locale } from './locales';
import en, { type UIKey } from './dict/en';

export type { UIKey };

// One dictionary file per locale in ./dict/<locale>.ts (default export).
const modules = import.meta.glob<{ default: Record<UIKey, string> }>('./dict/*.ts', { eager: true });
export const UI: Partial<Record<Locale, Record<UIKey, string>>> = {};
for (const [path, mod] of Object.entries(modules)) {
  UI[path.split('/').pop()!.replace('.ts', '') as Locale] = mod.default;
}

export function useT(locale: Locale) {
  const dict = UI[locale] ?? en;
  return (key: string, vars?: Record<string, string | number>): string => {
    let s = (dict as Record<string, string>)[key] ?? (en as Record<string, string>)[key] ?? key;
    if (vars) for (const [k, v] of Object.entries(vars)) s = s.replaceAll(`{${k}}`, String(v));
    return s;
  };
}
