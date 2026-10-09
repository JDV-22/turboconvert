---
name: 'Video in GIF'
title: 'Video in GIF umwandeln – MP4 in GIF, kostenlos, ohne Upload'
description: 'Video in GIF umwandeln: animierte GIFs aus MP4, MOV, WebM und mehr. Start, Dauer, Breite und Bildrate wählbar. Kostenlos, ohne Wasserzeichen, ohne Upload.'
h1: 'Video in GIF umwandeln'
lead: 'Erstellen Sie ein animiertes GIF aus einem beliebigen Clip – eine Reaktion, eine Produktdemo, eine Bildschirmaufnahme. Das GIF entsteht in Ihrem Browser: Ihr Video wird nie hochgeladen, und es gibt kein Wasserzeichen.'
what: 'Ihr Video'
howTo: 'ein Video in GIF umwandeln'
steps:
  - 'Klicken Sie auf <strong>Datei auswählen</strong> oder ziehen Sie ein Video in das Feld – MP4, MOV, WebM, MKV, AVI und andere gängige Formate werden akzeptiert.'
  - 'Legen Sie mit <strong>Start (Sekunden)</strong> fest, wo das GIF beginnt, und mit <strong>Dauer (Sekunden)</strong>, wie lang es wird (1 bis 60 Sekunden).'
  - 'Wählen Sie die <strong>Breite</strong> (320–800 px) und die <strong>Bildrate</strong> (8–24 fps). Die Standardwerte 480 px und 12 fps passen für die meisten Zwecke.'
  - 'Klicken Sie auf <strong>Umwandeln</strong>. Das GIF wird automatisch heruntergeladen, sobald es fertig ist.'
limits:
  - 'Ein Video auf einmal, bis 500 MB. Ein GIF darf höchstens 60 Sekunden lang sein.'
  - 'Beim ersten Mal wird die Konvertierungs-Engine (rund 31 MB) geladen und danach im Cache gehalten. Die Geschwindigkeit hängt von Ihrem Gerät ab.'
  - 'GIF hat keinen Ton und kann nur 256 Farben pro Einzelbild darstellen – weiche Verläufe und Hauttöne können leicht körnig oder streifig wirken.'
  - 'GIFs sind viel schwerer als Videos gleicher Länge; lange oder breite GIFs erreichen schnell mehrere Dutzend Megabyte.'
faq:
  - q: 'Wie wandle ich ein MP4 in ein GIF um?'
    a: 'Ziehen Sie das MP4 hierher, legen Sie Start und Dauer fest, wählen Sie Breite und Bildrate und klicken Sie auf Umwandeln. Das GIF wird automatisch heruntergeladen, ohne Wasserzeichen.'
  - q: 'Warum ist mein GIF so groß?'
    a: 'GIF speichert jedes Einzelbild als eigenes Bild und komprimiert kaum zwischen den Bildern. Die Größe wächst also mit Dauer × Bildrate × Breite. Halbe Breite ergibt etwa ein Viertel der Größe; von 24 auf 12 fps halbiert sie.'
  - q: 'Welche Größe und Bildrate sind ideal für ein GIF?'
    a: 'Für Chats und soziale Netzwerke sind 480 px bei 12 fps ein guter Kompromiss. Für ein flüssiges, detailreiches GIF nehmen Sie 640 px und 15 fps, für E-Mails oder eine winzige Datei 320 px bei 8 fps.'
  - q: 'Wie lang darf ein GIF sein?'
    a: 'Hier bis zu 60 Sekunden. In der Praxis sind die besten GIFs 2 bis 6 Sekunden lang – längere Clips werden sehr schwer und lassen sich besser als Video teilen.'
  - q: 'Kann ich ein GIF aus einem iPhone-Video machen?'
    a: 'Ja, MOV-Videos vom iPhone werden unterstützt. Auf dem Handy öffnen Sie diese Seite in Safari und wählen das Video aus der Mediathek; bei langen oder hochauflösenden Clips ist ein Computer schneller.'
  - q: 'Wird mein Video hochgeladen?'
    a: 'Nein. Das GIF wird von FFmpeg direkt in Ihrem Browser erstellt. Das Video verlässt Ihr Gerät nicht.'
---

## Die richtigen Einstellungen

Ein GIF ist ein Daumenkino: Jedes Einzelbild wird als eigenes Bild gespeichert. Vier Einstellungen bestimmen, wie es aussieht und wie viel es wiegt.

| Einstellung | Was sie bewirkt | Tipp |
|---|---|---|
| **Start (Sekunden)** | Wo das GIF im Video beginnt | Video abspielen und die Sekunde notieren, in der die Szene beginnt, z. B. 12 |
| **Dauer (Sekunden)** | Wie lang das GIF dauert | 2–6 s für Reaktionen und Loops; bis 60 s möglich |
| **Breite** | Größe in Pixeln (Höhe folgt den Proportionen des Videos) | 480 px für Chats, 640–800 px für Anleitungen mit Text |
| **Bildrate** | Einzelbilder pro Sekunde | 12 fps wirken flüssig, 8 fps für winzige Dateien, 24 fps für fließende Bewegung |

Die Dateigröße wächst mit allen vier Werten gleichzeitig. Ein 5-Sekunden-GIF mit 480 px und 12 fps hat 60 Einzelbilder; derselbe Clip mit 800 px und 24 fps hat 120 viel größere – leicht fünfmal so schwer oder mehr.

## Ein kleineres GIF erstellen

Ist das GIF zu schwer für Slack, Discord, eine E-Mail oder eine Webseite, ändern Sie jeweils eine Einstellung:

1. **Kürzen.** Die Dauer ist der direkteste Hebel. Beschränken Sie sich auf den entscheidenden Moment.
2. **Breite verringern.** Von 640 auf 480 px fallen fast die Hälfte der Pixel pro Bild weg.
3. **Bildrate senken.** 12 statt 24 fps halbiert die Zahl der Einzelbilder, und die Bewegung wirkt trotzdem flüssig.
4. **Ruhige Szenen wählen.** Wenig Bewegung, einfarbige Hintergründe und wenige Farben komprimieren besser als verwackelte, detailreiche oder verrauschte Aufnahmen.

## GIF oder Video?

GIFs starten automatisch und laufen in Schleife – in Chat-Apps, E-Mails, Dokumentationen, GitHub-Issues und Präsentationen. Deshalb sind sie so beliebt. Ein GIF ist aber meist um ein Vielfaches größer als derselbe Clip als MP4 und hat keinen Ton. Akzeptiert die Plattform Videos, ist ein kurzes MP4 leichter und schärfer: Schneiden Sie den Moment mit [Video schneiden](/de/video-schneiden) heraus und verkleinern Sie ihn bei Bedarf mit [Video komprimieren](/de/video-komprimieren).

## Für Bildschirmaufnahmen und Handyvideos

Sie können MP4-Dateien von Android-Handys, Kameras und Schnittprogrammen verwenden, **MOV**-Clips vom iPhone oder aus einer Mac-Bildschirmaufnahme, **WebM**-Dateien aus browserbasierten Rekordern sowie MKV, AVI, M4V und mehr. Bildschirmaufnahmen eignen sich besonders gut für GIFs in Fehlerberichten und Anleitungen: Bleiben Sie bei 640–800 px Breite, damit Text lesbar bleibt; 8–12 fps reichen für Mausbewegungen.

## Kein Upload, kein Wasserzeichen

Viele GIF-Ersteller laden Ihr Video auf einen Server und setzen ihr Logo aufs Ergebnis, wenn Sie nicht zahlen. TurboConvert führt FFmpeg als WebAssembly direkt in Ihrem Browser-Tab aus. Ihr Clip bleibt auf Ihrem Gerät, und das GIF ist sauber. Die Engine (rund 31 MB) wird beim ersten Mal geladen und dann im Cache gehalten.

Sie wollen lieber den Ton des Clips? [MP4 in MP3](/de/mp4-in-mp3) extrahiert ihn als MP3.

## Häufige Probleme

- **Das GIF beginnt an der falschen Stelle.** Der Start wird in Sekunden ab Videobeginn gemessen: 1 Minute 20 Sekunden sind 80.
- **Es ist zu schwer für die Plattform.** Reduzieren Sie zuerst die Dauer, dann die Breite, dann die Bildrate – in dieser Reihenfolge sparen Sie am meisten bei geringstem optischen Verlust.
- **Die Farben wirken körnig.** Das ist die 256-Farben-Grenze von GIF. Aufnahmen mit flächigen Farben und gutem Licht werden besser als dunkle oder verrauschte Szenen.
