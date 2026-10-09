---
name: 'PNG in ICO'
title: 'PNG in ICO umwandeln – Favicon erstellen, kostenlos'
description: 'PNG, JPG, WebP oder SVG in eine ICO-Datei mit mehreren Größen (16 bis 256 px) umwandeln – als Favicon oder Windows-Symbol. Kostenlos im Browser, ohne Upload.'
h1: 'PNG in ICO umwandeln'
lead: 'Erstellen Sie aus einem PNG, JPG, WebP oder SVG eine richtige .ico-Datei mit mehreren Größen – als Favicon für Ihre Website oder als Windows-Symbol. Sie entsteht in Ihrem Browser, Ihr Logo wird nie hochgeladen.'
what: 'Ihr Bild'
howTo: 'PNG in ICO umwandeln'
steps:
  - 'Klicken Sie auf <strong>Datei auswählen</strong> oder ziehen Sie Ihr Logo in das Feld – PNG, JPG, WebP oder SVG. Am besten eignet sich ein quadratisches Bild mit mindestens 256 × 256 px.'
  - 'Klicken Sie auf <strong>Umwandeln</strong>. Das Werkzeug erstellt eine .ico-Datei mit mehreren Größen von 16 × 16 bis 256 × 256 Pixel.'
  - 'Die .ico-Datei wird automatisch heruntergeladen. Benennen Sie sie in <code>favicon.ico</code> um, wenn Sie sie für eine Website verwenden.'
limits:
  - 'Ein Bild auf einmal, bis 20 MB.'
  - 'Starten Sie mit einem quadratischen Bild. Ein rechteckiges Logo füllt das Icon nicht gut aus – schneiden Sie es vorher in einem Bildbearbeitungsprogramm quadratisch zu.'
  - 'Feine Details und dünne Schrift verschwinden bei 16 × 16 px. Eine vereinfachte Version Ihres Logos (ein Buchstabe oder ein Symbol) ist im Browser-Tab besser zu erkennen.'
faq:
  - q: 'Was ist eine ICO-Datei?'
    a: 'ICO ist das Symbolformat von Windows und das Format, das Browser für Favicons nutzen. Anders als ein PNG kann eine einzige .ico-Datei mehrere Größen desselben Symbols enthalten, sodass überall die schärfste verwendet wird.'
  - q: 'Welche Größen enthält die ICO-Datei?'
    a: 'Mehrere Standardgrößen von 16 × 16 bis 256 × 256 Pixel – genug für Browser-Tabs, Lesezeichen, die Windows-Taskleiste und Desktop-Verknüpfungen.'
  - q: 'Wie binde ich ein Favicon in meine Website ein?'
    a: 'Laden Sie <code>favicon.ico</code> in das Stammverzeichnis Ihrer Website hoch und fügen Sie <code>&lt;link rel="icon" href="/favicon.ico" sizes="any"&gt;</code> in den &lt;head&gt; Ihrer Seiten ein. Browser suchen außerdem automatisch nach /favicon.ico.'
  - q: 'Bleibt die Transparenz in der ICO-Datei erhalten?'
    a: 'Ja. Transparente Bereiche eines PNG, WebP oder SVG bleiben transparent, sodass Ihr Icon in hellen und dunklen Browser-Designs gut aussieht.'
  - q: 'Kann ich ein Favicon aus einem JPG erstellen?'
    a: 'Ja, aber JPG hat keine Transparenz, das Icon bekommt also einen vollflächigen Hintergrund. Für ein sauberes Ergebnis nehmen Sie ein PNG oder SVG mit transparentem Hintergrund.'
  - q: 'Wird mein Logo hochgeladen?'
    a: 'Nein. Das Icon wird von Ihrem Browser auf Ihrem Gerät erzeugt.'
---

## Warum eine ICO-Datei mit mehreren Größen?

Ein Favicon erscheint an vielen Stellen in unterschiedlichen Größen: 16 px im Browser-Tab, 32 px in Lesezeichen und in der Windows-Taskleiste, 48 px und mehr bei Verknüpfungen und angehefteten Seiten. Ein einzelnes kleines PNG wird beim Vergrößern unscharf und verliert beim Verkleinern Details. Eine .ico-Datei löst das, indem sie mehrere vorberechnete Größen bündelt – Browser oder Betriebssystem wählen die passende.

## Das Ausgangsbild vorbereiten

- **Quadratisch.** Icons sind quadratisch; schneiden Sie Ihr Logo vor der Umwandlung auf das Format 1:1 zu.
- **Groß genug.** 256 × 256 px oder mehr, damit auch die größte Variante in der ICO-Datei scharf ist. Ideal ist ein SVG, weil es in jeder Größe sauber gerendert wird.
- **Transparenter Hintergrund.** Nutzen Sie ein PNG oder SVG mit Transparenz, damit sich das Icon in helle und dunkle Browser-Designs einfügt.
- **Einfach.** Bei 16 px ist ein komplettes Logo mit Slogan unlesbar. Nehmen Sie das Bildzeichen oder den Anfangsbuchstaben Ihrer Marke.

Ist Ihr Logo ein SVG und brauchen Sie zusätzlich PNG-Versionen, exportieren Sie diese mit [SVG in PNG](/de/svg-in-png). Ist das Ausgangsbild sehr groß, verkleinern Sie es vorher mit [Bildgröße ändern](/de/bildgroesse-aendern).

## Das Favicon einbinden

1. Benennen Sie die heruntergeladene Datei in `favicon.ico` um.
2. Laden Sie sie in das Stammverzeichnis Ihrer Website hoch (sodass sie unter `ihreseite.de/favicon.ico` erreichbar ist).
3. Fügen Sie diese Zeile in den `<head>` Ihrer Seiten ein:

```html
<link rel="icon" href="/favicon.ico" sizes="any">
```

Website-Baukästen wie WordPress, Shopify, Squarespace und Wix haben eine Einstellung „Website-Icon“ oder „Favicon“, über die Sie die Datei stattdessen hochladen. Browser speichern Favicons hartnäckig im Cache – sehen Sie das neue Icon nicht, öffnen Sie die Seite in einem privaten Fenster.

## Häufige Probleme

- **Das Icon wirkt im Browser-Tab unscharf.** Das Ausgangsbild war zu klein oder zu detailreich. Nehmen Sie ein größeres, einfacheres Bild – am besten ein SVG.
- **Das Icon hat ein weißes oder schwarzes Quadrat drumherum.** Das Ausgangsbild hatte keine Transparenz (oft ein JPG). Nehmen Sie ein PNG mit transparentem Hintergrund.
- **Das alte Icon wird weiter angezeigt.** Leeren Sie den Cache oder testen Sie in einem privaten Fenster; Browser behalten Favicons lange.

## Symbole für Windows

Dieselbe .ico-Datei funktioniert unter Windows: Klicken Sie mit der rechten Maustaste auf eine Verknüpfung oder einen Ordner, wählen Sie *Eigenschaften* → *Anpassen* bzw. *Anderes Symbol* und wählen Sie Ihre Datei aus.

## Privat und kostenlos

Kein Konto, kein Wasserzeichen, kein Upload: Das Icon wird direkt in Ihrem Browser aus Ihrem Bild erzeugt – ein noch unveröffentlichtes Markenlogo bleibt auf Ihrem Computer.
