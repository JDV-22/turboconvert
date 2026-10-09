// Generates the "compress PDF to <size>" landing pages (EN/FR) from one
// template plus size-specific facts. Re-run after editing: node scripts/gen-size-pages.mjs
import fs from 'node:fs';

const SIZES = [
  {
    id: '100kb', kb: 100, en: '100 KB', fr: '100 Ko', frSlug: '100-ko',
    fitEn: 'roughly 2–5 pages of text-only content, or a single scanned page in grayscale',
    fitFr: 'environ 2 à 5 pages de texte, ou une seule page scannée en niveaux de gris',
    useEn: 'Very small caps like 100 KB are typical of online application forms (exams, recruitment, public services) that expect a single scanned certificate or ID document.',
    useFr: 'Les plafonds très bas comme 100 Ko se rencontrent sur des formulaires en ligne (concours, recrutement, services publics) qui attendent un seul justificatif ou une pièce d’identité scannée.',
    tipEn: 'If you are sending a scan, keep only the page that is required, and prefer a grayscale scan at 150 dpi — color photos of documents are the main reason a PDF can’t get under 100 KB.',
    tipFr: 'Pour un scan, ne gardez que la page demandée et privilégiez un scan en niveaux de gris à 150 dpi : les photos couleur de documents sont la principale raison pour laquelle un PDF ne passe pas sous 100 Ko.',
  },
  {
    id: '200kb', kb: 200, en: '200 KB', fr: '200 Ko', frSlug: '200-ko',
    fitEn: 'roughly 5–15 pages of text, or 1–3 scanned pages',
    fitFr: 'environ 5 à 15 pages de texte, ou 1 à 3 pages scannées',
    useEn: '200 KB is a common limit for supporting documents on recruitment portals, school and university forms, and some administrative websites.',
    useFr: '200 Ko est une limite courante pour les justificatifs sur les portails de recrutement, les formulaires scolaires et universitaires et certains sites administratifs.',
    tipEn: 'A two-page scan usually fits at the recommended level; for three pages or more, choosing grayscale when scanning makes the difference.',
    tipFr: 'Un scan de deux pages passe en général au niveau recommandé ; à partir de trois pages, choisir les niveaux de gris au moment du scan fait la différence.',
  },
  {
    id: '500kb', kb: 500, en: '500 KB', fr: '500 Ko', frSlug: '500-ko',
    fitEn: 'typically a 10–40 page report with a few images, or 3–8 scanned pages',
    fitFr: 'en général un rapport de 10 à 40 pages avec quelques images, ou 3 à 8 pages scannées',
    useEn: 'Half a megabyte is a frequent cap for CVs and cover letters on job sites, insurance claims and online support tickets.',
    useFr: 'Un demi-mégaoctet est un plafond fréquent pour les CV et lettres de motivation sur les sites d’emploi, les déclarations d’assurance et les tickets de support en ligne.',
    tipEn: 'CVs exported from Word or Canva often contain full-resolution photos and embedded fonts: the recommended level usually brings them well under 500 KB without visible change.',
    tipFr: 'Les CV exportés depuis Word ou Canva contiennent souvent des photos en pleine résolution et des polices intégrées : le niveau recommandé les fait en général passer largement sous 500 Ko sans changement visible.',
  },
  {
    id: '1mb', kb: 1024, en: '1 MB', fr: '1 Mo', frSlug: '1-mo',
    fitEn: 'usually 10–30 scanned pages, or a long illustrated document',
    fitFr: 'en général 10 à 30 pages scannées, ou un long document illustré',
    useEn: '1 MB is the classic limit of many administrative portals and online forms, and a comfortable size for email attachments that must open quickly on a phone.',
    useFr: '1 Mo est la limite classique de nombreux portails administratifs et formulaires en ligne, et une taille confortable pour une pièce jointe qui doit s’ouvrir vite sur un téléphone.',
    tipEn: 'Most scanned documents reach 1 MB at the recommended level. If yours doesn’t, it probably has many pages: split it and send only what is asked.',
    tipFr: 'La plupart des documents scannés passent sous 1 Mo au niveau recommandé. Si ce n’est pas le cas, il a sans doute beaucoup de pages : divisez-le et n’envoyez que ce qui est demandé.',
  },
];

for (const z of SIZES) {
  const en = `---
name: Compress PDF to ${z.en}
title: Compress PDF to ${z.en} Online — Free, No Upload
description: Make a PDF smaller than ${z.en} automatically. Pick the size limit, we find the best quality that fits — in your browser, no upload, free.
h1: Compress a PDF to ${z.en}
lead: Need a PDF under ${z.en} for a form or an email? Choose the limit and TurboConvert finds the best quality that fits — on your device, without uploading your file.
what: your PDF
howTo: compress a PDF to ${z.en}
steps:
  - Click <strong>Choose files</strong> or drop your PDF into the box.
  - Check that <strong>Maximum file size</strong> is set to ${z.en} (you can pick another limit).
  - Click <strong>Convert</strong>. TurboConvert tries several compression levels and keeps the best-looking result under ${z.en}; it downloads automatically.
limits:
  - If a document has many image-heavy pages, ${z.en} may be impossible without making it unreadable. You then get the smallest version we could make — split the PDF or remove pages and try again.
  - Text, links and bookmarks are kept; images are resampled to a lower resolution, which is what saves space.
  - Password-protected PDFs must be unlocked first with <a href="/unlock-pdf">Unlock PDF</a>.
faq:
  - q: How does the ${z.en} target work?
    a: TurboConvert compresses your PDF with Ghostscript at a balanced setting, then tries progressively stronger image downsampling until the file fits under ${z.en}. If the file is already well under the limit, it uses a higher-quality setting instead.
  - q: What can fit in ${z.en}?
    a: As a rule of thumb, ${z.fitEn}. Text and vector graphics are tiny; scanned or photographed pages are what take space.
  - q: My PDF is still bigger than ${z.en}. What can I do?
    a: Remove pages you don’t need with <a href="/delete-pdf-pages">Delete PDF pages</a> or <a href="/split-pdf">Split PDF</a>, or re-scan in grayscale at 150 dpi. Very large scans may need to be sent in several parts.
  - q: Is my document uploaded anywhere?
    a: No. The compression engine runs inside your browser, so ID documents, payslips or certificates never leave your device.
---

## Why ${z.en}?

${z.useEn} When a website rejects your file for being too large, the usual advice is to “compress it” — but most compressors give you a single result and leave you guessing whether it will fit. Here you set the limit, and the tool aims for it.

## How the size target is reached

A PDF is made of text, fonts, vector drawings and images. Text and fonts compress extremely well, so they rarely matter. **Images — especially scans and photos — are what make a PDF heavy.** To reach ${z.en}, TurboConvert lowers the resolution of the images step by step (300, 150, 96, 72 then 50 dpi) and stops at the first result that fits. You keep the sharpest version possible for that size.

## Tips for small PDFs

- ${z.tipEn}
- Photos of documents taken with a phone are much heavier than scans: if you can, use a scanner app that crops and converts to black and white.
- Need several files under the limit? Drop them all at once — each is compressed separately and you can download everything as a ZIP.
- Want to choose the compression level yourself instead? Use the regular [Compress PDF](/compress-pdf) tool.
`;
  const fr = `---
name: Compresser un PDF à ${z.fr}
title: Compresser un PDF à ${z.fr} — gratuit, sans envoi
description: Réduisez un PDF sous ${z.fr} automatiquement. Choisissez la limite, nous trouvons la meilleure qualité qui tient — dans votre navigateur, sans envoi.
h1: Compresser un PDF à ${z.fr}
lead: Besoin d’un PDF de moins de ${z.fr} pour un formulaire ou un e-mail ? Choisissez la limite : TurboConvert trouve la meilleure qualité qui tient, sur votre appareil, sans envoyer votre fichier.
what: votre PDF
howTo: compresser un PDF à ${z.fr}
steps:
  - Cliquez sur <strong>Choisir des fichiers</strong> ou déposez votre PDF dans la zone.
  - Vérifiez que <strong>Taille maximale</strong> est réglée sur ${z.fr} (vous pouvez choisir une autre limite).
  - Cliquez sur <strong>Convertir</strong>. TurboConvert essaie plusieurs niveaux de compression et garde le meilleur résultat sous ${z.fr} ; il se télécharge automatiquement.
limits:
  - Si le document contient beaucoup de pages chargées en images, ${z.fr} peut être impossible sans le rendre illisible. Vous obtenez alors la plus petite version possible : divisez le PDF ou retirez des pages, puis réessayez.
  - Le texte, les liens et les signets sont conservés ; les images sont rééchantillonnées à une résolution plus faible, c’est ce qui fait gagner de la place.
  - Les PDF protégés par mot de passe doivent d’abord être déverrouillés avec <a href="/fr/deverrouiller-pdf">Déverrouiller un PDF</a>.
faq:
  - q: Comment fonctionne l’objectif de ${z.fr} ?
    a: TurboConvert compresse votre PDF avec Ghostscript à un réglage équilibré, puis réduit progressivement la résolution des images jusqu’à ce que le fichier passe sous ${z.fr}. Si le fichier est déjà bien en dessous, il utilise un réglage de meilleure qualité.
  - q: Que peut-on faire tenir dans ${z.fr} ?
    a: En ordre de grandeur, ${z.fitFr}. Le texte et les dessins vectoriels pèsent très peu ; ce sont les pages scannées ou photographiées qui prennent de la place.
  - q: Mon PDF dépasse encore ${z.fr}. Que faire ?
    a: Retirez les pages inutiles avec <a href="/fr/supprimer-pages-pdf">Supprimer des pages PDF</a> ou <a href="/fr/diviser-pdf">Diviser un PDF</a>, ou rescannez en niveaux de gris à 150 dpi. Les très gros scans devront parfois être envoyés en plusieurs parties.
  - q: Mon document est-il envoyé quelque part ?
    a: Non. Le moteur de compression s’exécute dans votre navigateur : pièces d’identité, fiches de paie ou attestations ne quittent jamais votre appareil.
---

## Pourquoi ${z.fr} ?

${z.useFr} Quand un site refuse votre fichier parce qu’il est trop lourd, le conseil habituel est de « le compresser » — mais la plupart des outils donnent un seul résultat et vous laissent deviner s’il passera. Ici, vous fixez la limite et l’outil la vise.

## Comment l’objectif de taille est atteint

Un PDF se compose de texte, de polices, de dessins vectoriels et d’images. Le texte et les polices se compressent très bien et pèsent rarement lourd. **Ce sont les images — surtout les scans et les photos — qui alourdissent un PDF.** Pour atteindre ${z.fr}, TurboConvert réduit la résolution des images par paliers (300, 150, 96, 72 puis 50 dpi) et s’arrête au premier résultat qui tient. Vous gardez la version la plus nette possible pour cette taille.

## Conseils pour des PDF légers

- ${z.tipFr}
- Les photos de documents prises au téléphone sont bien plus lourdes qu’un scan : si possible, utilisez une application de numérisation qui recadre et convertit en noir et blanc.
- Plusieurs fichiers à faire passer sous la limite ? Déposez-les tous : chacun est compressé séparément et vous pouvez tout télécharger dans un ZIP.
- Vous préférez choisir vous-même le niveau de compression ? Utilisez l’outil classique [Compresser un PDF](/fr/compresser-pdf).
`;
  fs.writeFileSync(`src/content/tools/en/compress-pdf-to-${z.id}.md`, en);
  fs.writeFileSync(`src/content/tools/fr/compress-pdf-to-${z.id}.md`, fr);
}
console.log('size pages written');

// Quote every frontmatter scalar (French typography uses " : ", which YAML
// would otherwise read as a mapping).
for (const loc of ['en', 'fr']) {
  for (const z of SIZES) {
    const f = `src/content/tools/${loc}/compress-pdf-to-${z.id}.md`;
    const [, fm, body] = fs.readFileSync(f, 'utf8').split(/^---$/m);
    const quoted = fm.split('\n').map((line) => {
      const m = line.match(/^(\s*(?:- )?(?:[a-zA-Z0-9]+: )?)(.+)$/);
      if (!m || /^(steps|limits|faq):$/.test(line.trim()) || !m[2].trim()) return line;
      const [, prefix, value] = m;
      if (/^(\s*- )?[a-zA-Z0-9]+:$/.test(line.trim())) return line;
      return prefix + JSON.stringify(value);
    }).join('\n');
    fs.writeFileSync(f, `---${quoted}---${body}`);
  }
}
