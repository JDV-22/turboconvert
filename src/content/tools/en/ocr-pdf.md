---
name: OCR PDF
title: OCR PDF — Extract Text From Scanned PDFs & Images | TurboConvert
description: Free OCR to extract text from scanned PDFs and images (JPG, PNG). 6 languages, Tesseract engine, runs in your browser — no upload, no sign-up.
h1: OCR — extract text from scanned PDFs
lead: Recognise the text in scanned PDFs, photos of documents and screenshots, and get it as editable text. OCR runs on your device with the Tesseract engine — your files are never uploaded.
what: your scan
howTo: extract text from a scanned PDF
steps:
  - Click <strong>Choose file</strong> or drag a scanned PDF or an image (JPG, PNG, WebP) into the box above.
  - Choose the <strong>Document language</strong> — English, French, Spanish, German, Portuguese or Italian.
  - Click <strong>Convert</strong>. The first time, the OCR engine and language data are downloaded and cached by your browser.
  - When recognition is finished, the text file downloads automatically.
limits:
  - Six languages are available — English, French, Spanish, German, Portuguese and Italian.
  - OCR is slower than other tools — it reads every page like an image. Long documents can take several minutes, especially on phones.
  - Accuracy depends on the scan. Clean, straight, well-lit printed text works best; handwriting, very small print and blurry photos give poor results.
  - One file at a time. Maximum 100 MB.
faq:
  - q: What is OCR?
    a: OCR (optical character recognition) turns a picture of text — a scan, a photo or a screenshot — into real text you can copy, search and edit. Without it, a scanned PDF is just a set of images.
  - q: How do I know if my PDF needs OCR?
    a: Try to select a word in the PDF. If you can't, or the whole page highlights as one block, the PDF is scanned and needs OCR. If you can select words, <a href="/pdf-to-text">PDF to Text</a> is faster and exact.
  - q: How accurate is the OCR?
    a: On clean printed documents, most text is recognised correctly, but no OCR is perfect. Always proofread names, numbers and amounts before relying on them.
  - q: Can it read handwriting?
    a: Not reliably. The engine is built for printed text; neat block capitals sometimes work, but cursive handwriting usually doesn't.
  - q: Why is it slow the first time?
    a: Your browser first downloads the OCR engine and the data for your language. They are cached afterwards, so later runs start much faster.
  - q: Are my scans uploaded?
    a: No. Recognition runs entirely in your browser. Scans of IDs, medical letters or contracts never leave your device.
---

## Scanned PDFs need OCR

When you scan paper or photograph a page, the result is an image — even if it is saved as a PDF. You cannot search it, copy from it or convert it to Word. OCR analyses the shapes of the letters and rebuilds the text.

TurboConvert uses **Tesseract**, a widely used open-source OCR engine, compiled to run in your browser. Choosing the right language matters: it lets the engine recognise accented characters (é, ñ, ü, ç…) and common words of that language.

## Get the best recognition

| Factor | Good | Problematic |
|---|---|---|
| Resolution | 300 dpi scans, sharp phone photos | Small, compressed or blurry images |
| Alignment | Straight pages | Skewed or rotated pages |
| Contrast | Black text on white paper | Faded print, coloured backgrounds, shadows |
| Content | Printed body text | Handwriting, decorative fonts, text over images |

Practical tips:

- **Rotate sideways scans first** with [Rotate PDF](/rotate-pdf); OCR works best on upright pages.
- **Photographing a document?** Hold the phone parallel to the page, in good light, and fill the frame with the text.
- **Only need a few pages?** Extract them with [Split PDF](/split-pdf) to save time on long documents.
- **Choose the document's language**, not your own: an English letter scanned in Paris should still be read with English.

## What next?

The recognised text is ready to paste into an email or a document. If you need a formatted document, paste it into Word or Google Docs. If your PDF turns out to have real text after all, [PDF to Word](/pdf-to-word) keeps the full layout and formatting.

## OCR, PDF to Text or PDF to Word?

| Your file | Best tool | Why |
|---|---|---|
| Scanned PDF, photo of a page, screenshot | OCR PDF | The text only exists as pixels |
| Digital PDF, you need the words only | [PDF to Text](/pdf-to-text) | Exact text, instant, no recognition errors |
| Digital PDF, you want to edit with formatting | PDF to Word | Keeps headings, styles and images |

## Common problems and fixes

**The result is full of nonsense characters.** The page is probably rotated, very low resolution, or the wrong language is selected. Straighten the page, use a sharper scan and pick the document's language.

**Some words are wrong.** Check for look-alike characters — "l" and "1", "O" and "0", "rn" and "m" are classic OCR confusions, especially in small print. A quick proofread fixes them.

**Columns are mixed together.** On multi-column pages such as newspapers, lines from neighbouring columns can be joined. Crop each column into its own image before running OCR.

**It is taking a long time.** Every page is analysed individually. Process the pages you actually need, and prefer a computer for documents of more than a few dozen pages.
