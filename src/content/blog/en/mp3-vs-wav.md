---
title: "MP3 vs WAV: Differences, File Sizes and Which to Use"
description: "WAV is lossless and big, MP3 is compressed and universal. Sound quality, file sizes per minute, and when to use WAV, MP3, FLAC or AAC — explained simply."
h1: "MP3 vs WAV: what's the difference and which should you use?"
permalink: mp3-vs-wav
published: 2026-02-01
updated: 2026-10-09
tool: wav-to-mp3
category: audio
faq:
  - q: Is WAV better quality than MP3?
    a: WAV is lossless — it stores the audio exactly as recorded — while MP3 discards sounds that are hard to hear. At 256–320 kbps, most people can't reliably hear the difference on typical equipment, but WAV is better for editing, mixing and archiving.
  - q: Does converting MP3 to WAV improve quality?
    a: No. What MP3 discarded can't be recovered. The WAV will be much bigger and sound identical to the MP3. Convert to WAV only when software requires it, for example an editor or a CD burning tool.
  - q: How much space does WAV take compared to MP3?
    a: CD-quality WAV uses about 10 MB per minute. A 320 kbps MP3 uses about 2.4 MB per minute and a 128 kbps MP3 under 1 MB — so WAV is roughly 4 to 11 times larger.
  - q: What is the best MP3 bitrate?
    a: 320 kbps for music where quality matters, 192 kbps as an all-purpose default, 128 kbps for speech, podcasts and voice memos.
  - q: Should I use FLAC instead of WAV?
    a: For storing music, often yes. FLAC is lossless like WAV but usually around half the size, and it handles tags (artist, album, cover art) better. WAV remains the safer choice for recording and editing software.
---

You're exporting a song, archiving recordings, sending a voice-over to a client or filling up a USB stick for the car: MP3 or WAV? The answer depends less on "quality" in the abstract than on what you'll do with the file next. Here's what really separates the two formats, how much space each takes, and a simple rule for choosing — plus where FLAC, AAC and the others fit.

## The one-sentence difference

**WAV** stores audio uncompressed, exactly as recorded. **MP3** compresses it by discarding sounds the human ear is unlikely to perceive, making files several times smaller.

## How each format works

### WAV: the raw recording

WAV (*Waveform Audio File Format*) usually holds **PCM** audio: a list of amplitude measurements taken thousands of times per second. "CD quality" means 44,100 samples per second, 16 bits each, in stereo — 1,411 kbps. Studio recordings often use 24-bit and 48 kHz or more.

Nothing is thrown away, so you can edit, process and re-save a WAV as many times as you like without degradation. The cost is size. WAV files also have a 4 GB limit in their standard form, and limited support for tags like artist and cover art.

### MP3: perceptual compression

MP3 uses a **psychoacoustic model**: it removes frequencies masked by louder sounds and detail beyond what most ears can hear, then compresses what remains. The **bitrate** (128, 192, 256, 320 kbps…) sets how much data is kept per second. Higher bitrate, better fidelity, bigger file.

The loss is permanent, and it accumulates: decoding an MP3, editing it and encoding it again degrades it a little more each time.

## File sizes compared

Per minute of stereo audio:

| Format | Bitrate | Size per minute | Size of a 4-minute song |
|---|---|---|---|
| WAV 24-bit / 48 kHz | 2,304 kbps | ~17 MB | ~69 MB |
| WAV 16-bit / 44.1 kHz (CD) | 1,411 kbps | ~10.6 MB | ~42 MB |
| FLAC (CD quality) | variable | often ~5–7 MB | ~20–28 MB |
| MP3 320 kbps | 320 kbps | ~2.4 MB | ~9.6 MB |
| MP3 192 kbps | 192 kbps | ~1.4 MB | ~5.8 MB |
| MP3 128 kbps | 128 kbps | ~0.96 MB | ~3.8 MB |

The WAV and MP3 figures follow directly from the bitrate (bitrate × 60 seconds ÷ 8). FLAC depends on the music: dense rock compresses less than solo piano.

## Can you hear the difference?

At **128 kbps**, attentive listeners on good headphones can often notice slightly "swishy" cymbals, smeared reverb tails or less precise stereo. At **256–320 kbps**, the difference with a WAV is extremely hard to detect for most people in blind listening, especially on phone speakers, car stereos or Bluetooth earbuds (which compress audio themselves anyway).

So for **listening**, a high-bitrate MP3 is effectively transparent for most people. For **working on audio**, WAV is the right choice — not because you'd hear the difference in one playback, but because losses add up with every edit and export.

## When to use WAV

- **Recording** voice, instruments, podcasts: record in WAV (24-bit if your interface allows).
- **Editing and mixing** in a DAW (Audacity, GarageBand, Logic, Reaper…).
- **Masters** you deliver to a mastering engineer, a label or a distributor — most ask for WAV.
- **Broadcasting and video post-production**, where WAV at 48 kHz is the norm.
- **Software that requires it**: some transcription, sampling or CD-burning tools.

## When to use MP3

- **Sharing** with anyone, on any device — MP3 plays everywhere, from old car stereos to smart speakers.
- **Email and messaging**, where file size limits apply.
- **Podcasts** for distribution (128–192 kbps is standard for speech).
- **Music libraries** on phones and USB sticks where space matters.

To convert: [WAV to MP3](/wav-to-mp3) (choose 128 to 320 kbps; AIFF is accepted too). Going the other way for an editor that needs WAV: [MP3 to WAV](/mp3-to-wav). Both run in your browser without uploading your recordings.

## What about FLAC, AAC, OGG and Opus?

| Format | Type | Good for |
|---|---|---|
| **FLAC** | Lossless, compressed | Archiving music at full quality in half the space; good tag support |
| **AAC / M4A** | Lossy | Apple devices, YouTube, a bit more efficient than MP3 at the same bitrate |
| **OGG Vorbis** | Lossy | Games, some streaming services, open-source software |
| **Opus** | Lossy | Voice and music at low bitrates; used by many calling apps |
| **AIFF** | Uncompressed | Apple's equivalent of WAV |

[Audio Converter](/audio-converter) converts between MP3, WAV, M4A (AAC), OGG, FLAC and OPUS. For specific cases: [FLAC to MP3](/flac-to-mp3), [M4A to MP3](/m4a-to-mp3), [OGG to MP3](/ogg-to-mp3).

## Smart workflow: keep a lossless master

The approach professionals use, and that works for anyone:

1. **Record and edit in WAV** (or keep your FLAC library).
2. **Export MP3 copies** for sharing, at a bitrate that fits the use.
3. **Never convert MP3 → WAV → MP3** hoping to improve something: each lossy encode loses a bit more.
4. **Back up the masters.** Storage is cheap; a lost original isn't recoverable from an MP3.

## A note on sample rate and bit depth

When exporting a WAV, your software asks for a **sample rate** and a **bit depth**:

- **44.1 kHz** is the music and CD standard; **48 kHz** is the standard for video. Match what the destination expects, and avoid converting back and forth between them.
- **16-bit** is enough for a finished track; **24-bit** gives more headroom while recording and mixing, so quiet passages stay clean when you raise the volume.
- Higher values (96 kHz, 32-bit float) are useful in studios but make files much larger for little audible benefit in a final product.

## Quick decision guide

| Your situation | Choose |
|---|---|
| Recording a podcast or song | WAV |
| Sending a demo by email | MP3 320 kbps |
| Publishing a podcast episode | MP3 128–192 kbps |
| Archiving a CD collection | FLAC (or WAV if your player needs it) |
| Music on a phone or car USB stick | MP3 256–320 kbps or AAC |
| Uploading to a distributor or label | WAV, as they specify |
| Making a YouTube video from a track | Best source you have — see [turning an MP3 into a video](/blog/how-to-create-video-from-mp3) |

## Common questions about converting

**Will WAV to MP3 make my music sound worse?** At 256–320 kbps, almost certainly not audibly. At 128 kbps, possibly for music on good equipment — fine for speech.

**Which bitrate for a voice memo?** 128 kbps is plenty; voice doesn't benefit from more.

**My WAV is 2 GB — is that normal?** A multi-hour 24-bit recording can be. Cut out the parts you need with [Trim Audio](/trim-audio) or export an MP3 for listening.

**Need the audio track from a video?** See [how to extract audio from a video](/blog/how-to-extract-audio-from-video).
