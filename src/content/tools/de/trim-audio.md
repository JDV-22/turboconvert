---
name: 'Audio schneiden'
title: 'MP3 schneiden – Audio online kürzen, kostenlos, ohne Upload'
description: 'MP3, WAV, M4A und andere Audiodateien schneiden: Start- und Endzeit eingeben. Für Klingeltöne, Ausschnitte und kürzere Aufnahmen – kostenlos, ohne Upload.'
h1: 'Audio schneiden'
lead: 'Behalten Sie nur den Teil einer Aufnahme oder eines Songs, den Sie brauchen – einfach Start- und Endzeit eingeben. Ideal für Klingeltöne, Ausschnitte und das Aufräumen von Sprachaufnahmen. Geschnitten in Ihrem Browser, nie hochgeladen.'
what: 'Ihre Audiodatei'
howTo: 'eine Audiodatei schneiden'
steps:
  - 'Klicken Sie auf <strong>Datei auswählen</strong> oder ziehen Sie eine Audiodatei in das Feld – MP3, WAV, M4A, AAC, OGG, FLAC, OPUS, WMA, AIFF und AMR werden akzeptiert.'
  - 'Geben Sie bei <strong>Start</strong> die Zeit im Format Stunden:Minuten:Sekunden ein, z. B. <code>00:00:12</code>.'
  - 'Geben Sie bei <strong>Ende (leer = bis zum Schluss)</strong> das Ende ein, z. B. <code>00:00:42</code>, oder lassen Sie das Feld leer, um alles bis zum Schluss zu behalten.'
  - 'Klicken Sie auf <strong>Umwandeln</strong>. Die gekürzte Datei wird automatisch heruntergeladen.'
limits:
  - 'Eine Datei auf einmal, bis 1 GB. Beim ersten Mal wird die Konvertierungs-Engine (rund 31 MB) geladen und danach im Cache gehalten.'
  - 'Es gibt keine Wellenform und keine Vorschau – ermitteln Sie die Zeiten vorher in Ihrem gewohnten Player.'
  - 'Das Werkzeug behält einen zusammenhängenden Abschnitt. Um einen Teil aus der Mitte zu entfernen, schneiden Sie die beiden Teile einzeln aus.'
  - 'Es wird kein Ein- oder Ausblenden hinzugefügt.'
faq:
  - q: 'Wie schneide ich den Anfang eines MP3 ab?'
    a: 'Setzen Sie den Start auf die Stelle, an der der Ton beginnen soll (z. B. 00:00:05), und lassen Sie das Ende leer. Alles davor wird entfernt.'
  - q: 'Wie finde ich die genauen Start- und Endzeiten?'
    a: 'Spielen Sie die Datei in einem beliebigen Player ab (Handy, VLC, Windows Media Player, QuickTime), pausieren Sie an den gewünschten Stellen und notieren Sie die angezeigte Zeit.'
  - q: 'Wie mache ich aus einem Song einen Klingelton?'
    a: 'Kürzen Sie den Song auf einen kurzen Abschnitt – etwa 30 Sekunden – und übertragen Sie ihn auf Ihr Handy. Android akzeptiert MP3-Klingeltöne; iPhone-Klingeltöne müssen im Format .m4r über Apples eigene Programme importiert werden.'
  - q: 'Kann ich ein Sprachmemo oder eine Aufnahme kürzen?'
    a: 'Ja. M4A-Sprachmemos, WAV-Aufnahmen und andere gängige Formate werden akzeptiert. Schneiden Sie die Stille am Anfang und Ende ab, bevor Sie sie teilen.'
  - q: 'Wird meine Audiodatei hochgeladen?'
    a: 'Nein. Der Ton wird von FFmpeg in Ihrem Browser geschnitten; Ihre Datei bleibt auf Ihrem Gerät.'
---

## Wofür Audio geschnitten wird

- **Klingeltöne und Benachrichtigungstöne** – behalten Sie den Refrain oder die bekanntesten 20–30 Sekunden.
- **Sprachmemos und Interviews** – entfernen Sie Stille und Griffgeräusche am Anfang und Ende.
- **Ausschnitte aus Podcasts und Videos** – ein Zitat oder Highlight zum Teilen in sozialen Netzwerken.
- **Musik üben** – eine Passage isolieren, um sie in einer Übe-App in Schleife abzuspielen.
- **Präsentationen** – nur den Teil eines Titels behalten, den Sie als Hintergrundmusik brauchen.

## Die Zeiten eingeben

Zeiten werden als **Stunden:Minuten:Sekunden** angegeben:

| Sie möchten | Start | Ende |
|---|---|---|
| Die ersten 5 Sekunden entfernen | `00:00:05` | *(leer)* |
| Die ersten 30 Sekunden behalten | `00:00:00` | `00:00:30` |
| 1:10 bis 1:40 behalten | `00:01:10` | `00:01:40` |
| Ab Minute 45 bis zum Ende behalten | `00:45:00` | *(leer)* |

Sind Sie beim genauen Moment unsicher, lassen Sie auf jeder Seite eine Sekunde Spielraum – nachschneiden können Sie jederzeit.

## Tipps

- **Danach ein anderes Format?** Wandeln Sie den Ausschnitt mit dem [Audio-Konverter](/de/audio-konverter) in MP3, WAV, M4A, OGG, FLAC oder OPUS um.
- **Kleinere Datei zum Teilen?** Verlustfreie WAV- oder FLAC-Ausschnitte werden mit [WAV in MP3](/de/wav-in-mp3) zu kompakten MP3s.
- **Der Ton steckt in einem Video?** Extrahieren Sie ihn zuerst mit [MP4 in MP3](/de/mp4-in-mp3) oder schneiden Sie das Video direkt mit [Video schneiden](/de/video-schneiden).

## Beispiel: ein Klingelton in drei Schritten

1. Spielen Sie den Song ab und notieren Sie, wo der Refrain beginnt – etwa bei 0:48.
2. Tragen Sie `00:00:48` als Start und `00:01:18` als Ende ein und klicken Sie auf **Umwandeln**.
3. Übertragen Sie die 30-Sekunden-Datei aufs Handy. Unter Android lässt sich das MP3 direkt als Klingelton wählen.

## Unterstützte Formate

Sie können MP3-, WAV-, M4A-, AAC-, OGG-, FLAC-, OPUS-, WMA-, AIFF- und AMR-Dateien bis 1 GB schneiden. Das deckt Musikdateien, Sprachmemos vom Handy, Exporte von Aufnahmegeräten und alte Handyaufnahmen gleichermaßen ab.

## Häufige Probleme

- **Der Schnitt liegt um Sekundenbruchteile daneben.** Lassen Sie etwas Spielraum und schneiden Sie bei Bedarf nach; für samplegenaue Schnitte ist ein Wellenform-Editor wie Audacity besser geeignet.
- **Am Anfang oder Ende knackt es.** Ein Schnitt mitten in einem Klang kann knacken, da nichts ein- oder ausgeblendet wird. Legen Sie den Schnittpunkt auf eine leisere Stelle.

## Kein Upload nötig

Ihre Audiodatei wird von FFmpeg verarbeitet, der Open-Source-Engine hinter vielen professionellen Medienprogrammen, kompiliert zu WebAssembly und ausgeführt in Ihrem Browser. Kein Konto, kein Wasserzeichen – und Ihre Aufnahmen verlassen Ihr Gerät nie.
