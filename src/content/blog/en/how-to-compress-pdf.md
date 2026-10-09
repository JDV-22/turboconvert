---
title: How to Reduce PDF File Size Without Losing Quality
description: "What actually makes a PDF heavy, which compression settings keep text and images sharp, and the free methods that work on Windows, Mac and phones."
h1: How to reduce PDF file size without losing quality
permalink: how-to-compress-pdf
published: 2025-02-01
updated: 2026-10-09
tool: compress-pdf
category: pdf
faq:
  - q: Can you compress a PDF without any quality loss at all?
    a: Only partially. Lossless steps such as removing duplicate resources or unused data usually save little. Big reductions come from re-encoding images, which is technically lossy — but at a sensible resolution (around 150 dpi) the difference is invisible on screen.
  - q: Why didn't my PDF get smaller?
    a: It is probably already optimized or contains mostly text and vector graphics, which are compact by nature. Compression gives big gains on scans and photo-heavy files and small gains on text-only documents. TurboConvert keeps your original if compression would not make it smaller.
  - q: What DPI should I use for a PDF?
    a: About 150 dpi is a good balance for reading on screen and printing on an office printer. Use 300 dpi for professional printing and 72–100 dpi only when the smallest possible file matters more than detail.
  - q: Does compressing a PDF remove the text layer or links?
    a: No. Re-encoding images does not touch text, so it stays selectable and searchable, and links keep working. Scanned PDFs without OCR have no text layer to begin with — use <a href="/ocr-pdf">OCR PDF</a> to extract their text.
  - q: Is Adobe Acrobat needed to reduce PDF size?
    a: No. Acrobat Pro has good optimization tools, but they are paid. Free options include Preview on Mac, export settings in Word, and browser-based compressors such as <a href="/compress-pdf">Compress PDF</a>, which runs on your device without uploading the file.
---

"Without losing quality" is the promise on every PDF compressor, and it's only half true. The honest version: you can usually make a PDF **much** smaller with **no visible** loss — as long as you know where the weight comes from and which settings to choose. This guide explains what's inside a heavy PDF, what each compression level really does, and how to get the best result with free tools on Windows, Mac, iPhone and Android.

If your goal is simply to get under an email limit, our shorter guide on [making a PDF small enough to email](/blog/compress-pdf-for-email) lists the limits of Gmail, Outlook and iCloud.

## What makes a PDF heavy

A PDF is a container. Its size depends on what's packed inside:

| Content | Typical weight | Compressible? |
|---|---|---|
| Text | A few KB per page | Already compact |
| Embedded fonts | 20 KB – 1 MB per font | A little (subsetting) |
| Vector graphics (charts, logos, CAD) | Small to medium | Rarely |
| Photos and scanned pages | 0.3 – 5 MB per page | **Yes, a lot** |
| Metadata, thumbnails, edit history | Small, sometimes duplicated | A little |

In practice, **images account for most of the size of almost every large PDF**. A colour scan at 300 dpi stores millions of pixels per page; a PowerPoint export keeps every photo at its original camera resolution even when it appears as a thumbnail. Compression tools win their big percentages by resampling and re-encoding those images — not by squeezing text.

## Lossless vs lossy: what "without losing quality" means

- **Lossless optimization** rewrites the PDF more efficiently: removes duplicated images and fonts, unused objects and leftover edit history, compresses internal streams. Nothing visible changes. Gains range from nothing to 10–30% on badly produced files.
- **Lossy image compression** lowers image resolution (dpi) and re-encodes them as JPEG at a chosen quality. This is where 50–90% reductions come from on scans. It's technically "loss", but at the right resolution the human eye can't tell on screen.

The trick is choosing a resolution that matches how the PDF will be used:

| Use | Resolution that looks sharp | Compression level in TurboConvert |
|---|---|---|
| Reading on a phone or laptop, email | ~72–100 dpi is enough for most | **Strong — smallest file** |
| Screen reading with zoom, office printing | ~150 dpi | **Recommended — good quality** |
| Professional or high-quality printing | ~300 dpi | **Light — best quality** |

Text and vector graphics are not resampled, so even the strongest level keeps letters crisp. What you lose at the strong level is fine detail in photos — visible if you zoom into a picture, rarely when reading.

## The quickest method: compress in your browser

[Compress PDF](/compress-pdf) runs Ghostscript — the open-source engine used by many professional PDF tools — directly in your browser:

1. Click **Choose files** or drop one or more PDFs (up to 200 MB each).
2. Choose a **Compression** level. Start with **Recommended — good quality**.
3. Click **Convert**. The smaller PDF downloads automatically.
4. Open it and zoom on a photo and on the smallest text. If it's fine and you need smaller, try **Strong**; if you see artefacts, use **Light**.

Because nothing is uploaded, it's suitable for confidential documents. The first run downloads the compression engine (a few seconds); later runs start instantly. If the file can't be made smaller, your original is kept rather than replaced by a bigger one.

## Free built-in methods, system by system

### Mac: Preview, with a better filter

Preview's **File > Export > Quartz Filter > Reduce File Size** is free but aggressive: it can make scans blurry or blocky. For better control, open **ColorSync Utility** (Applications > Utilities), go to *Filters*, duplicate *Reduce File Size* and raise the image quality and resolution (around 150 dpi). Your custom filter then appears in Preview's export menu. Always keep the original — Preview can overwrite it if you use *Save* instead of *Export*.

### Windows: fix the source

Windows has no built-in tool to shrink an existing PDF. "Microsoft Print to PDF" re-creates a file but doesn’t reliably reduce it, and it drops clickable links. The best free approach on Windows is to create a lighter PDF in the first place (see below) or use a browser-based compressor.

### Word, PowerPoint and Excel: export with the right settings

When you control the source document, you'll get a better result by exporting correctly than by compressing afterwards:

- **Word (Windows):** *File > Save As > PDF*, select **Minimum size (publishing online)** for email, or *Standard* for print.
- **PowerPoint:** *File > Compress Pictures* (or *Picture Format > Compress Pictures*), choose 150 ppi, tick "Delete cropped areas", then export.
- **Any Office app:** paste images at the size you need instead of full-resolution camera photos.

### iPhone and Android: rescan, don't recompress

Most heavy PDFs made on phones are scans. In the iPhone Notes scanner or an Android scanning app, choose **grayscale or black & white** when colour isn't useful — the file is often several times lighter, and usually easier to read. For PDFs you already have, a browser compressor works on phones too.

## Extra ways to cut size without touching quality

- **Remove pages you don't need.** Blank pages, duplicated annexes, cover sheets. [Organize PDF](/organize-pdf) shows page thumbnails so you can delete them, or use [Split PDF](/split-pdf) to keep a page range.
- **Don't merge before you trim.** If you're assembling a file, compress the heavy scans, then [merge](/merge-pdf) — or merge and compress once at the end. Avoid compressing the same file twice.
- **Flatten huge vector drawings** only if you know what you're doing: very complex maps or CAD exports can be lighter as images, but you lose infinite zoom.
- **Don't expect ZIP to help.** PDFs are already compressed internally; zipping saves a few percent at best.

## When compression is the wrong answer

- **Text-only PDFs of 1–3 MB** are mostly fonts and text; there's little to gain. Splitting or sending a link works better.
- **Print-ready files** for a printer or publisher must keep 300 dpi images and specific colour settings. Don't compress them — send a link.
- **Signed PDFs with a digital (certificate) signature**: any rewrite of the file invalidates the signature. Compress before signing, never after.
- **Archival PDFs (PDF/A)**: a compressor may not preserve PDF/A compliance. If compliance is required, use a tool that explicitly validates PDF/A.

## Quality checklist after compressing

1. Zoom to 200% on the smallest text: it should be as crisp as before.
2. Look at photos, signatures and stamps: no blocky artefacts around edges.
3. Search for a word (Ctrl/Cmd+F): if it was searchable before, it still should be.
4. Click a link and check bookmarks if the file has any.
5. Compare the sizes — and keep the original until the recipient confirms they can read it.

## Which approach for which file?

| File | Expected gain | What to do |
|---|---|---|
| Colour scan, 300 dpi | Often 70–90% | Compress, *Recommended* or *Strong* |
| PowerPoint export with photos | Often 50–80% | Compress pictures in PowerPoint, re-export, or compress the PDF |
| Word report, mostly text | 0–20% | Usually already fine; export with *Minimum size* if needed |
| Photo book or brochure for print | Keep quality | Don't compress; send a link |
| Already compressed PDF | Minimal | Use the original, not a second pass |

Need to go the other way — turning photos into a compact PDF? [JPG to PDF](/jpg-to-pdf) combines images into one document; run the result through [Compress PDF](/compress-pdf) if it's heavy.
