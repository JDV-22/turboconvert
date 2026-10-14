---
name: Scan to PDF
title: Scan Documents to PDF With Your Phone — Free, No App
description: Turn phone photos of paper documents into a clean multi-page PDF. Straighten pages, whiten the paper, reorder, export. Free, no app, nothing uploaded.
h1: Scan documents to PDF
lead: Photograph your paper documents with your phone, straighten each page, clean it up like a real scanner and save everything as one PDF. No app to install, no account — the photos never leave your device.
what: your photos
howTo: scan a document to PDF
steps:
  - Tap <strong>Choose files</strong> and take a photo of the first page (or pick photos you already have). Add more pages with <strong>Take a photo</strong>.
  - Tap a page to <strong>Adjust corners</strong> — drag the 4 corners onto the edges of the sheet and the page is straightened. Use the arrows to reorder pages and <strong>Rotate</strong> if needed.
  - Choose the <strong>Scan filter</strong> (cleaned-up colour, black & white document, greyscale or original) and the <strong>Quality</strong>.
  - Tap <strong>Convert</strong>. All pages are saved in a single PDF.
limits:
  - Corners are placed by hand — there's no automatic edge detection yet. It takes a few seconds per page and is reliable on any background.
  - The PDF contains images of the pages, so its text can't be selected or searched. To make it searchable, run the PDF through <a href="/ocr-pdf">OCR PDF</a>.
  - Photos up to 50 MB each (JPG, PNG, WebP, HEIC). Very large batches are slower on older phones.
  - The result can’t be better than the photo — shoot in good light, hold the phone parallel to the sheet and avoid your own shadow.
faq:
  - q: Do I need to install an app?
    a: No. This page works in Safari, Chrome and other mobile browsers. Tapping Take a photo opens your phone's camera directly; on a computer you can use photos you already have.
  - q: Are my documents uploaded?
    a: No. Straightening, cleaning and PDF creation all happen in your browser. That matters for IDs, payslips, tax notices and medical papers.
  - q: Which scan filter should I choose?
    a: The “Colour, cleaned up” filter whitens the paper and removes shadows while keeping colours — the best default, including for ID cards and documents with logos. “Black & white document” gives the crispest, highest-contrast result for text-only pages. “Greyscale” is a middle ground, and “Original photo” applies no processing.
  - q: How big will the PDF be?
    a: With the Standard quality, a page usually weighs around 150–250 KB; Small file roughly halves that, and High roughly doubles it. If a form imposes a size limit, choose Small file, or run the result through Compress PDF.
  - q: Can I add pages after converting?
    a: Yes. Tap Convert more files to start a new scan, or add the new photos before converting. You can also merge several PDFs with Merge PDF.
  - q: How do I get the best scan?
    a: Place the sheet on a dark, plain surface, use daylight or a bright room, hold the phone directly above the page and keep the whole sheet in frame. Then drag the corners precisely using the magnifier that appears while you drag.
---

## A scanner in your pocket, without an app

You need to send a signed contract, a proof of address or a payslip, and there's no scanner around. Photos alone are awkward: they're skewed, full of shadows, huge, and you end up sending five separate images. This tool turns those photos into what a scanner would produce — straight, white pages in a single PDF — directly in your phone's browser.

## How the processing works

1. **Perspective correction.** You drag four corners onto the edges of the sheet; the page is mathematically "unfolded" into a straight rectangle, even if the photo was taken at an angle.
2. **Lighting correction.** The filters estimate the paper's brightness across the page and divide it out, which removes shadows and uneven lighting and turns grey paper white.
3. **PDF assembly.** Each page is compressed as JPEG at the chosen quality and placed on an A4 or Letter page (or a page with the same proportions as the scan), in the order you set.

## Choosing the quality

| Quality | Resolution on A4 | Best for |
|---|---|---|
| High | about 300 dpi | Archiving, printing, small print |
| Standard | about 150 dpi | Most documents (default) |
| Small file | about 100 dpi | Email attachments, online forms with size limits |

## Private by design

Scanned papers are some of the most sensitive files people handle: identity documents, bank details, medical results. Many scanner apps and websites upload them to process them. Here, the photos are read from your device, processed in your browser and the PDF is written straight to your downloads — nothing is sent anywhere.

## Related tools

- Make the scanned text searchable and copyable with [OCR PDF](/ocr-pdf).
- Need to sign the document? Use [Sign PDF](/sign-pdf) on the scanned PDF.
- Already have the photos and don't need corrections? [JPG to PDF](/jpg-to-pdf) keeps them exactly as they are.
- File still too large? [Compress the PDF](/compress-pdf).
