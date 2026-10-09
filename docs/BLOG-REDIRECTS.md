# Blog redirects (legacy site → new site)

Every URL of the old blog (`legacy/blog/*.html`, 24 posts) and of the comparison pages (`legacy/vs/*.html`, 3 pages) with its destination on the new site. Use **301** for each row marked *redirect*; rows marked *kept* keep the same URL (the post was rewritten in place, so no redirect is needed). This way no backlink is lost.

The `.html` forms (`/blog/xxx.html`) don't need their own rows: Vercel's `cleanUrls` already serves them through the extension-less URL.

## Mapping

| Legacy URL | New destination | Type | Why |
|---|---|---|---|
| `/blog/best-free-audio-converter` | `/audio-converter` | redirect 301 | Thin list (312 words) of our own tools; the query "free audio converter" is transactional, so the tool page should rank. |
| `/blog/best-free-pdf-tools` | `/blog/best-free-pdf-tools` | kept | Rewritten as a fair comparison of iLovePDF, Smallpdf, PDF24, Adobe, TurboConvert and built-in apps (absorbs the 3 `/vs/` pages). |
| `/blog/compress-pdf-for-email` | `/blog/compress-pdf-for-email` | kept | Rewritten: current Gmail/Outlook/Yahoo/iCloud limits, WhatsApp 2 GB (old post said 100 MB), splitting, links. |
| `/blog/convert-iphone-photos-to-jpg` | `/blog/convert-iphone-photos-to-jpg` | kept | Rewritten as the practical how-to for every device (absorbs `/blog/heic-to-jpg`'s informational part). |
| `/blog/heic-to-jpg` | `/heic-to-jpg` | redirect 301 | Same transactional query as the tool page (cannibalization). |
| `/blog/how-to-compress-image-without-losing-quality` | `/blog/how-to-compress-image-without-losing-quality` | kept | Merged with `how-to-reduce-image-size` into one guide (resize, quality, format). |
| `/blog/how-to-compress-pdf` | `/blog/how-to-compress-pdf` | kept | Re-angled to "reduce PDF size without losing quality" (what makes PDFs heavy, dpi, built-in methods). |
| `/blog/how-to-convert-jpg-to-png` | `/jpg-to-png` | redirect 301 | Duplicates the tool's query; format comparison now lives in `/blog/png-vs-jpg`. |
| `/blog/how-to-convert-pdf-to-word` | `/blog/how-to-convert-pdf-to-word` | kept | Re-angled to "convert PDF to Word without losing formatting" (informational, distinct from the tool). |
| `/blog/how-to-convert-png-to-jpg` | `/png-to-jpg` | redirect 301 | Duplicates the tool's query; "when to use which" moved to `/blog/png-vs-jpg`. |
| `/blog/how-to-convert-webp-to-jpg` | `/webp-to-jpg` | redirect 301 | Duplicates the tool's query; the "why images save as WebP" explainer is now a section of `/blog/png-vs-jpg`. |
| `/blog/how-to-convert-word-to-pdf-free` | `/word-to-pdf` | redirect 301 | Thin (363 words), same transactional intent as the tool page. |
| `/blog/how-to-create-video-from-mp3` | `/blog/how-to-create-video-from-mp3` | kept | Re-angled to "how to upload an MP3 to YouTube". |
| `/blog/how-to-extract-audio-from-video` | `/blog/how-to-extract-audio-from-video` | kept | Rewritten for every device (QuickTime, Shortcuts, VLC, FFmpeg); absorbs `/blog/mp4-to-mp3`'s informational part. |
| `/blog/how-to-merge-pdf-on-mac` | `/blog/how-to-merge-pdf-on-mac` | kept | Rewritten: Finder Quick Action, Preview (and its limits), Shortcuts, iPhone Files. |
| `/blog/how-to-merge-pdf` | `/merge-pdf` | redirect 301 | Same query as the tool page; Mac-specific guide kept separately. |
| `/blog/how-to-reduce-image-size` | `/blog/how-to-compress-image-without-losing-quality` | redirect 301 | Near-duplicate, merged. |
| `/blog/how-to-rotate-pdf` | `/rotate-pdf` | redirect 301 | Thin, same intent as the tool page. |
| `/blog/how-to-split-pdf` | `/split-pdf` | redirect 301 | Thin, same intent as the tool page. |
| `/blog/jpg-to-pdf` | `/jpg-to-pdf` | redirect 301 | Same query as the tool page (cannibalization). Phone how-to now in `/blog/photo-to-pdf-iphone-android`. |
| `/blog/mp3-vs-wav` | `/blog/mp3-vs-wav` | kept | Rewritten (sizes per minute, FLAC/AAC/Opus, sample rate). |
| `/blog/mp4-to-mp3` | `/mp4-to-mp3` | redirect 301 | Same query as the tool page (cannibalization). |
| `/blog/wav-to-mp3` | `/wav-to-mp3` | redirect 301 | Same query as the tool page (cannibalization). |
| `/blog/what-is-heic-format` | `/blog/what-is-heic-format` | kept | Re-angled to "HEIC vs JPG / why HEIC won't open". |
| `/vs/ilovepdf` | `/blog/best-free-pdf-tools` | redirect 301 | Comparison pages consolidated into one fact-checked guide (see below). |
| `/vs/pdf24` | `/blog/best-free-pdf-tools` | redirect 301 | Same (this page was also orphaned and missing from the old sitemap). |
| `/vs/smallpdf` | `/blog/best-free-pdf-tools` | redirect 301 | Same. |

**Totals:** 24 legacy posts + 3 comparison pages = 27 URLs → 11 kept in place, 16 redirected (12 to tool pages, 1 merged into another guide, 3 `/vs/` pages into the comparison guide).

### Why the `/vs/` pages were consolidated, not rewritten one by one

The three pages carried outdated or unverifiable figures (TurboConvert's "100 MB limit" and "22+ tools", undated competitor prices and limits) and absolute claims such as "works offline" and "the only approach that offers genuine privacy". Three separate competitor pages would also need re-verifying every time a competitor changes its free plan. One comparison guide (`/blog/best-free-pdf-tools`) covers the same queries ("smallpdf alternative", "ilovepdf free limits", "pdf24 alternative") with a dated, sourced table and an H2 per competitor, and is a single page to keep current. Review its limits table every 6 months.

## New guides (no legacy URL, nothing to redirect)

- `/blog/password-protect-pdf`
- `/blog/photo-to-pdf-iphone-android`
- `/blog/convert-mov-to-mp4`
- `/blog/compress-video-for-email`
- `/blog/png-vs-jpg` (replaces the two JPG↔PNG posts and the WebP post)

French guides are all new URLs under `/fr/blog/…` (the old site had no French pages), so they need no redirects.

## Before going live

- A redirect destination must return 200. Tool pages are only published once their engine exists: if a destination tool (`/audio-converter`, `/word-to-pdf`, `/heic-to-jpg`, …) isn't live at launch, point that row temporarily at its category hub (`/audio-tools`, `/document-tools`, `/image-tools`, `/pdf-tools`, `/video-tools`) and switch it when the tool ships.
- Check there is no chain: every destination above is final (no destination is itself redirected).
- After deploy, crawl the 27 legacy URLs and confirm one hop, status 301.

## `vercel.json` snippet

Vercel's `"permanent": true` sends a 308; use `"statusCode": 301` to send an explicit 301. Kept posts need no entry.

```json
[
  { "source": "/blog/best-free-audio-converter", "destination": "/audio-converter", "statusCode": 301 },
  { "source": "/blog/heic-to-jpg", "destination": "/heic-to-jpg", "statusCode": 301 },
  { "source": "/blog/how-to-convert-jpg-to-png", "destination": "/jpg-to-png", "statusCode": 301 },
  { "source": "/blog/how-to-convert-png-to-jpg", "destination": "/png-to-jpg", "statusCode": 301 },
  { "source": "/blog/how-to-convert-webp-to-jpg", "destination": "/webp-to-jpg", "statusCode": 301 },
  { "source": "/blog/how-to-convert-word-to-pdf-free", "destination": "/word-to-pdf", "statusCode": 301 },
  { "source": "/blog/how-to-merge-pdf", "destination": "/merge-pdf", "statusCode": 301 },
  { "source": "/blog/how-to-reduce-image-size", "destination": "/blog/how-to-compress-image-without-losing-quality", "statusCode": 301 },
  { "source": "/blog/how-to-rotate-pdf", "destination": "/rotate-pdf", "statusCode": 301 },
  { "source": "/blog/how-to-split-pdf", "destination": "/split-pdf", "statusCode": 301 },
  { "source": "/blog/jpg-to-pdf", "destination": "/jpg-to-pdf", "statusCode": 301 },
  { "source": "/blog/mp4-to-mp3", "destination": "/mp4-to-mp3", "statusCode": 301 },
  { "source": "/blog/wav-to-mp3", "destination": "/wav-to-mp3", "statusCode": 301 },
  { "source": "/vs/ilovepdf", "destination": "/blog/best-free-pdf-tools", "statusCode": 301 },
  { "source": "/vs/pdf24", "destination": "/blog/best-free-pdf-tools", "statusCode": 301 },
  { "source": "/vs/smallpdf", "destination": "/blog/best-free-pdf-tools", "statusCode": 301 }
]
```
