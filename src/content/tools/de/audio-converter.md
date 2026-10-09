---
name: 'Audio-Konverter'
title: 'Audio-Konverter – MP3, WAV, M4A, OGG, FLAC, OPUS | Kostenlos'
description: 'Kostenloser Audio-Konverter: zwischen MP3, WAV, M4A (AAC), OGG, FLAC und OPUS umwandeln oder Ton aus Videos extrahieren. Im Stapel, im Browser, ohne Upload.'
h1: 'Audio-Konverter'
lead: 'Wandeln Sie jede Audiodatei – oder die Tonspur eines Videos – in MP3, WAV, M4A, OGG, FLAC oder OPUS um. Eine Datei oder ein ganzer Stapel, alles in Ihrem Browser verarbeitet, ohne Upload.'
what: 'Ihre Audiodateien'
howTo: 'Audiodateien umwandeln'
steps:
  - 'Klicken Sie auf <strong>Dateien auswählen</strong> oder ziehen Sie Audio- oder Videodateien in das Feld – MP3, WAV, M4A, AAC, OGG, FLAC, OPUS, WMA, AIFF, AMR, MP4, MOV und mehr werden akzeptiert.'
  - 'Wählen Sie das <strong>Ausgabeformat</strong>: MP3, WAV, M4A (AAC), OGG (Vorbis), FLAC oder OPUS.'
  - 'Klicken Sie auf <strong>Umwandeln</strong> und laden Sie jede Datei einzeln oder alles mit <strong>Alle herunterladen (ZIP)</strong> herunter.'
limits:
  - 'Dateien bis 1 GB pro Datei. Beim ersten Mal wird die Konvertierungs-Engine (rund 31 MB) geladen und danach im Cache gehalten.'
  - 'Eine Bitrate lässt sich hier nicht einstellen; jedes Format nutzt eine gute Standardqualität. Für eine bestimmte MP3-Bitrate nutzen Sie <a href="/de/wav-in-mp3">WAV in MP3</a>, <a href="/de/m4a-in-mp3">M4A in MP3</a> oder <a href="/de/mp4-in-mp3">MP4 in MP3</a>.'
  - 'Die Umwandlung einer verlustbehafteten Datei (MP3, M4A, OGG) in ein verlustfreies Format (WAV, FLAC) stellt keine Qualität wieder her – sie verhindert nur weitere Verluste.'
  - 'Kopiergeschützte Dateien (DRM) lassen sich nicht umwandeln.'
faq:
  - q: 'Welches Audioformat soll ich wählen?'
    a: 'MP3 für maximale Kompatibilität, M4A (AAC) für Apple-Geräte und gute Qualität bei kleiner Größe, OPUS für Sprache in sehr kleinen Dateien, FLAC für verlustfreie Archivierung, WAV für Schnittprogramme.'
  - q: 'Kann ich den Ton aus einem Video extrahieren?'
    a: 'Ja. Ziehen Sie ein MP4, MOV, WebM, MKV oder anderes Video hinein und wählen Sie das Ausgabeformat; die Tonspur wird extrahiert und umgewandelt.'
  - q: 'Ist FLAC besser als WAV?'
    a: 'Beide sind verlustfrei und klingen identisch. FLAC ist komprimiert, also typischerweise halb bis zwei Drittel so groß wie WAV, und unterstützt Tags; WAV wird von mehr Schnittprogrammen und Geräten akzeptiert.'
  - q: 'Kann ich mehrere Dateien auf einmal umwandeln?'
    a: 'Ja. Ziehen Sie beliebig viele Dateien hinein; sie werden nacheinander in das gewählte Format umgewandelt und lassen sich zusammen als ZIP herunterladen.'
  - q: 'Werden meine Dateien hochgeladen?'
    a: 'Nein. Der Konverter ist FFmpeg, das in Ihrem Browser läuft – Ihre Audiodateien bleiben auf Ihrem Gerät.'
---

## Welches Format wofür?

| Format | Art | Ideal für |
|---|---|---|
| **MP3** | Verlustbehaftet | Überall abspielen: Handy, Auto, Websites, jeder Player |
| **M4A (AAC)** | Verlustbehaftet | iPhone, iTunes/Musik-App, gute Qualität bei kleiner Größe |
| **OGG (Vorbis)** | Verlustbehaftet | Spiele, Linux, Open-Source-Projekte |
| **OPUS** | Verlustbehaftet | Sprache, Podcasts und Streaming bei sehr niedrigen Bitraten |
| **FLAC** | Verlustfrei (komprimiert) | Musikarchiv, Hi-Fi-Hören |
| **WAV** | Verlustfrei (unkomprimiert) | Bearbeitung, Produktion, Hardware, CDs |

### Verlustbehaftet oder verlustfrei?

Verlustbehaftete Formate (MP3, AAC, Vorbis, Opus) entfernen Klanganteile, die das Ohr kaum wahrnimmt, um Dateien klein zu halten. Verlustfreie Formate (FLAC, WAV) behalten jedes Sample. Daraus ergeben sich drei Regeln:

- **Verlustfrei → verlustbehaftet** spart viel Platz bei kaum hörbarem Unterschied, wenn die Bitrate stimmt.
- **Verlustbehaftet → verlustfrei** verbessert den Klang nie; das lohnt sich nur, wenn ein Werkzeug WAV oder FLAC verlangt oder Sie ohne weitere Kompressionsrunde bearbeiten wollen.
- **Ketten verlustbehafteter Umwandlungen vermeiden** (MP3 → OGG → M4A): Jeder Schritt kostet etwas mehr. Wandeln Sie von der besten Quelle um, die Sie haben.

## Eingabeformate

Der Konverter liest fast jede Audiodatei: **MP3, WAV, M4A, AAC, OGG/OGA, FLAC, OPUS, WMA, AIFF/AIF und AMR** (typisch für alte Handyaufnahmen). Er nimmt auch **Videos** an – MP4, MOV, WebM, MKV, AVI, WMV, 3GP und mehr – und extrahiert deren Ton.

## Spezialisierte Werkzeuge

Für die häufigsten Umwandlungen bieten eigene Seiten eine Bitratenauswahl:

- [WAV in MP3](/de/wav-in-mp3), [M4A in MP3](/de/m4a-in-mp3), [OGG in MP3](/de/ogg-in-mp3), [FLAC in MP3](/de/flac-in-mp3)
- [MP3 in WAV](/de/mp3-in-wav) für Schnittprogramme und Hardware
- [Audio schneiden](/de/audio-schneiden), um nur einen Teil einer Aufnahme zu behalten

## Privat von Grund auf

Online-Audiokonverter laden Ihre Dateien meist auf einen Server. TurboConvert führt FFmpeg – die Open-Source-Engine hinter unzähligen Medienprogrammen – als WebAssembly in Ihrem Browser aus. Ihre Aufnahmen, Interviews und unveröffentlichten Titel verlassen Ihr Gerät nie, und Sie warten nicht auf einen Upload.

## Häufige Probleme

- **Die umgewandelte Datei klingt nicht besser.** Die Umwandlung von MP3 in WAV oder FLAC kann nicht zurückholen, was MP3 entfernt hat. Nutzen Sie, wenn vorhanden, die Originalaufnahme oder eine verlustfreie Quelle.
- **Die Datei läuft nicht auf dem iPhone.** OGG und OPUS werden von Apples Standard-Apps nur eingeschränkt unterstützt; wählen Sie für Apple-Geräte M4A (AAC) oder MP3.
- **Eine alte Handyaufnahme (.amr) lässt sich nicht öffnen.** AMR wird hier akzeptiert – wandeln Sie sie in MP3 um, dann läuft sie überall.
