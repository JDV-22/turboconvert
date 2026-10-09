---
name: "Compresser un PDF à 100 Ko"
title: "Compresser un PDF à 100 Ko — gratuit, sans envoi"
description: "Réduisez un PDF sous 100 Ko automatiquement. Choisissez la limite, nous trouvons la meilleure qualité qui tient — dans votre navigateur, sans envoi."
h1: "Compresser un PDF à 100 Ko"
lead: "Besoin d’un PDF de moins de 100 Ko pour un formulaire ou un e-mail ? Choisissez la limite : TurboConvert trouve la meilleure qualité qui tient, sur votre appareil, sans envoyer votre fichier."
what: "votre PDF"
howTo: "compresser un PDF à 100 Ko"
steps:
  - "Cliquez sur <strong>Choisir des fichiers</strong> ou déposez votre PDF dans la zone."
  - "Vérifiez que <strong>Taille maximale</strong> est réglée sur 100 Ko (vous pouvez choisir une autre limite)."
  - "Cliquez sur <strong>Convertir</strong>. TurboConvert essaie plusieurs niveaux de compression et garde le meilleur résultat sous 100 Ko ; il se télécharge automatiquement."
limits:
  - "Si le document contient beaucoup de pages chargées en images, 100 Ko peut être impossible sans le rendre illisible. Vous obtenez alors la plus petite version possible : divisez le PDF ou retirez des pages, puis réessayez."
  - "Le texte, les liens et les signets sont conservés ; les images sont rééchantillonnées à une résolution plus faible, c’est ce qui fait gagner de la place."
  - "Les PDF protégés par mot de passe doivent d’abord être déverrouillés avec <a href=\"/fr/deverrouiller-pdf\">Déverrouiller un PDF</a>."
faq:
  - q: "Comment fonctionne l’objectif de 100 Ko ?"
    a: "TurboConvert compresse votre PDF avec Ghostscript à un réglage équilibré, puis réduit progressivement la résolution des images jusqu’à ce que le fichier passe sous 100 Ko. Si le fichier est déjà bien en dessous, il utilise un réglage de meilleure qualité."
  - q: "Que peut-on faire tenir dans 100 Ko ?"
    a: "En ordre de grandeur, environ 2 à 5 pages de texte, ou une seule page scannée en niveaux de gris. Le texte et les dessins vectoriels pèsent très peu ; ce sont les pages scannées ou photographiées qui prennent de la place."
  - q: "Mon PDF dépasse encore 100 Ko. Que faire ?"
    a: "Retirez les pages inutiles avec <a href=\"/fr/supprimer-pages-pdf\">Supprimer des pages PDF</a> ou <a href=\"/fr/diviser-pdf\">Diviser un PDF</a>, ou rescannez en niveaux de gris à 150 dpi. Les très gros scans devront parfois être envoyés en plusieurs parties."
  - q: "Mon document est-il envoyé quelque part ?"
    a: "Non. Le moteur de compression s’exécute dans votre navigateur : pièces d’identité, fiches de paie ou attestations ne quittent jamais votre appareil."
---

## Pourquoi 100 Ko ?

Les plafonds très bas comme 100 Ko se rencontrent sur des formulaires en ligne (concours, recrutement, services publics) qui attendent un seul justificatif ou une pièce d’identité scannée. Quand un site refuse votre fichier parce qu’il est trop lourd, le conseil habituel est de « le compresser » — mais la plupart des outils donnent un seul résultat et vous laissent deviner s’il passera. Ici, vous fixez la limite et l’outil la vise.

## Comment l’objectif de taille est atteint

Un PDF se compose de texte, de polices, de dessins vectoriels et d’images. Le texte et les polices se compressent très bien et pèsent rarement lourd. **Ce sont les images — surtout les scans et les photos — qui alourdissent un PDF.** Pour atteindre 100 Ko, TurboConvert réduit la résolution des images par paliers (300, 150, 96, 72 puis 50 dpi) et s’arrête au premier résultat qui tient. Vous gardez la version la plus nette possible pour cette taille.

## Conseils pour des PDF légers

- Pour un scan, ne gardez que la page demandée et privilégiez un scan en niveaux de gris à 150 dpi : les photos couleur de documents sont la principale raison pour laquelle un PDF ne passe pas sous 100 Ko.
- Les photos de documents prises au téléphone sont bien plus lourdes qu’un scan : si possible, utilisez une application de numérisation qui recadre et convertit en noir et blanc.
- Plusieurs fichiers à faire passer sous la limite ? Déposez-les tous : chacun est compressé séparément et vous pouvez tout télécharger dans un ZIP.
- Vous préférez choisir vous-même le niveau de compression ? Utilisez l’outil classique [Compresser un PDF](/fr/compresser-pdf).
