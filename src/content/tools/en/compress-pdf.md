---
name: Compress PDF
title: Compress PDF Online — Reduce PDF File Size Free | TurboConvert
description: Compress PDF files to reduce their size for email and online forms. Three compression levels, Ghostscript engine, no upload, no sign-up, no watermark.
h1: Compress PDF files
lead: Make your PDF smaller so it fits through email limits and upload forms, while keeping it readable. Compression runs on your device with Ghostscript — your files are never uploaded.
what: your PDF
howTo: compress a PDF
steps:
  - Click <strong>Choose files</strong> or drag one or more PDFs into the box above.
  - Pick a <strong>Compression</strong> level — <em>Recommended</em> suits most documents.
  - Click <strong>Convert</strong>. The first time, your browser downloads the compression engine (≈ 16 MB); it is cached afterwards.
  - The smaller PDF downloads automatically and the size saved is shown. For several files, use <strong>Download all (ZIP)</strong>.
limits:
  - Gains depend on what is inside the PDF. Scans and image-heavy files shrink the most; text-only PDFs are usually already compact and shrink little.
  - If compression would not make the file smaller, TurboConvert keeps your original instead of giving you a bigger file.
  - Password-protected PDFs must be unlocked first with <a href="/unlock-pdf">Unlock PDF</a>.
  - Maximum 200 MB per PDF. Large files take longer on phones; a computer is faster for big scans.
faq:
  - q: How do I reduce the size of a PDF for free?
    a: Drop the PDF in the box above, keep the Recommended level and click Convert. The compressed copy downloads immediately — no account, no daily limit and no watermark.
  - q: Will compressing a PDF reduce its quality?
    a: Compression mainly lowers the resolution of images inside the PDF; text and vector graphics stay sharp at every level. Use Light if the document will be printed, Recommended for screens and email, and Strong only when size matters most.
  - q: How can I make a PDF small enough to email?
    a: Gmail and many other mail services cap attachments at around 20–25 MB, and some company servers allow less. Try Recommended first; if the file is still too large, use Strong or split it into parts with <a href="/split-pdf">Split PDF</a>.
  - q: Why did my PDF barely get smaller?
    a: A PDF that contains mostly text is already efficient, so there is little left to remove. The big savings come from scanned pages and photos, which are often reduced by more than half.
  - q: Can I compress a PDF to a specific size like 1 MB or 200 KB?
    a: You cannot type a target size, but you can get close by choosing the level. Start with Recommended, then try Strong if needed. For a stubborn file, removing unneeded pages with <a href="/organize-pdf">Organize PDF</a> also helps.
  - q: Are my PDFs uploaded to compress them?
    a: No. The Ghostscript engine is compiled to WebAssembly and runs in your browser, so your PDF never leaves your device. You can even disconnect from the internet after the engine has loaded.
---

## Why some PDFs are so large

A PDF's size comes almost entirely from what is embedded in it:

- **Scanned pages.** Each page of a scan is a full-page photograph. A 20-page document scanned in colour at 300 or 600 dpi easily weighs 20–50 MB.
- **Photos and screenshots.** Images pasted into Word or PowerPoint are often kept at their original camera resolution, far more than a screen needs.
- **Embedded fonts.** Every font used is stored in the file. This matters for short documents but rarely makes a file huge.
- **Text and vector drawings.** These are tiny. A 100-page text-only report is typically well under 1 MB.

So compression is mostly about **images**: lowering their resolution to what you actually need and storing them more efficiently. That is why a scanned contract can lose most of its weight while a text-only PDF hardly changes.

## Which compression level should you choose?

TurboConvert uses Ghostscript, the same open-source engine behind many professional PDF tools, with three presets:

| Level | Best for | Images | Typical result |
|---|---|---|---|
| **Strong — smallest file** | Email, upload forms with strict limits, archiving copies | Reduced to screen resolution | Smallest file; photos lose fine detail when zoomed |
| **Recommended — good quality** | Most documents, reading on screen, sharing | Reduced to e-book resolution | Clear on any screen, good size reduction |
| **Light — best quality** | Documents that will be printed | Kept at print resolution | Looks like the original; smaller savings |

On scanned or photo-heavy PDFs, savings of 50 to 90% are common. On text-only PDFs, expect a modest gain — and if there is none, your original is kept so you never end up with a larger file.

## Compress PDFs without uploading them

Most online compressors send your file to a server and promise to delete it later. TurboConvert downloads the compression engine to your browser once, then processes everything locally. That makes it suitable for documents you would not want to hand over: tax returns, bank statements, medical records, signed contracts or ID scans for an application.

## Tips to get the smallest file

- **Compress once, at the end.** If you are combining documents, [merge them](/merge-pdf) first and compress the final file. Compressing the same PDF again and again only degrades the images further.
- **Remove what you don't need.** Blank pages, duplicate annexes or a 30-page appendix nobody asked for can be dropped with [Organize PDF](/organize-pdf) before compressing.
- **Scanning paper yourself?** Scan text documents at 150–200 dpi in greyscale rather than 600 dpi in colour. The file starts much smaller and stays perfectly readable.
- **Images rather than a PDF?** If you are sending photos, compress them directly with [Compress image](/compress-image) — it is faster and gives you more control.
- **Check the result.** Open the compressed PDF and zoom into a photo or a signature before sending. If something looks too soft, run the original again with a lighter level.

## Common problems

**"This PDF is password-protected."** Encrypted PDFs cannot be rewritten without the password. Unlock the file first, compress it, and protect it again if needed.

**The compressed file is the same size as before.** The PDF was already optimised — typical of files exported from Word or generated by accounting software. There is nothing heavy left to remove.

**Text became blurry.** This happens only when the "text" is actually part of a scanned image. Use the Light level for scans you need to print or read closely.

**The PDF looks fine on screen but prints poorly.** Strong compression targets screens. For anything going to a printer — a thesis, a brochure, a signed form — compress the original with the Light level instead.

## Compress PDF on a phone

The tool works the same way in Safari on iPhone and Chrome on Android: choose the PDF from the Files app, Google Drive or an email attachment, and the smaller file is saved to your downloads. On phones, the first run takes a little longer while the engine downloads; after that it is cached. For very large scans (100 MB and more), a computer is noticeably faster.
