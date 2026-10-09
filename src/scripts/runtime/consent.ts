// Consent for GA4 (Consent Mode v2). Only used when a GA4 ID is configured and
// ads are off — when AdSense is on, Google's certified CMP (AdSense → Privacy &
// messaging) collects consent instead and this banner stays hidden.
const KEY = 'tc-consent';

type Choice = 'granted' | 'denied';

function read(): Choice | null {
  try { const v = localStorage.getItem(KEY); return v === 'granted' || v === 'denied' ? v : null; } catch { return null; }
}
function write(v: Choice): void {
  try { localStorage.setItem(KEY, v); } catch { /* private mode */ }
}

function loadGa(id: string, choice: Choice): void {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() { window.dataLayer!.push(arguments); } as Window['gtag'];
  window.gtag!('consent', 'default', {
    ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
    analytics_storage: choice,
  });
  if (choice !== 'granted') return;
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.append(s);
  window.gtag!('js', new Date());
  window.gtag!('config', id, { anonymize_ip: true });
}

export function initConsent(gaId: string): void {
  const banner = document.querySelector<HTMLElement>('[data-consent]');
  const reopen = document.querySelector<HTMLElement>('[data-consent-open]');
  if (!gaId || !banner) return;
  const current = read();
  if (current) loadGa(gaId, current);
  else banner.hidden = false;
  if (reopen) {
    reopen.hidden = false;
    reopen.addEventListener('click', () => { banner.hidden = false; });
  }
  banner.querySelectorAll<HTMLButtonElement>('[data-consent-choice]').forEach((b) => {
    b.addEventListener('click', () => {
      const v = b.dataset.consentChoice as Choice;
      write(v);
      banner.hidden = true;
      if (!window.gtag || v === 'granted') loadGa(gaId, v);
      else window.gtag('consent', 'update', { analytics_storage: v });
    });
  });
}
