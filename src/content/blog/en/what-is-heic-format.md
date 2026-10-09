---
title: "HEIC vs JPG: What Is a HEIC File and Why Won't It Open?"
description: "HEIC is the iPhone's photo format: half the size of JPG at similar quality, but poorly supported. How it works, how to open it, and when to switch."
h1: "HEIC vs JPG: what is a HEIC file, and should you keep it?"
permalink: what-is-heic-format
published: 2026-02-01
updated: 2026-10-09
tool: heic-to-jpg
category: image
faq:
  - q: Is HEIC better quality than JPG?
    a: At the same file size, yes — HEIC keeps more detail and fewer compression artefacts, and supports 10-bit colour for HDR photos. At the same visual quality, a HEIC file is typically around half the size of the equivalent JPG.
  - q: Why can't I open HEIC files on Windows?
    a: Windows doesn't include the HEVC decoder HEIC relies on, because of patent licensing. Install "HEIF Image Extensions" (free) and "HEVC Video Extensions" (paid in most regions) from the Microsoft Store, or convert the photos to JPG.
  - q: Does converting HEIC to JPG lose quality?
    a: Slightly, because JPG is re-compressed, but at high quality (90% or more) the difference isn't visible. The JPG will usually be larger than the HEIC original. Keep the HEIC files if you want the best archive.
  - q: How do I stop my iPhone from taking HEIC photos?
    a: Go to Settings > Camera > Formats and choose Most Compatible. New photos are saved as JPG and videos as H.264. Photos already taken stay HEIC.
  - q: Can Android phones open HEIC?
    a: Recent Android versions can display HEIC photos in the gallery, but many apps, websites and older phones still can't. Converting to JPG is the safe choice when sharing.
---

You transferred photos from an iPhone and found files ending in `.HEIC` that Windows won't preview, a website refuses to upload, or a colleague can't open. HEIC is not a bug or a proprietary Apple trick — it's a modern, standard image format that happens to be poorly supported outside Apple's world. Here's what it is, how it compares with JPG, and how to decide whether to keep it or switch.

## What is HEIC?

**HEIC** stands for *High Efficiency Image Container*. It's Apple's name for photos stored in the **HEIF** format (*High Efficiency Image File Format*), a standard published by the MPEG group — the same people behind MP3 and MP4. The image inside is compressed with **HEVC** (H.265), the codec also used for 4K video.

Apple made it the default camera format with iOS 11 in 2017, on iPhones with an A10 chip or newer (iPhone 7 onwards). Since then, every iPhone photo is HEIC unless you change the setting. Some Android phones (Samsung, for example) offer HEIF as an option too.

## HEIC vs JPG at a glance

| | HEIC | JPG (JPEG) |
|---|---|---|
| File size at similar quality | Around half | Reference |
| Colour depth | Up to 10-bit (HDR) | 8-bit |
| Transparency | Supported | Not supported |
| Several images in one file | Yes (Live Photos, bursts, depth maps) | No |
| Editing metadata (rotation, crop) | Can be stored without re-encoding | Usually re-saved |
| Opens on iPhone, iPad, Mac | Yes, natively | Yes |
| Opens on Windows | With extensions | Yes, everywhere |
| Web browsers, upload forms | Rarely | Universally |
| Year introduced | 2015 (standard), 2017 (iPhone) | 1992 |

In short: HEIC is technically better, JPG is universally compatible.

## Why is HEIC so poorly supported?

The main reason is **licensing**. HEVC compression is covered by patents held by several pools, and software makers must pay to include a decoder. Apple pays for it in its own products. Microsoft ships the image container support for free but sells the HEVC codec separately; many websites, older programs and cheaper devices simply don't bother.

The result: a HEIC file opens perfectly on an iPhone or Mac, and fails in a surprising number of places:

- **Windows 10 and 11** without the right extensions show a blank thumbnail.
- **Most web browsers other than Safari** can't display HEIC, so many websites reject it on upload.
- **Online forms and portals** (job applications, administrations, print shops) usually accept only JPG, PNG or PDF.
- **Older photo editors** and some Android apps can't read it.

## How to open HEIC files

**iPhone, iPad, Mac:** natively, in Photos and Preview (macOS High Sierra and later).

**Windows 10/11:** install two Microsoft Store extensions — **HEIF Image Extensions** (free) and **HEVC Video Extensions** (paid, about $0.99 in the US; price varies by country). After a restart, the Photos app and File Explorer thumbnails handle HEIC. Without them, convert the files.

**Android:** recent versions display HEIC in the gallery app; third-party apps vary.

**Anywhere:** convert to JPG with [HEIC to JPG](/heic-to-jpg) — it works in your browser, takes many photos at once and doesn't upload them, so your personal pictures stay on your device.

## Should you keep HEIC or switch to JPG?

**Keep HEIC if** you mostly stay in Apple's ecosystem, use iCloud Photos, and care about storage. A library of 20,000 photos takes roughly half the space in HEIC, which can save you from buying more iCloud storage. You also keep HDR and Live Photos.

**Switch to JPG if** you regularly copy photos to a Windows PC, upload them to websites, send them to print shops, or share with people on older devices.

**The middle ground** most people should choose: keep HEIC on the phone, and let the iPhone convert automatically when photos leave it:

- **Settings > Photos > Transfer to Mac or PC > Automatic**: photos copied over USB to a computer are converted to JPG.
- **Sharing** through Mail and many apps converts to JPG automatically.
- For everything else, convert in batches when you need to.

### How to change the iPhone camera format

Go to **Settings > Camera > Formats** and choose:

- **High Efficiency**: HEIC photos and HEVC videos (default).
- **Most Compatible**: JPG photos and H.264 videos.

The change applies only to new photos. Note that some video modes, such as 4K at 60 fps, require High Efficiency.

## Converting HEIC: JPG or PNG?

- **JPG** for photos you share, upload or print. It's what websites and printers expect. Use a high quality (90%+) to keep detail — [HEIC to JPG](/heic-to-jpg) defaults to 92%.
- **PNG** if you'll edit the image further and want no extra compression loss, or for screenshots with text. PNG files are much larger. Use [HEIC to PNG](/heic-to-png).

Don't expect the converted file to be smaller: a JPG at matching quality is usually bigger than the HEIC original. If size matters (email, a portal with a 2 MB limit), resize or compress afterwards with [Compress Image](/compress-image).

For step-by-step instructions on every device — including bulk conversion on Windows and Mac — see our guide on [converting iPhone photos to JPG](/blog/convert-iphone-photos-to-jpg).

## What about HEIC metadata and privacy?

Like JPG, HEIC files contain **EXIF metadata**: date, camera settings and, if location services were on, **GPS coordinates**. Conversion tools may keep or drop this data, so check before posting photos publicly. On iPhone, you can turn off location for a single share via **Options** at the top of the share sheet.

## HEIC and iCloud storage: a quick example

Storage is where HEIC pays off. Say you take 3,000 photos a year. If an average JPG from your phone weighs around 3 MB and the HEIC version about half that, the HEIC library grows by roughly 4–5 GB a year instead of 9 — a difference that adds up quickly against a 5 GB free iCloud plan or a 64 GB phone. Exact sizes vary with the scene and the camera, but the ratio is why Apple made HEIC the default.

## The bottom line

HEIC is a better format held back by licensing and habit. Keep it on your iPhone to save space, let the phone convert automatically when sending photos to a computer, and convert to JPG whenever a website, a Windows PC or a person can't open it. And when you need a PDF instead — for a form or a receipt — [JPG to PDF](/jpg-to-pdf) accepts HEIC photos directly.
