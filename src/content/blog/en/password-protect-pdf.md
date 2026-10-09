---
title: "How to Password Protect a PDF for Free (Windows, Mac, Phone)"
description: "Add a password to a PDF for free with Preview, Word, LibreOffice or a browser tool. Open vs permissions passwords, AES-256, and how to share it safely."
h1: How to password-protect a PDF for free
permalink: password-protect-pdf
published: 2026-10-09
updated: 2026-10-09
tool: protect-pdf
category: pdf
faq:
  - q: How do I put a password on a PDF without Adobe Acrobat?
    a: On a Mac, use Preview (File > Export > Permissions). On Windows, export from Word with "Encrypt the document with a password", use LibreOffice's PDF export, or use a browser tool like <a href="/protect-pdf">Protect PDF</a>, which encrypts the file locally with AES-256.
  - q: Can a password-protected PDF be cracked?
    a: A PDF encrypted with AES-256 and a long, unique password is not realistically crackable. Short or common passwords can be guessed by brute-force software, and old RC4 encryption is weak. Restrictions-only passwords (no open password) offer very little protection.
  - q: How do I remove a password from a PDF?
    a: If you know the password, open the PDF and save an unprotected copy, or use <a href="/unlock-pdf">Unlock PDF</a>. If you have lost the password of a file that requires one to open, no legitimate tool can simply remove it — ask the sender for an unprotected copy.
  - q: Does the recipient need special software to open it?
    a: No. Any standard PDF reader — Adobe Reader, Preview, Edge, Chrome, the iPhone and Android viewers — asks for the password and opens the file normally.
  - q: Is it safe to use an online tool to protect a PDF?
    a: With server-based tools, the unencrypted file and often the password are sent to a third party, which defeats part of the purpose. A tool that works in your browser without uploading, like TurboConvert's, keeps both on your device.
---

Emailing a payslip, a tax return, a medical report or a signed contract? A password turns a PDF that anyone could open into one only the intended recipient can read — even if the email is forwarded, the laptop is lost or the file sits in a shared folder. You don't need a paid Acrobat subscription: every computer can do it for free. Here's how, plus what the different kinds of PDF passwords really protect.

## Two kinds of PDF passwords

PDF security has two separate passwords, and mixing them up is the most common mistake:

| | Open password ("user password") | Permissions password ("owner password") |
|---|---|---|
| What it does | The file can't be opened or read without it | Restricts printing, copying or editing in compliant readers |
| Encryption | Content is encrypted | Content is encrypted, but readable without a password |
| Real protection | **Strong**, with AES-256 and a good password | **Weak** — many tools ignore or remove restrictions |
| Use it for | Confidential documents | Discouraging casual copying or editing |

If the goal is confidentiality, you need an **open password**. Permission restrictions alone are a courtesy, not a lock.

## Encryption strength: look for AES-256

PDF encryption has evolved. Old 40-bit and 128-bit RC4 encryption can be broken quickly with freely available tools. Modern PDFs use **AES-256**, which, combined with a long password, can't be brute-forced in any realistic time. Most current tools default to AES; if you see an option for "compatibility with Acrobat 5" or RC4, avoid it.

The weak link is almost always the password itself. `Smith2026` falls to a dictionary attack in minutes; `river-planet-seven-lantern` does not.

## Method 1: in your browser, on any device

[Protect PDF](/protect-pdf) encrypts the file with AES-256 directly in your browser — the document and the password are never sent anywhere.

1. Open [Protect PDF](/protect-pdf) and click **Choose file** (PDFs up to 200 MB).
2. Type a **Password**. Use a passphrase of four or more random words, or a password-manager-generated string.
3. Click **Convert**. The encrypted PDF downloads automatically.
4. Open the downloaded file to check that it asks for the password before you send it.

This works the same on Windows, Mac, Chromebook, iPhone and Android, which is handy on phones where there's no built-in option.

## Method 2: Mac, with Preview

Preview has a proper encryption option:

1. Open the PDF in Preview and choose **File > Export**.
2. Give the copy a new name if you want to keep an unprotected original.
3. Click **Permissions**, tick the option to require a password to open the document, then type and confirm it.
4. Optionally set an owner password and choose what's allowed without it (printing, copying, editing).
5. Click **Apply**, then **Save**.

To change the password later, open the file, enter the password and use **File > Edit Permissions**.

## Method 3: Windows, from Word

Windows has no tool to encrypt an existing PDF, but if your document starts in Word, you can encrypt it while exporting:

1. In Word for Windows, choose **File > Save As** (or *Save a Copy*) and pick **PDF** as the file type.
2. Click **Options**, tick **Encrypt the document with a password**, and click OK.
3. Enter the password twice and save.

For a PDF you received (not made in Word), use a browser tool or LibreOffice instead: opening a PDF in Word converts it, and the layout may shift.

## Method 4: LibreOffice (free, Windows, Mac, Linux)

LibreOffice can encrypt anything it exports to PDF: **File > Export as PDF > Security** tab, then **Set passwords**. You can set an open password and a permissions password. It's ideal for documents written in LibreOffice Writer or Calc; for existing PDFs, LibreOffice opens them in Draw, which may alter complex layouts.

## iPhone and Android

Neither iOS nor Android offers a system-wide "encrypt PDF" option for existing files. The simplest free approach is to open [Protect PDF](/protect-pdf) in Safari or Chrome, pick the file from Files or Google Drive, and download the encrypted copy.

## How to share the password safely

Encryption is useless if the password travels with the file:

- **Never put the password in the same email** as the attachment. Send it by text message, phone call or a messaging app.
- **Agree on a password in advance** for recurring exchanges (an accountant, a lawyer), and store it in a password manager.
- **Use a different password per recipient** when the documents are sensitive.
- **Don't reuse** your email or bank password.

## Removing or changing a password

If you know the password and want an unprotected copy — for example to merge, compress or edit the file — use [Unlock PDF](/unlock-pdf): enter the current password and download a decrypted copy. It also removes restrictions-only (owner) passwords. It does **not** crack unknown passwords; nothing legitimate does for AES-256 with a strong password. If you've lost it, ask the sender for a new copy.

Note that most tools, including compression and merging, need an unlocked file. The usual order is: **merge → compress → protect**, protecting last.

## Other ways to protect a document

| Situation | Better option |
|---|---|
| Sending one confidential PDF by email | Open password with AES-256 |
| Stopping casual edits of a form or brochure | Permissions password (but don't rely on it) |
| Proving a document hasn't been modified | A digital signature with a certificate |
| Marking a copy as "Draft" or "Copy for X" | A visible watermark with [Watermark PDF](/watermark-pdf) |
| Sharing many files with a team | An access-controlled cloud folder |

A watermark and a password combine well: the watermark identifies the copy, the password stops strangers from reading it.

## Common mistakes to avoid

- **Protecting only with restrictions.** A file with a permissions password but no open password can be read by anyone — and the restrictions are easy to strip.
- **Losing the password.** Store it in a password manager. If the only copy of a document is encrypted and the password is gone, the content is effectively gone too.
- **Encrypting before editing.** Most tools can't merge, compress or convert an encrypted PDF. Finish the document, then protect it.
- **Assuming a password hides the file name.** The name and size remain visible. Don't put sensitive details like a client's full name and diagnosis in the file name.

## Quick recap

1. For confidentiality, use an **open password**, not just restrictions.
2. Make sure the tool uses **AES-256**.
3. Choose a **long passphrase** and send it by another channel.
4. Protect **last**, after merging and compressing.
5. Keep an unprotected original in a safe place, in case the password is lost.

Building a full document pack? See our guides on [merging PDFs on a Mac](/blog/how-to-merge-pdf-on-mac) and [making a PDF small enough to email](/blog/compress-pdf-for-email).
