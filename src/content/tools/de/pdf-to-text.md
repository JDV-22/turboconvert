---
name: 'PDF in Text'
title: 'PDF in Text umwandeln – Text aus PDF als TXT | TurboConvert'
description: 'Text aus einem PDF extrahieren und als reine .txt-Datei speichern. Schnell und auch für mehrere Dateien – direkt im Browser, ohne Upload und ohne Anmeldung.'
h1: 'PDF in Text umwandeln'
lead: 'Holen Sie den gesamten Text aus einem PDF in eine reine .txt-Datei, die Sie überall einfügen können – in eine E-Mail, ein Übersetzungstool, ein CMS oder einen KI-Assistenten. Die Extraktion läuft auf Ihrem Gerät, nichts wird hochgeladen.'
what: 'Ihr PDF'
howTo: 'Text aus einem PDF extrahieren'
steps:
  - 'Klicken Sie auf <strong>Dateien auswählen</strong> oder ziehen Sie ein oder mehrere PDFs in das Feld oben.'
  - 'Klicken Sie auf <strong>Umwandeln</strong>. Der Text jeder Seite wird extrahiert.'
  - 'Die .txt-Datei wird automatisch heruntergeladen. Bei mehreren PDFs laden Sie jede Datei einzeln oder alle mit <strong>Alle herunterladen (ZIP)</strong>.'
limits:
  - 'Extrahiert wird nur echter Text. Gescannte PDFs und Fotos enthalten Bilder von Text – nutzen Sie dafür <a href="/de/ocr-pdf">OCR PDF</a>.'
  - 'Reiner Text hat keine Formatierung – Fettdruck, Schriften, Bilder und Tabellenrahmen entfallen. Tabellen werden zu Textzeilen mit Leerzeichen.'
  - 'Bei mehrspaltigen Seiten entspricht die Lesereihenfolge nicht immer der optischen Reihenfolge.'
  - 'Passwortgeschützte PDFs müssen zuerst mit <a href="/de/pdf-passwort-entfernen">PDF-Passwort entfernen</a> entsperrt werden. Maximal 200 MB pro PDF.'
faq:
  - q: 'Wie extrahiere ich Text aus einem PDF?'
    a: 'Legen Sie das PDF hier ab und klicken Sie auf Umwandeln. Sie erhalten eine .txt-Datei mit dem gesamten Text des Dokuments, die sich in jedem Editor öffnen lässt.'
  - q: 'Warum ist die Textdatei leer?'
    a: 'Höchstwahrscheinlich ist das PDF ein Scan – die Seiten sind Bilder ohne Textebene. Lassen Sie es durch <a href="/de/ocr-pdf">OCR PDF</a> laufen, um den Text zu erkennen.'
  - q: 'PDF in Text oder PDF in Word – was ist besser?'
    a: 'Nehmen Sie PDF in Text, wenn Sie nur die Wörter brauchen – zum Kopieren, Durchsuchen, Übersetzen oder Weiterverarbeiten. Nehmen Sie <a href="/de/pdf-in-word">PDF in Word</a>, wenn Überschriften, Formatierung und Bilder erhalten bleiben und Sie das Dokument bearbeiten möchten.'
  - q: 'Kann ich Text aus mehreren PDFs gleichzeitig extrahieren?'
    a: 'Ja. Legen Sie mehrere PDFs ab; jedes ergibt eine eigene .txt-Datei, und Sie können alle als ZIP herunterladen.'
  - q: 'Funktioniert das mit jeder Sprache?'
    a: 'Ja, solange das PDF eine echte Textebene enthält. Die Textdatei wird in UTF-8 gespeichert, Umlaute, ß und nicht-lateinische Schriften bleiben also erhalten.'
---

## Warum reinen Text extrahieren?

Kopieren und Einfügen aus einem PDF-Viewer ist bei langen Dokumenten mühsam – oft brechen Zeilen falsch um, Kopf- und Fußzeilen geraten durcheinander oder Seiten fehlen. Den Text in einem Rutsch zu extrahieren, liefert eine saubere `.txt`-Datei, die jedes Programm öffnen kann. Nützlich für:

- **Zitieren oder Weiterverwenden** von Inhalten in einer E-Mail, einem Bericht oder auf einer Website.
- **Übersetzen** – in ein Übersetzungstool einfügen, ohne dass das Layout stört.
- **Suchen und Auswerten** – Begriffe in Dokumenten finden, Wörter zählen, Text mit Skripten verarbeiten.
- **KI-Assistenten und Zusammenfassungs-Tools** – viele kommen mit reinem Text zuverlässiger zurecht als mit PDFs.
- **Barrierefreiheit** – reiner Text funktioniert mit Screenreadern und einfachen E-Readern.

## Ist mein PDF digital oder gescannt?

Öffnen Sie es und versuchen Sie, ein einzelnes Wort mit dem Cursor zu markieren:

| Was passiert | Art des PDFs | Das passende Tool |
|---|---|---|
| Wörter und Zeilen lassen sich markieren | Digitales PDF mit Textebene | PDF in Text (dieses Tool) |
| Die ganze Seite wird als Block markiert – oder gar nichts | Gescanntes PDF / Bild-PDF | [OCR PDF](/de/ocr-pdf) |

## Tipps

- **Tabellen als Tabellen gebraucht?** Reiner Text macht sie flach. [PDF in Excel](/de/pdf-in-excel) behält Zeilen und Spalten.
- **Silbentrennung am Zeilenende** erscheint so wie im PDF; ein schnelles Suchen und Ersetzen von „-“ plus Zeilenumbruch räumt auf.
- **Nur ein Teil eines langen PDFs nötig?** Extrahieren Sie die relevanten Seiten zuerst mit [PDF teilen](/de/pdf-teilen).

Ihr PDF wird in Ihrem Browser gelesen und nie hochgeladen – Text aus Verträgen oder internen Berichten zu extrahieren, ist also unbedenklich.

## Häufige Probleme und Lösungen

**Die .txt-Datei ist leer oder fast leer.** Das PDF hat keine Textebene – typisch für Scans, als PDF gespeicherte Fotos und manche Faxe. Nur Texterkennung (OCR) holt den Text heraus.

**Seltsame Zeichen statt Buchstaben.** Manche PDFs nutzen Schriften mit einer ungewöhnlichen internen Kodierung, sodass sich der Text nicht korrekt auslesen lässt, obwohl er am Bildschirm gut aussieht. OCR auf der Seite liefert in diesem Fall meist lesbaren Text.

**Wörter oder Zeilen stehen in seltsamer Reihenfolge.** Ein PDF speichert Text in der Reihenfolge, in der er gezeichnet wurde – bei komplexen Layouts mit Spalten, Randspalten oder Bildunterschriften ist das nicht immer die Lesereihenfolge. Die Absätze sind vollständig, müssen aber eventuell umsortiert werden.

**Kopf- und Fußzeilen wiederholen sich auf jeder Seite.** Kolumnentitel, Seitenzahlen und Fußzeilen sind echter Text im PDF und werden daher mit extrahiert. Mit Suchen und Ersetzen in Ihrem Texteditor entfernen Sie sie schnell.
