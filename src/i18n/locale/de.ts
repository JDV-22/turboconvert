import type { LocalePack } from '../packs';

// German (de) — formal register (Sie). Slugs: lowercase ASCII, umlauts
// transliterated (ä→ae, ö→oe, ü→ue, ß→ss), keyword-first, matching the
// queries German users actually type ("pdf verkleinern", "pdf in word" …).
const de: LocalePack = {
  slugs: {
    tools: {
      // PDF
      'compress-pdf': 'pdf-verkleinern',
      'merge-pdf': 'pdf-zusammenfuegen',
      'split-pdf': 'pdf-teilen',
      'rotate-pdf': 'pdf-drehen',
      'organize-pdf': 'pdf-seiten-sortieren',
      'pdf-to-jpg': 'pdf-in-jpg',
      'pdf-to-png': 'pdf-in-png',
      'jpg-to-pdf': 'jpg-in-pdf',
      'png-to-pdf': 'png-in-pdf',
      'add-page-numbers': 'pdf-seitenzahlen-einfuegen',
      'watermark-pdf': 'pdf-wasserzeichen',
      'protect-pdf': 'pdf-passwort-schuetzen',
      'unlock-pdf': 'pdf-passwort-entfernen',
      'pdf-to-text': 'pdf-in-text',
      'ocr-pdf': 'ocr-pdf',
      // Documents
      'pdf-to-word': 'pdf-in-word',
      'word-to-pdf': 'word-in-pdf',
      'pdf-to-excel': 'pdf-in-excel',
      'excel-to-pdf': 'excel-in-pdf',
      'pdf-to-ppt': 'pdf-in-powerpoint',
      'ppt-to-pdf': 'powerpoint-in-pdf',
      'word-to-jpg': 'word-in-jpg',
      // Images
      'compress-image': 'bild-komprimieren',
      'resize-image': 'bildgroesse-aendern',
      'heic-to-jpg': 'heic-in-jpg',
      'heic-to-png': 'heic-in-png',
      'png-to-jpg': 'png-in-jpg',
      'jpg-to-png': 'jpg-in-png',
      'webp-to-jpg': 'webp-in-jpg',
      'webp-to-png': 'webp-in-png',
      'jpg-to-webp': 'jpg-in-webp',
      'png-to-webp': 'png-in-webp',
      'svg-to-png': 'svg-in-png',
      'avif-to-jpg': 'avif-in-jpg',
      'image-to-ico': 'png-in-ico',
      // Video
      'mp4-to-mp3': 'mp4-in-mp3',
      'video-to-gif': 'video-in-gif',
      'compress-video': 'video-komprimieren',
      'trim-video': 'video-schneiden',
      'mute-video': 'video-ton-entfernen',
      'mov-to-mp4': 'mov-in-mp4',
      'webm-to-mp4': 'webm-in-mp4',
      'mkv-to-mp4': 'mkv-in-mp4',
      'mp3-to-mp4': 'mp3-in-mp4',
      // Audio
      'wav-to-mp3': 'wav-in-mp3',
      'mp3-to-wav': 'mp3-in-wav',
      'm4a-to-mp3': 'm4a-in-mp3',
      'ogg-to-mp3': 'ogg-in-mp3',
      'flac-to-mp3': 'flac-in-mp3',
      'audio-converter': 'audio-konverter',
      'trim-audio': 'audio-schneiden',
    },
    categories: {
      pdf: 'pdf-tools',
      image: 'bild-tools',
      document: 'dokument-konverter',
      video: 'video-tools',
      audio: 'audio-tools',
    },
    pages: {
      about: 'ueber-uns',
      contact: 'kontakt',
      privacy: 'datenschutz',
      terms: 'nutzungsbedingungen',
      blog: 'blog',
      tools: 'alle-tools',
    },
  },

  home: {
    title: 'Dateien kostenlos umwandeln – PDF, Bild, Video, ohne Upload',
    description: 'PDF, Word, Excel, Bilder, Audio und Video kostenlos umwandeln. Über 50 Tools direkt im Browser: kein Upload, keine Anmeldung, kein Wasserzeichen.',
    faq: [
      { q: 'Ist TurboConvert wirklich kostenlos?', a: 'Ja. Alle Tools sind kostenlos – ohne Konto, ohne Tageslimit und ohne Wasserzeichen. Die Website finanziert sich über dezente Werbung, nie über Gebühren für Ihre Umwandlungen.' },
      { q: 'Werden meine Dateien auf einen Server hochgeladen?', a: 'Nein. Die Umwandlung läuft in Ihrem Browser, mit WebAssembly-Versionen bewährter Open-Source-Engines (Ghostscript, FFmpeg, PDF.js, pdf-lib). Ihre Dateien bleiben auf Ihrem Gerät – das können Sie im Netzwerk-Tab Ihres Browsers selbst nachprüfen.' },
      { q: 'Gibt es eine maximale Dateigröße?', a: 'Das Limit hängt vom Tool ab (meist 100 MB bis 1 GB) und vor allem vom Arbeitsspeicher Ihres Geräts, da alles lokal verarbeitet wird. Ein Computer kommt mit großen Dateien besser zurecht als ein Smartphone.' },
      { q: 'Funktioniert das auf iPhone, Android, Mac und Windows?', a: 'Ja. TurboConvert läuft in jedem aktuellen Browser – Safari, Chrome, Edge, Firefox – auf Smartphone, Tablet und Computer. Sie müssen nichts installieren.' },
      { q: 'Warum dauert die erste Video- oder OCR-Umwandlung länger?', a: 'Manche Tools brauchen eine große Engine (zum Beispiel FFmpeg für Video, rund 31 MB). Sie wird einmal geladen und dann von Ihrem Browser zwischengespeichert, sodass spätere Umwandlungen sofort starten.' },
      { q: 'Kann ich TurboConvert offline nutzen?', a: 'Sobald eine Tool-Seite und ihre Engine geladen sind, braucht die Umwandlung selbst keine Internetverbindung mehr. Sie können die Verbindung trennen und auf dieser Seite weiterarbeiten.' },
    ],
    body: `<h2>Ein Dateikonverter, der Ihre Dateien respektiert</h2>
<p>Die meisten Online-Konverter funktionieren gleich: Sie laden Ihr Dokument auf deren Server hoch, warten in einer Schlange, laden das Ergebnis herunter – und hoffen, dass Ihre Datei wie versprochen gelöscht wird. TurboConvert geht den umgekehrten Weg: Die Konvertierungssoftware kommt zu Ihnen in den Browser, und Ihre Dateien verlassen nie Ihr Gerät. Das ist schneller (kein Upload, keine Warteschlange), sicherer (nichts kann abfließen) und funktioniert auch bei langsamer Verbindung.</p>
<h2>Was Sie damit machen können</h2>
<ul>
<li><strong>PDF</strong>: verkleinern, zusammenfügen, teilen, drehen, Seitenzahlen oder ein Wasserzeichen einfügen, mit Passwort schützen oder entsperren, in JPG und PNG umwandeln und umgekehrt, Text extrahieren und gescannte Dokumente per OCR lesbar machen.</li>
<li><strong>Dokumente</strong>: PDF in Word, Excel oder PowerPoint umwandeln – und Word, Excel oder PowerPoint in PDF.</li>
<li><strong>Bilder</strong>: HEIC (iPhone-Fotos), WebP, AVIF, PNG, JPG und SVG umwandeln, Bilder stapelweise komprimieren und skalieren, Favicons erstellen.</li>
<li><strong>Video und Audio</strong>: MP3 aus einem Video extrahieren, MOV, WebM und MKV in MP4 umwandeln, GIFs erstellen, Videos komprimieren und schneiden, WAV, M4A, OGG und FLAC umwandeln.</li>
</ul>`,
  },

  hubs: {
    all: {
      title: 'Alle kostenlosen Konverter – PDF, Bild, Video, Audio',
      description: 'Alle TurboConvert-Tools an einem Ort: Konverter für PDF, Word, Excel, Bilder, Video und Audio, die im Browser laufen. Kostenlos, privat, ohne Anmeldung.',
      h1: 'Alle Tools',
      lead: 'Alle Konverter und Werkzeuge von TurboConvert. Alle kostenlos, alle laufen privat in Ihrem Browser.',
      body: '',
    },
    pdf: {
      title: 'PDF-Tools kostenlos – verkleinern, zusammenfügen, umwandeln',
      description: 'PDFs kostenlos verkleinern, zusammenfügen, teilen, drehen, schützen und umwandeln – direkt im Browser. Ihre Dateien werden nie hochgeladen. Ohne Anmeldung.',
      h1: 'PDF-Tools',
      lead: 'Alles, was Sie für PDFs brauchen – verkleinern, zusammenfügen, teilen, umwandeln, schützen –, verarbeitet auf Ihrem eigenen Gerät.',
      body: `<h2>PDFs bearbeiten und umwandeln, ohne sie hochzuladen</h2>
<p>In PDFs stecken oft genau die Dokumente, die man am wenigsten aus der Hand geben möchte: Verträge, Gehaltsabrechnungen, Steuerbescheide, Ausweiskopien. Die PDF-Tools von TurboConvert nutzen dieselben bewährten Open-Source-Engines wie professionelle Software – Ghostscript zum Komprimieren, PDF.js zum Darstellen und pdf-lib zum Bearbeiten –, laufen aber in Ihrem Browser. Ihre Dateien gelangen also auf keinen Server.</p>
<h2>Welches PDF-Tool brauchen Sie?</h2>
<ul>
<li><strong>Datei zu groß für die E-Mail?</strong> Mit <a href="/de/pdf-verkleinern">PDF verkleinern</a> schrumpfen gescannte Dokumente oft um mehr als die Hälfte.</li>
<li><strong>Mehrere Dokumente als eine Datei verschicken?</strong> <a href="/de/pdf-zusammenfuegen">PDF zusammenfügen</a> fügt sie in der gewünschten Reihenfolge zusammen.</li>
<li><strong>Nur ein paar Seiten nötig?</strong> <a href="/de/pdf-teilen">PDF teilen</a> extrahiert Seitenbereiche.</li>
<li><strong>Text bearbeiten?</strong> Wandeln Sie die Datei mit <a href="/de/pdf-in-word">PDF in Word</a> um.</li>
<li><strong>Gescanntes Dokument?</strong> Machen Sie den Text mit <a href="/de/ocr-pdf">OCR PDF</a> nutzbar.</li>
</ul>`,
    },
    document: {
      title: 'PDF in Word, Excel & PowerPoint umwandeln – kostenlos',
      description: 'PDF in Word, Excel oder PowerPoint umwandeln und zurück – kostenlos im Browser. Bearbeitbare Dateien, kein Upload, keine Anmeldung, kein Wasserzeichen.',
      h1: 'Dokument-Konverter',
      lead: 'Machen Sie aus PDFs bearbeitbare Word-, Excel- und PowerPoint-Dateien – und aus Office-Dokumenten PDFs –, ohne sie irgendwo hochzuladen.',
      body: `<h2>Office-Dokumente, umgewandelt auf Ihrem Gerät</h2>
<p>Wer zwischen PDF und Office-Formaten umwandelt, muss Berichte, Rechnungen oder Präsentationen meist einer fremden Website anvertrauen. Hier läuft die Umwandlung lokal in Ihrem Browser: Ein PDF wird Seite für Seite analysiert, um Absätze, Überschriften, Tabellen und Bilder wieder aufzubauen, und Office-Dateien werden in PDF umgewandelt, ohne Ihren Computer zu verlassen.</p>
<p>Bei gescannten PDFs (Fotos von Papierdokumenten) nutzen Sie zuerst die <a href="/de/ocr-pdf">Texterkennung (OCR)</a>, damit der Text erkannt wird.</p>`,
    },
    image: {
      title: 'Bilder kostenlos umwandeln & komprimieren – HEIC, WebP, JPG',
      description: 'HEIC, WebP, AVIF, PNG, JPG und SVG umwandeln, Bilder stapelweise komprimieren und skalieren – kostenlos im Browser. Kein Upload, keine Anmeldung.',
      h1: 'Bild-Tools',
      lead: 'Fotos und Grafiken stapelweise umwandeln, komprimieren und skalieren – iPhone-HEIC, WebP, AVIF, PNG, JPG, SVG und mehr.',
      body: `<h2>Bilder stapelweise umwandeln, direkt im Browser</h2>
<p>Ob ein Foto oder ein paar Hundert: Die Bilder werden von der Bild-Engine Ihres Browsers dekodiert und neu kodiert (für iPhone-Fotos im HEIC-Format kommt ein WebAssembly-Decoder hinzu) und dann einzeln oder als ZIP-Datei bereitgestellt. Nichts wird hochgeladen – deshalb geht es auch schnell, denn es gibt keine Übertragungszeit.</p>
<h2>Das passende Format wählen</h2>
<ul>
<li><strong>JPG</strong> – Fotos, maximale Kompatibilität.</li>
<li><strong>PNG</strong> – Screenshots, Logos, Transparenz, verlustfrei.</li>
<li><strong>WebP</strong> – modernes Webformat, 25–35 % kleiner als JPG, unterstützt Transparenz.</li>
<li><strong>HEIC</strong> – Fotoformat des iPhones; für Windows, Android und Websites in JPG umwandeln.</li>
</ul>`,
    },
    video: {
      title: 'Video kostenlos umwandeln – MP4, MOV, GIF, komprimieren',
      description: 'MOV, WebM und MKV in MP4 umwandeln, MP3 aus Videos extrahieren, GIFs erstellen, Videos komprimieren und schneiden – kostenlos und privat, ohne Upload.',
      h1: 'Video-Tools',
      lead: 'Videos umwandeln, komprimieren, schneiden oder in GIF und MP3 verwandeln – mit FFmpeg, privat in Ihrem Browser.',
      body: `<h2>FFmpeg in Ihrem Browser</h2>
<p>Die Video-Tools von TurboConvert nutzen FFmpeg – die Engine hinter den meisten professionellen Videoprogrammen –, kompiliert zu WebAssembly. Die Engine (rund 31 MB) wird einmal geladen und dann zwischengespeichert. Da Ihr Video nie hochgeladen wird, müssen Sie nicht erst auf die Übertragung von 500 MB warten, bevor die Umwandlung überhaupt beginnt.</p>
<p>Die Geschwindigkeit hängt von Ihrem Gerät ab: Für lange oder hochauflösende Videos empfehlen wir einen aktuellen Computer.</p>`,
    },
    audio: {
      title: 'Audio kostenlos umwandeln – MP3, WAV, M4A, FLAC, OGG',
      description: 'WAV, M4A, FLAC und OGG in MP3 umwandeln, MP3 in WAV und Audiodateien schneiden – kostenlos im Browser mit FFmpeg. Kein Upload, keine Anmeldung.',
      h1: 'Audio-Tools',
      lead: 'Zwischen MP3, WAV, M4A, AAC, OGG, FLAC und OPUS umwandeln oder einen Titel schneiden – lokal, ohne Upload.',
      body: `<h2>Verlustbehaftet oder verlustfrei?</h2>
<p><strong>MP3, M4A (AAC), OGG und OPUS</strong> sind verlustbehaftet: kleine Dateien, ideal zum Anhören und Teilen. <strong>WAV und FLAC</strong> bewahren jedes Detail: WAV ist unkomprimiert und in Audioprogrammen universell nutzbar, FLAC ist verlustfrei komprimiert. Wer eine verlustbehaftete Datei in ein verlustfreies Format umwandelt, gewinnt die verlorene Qualität nicht zurück – die Datei wird nur größer.</p>`,
    },
  },
};

export default de;
