---
name: "Compress PDF to 100 KB"
title: "Compress PDF to 100 KB Online — Free, No Upload"
description: "Make a PDF smaller than 100 KB automatically. Pick the size limit, we find the best quality that fits — in your browser, no upload, free."
h1: "Compress a PDF to 100 KB"
lead: "Need a PDF under 100 KB for a form or an email? Choose the limit and TurboConvert finds the best quality that fits — on your device, without uploading your file."
what: "your PDF"
howTo: "compress a PDF to 100 KB"
steps:
  - "Click <strong>Choose files</strong> or drop your PDF into the box."
  - "Check that <strong>Maximum file size</strong> is set to 100 KB (you can pick another limit)."
  - "Click <strong>Convert</strong>. TurboConvert tries several compression levels and keeps the best-looking result under 100 KB; it downloads automatically."
limits:
  - "If a document has many image-heavy pages, 100 KB may be impossible without making it unreadable. You then get the smallest version we could make — split the PDF or remove pages and try again."
  - "Text, links and bookmarks are kept; images are resampled to a lower resolution, which is what saves space."
  - "Password-protected PDFs must be unlocked first with <a href=\"/unlock-pdf\">Unlock PDF</a>."
faq:
  - q: "How does the 100 KB target work?"
    a: "TurboConvert compresses your PDF with Ghostscript at a balanced setting, then tries progressively stronger image downsampling until the file fits under 100 KB. If the file is already well under the limit, it uses a higher-quality setting instead."
  - q: "What can fit in 100 KB?"
    a: "As a rule of thumb, roughly 2–5 pages of text-only content, or a single scanned page in grayscale. Text and vector graphics are tiny; scanned or photographed pages are what take space."
  - q: "My PDF is still bigger than 100 KB. What can I do?"
    a: "Remove pages you don’t need with <a href=\"/delete-pdf-pages\">Delete PDF pages</a> or <a href=\"/split-pdf\">Split PDF</a>, or re-scan in grayscale at 150 dpi. Very large scans may need to be sent in several parts."
  - q: "Is my document uploaded anywhere?"
    a: "No. The compression engine runs inside your browser, so ID documents, payslips or certificates never leave your device."
---

## Why 100 KB?

Very small caps like 100 KB are typical of online application forms (exams, recruitment, public services) that expect a single scanned certificate or ID document. When a website rejects your file for being too large, the usual advice is to “compress it” — but most compressors give you a single result and leave you guessing whether it will fit. Here you set the limit, and the tool aims for it.

## How the size target is reached

A PDF is made of text, fonts, vector drawings and images. Text and fonts compress extremely well, so they rarely matter. **Images — especially scans and photos — are what make a PDF heavy.** To reach 100 KB, TurboConvert lowers the resolution of the images step by step (300, 150, 96, 72 then 50 dpi) and stops at the first result that fits. You keep the sharpest version possible for that size.

## Tips for small PDFs

- If you are sending a scan, keep only the page that is required, and prefer a grayscale scan at 150 dpi — color photos of documents are the main reason a PDF can’t get under 100 KB.
- Photos of documents taken with a phone are much heavier than scans: if you can, use a scanner app that crops and converts to black and white.
- Need several files under the limit? Drop them all at once — each is compressed separately and you can download everything as a ZIP.
- Want to choose the compression level yourself instead? Use the regular [Compress PDF](/compress-pdf) tool.
