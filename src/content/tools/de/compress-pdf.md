---
name: 'PDF verkleinern'
title: 'PDF verkleinern & komprimieren – kostenlos | TurboConvert'
description: 'PDF verkleinern für E-Mail und Upload-Formulare: drei Komprimierungsstufen mit Ghostscript, direkt im Browser. Kein Upload, keine Anmeldung, kein Wasserzeichen.'
h1: 'PDF verkleinern'
lead: 'Machen Sie Ihr PDF kleiner, damit es durch E-Mail-Limits und Upload-Formulare passt – und trotzdem gut lesbar bleibt. Die Komprimierung läuft mit Ghostscript auf Ihrem Gerät, Ihre Dateien werden nie hochgeladen.'
what: 'Ihr PDF'
howTo: 'PDF verkleinern'
steps:
  - 'Klicken Sie auf <strong>Dateien auswählen</strong> oder ziehen Sie ein oder mehrere PDFs in das Feld oben.'
  - 'Wählen Sie eine Stufe bei <strong>Komprimierung</strong> – <em>Empfohlen</em> passt für die meisten Dokumente.'
  - 'Klicken Sie auf <strong>Umwandeln</strong>. Beim ersten Mal lädt Ihr Browser die Komprimierungs-Engine (ca. 16 MB); danach liegt sie im Cache.'
  - 'Das verkleinerte PDF wird automatisch heruntergeladen, die Ersparnis wird angezeigt. Bei mehreren Dateien nutzen Sie <strong>Alle herunterladen (ZIP)</strong>.'
limits:
  - 'Wie viel sich einsparen lässt, hängt vom Inhalt ab. Scans und bildlastige Dateien schrumpfen am stärksten; reine Text-PDFs sind meist schon kompakt und werden kaum kleiner.'
  - 'Würde die Komprimierung die Datei nicht verkleinern, behält TurboConvert Ihr Original, statt Ihnen eine größere Datei zu liefern.'
  - 'Passwortgeschützte PDFs müssen zuerst mit <a href="/de/pdf-passwort-entfernen">PDF-Passwort entfernen</a> entsperrt werden.'
  - 'Maximal 200 MB pro PDF. Große Dateien brauchen auf dem Smartphone länger; für umfangreiche Scans ist ein Computer schneller.'
faq:
  - q: 'Wie kann ich ein PDF kostenlos verkleinern?'
    a: 'Legen Sie das PDF oben ab, lassen Sie die Stufe Empfohlen eingestellt und klicken Sie auf Umwandeln. Die komprimierte Kopie wird sofort heruntergeladen – ohne Konto, ohne Tageslimit und ohne Wasserzeichen.'
  - q: 'Verliert das PDF beim Komprimieren an Qualität?'
    a: 'Die Komprimierung senkt vor allem die Auflösung der Bilder im PDF; Text und Vektorgrafiken bleiben auf jeder Stufe scharf. Nehmen Sie Leicht für Dokumente zum Ausdrucken, Empfohlen für Bildschirm und E-Mail und Stark nur, wenn die Größe am wichtigsten ist.'
  - q: 'Wie wird ein PDF klein genug für eine E-Mail?'
    a: 'Gmail und viele andere Mail-Dienste begrenzen Anhänge auf etwa 20–25 MB, manche Firmenserver auf weniger. Versuchen Sie zuerst Empfohlen; ist die Datei noch zu groß, nehmen Sie Stark oder teilen Sie sie mit <a href="/de/pdf-teilen">PDF teilen</a> in mehrere Teile.'
  - q: 'Warum ist mein PDF kaum kleiner geworden?'
    a: 'Ein PDF, das überwiegend Text enthält, ist bereits effizient – da gibt es wenig zu holen. Große Einsparungen bringen gescannte Seiten und Fotos, die oft um mehr als die Hälfte schrumpfen.'
  - q: 'Kann ich ein PDF auf eine bestimmte Größe wie 1 MB oder 200 KB verkleinern?'
    a: 'Eine Zielgröße lässt sich nicht eintippen, aber über die Stufe kommen Sie nah heran. Beginnen Sie mit Empfohlen und versuchen Sie bei Bedarf Stark. Bei hartnäckigen Dateien hilft es, überflüssige Seiten mit <a href="/de/pdf-seiten-sortieren">PDF-Seiten sortieren</a> zu löschen.'
  - q: 'Wird mein PDF zum Komprimieren hochgeladen?'
    a: 'Nein. Die Ghostscript-Engine ist zu WebAssembly kompiliert und läuft in Ihrem Browser, Ihr PDF verlässt also nie Ihr Gerät. Sobald die Engine geladen ist, können Sie sogar die Internetverbindung trennen.'
---

## Warum manche PDFs so groß sind

Die Größe eines PDFs ergibt sich fast vollständig aus dem, was darin eingebettet ist:

- **Gescannte Seiten.** Jede gescannte Seite ist ein ganzseitiges Foto. Ein 20-seitiges Dokument, farbig mit 300 oder 600 dpi gescannt, wiegt schnell 20–50 MB.
- **Fotos und Screenshots.** In Word oder PowerPoint eingefügte Bilder behalten oft die volle Kameraauflösung – weit mehr, als ein Bildschirm braucht.
- **Eingebettete Schriften.** Jede verwendete Schrift wird in der Datei gespeichert. Das fällt bei kurzen Dokumenten ins Gewicht, macht eine Datei aber selten riesig.
- **Text und Vektorgrafiken.** Sie sind winzig. Ein 100-seitiger reiner Textbericht liegt typischerweise deutlich unter 1 MB.

Beim Verkleinern geht es also vor allem um **Bilder**: Ihre Auflösung wird auf das tatsächlich nötige Maß gesenkt und sie werden effizienter gespeichert. Deshalb verliert ein eingescannter Vertrag oft den Großteil seines Gewichts, während sich ein reines Text-PDF kaum verändert.

## Welche Komprimierungsstufe ist die richtige?

TurboConvert nutzt Ghostscript, dieselbe Open-Source-Engine, die in vielen professionellen PDF-Programmen steckt, mit drei Voreinstellungen:

| Stufe | Ideal für | Bilder | Typisches Ergebnis |
|---|---|---|---|
| **Stark – kleinste Datei** | E-Mail, Upload-Formulare mit strengen Limits, Archivkopien | Auf Bildschirmauflösung reduziert | Kleinste Datei; Fotos verlieren beim Zoomen Details |
| **Empfohlen – gute Qualität** | Die meisten Dokumente, Lesen am Bildschirm, Weitergeben | Auf E-Book-Auflösung reduziert | Auf jedem Bildschirm klar, deutlich kleiner |
| **Leicht – beste Qualität** | Dokumente, die gedruckt werden | Druckauflösung bleibt | Wirkt wie das Original; geringere Einsparung |

Bei gescannten oder bildreichen PDFs sind Einsparungen von 50 bis 90 % üblich. Bei reinen Text-PDFs fällt der Gewinn bescheiden aus – und gibt es keinen, bleibt Ihr Original erhalten, sodass Sie nie eine größere Datei bekommen.

## PDF komprimieren, ohne es hochzuladen

Die meisten Online-Kompressoren schicken Ihre Datei an einen Server und versprechen, sie später zu löschen. TurboConvert lädt die Komprimierungs-Engine einmal in Ihren Browser und verarbeitet dann alles lokal. Das passt zu Dokumenten, die Sie nicht aus der Hand geben möchten: Steuererklärung, Kontoauszüge, Arztbriefe, unterschriebene Verträge oder Ausweisscans für eine Bewerbung.

## Tipps für die kleinste Datei

- **Nur einmal komprimieren, und zwar am Ende.** Wenn Sie Dokumente kombinieren, [fügen Sie sie zuerst zusammen](/de/pdf-zusammenfuegen) und komprimieren dann die fertige Datei. Wiederholtes Komprimieren verschlechtert nur die Bilder.
- **Überflüssiges entfernen.** Leere Seiten oder doppelte Anlagen löschen Sie vorher mit [PDF-Seiten sortieren](/de/pdf-seiten-sortieren).
- **Selbst scannen?** Scannen Sie Textdokumente mit 150–200 dpi in Graustufen statt mit 600 dpi in Farbe. Die Datei ist von Anfang an viel kleiner und bleibt gut lesbar.
- **Bilder statt PDF verschicken?** Komprimieren Sie Fotos direkt mit [Bild komprimieren](/de/bild-komprimieren) – das geht schneller und Sie haben mehr Kontrolle.
- **Ergebnis prüfen.** Öffnen Sie das verkleinerte PDF und zoomen Sie vor dem Versand in ein Foto oder eine Unterschrift. Wirkt etwas zu weich, wiederholen Sie es mit dem Original und einer leichteren Stufe.

## Häufige Probleme

**„Dieses PDF ist passwortgeschützt.“** Verschlüsselte PDFs lassen sich ohne Passwort nicht neu schreiben. Entsperren Sie die Datei, komprimieren Sie sie und schützen Sie sie bei Bedarf wieder.

**Die Datei ist genauso groß wie vorher.** Das PDF war bereits optimiert – typisch für Exporte aus Word oder Buchhaltungssoftware. Es gibt nichts Schweres mehr zu entfernen.

**Der Text ist unscharf geworden.** Das passiert nur, wenn der „Text“ in Wirklichkeit Teil eines gescannten Bildes ist. Nehmen Sie für Scans, die Sie drucken oder genau lesen müssen, die Stufe Leicht.
