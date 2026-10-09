---
name: Compress video
title: Compress Video Online — Reduce MP4 Size Free, No Upload
description: Compress MP4, MOV and other videos to reduce file size for email, WhatsApp or Discord. Choose 1080p, 720p or 480p. Free, no watermark, no upload.
h1: Compress a video
lead: Shrink a video so it fits an email, a chat app or a slow connection, while keeping it watchable. The compression runs in your browser — your video is never uploaded.
what: your video
howTo: compress a video
steps:
  - Click <strong>Choose file</strong> or drop a video — MP4, MOV, WebM, MKV, AVI and other common formats work.
  - Choose a <strong>Compression</strong> level — <em>Recommended</em> is a good balance, <em>Strong</em> gives the smallest file, <em>Light</em> the best quality.
  - Choose a <strong>Max resolution</strong> — 720p by default, 1080p for larger screens, 480p for the smallest size, or <em>Original</em> to keep it.
  - Click <strong>Convert</strong> and wait for the progress bar. The compressed MP4 downloads automatically.
limits:
  - One video at a time, up to 1 GB. The first use downloads the conversion engine (about 31 MB), cached afterwards.
  - Compression re-encodes every frame, which is demanding. On a phone it can take longer than the video lasts; a recent desktop or laptop is much faster. Keep the tab open until it finishes.
  - There is no "target file size" setting. If the result is still too big, use a stronger level, a lower resolution, or trim the video first.
  - The output is always an MP4. Videos that are already heavily compressed may shrink only a little.
faq:
  - q: How can I reduce the size of a video without losing quality?
    a: Lowering the resolution to what people will actually watch it on (720p for phones and chat apps) gives the biggest saving with little visible change. Then use the Recommended level; Light keeps more detail if you notice a difference.
  - q: How much smaller will my video be?
    a: It depends on the source. Phone videos recorded in 4K or 1080p usually shrink a lot when set to 720p; screen recordings and already-compressed downloads shrink less. Try Recommended first, then adjust.
  - q: How do I compress a video for email?
    a: Gmail and most providers limit attachments to around 20–25 MB. For a video of a few minutes, choose 480p or 720p with Strong compression. If it's still too large, trim it with <a href="/trim-video">Trim video</a> first.
  - q: How do I compress a video for WhatsApp or Discord?
    a: Choose 720p with Recommended or Strong compression. Free Discord accounts and WhatsApp have strict size limits that change over time, so check the current limit; for long videos, trimming first is the most reliable way to fit.
  - q: Does compressing a video remove the sound?
    a: No. The audio is kept. If you want a silent video, use <a href="/mute-video">Mute video</a>.
  - q: Is my video uploaded to a server?
    a: No. Compression is done by FFmpeg running in your browser. The video stays on your device — there is no upload, so even a large file doesn't need to travel over your connection.
---

## Why are videos so large?

Phones record at high bitrates so footage still looks good after editing: a minute of 4K iPhone video can weigh several hundred megabytes, and even 1080p fills up fast. That's great for your library, but not for sending. Email attachments, chat apps, school and job platforms all have size limits, and on a mobile connection a large file takes ages to send.

Two things decide the size of a video:

1. **Resolution** — how many pixels each frame has. 4K has nine times the pixels of 720p.
2. **Bitrate** — how much data is spent per second. Modern encoders like H.264 can spend far less while keeping the picture clean.

TurboConvert lowers both: the **Max resolution** option scales the picture down (the proportions are kept), and the **Compression** level controls how aggressively the encoder reduces data.

## Which settings to choose

| Goal | Compression | Max resolution |
|---|---|---|
| Keep it sharp for a TV or a large monitor | Light | 1080p |
| Share in chat apps or social media | Recommended | 720p |
| Send by email | Strong | 720p or 480p |
| Smallest possible file | Strong | 480p |
| Reduce size without changing resolution | Recommended | Original |

Most people watch shared videos on a phone, where 720p looks sharp. If you only remember one setting, use **Recommended + 720p** — the default.

## Tips for a smaller file

- **Trim first.** Duration multiplies everything. Cutting the dead time at the start and end with [Trim video](/trim-video) often saves more than any setting.
- **Remove the sound if you don't need it.** [Mute video](/mute-video) drops the audio track entirely.
- **Need just the audio?** [MP4 to MP3](/mp4-to-mp3) turns a 200 MB talk into a few megabytes.
- **Want a short loop?** A clip of a few seconds can be shared as a GIF with [Video to GIF](/video-to-gif).
- **Got an iPhone MOV?** You can compress it directly — the output is an MP4 that plays everywhere. To change the format without compressing, use [MOV to MP4](/mov-to-mp4).

## What the levels mean

The three **Compression** levels set how much detail the encoder is allowed to discard:

- **Light — best quality:** almost indistinguishable from the original on a phone or laptop screen. Choose it for footage you'll keep or show on a big screen.
- **Recommended — good quality:** the best trade-off for sharing. Fine detail in fast motion may soften slightly, but faces, text and colors stay clean.
- **Strong — smallest file:** visible softening, especially in dark or busy scenes, in exchange for a much smaller file. Good for previews, drafts and email.

Combined with a lower Max resolution, even the Recommended level usually gives a dramatic reduction for phone footage.

## How it works

TurboConvert uses FFmpeg, the open-source engine behind many professional video tools, compiled to WebAssembly so it runs inside your browser. Your video is read from your disk, re-encoded on your device's processor and saved to your downloads. Nothing is uploaded: there's no waiting for a large file to transfer, no queue, no watermark, and no copy of your video on anyone else's server — an important difference for family videos, client footage or recordings of meetings.

The trade-off is speed: your computer does the work instead of a server farm. A desktop or laptop is recommended for long videos; on a phone, keep the screen on and the tab in the foreground until the download starts.

## Common problems

- **It's slow:** compression is the heaviest operation a video tool does. Choose a lower max resolution — fewer pixels to encode makes it faster as well as smaller.
- **The file barely shrank:** the source was already efficiently compressed (for example a video downloaded from a streaming platform). Pick Strong and a lower resolution.
- **The page reloaded on my phone:** mobile browsers may pause background tabs. Stay on the page during the conversion, or use a computer.
