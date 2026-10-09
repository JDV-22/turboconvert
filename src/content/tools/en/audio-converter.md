---
name: Audio converter
title: Audio Converter — MP3, WAV, M4A, OGG, FLAC, OPUS | Free
description: Free online audio converter. Convert between MP3, WAV, M4A (AAC), OGG, FLAC and OPUS, or extract audio from video. Batch, in your browser — no upload.
h1: Audio converter
lead: Convert any audio file — or the soundtrack of a video — to MP3, WAV, M4A, OGG, FLAC or OPUS. One file or a batch, all processed in your browser without uploading anything.
what: your audio files
howTo: convert audio files
steps:
  - Click <strong>Choose files</strong> or drop audio or video files — MP3, WAV, M4A, AAC, OGG, FLAC, OPUS, WMA, AIFF, AMR, MP4, MOV and more are accepted.
  - Choose the <strong>Output format</strong> — MP3, WAV, M4A (AAC), OGG (Vorbis), FLAC or OPUS.
  - Click <strong>Convert</strong>, then download each file or everything with <strong>Download all (ZIP)</strong>.
limits:
  - Files up to 1 GB each. The first use downloads the conversion engine (about 31 MB), cached afterwards.
  - There's no bitrate setting here; each format uses a good general-purpose quality. To pick a specific MP3 bitrate, use <a href="/wav-to-mp3">WAV to MP3</a>, <a href="/m4a-to-mp3">M4A to MP3</a> or <a href="/mp4-to-mp3">MP4 to MP3</a>.
  - Converting a lossy file (MP3, M4A, OGG) to a lossless format (WAV, FLAC) doesn't restore quality — it only prevents further loss.
  - Copy-protected (DRM) files can't be converted.
faq:
  - q: Which audio format should I choose?
    a: MP3 for maximum compatibility, M4A (AAC) for Apple devices and good quality at small sizes, OPUS for voice at very small sizes, FLAC for lossless archiving, WAV for editing software.
  - q: Can I extract audio from a video?
    a: Yes. Drop an MP4, MOV, WebM, MKV or other video and choose the output format; the sound track is extracted and converted.
  - q: Is FLAC better than WAV?
    a: Both are lossless and sound identical. FLAC is compressed, so it's typically half to two-thirds the size of WAV, and it supports tags; WAV is accepted by more editing tools and hardware.
  - q: Can I convert several files at once?
    a: Yes. Drop as many files as you like; they're converted to the chosen format one after another and can be downloaded together as a ZIP.
  - q: Are my files uploaded?
    a: No. The converter is FFmpeg running inside your browser, so your audio stays on your device.
---

## Which format for which use?

| Format | Type | Best for |
|---|---|---|
| **MP3** | Lossy | Playing anywhere: phones, cars, websites, any player |
| **M4A (AAC)** | Lossy | iPhone, iTunes/Music, good quality at small sizes |
| **OGG (Vorbis)** | Lossy | Games, Linux, open-source projects |
| **OPUS** | Lossy | Voice, podcasts and streaming at very low bitrates |
| **FLAC** | Lossless (compressed) | Archiving music, hi-fi listening |
| **WAV** | Lossless (uncompressed) | Editing, production, hardware, CDs |

### Lossy or lossless?

Lossy formats (MP3, AAC, Vorbis, Opus) remove sound the ear barely perceives to make files small. Lossless formats (FLAC, WAV) keep every sample. Three rules follow from that:

- **Converting lossless → lossy** saves a lot of space with little audible difference at good bitrates.
- **Converting lossy → lossless** never improves the sound; it's useful only when a tool requires WAV or FLAC, or to edit without adding another round of compression.
- **Avoid chains of lossy conversions** (MP3 → OGG → M4A): each step loses a little more. Convert from the best source you have.

## Input formats

The converter reads almost any audio file: **MP3, WAV, M4A, AAC, OGG/OGA, FLAC, OPUS, WMA, AIFF/AIF and AMR** (common for old phone recordings). It also accepts **videos** — MP4, MOV, WebM, MKV, AVI, WMV, 3GP and more — and extracts their sound.

## Specialised tools

For the most common conversions, dedicated pages offer a bitrate choice:

- [WAV to MP3](/wav-to-mp3), [M4A to MP3](/m4a-to-mp3), [OGG to MP3](/ogg-to-mp3), [FLAC to MP3](/flac-to-mp3)
- [MP3 to WAV](/mp3-to-wav) for editors and hardware
- [Trim audio](/trim-audio) to keep only part of a recording

## Private by design

Online audio converters usually upload your files to a server. TurboConvert runs FFmpeg — the open-source engine behind countless media tools — compiled to WebAssembly in your browser. Your recordings, interviews and unreleased tracks never leave your device, and there's no upload time to wait for.

## Common problems

- **The converted file sounds no better.** Converting from MP3 to WAV or FLAC can't add back what MP3 removed. Use the original recording or a lossless source when you have one.
- **The file won't play on an iPhone.** OGG and OPUS have limited support in Apple's default apps; choose M4A (AAC) or MP3 for Apple devices.
- **An old phone recording (.amr) is unreadable.** AMR is accepted here — convert it to MP3 to play it anywhere.
