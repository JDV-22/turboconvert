---
title: "PDF Too Large to Email? Shrink It for Gmail, Outlook & iCloud"
description: "Gmail and Outlook.com cap attachments at 25 MB, iCloud Mail at 20 MB. How to get a PDF under the limit on any device, or send it another way."
h1: How to make a PDF small enough to email
permalink: compress-pdf-for-email
published: 2026-02-01
updated: 2026-10-09
tool: compress-pdf
category: pdf
faq:
  - q: What is the maximum PDF size I can attach in Gmail?
    a: 25 MB for a personal Gmail account, counting all attachments in the message. If you go over, Gmail replaces the attachment with a Google Drive link. Work and school accounts can have a different limit set by the administrator.
  - q: Why does my 22 MB PDF bounce when the limit is 25 MB?
    a: Attachments are encoded as text when they travel by email, which adds roughly a third to their size, and some servers count that encoded size or the size of the whole message. Leaving a margin — around 18 MB for a 25 MB limit — avoids most bounces.
  - q: Will compressing a PDF make it blurry?
    a: Text and vector graphics stay sharp, because compression mainly re-encodes the images inside the PDF. Photos and scans lose some fine detail at the strongest setting, which is rarely visible on screen. Start with the recommended level and only go stronger if the file is still too big.
  - q: Does zipping a PDF make it smaller?
    a: Usually only by a few percent. A PDF is already compressed internally, so a ZIP archive gains little. Real savings come from re-encoding the images inside the PDF, which is what a PDF compressor does.
  - q: Is it safe to compress a confidential PDF online?
    a: It depends on the tool. Most online compressors upload your file to their servers. <a href="/compress-pdf">TurboConvert's Compress PDF</a> runs in your browser, so the document never leaves your device.
---

You hit "Send" and get the message every office worker knows: *the attachment is too large*. The good news is that most oversized PDFs can be cut down to a fraction of their size in under a minute, without making them unreadable. This guide gives you the current limits of the main email services, explains why some PDFs get so heavy, and walks through the fixes in order — from the quickest to the last resort.

## Email attachment limits in 2026

These are the limits published by each provider, checked in October 2026. They apply to the **total** of all attachments in one message, not to each file.

| Service | Attachment limit | What happens above it |
|---|---|---|
| Gmail (personal account) | 25 MB | Gmail swaps the file for a Google Drive link |
| Outlook.com / Hotmail | 25 MB per message | Offer to share via OneDrive (up to 2 GB) |
| Outlook desktop app (internet accounts) | often 20 MB by default | Error "attachment size exceeds the allowable limit" |
| Yahoo Mail | 25 MB | Message is refused |
| iCloud Mail | 20 MB | Mail Drop link, up to 5 GB, kept 30 days |
| Microsoft 365 / Google Workspace (work) | Set by your IT admin | Varies |

Two practical warnings:

- **Leave a margin.** Email encodes attachments as text, which inflates them by about a third in transit. A PDF of 19–20 MB can bounce on a "25 MB" service, especially when the recipient's server is stricter than yours. Aim for **under 18 MB** to be safe, and under 10 MB if you don't know who will receive it.
- **The recipient's limit counts too.** Your Gmail may accept 25 MB, but a small company's mail server might stop at 10 MB. If a message bounces back with "message size exceeds fixed maximum", the limit is on their side.

## Why is my PDF so big?

Text is tiny: a 50-page text-only report is often well under 1 MB. When a PDF weighs 20, 50 or 100 MB, the culprit is almost always **images**:

- **Scans and phone photos of documents.** A scanner set to 300 or 600 dpi in colour produces several megabytes per page. Twenty pages of scanned receipts can easily pass 40 MB.
- **Presentations and reports exported from PowerPoint or Word** with full-resolution photos pasted in. The PDF keeps every image at its original size, even when it is displayed as a thumbnail.
- **Files that have been edited and re-saved many times**, which can carry duplicated resources.
- **Embedded fonts** add a little, but rarely more than a megabyte or two.

That's why compression works so well on scans and image-heavy files (often a 50–90% reduction) and barely at all on text-only PDFs, which are already small.

## Method 1: compress the PDF in your browser (any device)

This is the fastest fix and works the same on Windows, Mac, Chromebook, iPhone and Android.

1. Open [Compress PDF](/compress-pdf) and click **Choose files**, or drag your PDF onto the page. You can add several PDFs at once.
2. Pick a **Compression** level:
   - **Recommended — good quality**: the right choice for email. Images are resampled to a resolution that looks sharp on screen.
   - **Strong — smallest file**: for very large scans or when you need to get under a tight limit. Fine detail in photos is reduced.
   - **Light — best quality**: when the recipient will print the document.
3. Click **Convert**. The compressed PDF downloads automatically, and you can compare the before/after size.

The compression uses Ghostscript, the same open-source engine behind many professional PDF tools, compiled to run inside your browser. Your file is never uploaded, which matters for payslips, contracts, ID scans or medical letters. The first use downloads the engine, so it takes a few seconds longer; after that it's cached. If a PDF is already optimized and the result wouldn't be smaller, you keep your original.

**Tip:** always compress from the original file. Compressing an already-compressed PDF again gives little extra gain and degrades images a second time.

## Method 2: use what's already on your computer

You don't always need an extra tool. Here's what each system can do on its own — and where it falls short.

### Mac: Preview's "Reduce File Size"

Open the PDF in Preview, choose **File > Export**, then select **Reduce File Size** in the *Quartz Filter* menu. It's built in and private, but it is a blunt instrument: it often shrinks images so much that scans become hard to read. Check the result before sending, and keep the original.

### Windows: no built-in PDF compressor

Windows 10 and 11 can create PDFs (Microsoft Print to PDF) but cannot compress an existing one. "Printing" a heavy PDF to a new PDF sometimes reduces it a little, and sometimes makes it larger — it's not a reliable method.

### Word and PowerPoint: export smaller from the start

If you made the PDF yourself from Office, re-export it. In Word for Windows, choose **File > Save As > PDF** and select **Minimum size (publishing online)** instead of *Standard*. In PowerPoint, use **File > Compress Pictures** before exporting. This produces a much lighter PDF than compressing afterwards.

### Phone scanners: scan smarter

If the PDF comes from your phone (Notes on iPhone, Google Drive or a scanning app on Android), rescan in **grayscale or black & white** when colour isn't needed. A black-and-white scan is many times lighter than a colour one, and often easier to read.

## Method 3: split the PDF and send it in parts

If a 300-page document is still too big after compression, split it. With [Split PDF](/split-pdf), type page ranges such as `1-100, 101-200, 201-300` to get three files, then send each in its own email. Number the emails ("part 1 of 3") so the recipient knows nothing is missing. To send only the pages that matter, extract them and leave out appendices or blank pages.

## Method 4: send a link instead of an attachment

For very large files — print-ready brochures, long scanned archives, video-heavy reports — compression is the wrong tool: you'd lose the quality you need. Send a link:

- **Google Drive** from Gmail (automatic above 25 MB)
- **OneDrive** from Outlook (linked files up to 2 GB don't count toward the email limit)
- **iCloud Mail Drop** from Apple Mail (up to 5 GB, link valid for 30 days)

Remember to set sharing permissions so the recipient can open the file, and avoid public links for sensitive documents.

## What about WhatsApp and online portals?

WhatsApp accepts **documents up to 2 GB**, so size is rarely the problem there — but a 60 MB PDF is slow to download on mobile data and fills up the recipient's phone. Compressing to a few megabytes is a courtesy.

Online forms (job applications, tax and benefits portals, university platforms, insurance claims) are stricter: limits of **2, 5 or 10 MB per file** are common, and they are rarely flexible. For those, use the *Strong* level, and if your scan is in colour, consider rescanning in grayscale.

## Which method should you choose?

| Your situation | Best option |
|---|---|
| Scanned document, 20–100 MB | [Compress PDF](/compress-pdf), *Recommended* level |
| Upload portal with a 2–5 MB limit | Compress with *Strong*, rescan in grayscale if needed |
| PDF exported from Word/PowerPoint | Re-export with smaller settings, then compress |
| Long document still too big after compression | [Split PDF](/split-pdf) into parts |
| Print-quality file over 25 MB | Share a Drive/OneDrive/Mail Drop link |
| Photos you want to send as a PDF | Combine them with [JPG to PDF](/jpg-to-pdf), then compress |

## A quick checklist before you hit send

- Open the compressed PDF and zoom in on the smallest text and on any signature or stamp.
- Check that the file name is clear (`Invoice-2026-09-Dupont.pdf` beats `scan0042.pdf`).
- If the document is sensitive and must be emailed, consider adding a password with [Protect PDF](/protect-pdf) and sharing the password by another channel (a text message or a call).

For the bigger picture on PDF size — fonts, image resolution, what "lossless" really means — see our guide on [reducing PDF size without losing quality](/blog/how-to-compress-pdf).
