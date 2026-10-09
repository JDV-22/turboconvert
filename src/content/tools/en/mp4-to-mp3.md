---
name: MP4 to MP3
title: MP4 to MP3 Converter — Extract Audio, Free & Private
description: Convert MP4 to MP3 free and extract the audio from any video — MOV, WebM, MKV, AVI. Choose 128–320 kbps. Runs in your browser, no upload, no sign-up.
h1: Convert MP4 to MP3
lead: Extract the soundtrack, speech or music from a video and save it as an MP3 that plays everywhere. The audio is extracted on your device — your video is never uploaded.
what: your video
howTo: convert MP4 to MP3
steps:
  - Click <strong>Choose files</strong> or drop one or more videos into the box — MP4, MOV, WebM, MKV, AVI and other common formats work.
  - Pick the <strong>Audio quality</strong> — 192 kbps is right for most uses, 320 kbps for music you care about.
  - Click <strong>Convert</strong>. Each MP3 downloads when it's ready; for several videos use <strong>Download all (ZIP)</strong>.
limits:
  - Videos up to 1 GB each. The first use downloads the conversion engine (about 31 MB), which your browser then caches.
  - Speed depends on your device. On a recent computer, extracting the audio usually takes about as long as the video lasts, or less; phones are slower, so use a desktop for long videos.
  - This tool converts files you already have. It cannot download from YouTube or other websites, and copy-protected (DRM) videos such as purchased movies cannot be read.
  - A video with no sound track cannot produce an MP3.
faq:
  - q: Does converting MP4 to MP3 lose quality?
    a: The audio inside an MP4 is usually AAC, which is already compressed, so it is re-encoded once to MP3. At 192 kbps or more the difference is not audible to most people. Choosing a higher bitrate cannot add quality that wasn't in the video's audio to begin with.
  - q: Which bitrate should I choose — 128, 192, 256 or 320 kbps?
    a: 128 kbps is fine for speech, podcasts and lectures. 192 kbps is a good default for everything. Use 256 or 320 kbps for music you'll listen to on good headphones or speakers.
  - q: How big will the MP3 be?
    a: An MP3 takes about 1 MB per minute at 128 kbps, 1.4 MB at 192 kbps and 2.4 MB at 320 kbps — whatever the size of the video.
  - q: Can I convert an MP4 to MP3 on iPhone or Android?
    a: Yes. Open this page in Safari or Chrome, choose a video from your Photos, Gallery or Files app and convert. For long videos, a computer will be noticeably faster.
  - q: Can I convert several videos at once?
    a: Yes. Drop several files; they are processed one after another and you can save all the MP3s in one ZIP file.
  - q: Are my videos uploaded to a server?
    a: No. The converter is FFmpeg compiled to WebAssembly and runs inside your browser tab. Your video never leaves your device, which also means there's no upload time to wait for.
---

## Why extract audio from a video?

An MP4 is a container: it holds a video stream, one or more audio streams and sometimes subtitles. When you only need the sound, keeping the video around wastes space and makes the file awkward to use. Converting to MP3 is the usual answer when you want to:

- **Listen to a recorded talk, lecture, webinar or interview** on your phone, in the car or in a podcast app.
- **Save a voice recording** you made with your phone's camera instead of the voice memo app.
- **Transcribe a meeting** — most transcription tools prefer an audio file, and it's much smaller to upload.
- **Reuse music or narration** from your own video in a slideshow, a presentation or another edit.
- **Keep a concert clip's sound** without the shaky footage.

A ten-minute 1080p phone video can easily weigh several hundred megabytes; the same ten minutes as a 192 kbps MP3 is about 14 MB.

## Not just MP4

Despite the name, this converter accepts nearly every video format you're likely to have: **MOV** (iPhone and Mac), **WebM** (screen recorders, browser downloads), **MKV**, **AVI**, **M4V**, **WMV**, **FLV**, **3GP**, **MPEG** and **TS**. The process is the same for all of them: the audio track is decoded and re-encoded as a standard MP3 that plays on every phone, car stereo, smart speaker and media player.

## Choosing the audio quality

| Audio quality | Size per minute | Good for |
|---|---|---|
| 128 kbps | ≈ 1 MB | Speech, lectures, voice notes |
| 192 kbps | ≈ 1.4 MB | Everyday listening (default) |
| 256 kbps | ≈ 1.9 MB | Music |
| 320 kbps | ≈ 2.4 MB | Music on good equipment, archiving |

MP3 tops out at 320 kbps. If you need a lossless copy for audio editing, convert to WAV or FLAC with the [audio converter](/audio-converter) instead — it accepts video files too.

## MP3 or another audio format?

MP3 is the safest choice when you don't know where the file will be played: every device made in the last twenty years reads it. There are a few cases where another format fits better:

- **Editing the audio** in Audacity, GarageBand or a video editor — a lossless WAV avoids adding a second round of compression when you export again.
- **Apple devices only** — M4A (AAC) is natively supported and slightly more efficient than MP3.
- **Voice at a tiny size** — OPUS keeps speech intelligible at very low bitrates.

All of these are available in the [audio converter](/audio-converter), which also accepts video files.

## How it works — and why it's private

Most "MP4 to MP3" sites make you upload the whole video before anything happens, which is slow for large files and means a copy of your recording sits on someone else's server. TurboConvert downloads a WebAssembly build of FFmpeg — the open-source engine behind many professional video tools — and runs it inside your browser. The video is read straight from your disk, the MP3 is written back to your downloads, and nothing in between is sent over the network.

The engine is about 31 MB and is only downloaded the first time; after that it loads from your browser's cache in a moment.

## Tips and common problems

- **Only need part of the audio?** Convert first, then cut the MP3 with [Trim audio](/trim-audio). To keep only a section as video, use [Trim video](/trim-video).
- **The conversion fails with an audio error:** the video was recorded or exported without sound (common with screen recordings where the microphone was off). There is nothing to extract.
- **Very long videos on a phone:** if the tab is reloaded in the background, keep the screen on during the conversion, or use a computer.
- **Want a GIF or a smaller video instead?** See [Video to GIF](/video-to-gif) and [Compress video](/compress-video).
- **Going the other way?** To publish an MP3 on YouTube or Instagram, which only accept video, turn it into an MP4 with a cover image using [MP3 to MP4](/mp3-to-mp4).
