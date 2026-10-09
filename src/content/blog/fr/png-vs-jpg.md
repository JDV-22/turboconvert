---
title: 'PNG ou JPG (ou WebP) : quel format d’image choisir ?'
description: 'JPG, PNG, WebP, AVIF, SVG : à quoi sert chaque format, poids et qualité comparés, et pourquoi les images s’enregistrent en WebP (et comment l’éviter).'
h1: 'PNG, JPG ou WebP : quel format d’image choisir ?'
permalink: png-ou-jpg
published: 2026-10-09
updated: 2026-10-09
tool: png-to-jpg
category: image
faq:
  - q: 'Le PNG est-il de meilleure qualité que le JPG ?'
    a: 'Le PNG est sans perte : il ne dégrade jamais l’image, alors que le JPG supprime des détails pour gagner de la place. Pour une photo en JPG de bonne qualité (80 à 90 %), la différence est invisible ; pour du texte, un logo ou une capture d’écran, le PNG est nettement plus net.'
  - q: 'Pourquoi les images des sites s’enregistrent-elles en WebP ?'
    a: 'Les sites servent du WebP parce qu’il est plus léger et s’affiche plus vite, et votre navigateur enregistre exactement ce qu’il a reçu. Pour obtenir un JPG, convertissez le fichier, ou ouvrez-le dans Paint (Windows) ou Aperçu (Mac) et exportez en JPEG.'
  - q: 'Peut-on simplement renommer un .webp ou un .png en .jpg ?'
    a: 'Non. Renommer change l’étiquette, pas le contenu. Certaines applications ouvriront quand même le fichier en détectant le vrai format, d’autres le rejetteront comme corrompu. Faites une vraie conversion.'
  - q: 'Quel format choisir pour un site web ?'
    a: 'Le WebP pour la plupart des photos et graphiques : plus léger que le JPG et le PNG, et reconnu par tous les navigateurs actuels. Le SVG pour les logos et icônes, l’AVIF si vous voulez des fichiers encore plus légers et que vos outils le gèrent.'
  - q: 'Convertir un JPG en PNG améliore-t-il la qualité ?'
    a: 'Non. La conversion ne restaure pas les détails déjà supprimés par la compression JPG ; elle évite seulement de nouvelles pertes lors des retouches successives. Et le PNG sera beaucoup plus lourd.'
---

Chaque image que vous enregistrez impose un choix — JPG, PNG, WebP, parfois AVIF, HEIC ou SVG —, et un mauvais choix donne un texte flou, une capture d’écran de 12 Mo ou un fichier refusé par un site. Les règles sont plus simples qu’il n’y paraît. Ce guide explique à quoi sert chaque format, les compare côte à côte, propose un tableau de décision rapide et règle le fameux « pourquoi tout s’enregistre en WebP ».

## La réponse courte

- **Photo à partager, envoyer ou imprimer → JPG.**
- **Capture d’écran, logo, texte, transparence → PNG.**
- **Images pour un site web → WebP** (ou AVIF), **SVG** pour les logos et icônes.
- **Photos d’iPhone → HEIC** sur le téléphone, **JPG** dès qu’elles en sortent.

## Avec ou sans perte : la différence clé

Les formats **avec perte** (JPG, ainsi que WebP et AVIF dans leur mode habituel) éliminent des détails que l’œil remarque à peine — fines variations de couleur, textures — pour obtenir des fichiers bien plus légers. Le réglage de qualité fixe la quantité supprimée. À chaque retouche suivie d’un nouvel enregistrement, on perd encore un peu.

Les formats **sans perte** (PNG, et WebP en mode sans perte) conservent chaque pixel à l’identique. Rien ne se perd, même après de multiples enregistrements, mais les photos deviennent très lourdes.

Les photos supportent bien la compression avec perte, car elles sont pleines de bruit et de dégradés. Le texte, les traits et les aplats, non : la compression crée des halos flous (« artefacts ») autour des contours nets. Toute la répartition JPG/PNG découle de là.

## Le comparatif

| | JPG | PNG | WebP | AVIF | SVG |
|---|---|---|---|---|---|
| Compression | Avec perte | Sans perte | Avec ou sans perte | Avec ou sans perte | Vectoriel (pas de pixels) |
| Poids d’une photo | Référence | 3 à 10 fois plus | ~25 à 35 % de moins | Encore moins | Inadapté |
| Transparence | Non | Oui | Oui | Oui | Oui |
| Animation | Non | Non (hors APNG) | Oui | Oui | Par le code |
| Texte et traits nets | Moyen | Excellent | Bon | Bon | Parfait à toute taille |
| S’ouvre partout | Oui | Oui | Applications et navigateurs récents | Navigateurs récents | Navigateurs, logiciels de design |
| Idéal pour | Photos | Graphiques, captures | Sites web | Sites web | Logos, icônes |

## JPG : le format photo universel

Le JPG (ou JPEG, c’est la même chose) est le standard de la photo depuis le début des années 1990. Appareils photo, téléphones, imprimantes, messageries, sites, labos photo : tout le monde le lit.

**À utiliser pour** les photos à partager, imprimer, joindre ou déposer sur un formulaire.
**À éviter pour** les logos, schémas, captures d’écran avec du texte, et tout ce qui demande un fond transparent : le JPG ne gère pas la transparence.
**Astuce :** une qualité de 80 à 90 % est visuellement identique à l’original pour une photo.

Pour alléger une photo enregistrée en PNG, utilisez [PNG en JPG](/fr/png-en-jpg) : les zones transparentes sont remplies de blanc.

## PNG : graphiques nets et transparence

Le PNG enregistre les images sans perte et gère la transparence. Le texte reste net, les aplats restent uniformes.

**À utiliser pour** les captures d’écran, logos, icônes, graphiques, illustrations, images que vous allez retoucher, et tout fond transparent.
**À éviter pour** les photos à envoyer : une photo de téléphone en PNG dépasse facilement 10 Mo.

Convertir un JPG en PNG avec [JPG en PNG](/fr/jpg-en-png) a du sens avant une série de retouches, pour éviter de nouvelles pertes à chaque enregistrement, mais l’image ne deviendra pas plus nette.

## WebP : le format courant du web

Google a créé le WebP pour accélérer les sites. Il peut être avec ou sans perte, gère transparence et animation, et pèse en général 25 à 35 % de moins qu’un JPG de qualité comparable. Tous les grands navigateurs actuels le reconnaissent, et la plupart des systèmes récents l’ouvrent.

**À utiliser pour** les images de votre site ou de votre boutique en ligne : des pages plus légères se chargent plus vite, ce qu’apprécient visiteurs et moteurs de recherche. Convertissez avec [JPG en WebP](/fr/jpg-en-webp) ou [PNG en WebP](/fr/png-en-webp).
**À éviter pour** les pièces jointes, l’impression et les logiciels anciens, où la prise en charge reste inégale.

## AVIF, HEIC et SVG en bref

- **AVIF** compresse encore mieux que le WebP et gère le HDR. Les navigateurs le reconnaissent désormais largement, mais l’encodage est lent et certains logiciels ne l’ouvrent pas. Besoin d’un JPG à partir d’un AVIF ? Utilisez [AVIF en JPG](/fr/avif-en-jpg).
- **HEIC** est le format photo de l’iPhone : environ deux fois plus léger que le JPG, mais mal reconnu hors des appareils Apple. Voir [Fichier HEIC : c’est quoi ?](/fr/blog/format-heic-c-est-quoi)
- **SVG** n’est pas fait de pixels mais de formes décrites par du code : il reste net à toute taille et pèse très peu. Parfait pour les logos et icônes ; exportez-le en image avec [SVG en PNG](/fr/svg-en-png) quand une application refuse le SVG.

## Pourquoi les images s’enregistrent en WebP, et comment obtenir un JPG

Vous faites un clic droit sur une image, *Enregistrer l’image sous*, et vous obtenez un `.webp` que votre logiciel ou le formulaire à remplir refuse. Le site a servi du WebP pour économiser de la bande passante, et votre navigateur enregistre exactement ce qu’il a reçu.

Pour obtenir un JPG :

- **Convertissez-le :** [WebP en JPG](/fr/webp-en-jpg) traite un fichier ou tout un lot dans votre navigateur, sans les envoyer. Prenez [WebP en PNG](/fr/webp-en-png) si l’image comporte de la transparence.
- **Windows :** ouvrez le WebP dans **Paint** puis *Fichier > Enregistrer sous > Image JPEG* (Paint ouvre le WebP sur les versions récentes de Windows).
- **Mac :** ouvrez-le dans **Aperçu** puis *Fichier > Exporter*, format **JPEG**.
- **Téléphone :** la capture d’écran est un dernier recours, car vous perdez en résolution et capturez tout ce qui entoure l’image.

Ne renommez pas le fichier de `.webp` en `.jpg` : les données restent en WebP et beaucoup d’applications le refuseront.

## Tableau de décision

| Ce que vous enregistrez | Format |
|---|---|
| Photos de vacances à envoyer ou imprimer | JPG |
| Photo pour un formulaire ou une candidature | JPG |
| Capture d’un message d’erreur ou d’un document | PNG |
| Logo sur fond transparent | PNG (ou SVG) |
| Photos produits d’une boutique en ligne | WebP (en gardant un JPG original) |
| Images d’un blog | WebP |
| Icône ou logo d’un site | SVG |
| Favicon | ICO, à créer avec [PNG en ICO](/fr/png-en-ico) |
| Image que vous allez retoucher souvent | PNG pendant le travail, JPG ou WebP pour publier |

## Les erreurs fréquentes

**Enregistrer les photos en PNG « pour la qualité ».** Les fichiers sont 3 à 10 fois plus lourds sans bénéfice visible. Prenez du JPG à 85-90 %.

**Enregistrer les captures d’écran en JPG.** Le texte se couvre de halos flous. Prenez du PNG.

**Réenregistrer le même JPG encore et encore.** Chaque enregistrement fait perdre un peu. Gardez un original et exportez des copies.

**Convertir un petit JPG flou en PNG pour le « réparer ».** Une conversion ne peut pas ajouter des détails absents.

**Mettre des images géantes sur un site.** Les dimensions comptent plus que le format. Une photo de 4 000 pixels affichée en 800 gaspille de la bande passante quel que soit le format : redimensionnez d’abord. Notre guide pour [réduire le poids d’une image sans perte de qualité](/fr/blog/reduire-poids-image-sans-perte-de-qualite) détaille les réglages.

## En résumé

JPG pour les photos que tout le monde doit pouvoir ouvrir, PNG pour tout ce qui a des contours nets ou de la transparence, WebP pour le web. Gardez vos originaux dans la meilleure qualité disponible et convertissez des copies selon l’usage : vous n’aurez jamais à choisir entre qualité et compatibilité.
