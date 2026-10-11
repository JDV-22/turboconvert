---
name: GIF to MP4
title: GIF to MP4 Converter — Smaller, Smoother, Free
description: Convert animated GIFs to MP4 video that is usually much smaller and plays on Instagram, WhatsApp and any website. Free, batch, runs in your browser, no upload.
h1: Convert GIF to MP4
lead: Turn animated GIFs into MP4 videos that are lighter, smoother and accepted by every social network and messaging app. The conversion runs on your device — nothing is uploaded.
what: your GIF
howTo: convert a GIF to MP4
steps:
  - Click <strong>Choose files</strong> or drop one or more animated GIFs into the box.
  - Click <strong>Convert</strong>. There's nothing to set — the video keeps the GIF's size and speed.
  - Each MP4 downloads when it's ready; for several GIFs use <strong>Download all (ZIP)</strong>.
limits:
  - GIFs up to 200 MB each. The first use downloads the conversion engine (about 31 MB), which your browser then caches.
  - MP4 does not support transparency. Transparent areas of the GIF become a solid background.
  - An MP4 plays once by default. To loop it on a website, use the video's <code>loop</code> attribute (see below); most social apps loop short videos automatically.
  - Width and height are rounded to an even number of pixels, which the H.264 format requires — at most one pixel is trimmed.
faq:
  - q: Why convert a GIF to MP4?
    a: GIF is a 1980s format limited to 256 colours per frame and very inefficient for animation. The same animation as an H.264 MP4 is usually several times smaller, looks better and is accepted by apps that refuse GIF uploads, such as Instagram.
  - q: Will the MP4 look the same as the GIF?
    a: Yes. The size and timing are kept and every frame is converted. Colours usually look the same or better, since the GIF's 256-colour limit no longer applies.
  - q: Does the MP4 have sound?
    a: No — GIFs have no audio, so the MP4 is silent. That's also what lets browsers autoplay it on web pages.
  - q: Can I convert several GIFs at once?
    a: Yes. Drop several files; they're processed one after another and you can save them all in one ZIP.
  - q: Are my GIFs uploaded?
    a: No. FFmpeg runs inside your browser tab, so your files never leave your device.
---

## Why GIF is the wrong format for animation

The GIF format dates from 1987. It stores each frame as a palette image with at most 256 colours, compresses frames independently of each other, and has no notion of the motion between them. The result is heavy files with visible colour banding — a few seconds of animation can easily weigh several megabytes.

MP4 with H.264 video was designed for moving images: it stores only what changes between frames and supports millions of colours. That's why GIPHY, X (Twitter) and most messaging apps silently convert the GIFs you send into MP4 videos.

## Where an MP4 works better than a GIF

- **Instagram** doesn't accept GIF uploads for posts, Stories or Reels — an MP4 goes straight through.
- **Websites and blogs:** replacing GIFs with MP4 is one of the classic recommendations of Google PageSpeed Insights, because lighter pages load faster.
- **Presentations:** PowerPoint, Keynote and Google Slides play MP4 smoothly, while large GIFs can stutter.
- **Email and chat attachments:** a smaller file sends faster and stays under size limits.

## Looping the video on a web page

To make an MP4 behave exactly like a GIF on your site — autoplay, loop, no controls — use:

```html
<video src="animation.mp4" autoplay loop muted playsinline></video>
```

`muted` and `playsinline` are needed for browsers (especially on iPhone) to start the video automatically.

## Transparent GIFs

MP4 video has no transparency channel. If your GIF has a transparent background, that area becomes a solid colour in the MP4. For an animation that must stay transparent on a web page, keep the GIF, or ask the designer for an animated WebP or WebM with alpha.

## Private by design

The conversion uses FFmpeg compiled to WebAssembly and runs entirely in your browser. Your GIFs are read from your disk and the MP4s are written to your downloads — nothing is sent to a server.

## Related tools

- Going the other way? [Video to GIF](/video-to-gif) turns a clip into an animated GIF.
- Need a smaller video? [Compress video](/compress-video) reduces the size of any MP4.
