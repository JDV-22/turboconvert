---
name: HEIC to PNG
title: HEIC to PNG Converter — Free, Lossless, No Upload
description: Convert iPhone HEIC photos to lossless PNG files, one or many at a time. Ideal for editing and design work. Free, runs in your browser, no upload.
h1: Convert HEIC to PNG
lead: Turn iPhone HEIC photos into lossless PNG images for editing, design and documents. The conversion runs on your device — your photos are never uploaded.
what: your HEIC photos
howTo: convert HEIC to PNG
steps:
  - Click <strong>Choose files</strong> or drag your .heic or .heif photos into the box.
  - Click <strong>Convert</strong> — there's no quality setting, PNG keeps every pixel as decoded.
  - Download each PNG, or all of them at once with <strong>Download all (ZIP)</strong>.
limits:
  - PNG files are large — a 12-megapixel photo often weighs 15–25 MB as PNG. For sharing, <a href="/heic-to-jpg">HEIC to JPG</a> is a better fit.
  - Live Photos are converted as a still image; depth data and HDR brightness are not kept.
  - Metadata (date taken, camera, GPS location) is not copied into the PNG.
  - Photos up to 100 MB each. The first conversion loads a HEIC decoder (about 1.5 MB), cached afterwards.
faq:
  - q: Should I convert HEIC to PNG or JPG?
    a: Choose JPG for sharing, email, printing and upload forms — files are much smaller. Choose PNG when you'll edit the image further (retouching, design, cut-outs) and don't want any extra compression along the way.
  - q: Is HEIC to PNG lossless?
    a: The PNG stores the decoded photo exactly, with no additional compression loss. It can't recover detail that HEIC compression already removed, but nothing more is lost.
  - q: Why is my PNG so much bigger than the HEIC?
    a: HEIC is a highly efficient lossy format; PNG is lossless and wasn't designed for photographs. A PNG ten times the size of the HEIC is normal.
  - q: Does the PNG have a transparent background?
    a: No. iPhone photos have no transparency, so the PNG is fully opaque. To cut out a subject, open the PNG in an editor that removes backgrounds.
  - q: Are my photos uploaded?
    a: No. The HEIC file is decoded inside your browser with a WebAssembly build of libheif, and the PNG is written on your device.
---

## When PNG is the right choice

Most people converting HEIC want a JPG — it's smaller and accepted everywhere. PNG makes sense in a few specific situations:

- **Further editing.** Every time a JPG is edited and saved, it loses a little detail. A PNG can be opened, edited and saved repeatedly without any generational loss.
- **Design and print layouts.** Designers often prefer a lossless master copy to drop into Figma, Canva, InDesign or a slide deck.
- **Screenshots and photos of documents.** Text and sharp lines stay crisp, with none of the fuzzy halos JPG compression can add around letters.
- **Software that requires PNG.** Some tools, plugins and scientific or archival workflows only accept PNG.

## HEIC, PNG and JPG compared

| | HEIC | PNG | JPG |
|---|---|---|---|
| Compression | Lossy, very efficient | Lossless | Lossy |
| 12 MP photo | 1–2 MB | 15–25 MB | 2–4 MB |
| Opens everywhere | No | Yes | Yes |
| Best for | Storing photos on iPhone | Editing, design | Sharing, printing |

If the size is a problem after editing, convert your finished PNG with [PNG to JPG](/png-to-jpg) or [PNG to WebP](/png-to-webp), or shrink it with [Compress image](/compress-image).

## Converted on your device

Photos from a phone are personal: family pictures, documents you scanned with the camera, screenshots of conversations. Instead of uploading them, TurboConvert decodes the HEIC file in your browser using libheif, an open-source decoder compiled to WebAssembly, and saves the PNG directly to your downloads. Once the page is loaded, it keeps working offline.

## Common problems

- **The PNG is too large to email.** That's the nature of lossless PNG photos. Convert to JPG for sharing, or reduce the dimensions with [Resize image](/resize-image).
- **The photo looks less vivid than on the iPhone.** HDR photos are displayed with extra brightness on recent iPhones; the PNG contains the standard version of the picture.

## Tips

- **On iPhone:** open this page in Safari, tap **Choose files**, select photos from your library, and find the PNGs in the Files app under Downloads.
- **On Windows:** you don't need the HEIF or HEVC extensions from the Microsoft Store — your browser does the decoding.
- **Large batches:** PNGs are heavy, so on a phone convert in smaller groups to avoid running out of memory.
