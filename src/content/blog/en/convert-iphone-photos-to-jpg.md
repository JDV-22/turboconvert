---
title: "How to Convert iPhone Photos to JPG on Windows, Mac & iPhone"
description: "Convert iPhone HEIC photos to JPG in bulk on Windows, Mac or the iPhone itself — built-in methods, the right settings, and a free no-upload converter."
h1: How to convert iPhone photos to JPG (on any device)
permalink: convert-iphone-photos-to-jpg
published: 2026-02-01
updated: 2026-10-09
tool: heic-to-jpg
category: image
faq:
  - q: How do I convert many HEIC photos to JPG at once on Windows?
    a: Drop the whole batch into <a href="/heic-to-jpg">HEIC to JPG</a> in your browser and download them all as a ZIP. Alternatively, install the HEIF and HEVC extensions and convert with a photo app, which is slower for large batches.
  - q: How do I make my iPhone send JPG instead of HEIC to my PC?
    a: Go to Settings > Photos and, under "Transfer to Mac or PC", choose Automatic. Photos imported over a USB cable are then converted to JPG. To shoot JPG directly, choose Settings > Camera > Formats > Most Compatible.
  - q: Why are my photos still HEIC after I changed the setting?
    a: The Camera format setting only applies to new photos, and the Transfer setting only affects USB imports. Photos taken before, or downloaded from iCloud as originals, remain HEIC and need converting.
  - q: Do I lose quality converting HEIC to JPG?
    a: Very little at a high quality setting. HEIC to JPG uses 92% quality by default, which is visually indistinguishable from the original for normal viewing and printing.
  - q: Are my photos uploaded when I use an online converter?
    a: With most online converters, yes. TurboConvert converts the photos inside your browser, so your personal pictures never leave your computer or phone.
---

iPhones save photos in **HEIC** format by default. It's efficient, but the moment you move photos to a Windows PC, upload them to a website or send them to someone who isn't on Apple devices, you need **JPG**. This guide shows the fastest way on every device — including converting hundreds of photos at once — and the settings that stop the problem at the source.

(Curious why HEIC exists and whether to keep it? See [HEIC vs JPG: what is a HEIC file](/blog/what-is-heic-format).)

## The quickest option for each situation

| Situation | Best method |
|---|---|
| Hundreds of photos already on your PC | Browser converter with ZIP download |
| A few photos on a Mac | Finder Quick Action "Convert Image" |
| Importing from iPhone to PC via cable | iPhone setting "Transfer to Mac or PC: Automatic" |
| Photos stored in iCloud | Download from iCloud.com as "Most Compatible" |
| You never want HEIC again | Camera > Formats > Most Compatible |
| A website rejects your photo from the phone | Convert on the phone in Safari/Chrome |

## On Windows

### Option 1: convert in your browser (fastest for batches)

1. Open [HEIC to JPG](/heic-to-jpg) in Chrome, Edge or Firefox.
2. Click **Choose files** or drag the HEIC photos — or a selection of hundreds — onto the page (up to 100 MB per file).
3. Adjust **Quality** if you like (92% by default, which keeps the detail).
4. Click **Convert**. A single photo downloads directly; for a batch, click **Download all (ZIP)**.

The conversion runs on your computer, not on a server, so family photos and documents aren't uploaded anywhere. The first use downloads the HEIC decoder, which takes a few seconds.

### Option 2: install the Windows extensions

To *view* HEIC in the Photos app and see thumbnails in File Explorer, install from the Microsoft Store:

- **HEIF Image Extensions** — free.
- **HEVC Video Extensions** — paid in most regions (about $0.99 in the US).

Once they're installed, you can open a photo in Paint and use **File > Save as > JPEG picture**. That works for a handful of images; for a whole holiday album, Option 1 is far quicker.

### Option 3: get JPGs straight from the iPhone

On the iPhone, open **Settings > Photos** and under **Transfer to Mac or PC** choose **Automatic**. When you import with a USB cable (Photos app on Windows, or File Explorer), the iPhone converts photos to JPG on the fly. Choosing **Keep Originals** instead gives you HEIC files.

### Option 4: download from iCloud as JPG

If your photos are in iCloud Photos, sign in at iCloud.com, open Photos, select the pictures and use the download button's options to pick **Most Compatible** rather than *Unmodified Original*. You get JPGs.

## On a Mac

Macs open HEIC natively, but you still need JPGs for many websites and for people on Windows.

### Finder Quick Action (fastest)

1. Select the HEIC files in Finder.
2. Control-click and choose **Quick Actions > Convert Image**.
3. Choose **JPEG** and an image size (*Actual Size* keeps full resolution). Converted copies appear next to the originals.

### Preview

Open the photos in Preview, select all thumbnails in the sidebar (Cmd+A), then **File > Export Selected Images**. Click *Options*, choose **JPEG** as the format and pick a folder.

### Photos app

Select the pictures, choose **File > Export > Export [n] Photos**, set *Photo Kind* to **JPEG** and choose the quality. This is useful when the photos are in your library and not yet in Finder.

## On iPhone and iPad

### Shoot in JPG from now on

**Settings > Camera > Formats > Most Compatible.** New photos are JPG (and videos H.264). The downside: photos take roughly twice the storage, and some video modes such as 4K at 60 fps need *High Efficiency*.

### Convert existing photos

- **Files app:** save the photos to Files, then on recent iOS versions long-press an image and use **Quick Actions > Convert Image** to choose JPEG.
- **Shortcuts:** a shortcut with the *Convert Image* action (format: JPEG) and *Save to Photo Album* or *Save File* converts a selection in one go.
- **Browser:** open [HEIC to JPG](/heic-to-jpg) in Safari, tap **Choose files**, pick the photos from your library and save the results.

Good to know: when you attach a photo in Mail or many messaging apps, iOS usually sends a JPG automatically. Problems mostly arise with file uploads on websites and with cable or cloud transfers.

## On Android (photos received from an iPhone)

If someone sent you HEIC files, recent Android versions can usually display them in the gallery, but many apps and websites can't. Open [HEIC to JPG](/heic-to-jpg) in Chrome, choose the files, convert and download — the same steps as on a computer.

## JPG or PNG?

Choose **JPG** for photos: it's universally accepted and much smaller. Choose **PNG** only if you'll keep editing the image and want to avoid any additional compression, or for screenshots with sharp text — [HEIC to PNG](/heic-to-png) does that, but files are several times larger.

## Converting a whole library: a sensible workflow

If you're moving years of iPhone photos to a PC, don't convert them in one giant batch blindly:

1. **Copy the originals first** to an external drive or a folder named `Originals-HEIC`. They're your backup.
2. **Convert by month or event**, so a failed batch is easy to spot and redo.
3. **Check the dates** in your photo app after conversion. Photo apps usually sort by the "date taken" stored inside the file; if a converter drops that information, pictures end up sorted by the conversion date instead.
4. **Only delete the HEIC files** once you've browsed the JPGs and are happy with them — or keep both, since storage is cheaper than lost memories.

## Troubleshooting

**Converted JPGs are bigger than the HEIC files.** Normal: HEIC compresses about twice as efficiently. If you need small files (email, forms with a 2 MB limit), run them through [Compress Image](/compress-image) or reduce the dimensions with [Resize Image](/resize-image).

**Photos appear rotated after conversion.** Some programs ignore the orientation tag stored in the photo. Open the JPG in another viewer to check; if it is really rotated, fix it with your photo app’s rotate button and save.

**Live Photos came out as a HEIC plus a MOV.** A Live Photo is a still image and a short video. Convert the HEIC for the picture; the MOV is the motion part — to share it widely, use [MOV to MP4](/mov-to-mp4).

**Location data.** Your photos may contain GPS coordinates in their metadata. Check what your converter keeps before posting photos publicly.

**I need a PDF, not JPGs.** Skip the conversion: [JPG to PDF](/jpg-to-pdf) accepts HEIC photos directly. Our guide on [turning photos into a PDF on iPhone and Android](/blog/photo-to-pdf-iphone-android) covers the built-in methods too.
