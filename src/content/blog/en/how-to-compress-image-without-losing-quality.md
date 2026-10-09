---
title: How to Reduce Image File Size Without Losing Quality
description: "The three levers that shrink images — dimensions, compression, format — with the right settings for web, email and social media, on any device."
h1: How to reduce image file size without losing quality
permalink: how-to-compress-image-without-losing-quality
published: 2026-02-01
updated: 2026-10-09
tool: compress-image
category: image
faq:
  - q: What is the best JPG quality setting to reduce size without visible loss?
    a: For photos, 75–85% is the usual sweet spot. Below about 60%, artefacts start to show around edges and in skies; above 90%, the file grows a lot for a difference nobody sees.
  - q: Why is my PNG so large?
    a: PNG is lossless, so it stores every pixel of a photo exactly. It's ideal for logos, screenshots and graphics with transparency, but a photo saved as PNG is often several times larger than the same photo as JPG or WebP.
  - q: Does resizing an image reduce its file size?
    a: Yes, and it's the most effective step. Halving the width and height divides the number of pixels by four. A 4000-pixel-wide phone photo shown at 1200 pixels on a website is carrying around ten times more pixels than needed.
  - q: Is WebP better than JPG?
    a: For the web, usually yes. WebP files are typically 25–35% smaller than JPG at similar quality and support transparency. For email attachments, printing or older software, JPG remains the safer choice.
  - q: Can I compress an image without uploading it?
    a: Yes. <a href="/compress-image">Compress Image</a> and <a href="/resize-image">Resize Image</a> run in your browser, so your photos are processed on your device and never sent to a server.
---

A photo from a modern phone weighs 3 to 8 MB and measures around 4000 pixels wide. That's perfect for printing a poster — and far too heavy for a website, an email, an online form or a messaging app. The good news: you can usually cut the file size by 80–95% with no difference anyone will notice on screen. The trick is knowing which of the three levers to pull.

## The three levers: dimensions, compression, format

| Lever | What it does | Typical gain | Visible loss? |
|---|---|---|---|
| **Dimensions** (resize) | Fewer pixels | Huge (4000 → 1600 px ≈ 6× fewer pixels) | None if the image is displayed smaller anyway |
| **Compression** (quality) | Stores the same pixels more efficiently | 30–70% | None at 75–85% for photos |
| **Format** | JPG, PNG, WebP, AVIF… | 25–35% (JPG → WebP), more (PNG photo → JPG) | Depends on the format |
| Metadata removal | Drops EXIF, thumbnails | Small (a few KB to tens of KB) | None |

Most people only touch compression. The biggest win almost always comes from **resizing** first.

## Step 1: resize to the size you actually need

There is no point sending a 4032 × 3024 photo to someone who will view it on a phone 400 pixels wide. Useful targets:

| Use | Recommended width |
|---|---|
| Full-width website banner | 1920–2560 px |
| Image in a blog post or product page | 1000–1600 px |
| Email attachment for viewing on screen | 1600–2000 px |
| Instagram post | 1080 px |
| Profile picture or thumbnail | 400–800 px |
| Printing a 10 × 15 cm (4 × 6 in) photo | ~1800 px |

With [Resize Image](/resize-image), choose **Resize by**: *Percentage*, *Width (px)* or *Height (px)*. The aspect ratio is kept automatically, so you only enter one value. You can also convert the format at the same time.

## Step 2: compress at the right quality

JPG and WebP are *lossy* formats: they discard detail the eye barely perceives. The quality setting controls how much:

- **90–100%**: very large files, no visible gain over 85%.
- **75–85%**: the sweet spot for photos. Indistinguishable from the original on screen.
- **60–75%**: fine for thumbnails and backgrounds.
- **Below 60%**: visible artefacts — blocky skies, halos around text.

With [Compress Image](/compress-image):

1. Click **Choose files** or drop your images (JPG, PNG, WebP, AVIF, BMP — batches are fine).
2. Set **Quality** (75% by default) and, optionally, a **Max width (px)** to resize in the same pass.
3. Click **Convert** and download the results (**Download all (ZIP)** for batches).

Each image keeps its format, and the result is never larger than the original: if an image is already well optimized, you get it back unchanged. Everything runs in your browser — nothing is uploaded.

## Step 3: pick the right format

| Format | Best for | Avoid for |
|---|---|---|
| **JPG** | Photos for email, print, any software | Logos, text, transparency |
| **PNG** | Logos, screenshots, graphics, transparency | Photos (huge files) |
| **WebP** | Website images (photos and graphics) | Old software, some email clients |
| **AVIF** | Websites wanting the smallest files | Broad compatibility |

Two conversions give big gains:

- **Photo saved as PNG → JPG**: often several times smaller. Use [PNG to JPG](/png-to-jpg) (transparent areas become white).
- **JPG or PNG → WebP for a website**: typically 25–35% smaller than JPG at similar quality, with transparency support. Use [JPG to WebP](/jpg-to-webp) or [PNG to WebP](/png-to-webp).

For a deeper comparison, see [PNG vs JPG vs WebP: which format to use](/blog/png-vs-jpg).

## What "without losing quality" really means

Strictly speaking, only lossless operations keep every pixel identical: removing metadata, optimizing PNG encoding, or converting losslessly. They save little.

Everything that gives big savings — resizing, lossy compression — technically removes information. What matters is whether you can **see** it. At the dimensions an image is displayed and at 75–85% quality, you can't. Two rules keep you safe:

1. **Always work from the original.** Re-compressing an already compressed JPG stacks losses. Keep your originals and export fresh copies.
2. **Compress once, at the end.** Crop, resize and edit first, then compress as the last step.

## Built-in methods, if you prefer

**Windows 11:** in the Photos app, open the image, use the **…** menu > **Resize image**, choose a preset or custom size and save a copy. In Paint, *Resize* (Ctrl+W) then *Save as*.

**Mac:** in Preview, **Tools > Adjust Size** to change dimensions, then **File > Export**, choose JPEG and move the **Quality** slider. Finder's **Quick Actions > Convert Image** also offers small, medium and large sizes.

**iPhone:** when you attach photos in the Mail app, you can choose a smaller image size before sending. For other uses, a Shortcut with the *Resize Image* action, or a browser tool, does the job.

**Android:** options depend on the phone brand's gallery app (some offer "Resize" in the edit menu). A browser tool works the same on every phone.

These are fine for a few images. For batches, precise quality control or format conversion, a dedicated tool is faster.

## Common scenarios

**"The upload form says max 2 MB."** Resize to 2000 px wide and compress at 80%; a phone photo typically lands well under 1 MB.

**"My website is slow."** Images are usually the heaviest part of a page. Resize to the displayed width (×2 for sharp display on high-density screens), serve WebP, and lazy-load images below the fold. Faster pages help both visitors and search rankings.

**"I need to email 30 holiday photos."** Batch them through [Compress Image](/compress-image) with a max width of 1600–2000 px. Thirty photos at 300–600 KB each fit in a single 25 MB email.

**"It's a screenshot with text."** Keep it PNG, or use WebP. JPG blurs sharp text edges.

**"It's an iPhone HEIC photo."** Convert with [HEIC to JPG](/heic-to-jpg) first, then compress.

**"It's a PDF full of images."** Use [Compress PDF](/compress-pdf) instead — it re-encodes the images inside the document.

## Quick checklist

1. Resize to the size you need.
2. Choose the format that fits the use (JPG for sharing, WebP for websites, PNG for graphics).
3. Compress at 75–85%.
4. Compare with the original at 100% zoom.
5. Keep the original file.
