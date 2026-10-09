---
name: 'PDF in Excel'
title: 'PDF in Excel umwandeln – Tabellen als XLSX | TurboConvert'
description: 'PDF kostenlos in Excel umwandeln: Tabellen aus PDFs als bearbeitbare XLSX-Datei extrahieren, Zahlen bleiben Zahlen. Im Browser, ohne Upload und Anmeldung.'
h1: 'PDF in Excel umwandeln'
lead: 'Holen Sie die Tabellen aus einem PDF in eine Excel-Tabelle, die Sie sortieren, filtern und für Berechnungen nutzen können. Die Umwandlung läuft auf Ihrem Gerät – Ihre Kontoauszüge und Berichte werden nie hochgeladen.'
what: 'Ihr PDF'
howTo: 'PDF in Excel umwandeln'
steps:
  - 'Klicken Sie auf <strong>Dateien auswählen</strong> oder ziehen Sie ein oder mehrere PDFs in das Feld oben.'
  - 'Klicken Sie auf <strong>Umwandeln</strong>. Auf jeder Seite werden Tabellen erkannt und in Zeilen und Spalten angeordnet.'
  - 'Die .xlsx-Datei wird automatisch heruntergeladen, mit einem Tabellenblatt pro PDF-Seite. Mehrere Dateien speichern Sie mit <strong>Alle herunterladen (ZIP)</strong>.'
  - 'Öffnen Sie sie in Excel, Google Tabellen, Numbers oder LibreOffice Calc und prüfen Sie die Überschriften.'
limits:
  - 'Funktioniert mit digitalen PDFs (aus einer Software exportiert). Gescannte PDFs enthalten Bilder statt Text und lassen sich nicht in Tabellen umwandeln.'
  - 'Komplexe Tabellen mit verbundenen oder mehrstufigen Kopfzeilen oder mit Tabellen über mehrere Seiten brauchen in Excel eventuell etwas Nacharbeit.'
  - 'Passwortgeschützte PDFs müssen zuerst mit <a href="/de/pdf-passwort-entfernen">PDF-Passwort entfernen</a> entsperrt werden. Maximal 100 MB pro PDF.'
faq:
  - q: 'Wie kann ich ein PDF kostenlos in Excel umwandeln?'
    a: 'Legen Sie Ihr PDF hier ab und klicken Sie auf Umwandeln. Sie erhalten eine .xlsx-Datei mit den Tabellen jeder Seite – ohne Anmeldung, ohne Wasserzeichen, ohne Tageslimit.'
  - q: 'Kann ich mit den Zahlen in Formeln rechnen?'
    a: 'Ja. Werte, die wie Zahlen aussehen, werden als Zahlen gespeichert – Sie können sie sofort summieren, sortieren und in Diagrammen nutzen. Prüfen Sie Spalten mit ungewöhnlichen Formaten, etwa Beträge mit Währungskürzel.'
  - q: 'Kann ich einen Kontoauszug als PDF in Excel umwandeln?'
    a: 'Ja, wenn es ein digitaler Auszug aus dem Online-Banking ist – das ist einer der häufigsten Anwendungsfälle. Ihr Kontoauszug bleibt in Ihrem Browser und wird nie hochgeladen.'
  - q: 'Warum steht jede Seite auf einem eigenen Tabellenblatt?'
    a: 'Getrennte Seiten machen es leicht, das Ergebnis mit dem Original abzugleichen. Um sie zusammenzuführen, kopieren Sie die Zeilen jedes Blatts in Excel auf ein gemeinsames Blatt.'
  - q: 'Funktioniert das mit gescannten PDFs?'
    a: 'Nein. Ein Scan hat keine Textebene, die gelesen werden kann. Den Text können Sie mit <a href="/de/ocr-pdf">OCR PDF</a> gewinnen, die Tabellenstruktur müssen Sie dann aber von Hand aufbauen.'
---

## Warum PDF-Tabellen in Excel umwandeln?

PDFs sind zum Lesen gemacht, nicht zum Weiterarbeiten. Zahlen abzutippen ist langsam und fehleranfällig, und beim Kopieren aus einem PDF landet oft die ganze Tabelle in einer einzigen Spalte. Die Umwandlung in Excel liefert echte Zellen:

- **Konto- und Kreditkartenauszüge** – Ausgaben kategorisieren, ein Haushaltsbuch führen, die Steuererklärung vorbereiten.
- **Rechnungen und Preislisten** – Lieferantenpreise übernehmen oder Bestellungen abgleichen.
- **Geschäftsberichte** – veröffentlichte Zahlen in eigenen Auswertungen weiterverwenden.
- **Exportierte Berichte** aus Systemen, die nur PDF anbieten.

## Was gut umgewandelt wird

| PDF-Inhalt | Ergebnis |
|---|---|
| Saubere Tabellen mit einer Kopfzeile | Zeilen und Spalten wie im PDF |
| Auszüge und Rechnungen aus Banking- oder Buchhaltungssoftware | Meist gut – Datum und Beträge prüfen |
| Verbundene oder mehrstufige Kopfzeilen | Daten sind vorhanden; Kopfzeilen evtl. umordnen |
| Gescannte Seiten | Nicht unterstützt – kein Text zum Auslesen |

## Tipps für eine saubere Tabelle

- **Nur die Seiten mit Tabellen umwandeln.** Extrahieren Sie sie mit [PDF teilen](/de/pdf-teilen), damit Sie keine Blätter voller Deckblatt-Text bekommen.
- **Dezimal- und Datumsformate prüfen.** Deutsche PDFs nutzen das Komma als Dezimaltrennzeichen und den Punkt als Tausendertrennzeichen – stellen Sie sicher, dass die Ländereinstellungen von Excel dazu passen, bevor Sie rechnen.
- **Eher Fließtext als Tabellen?** Für Berichte, die überwiegend aus Absätzen bestehen, ist [PDF in Word](/de/pdf-in-word) besser geeignet.
- **Umgekehrt?** Machen Sie aus einer Tabelle mit [Excel in PDF](/de/excel-in-pdf) ein Dokument zum Weitergeben.

Finanzunterlagen gehören zu Ihren sensibelsten Dateien. Mit TurboConvert läuft die Umwandlung in Ihrem Browser – das PDF wird an keinen Server gesendet.

## Häufige Probleme und Lösungen

**Alles ist in einer Spalte gelandet.** Wahrscheinlich ordnet das PDF seine „Tabelle“ mit Leerzeichen statt mit echten Spalten an, oder die Seite ist ein Scan. Prüfen Sie, ob Sie im PDF einzelne Wörter markieren können; wenn nicht, ist es ein Bild und lässt sich nicht in Zellen umwandeln.

**Zahlen sind linksbündig und lassen sich nicht summieren.** Excel behandelt sie als Text – oft wegen eines Währungssymbols, eines nachgestellten Minuszeichens oder eines Tausendertrennzeichens aus einem anderen Land. Mit *Daten › Text in Spalten* oder Suchen und Ersetzen des Symbols erkennt Excel sie als Zahlen.

**Datumsangaben sind falsch (Tag und Monat vertauscht).** PDF und Tabelle nutzen unterschiedliche Konventionen (03/04 kann der 4. März oder der 3. April sein). Stellen Sie das Datumsformat der Spalte in Excel passend zur Quelle ein.

**Eine Tabelle geht über mehrere Seiten.** Jede Seite wird zu einem eigenen Blatt. Kopieren Sie die Zeilen der folgenden Blätter unter das erste und löschen Sie die wiederholten Kopfzeilen.
