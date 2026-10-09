// Tiny analytics facade. Sends events to every configured backend:
// - Vercel Web Analytics (cookieless; custom events need a Pro plan, ignored otherwise)
// - Google Analytics 4 (only loaded after consent, see consent.ts)
// Never send file names or contents — only formats and size buckets.

type Props = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    va?: (event: string, props?: unknown) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function track(name: string, props: Props = {}): void {
  const clean: Record<string, string | number | boolean> = {};
  for (const [k, v] of Object.entries(props)) if (v !== undefined) clean[k] = v;
  try { window.va?.('event', { name, data: clean }); } catch { /* ignore */ }
  try { window.gtag?.('event', name, clean); } catch { /* ignore */ }
  if (import.meta.env.DEV) console.debug('[track]', name, clean);
}

export function sizeBucket(bytes: number): string {
  const mb = bytes / 1048576;
  if (mb < 1) return '<1MB';
  if (mb < 10) return '1-10MB';
  if (mb < 50) return '10-50MB';
  if (mb < 200) return '50-200MB';
  return '>200MB';
}

export function durationBucket(ms: number): string {
  const s = ms / 1000;
  if (s < 1) return '<1s';
  if (s < 3) return '1-3s';
  if (s < 10) return '3-10s';
  if (s < 30) return '10-30s';
  if (s < 120) return '30-120s';
  return '>120s';
}
