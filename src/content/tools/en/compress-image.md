---
name: Compress image
title: Compress Image Online — Reduce JPG, PNG & WebP Size Free
description: Compress JPG, PNG and WebP images to reduce file size for email, websites and upload forms. Set the quality and max width. Free, batch, no upload.
h1: Compress images
lead: Make photos and graphics lighter without visibly changing them — one image or a whole folder. Compression runs in your browser, so your images are never uploaded.
what: your images
howTo: compress an image
steps:
  - Click <strong>Choose files</strong> or drag JPG, PNG or WebP images into the box.
  - Set the <strong>Quality</strong> — the default 75% is a strong but safe reduction; go higher if you see artifacts, lower for the smallest files.
  - Optionally enter a <strong>Max width (px)</strong>, such as 1920 or 1200, to also scale down large photos. Leave it on <em>Original</em> to keep the dimensions.
  - Click <strong>Convert</strong>, check the new sizes, then download each image or <strong>Download all (ZIP)</strong>.
limits:
  - Images up to 100 MB each. Very large images (beyond about 16,000 × 16,000 px) can exceed what a browser can handle.
  - Each image keeps its format. If an image can't be made smaller, you get your original file back — never a heavier one.
  - PNG is a lossless format, so savings depend on the content. For photos saved as PNG, converting to <a href="/png-to-jpg">JPG</a> or <a href="/png-to-webp">WebP</a> usually saves far more.
  - Metadata such as camera details and GPS location is not kept in the compressed image.
  - There is no "target size" box (e.g. exactly 100 KB) — lower the quality or the max width and convert again until you're under your limit.
faq:
  - q: How do I compress an image without losing quality?
    a: Compression always discards some data, but at 75–85% quality the change is invisible on a normal screen for most photos. The biggest savings with no visible loss usually come from reducing oversized dimensions with Max width.
  - q: How can I reduce an image to under 100 KB or 200 KB?
    a: Set a Max width of 1200 px or less and a quality around 70%. Many phone photos then come out around or below 200 KB; if yours is still too big, lower the width to 800–1000 px and convert again. For 100 KB, start at 800 px.
  - q: Why is my compressed PNG still big?
    a: PNG stores every pixel exactly, which suits screenshots and logos but makes photos heavy. Convert photos to JPG or WebP for a much smaller file, or reduce the max width.
  - q: Can I compress many images at once?
    a: Yes. Drop as many images as you want; the same settings are applied to all of them and you can download the results in one ZIP.
  - q: Will the compressed image have the same dimensions?
    a: Yes, unless you set a Max width. In that case wider images are scaled down proportionally and smaller ones are left as they are.
  - q: Are my images uploaded?
    a: No. Compression uses your browser's own image encoder on your device. Nothing is sent to a server, so it is safe for ID scans, documents and private photos.
---

## Why is my image so large?

A modern phone photo is 12 to 48 megapixels and often weighs 3–8 MB as a JPG. That's far more than most destinations need: a website hero image rarely shows more than 2,000 pixels across, an email preview fewer than 1,000, and many upload forms (job applications, visa portals, school platforms, marketplaces) cap files at 1–2 MB or even a few hundred kilobytes.

Two things decide the weight of an image:

1. **Its dimensions** — the number of pixels. Halving the width and height leaves a quarter of the pixels.
2. **How strongly it is compressed** — the quality setting of JPG and WebP.

This tool lets you act on both at the same time.

## Quality and Max width: what to choose

| Use | Max width | Quality |
|---|---|---|
| Print, archiving | Original | 85–92% |
| Website images, blog posts | 1600–2000 px | 75–82% |
| Email attachments, messaging | 1200–1600 px | 70–80% |
| Upload form limited to 100–200 KB | 800–1200 px | 60–75% |
| Thumbnails, avatars | 300–600 px | 70–80% |

As a rule of thumb, JPG and WebP at **75%** are visually very close to the original while being several times lighter. Below about **60%**, blocky artifacts start appearing in skies, skin tones and around text. If an image contains text or a screenshot, keep quality above 80%.

## Compressing JPG, PNG and WebP

- **JPG** — the most common case. Lowering the quality and capping the width typically shrinks phone photos dramatically.
- **WebP** — compresses like JPG, but more efficiently and with transparency support.
- **PNG** — lossless, so the quality slider has less to work with. Screenshots and flat graphics stay compact; photographs saved as PNG stay heavy. For those, [PNG to JPG](/png-to-jpg) or [PNG to WebP](/png-to-webp) is the better move.

Want the lightest possible web images? Convert JPGs with [JPG to WebP](/jpg-to-webp): at the same visual quality, WebP files are typically 25–35% smaller than JPG.

## Private by design

Online compressors usually upload your images, compress them on a server and send them back. TurboConvert does the work in your browser with its built-in image encoder, so there's no upload wait and no copy of your pictures anywhere else. That matters when the image is a passport scan, a signed document or a family photo.

Because metadata isn't carried over, compressing also strips the GPS location and camera details that phones embed in photos — useful before posting pictures publicly.

## Tips for the best result

- **Resize before you compress, not after.** If you need exact dimensions (for example a 1080 px wide social post), set Max width here or use [Resize image](/resize-image).
- **Don't compress the same JPG again and again.** Each pass loses a little more detail. Start from the original whenever you can.
- **Compare before you send.** Open the result next to the original at 100% zoom; if you see artifacts, go back up 5–10 points of quality.
- **Images inside a PDF?** Compress the whole document with [Compress PDF](/compress-pdf) instead of extracting each picture.

## Common problems

- **"The file is still too big for the form."** Lower the Max width first — it has a much bigger effect than the quality slider. Going from 4,000 to 1,200 pixels wide removes over 90% of the pixels.
- **"The compressed image looks blurry or blocky."** The quality is too low for that picture. Images with fine textures (grass, fabric, hair) or text need 80% or more.
- **"Nothing changed."** The image was already well optimised, so you received the original back. Try a smaller Max width or a more efficient format like WebP.
- **Transparent PNG turned heavy?** PNG keeps transparency losslessly; WebP keeps it too, at a fraction of the weight.
