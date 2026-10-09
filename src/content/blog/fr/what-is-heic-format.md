---
title: 'Fichier HEIC : c’est quoi, et pourquoi il ne s’ouvre pas ?'
description: 'Le HEIC est le format photo de l’iPhone : deux fois plus léger que le JPG à qualité égale, mais mal reconnu. Fonctionnement, ouverture, et faut-il changer ?'
h1: 'HEIC ou JPG : qu’est-ce qu’un fichier HEIC, et faut-il le garder ?'
permalink: format-heic-c-est-quoi
published: 2026-10-09
updated: 2026-10-09
tool: heic-to-jpg
category: image
faq:
  - q: 'Le HEIC est-il de meilleure qualité que le JPG ?'
    a: 'À poids égal, oui : le HEIC conserve plus de détails, avec moins d’artefacts de compression, et gère la couleur 10 bits des photos HDR. À qualité visuelle égale, un fichier HEIC pèse en général environ la moitié du JPG équivalent.'
  - q: 'Pourquoi les fichiers HEIC ne s’ouvrent-ils pas sur Windows ?'
    a: 'Windows n’intègre pas le décodeur HEVC sur lequel repose le HEIC, pour des raisons de brevets. Installez « Extensions d’image HEIF » (gratuit) et « Extensions vidéo HEVC » (payant dans la plupart des pays) depuis le Microsoft Store, ou convertissez les photos en JPG.'
  - q: 'Convertir du HEIC en JPG fait-il perdre en qualité ?'
    a: 'Un peu, car le JPG est recompressé, mais à qualité élevée (90 % ou plus) la différence ne se voit pas. Le JPG sera en général plus lourd que le HEIC d’origine. Gardez les HEIC si vous voulez la meilleure archive.'
  - q: 'Comment empêcher l’iPhone de prendre des photos en HEIC ?'
    a: 'Allez dans Réglages > Appareil photo > Formats et choisissez « Le plus compatible ». Les nouvelles photos seront en JPG et les vidéos en H.264. Les photos déjà prises restent en HEIC.'
  - q: 'Les téléphones Android ouvrent-ils les HEIC ?'
    a: 'Les versions récentes d’Android affichent les photos HEIC dans la galerie, mais beaucoup d’applications, de sites et d’anciens téléphones en sont incapables. Le JPG reste le choix sûr pour partager.'
---

Vous avez transféré les photos d’un iPhone et découvert des fichiers en `.HEIC` que Windows n’affiche pas, qu’un site refuse ou qu’un proche n’arrive pas à ouvrir. Le HEIC n’est ni un bug ni une astuce propriétaire d’Apple : c’est un format d’image moderne et normalisé, simplement mal pris en charge en dehors de l’univers Apple. Voici ce qu’il est, comment il se compare au JPG, et comment décider de le garder ou non.

## Le HEIC, c’est quoi ?

**HEIC** signifie *High Efficiency Image Container*. C’est le nom donné par Apple aux photos stockées au format **HEIF** (*High Efficiency Image File Format*), une norme publiée par le groupe MPEG — celui du MP3 et du MP4. L’image y est compressée avec **HEVC** (H.265), le codec utilisé aussi pour la vidéo 4K.

Apple en a fait le format par défaut de l’appareil photo avec iOS 11, en 2017, sur les iPhone équipés d’une puce A10 ou plus récente (iPhone 7 et suivants). Depuis, toutes les photos d’iPhone sont en HEIC, sauf changement de réglage. Certains téléphones Android (Samsung, par exemple) proposent aussi le HEIF en option.

## HEIC et JPG en un coup d’œil

| | HEIC | JPG (JPEG) |
|---|---|---|
| Poids à qualité comparable | Environ la moitié | Référence |
| Profondeur de couleur | Jusqu’à 10 bits (HDR) | 8 bits |
| Transparence | Possible | Impossible |
| Plusieurs images dans un fichier | Oui (Live Photos, rafales, cartes de profondeur) | Non |
| S’ouvre sur iPhone, iPad, Mac | Oui, nativement | Oui |
| S’ouvre sur Windows | Avec des extensions | Oui, partout |
| Navigateurs web, formulaires en ligne | Rarement | Universellement |
| Apparition | 2015 (norme), 2017 (iPhone) | 1992 |

En résumé : le HEIC est techniquement supérieur, le JPG est universellement compatible.

## Pourquoi le HEIC est-il si mal reconnu ?

La raison principale tient aux **licences**. La compression HEVC est couverte par des brevets détenus par plusieurs groupements, et les éditeurs doivent payer pour intégrer un décodeur. Apple paie pour ses propres produits. Microsoft fournit gratuitement la prise en charge du conteneur mais vend le codec HEVC à part ; beaucoup de sites, de logiciels anciens et d’appareils d’entrée de gamme ne s’en donnent tout simplement pas la peine.

Résultat : un HEIC s’ouvre parfaitement sur iPhone ou Mac, et échoue dans un nombre étonnant de situations :

- **Windows 10 et 11** sans les bonnes extensions affichent une vignette vide.
- **La plupart des navigateurs autres que Safari** ne savent pas afficher le HEIC, d’où les refus à l’envoi sur de nombreux sites.
- **Les formulaires et téléservices** (candidatures, démarches administratives, sites de tirage photo) n’acceptent généralement que JPG, PNG ou PDF.
- **Les anciens logiciels de retouche** et certaines applications Android ne le lisent pas.

## Comment ouvrir un fichier HEIC

**iPhone, iPad, Mac :** nativement, dans Photos et Aperçu (macOS High Sierra et suivants).

**Windows 10/11 :** installez deux extensions du Microsoft Store — **Extensions d’image HEIF** (gratuite) et **Extensions vidéo HEVC** (payante, moins d’un euro dans la plupart des pays ; le prix varie). Après redémarrage, l’app Photos et les miniatures de l’Explorateur gèrent le HEIC. Sinon, convertissez les fichiers.

**Android :** les versions récentes affichent le HEIC dans la galerie ; pour les applications tierces, cela varie.

**Partout :** convertissez en JPG avec [HEIC en JPG](/fr/heic-en-jpg). L’outil fonctionne dans votre navigateur, traite de nombreuses photos d’un coup et ne les envoie nulle part : vos photos personnelles restent sur votre appareil.

## Garder le HEIC ou passer au JPG ?

**Gardez le HEIC si** vous restez surtout dans l’écosystème Apple, utilisez Photos iCloud et tenez à votre espace de stockage. Une photothèque de 20 000 clichés occupe environ deux fois moins de place en HEIC, de quoi éviter un forfait iCloud supérieur. Vous conservez aussi le HDR et les Live Photos.

**Passez au JPG si** vous copiez régulièrement vos photos sur un PC Windows, les déposez sur des sites, les envoyez à un labo photo ou les partagez avec des personnes équipées d’appareils anciens.

**Le compromis** que la plupart devraient adopter : garder le HEIC sur le téléphone et laisser l’iPhone convertir automatiquement quand les photos en sortent :

- **Réglages > Photos > Transférer sur Mac ou PC > Automatique** : les photos copiées par câble USB vers un ordinateur sont converties en JPG.
- **Le partage** par Mail et par de nombreuses applications convertit automatiquement en JPG.
- Pour le reste, convertissez par lots au besoin.

### Changer le format de l’appareil photo de l’iPhone

Dans **Réglages > Appareil photo > Formats**, choisissez :

- **Haute efficacité** : photos HEIC et vidéos HEVC (par défaut).
- **Le plus compatible** : photos JPG et vidéos H.264.

Le changement ne concerne que les nouvelles photos. Certains modes vidéo, comme la 4K à 60 i/s, exigent la haute efficacité.

## Convertir un HEIC : JPG ou PNG ?

- **JPG** pour les photos à partager, déposer en ligne ou imprimer : c’est ce qu’attendent les sites et les labos. Gardez une qualité élevée (90 % et plus) ; [HEIC en JPG](/fr/heic-en-jpg) utilise 92 % par défaut.
- **PNG** si vous allez retoucher l’image sans vouloir de perte supplémentaire, ou pour des captures d’écran avec du texte. Les fichiers sont bien plus lourds. Utilisez [HEIC en PNG](/fr/heic-en-png).

Ne vous attendez pas à un fichier plus léger : à qualité égale, le JPG pèse généralement plus que le HEIC d’origine. Si le poids compte (mail, téléservice limité à 2 Mo), redimensionnez ou compressez ensuite avec [Compresser une image](/fr/compresser-image).

Pour la marche à suivre détaillée sur chaque appareil, y compris la conversion en masse sur Windows et Mac, lisez notre guide pour [convertir les photos d’iPhone en JPG](/fr/blog/convertir-photos-iphone-en-jpg).

## Métadonnées et vie privée

Comme le JPG, le HEIC contient des **métadonnées EXIF** : date, réglages de prise de vue et, si la localisation était activée, **coordonnées GPS**. Les convertisseurs peuvent conserver ou supprimer ces données : vérifiez avant de publier des photos. Sur iPhone, vous pouvez retirer la position pour un partage précis via **Options**, en haut de la feuille de partage.

## HEIC et stockage iCloud : un exemple concret

C’est sur le stockage que le HEIC fait la différence. Imaginons 3 000 photos par an. Si un JPG moyen de votre téléphone pèse environ 3 Mo et sa version HEIC à peu près la moitié, la photothèque HEIC grossit d’environ 4 à 5 Go par an au lieu de 9 — un écart qui compte vite face aux 5 Go gratuits d’iCloud ou à un iPhone de 64 Go. Les poids réels varient selon la scène et l’appareil, mais ce rapport explique pourquoi Apple a fait du HEIC le format par défaut.

## En résumé

Le HEIC est un meilleur format, freiné par les licences et les habitudes. Gardez-le sur l’iPhone pour économiser de la place, laissez le téléphone convertir automatiquement vers l’ordinateur, et passez en JPG dès qu’un site, un PC Windows ou un proche ne peut pas l’ouvrir. Et s’il vous faut un PDF — pour un formulaire ou un justificatif —, [JPG en PDF](/fr/jpg-en-pdf) accepte directement les photos HEIC.
