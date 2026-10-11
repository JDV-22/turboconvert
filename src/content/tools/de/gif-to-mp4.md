---
name: 'GIF in MP4'
title: 'GIF in MP4 umwandeln – kleiner, flüssiger, kostenlos'
description: 'Animierte GIFs in MP4-Videos umwandeln, die meist viel kleiner sind und auf Instagram, WhatsApp und jeder Website laufen. Kostenlos, stapelweise, ohne Upload.'
h1: 'GIF in MP4 umwandeln'
lead: 'Machen Sie aus animierten GIFs MP4-Videos, die leichter und flüssiger sind und von jedem sozialen Netzwerk und Messenger akzeptiert werden. Die Umwandlung läuft auf Ihrem Gerät – nichts wird hochgeladen.'
what: 'Ihr GIF'
howTo: 'GIF in MP4 umwandeln'
steps:
  - 'Klicken Sie auf <strong>Dateien auswählen</strong> oder ziehen Sie ein oder mehrere animierte GIFs in das Feld.'
  - 'Klicken Sie auf <strong>Umwandeln</strong>. Einstellen müssen Sie nichts – das Video behält Größe und Geschwindigkeit des GIFs.'
  - 'Jedes MP4 wird heruntergeladen, sobald es fertig ist; bei mehreren GIFs nutzen Sie <strong>Alle herunterladen (ZIP)</strong>.'
limits:
  - 'GIFs bis 200 MB pro Datei. Beim ersten Mal wird die Konvertierungs-Engine (rund 31 MB) geladen, die Ihr Browser danach im Cache behält.'
  - 'MP4 unterstützt keine Transparenz. Transparente Bereiche des GIFs werden zu einem einfarbigen Hintergrund.'
  - 'Ein MP4 wird standardmäßig nur einmal abgespielt. Um es auf einer Website zu wiederholen, nutzen Sie das Attribut <code>loop</code> des Videos (siehe unten); die meisten Social-Media-Apps wiederholen kurze Videos automatisch.'
  - 'Breite und Höhe werden auf eine gerade Pixelzahl gerundet, die das H.264-Format verlangt – höchstens ein Pixel wird abgeschnitten.'
faq:
  - q: 'Warum ein GIF in MP4 umwandeln?'
    a: 'GIF ist ein Format aus den 1980er-Jahren, auf 256 Farben pro Bild begrenzt und für Animationen sehr ineffizient. Dieselbe Animation als H.264-MP4 ist meist um ein Vielfaches kleiner, sieht besser aus und wird von Apps akzeptiert, die GIF-Uploads ablehnen, etwa Instagram.'
  - q: 'Sieht das MP4 genauso aus wie das GIF?'
    a: 'Ja. Größe und Timing bleiben erhalten, und jedes Bild wird umgewandelt. Die Farben sehen meist gleich oder besser aus, da die 256-Farben-Grenze des GIFs entfällt.'
  - q: 'Hat das MP4 Ton?'
    a: 'Nein – GIFs haben keinen Ton, daher ist das MP4 stumm. Genau deshalb können Browser es auf Webseiten automatisch abspielen.'
  - q: 'Kann ich mehrere GIFs auf einmal umwandeln?'
    a: 'Ja. Ziehen Sie mehrere Dateien hinein; sie werden nacheinander verarbeitet, und Sie können alle in einer ZIP-Datei speichern.'
  - q: 'Werden meine GIFs hochgeladen?'
    a: 'Nein. FFmpeg läuft in Ihrem Browser-Tab, daher verlassen Ihre Dateien nie Ihr Gerät.'
---

## Warum GIF das falsche Format für Animationen ist

Das GIF-Format stammt aus dem Jahr 1987. Es speichert jedes Bild als Palettenbild mit höchstens 256 Farben, komprimiert die Bilder unabhängig voneinander und kennt keine Bewegung zwischen ihnen. Das Ergebnis sind schwere Dateien mit sichtbaren Farbstufen – ein paar Sekunden Animation können leicht mehrere Megabyte wiegen.

MP4 mit H.264-Video wurde für bewegte Bilder entwickelt: Es speichert nur, was sich zwischen den Bildern ändert, und unterstützt Millionen Farben. Deshalb wandeln GIPHY, X (Twitter) und die meisten Messenger die GIFs, die Sie senden, stillschweigend in MP4-Videos um.

## Wo ein MP4 besser funktioniert als ein GIF

- **Instagram** akzeptiert keine GIF-Uploads für Beiträge, Stories oder Reels – ein MP4 geht direkt durch.
- **Websites und Blogs:** GIFs durch MP4 zu ersetzen ist eine der klassischen Empfehlungen von Google PageSpeed Insights, denn leichtere Seiten laden schneller.
- **Präsentationen:** PowerPoint, Keynote und Google Präsentationen spielen MP4 flüssig ab, während große GIFs ruckeln können.
- **Anhänge in E-Mails und Chats:** Eine kleinere Datei ist schneller verschickt und bleibt unter den Größenlimits.

## Das Video auf einer Webseite wiederholen

Damit sich ein MP4 auf Ihrer Website genau wie ein GIF verhält – automatisch starten, wiederholen, ohne Bedienelemente –, verwenden Sie:

```html
<video src="animation.mp4" autoplay loop muted playsinline></video>
```

`muted` und `playsinline` sind nötig, damit Browser (vor allem auf dem iPhone) das Video automatisch starten.

## Transparente GIFs

MP4-Video hat keinen Transparenzkanal. Hat Ihr GIF einen transparenten Hintergrund, wird dieser Bereich im MP4 einfarbig. Soll eine Animation auf einer Webseite transparent bleiben, behalten Sie das GIF oder bitten Sie die Designerin bzw. den Designer um ein animiertes WebP oder WebM mit Alphakanal.

## Privat von Grund auf

Die Umwandlung nutzt FFmpeg, kompiliert zu WebAssembly, und läuft vollständig in Ihrem Browser. Ihre GIFs werden von Ihrer Festplatte gelesen, die MP4s in Ihre Downloads geschrieben – nichts wird an einen Server gesendet.

## Verwandte Tools

- Den umgekehrten Weg gehen? [Video in GIF](/de/video-in-gif) macht aus einem Clip ein animiertes GIF.
- Brauchen Sie ein kleineres Video? [Video komprimieren](/de/video-komprimieren) verkleinert jedes MP4.
