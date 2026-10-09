---
name: 'OCR PDF'
title: 'OCR PDF – Texterkennung für Scans und Bilder | TurboConvert'
description: 'Kostenlose OCR-Texterkennung für gescannte PDFs und Bilder (JPG, PNG). 6 Sprachen inkl. Deutsch, Tesseract-Engine, im Browser – ohne Upload und Anmeldung.'
h1: 'OCR – Text aus gescannten PDFs erkennen'
lead: 'Erkennen Sie den Text in gescannten PDFs, Fotos von Dokumenten und Screenshots und erhalten Sie ihn als bearbeitbaren Text. Die Texterkennung läuft mit der Tesseract-Engine auf Ihrem Gerät – Ihre Dateien werden nie hochgeladen.'
what: 'Ihren Scan'
howTo: 'Text aus einem gescannten PDF erkennen'
steps:
  - 'Klicken Sie auf <strong>Datei auswählen</strong> oder ziehen Sie ein gescanntes PDF oder ein Bild (JPG, PNG, WebP) in das Feld oben.'
  - 'Wählen Sie die <strong>Sprache des Dokuments</strong> – Englisch, Französisch, Spanisch, Deutsch, Portugiesisch oder Italienisch.'
  - 'Klicken Sie auf <strong>Umwandeln</strong>. Beim ersten Mal werden die OCR-Engine und die Sprachdaten geladen und von Ihrem Browser zwischengespeichert.'
  - 'Sobald die Erkennung abgeschlossen ist, wird die Textdatei automatisch heruntergeladen.'
limits:
  - 'Sechs Sprachen stehen zur Verfügung: Englisch, Französisch, Spanisch, Deutsch, Portugiesisch und Italienisch.'
  - 'OCR ist langsamer als andere Tools, denn jede Seite wird wie ein Bild gelesen. Lange Dokumente können mehrere Minuten dauern, besonders auf dem Smartphone.'
  - 'Die Genauigkeit hängt vom Scan ab. Sauberer, gerader, gut ausgeleuchteter Drucktext funktioniert am besten; Handschrift, sehr kleine Schrift und unscharfe Fotos liefern schlechte Ergebnisse.'
  - 'Eine Datei pro Durchgang. Maximal 100 MB.'
faq:
  - q: 'Was ist OCR?'
    a: 'OCR (optische Zeichenerkennung, auf Deutsch auch Texterkennung) macht aus einem Bild von Text – einem Scan, Foto oder Screenshot – echten Text, den Sie kopieren, durchsuchen und bearbeiten können. Ohne OCR ist ein gescanntes PDF nur eine Sammlung von Bildern.'
  - q: 'Woran erkenne ich, ob mein PDF OCR braucht?'
    a: 'Versuchen Sie, ein Wort im PDF zu markieren. Geht das nicht oder wird die ganze Seite als Block markiert, ist das PDF gescannt und braucht OCR. Lassen sich Wörter markieren, ist <a href="/de/pdf-in-text">PDF in Text</a> schneller und exakt.'
  - q: 'Wie genau ist die Texterkennung?'
    a: 'Bei sauberen gedruckten Dokumenten wird der Großteil des Textes korrekt erkannt, aber keine OCR ist perfekt. Prüfen Sie Namen, Zahlen und Beträge immer, bevor Sie sich darauf verlassen.'
  - q: 'Kann sie Handschrift lesen?'
    a: 'Nicht zuverlässig. Die Engine ist für Drucktext gemacht; saubere Druckbuchstaben klappen manchmal, Schreibschrift meist nicht.'
  - q: 'Warum dauert es beim ersten Mal länger?'
    a: 'Ihr Browser lädt zuerst die OCR-Engine und die Daten für Ihre Sprache herunter. Danach liegen sie im Cache, spätere Durchläufe starten deutlich schneller.'
  - q: 'Werden meine Scans hochgeladen?'
    a: 'Nein. Die Erkennung läuft vollständig in Ihrem Browser. Scans von Ausweisen, Arztbriefen oder Verträgen verlassen Ihr Gerät nie.'
---

## Gescannte PDFs brauchen OCR

Wenn Sie Papier scannen oder eine Seite fotografieren, ist das Ergebnis ein Bild – auch wenn es als PDF gespeichert ist. Sie können es nicht durchsuchen, nichts daraus kopieren und es nicht in Word umwandeln. OCR analysiert die Formen der Buchstaben und baut den Text wieder auf.

TurboConvert nutzt **Tesseract**, eine weit verbreitete Open-Source-OCR-Engine, die für den Browser kompiliert ist. Die richtige Sprache zu wählen, ist wichtig: Erst dann erkennt die Engine Sonderzeichen wie ä, ö, ü und ß zuverlässig und kennt die häufigen Wörter der Sprache.

## So wird die Erkennung am besten

| Faktor | Gut | Problematisch |
|---|---|---|
| Auflösung | Scans mit 300 dpi, scharfe Handyfotos | Kleine, stark komprimierte oder unscharfe Bilder |
| Ausrichtung | Gerade Seiten | Schiefe oder gedrehte Seiten |
| Kontrast | Schwarzer Text auf weißem Papier | Verblasster Druck, farbiger Hintergrund, Schatten |
| Inhalt | Gedruckter Fließtext | Handschrift, Zierschriften, Text auf Bildern |

Praktische Tipps:

- **Quer liegende Scans zuerst drehen** mit [PDF drehen](/de/pdf-drehen); OCR funktioniert am besten auf aufrechten Seiten.
- **Dokument abfotografieren?** Halten Sie das Smartphone parallel zur Seite, sorgen Sie für gutes Licht und füllen Sie das Bild mit dem Text.
- **Nur einige Seiten nötig?** Extrahieren Sie sie mit [PDF teilen](/de/pdf-teilen) und sparen Sie bei langen Dokumenten Zeit.
- **Wählen Sie die Sprache des Dokuments**, nicht Ihre eigene: Ein englischer Brief, der in Berlin gescannt wurde, wird trotzdem mit Englisch gelesen.

## OCR, PDF in Text oder PDF in Word?

| Ihre Datei | Das passende Tool | Warum |
|---|---|---|
| Gescanntes PDF, Foto einer Seite, Screenshot | OCR PDF | Der Text existiert nur als Pixel |
| Digitales PDF, Sie brauchen nur die Wörter | [PDF in Text](/de/pdf-in-text) | Exakter Text, sofort, ohne Erkennungsfehler |
| Digitales PDF, Sie möchten mit Formatierung bearbeiten | [PDF in Word](/de/pdf-in-word) | Behält Überschriften, Formatvorlagen und Bilder |

Der erkannte Text lässt sich direkt in eine E-Mail oder ein Dokument einfügen. Brauchen Sie ein formatiertes Dokument, fügen Sie ihn in Word oder Google Docs ein.

## Häufige Probleme und Lösungen

**Das Ergebnis ist voller unsinniger Zeichen.** Wahrscheinlich ist die Seite gedreht, die Auflösung sehr niedrig oder die falsche Sprache gewählt. Richten Sie die Seite aus, nehmen Sie einen schärferen Scan und wählen Sie die Sprache des Dokuments.

**Einzelne Wörter sind falsch.** Achten Sie auf ähnlich aussehende Zeichen – „l“ und „1“, „O“ und „0“, „rn“ und „m“ sind klassische OCR-Verwechslungen, besonders bei kleiner Schrift. Ein kurzes Korrekturlesen behebt sie.

**Spalten werden vermischt.** Bei mehrspaltigen Seiten wie Zeitungsartikeln können Zeilen benachbarter Spalten zusammengeführt werden. Schneiden Sie jede Spalte als eigenes Bild zu, bevor Sie die Texterkennung starten.

**Es dauert lange.** Jede Seite wird einzeln analysiert. Verarbeiten Sie nur die Seiten, die Sie wirklich brauchen, und nutzen Sie für Dokumente mit mehr als ein paar Dutzend Seiten lieber einen Computer.
