---
name: PDF to Text
title: PDF to Text — Extract Text From PDF to TXT Free | TurboConvert
description: Extract text from a PDF and save it as a plain .txt file. Fast batch extraction in your browser — no upload, no sign-up, no formatting to clean up.
h1: Convert PDF to text
lead: Pull all the text out of a PDF into a plain .txt file you can paste anywhere — an email, a translator, a CMS or an AI assistant. Extraction runs on your device; nothing is uploaded.
what: your PDF
howTo: extract text from a PDF
steps:
  - Click <strong>Choose files</strong> or drag one or more PDFs into the box above.
  - Click <strong>Convert</strong>. The text of every page is extracted.
  - The .txt file downloads automatically. For several PDFs, download each file or use <strong>Download all (ZIP)</strong>.
limits:
  - Only real text is extracted. Scanned PDFs and photos contain images of text — use <a href="/ocr-pdf">OCR PDF</a> to recognise it.
  - Plain text has no formatting — bold, fonts, images and table borders are dropped. Tables become lines of text separated by spaces.
  - On multi-column pages, the reading order may not always match the visual order.
  - Password-protected PDFs must be unlocked first with <a href="/unlock-pdf">Unlock PDF</a>. Maximum 200 MB per PDF.
faq:
  - q: How do I extract text from a PDF?
    a: Drop the PDF here and click Convert. You get a .txt file with all the text from the document, ready to open in any editor.
  - q: Why is the text file empty?
    a: The PDF is most likely a scan, so its pages are pictures with no text layer. Run it through <a href="/ocr-pdf">OCR PDF</a> to recognise the text.
  - q: Should I use PDF to Text or PDF to Word?
    a: Use PDF to Text when you only need the words — for copying, searching, translating or feeding into another tool. Use <a href="/pdf-to-word">PDF to Word</a> when you want to keep headings, formatting and images and edit the document.
  - q: Can I extract text from several PDFs at once?
    a: Yes. Drop multiple PDFs; each one gives its own .txt file and you can download them all as a ZIP.
  - q: Does it work with any language?
    a: Yes, as long as the PDF contains a real text layer. The text file is saved in UTF-8, so accents and non-Latin scripts are kept.
---

## Why extract plain text?

Copy-pasting from a PDF viewer is tedious on long documents, and it often breaks lines, mixes up headers and footers or misses pages. Extracting the text in one go gives you a clean `.txt` file that every program can open. Useful for:

- **Quoting or reusing content** in an email, report or website.
- **Translation** — paste into a translation tool without layout getting in the way.
- **Search and analysis** — find terms across documents, count words, process text with scripts.
- **AI assistants and summarisers** — many accept plain text more reliably than PDFs.
- **Accessibility** — plain text works with screen readers and simple e-readers.

## Is my PDF digital or scanned?

Open it and try to select a single word with your cursor:

| What happens | Type of PDF | What to use |
|---|---|---|
| You can highlight words and lines | Digital PDF with a text layer | PDF to Text (this tool) |
| The whole page is selected as one block, or nothing at all | Scanned / image PDF | [OCR PDF](/ocr-pdf) |

## Tips

- **Need tables as tables?** Plain text flattens them. [PDF to Excel](/pdf-to-excel) keeps rows and columns.
- **Hyphenated words at line ends** come out as they appear in the PDF; a quick find-and-replace of "-" followed by a line break tidies them up.
- **Only need part of a long PDF?** Extract the relevant pages with [Split PDF](/split-pdf) first.

Your PDF is read inside your browser and never uploaded, so extracting text from contracts or internal reports is safe.

## Common problems and fixes

**The .txt file is empty or nearly empty.** The PDF has no text layer — typical of scans, photos saved as PDF and some faxes. OCR is the only way to get the text out.

**Strange symbols instead of letters.** Some PDFs use fonts with a non-standard internal encoding, so the text cannot be decoded correctly even though it looks fine on screen. OCR on the page usually gives readable text in that case.

**Words or lines appear in an odd order.** A PDF stores text in the order it was drawn, which on complex layouts — columns, sidebars, captions — is not always the reading order. Paragraphs are all there but may need reordering.

**Headers and footers repeat on every page.** Running headers, page numbers and footers are real text in the PDF, so they are extracted too. A find-and-replace in your text editor removes them quickly.

**Only some pages matter.** Long reports produce long text files. Extract the pages you need with Split PDF first, then convert just those.
