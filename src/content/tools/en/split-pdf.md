---
name: Split PDF
title: Split PDF — Extract Pages or Split Every Page Free | TurboConvert
description: Split a PDF by page ranges or into single pages. Extract the pages you need in seconds — in your browser, no upload, no sign-up, no watermark.
h1: Split a PDF
lead: Extract specific pages from a PDF, cut it into several parts, or save every page as its own file. The PDF is split on your device and never uploaded.
what: your PDF
howTo: split a PDF
steps:
  - Click <strong>Choose file</strong> or drag a PDF into the box above.
  - Choose a <strong>Split mode</strong>. <em>Extract page ranges</em> creates one PDF per range; <em>One PDF per page</em> separates every page.
  - For ranges, type the <strong>Pages</strong> you want, for example <code>1-3, 5, 8-10</code>.
  - Click <strong>Convert</strong>. A single result downloads automatically; several files can be downloaded together with <strong>Download all (ZIP)</strong>.
limits:
  - One PDF at a time. Password-protected PDFs must be unlocked first with <a href="/unlock-pdf">Unlock PDF</a>.
  - Bookmarks (the outline panel) are not carried into the split files; the pages themselves — text, images and layout — are copied unchanged.
  - Maximum 200 MB per PDF.
faq:
  - q: How do I extract one page from a PDF?
    a: Keep <em>Extract page ranges</em>, type the page number (for example <code>4</code>) in Pages and click Convert. You get a one-page PDF.
  - q: How do I split a PDF into several parts?
    a: Type one range per part, separated by commas — <code>1-10, 11-20, 21-30</code> gives three PDFs. You can also leave the end open, like <code>21-</code>, to go to the last page.
  - q: Does splitting reduce quality?
    a: No. Pages are copied as they are, so text stays selectable and images keep their resolution. If the parts are still too large, run them through <a href="/compress-pdf">Compress PDF</a>.
  - q: Can I split a PDF to send it by email?
    a: Yes. Split a large file into a few ranges so each part fits the attachment limit of your mail service, then send them separately.
  - q: Is the original PDF changed?
    a: No. Your original file is only read; the split pages are saved as new PDFs in your downloads.
---

## Two ways to split

**Extract page ranges** gives you exactly the pages you ask for, grouped as you wrote them. Each range becomes a separate PDF:

| You type | You get |
|---|---|
| `3` | One PDF with page 3 |
| `1-3, 5` | Two PDFs: pages 1–3, and page 5 |
| `1-10, 11-20, 21-` | Three PDFs: pages 1–10, 11–20 and 21 to the end |

**One PDF per page** turns a 12-page document into 12 single-page PDFs — handy for separating scanned invoices, payslips or forms that were scanned in one batch.

## Common reasons to split a PDF

- **Send only what is needed.** Share the signature page of a contract, or the chapter a colleague asked for, without the rest.
- **Get under an upload limit.** Online portals often cap uploads at a few megabytes; splitting a scanned file into parts gets each one under the limit.
- **Separate a batch scan.** A scanner that produced one long PDF of different documents can be cut back into individual files.
- **Rebuild a document.** Extract the pages you want to keep, then reassemble them with [Merge PDF](/merge-pdf).

## Tips

- **Check the page numbers in your viewer first.** Ranges refer to the physical page order (1 = first page of the file), not to numbers printed on the pages, which may start after a cover or roman-numbered pages.
- **Want to delete or reorder pages instead?** [Organize PDF](/organize-pdf) shows thumbnails of every page so you can drag, rotate and remove them visually.
- **Need images of the pages?** Use [PDF to JPG](/pdf-to-jpg) to save pages as pictures.

Because the split happens in your browser, it is suitable for confidential files: your PDF is never sent to a server.

## Common problems and fixes

**The page range is rejected.** Check that the page numbers exist in the file — asking for pages 20–25 of a 12-page PDF can't work. Use numbers, commas and hyphens only, like `1-3, 7`.

**I wanted one file, not several.** Each comma-separated range creates its own PDF. To get pages 1–3 and 7 in a single document, split them out, then join the parts with Merge PDF — or simply delete the other pages in Organize PDF.

**The split files are almost as big as the original.** Pages that share images or fonts may each carry a copy of those resources. Compress the parts if size matters.

**I need every page as an image, not a PDF.** Use PDF to JPG instead; it renders each page as a picture.

**My PDF has 300 pages and I only need a chapter.** Look up the chapter's first and last page in your viewer (the page counter, not the printed number), then type that single range.
