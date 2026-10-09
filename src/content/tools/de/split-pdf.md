---
name: 'PDF teilen'
title: 'PDF teilen – Seiten extrahieren oder aufteilen | TurboConvert'
description: 'PDF nach Seitenbereichen teilen oder in Einzelseiten aufteilen. Die benötigten Seiten in Sekunden extrahieren – im Browser, ohne Upload und ohne Anmeldung.'
h1: 'PDF teilen'
lead: 'Extrahieren Sie bestimmte Seiten aus einem PDF, teilen Sie es in mehrere Teile oder speichern Sie jede Seite als eigene Datei. Das PDF wird auf Ihrem Gerät geteilt und nie hochgeladen.'
what: 'Ihr PDF'
howTo: 'ein PDF teilen'
steps:
  - 'Klicken Sie auf <strong>Datei auswählen</strong> oder ziehen Sie ein PDF in das Feld oben.'
  - 'Wählen Sie den <strong>Teilungsmodus</strong>: <em>Seitenbereiche extrahieren</em> erzeugt ein PDF pro Bereich, <em>Ein PDF pro Seite</em> trennt jede Seite ab.'
  - 'Geben Sie für Bereiche die gewünschten <strong>Seiten</strong> ein, zum Beispiel <code>1-3, 5, 8-10</code>.'
  - 'Klicken Sie auf <strong>Umwandeln</strong>. Ein einzelnes Ergebnis wird automatisch heruntergeladen; mehrere Dateien laden Sie gemeinsam mit <strong>Alle herunterladen (ZIP)</strong>.'
limits:
  - 'Ein PDF pro Durchgang. Passwortgeschützte PDFs müssen zuerst mit <a href="/de/pdf-passwort-entfernen">PDF-Passwort entfernen</a> entsperrt werden.'
  - 'Lesezeichen (das Inhaltsverzeichnis in der Seitenleiste) werden nicht in die Teildateien übernommen; die Seiten selbst – Text, Bilder und Layout – werden unverändert kopiert.'
  - 'Maximal 200 MB pro PDF.'
faq:
  - q: 'Wie extrahiere ich eine einzelne Seite aus einem PDF?'
    a: 'Lassen Sie <em>Seitenbereiche extrahieren</em> eingestellt, tippen Sie die Seitenzahl (zum Beispiel <code>4</code>) bei Seiten ein und klicken Sie auf Umwandeln. Sie erhalten ein einseitiges PDF.'
  - q: 'Wie teile ich ein PDF in mehrere Teile auf?'
    a: 'Geben Sie pro Teil einen Bereich ein, getrennt durch Kommas – <code>1-10, 11-20, 21-30</code> ergibt drei PDFs. Sie können das Ende auch offen lassen, etwa <code>21-</code>, um bis zur letzten Seite zu gehen.'
  - q: 'Verschlechtert das Teilen die Qualität?'
    a: 'Nein. Die Seiten werden unverändert kopiert, der Text bleibt markierbar und Bilder behalten ihre Auflösung. Sind die Teile noch zu groß, nutzen Sie <a href="/de/pdf-verkleinern">PDF verkleinern</a>.'
  - q: 'Kann ich ein PDF teilen, um es per E-Mail zu verschicken?'
    a: 'Ja. Teilen Sie eine große Datei in einige Bereiche, damit jeder Teil unter das Anhangslimit Ihres Mail-Dienstes passt, und verschicken Sie sie einzeln.'
  - q: 'Wird das Original-PDF verändert?'
    a: 'Nein. Ihre Originaldatei wird nur gelesen; die abgetrennten Seiten werden als neue PDFs in Ihren Downloads gespeichert.'
---

## Zwei Arten, ein PDF zu teilen

**Seitenbereiche extrahieren** liefert genau die Seiten, die Sie angeben, gruppiert wie eingetippt. Jeder Bereich wird zu einem eigenen PDF:

| Eingabe | Ergebnis |
|---|---|
| `3` | Ein PDF mit Seite 3 |
| `1-3, 5` | Zwei PDFs: Seiten 1–3 und Seite 5 |
| `1-10, 11-20, 21-` | Drei PDFs: Seiten 1–10, 11–20 sowie 21 bis zum Ende |

**Ein PDF pro Seite** macht aus einem 12-seitigen Dokument zwölf einseitige PDFs – praktisch, um Rechnungen, Gehaltsabrechnungen oder Formulare zu trennen, die in einem Durchgang gescannt wurden.

## Typische Gründe, ein PDF aufzuteilen

- **Nur das Nötige verschicken.** Senden Sie nur die Unterschriftsseite eines Vertrags oder das Kapitel, um das eine Kollegin gebeten hat.
- **Unter ein Upload-Limit kommen.** Online-Portale – etwa von Behörden oder Versicherungen – begrenzen Uploads oft auf wenige Megabyte; aufgeteilt passt jeder Teil.
- **Einen Stapelscan trennen.** Hat der Scanner ein langes PDF aus verschiedenen Dokumenten erzeugt, zerlegen Sie es wieder in Einzeldateien.
- **Ein Dokument neu zusammenstellen.** Extrahieren Sie die Seiten, die Sie behalten möchten, und setzen Sie sie mit [PDF zusammenfügen](/de/pdf-zusammenfuegen) neu zusammen.

## Tipps

- **Prüfen Sie die Seitenzahlen vorher im PDF-Viewer.** Die Bereiche beziehen sich auf die physische Reihenfolge (1 = erste Seite der Datei), nicht auf die gedruckten Seitenzahlen, die nach einem Deckblatt oder römisch nummerierten Seiten später beginnen können.
- **Lieber Seiten löschen oder umsortieren?** [PDF-Seiten sortieren](/de/pdf-seiten-sortieren) zeigt Vorschaubilder aller Seiten, die Sie per Drag & Drop verschieben, drehen und entfernen können.
- **Seiten als Bilder gebraucht?** Mit [PDF in JPG](/de/pdf-in-jpg) speichern Sie Seiten als Bilder.

Da das Teilen in Ihrem Browser passiert, eignet es sich auch für vertrauliche Dateien: Ihr PDF wird an keinen Server gesendet.

## Häufige Probleme und Lösungen

**Der Seitenbereich wird abgelehnt.** Prüfen Sie, ob die Seiten in der Datei existieren – die Seiten 20–25 aus einem 12-seitigen PDF gibt es nicht. Verwenden Sie nur Zahlen, Kommas und Bindestriche, etwa `1-3, 7`.

**Ich wollte eine Datei, nicht mehrere.** Jeder durch Komma getrennte Bereich ergibt ein eigenes PDF. Um die Seiten 1–3 und 7 in einem Dokument zu erhalten, teilen Sie sie ab und fügen die Teile danach zusammen – oder löschen Sie die übrigen Seiten einfach in PDF-Seiten sortieren.

**Die Teildateien sind fast so groß wie das Original.** Seiten, die sich Bilder oder Schriften teilen, können jeweils eine Kopie davon enthalten. Komprimieren Sie die Teile, wenn die Größe wichtig ist.
