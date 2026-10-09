---
layout: ../../layouts/ProsePage.astro
title: 'Über TurboConvert – ein Dateikonverter, der nichts hochlädt'
description: 'Wer hinter TurboConvert steht, wie die Umwandlung ohne Upload im Browser läuft, welche Open-Source-Engines wir nutzen und wie sich die Website finanziert.'
h1: 'Über TurboConvert'
lead: 'Ein kostenloser Dateikonverter, der auf einer einfachen Idee beruht: Ihre Dateien sollten Ihr Gerät nie verlassen müssen.'
locale: de
page: about
updated: 2026-10-09
---

## Warum es TurboConvert gibt

Wer ein PDF oder ein Foto umwandeln möchte, sollte dafür keine Kopie an den Server eines Unbekannten schicken müssen. Genau so arbeiten aber die meisten Online-Konverter: Sie laden Ihre Datei hoch, sie wird aus der Ferne verarbeitet, und Sie müssen darauf vertrauen, dass sie anschließend gelöscht wird.

TurboConvert ist ein unabhängiges Projekt aus Frankreich, das es umgekehrt macht. Wenn Sie ein Tool öffnen, wird die Konvertierungssoftware in Ihren Browser geladen und läuft auf Ihrem eigenen Computer oder Smartphone. Ihre Dateien werden lokal gelesen, lokal umgewandelt und lokal gespeichert. Einen Upload gibt es schlicht nicht – deshalb startet die Umwandlung auch sofort.

## So funktioniert es

Moderne Browser führen dank **WebAssembly** kompilierten Code nahezu so schnell aus wie installierte Programme. Damit lassen wir bewährte Open-Source-Engines direkt in der Seite laufen:

- **Ghostscript** komprimiert PDFs – dieselbe Engine, die in vielen professionellen PDF-Programmen steckt.
- **FFmpeg** (über ffmpeg.wasm) wandelt Audio und Video um, komprimiert und schneidet sie.
- **PDF.js** (Mozilla) stellt PDF-Seiten dar und liest sie; **pdf-lib** und **qpdf** bearbeiten, verbinden, teilen und schützen sie.
- **libheif** dekodiert HEIC-Fotos vom iPhone; **Tesseract** erkennt Text in gescannten Dokumenten (OCR).
- **docx**, **mammoth**, **docx-preview**, **ExcelJS**, **jsPDF** und **PptxGenJS** lesen und schreiben Office-Dokumente.

Einige dieser Engines sind groß (FFmpeg hat rund 31 MB), deshalb dauert der erste Einsatz eines Video- oder OCR-Tools etwas länger. Danach hält Ihr Browser die Engine im Cache.

## Prüfen Sie es selbst

Öffnen Sie die Entwicklertools Ihres Browsers (F12 unter Windows, ⌥⌘I auf dem Mac), wechseln Sie zum Tab **Netzwerk** und starten Sie eine Umwandlung. Sie sehen, wie die Seite und die Engine-Dateien geladen werden – aber nie, dass Ihre Datei gesendet wird. Sie können sogar die Internetverbindung trennen, sobald die Seite geladen ist, und weiter umwandeln.

## Wie sich TurboConvert finanziert

Die Tools sind kostenlos, ohne Konto, ohne Tageslimit und ohne Wasserzeichen. Die Website finanziert sich über Werbung (die nur mit der gesetzlich vorgeschriebenen Einwilligung angezeigt wird) und kann deutlich gekennzeichnete Empfehlungen für andere Produkte enthalten. Wir verkaufen keine Daten – und da wir Ihre Dateien nie erhalten, gibt es darüber auch nichts zu verkaufen.

## Ehrlich bei den Grenzen

Alles auf Ihrem Gerät zu verarbeiten, hat auch Nachteile. Sehr große Dateien hängen vom Arbeitsspeicher Ihres Geräts ab, und manche Umwandlungen (etwa komplexe Word-Layouts oder gescannte PDFs) gelingen nicht immer perfekt. Jede Tool-Seite hat einen Abschnitt **Gut zu wissen**, der die tatsächlichen Einschränkungen nennt. Wenn etwas nicht wie beschrieben funktioniert, [schreiben Sie uns](/de/kontakt) – wir lesen jede Nachricht.

## Open-Source-Software

TurboConvert baut auf der Arbeit zahlreicher Open-Source-Projekte auf. Wir nutzen sie unverändert und unter ihren jeweiligen Lizenzen:

| Projekt | Lizenz | Quelle |
|---|---|---|
| Ghostscript (WebAssembly-Build von @jspawn) | AGPL-3.0 | [github.com/jspawn/ghostscript-wasm](https://github.com/jspawn/ghostscript-wasm) · [ghostscript.com](https://ghostscript.com/) |
| FFmpeg / ffmpeg.wasm | LGPL/GPL · MIT | [ffmpeg.org](https://ffmpeg.org/) · [github.com/ffmpegwasm/ffmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm) |
| PDF.js | Apache-2.0 | [github.com/mozilla/pdf.js](https://github.com/mozilla/pdf.js) |
| pdf-lib | MIT | [github.com/Hopding/pdf-lib](https://github.com/Hopding/pdf-lib) |
| qpdf (qpdf-wasm) | Apache-2.0 · ISC | [github.com/qpdf/qpdf](https://github.com/qpdf/qpdf) |
| libheif (libheif-js) | LGPL-3.0 | [github.com/strukturag/libheif](https://github.com/strukturag/libheif) |
| Tesseract.js | Apache-2.0 | [github.com/naptha/tesseract.js](https://github.com/naptha/tesseract.js) |
| docx · mammoth · docx-preview | MIT · BSD-2 · Apache-2.0 | [docx](https://github.com/dolanmiu/docx) · [mammoth](https://github.com/mwilliamson/mammoth.js) · [docx-preview](https://github.com/VolodymyrBaydalka/docxjs) |
| ExcelJS · jsPDF · PptxGenJS · JSZip · fflate · UTIF | MIT | [exceljs](https://github.com/exceljs/exceljs) · [jsPDF](https://github.com/parallax/jsPDF) · [PptxGenJS](https://github.com/gitbrent/PptxGenJS) · [JSZip](https://github.com/Stuk/jszip) · [fflate](https://github.com/101arrowz/fflate) · [UTIF](https://github.com/photopea/UTIF.js) |
| Schriftart Geist | SIL OFL 1.1 | [github.com/vercel/geist-font](https://github.com/vercel/geist-font) |

## Kontakt

Fragen, Fehlermeldungen, Kooperationen oder Presse: [hello@turboconvert.io](mailto:hello@turboconvert.io). Anfragen zum Datenschutz: [privacy@turboconvert.io](mailto:privacy@turboconvert.io).
