---
title: 'Which Online PDF Converters Upload Your Files? We Measured 14'
description: 'We sent a 3 MB test PDF through 14 popular online PDF tools and counted the bytes leaving the browser. 12 uploaded the whole file; 2 processed it locally.'
h1: 'Which online PDF converters upload your files? We measured 14 of them'
permalink: which-online-converters-upload-your-files
published: 2026-10-14
updated: 2026-10-14
tool: compress-pdf
category: pdf
faq:
  - q: 'Is it dangerous to use an online converter that uploads files?'
    a: 'Not necessarily. The established services encrypt transfers and say they delete files after a few hours. But the document does leave your device and is processed on someone else’s server, so for IDs, contracts, payslips or medical records a tool that works locally is the cautious choice.'
  - q: 'How can I check whether a website uploads my file?'
    a: 'Open your browser’s developer tools (F12), go to the Network tab, then select your file on the site. If you see a request whose size is about the size of your file, it was uploaded. Our method below does the same thing automatically by counting every byte the browser sends.'
  - q: 'Why do most converters upload files?'
    a: 'Historically, browsers were too slow for heavy processing, so everything was done on servers. Today WebAssembly lets browsers run the same engines (Ghostscript, FFmpeg, PDF libraries) on the device for many tasks. Server processing remains necessary for some features, and it lets services control their tools and limits.'
  - q: 'Do the converters that stay local work offline?'
    a: 'They need the page to load once, and some download their processing engine on first use. After that, the file itself is processed on your device without being sent anywhere.'
---

Most online file converters work the same way: you pick a file, it travels to the company's servers, gets processed there, and you download the result. Some newer tools do the processing inside your browser instead, so the file never leaves your device. Product pages rarely make the difference obvious, so we measured it.

**Disclosure:** TurboConvert, the site publishing this study, is one of the tools tested and processes files locally. To keep the comparison fair, we publish the full method so anyone can reproduce it, and we report every result, including the other tool that stays local.

## Results

Tested on 14 October 2026 with each site's **Compress PDF** tool (Convertio's converter was used with PDF to JPG, as it has no compression tool on that page).

| Tool | File sent to a server? | Bytes sent | When the upload started |
|---|---|---|---|
| iLovePDF | Yes | 3.15 MB | As soon as the file was selected |
| Smallpdf | Yes | 3.16 MB | As soon as the file was selected |
| PDF24 Tools | Yes | 3.15 MB | As soon as the file was selected |
| Adobe Acrobat online | Yes | 3.15 MB | As soon as the file was selected |
| Sejda | Yes | 3.14 MB | As soon as the file was selected |
| PDF2Go | Yes | 3.15 MB | As soon as the file was selected |
| PDF Candy | Yes | 3.16 MB | As soon as the file was selected |
| Soda PDF | Yes | 3.15 MB | As soon as the file was selected |
| CloudConvert | Yes | 3.14 MB | After clicking Compress |
| FreeConvert | Yes | 3.15 MB | After clicking Compress |
| PDFgear online | Yes | 3.14 MB | After clicking Compress |
| Convertio | Yes | 3.14 MB | After clicking Convert |
| BentoPDF | **No** | 6.6 KB in total | — |
| TurboConvert | **No** | 5 KB in total | — |

The test file weighed 3,135,035 bytes. "Bytes sent" is the data sent to the single server that received the file; the few kilobytes sent by the two local tools are page analytics and similar requests, several hundred times smaller than the file.

## What the results mean

- **12 of the 14 tools uploaded the whole document.** For 8 of them, the upload started the moment the file was selected — before any button was clicked. Selecting a file to "have a look" is already enough for it to leave your device.
- **2 tools processed the file locally.** BentoPDF and TurboConvert processed the PDF in the browser; the only traffic was a few kilobytes unrelated to the file.
- **Uploading isn't a verdict on security.** The large services encrypt transfers and publish deletion policies (often a few hours). This study measures where the file goes, not what happens to it afterwards. But once a file is on a server, you rely on that company's practices — which is why, for sensitive documents, many people prefer local processing.

## Method

1. **Test file:** a 3-page PDF made of random-noise images, so its size (3,135,035 bytes) is easy to recognise in network traffic and can't be shrunk away before sending.
2. **Measurement:** each site was opened in a fresh Chromium browser profile whose traffic went through a local proxy that counts the bytes sent to every destination host.
3. **Steps:** load the tool page, close the cookie banner, reset the counters, select the file, wait 20 seconds and read the counters; then click the site's Compress (or Convert) button, wait up to 60 seconds and read the counters again.
4. **Verdict:** "uploads" when a single host received at least 80% of the file's size; "stays local" when the total sent stayed far below the file size **and** the tool finished processing (a download was offered). Every site in this test fell clearly into one category.
5. **Scope:** one tool per site, one day, one file type. Services change; we'll re-run the test periodically and update this page with the date.

## Check it yourself in 30 seconds

You don't need our setup to verify a tool you use:

1. Open the converter's page and press **F12** (or right-click → *Inspect*), then open the **Network** tab.
2. Select a file of a few megabytes on the site.
3. Sort the requests by size. If one request is about as large as your file, the file was uploaded.

## Converting sensitive files locally

If you'd rather keep a document on your device, use a tool that processes it in the browser, or installed software. On TurboConvert, every tool works this way, including [Compress PDF](/compress-pdf), [PDF to Word](/pdf-to-word), [Sign PDF](/sign-pdf) and [Scan to PDF](/scan-to-pdf).
