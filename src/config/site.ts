// Central switches. Everything that needs an account ID lives here so it can be
// turned on without touching templates.
export const SITE = {
  name: 'TurboConvert',
  url: 'https://turboconvert.io',
  email: 'hello@turboconvert.io',
  privacyEmail: 'privacy@turboconvert.io',
  // Shown in legal pages (publisher identity).
  owner: 'TurboConvert',
  country: 'France',
  founded: 2025,
  updated: '2026-10-09',
  // Donation page (e.g. https://ko-fi.com/turboconvert). Shown discreetly after
  // a successful conversion when set.
  donateUrl: '',
};

export const ADS = {
  // Keep false until AdSense approves the site. When true, ad slots render
  // with reserved heights and the AdSense loader is added once per page.
  enabled: false,
  client: 'ca-pub-6238323731269830',
  // Real ad unit IDs created in AdSense → Ads → By ad unit.
  slots: {
    toolBelow: '',
    toolSidebar: '',
    article: '',
  },
};

export const ANALYTICS = {
  // Vercel Web Analytics — only when the build runs on Vercel (enable it in
  // the Vercel dashboard). On other hosts, use Umami below.
  vercel: typeof process !== 'undefined' && process.env.VERCEL === '1',
  // Google Analytics 4 measurement ID (G-XXXXXXX). Loaded only after consent.
  ga4: '',
  // Umami Cloud (free, cookieless, CNIL-exempt when configured as such):
  // cloud.umami.is → Add website → paste the Website ID here.
  umamiWebsiteId: '',
  // Google Search Console HTML-tag verification token (optional, DNS also works).
  googleSiteVerification: '',
};
