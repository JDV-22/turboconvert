---
name: Mute video
title: Remove Audio from Video — Mute MP4 Free, No Upload
description: Remove the sound from a video in one click — mute MP4, MOV, WebM and more, in bulk. Free, no watermark. Runs in your browser, your video is never uploaded.
h1: Remove audio from a video
lead: Strip the soundtrack from one or several videos and keep a silent clip. The audio is removed in your browser — your videos never leave your device.
what: your video
howTo: remove audio from a video
steps:
  - Click <strong>Choose files</strong> or drop one or more videos — MP4, MOV, WebM, MKV, AVI and other common formats are accepted.
  - Click <strong>Convert</strong>. There are no settings — the audio track is simply removed.
  - Each silent video downloads when it's ready; for several files use <strong>Download all (ZIP)</strong>.
limits:
  - Videos up to 1 GB each. The first use downloads the conversion engine (about 31 MB), cached afterwards.
  - All audio is removed; you can't keep one track or lower the volume of part of the video.
  - Processing speed depends on your device and on the file size.
faq:
  - q: How do I remove the sound from a video?
    a: Drop the video here and click Convert. The new file has the same picture with no audio track at all — not just volume set to zero.
  - q: Does muting a video reduce its quality?
    a: The picture keeps its resolution and quality; only the audio is taken out. The file also gets a little smaller since the sound data is gone.
  - q: Can I remove audio from several videos at once?
    a: Yes. Drop several videos; each one is processed in turn and you can download them all as a ZIP.
  - q: Can I keep the audio as a separate file?
    a: Yes — before muting, extract it with <a href="/mp4-to-mp3">MP4 to MP3</a>. You'll then have the silent video and the soundtrack separately.
  - q: Is my video uploaded?
    a: No. Everything is processed by FFmpeg running inside your browser.
---

## Why remove the audio?

A silent video is often exactly what you need:

- **Background or hero videos on websites** — browsers generally block autoplay with sound, and a file without an audio track guarantees visitors never get a surprise.
- **Privacy** — remove conversations, names or background noise picked up by the phone's microphone before sharing a clip.
- **Social posts and presentations** where you'll add music or a voice-over in another app.
- **Copyrighted music** in the background of a recording that you don't want to publish.
- **Product demos and screen recordings** where the sound adds nothing.

## Muting vs. turning the volume down

Setting the volume to zero in an editor still leaves an (empty) audio track in the file, which some platforms will still treat as a video with sound. This tool removes the audio track entirely, so players, websites and apps know the video is silent.

## What you get

The output keeps the original video's resolution and length; only the sound is gone. You can drop several clips at once — useful when preparing a batch of product videos or background loops for a website — and download them together as a ZIP. Files up to 1 GB each are accepted, including MOV videos straight from an iPhone.

## Combine with other tools

- **Shorter clip?** Cut it first with [Trim video](/trim-video), then mute it.
- **Smaller file?** [Compress video](/compress-video) lowers the resolution and bitrate.
- **Looping animation for a chat or a doc?** [Video to GIF](/video-to-gif) creates a silent GIF directly.
- **Converting an iPhone MOV?** [MOV to MP4](/mov-to-mp4) changes the format if a site doesn't accept MOV.

## Private by design

Your video is processed by FFmpeg compiled to WebAssembly, running in your own browser tab. Nothing is uploaded — especially useful when the reason you're muting the video is that the audio contains something private.

## Common problems

- **The muted file is almost as large as the original.** Audio is a small part of most videos. To make the file smaller, use Compress video as well.
- **I wanted to remove only background noise or music.** This tool removes all sound. Separating voices from music requires audio-editing software.
