---
layout: ../../layouts/ProsePage.astro
title: 'Chi siamo — TurboConvert, il convertitore che non carica nulla'
description: 'Chi sviluppa TurboConvert, come le conversioni avvengono nel tuo browser senza caricare i file, quali motori open source usiamo e come si finanzia il sito.'
h1: 'Chi siamo'
lead: 'Un convertitore di file gratuito nato da un’idea semplice — i tuoi file non dovrebbero mai lasciare il tuo dispositivo.'
locale: it
page: about
updated: 2026-10-09
---

## Perché abbiamo creato TurboConvert

Convertire un PDF o una foto non dovrebbe significare consegnarne una copia al server di uno sconosciuto. Eppure è così che funziona la maggior parte dei convertitori online: carichi il file, viene elaborato altrove e ti si chiede di fidarti che venga cancellato.

TurboConvert è un progetto indipendente nato in Francia che fa l’opposto. Quando apri uno strumento, il software di conversione viene scaricato nel tuo browser e gira sul tuo computer o smartphone. I file vengono letti, convertiti e salvati in locale. Non c’è alcun caricamento: è anche per questo che le conversioni partono subito.

## Come funziona

I browser moderni eseguono codice compilato a una velocità vicina a quella dei programmi installati, grazie a **WebAssembly**. Lo usiamo per far girare direttamente nella pagina motori open source collaudati:

- **Ghostscript** comprime i PDF — lo stesso motore di molti strumenti PDF professionali.
- **FFmpeg** (tramite ffmpeg.wasm) converte, comprime e taglia audio e video.
- **PDF.js** (Mozilla) visualizza e legge le pagine PDF; **pdf-lib** e **qpdf** le modificano, uniscono, dividono e proteggono.
- **libheif** decodifica le foto HEIC dell’iPhone; **Tesseract** riconosce il testo nei documenti scansionati (OCR).
- **docx**, **mammoth**, **docx-preview**, **ExcelJS**, **jsPDF** e **PptxGenJS** leggono e scrivono i documenti Office.

Alcuni motori sono pesanti (FFmpeg occupa circa 31 MB), quindi il primo utilizzo di uno strumento video o OCR richiede un po’ più di tempo. Poi il browser conserva il motore nella cache.

## Puoi verificarlo tu stesso

Apri gli strumenti per sviluppatori del browser (F12 su Windows, ⌥⌘I su Mac), seleziona la scheda **Rete** e avvia una conversione. Vedrai caricarsi la pagina e i file del motore, ma mai il tuo file in uscita. Puoi persino disconnetterti da Internet dopo aver caricato la pagina e continuare a convertire.

## Come si finanzia TurboConvert

Gli strumenti sono gratuiti, senza account, senza limiti giornalieri e senza filigrana. Il sito si finanzia con la pubblicità (mostrata solo con il consenso richiesto dalla legge) e può contenere raccomandazioni di altri prodotti, sempre chiaramente segnalate. Non vendiamo dati e, poiché non riceviamo mai i tuoi file, non c’è nulla da vendere che li riguardi.

## Onesti sui limiti

Fare tutto sul tuo dispositivo ha dei compromessi. I file molto grandi dipendono dalla memoria del dispositivo, e alcune conversioni (per esempio impaginazioni Word complesse o PDF scansionati) non possono sempre essere perfette. Ogni pagina strumento ha una sezione **Buono a sapersi** con i suoi limiti reali. Se qualcosa non funziona come descritto, [scrivici](/it/contatti): leggiamo ogni messaggio.

## Software open source

TurboConvert si basa sul lavoro di molti progetti open source, usati senza modifiche e secondo le rispettive licenze:

| Progetto | Licenza | Sorgente |
|---|---|---|
| Ghostscript (build WebAssembly di @jspawn) | AGPL-3.0 | [github.com/jspawn/ghostscript-wasm](https://github.com/jspawn/ghostscript-wasm) · [ghostscript.com](https://ghostscript.com/) |
| FFmpeg / ffmpeg.wasm | LGPL/GPL · MIT | [ffmpeg.org](https://ffmpeg.org/) · [github.com/ffmpegwasm/ffmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm) |
| PDF.js | Apache-2.0 | [github.com/mozilla/pdf.js](https://github.com/mozilla/pdf.js) |
| pdf-lib | MIT | [github.com/Hopding/pdf-lib](https://github.com/Hopding/pdf-lib) |
| qpdf (qpdf-wasm) | Apache-2.0 · ISC | [github.com/qpdf/qpdf](https://github.com/qpdf/qpdf) |
| libheif (libheif-js) | LGPL-3.0 | [github.com/strukturag/libheif](https://github.com/strukturag/libheif) |
| Tesseract.js | Apache-2.0 | [github.com/naptha/tesseract.js](https://github.com/naptha/tesseract.js) |
| docx · mammoth · docx-preview | MIT · BSD-2 · Apache-2.0 | [docx](https://github.com/dolanmiu/docx) · [mammoth](https://github.com/mwilliamson/mammoth.js) · [docx-preview](https://github.com/VolodymyrBaydalka/docxjs) |
| ExcelJS · jsPDF · PptxGenJS · JSZip · fflate · UTIF | MIT | [exceljs](https://github.com/exceljs/exceljs) · [jsPDF](https://github.com/parallax/jsPDF) · [PptxGenJS](https://github.com/gitbrent/PptxGenJS) · [JSZip](https://github.com/Stuk/jszip) · [fflate](https://github.com/101arrowz/fflate) · [UTIF](https://github.com/photopea/UTIF.js) |
| Font Geist | SIL OFL 1.1 | [github.com/vercel/geist-font](https://github.com/vercel/geist-font) |

## Contatti

Domande, segnalazioni di bug, collaborazioni o stampa: [hello@turboconvert.io](mailto:hello@turboconvert.io). Richieste sulla privacy: [privacy@turboconvert.io](mailto:privacy@turboconvert.io).
