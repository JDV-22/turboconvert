---
name: 'MOV in MP4'
title: 'MOV in MP4 umwandeln – iPhone-Videos, kostenlos & privat'
description: 'MOV in MP4 umwandeln: Videos von iPhone, Mac oder Kamera für Windows, Android und jede Website. Im Stapel, kostenlos, ohne Wasserzeichen und ohne Upload.'
h1: 'MOV in MP4 umwandeln'
lead: 'Machen Sie aus MOV-Videos vom iPhone, aus Mac-Bildschirmaufnahmen oder von der Kamera MP4-Dateien, die überall laufen. Die Umwandlung passiert in Ihrem Browser, Ihre Videos werden nie hochgeladen.'
what: 'Ihr MOV-Video'
howTo: 'MOV in MP4 umwandeln'
steps:
  - 'Klicken Sie auf <strong>Dateien auswählen</strong> oder ziehen Sie ein oder mehrere .mov- (oder .m4v-)Videos in das Feld.'
  - 'Klicken Sie auf <strong>Umwandeln</strong>. Sie müssen nichts einstellen – die beste Methode wird automatisch gewählt.'
  - 'Jedes MP4 wird heruntergeladen, sobald es fertig ist; bei mehreren Videos nutzen Sie <strong>Alle herunterladen (ZIP)</strong>.'
limits:
  - 'Videos bis 1 GB pro Datei. Beim ersten Mal wird die Konvertierungs-Engine (rund 31 MB) geladen und danach im Cache gehalten.'
  - 'Muss das Video neu kodiert werden (siehe unten), dauert die Umwandlung länger und hängt von der Leistung Ihres Geräts ab – für lange Videos empfiehlt sich ein Computer.'
  - 'Die Auflösung des Originals bleibt erhalten. Um die Datei zu verkleinern, nutzen Sie <a href="/de/video-komprimieren">Video komprimieren</a>, das ebenfalls MP4 ausgibt.'
faq:
  - q: 'Was ist der Unterschied zwischen MOV und MP4?'
    a: 'Beide sind Container, die aus demselben QuickTime-Format von Apple hervorgegangen sind, und können dieselben Videoarten enthalten. MP4 ist ein offener Standard, den praktisch jedes Gerät, jede App und jede Website unterstützt; MOV ist vor allem auf Apple-Geräten zu Hause.'
  - q: 'Verliert das Video beim Umwandeln von MOV in MP4 an Qualität?'
    a: 'Liegt das Video im MOV bereits in einem Format vor, das MP4 unterstützt, wird es nur neu verpackt – ohne jede Qualitätsänderung. Andernfalls wird es mit hoher Qualitätseinstellung neu kodiert.'
  - q: 'Warum spielt Windows mein iPhone-Video nicht ab?'
    a: 'Viele Windows-Apps und Websites lehnen den MOV-Container ab – die Umwandlung in MP4 behebt das. iPhones nehmen außerdem standardmäßig in HEVC (H.265) auf; spielt ein älterer PC das MP4 trotzdem nicht ab, installieren Sie die HEVC-Erweiterung von Microsoft oder stellen Sie Ihr iPhone für künftige Videos auf „Maximale Kompatibilität“.'
  - q: 'Wie lange dauert die Umwandlung?'
    a: 'Ein neu verpacktes Video ist in Sekunden fertig. Eine Neukodierung dauert länger – etwa so lange wie das Video selbst oder mehr, je nach Gerät und Auflösung.'
  - q: 'Wird mein Video hochgeladen?'
    a: 'Nein. FFmpeg läuft in Ihrem Browser, Ihre Videos bleiben auf Ihrem Gerät.'
---

## MOV und MP4: gleiche Familie, andere Reichweite

MOV ist das QuickTime-Format von Apple. Es entsteht auf iPhones und iPads, bei Mac-Bildschirmaufnahmen (⌘ + Umschalt + 5) und bei vielen Kameras. MP4 wurde daraus abgeleitet und ist zum universellen Videostandard geworden: Jedes Handy, jeder Browser, Fernseher, jedes soziale Netzwerk, Schnittprogramm und jede Lernplattform liest es.

Bei der Umwandlung von MOV in MP4 geht es also meist um **Kompatibilität**, nicht um Qualität:

- Upload-Formulare, Onlinekurse oder CMS-Plattformen, die nur MP4 akzeptieren.
- Windows-PCs, Android-Handys und Smart-TVs, die das MOV nicht öffnen.
- Schnittprogramme und Diashow-Werkzeuge, die MP4 erwarten.

## Schnelles Umverpacken oder Neukodieren

Eine Videodatei ist ein Container mit kodierten Datenströmen. TurboConvert prüft zuerst, was in Ihrem MOV steckt:

- **Nutzen Video und Ton bereits Codecs, die MP4 unterstützt**, werden die Datenströme in einen MP4-Container kopiert, ohne das Bild anzutasten. Das geht schnell – meist in Sekunden – und ist verlustfrei.
- **Andernfalls** (etwa bei ProRes-Material oder ungewöhnlichen Audioformaten) wird das Video in H.264 mit AAC-Ton neu kodiert, die am breitesten unterstützte Kombination. Das dauert länger und hängt von Ihrem Gerät ab.

## Tipps fürs iPhone

- **High Efficiency oder Maximale Kompatibilität:** Unter Einstellungen → Kamera → Formate nimmt *High Efficiency* HEVC-Video auf, *Maximale Kompatibilität* nimmt H.264 auf – das läuft fast überall, braucht aber mehr Speicher.
- **Direkt auf dem Handy:** Öffnen Sie diese Seite in Safari, tippen Sie auf **Dateien auswählen**, wählen Sie Videos aus der Mediathek und finden Sie die MP4s in der Dateien-App unter „Downloads“.
- **Zu groß zum Verschicken?** Umwandeln und verkleinern in einem Schritt mit [Video komprimieren](/de/video-komprimieren) – es nimmt MOV an und gibt MP4 aus.

## Häufige Probleme

- **Die Umwandlung dauert lange.** Das MOV musste neu kodiert werden (etwa ProRes-Material aus einer Kamera oder einem Schnittprogramm). Dafür ist ein Computer viel schneller als ein Handy.
- **Das MP4 ist genauso groß wie das MOV.** Das ist zu erwarten, wenn die Datenströme unverändert kopiert werden. Zum Verkleinern nutzen Sie [Video komprimieren](/de/video-komprimieren).

## Verwandte Werkzeuge

- Andere Formate: [WebM in MP4](/de/webm-in-mp4) und [MKV in MP4](/de/mkv-in-mp4).
- Nur die Tonspur? [MP4 in MP3](/de/mp4-in-mp3) funktioniert direkt mit MOV-Dateien.

Da alles lokal mit FFmpeg als WebAssembly läuft, gibt es keinen Upload, keine Warteschlange und kein Wasserzeichen – und Ihre privaten Videos bleiben privat.
