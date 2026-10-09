---
name: PDF to Excel
title: PDF to Excel Converter — Extract Tables to XLSX | TurboConvert
description: Convert PDF to Excel free. Extract tables from PDFs into editable XLSX spreadsheets, numbers kept as numbers. In your browser, no upload, no sign-up.
h1: Convert PDF to Excel
lead: Pull the tables out of a PDF into an Excel spreadsheet you can sort, filter and calculate with. The conversion runs on your device — your statements and reports are never uploaded.
what: your PDF
howTo: convert PDF to Excel
steps:
  - Click <strong>Choose files</strong> or drag one or more PDFs into the box above.
  - Click <strong>Convert</strong>. Tables are detected on each page and laid out in rows and columns.
  - The .xlsx file downloads automatically, with one sheet per PDF page. Several files can be saved with <strong>Download all (ZIP)</strong>.
  - Open it in Excel, Google Sheets, Numbers or LibreOffice Calc and check the headers.
limits:
  - Works on digital PDFs (exported from software). Scanned PDFs contain images, not text, and cannot be converted to tables.
  - Complex tables with merged header cells, nested headers or tables spanning several pages may need some cleanup in Excel.
  - Password-protected PDFs must be unlocked first with <a href="/unlock-pdf">Unlock PDF</a>. Maximum 100 MB per PDF.
faq:
  - q: How do I convert a PDF to Excel for free?
    a: Drop your PDF here and click Convert. You get an .xlsx file with the tables of each page — no sign-up, no watermark, no daily limit.
  - q: Will numbers be usable in formulas?
    a: Yes. Values that look like numbers are stored as numbers, so you can sum, sort and chart them straight away. Check columns with unusual formats, like amounts with currency codes.
  - q: Can I convert a bank statement PDF to Excel?
    a: Yes, if it is a digital statement downloaded from your online banking — this is one of the most common uses. Your statement stays in your browser and is never uploaded.
  - q: Why is each page on a separate sheet?
    a: Keeping pages apart makes it easy to check the result against the original. To combine them, copy the rows of each sheet into one sheet in Excel.
  - q: Does it work with scanned PDFs?
    a: No. A scan has no text layer to read. You can extract its text with <a href="/ocr-pdf">OCR PDF</a>, but the table structure has to be rebuilt by hand.
---

## Why convert PDF tables to Excel?

PDFs are where data goes to be read, not used. Retyping figures is slow and error-prone; copy-pasting from a PDF usually dumps a whole table into a single column. Converting to Excel gives you real cells:

- **Bank and credit card statements** — categorise expenses, build a budget, prepare taxes.
- **Invoices and price lists** — import supplier prices or reconcile orders.
- **Financial reports** — reuse published figures in your own analysis.
- **Exported reports** from systems that only offer PDF.

## What converts well

| PDF content | Result |
|---|---|
| Clean tables with one header row | Rows and columns as in the PDF |
| Statements and invoices from banking or accounting software | Usually good — check dates and amounts |
| Merged or multi-level headers | Data is there; headers may need rearranging |
| Scanned pages | Not supported — no text to read |

## Tips for a clean spreadsheet

- **Convert only the pages with tables.** Extract them with [Split PDF](/split-pdf) to avoid sheets full of cover-page text.
- **Check decimal and date formats.** If your PDF uses commas as decimal separators, make sure Excel's regional settings match before calculating.
- **Need the text, not the table?** [PDF to Word](/pdf-to-word) is better for reports that are mostly paragraphs.
- **Going the other way?** Turn a spreadsheet into a shareable document with [Excel to PDF](/excel-to-pdf).

Financial documents are among the most sensitive files you own. With TurboConvert, the conversion happens in your browser — the PDF is never sent to a server.

## Common problems and fixes

**Everything ended up in one column.** The PDF probably lays out its "table" with spaces rather than real columns, or the page is a scan. Check that you can select individual words in the PDF; if not, it is an image and cannot be converted to cells.

**Numbers are left-aligned and won't add up.** Excel treats them as text — often because of a currency symbol, a trailing minus sign or a thousands separator from another locale. Use *Data › Text to Columns* or find-and-replace the symbol, and Excel recognises them as numbers.

**Dates are wrong (day and month swapped).** Your PDF and your spreadsheet use different date conventions (03/04 can be March 4 or April 3). Set the column's date format in Excel to match the source.

**A table continues over several pages.** Each page becomes its own sheet. Copy the rows of the following sheets under the first one to rebuild the full table, then delete the repeated header rows.

**Some header cells are shifted.** Headers that span several columns in the PDF are hard to map to a grid. Move them into place by hand; the data rows underneath are usually aligned correctly.
