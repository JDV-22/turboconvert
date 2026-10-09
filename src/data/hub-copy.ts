import type { Locale } from '@/i18n/locales';
import type { Category } from './tools';

type HubKey = Category | 'all';
interface HubCopy { title: string; description: string; h1: string; lead: string; body: string }

export const HUB_COPY: Partial<Record<Locale, Record<HubKey, HubCopy>>> = {
  en: {
    all: {
      title: 'All Free File Conversion Tools — PDF, Image, Video, Audio',
      description: 'Every TurboConvert tool in one place: PDF, Word, Excel, images, video and audio converters that run in your browser. Free, private, no sign-up.',
      h1: 'All tools',
      lead: 'Every converter and editor on TurboConvert. All free, all running privately in your browser.',
      body: '',
    },
    pdf: {
      title: 'Free PDF Tools Online — Compress, Merge, Split, Convert',
      description: 'Compress, merge, split, rotate, protect and convert PDFs for free. PDF tools that work in your browser — files are never uploaded. No sign-up.',
      h1: 'PDF tools',
      lead: 'Everything you need to work with PDFs — compress, merge, split, convert, protect — processed on your own device.',
      body: `<h2>Edit and convert PDFs without uploading them</h2>
<p>PDFs often contain the documents we least want to share: contracts, payslips, tax forms, IDs. TurboConvert’s PDF tools run on the same proven open-source engines used by professional software — Ghostscript for compression, PDF.js for rendering and pdf-lib for editing — but inside your browser, so your files never travel to a server.</p>
<h2>Which PDF tool do you need?</h2>
<ul>
<li><strong>File too big for email?</strong> Use <a href="/compress-pdf">Compress PDF</a> — scanned documents often shrink by more than half.</li>
<li><strong>Several documents to send as one?</strong> <a href="/merge-pdf">Merge PDF</a> combines them in the order you choose.</li>
<li><strong>Only need a few pages?</strong> <a href="/split-pdf">Split PDF</a> extracts page ranges.</li>
<li><strong>Need to edit the text?</strong> Convert it with <a href="/pdf-to-word">PDF to Word</a>.</li>
<li><strong>Scanned document?</strong> Make its text usable with <a href="/ocr-pdf">OCR PDF</a>.</li>
</ul>`,
    },
    document: {
      title: 'PDF to Word, Excel & PowerPoint Converters — Free Online',
      description: 'Convert PDF to Word, Excel or PowerPoint and back, for free, in your browser. Editable output, no upload, no sign-up, no watermark.',
      h1: 'Document converters',
      lead: 'Turn PDFs into editable Word, Excel and PowerPoint files — and Office documents into PDFs — without uploading them anywhere.',
      body: `<h2>Office documents, converted on your device</h2>
<p>Converting between PDF and Office formats usually means trusting a website with your reports, invoices or presentations. Here the conversion runs locally in your browser: a PDF is analysed page by page to rebuild paragraphs, headings, tables and images, and Office files are rendered to PDF without leaving your computer.</p>
<p>For scanned PDFs (photos of paper), run <a href="/ocr-pdf">OCR</a> first so the text can be recognised.</p>`,
    },
    image: {
      title: 'Free Image Converter & Compressor — HEIC, WebP, PNG, JPG',
      description: 'Convert HEIC, WebP, AVIF, PNG, JPG and SVG, compress and resize images in bulk — free, in your browser. No upload, no sign-up, no watermark.',
      h1: 'Image tools',
      lead: 'Convert, compress and resize photos and graphics in bulk — iPhone HEIC, WebP, AVIF, PNG, JPG, SVG and more.',
      body: `<h2>Batch image conversion, right in your browser</h2>
<p>Drop one photo or a few hundred: images are decoded and re-encoded by your browser’s own imaging engine (plus a WebAssembly decoder for iPhone HEIC photos), then offered individually or as a single ZIP. Nothing is uploaded, which also makes it fast — there is no transfer time.</p>
<h2>Picking the right format</h2>
<ul>
<li><strong>JPG</strong> — photos, maximum compatibility.</li>
<li><strong>PNG</strong> — screenshots, logos, transparency, lossless.</li>
<li><strong>WebP</strong> — modern web format, 25–35% lighter than JPG, supports transparency.</li>
<li><strong>HEIC</strong> — iPhone photo format; convert to JPG for Windows, Android and websites.</li>
</ul>`,
    },
    video: {
      title: 'Free Video Converter Online — MP4, MOV, GIF, Compress',
      description: 'Convert MOV, WebM and MKV to MP4, extract MP3 from video, make GIFs, compress and trim videos — free, private, in your browser. No upload.',
      h1: 'Video tools',
      lead: 'Convert, compress, trim and turn videos into GIFs or MP3 — with FFmpeg running privately in your browser.',
      body: `<h2>FFmpeg in your browser</h2>
<p>TurboConvert’s video tools use FFmpeg — the engine behind most professional video software — compiled to WebAssembly. The engine (about 31 MB) downloads once and is then cached. Because your video never uploads, there is no waiting for a 500 MB transfer before the conversion even starts.</p>
<p>Conversion speed depends on your device: a recent computer is recommended for long or high-resolution videos.</p>`,
    },
    audio: {
      title: 'Free Audio Converter Online — MP3, WAV, M4A, FLAC, OGG',
      description: 'Convert WAV, M4A, FLAC and OGG to MP3, MP3 to WAV, and trim audio — free, in your browser with FFmpeg. No upload, no sign-up.',
      h1: 'Audio tools',
      lead: 'Convert between MP3, WAV, M4A, AAC, OGG, FLAC and OPUS, or trim a track — locally, with no upload.',
      body: `<h2>Lossy or lossless?</h2>
<p><strong>MP3, M4A (AAC), OGG and OPUS</strong> are lossy: small files, ideal for listening and sharing. <strong>WAV and FLAC</strong> keep every detail: WAV is uncompressed and universal in audio editors, FLAC is compressed without loss. Converting a lossy file to a lossless format does not bring back lost quality — it only makes the file bigger.</p>`,
    },
  },
  fr: {
    all: {
      title: 'Tous les outils de conversion gratuits — PDF, image, vidéo',
      description: 'Tous les outils TurboConvert au même endroit : convertisseurs PDF, Word, Excel, images, vidéo et audio dans votre navigateur. Gratuit et privé.',
      h1: 'Tous les outils',
      lead: 'Tous les convertisseurs et éditeurs de TurboConvert. Gratuits, et exécutés en privé dans votre navigateur.',
      body: '',
    },
    pdf: {
      title: 'Outils PDF gratuits en ligne — compresser, fusionner, convertir',
      description: 'Compressez, fusionnez, divisez, pivotez, protégez et convertissez vos PDF gratuitement, dans votre navigateur. Aucun envoi de fichier, sans inscription.',
      h1: 'Outils PDF',
      lead: 'Tout pour travailler vos PDF — compresser, fusionner, diviser, convertir, protéger — traité sur votre propre appareil.',
      body: `<h2>Modifier et convertir des PDF sans les envoyer</h2>
<p>Les PDF contiennent souvent les documents qu’on préfère ne pas partager : contrats, fiches de paie, avis d’imposition, pièces d’identité. Les outils PDF de TurboConvert reposent sur les mêmes moteurs open source que les logiciels professionnels — Ghostscript pour la compression, PDF.js pour l’affichage, pdf-lib pour l’édition — mais ils tournent dans votre navigateur : vos fichiers ne partent sur aucun serveur.</p>
<h2>Quel outil PDF choisir ?</h2>
<ul>
<li><strong>Fichier trop lourd pour un e-mail ?</strong> Utilisez <a href="/fr/compresser-pdf">Compresser un PDF</a> — un document scanné perd souvent plus de la moitié de son poids.</li>
<li><strong>Plusieurs documents à envoyer en un seul ?</strong> <a href="/fr/fusionner-pdf">Fusionner des PDF</a> les assemble dans l’ordre choisi.</li>
<li><strong>Besoin de quelques pages seulement ?</strong> <a href="/fr/diviser-pdf">Diviser un PDF</a> extrait des plages de pages.</li>
<li><strong>Besoin de modifier le texte ?</strong> Convertissez-le avec <a href="/fr/pdf-en-word">PDF en Word</a>.</li>
<li><strong>Document scanné ?</strong> Rendez son texte exploitable avec l’<a href="/fr/ocr-pdf">OCR PDF</a>.</li>
</ul>`,
    },
    document: {
      title: 'Convertir PDF en Word, Excel, PowerPoint — gratuit en ligne',
      description: 'Convertissez vos PDF en Word, Excel ou PowerPoint et inversement, gratuitement dans votre navigateur. Fichiers modifiables, sans envoi ni inscription.',
      h1: 'Convertisseurs de documents',
      lead: 'Transformez vos PDF en fichiers Word, Excel et PowerPoint modifiables — et vos documents Office en PDF — sans les envoyer nulle part.',
      body: `<h2>Des documents Office convertis sur votre appareil</h2>
<p>Convertir entre PDF et formats Office revient d’habitude à confier ses rapports, factures ou présentations à un site web. Ici, la conversion s’exécute localement : un PDF est analysé page par page pour reconstruire paragraphes, titres, tableaux et images, et les fichiers Office sont convertis en PDF sans quitter votre ordinateur.</p>
<p>Pour un PDF scanné (photo d’un document papier), lancez d’abord l’<a href="/fr/ocr-pdf">OCR</a> pour que le texte soit reconnu.</p>`,
    },
    image: {
      title: 'Convertisseur et compresseur d’images gratuit — HEIC, WebP, JPG',
      description: 'Convertissez HEIC, WebP, AVIF, PNG, JPG et SVG, compressez et redimensionnez vos images par lots, gratuitement et sans envoi de fichier.',
      h1: 'Outils image',
      lead: 'Convertissez, compressez et redimensionnez vos photos par lots — HEIC d’iPhone, WebP, AVIF, PNG, JPG, SVG et plus.',
      body: `<h2>Conversion d’images par lots, dans votre navigateur</h2>
<p>Déposez une photo ou quelques centaines : les images sont décodées et réencodées par le moteur d’images de votre navigateur (avec un décodeur WebAssembly pour les photos HEIC d’iPhone), puis proposées une par une ou dans un seul ZIP. Rien n’est envoyé, ce qui rend aussi l’opération rapide : aucun temps de transfert.</p>
<h2>Bien choisir son format</h2>
<ul>
<li><strong>JPG</strong> — photos, compatibilité maximale.</li>
<li><strong>PNG</strong> — captures d’écran, logos, transparence, sans perte.</li>
<li><strong>WebP</strong> — format web moderne, 25 à 35 % plus léger que le JPG, gère la transparence.</li>
<li><strong>HEIC</strong> — format photo de l’iPhone ; convertissez-le en JPG pour Windows, Android et les sites web.</li>
</ul>`,
    },
    video: {
      title: 'Convertisseur vidéo gratuit — MP4, MOV, GIF, compresser',
      description: 'Convertissez MOV, WebM et MKV en MP4, extrayez le MP3 d’une vidéo, créez des GIF, compressez et coupez vos vidéos — gratuit, sans envoi.',
      h1: 'Outils vidéo',
      lead: 'Convertissez, compressez, coupez et transformez vos vidéos en GIF ou en MP3 — avec FFmpeg, en privé dans votre navigateur.',
      body: `<h2>FFmpeg dans votre navigateur</h2>
<p>Les outils vidéo de TurboConvert utilisent FFmpeg — le moteur au cœur de la plupart des logiciels vidéo professionnels — compilé en WebAssembly. Le moteur (environ 31 Mo) est téléchargé une seule fois puis mis en cache. Comme votre vidéo n’est jamais envoyée, inutile d’attendre le transfert de 500 Mo avant que la conversion commence.</p>
<p>La vitesse dépend de votre appareil : un ordinateur récent est recommandé pour les vidéos longues ou en haute résolution.</p>`,
    },
    audio: {
      title: 'Convertisseur audio gratuit — MP3, WAV, M4A, FLAC, OGG',
      description: 'Convertissez WAV, M4A, FLAC et OGG en MP3, MP3 en WAV, et coupez vos fichiers audio — gratuitement, dans votre navigateur, sans envoi.',
      h1: 'Outils audio',
      lead: 'Convertissez entre MP3, WAV, M4A, AAC, OGG, FLAC et OPUS, ou coupez un morceau — en local, sans envoi.',
      body: `<h2>Avec ou sans perte ?</h2>
<p><strong>MP3, M4A (AAC), OGG et OPUS</strong> sont des formats avec perte : fichiers légers, parfaits pour l’écoute et le partage. <strong>WAV et FLAC</strong> conservent tous les détails : le WAV est non compressé et universel dans les logiciels audio, le FLAC est compressé sans perte. Convertir un fichier avec perte vers un format sans perte ne récupère pas la qualité perdue — cela grossit seulement le fichier.</p>`,
    },
  },
};
