---
name: Flatten PDF
title: Flatten PDF Online Free — Lock Form Fields
description: Flatten a filled-in PDF form so its answers become fixed page content that can no longer be edited. Free, batch, runs in your browser — no upload.
h1: Flatten a PDF form
lead: Turn the fields of a filled-in PDF form into ordinary page content, so the answers print and display the same everywhere and can't be changed anymore. Nothing is uploaded.
what: your PDF
howTo: flatten a PDF
steps:
  - Click <strong>Choose files</strong> or drop one or more PDFs into the box.
  - Click <strong>Convert</strong>. Each flattened PDF downloads with "-flattened" added to its name.
  - Open it to check — the fields are gone and their values are now part of the page.
limits:
  - Flattening is permanent, so keep the original if you may need to change an answer later.
  - Only form fields are flattened. Comments and other annotations are left as they are.
  - Flattening locks the answers in the form, but anyone with a PDF editor can still add content on top. To restrict editing, also <a href="/protect-pdf">protect the PDF</a>.
  - Password-protected PDFs must be unlocked first. Dynamic XFA forms are not supported.
faq:
  - q: What does flattening a PDF do?
    a: It converts interactive form fields (text boxes, checkboxes, drop-downs) into regular page content. The values you typed stay visible exactly where they were, but there are no fields left to click or edit.
  - q: Why flatten a form before sending it?
    a: Some portals and printers don't display field values reliably, and a fillable form can be modified by the recipient. A flattened form looks the same in every viewer and its answers can't be changed by accident.
  - q: Will my PDF look different?
    a: No. The field values are drawn where they were displayed. Only the blue field highlights or borders that some viewers add disappear.
  - q: Is my PDF uploaded?
    a: No. Flattening runs in your browser with the open-source pdf-lib library, so your documents stay on your device.
---

## When to flatten a PDF

- **Before submitting a filled-in form** — tax forms, applications, rental files — so the values display identically on the recipient's side and can't be edited.
- **Before printing**, when a printer driver or viewer skips field values.
- **Before merging** filled forms into one file, to avoid field-name clashes between documents.

Need to fill the form first? Use [Fill PDF form](/fill-pdf-form), then flatten the result here. To add a signature, use [Sign PDF](/sign-pdf).

## Private by design

The flattening is done in your browser tab: the PDF is read from your disk, its fields are converted and the new file is written to your downloads. Nothing is sent to a server.
