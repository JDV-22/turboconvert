---
title: 'Réduire le poids d’une image sans perdre en qualité'
description: 'Les trois leviers pour alléger une image — dimensions, compression, format — avec les bons réglages pour le web, le mail et les réseaux sociaux.'
h1: 'Comment réduire le poids d’une image sans perte de qualité'
permalink: reduire-poids-image-sans-perte-de-qualite
published: 2026-10-09
updated: 2026-10-09
tool: compress-image
category: image
faq:
  - q: 'Quel réglage de qualité JPG pour alléger sans perte visible ?'
    a: 'Pour une photo, 75 à 85 % est la zone idéale. En dessous d’environ 60 %, des défauts apparaissent sur les contours et dans les ciels ; au-dessus de 90 %, le fichier grossit beaucoup pour une différence invisible.'
  - q: 'Pourquoi mon PNG est-il si lourd ?'
    a: 'Le PNG est sans perte : il stocke chaque pixel d’une photo à l’identique. Parfait pour les logos, captures d’écran et images avec transparence, mais une photo en PNG pèse souvent plusieurs fois plus qu’en JPG ou en WebP.'
  - q: 'Redimensionner une image réduit-il son poids ?'
    a: 'Oui, et c’est l’étape la plus efficace. Diviser la largeur et la hauteur par deux divise le nombre de pixels par quatre. Une photo de 4 000 pixels de large affichée en 1 200 pixels sur un site transporte une dizaine de fois trop de pixels.'
  - q: 'Le WebP est-il meilleur que le JPG ?'
    a: 'Pour le web, généralement oui. Un WebP pèse en général 25 à 35 % de moins qu’un JPG de qualité comparable et gère la transparence. Pour une pièce jointe, une impression ou un logiciel ancien, le JPG reste plus sûr.'
  - q: 'Peut-on compresser une image sans l’envoyer sur Internet ?'
    a: 'Oui. <a href="/fr/compresser-image">Compresser une image</a> et <a href="/fr/redimensionner-image">Redimensionner une image</a> fonctionnent dans votre navigateur : vos photos sont traitées sur votre appareil et ne sont jamais envoyées à un serveur.'
---

Une photo prise avec un smartphone récent pèse de 3 à 8 Mo et mesure environ 4 000 pixels de large. Parfait pour imprimer une affiche, beaucoup trop lourd pour un site web, un mail, un formulaire en ligne ou une messagerie. Bonne nouvelle : on peut presque toujours réduire le poids de 80 à 95 % sans différence perceptible à l’écran. Encore faut-il savoir lequel des trois leviers actionner.

## Les trois leviers : dimensions, compression, format

| Levier | Effet | Gain typique | Perte visible ? |
|---|---|---|---|
| **Dimensions** (redimensionner) | Moins de pixels | Énorme (4 000 → 1 600 px ≈ 6 fois moins de pixels) | Aucune si l’image est de toute façon affichée plus petite |
| **Compression** (qualité) | Stocke les mêmes pixels plus efficacement | 30 à 70 % | Aucune entre 75 et 85 % pour une photo |
| **Format** | JPG, PNG, WebP, AVIF… | 25 à 35 % (JPG → WebP), davantage (photo PNG → JPG) | Selon le format |
| Suppression des métadonnées | Retire l’EXIF, les vignettes | Faible (quelques Ko à quelques dizaines de Ko) | Aucune |

La plupart des gens ne touchent qu’à la compression. Le plus gros gain vient presque toujours du **redimensionnement**, à faire en premier.

## Étape 1 : redimensionner à la taille vraiment utile

Inutile d’envoyer une photo de 4 032 × 3 024 pixels à quelqu’un qui la regardera sur un téléphone de 400 pixels de large. Quelques repères :

| Usage | Largeur conseillée |
|---|---|
| Bandeau pleine largeur d’un site | 1 920 à 2 560 px |
| Image dans un article ou une fiche produit | 1 000 à 1 600 px |
| Pièce jointe à regarder à l’écran | 1 600 à 2 000 px |
| Publication Instagram | 1 080 px |
| Photo de profil ou vignette | 400 à 800 px |
| Tirage 10 × 15 cm | ~1 800 px |

Avec [Redimensionner une image](/fr/redimensionner-image), choisissez **Redimensionner par** : *Pourcentage*, *Largeur (px)* ou *Hauteur (px)*. Les proportions sont conservées automatiquement : une seule valeur suffit. Vous pouvez aussi changer de format au passage.

## Étape 2 : compresser à la bonne qualité

Le JPG et le WebP sont des formats *avec perte* : ils éliminent des détails que l’œil perçoit à peine. Le réglage de qualité fixe la dose :

- **90 à 100 %** : fichiers très lourds, aucun gain visible par rapport à 85 %.
- **75 à 85 %** : la zone idéale pour les photos, impossible à distinguer de l’original à l’écran.
- **60 à 75 %** : correct pour des vignettes et des arrière-plans.
- **En dessous de 60 %** : défauts visibles, ciels en escalier, halos autour du texte.

Avec [Compresser une image](/fr/compresser-image) :

1. Cliquez sur **Choisir des fichiers** ou déposez vos images (JPG, PNG, WebP, AVIF, BMP ; les lots sont acceptés).
2. Réglez la **Qualité** (75 % par défaut) et, si besoin, une **Largeur max (px)** pour redimensionner en même temps.
3. Cliquez sur **Convertir** et téléchargez les résultats (**Tout télécharger (ZIP)** pour un lot).

Chaque image garde son format, et le résultat n’est jamais plus lourd que l’original : si une image est déjà optimisée, vous la récupérez inchangée. Tout se passe dans votre navigateur, rien n’est envoyé.

## Étape 3 : choisir le bon format

| Format | Idéal pour | À éviter pour |
|---|---|---|
| **JPG** | Photos à envoyer, imprimer, ouvrir partout | Logos, texte, transparence |
| **PNG** | Logos, captures d’écran, graphiques, transparence | Photos (fichiers énormes) |
| **WebP** | Images de site web (photos et graphiques) | Logiciels anciens, certaines messageries |
| **AVIF** | Sites qui veulent les fichiers les plus légers | Compatibilité large |

Deux conversions font gagner gros :

- **Photo enregistrée en PNG → JPG** : souvent plusieurs fois plus léger. Utilisez [PNG en JPG](/fr/png-en-jpg) (les zones transparentes deviennent blanches).
- **JPG ou PNG → WebP pour un site** : en général 25 à 35 % plus léger qu’un JPG de qualité comparable, transparence comprise. Utilisez [JPG en WebP](/fr/jpg-en-webp) ou [PNG en WebP](/fr/png-en-webp).

Pour une comparaison détaillée, lisez [PNG ou JPG (ou WebP) : quel format choisir](/fr/blog/png-ou-jpg).

## Ce que « sans perte de qualité » veut vraiment dire

À strictement parler, seules les opérations sans perte gardent chaque pixel intact : supprimer les métadonnées, optimiser l’encodage PNG, convertir sans perte. Elles font gagner peu.

Tout ce qui fait gagner beaucoup — redimensionner, compresser avec perte — retire techniquement de l’information. La vraie question est de savoir si on le **voit**. Aux dimensions d’affichage et entre 75 et 85 % de qualité, non. Deux règles vous protègent :

1. **Partez toujours de l’original.** Recompresser un JPG déjà compressé cumule les pertes. Gardez vos originaux et exportez des copies.
2. **Compressez une seule fois, à la fin.** Recadrez, redimensionnez et retouchez d’abord ; la compression vient en dernier.

## Les méthodes intégrées, si vous préférez

**Windows 11 :** dans l’app Photos, ouvrez l’image, menu **…** > **Redimensionner l’image**, choisissez une taille prédéfinie ou personnalisée et enregistrez une copie. Dans Paint, *Redimensionner* (Ctrl+W) puis *Enregistrer sous*.

**Mac :** dans Aperçu, **Outils > Ajuster la taille** pour les dimensions, puis **Fichier > Exporter**, format JPEG et curseur **Qualité**. L’action rapide **Convertir l’image** du Finder propose aussi des tailles petite, moyenne et grande.

**iPhone :** quand vous joignez des photos dans Mail, vous pouvez choisir une taille d’image réduite avant l’envoi. Pour d’autres usages, un raccourci avec l’action *Redimensionner l’image* ou un outil dans le navigateur fait l’affaire.

**Android :** les options dépendent de la galerie du constructeur (certaines proposent « Redimensionner » dans l’éditeur). Un outil dans le navigateur fonctionne de la même façon sur tous les téléphones.

Ces méthodes suffisent pour quelques images. Pour des lots, un réglage fin de la qualité ou un changement de format, un outil dédié va plus vite.

## Cas pratiques

**« Le formulaire indique 2 Mo maximum. »** Redimensionnez à 2 000 px de large et compressez à 80 % : une photo de téléphone passe en général bien sous 1 Mo.

**« Mon site est lent. »** Les images sont souvent le plus gros poids d’une page. Redimensionnez à la largeur affichée (×2 pour les écrans haute densité), servez du WebP et chargez en différé les images sous la ligne de flottaison. Des pages plus rapides plaisent aux visiteurs comme aux moteurs de recherche.

**« Je dois envoyer 30 photos de vacances par mail. »** Passez-les en lot dans [Compresser une image](/fr/compresser-image) avec une largeur max de 1 600 à 2 000 px. Trente photos de 300 à 600 Ko tiennent dans un seul mail de 25 Mo.

**« C’est une capture d’écran avec du texte. »** Gardez le PNG, ou passez en WebP. Le JPG rend flous les contours nets du texte.

**« C’est une photo HEIC d’iPhone. »** Convertissez-la d’abord avec [HEIC en JPG](/fr/heic-en-jpg), puis compressez.

**« C’est un PDF rempli d’images. »** Utilisez plutôt [Compresser PDF](/fr/compresser-pdf), qui réencode les images à l’intérieur du document.

## La check-list

1. Redimensionner à la taille utile.
2. Choisir le format adapté (JPG pour partager, WebP pour un site, PNG pour les graphiques).
3. Compresser entre 75 et 85 %.
4. Comparer avec l’original à 100 % de zoom.
5. Garder le fichier d’origine.
