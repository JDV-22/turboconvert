---
name: MOV to MP4
title: MOV to MP4 Converter — iPhone Videos, Free & Private
description: Convert MOV videos from iPhone, Mac or cameras to MP4 that plays on Windows, Android and any website. Batch, free, no watermark — no upload.
h1: Convert MOV to MP4
lead: Turn MOV videos from an iPhone, a Mac screen recording or a camera into MP4 files that play everywhere. The conversion runs in your browser — your videos are never uploaded.
what: your MOV video
howTo: convert MOV to MP4
steps:
  - Click <strong>Choose files</strong> or drop one or more .mov (or .m4v) videos into the box.
  - Click <strong>Convert</strong>. There's nothing to configure — the best method is chosen automatically.
  - Each MP4 downloads when it's ready; for several videos use <strong>Download all (ZIP)</strong>.
limits:
  - Videos up to 1 GB each. The first use downloads the conversion engine (about 31 MB), cached afterwards.
  - When the video must be re-encoded (see below), conversion takes longer and depends on your device's power — a computer is recommended for long videos.
  - The output keeps the original resolution. To make the file smaller, use <a href="/compress-video">Compress video</a>, which also outputs MP4.
faq:
  - q: What's the difference between MOV and MP4?
    a: Both are containers developed from the same Apple QuickTime format and can hold the same kinds of video. MP4 is an open standard supported by virtually every device, app and website; MOV is mostly at home on Apple devices.
  - q: Does converting MOV to MP4 lose quality?
    a: When the video inside the MOV is already in a format MP4 supports, it's simply repackaged, with no quality change at all. Otherwise it is re-encoded at a high quality setting.
  - q: Why won't my iPhone video play on Windows?
    a: Many Windows apps and websites refuse the MOV container, which converting to MP4 fixes. iPhones also record in HEVC (H.265) by default; if an older PC still can't play the MP4, install Microsoft's HEVC extension, or switch your iPhone to Most Compatible for future videos.
  - q: How long does the conversion take?
    a: A repackaged video converts in seconds. A re-encoded one takes longer — roughly as long as the video itself or more, depending on your device and the resolution.
  - q: Is my video uploaded?
    a: No. FFmpeg runs inside your browser, so your videos stay on your device.
---

## MOV and MP4: same family, different reach

MOV is Apple's QuickTime format. It's what iPhones, iPads, Mac screen recordings (⌘+Shift+5) and many cameras produce. MP4 was derived from it and became the universal standard for video: every phone, browser, TV, social network, video editor and learning platform reads it.

So converting MOV to MP4 is usually about **compatibility**, not quality:

- Upload forms, online courses or CMS platforms that only accept MP4.
- Windows PCs, Android phones and smart TVs that won't open the MOV.
- Video editors and slideshow tools that expect MP4.

## Fast repackaging or re-encoding

A video file is a container holding encoded streams. TurboConvert first checks what's inside your MOV:

- **If the video and audio already use codecs MP4 supports**, the streams are copied into an MP4 container without touching the picture. This is fast — usually seconds — and lossless.
- **If not** (for example ProRes footage or unusual audio formats), the video is re-encoded to H.264 with AAC audio, the most widely compatible combination. This takes longer and depends on your device.

## iPhone tips

- **High Efficiency vs Most Compatible:** in Settings → Camera → Formats, *High Efficiency* records HEVC video, *Most Compatible* records H.264, which plays almost everywhere but takes more space.
- **On the phone itself:** open this page in Safari, tap **Choose files**, pick videos from your library and find the MP4s in the Files app, under Downloads.
- **Files too big to send?** Convert and shrink in one step with [Compress video](/compress-video) — it accepts MOV and outputs MP4.

## Common problems

- **The conversion is slow.** The MOV needed re-encoding (for example ProRes footage from a camera or editing app). A computer is much faster than a phone for this.
- **The MP4 is as large as the MOV.** That's expected when the streams are copied as they are. To make it smaller, use [Compress video](/compress-video).

## Related tools

- Other formats: [WebM to MP4](/webm-to-mp4) and [MKV to MP4](/mkv-to-mp4).
- Need the soundtrack only? [MP4 to MP3](/mp4-to-mp3) works directly with MOV files.

Because everything runs locally with FFmpeg compiled to WebAssembly, there's no upload, no queue and no watermark — and your personal videos stay private.
