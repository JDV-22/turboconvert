---
name: Video to MP3
title: Video to MP3 Converter — Any Format, Free & No Upload
description: Extract the audio from any video file — MP4, MOV, WebM, MKV, AVI, WMV — and save it as MP3 at 128–320 kbps. Free, batch, runs in your browser, no upload.
h1: Convert Video to MP3
lead: Turn the sound of any video file into an MP3 — a lecture, an interview, a voice message or your own music. Everything happens on your device; the video is never uploaded.
what: your video
howTo: convert a video to MP3
steps:
  - Click <strong>Choose files</strong> or drop one or more videos into the box — MP4, MOV, WebM, MKV, AVI, M4V, WMV, FLV, 3GP, MPEG and TS are accepted.
  - Pick the <strong>Audio quality</strong> — 128 kbps for speech, 192 kbps for most uses, 320 kbps for music.
  - Click <strong>Convert</strong>. Each MP3 downloads when it's ready; for several videos use <strong>Download all (ZIP)</strong>.
limits:
  - Videos up to 1 GB each. The first use downloads the conversion engine (about 31 MB), which your browser then caches.
  - This tool converts video files that are on your device. It cannot download from YouTube, TikTok or any other website, and it cannot read copy-protected (DRM) videos.
  - Speed depends on your device — usually about as long as the video lasts, or less, on a recent computer. Phones are slower for long videos.
  - A video recorded without sound has no audio to extract.
faq:
  - q: Which video formats can I convert to MP3?
    a: MP4, MOV, WebM, MKV, AVI, M4V, WMV, FLV, 3GP, MPEG and TS. In practice that covers phone recordings, screen recordings, camera footage and files exported from video editors.
  - q: Can I convert a YouTube video to MP3?
    a: Not directly — this tool never downloads anything from websites, and YouTube's terms don't allow downloading other people's videos. If the video is yours, download it from YouTube Studio (Content → ⋮ → Download), then drop the file here.
  - q: Does extracting the audio reduce quality?
    a: The audio is re-encoded once to MP3. At 192 kbps or more, most people can't hear a difference from the original video's sound. A higher bitrate can't add quality that wasn't in the video to begin with.
  - q: How big will the MP3 be?
    a: About 1 MB per minute at 128 kbps, 1.4 MB at 192 kbps and 2.4 MB at 320 kbps, whatever the size or resolution of the video.
  - q: Does it work on iPhone and Android?
    a: Yes. Open the page in Safari or Chrome and pick a video from Photos, Gallery or Files. A computer is faster for long videos.
  - q: Is my video uploaded to a server?
    a: No. The converter is FFmpeg compiled to WebAssembly and runs in your browser tab, so your video stays on your device and there is no upload time.
---

## One converter for every video format

Videos reach you in many formats: **MOV** from an iPhone or a Mac, **MP4** from Android phones and most cameras, **WebM** from screen recorders and browsers, **MKV** from media servers, **AVI** and **WMV** from older Windows software. This converter reads all of them and keeps only what you need — the sound — as a standard MP3 that plays on every phone, car stereo, smart speaker and podcast app.

If you already know your file is an MP4 or a MOV, the dedicated [MP4 to MP3](/mp4-to-mp3) and [MOV to MP3](/mov-to-mp3) pages work the same way.

## Common reasons to extract audio from a video

- **Listen to a lecture, webinar or talk** on the go, without keeping a huge video file on your phone.
- **Save a voice message** you recorded with the camera app by mistake.
- **Prepare a file for transcription** — speech-to-text tools prefer audio, and an MP3 is a fraction of the video's size.
- **Reuse your own music or narration** in a slideshow, a podcast or another edit.
- **Keep the sound of a concert or rehearsal** you filmed yourself.

## Choosing the audio quality

| Audio quality | Size per minute | Good for |
|---|---|---|
| 128 kbps | ≈ 1 MB | Speech, lectures, voice notes |
| 192 kbps | ≈ 1.4 MB | Everyday listening (default) |
| 256 kbps | ≈ 1.9 MB | Music |
| 320 kbps | ≈ 2.4 MB | Music on good equipment |

Need a different format — WAV for editing, M4A for Apple devices, OPUS for tiny voice files? The [audio converter](/audio-converter) accepts video files too.

## What about YouTube, TikTok or Instagram videos?

TurboConvert only converts files that are already on your device: it never fetches anything from a website. That's deliberate. Downloading other people's videos is against those platforms' terms and often infringes copyright, and the "YouTube to MP3" sites that do it run on servers that see everything you convert.

There are legitimate ways to get a file of **your own** content, which you can then convert here:

- **YouTube:** in YouTube Studio, open *Content*, click the ⋮ menu next to a video and choose *Download*.
- **Instagram, TikTok, Facebook:** request a copy of your data from the account settings; your uploaded videos are included.
- **Zoom, Teams, Meet recordings:** download the recording from the meeting app — it's usually an MP4.

## Private by design

Most online converters make you upload the whole video first, which takes time and leaves a copy of your recording on someone else's server. Here, a WebAssembly build of FFmpeg runs inside your browser: the video is read from your disk, the MP3 is written to your downloads, and nothing is sent over the network. The engine (about 31 MB) is downloaded once and cached.

## Tips

- **Only need a section?** Convert, then cut the MP3 with [Trim audio](/trim-audio).
- **"This file has no audio track":** the video was recorded without sound — typical of screen recordings with the microphone off.
- **Want the video without its sound instead?** Use [Mute video](/mute-video).
