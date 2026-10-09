---
name: 'Compresser une image'
title: 'Compresser une image : réduire le poids d’une photo en ligne'
description: 'Réduisez le poids de vos photos JPG, PNG et WebP sans perte visible. Compression par lot, gratuite, sans inscription et sans envoi de fichier.'
h1: 'Compresser une image'
lead: 'Allégez vos photos pour l’e-mail, un formulaire ou votre site, en gardant une qualité visuelle irréprochable. Les images sont compressées sur votre appareil : rien n’est envoyé.'
what: 'vos images'
howTo: 'compresser une image'
steps:
  - 'Cliquez sur <strong>Choisir des fichiers</strong> ou glissez vos images JPG, PNG, WebP, AVIF ou BMP dans le cadre.'
  - 'Réglez la <strong>Qualité</strong> (75 % par défaut, un bon équilibre). Baissez-la pour un fichier plus léger, montez-la pour plus de finesse.'
  - 'Facultatif : indiquez une <strong>Largeur max (px)</strong>, par exemple 1920, pour réduire aussi les dimensions des grandes photos. Laissez vide pour garder la taille d’origine.'
  - 'Cliquez sur <strong>Convertir</strong>. Le gain obtenu s’affiche pour chaque image ; téléchargez-les une à une ou avec <strong>Tout télécharger (ZIP)</strong>.'
limits:
  - 'Le format est conservé : un JPG reste un JPG, un WebP reste un WebP. Pour changer de format, utilisez un convertisseur dédié.'
  - 'Si la compression ne fait pas gagner de place (image déjà optimisée), votre original est conservé tel quel : le fichier n’est jamais plus lourd qu’au départ.'
  - 'Les PNG (captures d’écran, logos) se compressent beaucoup moins qu’une photo en JPG. Pour un gros gain, convertissez-les en WebP.'
  - 'Les métadonnées EXIF (date, GPS, appareil) ne sont généralement pas conservées. Taille maximale : 100 Mo par image.'
faq:
  - q: 'Comment réduire le poids d’une photo sans perdre en qualité ?'
    a: 'Combinez deux leviers : une qualité autour de 75–85 %, invisible à l’œil sur une photo, et une largeur maximale adaptée à l’usage (1920 px pour un écran, 1200 px pour un site ou un e-mail). Ensemble, ils divisent souvent le poids par 5 à 10.'
  - q: 'Comment passer une photo sous 1 Mo, 500 Ko ou 200 Ko ?'
    a: 'Commencez avec une largeur max de 1600 px et une qualité de 75 %. Si le fichier est encore trop lourd, descendez à 1200 px puis à 60 % de qualité. Une photo de 1200 px de large en JPG à 70 % pèse en général quelques centaines de Ko.'
  - q: 'Quelle est la différence entre compresser et redimensionner ?'
    a: 'Compresser réduit la quantité de données par pixel ; redimensionner réduit le nombre de pixels. Pour des réglages précis de dimensions (pourcentage, hauteur, changement de format), utilisez <a href="/fr/redimensionner-image">Redimensionner une image</a>.'
  - q: 'Puis-je compresser plusieurs images en même temps ?'
    a: 'Oui. Déposez autant d’images que vous voulez : elles sont traitées l’une après l’autre avec les mêmes réglages, puis réunies dans un ZIP.'
  - q: 'Mes images sont-elles envoyées sur un serveur ?'
    a: 'Non. La compression utilise le moteur d’image de votre navigateur. Vos fichiers restent sur votre appareil et rien n’est conservé.'
  - q: 'Et pour compresser un PDF ou une vidéo ?'
    a: 'Utilisez <a href="/fr/compresser-pdf">Compresser un PDF</a> pour les documents et <a href="/fr/compresser-video">Compresser une vidéo</a> pour les vidéos. Les deux fonctionnent aussi sans envoi de fichier.'
---

## Pourquoi une image est-elle si lourde ?

Le poids d’une image dépend de deux choses : **ses dimensions** (le nombre de pixels) et **sa compression** (la quantité d’informations conservée pour chaque pixel). Une photo de smartphone de 12 mégapixels (4000 × 3000 px) enregistrée en haute qualité pèse facilement 3 à 6 Mo. C’est bien plus que nécessaire pour l’afficher sur un écran, qui n’en montre qu’une fraction.

Ce poids devient un problème dans des situations très concrètes :

- **E-mail** : Gmail limite les pièces jointes à 25 Mo, et une dizaine de photos suffit à dépasser ;
- **Formulaires en ligne** : dossiers administratifs, candidatures ou sites d’annonces imposent souvent moins de 1 ou 2 Mo par fichier ;
- **Sites web** : des images trop lourdes ralentissent le chargement, ce qui pénalise l’expérience et le référencement ;
- **Stockage** : alléger une photothèque libère de la place sur le téléphone ou le cloud.

## Les deux réglages de l’outil

### Qualité

Le curseur contrôle la compression. À **75 %** (réglage par défaut), une photo est visuellement identique à l’original pour la plupart des usages, mais nettement plus légère. Quelques repères :

| Qualité | Rendu | Usage conseillé |
|---|---|---|
| 85–95 % | Indiscernable de l’original | Impression, archivage |
| 70–80 % | Très bon, gain important | Web, e-mail, réseaux sociaux |
| 50–65 % | Défauts visibles en zoomant | Vignettes, poids imposé très bas |
| < 50 % | Blocs et halos visibles | À éviter |

### Largeur max (px)

C’est souvent le levier le plus efficace. Diviser la largeur par deux divise le nombre de pixels par quatre. Pour un site ou un e-mail, **1200 à 1920 px** suffisent ; pour un avatar ou une vignette, 400 à 800 px. Les images plus petites que la valeur indiquée ne sont pas agrandies, et les proportions sont toujours respectées.

## Quel format pour quelle image ?

- **Photos** : JPG ou WebP, ce sont les formats qui se compressent le mieux.
- **Captures d’écran, logos, schémas** : souvent en PNG. Le PNG est sans perte et se compresse peu ; si la transparence n’est pas nécessaire, [convertissez en JPG](/fr/png-en-jpg), sinon passez en [WebP](/fr/png-en-webp), qui garde la transparence pour un poids bien inférieur.
- **Images pour le web** : le WebP est généralement 25 à 35 % plus léger qu’un JPG de qualité équivalente. Essayez [JPG en WebP](/fr/jpg-en-webp).

## Une compression qui reste chez vous

Les compresseurs en ligne classiques reçoivent vos photos sur leurs serveurs. Ici, tout se passe dans votre navigateur : vos images ne quittent jamais votre appareil, même pour les photos de famille ou les documents scannés. Et si une image ne peut pas être allégée, l’outil vous le signale et garde l’original, plutôt que de vous livrer un fichier plus lourd.

## Exemples de réglages selon l’usage

| Objectif | Qualité | Largeur max (px) |
|---|---|---|
| Envoyer des photos par e-mail | 75 % | 1600 |
| Formulaire limité à 1 Mo | 70–75 % | 1600–2000 |
| Image pour un site ou un blog | 75–80 % | 1200–1920 |
| Annonce en ligne (Leboncoin, Vinted…) | 80 % | 1200–1600 |
| Archivage léger d’une photothèque | 85 % | (vide) |

Ces valeurs sont des points de départ : regardez le gain affiché après la compression et ajustez si besoin. Si le résultat est encore trop lourd, baissez d’abord la largeur avant la qualité.

## Astuces

- **Travaillez sur des copies** si vous voulez garder les originaux en pleine résolution.
- **Visez juste** : pour un formulaire limité à 2 Mo, inutile de descendre à 40 % de qualité ; une largeur max de 2000 px suffit généralement.
- **Une image floue après compression ?** Remontez la qualité à 85 % et jouez plutôt sur la largeur.
