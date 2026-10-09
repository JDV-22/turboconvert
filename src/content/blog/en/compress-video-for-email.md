---
title: "How to Compress a Video for Email, WhatsApp & Discord (2026)"
description: "Video too big to send? Current limits for Gmail, Outlook, WhatsApp, Discord and Telegram, the settings that fit, and free ways to shrink a video on any device."
h1: How to compress a video to send by email, WhatsApp or Discord
permalink: compress-video-for-email
published: 2026-10-09
updated: 2026-10-09
tool: compress-video
category: video
faq:
  - q: How long a video can I send by Gmail?
    a: Gmail attachments are limited to 25 MB. At 720p with good compression, that's roughly one to two minutes of video; at 480p, a few minutes. Longer videos are better shared as a Google Drive link, which Gmail inserts automatically above 25 MB.
  - q: How do I send a long video on WhatsApp without losing quality?
    a: Send it as a Document (Attach > Document) instead of from the gallery. WhatsApp doesn't compress documents, and its help centre lists a 2 GB maximum for them. The recipient downloads the original file.
  - q: Does compressing a video reduce quality?
    a: Yes, somewhat — compression lowers the bitrate and often the resolution. On a phone screen, a well-compressed 720p video looks very close to the original. Avoid compressing the same video several times.
  - q: What is the best resolution for sending a video?
    a: 720p is the best compromise for phones and laptops. Use 1080p when people will watch on a TV or large monitor and the file size allows it, and 480p only to fit very tight limits.
  - q: Can I compress a video without uploading it?
    a: Yes. <a href="/compress-video">Compress Video</a> runs in your browser, so the video stays on your device. Built-in tools like Finder on Mac or Clipchamp on Windows also work offline.
---

A one-minute clip filmed on a recent phone can weigh well over 100 MB in 4K — four times what Gmail accepts. Whether it's a family video, a bug report for your team, or a clip for a Discord server, you'll often need to shrink it before sending. This guide lists the current limits of each app, explains which settings actually reduce the size, and shows the free methods on every device.

## How much can you send? Limits in 2026

Checked in October 2026 on each provider's help pages or announcements:

| Service | Limit | Notes |
|---|---|---|
| Gmail | 25 MB | Above that, Gmail inserts a Google Drive link |
| Outlook.com | 25 MB per message | OneDrive links up to 2 GB |
| iCloud Mail | 20 MB | Mail Drop link up to 5 GB, kept 30 days |
| WhatsApp — as video | Compressed by WhatsApp; smaller cap | Its FAQ has cited 16 MB for media |
| WhatsApp — as document | 2 GB | Sent untouched, no compression |
| Discord (free) | 20 MB per file | Raised from 10 MB in August 2026; Nitro allows more |
| Telegram | 2 GB (4 GB with Premium) | Send as a file to avoid compression |
| Work email (Microsoft 365, Workspace) | Set by your admin | Commonly 25–35 MB |

For email, aim **a little under** the limit: attachments grow by about a third when encoded for sending, and the recipient's server might be stricter than yours.

## What makes a video file big?

File size is simply **bitrate × duration**. A useful rule of thumb:

> Size in MB ≈ bitrate in Mbit/s × duration in seconds ÷ 8

So to fit a 60-second video into 25 MB, the total bitrate must stay around 3 Mbit/s — comfortable for 720p, tight for 1080p, impossible for 4K. Three things drive the bitrate:

1. **Resolution.** 4K has four times the pixels of 1080p and nine times those of 720p.
2. **Compression level.** Stronger compression lowers the bitrate at the cost of detail in fast motion.
3. **Duration.** Halve the length, halve the size. Trimming is the most painless compression there is.

Your iPhone shows the approximate size of one minute of video for each format under **Settings > Camera > Record Video**.

## Method 1: compress in your browser (any computer or phone)

[Compress Video](/compress-video) re-encodes the video with FFmpeg, right in your browser — the file isn't uploaded.

1. Open [Compress Video](/compress-video) and click **Choose file** (MP4, MOV, WebM, MKV, AVI… up to 1 GB).
2. Set **Max resolution**: *Keep original*, **1080p**, **720p** (default) or **480p**.
3. Choose the **Compression**: *Strong — smallest file*, *Recommended — good quality* or *Light — best quality*.
4. Click **Convert** and wait; the compressed MP4 downloads automatically.

How to choose for each destination:

| Destination | Max resolution | Compression |
|---|---|---|
| Gmail / Outlook, clip under ~1 min | 720p | Recommended |
| Gmail / Outlook, 1–3 min | 480p | Strong |
| Discord free (20 MB) | 720p or 480p | Strong |
| WhatsApp as a document, family viewing | 720p | Recommended |
| Archive or TV viewing | 1080p | Light |

The tool can't target an exact size in MB, so check the result and step down a level if needed. Compression is demanding: the first use downloads the engine (about 31 MB), and a long video takes a while — a recent laptop is much faster than a phone. Before compressing, cut unneeded parts with [Trim Video](/trim-video).

## Method 2: built-in tools

### Mac

- **Finder:** select the video, Control-click, choose **Encode Selected Video Files**, then pick **720p** or **480p**. The result is an `.m4v` (MPEG-4) file.
- **QuickTime Player:** **File > Export As > 720p** or **480p**. The result is a `.mov`, fine for Mac and iPhone users.

### Windows

- **Clipchamp** (included with Windows 11): import the clip, add it to the timeline, **Export** and pick **480p** or **720p**. The free plan exports MP4 up to 1080p.
- No other built-in Windows tool compresses video directly.

### iPhone

- **Messages and WhatsApp** compress videos automatically when you send them from the gallery — convenient, but you don't control the quality.
- To keep files smaller from the start, lower the recording resolution under **Settings > Camera > Record Video** (1080p at 30 fps instead of 4K).
- For a specific size, open [Compress Video](/compress-video) in Safari.

### Android

Messaging apps compress automatically. Some manufacturers’ gallery apps add a resolution choice when you export an edited video; options vary by brand. For precise control, a browser tool works the same on any Android phone.

## Method 3: don't compress — send a link

For long or important videos (a wedding, a client deliverable), compression throws away quality you'll regret. Send a link instead:

- **Google Drive** from Gmail, **OneDrive** from Outlook, **Mail Drop** from Apple Mail.
- **WhatsApp or Telegram as a document/file**: up to 2 GB, delivered without recompression.
- Any cloud folder with a share link — set permissions so only the recipient can open it.

## Other ways to make a video smaller

- **Trim** the start and end — often the easiest 30% saving. [Trim Video](/trim-video) uses start and end times.
- **Remove the sound** if it's useless (screen recordings, background noise) with [Mute Video](/mute-video). Audio is a small part of the size, but it helps on short clips.
- **Convert to GIF?** Only for very short loops without sound (a few seconds). GIFs are usually *larger* than an MP4 of the same clip. If you need one, [Video to GIF](/video-to-gif) limits length and width to keep it reasonable.
- **Avoid double compression.** Compress the original file, not a version already compressed by WhatsApp.

## Troubleshooting

**The compressed video is barely smaller.** It was probably already efficiently compressed (HEVC from an iPhone, or a video downloaded from a messaging app). Lower the max resolution instead of only the compression level.

**The video won't play for the recipient.** Make sure it's an MP4 with H.264, the most compatible combination. iPhone HEVC videos may not play on older Windows PCs — see [how to convert MOV to MP4](/blog/convert-mov-to-mp4).

**The compression is very slow.** Video encoding is heavy work. Close other tabs, plug in your laptop, choose a lower max resolution (720p encodes much faster than 1080p), or trim first.

**Discord still says the file is too large.** Discord checks the original size, before any compression on mobile. Compress on your device first, then upload the smaller file.

## Quick recipe

1. Trim what's not needed.
2. Compress at 720p, *Recommended*.
3. Check the size; if still too big, go to 480p or *Strong*.
4. Above 25 MB for email, send a link instead.
