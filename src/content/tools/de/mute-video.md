---
name: 'Ton aus Video entfernen'
title: 'Ton aus Video entfernen – MP4 stumm schalten, ohne Upload'
description: 'Ton aus Video entfernen mit einem Klick: MP4, MOV, WebM und mehr stumm schalten, auch im Stapel. Kostenlos, ohne Wasserzeichen, ohne Upload.'
h1: 'Ton aus Video entfernen'
lead: 'Entfernen Sie die Tonspur aus einem oder mehreren Videos und behalten Sie einen stummen Clip. Der Ton wird in Ihrem Browser entfernt – Ihre Videos verlassen Ihr Gerät nicht.'
what: 'Ihr Video'
howTo: 'den Ton aus einem Video entfernen'
steps:
  - 'Klicken Sie auf <strong>Dateien auswählen</strong> oder ziehen Sie ein oder mehrere Videos in das Feld – MP4, MOV, WebM, MKV, AVI und andere gängige Formate werden akzeptiert.'
  - 'Klicken Sie auf <strong>Umwandeln</strong>. Es gibt keine Einstellungen – die Tonspur wird einfach entfernt.'
  - 'Jedes stumme Video wird heruntergeladen, sobald es fertig ist; bei mehreren Dateien nutzen Sie <strong>Alle herunterladen (ZIP)</strong>.'
limits:
  - 'Videos bis 1 GB pro Datei. Beim ersten Mal wird die Konvertierungs-Engine (rund 31 MB) geladen und danach im Cache gehalten.'
  - 'Der gesamte Ton wird entfernt; Sie können weder eine einzelne Spur behalten noch die Lautstärke eines Abschnitts senken.'
  - 'Die Geschwindigkeit hängt von Ihrem Gerät und der Dateigröße ab.'
faq:
  - q: 'Wie entferne ich den Ton aus einem Video?'
    a: 'Ziehen Sie das Video hierher und klicken Sie auf Umwandeln. Die neue Datei hat dasselbe Bild, aber gar keine Tonspur mehr – nicht nur eine auf null gestellte Lautstärke.'
  - q: 'Verschlechtert sich dabei die Bildqualität?'
    a: 'Das Bild behält Auflösung und Qualität, nur der Ton wird herausgenommen. Die Datei wird sogar etwas kleiner, weil die Tondaten wegfallen.'
  - q: 'Kann ich den Ton aus mehreren Videos gleichzeitig entfernen?'
    a: 'Ja. Ziehen Sie mehrere Videos hinein; sie werden nacheinander verarbeitet, und Sie können alle als ZIP herunterladen.'
  - q: 'Kann ich den Ton als eigene Datei behalten?'
    a: 'Ja – extrahieren Sie ihn vor dem Stummschalten mit <a href="/de/mp4-in-mp3">MP4 in MP3</a>. Dann haben Sie das stumme Video und die Tonspur getrennt.'
  - q: 'Wird mein Video hochgeladen?'
    a: 'Nein. Alles wird von FFmpeg direkt in Ihrem Browser verarbeitet.'
---

## Warum den Ton entfernen?

Ein stummes Video ist oft genau das, was Sie brauchen:

- **Hintergrund- und Header-Videos auf Websites** – Browser blockieren automatisch startende Videos mit Ton meist ohnehin, und ohne Tonspur erleben Besucher garantiert keine Überraschung.
- **Privatsphäre** – entfernen Sie Gespräche, Namen oder Hintergrundgeräusche, die das Handymikrofon aufgenommen hat, bevor Sie einen Clip teilen.
- **Beiträge in sozialen Netzwerken und Präsentationen**, bei denen Sie in einer anderen App Musik oder einen Sprechertext hinzufügen.
- **Urheberrechtlich geschützte Musik** im Hintergrund einer Aufnahme, die Sie nicht veröffentlichen möchten.
- **Produktdemos und Bildschirmaufnahmen**, bei denen der Ton nichts beiträgt.

## Stumm schalten oder Lautstärke herunterdrehen?

Wird die Lautstärke in einem Schnittprogramm auf null gesetzt, bleibt eine (leere) Tonspur in der Datei. Manche Plattformen behandeln das Video dann trotzdem als Video mit Ton. Dieses Werkzeug entfernt die Tonspur vollständig, sodass Player, Websites und Apps wissen, dass das Video stumm ist.

## Was Sie erhalten

Das Ergebnis behält Auflösung und Länge des Originals; nur der Ton fehlt. Sie können mehrere Clips auf einmal hineinziehen – praktisch, wenn Sie eine Reihe von Produktvideos oder Hintergrundschleifen für eine Website vorbereiten – und alle zusammen als ZIP herunterladen. Akzeptiert werden Dateien bis 1 GB, auch MOV-Videos direkt vom iPhone.

## Mit anderen Werkzeugen kombinieren

- **Kürzerer Clip?** Schneiden Sie ihn zuerst mit [Video schneiden](/de/video-schneiden) und schalten Sie ihn dann stumm.
- **Kleinere Datei?** [Video komprimieren](/de/video-komprimieren) senkt Auflösung und Bitrate.
- **Endlosanimation für einen Chat oder ein Dokument?** [Video in GIF](/de/video-in-gif) erstellt direkt ein GIF ohne Ton.
- **iPhone-MOV umwandeln?** [MOV in MP4](/de/mov-in-mp4) ändert das Format, wenn eine Website kein MOV akzeptiert.

## Privat von Grund auf

Ihr Video wird von FFmpeg verarbeitet, kompiliert zu WebAssembly und ausgeführt in Ihrem eigenen Browser-Tab. Nichts wird hochgeladen – besonders sinnvoll, wenn Sie den Ton gerade deshalb entfernen, weil er etwas Privates enthält.

## Häufige Probleme

- **Die stumme Datei ist fast so groß wie das Original.** Der Ton macht bei den meisten Videos nur einen kleinen Teil aus. Um die Datei zu verkleinern, nutzen Sie zusätzlich „Video komprimieren“.
- **Ich wollte nur Hintergrundgeräusche oder Musik entfernen.** Dieses Werkzeug entfernt den gesamten Ton. Stimmen von Musik zu trennen, erfordert eine Audiobearbeitungssoftware.
