---
layout: ../layouts/ProsePage.astro
title: About TurboConvert — How Our Private File Converter Works
description: Who builds TurboConvert, how conversions run in your browser without uploading your files, which open-source engines we use and how the site is funded.
h1: About TurboConvert
lead: A free file converter built on one simple idea — your files should never have to leave your device.
locale: en
page: about
updated: 2026-10-09
---

## Why we built it

Converting a PDF or a photo should not mean handing a copy of it to a stranger's server. Yet that is how most online converters work: you upload your file, it is processed remotely, and you are asked to trust that it gets deleted.

TurboConvert is an independent project built in France that does the opposite. When you open a tool, the conversion software is downloaded to your browser and runs on your own computer or phone. Your files are read locally, converted locally and saved locally. There is no upload step at all — which is also why conversions start instantly.

## How it works

Modern browsers can run compiled code at near-native speed thanks to **WebAssembly**. We use that to run proven, open-source engines directly in the page:

- **Ghostscript** compresses PDFs — the same engine behind many professional PDF tools.
- **FFmpeg** (via ffmpeg.wasm) converts, compresses and trims audio and video.
- **PDF.js** (Mozilla) renders and reads PDF pages; **pdf-lib** and **qpdf** edit, merge, split and protect them.
- **libheif** decodes iPhone HEIC photos; **Tesseract** recognises text in scanned documents (OCR).
- **docx**, **mammoth**, **docx-preview**, **ExcelJS**, **jsPDF** and **PptxGenJS** read and write Office documents.

Some of these engines are large (FFmpeg is about 31 MB), so the first use of a video or OCR tool takes a little longer. Your browser then keeps the engine in its cache.

## You can check it yourself

Open your browser's developer tools (F12 on Windows, ⌥⌘I on Mac), select the **Network** tab and run a conversion. You will see the page and engine files being loaded, but never your file being sent. You can even disconnect from the internet after the page has loaded and keep converting.

## How TurboConvert is funded

The tools are free, with no account, no daily limit and no watermark. The site is funded by advertising (displayed only with the consent required by law) and may include clearly labelled recommendations of other products. We never sell data, and since we never receive your files, there is nothing about them to sell.

## Honest about limits

Running everything on your device has trade-offs. Very large files depend on your device's memory, and some conversions (for example complex Word layouts or scanned PDFs) can't always be perfect. Each tool page has a **Good to know** section that lists its real limitations. If something doesn't work as described, [tell us](/contact) — we read every message.

## Open-source software

TurboConvert is built on the work of many open-source projects. We use them unmodified, under their respective licenses:

| Project | License | Source |
|---|---|---|
| Ghostscript (WebAssembly build by @jspawn) | AGPL-3.0 | [github.com/jspawn/ghostscript-wasm](https://github.com/jspawn/ghostscript-wasm) · [ghostscript.com](https://ghostscript.com/) |
| FFmpeg / ffmpeg.wasm | LGPL/GPL · MIT | [ffmpeg.org](https://ffmpeg.org/) · [github.com/ffmpegwasm/ffmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm) |
| PDF.js | Apache-2.0 | [github.com/mozilla/pdf.js](https://github.com/mozilla/pdf.js) |
| pdf-lib | MIT | [github.com/Hopding/pdf-lib](https://github.com/Hopding/pdf-lib) |
| qpdf (qpdf-wasm) | Apache-2.0 · ISC | [github.com/qpdf/qpdf](https://github.com/qpdf/qpdf) |
| libheif (libheif-js) | LGPL-3.0 | [github.com/strukturag/libheif](https://github.com/strukturag/libheif) |
| Tesseract.js | Apache-2.0 | [github.com/naptha/tesseract.js](https://github.com/naptha/tesseract.js) |
| docx · mammoth · docx-preview | MIT · BSD-2 · Apache-2.0 | [docx](https://github.com/dolanmiu/docx) · [mammoth](https://github.com/mwilliamson/mammoth.js) · [docx-preview](https://github.com/VolodymyrBaydalka/docxjs) |
| ExcelJS · jsPDF · PptxGenJS · JSZip · fflate · UTIF | MIT | [exceljs](https://github.com/exceljs/exceljs) · [jsPDF](https://github.com/parallax/jsPDF) · [PptxGenJS](https://github.com/gitbrent/PptxGenJS) · [JSZip](https://github.com/Stuk/jszip) · [fflate](https://github.com/101arrowz/fflate) · [UTIF](https://github.com/photopea/UTIF.js) |
| Geist font | SIL OFL 1.1 | [github.com/vercel/geist-font](https://github.com/vercel/geist-font) |

## Contact

Questions, bug reports, partnership or press: [hello@turboconvert.io](mailto:hello@turboconvert.io). Privacy requests: [privacy@turboconvert.io](mailto:privacy@turboconvert.io).
