---
name: Trim video
title: Trim Video Online — Cut MP4 Clips Free, No Upload
description: Trim a video by setting a start and end time — cut MP4, MOV, WebM or MKV clips for sharing. Free, no watermark, runs in your browser with no upload.
h1: Trim a video
lead: Cut the beginning or the end off a video, or keep just the part that matters, by entering a start and end time. It all happens in your browser — your video is never uploaded.
what: your video
howTo: trim a video
steps:
  - Click <strong>Choose file</strong> or drop your video — MP4, MOV, WebM, MKV, AVI and other common formats are accepted.
  - Enter the <strong>Start</strong> time of the part you want to keep, in hours:minutes:seconds (for example <code>00:01:15</code>).
  - Enter the <strong>End</strong> time (for example <code>00:02:30</code>), or leave it empty to keep everything until the end.
  - Click <strong>Convert</strong>. The trimmed clip downloads automatically.
limits:
  - One video at a time, up to 1 GB. The first use downloads the conversion engine (about 31 MB), cached afterwards.
  - The tool keeps one continuous segment. To remove a part from the middle, trim twice (before and after the cut) and keep both clips.
  - There is no visual timeline — play the video in your usual player to find the exact times first.
  - Processing speed depends on your device; a computer is faster than a phone for long videos.
faq:
  - q: How do I cut the beginning of a video?
    a: Set Start to the moment you want the video to begin (e.g. 00:00:08) and leave End empty. Everything before that point is removed.
  - q: How do I cut the end off a video?
    a: Leave Start at 00:00:00 and set End to the moment the video should stop. Everything after it is removed.
  - q: How do I find the right start and end times?
    a: Play the video in any player (Photos, QuickTime, VLC, your phone's gallery), pause at the start and end points and note the time shown. Then enter those times here.
  - q: Does trimming reduce the quality?
    a: Trimming keeps the video's resolution. To make the file smaller as well, run the trimmed clip through <a href="/compress-video">Compress video</a>.
  - q: Is there a watermark or a length limit?
    a: No watermark. Files can be up to 1 GB, with no limit on the duration you keep.
  - q: Is my video uploaded?
    a: No. The video is cut by FFmpeg running inside your browser; it never leaves your device.
---

## When to trim a video

Most recordings have a few seconds you don't need: fumbling with the phone before the action starts, the moment you reach for the stop button, a long intro before a talk begins. Trimming them makes videos easier to watch and lighter to send. Typical uses:

- **Sharing a highlight** — a goal, a speech, a funny moment — from a longer recording.
- **Cleaning up screen recordings** before posting a tutorial or a bug report.
- **Fitting a size or length limit** in a chat app, an email or a social platform.
- **Preparing a clip** for a presentation or a video project.

## How time codes work

Times are written as **hours:minutes:seconds**:

| You want | Start | End |
|---|---|---|
| Remove the first 10 seconds | `00:00:10` | *(empty)* |
| Keep only the first minute | `00:00:00` | `00:01:00` |
| Keep 1:15 to 2:30 | `00:01:15` | `00:02:30` |
| Keep from 1 h 5 min to the end | `01:05:00` | *(empty)* |

The clip contains everything between Start and End. If you're not sure, add a second of margin on each side — you can always trim again.

## Tips

- **Need a GIF instead?** [Video to GIF](/video-to-gif) makes a looping animation from a few seconds of video, with its own start and duration settings.
- **Remove the sound** from the trimmed clip with [Mute video](/mute-video).
- **Shrink it for sending:** trimming first, then compressing with [Compress video](/compress-video), gives the smallest file.
- **Only need the audio of a section?** Convert with [MP4 to MP3](/mp4-to-mp3), then cut the MP3 with [Trim audio](/trim-audio).

## Common problems

- **The clip starts a moment early or late.** Adjust the Start time by a second and convert again.
- **You get an error about the time.** Use the hours:minutes:seconds format with two digits for each part, and make sure End is after Start and not beyond the video's length.

## No upload, no watermark

Online video cutters usually upload your whole file before you can do anything — slow for large videos and not ideal for personal footage. TurboConvert runs FFmpeg, the open-source engine used by professional video software, inside your browser. Your video is read from your disk and the trimmed clip is saved straight to your downloads, without a watermark or an account.
