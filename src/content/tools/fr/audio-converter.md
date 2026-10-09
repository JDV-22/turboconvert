---
name: 'Convertisseur audio'
title: 'Convertisseur audio en ligne : MP3, WAV, M4A, FLAC, OGG'
description: 'Convertissez n’importe quel fichier audio ou vidéo en MP3, WAV, M4A, OGG, FLAC ou OPUS. Gratuit, par lot, sans inscription et sans envoi de fichier.'
h1: 'Convertisseur audio'
lead: 'Passez d’un format audio à un autre en quelques clics : MP3, WAV, M4A (AAC), OGG, FLAC ou OPUS. Les vidéos sont aussi acceptées. Tout se fait dans votre navigateur.'
what: 'vos fichiers audio'
howTo: 'convertir un fichier audio'
steps:
  - 'Cliquez sur <strong>Choisir des fichiers</strong> ou glissez vos fichiers dans le cadre : MP3, WAV, M4A, AAC, OGG, FLAC, OPUS, WMA, AIFF, AMR… ou une vidéo (MP4, MOV, MKV…).'
  - 'Choisissez le <strong>Format de sortie</strong> : MP3, WAV, M4A (AAC), OGG (Vorbis), FLAC ou OPUS.'
  - 'Cliquez sur <strong>Convertir</strong>. La première fois, le moteur audio (environ 31 Mo) se télécharge, puis il reste en cache.'
  - 'Téléchargez chaque fichier, ou l’ensemble avec <strong>Tout télécharger (ZIP)</strong>.'
limits:
  - 'Convertir un fichier compressé (MP3, M4A, OGG) en format sans perte (WAV, FLAC) ne restaure pas la qualité d’origine.'
  - 'Le débit de sortie n’est pas réglable ici. Pour choisir précisément la qualité d’un MP3, utilisez les convertisseurs dédiés, comme <a href="/fr/wav-en-mp3">WAV en MP3</a>.'
  - 'Taille maximale : 1 Go par fichier.'
faq:
  - q: 'Quel format audio choisir ?'
    a: 'MP3 pour une compatibilité maximale, M4A (AAC) pour l’écosystème Apple, OPUS pour la voix avec un poids minimal, FLAC pour archiver sans perte, WAV pour le montage ou un appareil qui l’exige, OGG pour les logiciels libres et les jeux.'
  - q: 'Puis-je extraire l’audio d’une vidéo ?'
    a: 'Oui, le convertisseur accepte les vidéos (MP4, MOV, MKV, WebM…) et en extrait la piste son dans le format choisi. Pour un MP3 avec un débit réglable, utilisez <a href="/fr/mp4-en-mp3">MP4 en MP3</a>.'
  - q: 'Quelle est la différence entre un format avec perte et sans perte ?'
    a: 'Un format avec perte (MP3, AAC, OGG, OPUS) supprime des informations peu audibles pour réduire le poids. Un format sans perte (FLAC, WAV) conserve tout, au prix de fichiers beaucoup plus lourds.'
  - q: 'Comment ouvrir un fichier AMR ou WMA ?'
    a: 'Convertissez-le simplement en MP3 ici : le MP3 se lit sur tous les appareils, ce qui n’est pas le cas de ces formats plus anciens.'
  - q: 'Mes fichiers sont-ils envoyés en ligne ?'
    a: 'Non. La conversion est réalisée par FFmpeg dans votre navigateur ; vos fichiers restent sur votre appareil.'
---

## Un seul outil pour tous vos formats audio

Les fichiers audio arrivent dans des formats très variés selon leur origine : **M4A** pour les mémos vocaux d’iPhone, **OPUS** ou **OGG** pour les messages vocaux de messageries, **AMR** pour les enregistrements de vieux téléphones, **WMA** pour d’anciens fichiers Windows, **FLAC** pour la musique haute fidélité, **WAV** ou **AIFF** pour les enregistrements studio. Ce convertisseur les accepte tous, ainsi que la plupart des formats vidéo, et produit le format dont vous avez besoin.

## Quel format de sortie choisir ?

| Format | Type | Atouts | Usage idéal |
|---|---|---|---|
| MP3 | Avec perte | Compatibilité universelle | Partage, autoradio, lecteurs |
| M4A (AAC) | Avec perte | Meilleure efficacité que le MP3, natif chez Apple | iPhone, Apple Music, vidéos |
| OPUS | Avec perte | Excellent pour la voix, très compact | Voix, podcasts, messageries |
| OGG (Vorbis) | Avec perte | Libre, bonne qualité | Jeux vidéo, logiciels libres |
| FLAC | Sans perte | Qualité identique, souvent 30 à 50 % plus léger que le WAV | Archivage de musique |
| WAV | Non compressé | Accepté par tous les logiciels audio | Montage, MAO, appareils pros |

## Quelques conversions courantes

- **Mémo vocal iPhone (M4A) → MP3** pour l’envoyer à n’importe qui ;
- **Message vocal (OPUS) → MP3 ou WAV** pour l’archiver ou le transcrire ;
- **WAV → FLAC** pour archiver des enregistrements sans perte en économisant de la place ;
- **Vidéo → M4A ou MP3** pour récupérer la bande son d’un cours ou d’une interview ;
- **Fichier AMR ou WMA → MP3** pour lire un vieil enregistrement sur un appareil récent.

Pour les conversions les plus fréquentes, des outils dédiés offrent un réglage de qualité : [WAV en MP3](/fr/wav-en-mp3), [M4A en MP3](/fr/m4a-en-mp3), [FLAC en MP3](/fr/flac-en-mp3), [OGG en MP3](/fr/ogg-en-mp3) ou [MP3 en WAV](/fr/mp3-en-wav).

## Avec perte, sans perte : la règle d’or

La qualité ne peut que se conserver ou se dégrader, jamais s’améliorer. Convertir un MP3 en FLAC donne un fichier plus lourd, mais au son identique au MP3. À l’inverse, enchaîner les conversions entre formats avec perte (MP3 → OGG → M4A) dégrade un peu le son à chaque étape. Partez toujours de la meilleure source disponible.

Besoin de raccourcir un fichier avant de le convertir ? Utilisez [Couper un audio](/fr/couper-audio).

Tout est traité localement par FFmpeg compilé en WebAssembly : vos enregistrements ne sont jamais téléversés.
