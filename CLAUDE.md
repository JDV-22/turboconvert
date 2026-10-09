# TurboConvert — project rules

## Golden rule: profitability
Every decision serves one goal: **make turboconvert.io as profitable as possible for its owner**, at zero running cost (no paid APIs, no servers — everything runs in the visitor's browser, hosted as a static site on Vercel).
Profit comes from: organic traffic (SEO, many languages, many tools), conversion rate of visitors into happy repeat users (speed, simplicity, output quality, trust), and monetization (ads placed where they earn without hurting UX/Core Web Vitals or AdSense policy, affiliate links, optional premium/donations if there is demand). When in doubt, pick the option that brings more qualified traffic or more revenue per visit without degrading the experience.

Never: make claims the code doesn't back (AdSense rejects "misrepresentation"; users bounce), add ads next to upload/download buttons, add paid services, upload user files anywhere.

## Stack
- Astro 5 static site (`npm run build` → `dist/`), deployed on Vercel. `vercel.json` holds redirects/headers.
- `src/data/tools.ts` — tool registry (id, category, engine, accepted formats, options, localized slugs).
- `src/content/tools/<locale>/<toolId>.md` — all copy for a tool page (frontmatter schema in `src/content.config.ts`) + long-form body.
- `src/scripts/engines/<engine>.ts` — conversion engines, default export `Engine` (see `src/scripts/runtime/types.ts`). Loaded lazily per tool page.
- `src/scripts/lib/` — shared helpers (image decode/encode, pdf load/save…).
- `src/scripts/runtime/tool.ts` — shared tool UI runtime (drop, list, options, progress, results, ZIP, analytics).
- A tool page is published for a locale only when its engine file exists AND its copy file exists for that locale.
- i18n: `src/i18n/locales.ts` (`PUBLISHED_LOCALES`), `src/i18n/ui.ts` (UI strings). English at `/`, other locales under `/<locale>/` with localized slugs.
- `src/config/site.ts` — ads/analytics switches (ads off until AdSense approval).
- `legacy/` — the old hand-written site, kept only as reference for content migration. Not deployed.

## Conventions
- Engines: pure client-side, lazy-import heavy libraries inside the engine, report progress, honour `signal`, throw `UserError` for user-facing problems (password, invalid file, bad options).
- Copy: honest, specific, useful. No fake numbers, no "100% accurate", no "deleted after 1 hour" (nothing is ever uploaded). State limitations in `limits`.
- Internal links in English copy use English slugs (`/compress-pdf`); French copy uses `/fr/<french-slug>`.
- Verify in a real browser: `npm run build && node scripts/serve.mjs dist` then drive Chromium with Playwright (`executablePath: '/opt/pw-browsers/chromium'`; never run `playwright install`).
