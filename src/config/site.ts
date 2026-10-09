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
  // Vercel Web Analytics: enable it in the Vercel dashboard (free on Hobby).
  vercel: true,
  // Google Analytics 4 measurement ID (G-XXXXXXX). Loaded only after consent.
  ga4: '',
  // Google Search Console HTML-tag verification token (optional, DNS also works).
  googleSiteVerification: '',
};
