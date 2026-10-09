---
name: 'SVG in PNG'
title: 'SVG in PNG umwandeln – hohe Auflösung, kostenlos'
description: 'SVG in PNG umwandeln mit 1×, 2× oder 4× Skalierung – scharfe Bilder in hoher Auflösung mit transparentem Hintergrund. Im Stapel, kostenlos, ohne Upload.'
h1: 'SVG in PNG umwandeln'
lead: 'Machen Sie aus SVG-Vektordateien scharfe PNG-Bilder in genau der Auflösung, die Sie brauchen – die Transparenz bleibt erhalten. Die Umwandlung passiert in Ihrem Browser, ohne Upload.'
what: 'Ihre SVG-Dateien'
howTo: 'SVG in PNG umwandeln'
steps:
  - 'Klicken Sie auf <strong>Dateien auswählen</strong> oder ziehen Sie eine oder mehrere .svg-Dateien in das Feld.'
  - 'Wählen Sie eine <strong>Skalierung</strong>: 1× nutzt die im SVG festgelegte Größe, 2× verdoppelt sie (Standard, scharf auf hochauflösenden Displays), 4× ergibt ein großes, drucktaugliches Bild.'
  - 'Klicken Sie auf <strong>Umwandeln</strong> und laden Sie jedes PNG einzeln oder alle mit <strong>Alle herunterladen (ZIP)</strong> herunter.'
limits:
  - 'SVG-Dateien bis 20 MB pro Datei.'
  - 'Schriften, auf die das SVG verweist, die aber nicht eingebettet sind, werden durch eine ähnliche Schrift aus Ihrem Browser ersetzt. Für ein exaktes Ergebnis wandeln Sie Text im Designprogramm in Pfade um.'
  - 'Externe Bilder oder Stylesheets, die per URL im SVG verlinkt sind, werden nicht geladen. Eingebettete Bilder funktionieren.'
  - 'Animationen und interaktive Skripte werden nicht dargestellt – Sie erhalten ein Standbild.'
faq:
  - q: 'Wie wandle ich SVG in ein hochauflösendes PNG um?'
    a: 'Wählen Sie die Skalierung 4×. Ein Icon mit 256 × 256 wird zu einem PNG mit 1024 × 1024 Pixeln. Es wird aus den Vektoren neu gezeichnet statt hochgerechnet und bleibt daher gestochen scharf.'
  - q: 'Bleibt der transparente Hintergrund erhalten?'
    a: 'Ja. Bereiche ohne Füllung im SVG bleiben im PNG transparent.'
  - q: 'Warum sieht die Schrift in meinem PNG anders aus?'
    a: 'Das SVG nutzt eine Schrift, die weder in der Datei eingebettet noch in Ihrem Browser verfügbar ist, also wird eine Ersatzschrift verwendet. Wandeln Sie den Text vor dem SVG-Export in Pfade um.'
  - q: 'Wie groß wird das PNG?'
    a: 'Breite und Höhe des SVG multipliziert mit der gewählten Skalierung. Legt das SVG keine Breite und Höhe fest, ergibt sich die Grundgröße aus seiner viewBox oder einem Browser-Standardwert – tragen Sie im Designprogramm feste Maße ein, um ein vorhersehbares Ergebnis zu bekommen.'
  - q: 'Werden meine Dateien hochgeladen?'
    a: 'Nein. Ihr Browser rendert das SVG und speichert das PNG auf Ihrem Gerät.'
---

## Warum SVG in PNG umwandeln?

SVG ist ein Vektorformat: Es beschreibt Formen mathematisch, bleibt in jeder Größe scharf und eignet sich ideal für Logos, Icons und Illustrationen im Web. Viele Stellen akzeptieren es aber nicht – soziale Netzwerke, E-Mail-Signaturen, Office-Dokumente, Messenger, manche Druckdienste und Marktplätze. PNG ist die universelle Alternative und bewahrt die zwei Dinge, auf die es bei Grafiken ankommt: **scharfe Kanten** und **Transparenz**.

## Die Skalierung wählen

Ein SVG hat keine feste Pixelgröße – Sie legen die Auflösung beim Export fest:

| Skalierung | Beispiel (SVG mit 200 × 100) | Verwendung |
|---|---|---|
| 1× | 200 × 100 px | Exakte Größe, kleine Dateien |
| 2× | 400 × 200 px | Websites und Apps auf hochauflösenden (Retina-)Displays |
| 4× | 800 × 400 px | Präsentationen, Druck, große Bildschirme |

Jedes Pixel des PNG wird aus den Vektoren berechnet. Ein Export mit 4× ist deshalb tatsächlich schärfer als ein nachträglich vergrößertes 1×-PNG.

## So wird das Ergebnis exakt

SVGs aus Illustrator, Figma, Inkscape oder Icon-Bibliotheken werden in der Regel perfekt umgewandelt. Sieht etwas anders aus, liegt es fast immer an einem dieser Punkte:

- **Nicht eingebettete Schriften** – wandeln Sie Text vor dem Export im Designprogramm in Pfade um.
- **Verlinkte Bilder** – betten Sie Bilder im SVG ein, statt sie per URL zu verlinken.
- **CSS der Webseite** – ein von einer Website kopiertes Icon kann seine Farbe aus dem Stylesheet der Seite beziehen; legen Sie die Füllfarbe direkt im SVG fest.

## Häufige Probleme

- **Das PNG ist leer oder unvollständig.** Das SVG hängt vermutlich von externen Dateien oder Styles einer Webseite ab. Betten Sie alles im SVG ein und versuchen Sie es erneut.
- **Das PNG ist kleiner als erwartet.** Das SVG definiert eine kleine Größe; wählen Sie die Skalierung 4× oder legen Sie im Designprogramm größere Maße fest.

## Verwandte Werkzeuge

- Sie brauchen ein Website-Icon? [PNG in ICO](/de/png-in-ico) erstellt direkt aus einem SVG oder PNG ein Favicon in mehreren Größen.
- Sie brauchen ein JPG mit weißem Hintergrund? Wandeln Sie das PNG mit [PNG in JPG](/de/png-in-jpg) um.
- Das PNG ist zu schwer fürs Web? [PNG in WebP](/de/png-in-webp) behält die Transparenz bei einem Bruchteil der Größe.

## Ihre Grafiken bleiben bei Ihnen

Alles wird lokal von Ihrem Browser gerendert. Unveröffentlichte Logos und Kundengrafiken verlassen Ihren Computer also nie – es gibt kein Konto, kein Wasserzeichen und keine Warteschlange.
