---
title: "How to Convert MOV to MP4 on Mac, Windows and iPhone (Free)"
description: "Convert iPhone and Mac MOV videos to MP4 for free — Finder, iMovie, Clipchamp, VLC, HandBrake or your browser — and fix videos that won't play on Windows."
h1: How to convert MOV to MP4 on Mac, Windows and iPhone
permalink: convert-mov-to-mp4
published: 2026-10-09
updated: 2026-10-09
tool: mov-to-mp4
category: video
faq:
  - q: Can I just rename a .mov file to .mp4?
    a: Sometimes it plays, because both formats are closely related, but it's not reliable — the file structure differs and some players, editors or websites will reject it. Converting (even by quick repackaging) is the safe way.
  - q: Does converting MOV to MP4 reduce quality?
    a: Not if the video is only repackaged ("remuxed"), which copies the video and audio unchanged. Re-encoding does lose a little quality, though at sensible settings it is hard to see. Repackaging is possible when the MOV already uses MP4-compatible codecs, as iPhone videos do.
  - q: Why won't my iPhone video play on Windows?
    a: Recent iPhones record in HEVC (H.265) by default. Windows needs the HEVC Video Extensions (paid in most regions) to play it. Re-encode the video to H.264, or set the iPhone to Settings > Camera > Formats > Most Compatible for future videos.
  - q: How do I convert MOV to MP4 on a Mac without software?
    a: Select the video in Finder, Control-click and choose Encode Selected Video Files. You get an MPEG-4 (.m4v) file that plays like an MP4. iMovie, free on every Mac, exports true .mp4 files via Share > File.
  - q: Is there a size limit for converting MOV to MP4 online?
    a: Most online converters limit free files to a few hundred MB and upload them to a server. <a href="/mov-to-mp4">MOV to MP4</a> on TurboConvert works in your browser on files up to 1 GB, without uploading them.
---

MOV is the video format of iPhones, Macs and many cameras. It plays perfectly in Apple's world — and then refuses to open on a Windows laptop, a smart TV, an Android phone or a website's upload form. MP4 is the universal alternative. This guide explains the difference, shows the free ways to convert on every device, and explains why some "converted" videos still won't play.

## MOV vs MP4: what's the difference?

Both are **containers** — boxes holding a video track, an audio track and metadata. MOV was created by Apple for QuickTime; MP4 is the international standard derived from it. They're cousins, which is why conversion can often be done without touching the video itself.

What really determines compatibility is the **codec** inside:

| Codec inside | Typical source | Plays on |
|---|---|---|
| **H.264** video + AAC audio | iPhone in "Most Compatible" mode, most cameras | Practically everything |
| **HEVC (H.265)** video + AAC audio | iPhone default ("High Efficiency") | Apple devices, recent Android; Windows needs a paid extension |
| **ProRes** | iPhone Pro ProRes mode, professional cameras | Editing software; huge files |

So there are two kinds of "conversion":

- **Remux (repackage):** move the same video and audio from a MOV box to an MP4 box. Fast, no quality loss, the file size barely changes.
- **Re-encode:** decode and compress the video again, for example from HEVC or ProRes to H.264. Slower, slightly lossy, and the only way to change the codec.

## Method 1: in your browser (Windows, Mac, Chromebook, Linux)

[MOV to MP4](/mov-to-mp4) converts in your browser — the video stays on your device:

1. Open [MOV to MP4](/mov-to-mp4) and click **Choose files**. MOV, M4V and QT files up to 1 GB are accepted; you can add several.
2. Click **Convert**.
3. The MP4 downloads automatically (several files can be downloaded as a ZIP).

When the codecs inside the MOV can go into an MP4 as they are, the video is repackaged without re-encoding — fast and lossless. Otherwise it is re-encoded to H.264 video with AAC audio, which takes longer and depends on your computer's speed. The first use downloads the FFmpeg engine (about 31 MB, then cached). A desktop or laptop is recommended for long videos.

Note: repackaging keeps the original codec. An iPhone video recorded in HEVC becomes an HEVC MP4, which plays on most modern devices but not on Windows without the HEVC extension.

## Method 2: on a Mac, built in

### Finder: "Encode Selected Video Files"

1. Select one or more MOV files in Finder.
2. Control-click and choose **Encode Selected Video Files** (under *Quick Actions* or *Services*, depending on your macOS version).
3. Choose a resolution and **H.264** for maximum compatibility (or HEVC for smaller files), then **Continue**.

You get an `.m4v` file — an MPEG-4 video that plays anywhere MP4 does. Rename it to `.mp4` if a website insists on the extension.

### iMovie: true MP4 export

Import the clip into iMovie (free on every Mac), then **File > Share > File**, choose resolution and quality, and save. iMovie exports `.mp4` files with H.264.

### What about QuickTime Player?

*File > Export As* in QuickTime Player lets you change resolution, but the result is still a **.mov** file — not what you want here.

## Method 3: on Windows

### Clipchamp (included with Windows 11)

1. Open **Clipchamp** (it's installed with Windows 11, or free from the Microsoft Store), sign in and create a new video.
2. Import the MOV and drag it onto the timeline.
3. Click **Export** and choose a resolution (up to 1080p on the free plan). The output is MP4.

Clipchamp re-encodes the video, so it's slower than a remux, but it produces H.264 MP4s that play everywhere.

### VLC media player

**Media > Convert / Save > Add**, select the MOV, click **Convert / Save**, choose the profile **Video – H.264 + MP3 (MP4)**, set a destination ending in `.mp4` and click **Start**. Free and offline, but the interface is unforgiving.

### HandBrake (Windows, Mac, Linux)

The free, open-source **HandBrake** is the most flexible re-encoder: choose a preset such as *Fast 1080p30*, make sure the format is **MP4**, and click **Start Encode**. Ideal for converting many large files with consistent settings.

## Method 4: on iPhone

- **Prevent the problem:** **Settings > Camera > Formats > Most Compatible** records H.264 video. Files still have a `.MOV` extension, but they play on Windows and nearly everywhere. Downside: larger files, and some modes (such as 4K at 60 fps) require High Efficiency.
- **Convert an existing video:** open [MOV to MP4](/mov-to-mp4) in Safari and pick the video from your library. For long videos, AirDrop or copy them to a computer first.
- **Sharing apps often convert for you:** messaging and social apps usually re-encode videos on upload, so you rarely need to convert before posting.

## Quick comparison

| Method | Platform | Remux (lossless) | Re-encode to H.264 | Cost |
|---|---|---|---|---|
| TurboConvert MOV to MP4 | Any browser | Yes, when possible | When needed | Free, no upload |
| Finder Encode | Mac | No | Yes (.m4v) | Built in |
| iMovie | Mac | No | Yes | Free |
| Clipchamp | Windows | No | Yes | Free plan up to 1080p |
| VLC | Win/Mac/Linux | Possible | Yes | Free |
| HandBrake | Win/Mac/Linux | No | Yes, very configurable | Free |

## Troubleshooting

**The MP4 plays without sound.** Rare with iPhone videos (AAC audio), but some cameras record PCM or other audio formats. Re-encode the audio to AAC — the browser tool does this automatically when needed.

**The MP4 still won't play on Windows or the TV.** The video is probably HEVC. Re-encode to H.264 with Finder (choose H.264), iMovie, Clipchamp or HandBrake, or install the HEVC Video Extensions on Windows.

**The file is too big to send.** Converting doesn't shrink it much. Use [Compress Video](/compress-video) and pick a maximum resolution (1080p, 720p or 480p). See [how to compress a video for email and WhatsApp](/blog/compress-video-for-email) for the limits of each app.

**You only need part of the clip.** Cut it first with [Trim Video](/trim-video) — a shorter video converts faster.

**It's a WebM or MKV, not a MOV.** Use [WebM to MP4](/webm-to-mp4) or [MKV to MP4](/mkv-to-mp4), which work the same way.

**You want just the audio.** [MP4 to MP3](/mp4-to-mp3) accepts MOV files directly — see [how to extract audio from a video](/blog/how-to-extract-audio-from-video).
