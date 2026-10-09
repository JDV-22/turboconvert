---
name: Video to GIF
title: Video to GIF Converter — MP4 to GIF Free, No Upload
description: Turn a video clip into an animated GIF — MP4, MOV, WebM and more. Pick the start, duration, width and frame rate. Free, no watermark, no upload.
h1: Convert video to GIF
lead: Make an animated GIF from any clip — a reaction, a product demo, a screen recording. The GIF is created in your browser, so your video is never uploaded and there's no watermark.
what: your video
howTo: convert a video to GIF
steps:
  - Click <strong>Choose file</strong> or drop a video — MP4, MOV, WebM, MKV, AVI and other common formats are accepted.
  - Set <strong>Start (seconds)</strong> to where the GIF should begin and <strong>Duration (seconds)</strong> to its length (1 to 60 seconds).
  - Choose the <strong>Width</strong> (320–800 px) and <strong>Frame rate</strong> (8–24 fps). The defaults, 480 px and 12 fps, suit most uses.
  - Click <strong>Convert</strong>. The GIF downloads automatically when it's ready.
limits:
  - One video at a time, up to 500 MB. A GIF can be at most 60 seconds long.
  - The first use downloads the conversion engine (about 31 MB), cached afterwards. Speed depends on your device.
  - GIF has no sound and can show only 256 colors per frame, so smooth gradients and skin tones may look slightly grainy or banded.
  - GIFs are much heavier than videos of the same length; long or wide GIFs can reach tens of megabytes.
faq:
  - q: How do I convert an MP4 to a GIF?
    a: Drop the MP4 here, set where the GIF starts and how long it lasts, choose the width and frame rate, then click Convert. The GIF downloads automatically, with no watermark.
  - q: Why is my GIF so large?
    a: GIF stores every frame as a separate picture with little compression between frames, so size grows with duration × frame rate × width. Halving the width roughly quarters the size; dropping from 24 to 12 fps halves it.
  - q: What's the best size and frame rate for a GIF?
    a: For chats and social media, 480 px at 12 fps is a good balance. For a smooth, detailed GIF use 640 px and 15 fps; for an email or a tiny file, 320 px at 8–10 fps.
  - q: How long can a GIF be?
    a: Up to 60 seconds here. In practice, the best GIFs last 2 to 6 seconds — longer clips become very heavy and are better shared as a video.
  - q: Can I make a GIF from an iPhone video?
    a: Yes. iPhone MOV videos are supported. On the phone itself, open this page in Safari and pick the video from your library; for long or high-resolution clips a computer is faster.
  - q: Is my video uploaded?
    a: No. The GIF is created by FFmpeg running inside your browser. The video never leaves your device.
---

## Choosing the right settings

A GIF is a flip-book: every frame is stored as its own picture. Four settings decide how it looks and how much it weighs.

| Setting | What it does | Tip |
|---|---|---|
| **Start (seconds)** | Where the GIF begins in the video | Play the video and note the second where the action starts, e.g. 12 |
| **Duration (seconds)** | How long the GIF lasts | 2–6 s for reactions and loops; up to 60 s allowed |
| **Width** | Size in pixels (height follows the video's proportions) | 480 px for chats, 640–800 px for tutorials with text |
| **Frame rate** | Frames shown per second | 12 fps looks smooth; 8 fps for tiny files; 24 fps for fluid motion |

The file size grows with all of them at once. A 5-second GIF at 480 px and 12 fps has 60 frames; the same clip at 800 px and 24 fps has 120 much bigger frames — easily five times heavier or more.

## Making a smaller GIF

If the GIF is too heavy for Slack, Discord, an email or a web page, change one setting at a time:

1. **Shorten it.** Duration is the most direct lever. Trim to the moment that matters.
2. **Reduce the width.** Going from 640 to 480 px removes almost half the pixels in each frame.
3. **Lower the frame rate.** 12 fps instead of 24 fps halves the number of frames, and most eyes still see smooth motion.
4. **Choose calm footage.** Scenes with little movement, flat backgrounds and fewer colors compress better than shaky, detailed or noisy footage.

## GIF or video?

GIFs autoplay and loop everywhere — in chat apps, emails, documentation, GitHub issues and slides — which is why they remain popular. But a GIF is typically many times larger than the same clip as an MP4 and has no sound. If the platform accepts video, a short MP4 is lighter and sharper: cut the moment you need with [Trim video](/trim-video) and, if needed, shrink it with [Compress video](/compress-video). If you need a silent looping video, [Mute video](/mute-video) removes the soundtrack.

## Works with screen recordings and phone videos

You can use MP4 files from Android phones, cameras and editing apps, **MOV** clips from an iPhone or a Mac screen recording, **WebM** files from browser-based recorders, as well as MKV, AVI, M4V and more. Screen recordings make particularly good GIFs for bug reports and tutorials: keep the width at 640–800 px so the text stays legible, and 8–12 fps is enough for mouse movements.

## No upload, no watermark

Many GIF makers upload your video to a server and stamp their logo on the result unless you pay. TurboConvert runs FFmpeg — the open-source engine behind many professional video tools — compiled to WebAssembly, directly in your browser tab. Your clip stays on your device and the GIF is clean. The engine (about 31 MB) is downloaded on first use and then cached, so the next GIF starts right away.

Want the audio from the clip instead? [MP4 to MP3](/mp4-to-mp3) extracts it as an MP3.

## Common problems

- **The GIF starts at the wrong moment.** Start is measured in seconds from the beginning of the video: 1 minute 20 seconds is 80. Note the time in your video player and convert it to seconds.
- **It's too heavy for the platform.** Reduce Duration first, then Width, then Frame rate — in that order, they give the biggest savings for the smallest visual cost.
- **Colors look grainy.** That's GIF's 256-color limit. Footage with flat colors and good lighting converts better than dim or grainy scenes.
