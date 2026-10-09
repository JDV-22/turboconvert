---
title: "How to Merge PDF Files on Mac: Preview, Finder & Free Tools"
description: "Combine PDFs on a Mac with Preview, a Finder Quick Action or a free browser tool — with the tricks for page order, and fixes when Preview won't cooperate."
h1: How to merge PDF files on a Mac (4 free ways)
permalink: how-to-merge-pdf-on-mac
published: 2026-02-01
updated: 2026-10-09
tool: merge-pdf
category: pdf
faq:
  - q: How do I combine PDF files on a Mac without Preview?
    a: Select the files in Finder, Control-click and choose Quick Actions > Create PDF. You can also use the Shortcuts app with a "Make PDF" action, or a browser tool like <a href="/merge-pdf">Merge PDF</a> that works on the files locally.
  - q: Why can't I drag a PDF into the Preview sidebar?
    a: The sidebar must show thumbnails (View > Thumbnails), and you need to drop the file between or under existing thumbnails, not onto the main page. If the PDF is password-protected or the document is locked, Preview also refuses to insert pages.
  - q: Does Preview overwrite my original PDF when merging?
    a: It can. Preview saves changes into the first file you opened. To keep the original intact, duplicate it first (File > Duplicate) or use File > Export as PDF to save the merged result under a new name.
  - q: How do I control the page order when merging in Finder?
    a: Rename the files with a numeric prefix (01, 02, 03…) before selecting them, so Finder's sorting matches the order you want. Check the result and reorder pages in Preview if needed.
  - q: Can I merge PDFs on iPhone or iPad?
    a: Yes. In the Files app, tap Select, choose the PDFs, tap the More button (three dots) and choose Create PDF. The combined file appears in the same folder.
---

Unlike Windows, macOS can merge PDFs out of the box — in fact in several ways. The catch is that the built-in methods are a little hidden and each has quirks: Preview's drag-and-drop is fiddly, Finder decides the order for you, and it's easy to overwrite the original. Here are the four methods that work, when to use each, and how to fix the usual problems.

## Quick comparison

| Method | Best for | Watch out for |
|---|---|---|
| Finder Quick Action | Combining whole files in seconds | Order follows Finder's sorting |
| Preview sidebar | Inserting pages at precise positions | Fiddly drag & drop, can overwrite the original |
| Shortcuts app | Repeating the same merge often | One-time setup |
| Browser tool | Many files, clear reordering, any Mac | Needs a modern browser |

## Method 1: Finder Quick Action (the fastest)

Since macOS Mojave, Finder can create a PDF from several files in one click:

1. Put the PDFs in the same folder. **Rename them with a number prefix** — `01-cover.pdf`, `02-contract.pdf`, `03-annex.pdf` — so they sort in the order you want.
2. Sort the window by name and select the files (Cmd-click to pick several).
3. Control-click (or right-click) the selection and choose **Quick Actions > Create PDF**.

A new PDF appears in the folder, named after the first file. The same action also works with images: select JPGs or HEIC photos and you get a multi-page PDF.

**Limits:** you can't reorder inside the action, and there are no options for page size. Check the result and fix the order in Preview if needed.

## Method 2: Preview (precise, but fiddly)

Preview is the tool most guides mention. It's powerful once you know the trick:

1. **Make a copy first**: open the first PDF and choose **File > Duplicate**, or plan to use *Export* at the end. Preview saves changes into the open file.
2. Choose **View > Thumbnails** to show page thumbnails in the sidebar.
3. Drag the second PDF from Finder into the sidebar, **between two thumbnails** or below the last one. A line shows where the pages will land. Alternatively, select a thumbnail and use **Edit > Insert > Page from File**.
4. Drag thumbnails to reorder pages; press Delete to remove a page.
5. Choose **File > Export as PDF** and give the merged file a new name.

**Preview's limitations:**

- Dropping a file onto the main page instead of the sidebar opens it separately instead of merging.
- With many files, you have to drag them one by one and scroll a long thumbnail list.
- If you simply close the window, Preview keeps the changes in your original file.
- Password-protected PDFs must be unlocked before their pages can be inserted.

## Method 3: Shortcuts (for merges you repeat)

If you merge the same kind of documents every month — invoices, timesheets — build a shortcut once:

1. Open the **Shortcuts** app and create a new shortcut.
2. In the shortcut's details, enable **Use as Quick Action** and **Finder**, receiving PDFs.
3. Add the action **Make PDF** (it combines the input files), then **Save File** to choose where the result goes.

From now on, select files in Finder, Control-click and run your shortcut from Quick Actions. Shortcuts also exist on iPhone and iPad, so the same logic works there.

## Method 4: a browser tool (clear ordering, any number of files)

When you have many files or want to see the order clearly, a web tool is simpler. Most online mergers upload your documents to their servers; [Merge PDF](/merge-pdf) on TurboConvert doesn't — the merge runs inside Safari, Chrome or Firefox on your Mac.

1. Open [Merge PDF](/merge-pdf) and click **Choose files**, or drag the PDFs from Finder onto the page.
2. Use the arrows to put the files in the right order.
3. Click **Convert**. The merged PDF downloads to your Downloads folder.

Pages are copied as-is: text stays selectable, images aren't recompressed, and mixed page sizes are kept. Bookmarks (the outline) from the original files are not carried over. Files up to 200 MB each are accepted.

## Merging on iPhone and iPad

The **Files** app has the same feature as Finder:

1. Open Files and go to the folder that contains the PDFs (save attachments to Files first if needed).
2. Tap **Select**, then tap the PDFs in the order you want.
3. Tap the **More** button (three dots) and choose **Create PDF**.

The browser method works on iOS too: open [Merge PDF](/merge-pdf) in Safari and pick the files from the Files app.

## Fixing common problems

**The merged PDF is huge.** Merging doesn't add weight, but scans add up quickly. Run the result through [Compress PDF](/compress-pdf) once; see our guide on [making a PDF small enough to email](/blog/compress-pdf-for-email) for the limits of Gmail, Outlook and iCloud.

**One file refuses to merge.** It's probably encrypted. If you know the password, remove it with [Unlock PDF](/unlock-pdf) (or open it in Preview, enter the password and export a copy), then merge.

**Pages are sideways.** Rotate them in Preview (select the thumbnail, press Cmd+R) or use [Rotate PDF](/rotate-pdf) before merging.

**You only need some pages of a file.** Extract them first with [Split PDF](/split-pdf), or delete unwanted pages afterwards with [Organize PDF](/organize-pdf).

**Forms stop working after merging.** Interactive form fields can conflict when two PDFs use the same field names. Fill and flatten the forms (in Preview: *File > Print > Save as PDF*) before merging.

**You need page numbers across the merged document.** Add them at the end with [Add page numbers](/add-page-numbers), so numbering follows the final order.

## Before you send the merged file

A few checks save embarrassing back-and-forth:

- **Scroll through every page** at thumbnail size: a missing or duplicated page is obvious at a glance.
- **Check the file size** in Finder (*Get Info*). Over 20–25 MB, many email services will refuse it.
- **Give it a clear name**, such as `Application-Martin-2026.pdf`, rather than the name of the first file.
- **Protect it if it's sensitive**: our guide to [password-protecting a PDF](/blog/password-protect-pdf) shows how to do it in Preview.

## Which method should you use?

- **Two or three files, whole documents:** Finder Quick Action.
- **Insert a page in the middle of a document:** Preview.
- **The same merge every week:** a Shortcut.
- **Ten files or more, or you want to see and change the order easily:** [Merge PDF](/merge-pdf) in your browser.

All four keep your files on your Mac — none of them uploads anything.
