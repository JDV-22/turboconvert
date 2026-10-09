---
name: Trim audio
title: Trim Audio Online — Cut MP3 & Audio Files Free, No Upload
description: Cut an MP3, WAV, M4A or other audio file by setting a start and end time. Make ringtones, clips and shorter recordings. Free, in your browser — no upload.
h1: Trim an audio file
lead: Keep only the part of a recording or song you need by entering a start and end time — ideal for ringtones, clips and cleaning up voice recordings. Cut in your browser, never uploaded.
what: your audio file
howTo: trim an audio file
steps:
  - Click <strong>Choose file</strong> or drop an audio file — MP3, WAV, M4A, AAC, OGG, FLAC, OPUS, WMA, AIFF and AMR are accepted.
  - Enter the <strong>Start</strong> time in hours:minutes:seconds, for example <code>00:00:12</code>.
  - Enter the <strong>End</strong> time, for example <code>00:00:42</code>, or leave it empty to keep everything until the end.
  - Click <strong>Convert</strong>. The trimmed file downloads automatically.
limits:
  - One file at a time, up to 1 GB. The first use downloads the conversion engine (about 31 MB), cached afterwards.
  - There's no waveform or preview — find the times in your usual player first.
  - The tool keeps one continuous section. To remove a part in the middle, trim the two parts separately.
  - No fade-in or fade-out is added.
faq:
  - q: How do I cut the beginning of an MP3?
    a: Set Start to where you want the audio to begin (e.g. 00:00:05) and leave End empty. Everything before that point is removed.
  - q: How do I find the exact start and end times?
    a: Play the file in any player (your phone, VLC, Windows Media Player, QuickTime), pause at the points you want and note the time shown.
  - q: How do I make a ringtone from a song?
    a: Trim the song to a short section — about 30 seconds — and transfer it to your phone. Android accepts MP3 ringtones; iPhone ringtones need to be imported through Apple's own tools in the .m4r format.
  - q: Can I trim a voice memo or a recording?
    a: Yes. M4A voice memos, WAV recordings and other common formats are accepted. Cut the silence at the start and end before sharing.
  - q: Is my audio uploaded?
    a: No. The audio is cut by FFmpeg running inside your browser; your file stays on your device.
---

## What people trim audio for

- **Ringtones and notification sounds** — keep the chorus or the most recognisable 20–30 seconds.
- **Voice memos and interviews** — remove the silence and handling noise at the start and end.
- **Podcast and video clips** — extract a quote or highlight to share on social media.
- **Music practice** — isolate a passage to loop in a practice app.
- **Presentations** — keep only the part of a track you need as background music.

## Writing the times

Times use **hours:minutes:seconds**:

| You want | Start | End |
|---|---|---|
| Remove the first 5 seconds | `00:00:05` | *(empty)* |
| Keep the first 30 seconds | `00:00:00` | `00:00:30` |
| Keep 1:10 to 1:40 | `00:01:10` | `00:01:40` |
| Keep from 45 minutes to the end | `00:45:00` | *(empty)* |

If you're unsure about the exact moment, leave a second of margin on each side; you can always trim again.

## Tips

- **Need another format afterwards?** Convert the clip with the [audio converter](/audio-converter) to MP3, WAV, M4A, OGG, FLAC or OPUS.
- **Smaller file for sharing?** Lossless WAV or FLAC clips can be turned into compact MP3s with [WAV to MP3](/wav-to-mp3).
- **The audio is in a video?** Extract it first with [MP4 to MP3](/mp4-to-mp3), or cut the video directly with [Trim video](/trim-video).

## Supported formats

You can trim MP3, WAV, M4A, AAC, OGG, FLAC, OPUS, WMA, AIFF and AMR files, up to 1 GB. That covers music files, phone voice memos, recorder exports and old phone recordings alike.

## Common problems

- **The cut is a fraction of a second off.** Leave a little margin and trim again if needed; a waveform editor like Audacity is better for sample-accurate edits.
- **There's a click at the start or end.** Cutting in the middle of a sound can produce a click, since no fade is added. Move the cut point to a quieter moment.

## No upload needed

Your audio is processed by FFmpeg, the open-source engine behind many professional media tools, compiled to WebAssembly and running in your browser. There's no account, no watermark, and your recordings never leave your device.
