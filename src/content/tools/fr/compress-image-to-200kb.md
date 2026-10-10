---
name: "Compresser une image à 200 Ko"
title: "Compresser une image à 200 Ko — gratuit, sans envoi"
description: "Réduisez une photo sous 200 Ko automatiquement : JPG, PNG, HEIC ou WebP. La meilleure qualité qui tient, dans votre navigateur, sans envoi."
h1: "Compresser une image à 200 Ko"
lead: "Choisissez votre photo : nous trouvons la version la plus nette sous 200 Ko, en ajustant d’abord la qualité, puis les dimensions si besoin. Rien n’est envoyé."
what: "vos images"
howTo: "compresser une image à 200 Ko"
steps:
  - "Cliquez sur <strong>Choisir des fichiers</strong> ou déposez une ou plusieurs images (JPG, PNG, HEIC, WebP…)."
  - "Vérifiez que <strong>Taille maximale</strong> est réglée sur 200 KB — ou choisissez une autre limite."
  - "Cliquez sur <strong>Convertir</strong>. Chaque image est enregistrée sous la limite ; téléchargez-la, ou tout en ZIP."
limits:
  - "Pour atteindre de petites tailles, les images PNG, HEIC et BMP sont enregistrées en JPG (le WebP reste en WebP). Les zones transparentes deviennent blanches en JPG."
  - "Si la qualité ne suffit pas, l’image est réduite par paliers jusqu’à tenir : une limite très basse implique des dimensions plus petites."
  - "Les images déjà sous la limite sont rendues telles quelles."
faq:
  - q: "Comment TurboConvert atteint-il exactement 200 Ko ?"
    a: "Il encode votre image à des niveaux de qualité décroissants (recherche par dichotomie) et garde la meilleure version qui tient. Si même une qualité basse est trop lourde, il réduit un peu les dimensions et recommence : vous obtenez le résultat le plus net possible sous 200 Ko."
  - q: "Que peut-on faire tenir dans 200 Ko ?"
    a: "En ordre de grandeur, une photo détaillée d’environ 1 600 px de large, ou une photo de document lisible. Une photo chargée en détails demande plus de place qu’une image simple."
  - q: "Peut-on convertir directement des photos d’iPhone (HEIC) ?"
    a: "Oui. Les photos HEIC sont décodées dans votre navigateur et enregistrées en JPG sous la limite, prêtes pour n’importe quel site."
  - q: "Mes photos sont-elles envoyées quelque part ?"
    a: "Non. Tout se passe sur votre appareil : vos photos et pièces d’identité ne le quittent jamais."
---

## Pourquoi 200 Ko ?

200 Ko est une limite fréquente pour les photos de documents sur les sites administratifs et de recrutement, et une bonne taille pour l’e-mail et les messageries. Plutôt que d’essayer des réglages au hasard jusqu’à ce que le site accepte votre fichier, fixez la limite une fois et laissez l’outil trouver le bon compromis.

## La qualité d’abord, la taille ensuite

Baisser la qualité reste invisible jusqu’à un certain point, alors que réduire les dimensions fait perdre des détails. TurboConvert essaie donc toujours la qualité avant les dimensions, et s’arrête dès que l’image tient. Vous gardez autant de pixels que la limite le permet.

## Conseils

- Recadrez ce qui est inutile (fond, marges) avant de compresser : moins de pixels, c’est une meilleure qualité à poids égal.
- Pour un document, une photo droite et bien éclairée se compresse bien mieux qu’une photo sombre ou floue.
- Besoin d’une autre taille ou de dimensions précises ? Utilisez [Compresser une image](/fr/compresser-image) ou [Redimensionner une image](/fr/redimensionner-image).
