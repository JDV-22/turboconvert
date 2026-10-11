---
name: 'PDF-Formular ausfüllen'
title: 'PDF-Formular ausfüllen – kostenlos: tippen & unterschreiben'
description: 'PDF-Formular kostenlos im Browser ausfüllen: in Felder tippen oder bei Formularen ohne Felder überall schreiben. Ankreuzen, Datum, Unterschrift. Ohne Upload.'
h1: 'PDF-Formular ausfüllen'
lead: 'Tippen Sie in die Felder eines ausfüllbaren PDF-Formulars oder schreiben Sie direkt auf Formulare ohne Felder, kreuzen Sie Kästchen an, setzen Sie das Datum und unterschreiben Sie. Das Formular wird in Ihrem Browser ausgefüllt und nie hochgeladen.'
what: 'Ihr PDF-Formular'
howTo: 'ein PDF-Formular ausfüllen'
steps:
  - 'Klicken Sie auf <strong>Datei auswählen</strong> oder ziehen Sie das PDF-Formular in das Feld.'
  - 'Hat das Formular ausfüllbare Felder, werden sie blau angezeigt – klicken und tippen Sie einfach. Andernfalls wählen Sie <strong>Text</strong> und klicken dorthin, wo Sie schreiben möchten; für Kästchen und Datumsangaben nutzen Sie <strong>Haken</strong>, <strong>Kreuz</strong> und <strong>Datum</strong>.'
  - 'Fügen Sie Ihre <strong>Unterschrift</strong> hinzu, falls das Formular eine verlangt, und klicken Sie dann auf <strong>PDF speichern</strong>. Das ausgefüllte PDF wird mit dem Zusatz „-filled“ im Dateinamen heruntergeladen.'
limits:
  - 'Felder werden mit Helvetica ausgefüllt, was westeuropäische Sprachen abdeckt. Andere Schriftsysteme werden noch nicht unterstützt.'
  - 'Dynamische XFA-Formulare (manche Behördenformulare, die sich nur im Adobe Reader öffnen lassen) werden nicht unterstützt. Ihre Seiten zeigen statt des Formulars „Bitte warten …“ oder eine ähnliche Meldung.'
  - 'Ausgefüllte Felder bleiben im heruntergeladenen PDF bearbeitbar. Um sie zu sperren, lassen Sie die Datei zusätzlich durch „PDF verflachen“ (Flatten) laufen.'
  - 'PDFs bis 100 MB. Passwortgeschützte Formulare müssen zuerst entsperrt werden.'
faq:
  - q: 'Woran erkenne ich, ob mein PDF-Formular ausfüllbar ist?'
    a: 'Öffnen Sie es hier. Ausfüllbare Felder werden automatisch erkannt und blau dargestellt; die Anzahl der gefundenen Felder steht über den Seiten. Werden keine gefunden, ist das Formular ein flaches Dokument – schreiben Sie dann mit Text darauf.'
  - q: 'Kann ich ein eingescanntes Formular ausfüllen?'
    a: 'Ja. Ein eingescanntes Formular hat keine Felder, daher klicken Sie mit Text auf jede Zeile und tippen, für Kästchen nutzen Sie Haken oder Kreuz. Passen Sie die Textgröße mit den Schaltflächen A− und A+ an die Zeilen an.'
  - q: 'Sieht die Person, die das Formular erhält, meine Angaben?'
    a: 'Ja. Die Werte werden in die Formularfelder selbst geschrieben, sodass sie in jedem PDF-Reader angezeigt werden, korrekt ausgedruckt werden und von den Systemen gelesen werden können, die das Formular verarbeiten.'
  - q: 'Kann ich speichern und später weitermachen?'
    a: 'Laden Sie das PDF herunter, wenn Sie aufhören, und öffnen Sie die heruntergeladene Datei später erneut hier – die bereits eingetragenen Werte bleiben erhalten, und Sie können weitermachen.'
  - q: 'Wird mein Formular hochgeladen?'
    a: 'Nein. Formulare enthalten oft persönliche Daten – Steuernummern, Adressen, Bankverbindungen –, deshalb läuft dieses Tool vollständig in Ihrem Browser. Nichts wird an einen Server gesendet.'
---

## Zwei Arten von PDF-Formularen

**Ausfüllbare Formulare** (auch AcroForms genannt) enthalten echte Felder: Textfelder, Kontrollkästchen, Optionsfelder und Dropdown-Listen. Diese Seite erkennt sie automatisch und legt sie blau darüber – klicken Sie in ein Feld und tippen Sie, setzen Sie Häkchen, wählen Sie Optionen. Die Werte werden in den Feldern gespeichert, genau wie es der Adobe Reader tun würde.

**Flache Formulare** sind einfach Seiten mit Linien und Kästchen: eingescannte Papierformulare oder aus Word exportierte PDFs ohne Felder. Es gibt nichts zu erkennen, aber ausfüllen können Sie sie trotzdem: Wählen Sie **Text**, klicken Sie an den Anfang einer Zeile und tippen Sie. Für Kästchen nutzen Sie **Haken** oder **Kreuz**, und mit **Datum** fügen Sie das heutige Datum ein.

Beide Methoden lassen sich im selben Dokument kombinieren, und Sie können das Formular vor dem Herunterladen **unterschreiben**.

## Tipps für ein sauberes Ergebnis

- **Text zu groß für die Zeile?** Wählen Sie ihn aus und verkleinern Sie ihn mit **A−**, bis er passt. Die Größe gilt auch für den nächsten Text, den Sie einfügen.
- **Text verschieben** Sie durch Ziehen, **bearbeiten** durch zweimaliges Anklicken.
- **Fehler auf einem flachen Formular?** Decken Sie ihn mit **Abdecken** ab und tippen Sie neu.
- **Formular per E-Mail verschicken?** Ist es zu groß, [verkleinern Sie es](/de/pdf-verkleinern) nach dem Ausfüllen.
- **Antworten verbindlich machen?** Lassen Sie das ausgefüllte PDF durch „PDF verflachen“ (Flatten) laufen, damit sich die Felder nicht mehr bearbeiten lassen.

## Ihre Daten bleiben auf Ihrem Gerät

Verwaltungs- und Steuerformulare, Bewerbungen, medizinische Fragebögen und Mietunterlagen enthalten viele persönliche Angaben. Statt sie bei einem Online-Dienst hochzuladen, füllt diese Seite das Formular in Ihrem Browser mit Open-Source-Bibliotheken aus (PDF.js zur Anzeige, pdf-lib zum Schreiben). Nichts wird hochgeladen, gespeichert oder protokolliert.

## Verwandte Tools

- Müssen Sie nur unterschreiben? Nutzen Sie [PDF unterschreiben](/de/pdf-unterschreiben).
- Text, Bilder oder Markierungen in ein beliebiges PDF einfügen: [PDF bearbeiten](/de/pdf-bearbeiten).
- Formular auf mehrere Dateien verteilt? [Fügen Sie sie zuerst zusammen](/de/pdf-zusammenfuegen).
