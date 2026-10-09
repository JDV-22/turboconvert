---
title: How to Extract Audio from a Video (MP3 or M4A) on Any Device
description: "Pull the soundtrack out of a video as MP3 or M4A on Windows, Mac, iPhone or Android — free methods, the best bitrate, and how to avoid quality loss."
h1: How to extract audio from a video on any device
permalink: how-to-extract-audio-from-video
published: 2026-02-01
updated: 2026-10-09
tool: mp4-to-mp3
category: video
faq:
  - q: What is the best bitrate when converting video to MP3?
    a: 192 kbps is a good default for speech and most music. Use 256–320 kbps for music you care about, and 128 kbps for voice recordings where file size matters. Choosing a bitrate higher than the source audio doesn't add quality.
  - q: Can I extract audio from a video without losing quality?
    a: Yes, if you copy the original audio track instead of re-encoding it — most phone and camera videos contain AAC audio that can be saved as M4A untouched (QuickTime on Mac does this). Converting to MP3 always re-encodes, but at 192 kbps or more the loss is inaudible for most uses.
  - q: How do I extract audio from a video on iPhone?
    a: Use the Shortcuts app with the "Encode Media" action and its "Audio Only" option, which saves an M4A file. Or open <a href="/mp4-to-mp3">MP4 to MP3</a> in Safari, pick the video and download the MP3.
  - q: Is it legal to extract audio from a video?
    a: Extracting audio from your own videos, or from content you have the rights to use, is fine. Downloading or ripping copyrighted content from streaming platforms usually violates their terms and copyright law.
  - q: Which video formats can I extract audio from?
    a: <a href="/mp4-to-mp3">MP4 to MP3</a> accepts MP4, MOV (iPhone videos), WebM, MKV, AVI, M4V, WMV, FLV, 3GP and more, up to 1 GB per file.
---

A recorded lecture you want to listen to on the bus, a Zoom meeting you need to transcribe, a song you played at a family party, the voice track of your own vlog: sometimes you only need the sound. Every system has a way to extract audio from a video, and some keep the original quality perfectly. This guide shows the best method on each device and helps you pick the right format and bitrate.

## MP3, M4A or WAV?

Before you start, choose the output format:

| Format | Quality | Size (per minute, stereo) | Plays on | Best for |
|---|---|---|---|---|
| **MP3** | Lossy | ~1.4 MB at 192 kbps | Everything | Sharing, car stereos, any player |
| **M4A (AAC)** | Lossy, slightly more efficient | Similar or smaller | Apple devices, most modern players | Keeping the original track untouched |
| **WAV** | Uncompressed | ~10 MB | Everything | Audio editing, transcription software that asks for it |

Most videos from phones and cameras already contain **AAC** audio. Saving it as M4A can be a straight copy — zero quality loss. Converting to MP3 re-encodes the audio, which is slightly lossy but universally compatible. If you plan to edit the audio, export to WAV (or convert MP3 to WAV later with [MP3 to WAV](/mp3-to-wav)).

## Method 1: in your browser (Windows, Mac, Chromebook, phones)

[MP4 to MP3](/mp4-to-mp3) extracts the audio track from almost any video file and converts it to MP3, right in your browser:

1. Open [MP4 to MP3](/mp4-to-mp3) and click **Choose files** — MP4, MOV, WebM, MKV, AVI and more are accepted, up to 1 GB each. Several videos at once is fine.
2. Choose the **Audio quality**: 128, 192 (default), 256 or 320 kbps.
3. Click **Convert**. The MP3 downloads automatically; batches come as a ZIP.

It uses FFmpeg — the open-source engine behind most video software — compiled to run in your browser, so your recordings are never uploaded. The first use downloads the engine (about 31 MB, then cached). Audio extraction is quick: typically as fast as real time or faster on a recent computer. For long videos, a computer is more comfortable than a phone.

Need a format other than MP3 — M4A, WAV, OGG, FLAC or OPUS? [Audio Converter](/audio-converter) accepts video files too.

## Method 2: Mac, with QuickTime Player (lossless)

1. Open the video in **QuickTime Player**.
2. Choose **File > Export As > Audio Only**.
3. Pick a name and location. QuickTime saves an **M4A** file.

When the video's audio is AAC (most iPhone and Mac recordings), this keeps the original sound. If you then need an MP3, convert it with [M4A to MP3](/m4a-to-mp3).

## Method 3: iPhone and iPad, with Shortcuts

There's no "extract audio" button in Photos, but the Shortcuts app does it:

1. Open **Shortcuts**, tap **+** to create a shortcut.
2. Add the action **Select Photos** (or set the shortcut to receive videos from the share sheet).
3. Add **Encode Media** and turn on **Audio Only**.
4. Add **Save File** to store the M4A in the Files app.

Run it, pick a video, and you get an M4A. Alternatively, open [MP4 to MP3](/mp4-to-mp3) in Safari and select the video from your library.

## Method 4: Windows, with VLC

Windows has no built-in tool to save a video's audio. The free VLC media player can:

1. In VLC, choose **Media > Convert / Save**, click **Add** and select the video.
2. Click **Convert / Save**, then pick the profile **Audio – MP3**.
3. Choose a destination file name ending in `.mp3` and click **Start**.

VLC works well, but its interface is easy to get wrong (forgetting the `.mp3` extension is a classic). The browser method is simpler for one-off jobs.

## Method 5: Android

Android doesn't include an audio extractor. Open [MP4 to MP3](/mp4-to-mp3) in Chrome, tap **Choose files**, select the video from your gallery or Files, convert and download. Some video editors installed by manufacturers can export audio, but options vary by brand.

## For technical users: FFmpeg on the command line

If you have FFmpeg installed:

- Copy the audio without re-encoding (when it's AAC): `ffmpeg -i video.mp4 -vn -c:a copy audio.m4a`
- Convert to MP3 at 192 kbps: `ffmpeg -i video.mp4 -vn -b:a 192k audio.mp3`

`-vn` drops the video stream. Copying is instant and lossless; it fails only if the audio codec doesn't fit the container you chose.

## Choosing the right bitrate

- **128 kbps**: speech, lectures, meetings, podcasts. Small files.
- **192 kbps**: the all-rounder — music sounds good, files stay reasonable.
- **256–320 kbps**: music you'll listen to on good headphones or speakers.

A crucial point: **you can't add quality that isn't in the source.** Phone videos often carry audio at around 128–256 kbps AAC; exporting it at 320 kbps MP3 only makes a bigger file. When in doubt, 192 kbps is the safe choice.

## After extraction: trim, clean up, convert

- **Keep only part of the recording:** cut the start and end with [Trim Audio](/trim-audio) — handy for removing the "can everyone hear me?" minutes of a meeting.
- **Need the opposite — the video without its sound?** [Mute Video](/mute-video) removes the audio track.
- **Turning audio back into a video**, for YouTube or Instagram? See [how to turn an MP3 into a video](/blog/how-to-create-video-from-mp3).
- **Not sure between MP3 and WAV for your project?** Read [MP3 vs WAV](/blog/mp3-vs-wav).

## Troubleshooting

**The MP3 is silent.** The video may have no audio track, or the sound is on a second track (some screen recorders and cameras do this). Play the video in VLC and check *Audio > Audio Track*.

**The audio is out of sync or shorter than the video.** Usually a damaged or variable-frame-rate recording. Re-exporting the video once (for example with [MOV to MP4](/mov-to-mp4)) often fixes it.

**The file won't load.** Check the size (1 GB maximum per file) and that it isn't a DRM-protected purchase from a streaming or video store — those can't be converted by any legitimate tool.

**It's slow on my phone.** Audio extraction is light, but very long videos still take time on mobile. Plug in your phone, keep the tab open, or use a computer.
