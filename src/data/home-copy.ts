import type { Locale } from '@/i18n/locales';

interface HomeCopy {
  title: string;
  description: string;
  faq: { q: string; a: string }[];
  body: string;
}

export const HOME_COPY: Partial<Record<Locale, HomeCopy>> = {
  en: {
    title: 'Free Online File Converter — PDF, Image, Video, No Upload',
    description: 'Convert PDF, Word, Excel, images, audio and video for free. 50+ tools that run in your browser: no upload, no sign-up, no watermark, no limits.',
    faq: [
      { q: 'Is TurboConvert really free?', a: 'Yes. Every tool is free with no account, no daily limit and no watermark. The site is funded by discreet advertising, never by charging for your conversions.' },
      { q: 'Are my files uploaded to a server?', a: 'No. Conversions run inside your browser using WebAssembly versions of open-source engines (Ghostscript, FFmpeg, PDF.js, pdf-lib). Your files stay on your device, which you can verify in your browser’s Network tab.' },
      { q: 'Is there a file size limit?', a: 'Limits depend on the tool (typically 100 MB to 1 GB) and mostly on your device’s memory, since the work happens locally. Desktop computers handle large files more comfortably than phones.' },
      { q: 'Does it work on iPhone, Android, Mac and Windows?', a: 'Yes. TurboConvert works in any modern browser — Safari, Chrome, Edge, Firefox — on phones, tablets and computers. Nothing to install.' },
      { q: 'Why is the first video or OCR conversion slower?', a: 'Some tools need a large engine (for example FFmpeg for video, about 31 MB). It downloads once, then your browser caches it, so later conversions start instantly.' },
      { q: 'Can I use TurboConvert offline?', a: 'Once a tool page and its engine are loaded, the conversion itself needs no internet connection. You can disconnect and keep converting on that page.' },
    ],
    body: `<h2>A file converter that respects your files</h2>
<p>Most online converters work the same way: you upload your document to their servers, wait in a queue, then download the result — and hope they delete your file as promised. TurboConvert takes the opposite approach. The conversion software comes to your browser, and your files never leave your device. It is faster (no upload, no queue), safer (nothing to leak), and it keeps working when your connection is slow.</p>
<h2>What you can do</h2>
<ul>
<li><strong>PDF</strong>: compress, merge, split, rotate, add page numbers or a watermark, protect or unlock, convert to and from JPG and PNG, extract text and run OCR on scans.</li>
<li><strong>Documents</strong>: convert PDF to Word, Excel or PowerPoint, and Word, Excel or PowerPoint to PDF.</li>
<li><strong>Images</strong>: convert HEIC (iPhone photos), WebP, AVIF, PNG, JPG and SVG, compress and resize in bulk, create favicons.</li>
<li><strong>Video and audio</strong>: extract MP3 from a video, convert MOV, WebM and MKV to MP4, make GIFs, compress and trim videos, convert WAV, M4A, OGG and FLAC.</li>
</ul>`,
  },
  fr: {
    title: 'Convertisseur de fichiers gratuit — PDF, image, vidéo, sans envoi',
    description: 'Convertissez PDF, Word, Excel, images, audio et vidéo gratuitement. 50+ outils dans votre navigateur : sans envoi, sans inscription, sans filigrane.',
    faq: [
      { q: 'TurboConvert est-il vraiment gratuit ?', a: 'Oui. Tous les outils sont gratuits, sans compte, sans limite quotidienne et sans filigrane. Le site est financé par une publicité discrète, jamais en faisant payer vos conversions.' },
      { q: 'Mes fichiers sont-ils envoyés sur un serveur ?', a: 'Non. Les conversions s’exécutent dans votre navigateur grâce à des versions WebAssembly de moteurs open source (Ghostscript, FFmpeg, PDF.js, pdf-lib). Vos fichiers restent sur votre appareil, ce que vous pouvez vérifier dans l’onglet Réseau de votre navigateur.' },
      { q: 'Y a-t-il une taille de fichier maximale ?', a: 'La limite dépend de l’outil (en général de 100 Mo à 1 Go) et surtout de la mémoire de votre appareil, puisque le travail se fait localement. Un ordinateur gère plus confortablement les gros fichiers qu’un téléphone.' },
      { q: 'Est-ce que ça marche sur iPhone, Android, Mac et Windows ?', a: 'Oui. TurboConvert fonctionne dans tous les navigateurs récents — Safari, Chrome, Edge, Firefox — sur téléphone, tablette et ordinateur. Rien à installer.' },
      { q: 'Pourquoi la première conversion vidéo ou OCR est-elle plus lente ?', a: 'Certains outils ont besoin d’un moteur volumineux (par exemple FFmpeg pour la vidéo, environ 31 Mo). Il est téléchargé une seule fois puis mis en cache par votre navigateur : les conversions suivantes démarrent immédiatement.' },
      { q: 'Peut-on utiliser TurboConvert hors ligne ?', a: 'Une fois la page d’un outil et son moteur chargés, la conversion elle-même n’a plus besoin d’Internet. Vous pouvez vous déconnecter et continuer à convertir sur cette page.' },
    ],
    body: `<h2>Un convertisseur qui respecte vos fichiers</h2>
<p>La plupart des convertisseurs en ligne fonctionnent de la même façon : vous envoyez votre document sur leurs serveurs, vous attendez dans une file, puis vous téléchargez le résultat — en espérant que le fichier soit bien supprimé comme promis. TurboConvert fait l’inverse : c’est le logiciel de conversion qui vient dans votre navigateur, et vos fichiers ne quittent jamais votre appareil. C’est plus rapide (pas d’envoi, pas d’attente), plus sûr (rien ne peut fuiter) et ça fonctionne même avec une connexion lente.</p>
<h2>Ce que vous pouvez faire</h2>
<ul>
<li><strong>PDF</strong> : compresser, fusionner, diviser, pivoter, numéroter les pages, ajouter un filigrane, protéger ou déverrouiller, convertir depuis et vers JPG et PNG, extraire le texte et faire de l’OCR sur des scans.</li>
<li><strong>Documents</strong> : convertir un PDF en Word, Excel ou PowerPoint, et Word, Excel ou PowerPoint en PDF.</li>
<li><strong>Images</strong> : convertir les HEIC (photos d’iPhone), WebP, AVIF, PNG, JPG et SVG, compresser et redimensionner par lots, créer des favicons.</li>
<li><strong>Vidéo et audio</strong> : extraire le MP3 d’une vidéo, convertir MOV, WebM et MKV en MP4, créer des GIF, compresser et couper des vidéos, convertir WAV, M4A, OGG et FLAC.</li>
</ul>`,
  },
};
