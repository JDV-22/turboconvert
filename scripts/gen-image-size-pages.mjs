// Generates "compress image to <size>" landing pages (EN/FR).
// Re-run after editing: node scripts/gen-image-size-pages.mjs
import fs from 'node:fs';

const SIZES = [
  { id: '20kb', en: '20 KB', fr: '20 Ko',
    useEn: 'Limits as low as 20 KB are typical for signature scans and passport-style photos on online application forms (exams, recruitment, public services).',
    useFr: 'Les limites aussi basses que 20 Ko se rencontrent pour les signatures scannées et les photos d’identité sur des formulaires en ligne (concours, recrutement, services publics).',
    fitEn: 'a small portrait or signature (about 300–600 px wide) at good quality', fitFr: 'un petit portrait ou une signature (environ 300 à 600 px de large) en bonne qualité' },
  { id: '50kb', en: '50 KB', fr: '50 Ko',
    useEn: '50 KB is a common cap for profile pictures, ID photos and supporting documents on application portals.',
    useFr: '50 Ko est un plafond courant pour les photos de profil, photos d’identité et justificatifs sur les portails de candidature.',
    fitEn: 'a photo of about 600–900 px wide, or a scanned page in reasonable quality', fitFr: 'une photo d’environ 600 à 900 px de large, ou une page scannée en qualité correcte' },
  { id: '100kb', en: '100 KB', fr: '100 Ko',
    useEn: '100 KB is often requested for website images, online forms and marketplace listings, and keeps pages fast.',
    useFr: '100 Ko est souvent demandé pour les images de sites web, les formulaires en ligne et les annonces, et garde les pages rapides.',
    fitEn: 'a sharp photo of about 1000–1400 px wide', fitFr: 'une photo nette d’environ 1 000 à 1 400 px de large' },
  { id: '200kb', en: '200 KB', fr: '200 Ko',
    useEn: '200 KB is a typical limit for document photos on administrative and recruitment websites, and a good size for email and messaging.',
    useFr: '200 Ko est une limite fréquente pour les photos de documents sur les sites administratifs et de recrutement, et une bonne taille pour l’e-mail et les messageries.',
    fitEn: 'a detailed photo of about 1600 px wide, or a readable document photo', fitFr: 'une photo détaillée d’environ 1 600 px de large, ou une photo de document lisible' },
];

const q = (v) => JSON.stringify(v);
for (const z of SIZES) {
  const en = `---
name: ${q(`Compress image to ${z.en}`)}
title: ${q(`Compress Image to ${z.en} Online — Free, No Upload`)}
description: ${q(`Reduce a photo or image to under ${z.en} automatically: JPG, PNG, HEIC or WebP. Best quality that fits, in your browser — no upload, free.`)}
h1: ${q(`Compress an image to ${z.en}`)}
lead: ${q(`Pick your photo, we find the sharpest version under ${z.en} — adjusting quality first, then dimensions if needed. Nothing is uploaded.`)}
what: "your images"
howTo: ${q(`compress an image to ${z.en}`)}
steps:
  - "Click <strong>Choose files</strong> or drop one or more images (JPG, PNG, HEIC, WebP…)."
  - ${q(`Check that <strong>Maximum file size</strong> is set to ${z.en} — or choose another limit.`)}
  - "Click <strong>Convert</strong>. Each image is saved under the limit; download it, or everything as a ZIP."
limits:
  - "To reach small sizes, PNG, HEIC and BMP images are saved as JPG (WebP stays WebP). Transparent areas become white in JPG."
  - "If quality alone isn’t enough, the image is scaled down step by step until it fits — very small limits mean smaller dimensions."
  - "Images already under the limit are returned unchanged."
faq:
  - q: ${q(`How does TurboConvert reach exactly ${z.en}?`)}
    a: ${q(`It encodes your image at decreasing quality levels (binary search) and keeps the best one that fits. If even low quality is too big, it reduces the dimensions a little and tries again, so you get the sharpest possible result under ${z.en}.`)}
  - q: ${q(`What fits in ${z.en}?`)}
    a: ${q(`Roughly ${z.fitEn}. Busy, detailed photos need more space than simple ones.`)}
  - q: "Can I convert iPhone (HEIC) photos directly?"
    a: "Yes. HEIC photos are decoded in your browser and saved as JPG under the limit, ready for any website."
  - q: "Are my photos uploaded?"
    a: "No. Everything happens on your device; your photos and ID documents never leave it."
---

## Why ${z.en}?

${z.useEn} Instead of trying quality settings blindly until the website accepts your file, set the limit once and let the tool find the right compromise.

## Quality first, size second

Reducing quality is invisible up to a point, while shrinking dimensions removes detail. TurboConvert therefore always tries quality before dimensions, and stops as soon as the image fits. You keep as many pixels as the limit allows.

## Tips

- Crop away what isn’t needed (background, margins) before compressing: fewer pixels means better quality at the same size.
- For documents, a straight, well-lit photo compresses far better than a dark or blurry one.
- Need a different size or exact dimensions? Use [Compress image](/compress-image) or [Resize image](/resize-image).
`;
  const fr = `---
name: ${q(`Compresser une image à ${z.fr}`)}
title: ${q(`Compresser une image à ${z.fr} — gratuit, sans envoi`)}
description: ${q(`Réduisez une photo sous ${z.fr} automatiquement : JPG, PNG, HEIC ou WebP. La meilleure qualité qui tient, dans votre navigateur, sans envoi.`)}
h1: ${q(`Compresser une image à ${z.fr}`)}
lead: ${q(`Choisissez votre photo : nous trouvons la version la plus nette sous ${z.fr}, en ajustant d’abord la qualité, puis les dimensions si besoin. Rien n’est envoyé.`)}
what: "vos images"
howTo: ${q(`compresser une image à ${z.fr}`)}
steps:
  - "Cliquez sur <strong>Choisir des fichiers</strong> ou déposez une ou plusieurs images (JPG, PNG, HEIC, WebP…)."
  - ${q(`Vérifiez que <strong>Taille maximale</strong> est réglée sur ${z.en} — ou choisissez une autre limite.`)}
  - "Cliquez sur <strong>Convertir</strong>. Chaque image est enregistrée sous la limite ; téléchargez-la, ou tout en ZIP."
limits:
  - "Pour atteindre de petites tailles, les images PNG, HEIC et BMP sont enregistrées en JPG (le WebP reste en WebP). Les zones transparentes deviennent blanches en JPG."
  - "Si la qualité ne suffit pas, l’image est réduite par paliers jusqu’à tenir : une limite très basse implique des dimensions plus petites."
  - "Les images déjà sous la limite sont rendues telles quelles."
faq:
  - q: ${q(`Comment TurboConvert atteint-il exactement ${z.fr} ?`)}
    a: ${q(`Il encode votre image à des niveaux de qualité décroissants (recherche par dichotomie) et garde la meilleure version qui tient. Si même une qualité basse est trop lourde, il réduit un peu les dimensions et recommence : vous obtenez le résultat le plus net possible sous ${z.fr}.`)}
  - q: ${q(`Que peut-on faire tenir dans ${z.fr} ?`)}
    a: ${q(`En ordre de grandeur, ${z.fitFr}. Une photo chargée en détails demande plus de place qu’une image simple.`)}
  - q: "Peut-on convertir directement des photos d’iPhone (HEIC) ?"
    a: "Oui. Les photos HEIC sont décodées dans votre navigateur et enregistrées en JPG sous la limite, prêtes pour n’importe quel site."
  - q: "Mes photos sont-elles envoyées quelque part ?"
    a: "Non. Tout se passe sur votre appareil : vos photos et pièces d’identité ne le quittent jamais."
---

## Pourquoi ${z.fr} ?

${z.useFr} Plutôt que d’essayer des réglages au hasard jusqu’à ce que le site accepte votre fichier, fixez la limite une fois et laissez l’outil trouver le bon compromis.

## La qualité d’abord, la taille ensuite

Baisser la qualité reste invisible jusqu’à un certain point, alors que réduire les dimensions fait perdre des détails. TurboConvert essaie donc toujours la qualité avant les dimensions, et s’arrête dès que l’image tient. Vous gardez autant de pixels que la limite le permet.

## Conseils

- Recadrez ce qui est inutile (fond, marges) avant de compresser : moins de pixels, c’est une meilleure qualité à poids égal.
- Pour un document, une photo droite et bien éclairée se compresse bien mieux qu’une photo sombre ou floue.
- Besoin d’une autre taille ou de dimensions précises ? Utilisez [Compresser une image](/fr/compresser-image) ou [Redimensionner une image](/fr/redimensionner-image).
`;
  fs.writeFileSync(`src/content/tools/en/compress-image-to-${z.id}.md`, en);
  fs.writeFileSync(`src/content/tools/fr/compress-image-to-${z.id}.md`, fr);
}
console.log('image size pages written');
