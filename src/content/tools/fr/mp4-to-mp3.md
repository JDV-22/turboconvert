---
name: 'MP4 en MP3'
title: 'MP4 en MP3 : extraire le son d’une vidéo, gratuit'
description: 'Convertissez une vidéo MP4, MOV, MKV ou WebM en MP3 de 128 à 320 kbps. Extraction audio gratuite, par lot, sans inscription et sans envoi de fichier.'
h1: 'Convertir MP4 en MP3'
lead: 'Récupérez la bande son d’une vidéo en MP3 : musique, interview, cours, podcast, message vocal. La vidéo est traitée dans votre navigateur et n’est jamais envoyée.'
what: 'votre vidéo'
howTo: 'convertir une vidéo MP4 en MP3'
steps:
  - 'Cliquez sur <strong>Choisir des fichiers</strong> ou glissez une ou plusieurs vidéos dans le cadre : MP4, MOV, MKV, WebM, AVI, M4V, WMV et d’autres formats sont acceptés.'
  - 'Choisissez la <strong>Qualité audio</strong> : 192 kbps par défaut, 320 kbps pour la musique, 128 kbps pour la voix.'
  - 'Cliquez sur <strong>Convertir</strong>. Lors de la première utilisation, le moteur de conversion (environ 31 Mo) se télécharge, puis il reste en cache.'
  - 'Téléchargez votre MP3, ou tous les fichiers avec <strong>Tout télécharger (ZIP)</strong>.'
limits:
  - 'Taille maximale : 1 Go par vidéo. Pour les longues vidéos, un ordinateur est plus rapide et plus confortable qu’un téléphone.'
  - 'Une vidéo sans piste audio ne peut pas être convertie : le MP3 serait vide.'
  - 'L’outil convertit des fichiers présents sur votre appareil ; il ne télécharge pas de vidéos depuis YouTube ou d’autres plateformes.'
  - 'Si la vidéo contient plusieurs pistes audio (plusieurs langues, par exemple), une seule est extraite, en général la piste principale.'
faq:
  - q: 'Comment extraire le son d’une vidéo en MP3 ?'
    a: 'Déposez la vidéo ci-dessus, choisissez la qualité audio et cliquez sur Convertir. Seule la piste son est conservée et encodée en MP3 ; l’image est ignorée, ce qui rend l’opération plutôt rapide.'
  - q: 'Quelle qualité MP3 choisir ?'
    a: '192 kbps est un très bon compromis pour la plupart des usages. Choisissez 320 kbps pour de la musique de bonne qualité, et 128 kbps pour la voix seule (cours, conférence, interview), avec un fichier plus léger.'
  - q: 'Peut-on convertir une vidéo YouTube en MP3 ?'
    a: 'Cet outil ne télécharge rien depuis Internet : il convertit les vidéos que vous avez déjà sur votre appareil. Pour une vidéo dont vous détenez les droits, convertissez simplement le fichier MP4.'
  - q: 'La qualité audio est-elle conservée ?'
    a: 'Le son d’une vidéo MP4 est généralement en AAC ; il est décodé puis réencodé en MP3. À 192 kbps ou plus, la différence est inaudible pour la grande majorité des auditeurs. Choisir 320 kbps n’améliore pas une source de faible qualité.'
  - q: 'Ça marche sur iPhone et Android ?'
    a: 'Oui, dans Safari, Chrome ou Firefox. Sur téléphone, la conversion d’une vidéo courte est rapide ; pour une vidéo d’une heure, un ordinateur sera beaucoup plus efficace.'
  - q: 'Ma vidéo est-elle envoyée sur un serveur ?'
    a: 'Non. La conversion utilise FFmpeg compilé en WebAssembly et tourne dans votre navigateur. Vos vidéos personnelles ne quittent jamais votre appareil.'
---

## Extraire l’audio d’une vidéo : les usages courants

Convertir un **MP4 en MP3** consiste à garder uniquement la bande son d’une vidéo. C’est utile dans bien des situations :

- **Écouter un cours, une conférence ou un webinaire** en marchant ou en voiture, sans garder l’écran allumé ;
- **Récupérer une musique** d’un clip, d’un montage ou d’une vidéo de concert que vous avez filmée ;
- **Transcrire une interview** ou une réunion enregistrée en vidéo ;
- **Archiver un message vocal** ou un mémo reçu sous forme de vidéo ;
- **Préparer un podcast** à partir d’un enregistrement vidéo.

Le MP3 obtenu se lit partout : téléphone, autoradio, enceinte connectée, lecteur MP3, logiciel de montage audio.

## Formats vidéo acceptés

Malgré son nom, l’outil ne se limite pas au MP4. Il accepte la plupart des formats vidéo courants : **MP4, MOV** (vidéos d’iPhone), **MKV, WebM, AVI, M4V, WMV, FLV, 3GP, MPEG** et **TS**. Si la vidéo contient une piste son, elle peut être extraite en MP3.

## Quel débit choisir ?

| Qualité audio | Usage | Poids approximatif par minute |
|---|---|---|
| 128 kbps | Voix, cours, réunions | ~1 Mo |
| 192 kbps | Usage général (par défaut) | ~1,4 Mo |
| 256 kbps | Musique, bonne écoute | ~1,9 Mo |
| 320 kbps | Musique, qualité maximale du MP3 | ~2,4 Mo |

Un débit élevé ne recrée pas de qualité absente de la vidéo d’origine : si le son de la vidéo est compressé à 128 kbps, un MP3 à 320 kbps sera simplement plus lourd. Dans le doute, gardez **192 kbps**.

## Comment ça marche, sans envoi de fichier

La plupart des convertisseurs MP4 en MP3 en ligne vous demandent de téléverser votre vidéo, souvent plusieurs centaines de Mo, puis de patienter pendant le traitement sur leurs serveurs. Ici, c’est l’inverse : **FFmpeg**, le moteur de référence pour l’audio et la vidéo, est chargé une fois dans votre navigateur (environ 31 Mo, mis en cache ensuite) et la conversion se fait sur votre appareil.

Conséquences concrètes :

- **aucun temps d’envoi**, même pour une vidéo de 500 Mo ;
- **vos vidéos privées** (réunions, vidéos de famille, cours internes) ne sont confiées à personne ;
- la vitesse dépend de votre appareil : l’extraction audio est généralement aussi rapide, voire plus rapide, que la durée de la vidéo sur un ordinateur récent.

## Sur ordinateur, iPhone ou Android

- **Ordinateur (Windows, Mac, Linux)** : glissez la vidéo dans le cadre. C’est la solution la plus rapide pour les vidéos longues ou nombreuses.
- **iPhone et iPad** : dans Safari, touchez **Choisir des fichiers**, puis « Photothèque » pour choisir une vidéo de votre pellicule. Le MP3 est enregistré dans l’app Fichiers (dossier Téléchargements).
- **Android** : dans Chrome, choisissez la vidéo depuis la galerie ou le gestionnaire de fichiers ; le MP3 arrive dans le dossier Téléchargements.

Dans tous les cas, gardez la page ouverte au premier plan pendant la conversion : si le navigateur est mis en arrière-plan, il peut ralentir ou suspendre le traitement.

## Problèmes fréquents et solutions

- **Le MP3 est silencieux ou la conversion échoue** : vérifiez que la vidéo a bien du son en la lisant. Certaines captures d’écran vidéo sont enregistrées sans audio.
- **Conversion lente sur téléphone** : le traitement se fait sur votre appareil ; pour une longue vidéo, préférez un ordinateur et gardez l’onglet ouvert au premier plan.
- **Vous ne voulez qu’un extrait** : convertissez la vidéo en MP3, puis coupez le passage voulu avec [Couper un audio](/fr/couper-audio).
- **Besoin d’un autre format que le MP3** (WAV, M4A, FLAC…) : utilisez le [Convertisseur audio](/fr/convertisseur-audio), qui accepte aussi les vidéos.

Pour l’opération inverse, créer une vidéo à partir d’un MP3 et d’une image, voyez [MP3 en MP4](/fr/mp3-en-mp4). Et pour alléger une vidéo plutôt que d’en extraire le son, utilisez [Compresser une vidéo](/fr/compresser-video).

Pensez enfin aux droits d’auteur : extraire la musique d’une vidéo pour un usage personnel est une chose, la republier en est une autre.
