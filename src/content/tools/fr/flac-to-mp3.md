---
name: 'FLAC en MP3'
title: 'FLAC en MP3 : convertir votre musique sans perte en MP3'
description: 'Convertissez vos fichiers FLAC en MP3 jusqu’à 320 kbps pour votre téléphone, votre voiture ou votre baladeur. Par lot, gratuit et sans envoi de fichier.'
h1: 'Convertir FLAC en MP3'
lead: 'Transformez votre musique en FLAC en MP3 légers et compatibles avec tous les lecteurs, en conservant une excellente qualité d’écoute. Tout se fait dans votre navigateur.'
what: 'vos fichiers FLAC'
howTo: 'convertir FLAC en MP3'
steps:
  - 'Cliquez sur <strong>Choisir des fichiers</strong> ou glissez vos fichiers .flac dans le cadre ; un album entier peut être converti d’un coup.'
  - 'Choisissez la <strong>Qualité audio</strong> : 320 kbps est recommandé pour la musique (192 kbps par défaut).'
  - 'Cliquez sur <strong>Convertir</strong>. La première fois, le moteur audio (environ 31 Mo) se télécharge, puis il reste en cache.'
  - 'Téléchargez chaque MP3, ou l’album complet avec <strong>Tout télécharger (ZIP)</strong>.'
limits:
  - 'Le MP3 est un format avec perte : conservez vos FLAC comme archive de référence.'
  - 'Les pochettes et étiquettes (titre, artiste, album) peuvent ne pas être toutes reprises dans le MP3 : vérifiez-les dans votre lecteur et complétez-les si besoin.'
  - 'Taille maximale : 1 Go par fichier.'
faq:
  - q: 'Quelle qualité MP3 choisir pour convertir du FLAC ?'
    a: '320 kbps, le débit maximal du MP3. Partant d’une source sans perte, c’est le meilleur choix pour préserver la qualité ; la différence avec le FLAC est alors imperceptible pour la grande majorité des auditeurs.'
  - q: 'Pourquoi convertir du FLAC en MP3 ?'
    a: 'Le FLAC est en général 2 à 4 fois plus lourd qu’un MP3 à 320 kbps et n’est pas lu par tous les appareils : certains autoradios, baladeurs et logiciels ne le reconnaissent pas.'
  - q: 'Les fichiers FLAC haute résolution (24 bits) sont-ils acceptés ?'
    a: 'Oui. Ils sont convertis en MP3 standard ; les fichiers sont simplement plus longs à décoder.'
  - q: 'Ma musique est-elle envoyée sur un serveur ?'
    a: 'Non. La conversion se fait dans votre navigateur avec FFmpeg, sans téléversement.'
---

## FLAC : la qualité CD, sans compromis

Le **FLAC** (Free Lossless Audio Codec) est un format audio **sans perte** : il compresse le son comme un fichier ZIP, sans rien en retirer. Un FLAC issu d’un CD est rigoureusement identique au CD d’origine. C’est le format de prédilection des mélomanes, des plateformes de téléchargement haute fidélité et de ceux qui numérisent leur collection de CD.

Sa contrepartie : le **poids**. Un album en FLAC pèse en général plusieurs centaines de Mo, quand le même album en MP3 à 320 kbps se contente d’une fraction de cette taille. Et tous les appareils ne le lisent pas.

## FLAC ou MP3 ?

| | FLAC | MP3 (320 kbps) |
|---|---|---|
| Compression | Sans perte | Avec perte |
| Qualité | Identique à la source | Très proche, quasi imperceptible |
| Poids par minute (stéréo) | Souvent 5 à 8 Mo | ~2,4 Mo |
| Compatibilité | Bonne, mais pas universelle | Universelle |
| Idéal pour | Archivage, hi-fi | Téléphone, voiture, baladeur |

## Quand convertir en MP3 ?

- **Téléphone ou baladeur** à la mémoire limitée ;
- **Autoradio** qui ne lit que le MP3 sur clé USB ;
- **Partage** de quelques morceaux avec des amis ;
- **Logiciel ou plateforme** qui n’accepte pas le FLAC.

## Conseils

- **Choisissez 320 kbps** pour la musique : c’est la meilleure qualité possible en MP3, et avec une source FLAC, elle se ressent.
- **Gardez toujours vos FLAC** : ils permettent de reconvertir plus tard dans n’importe quel format sans perte supplémentaire.
- **Convertissez par album** : déposez toutes les pistes d’un coup et récupérez un ZIP.
- **Autre format ?** Pour du M4A (AAC) adapté à l’écosystème Apple, ou de l’OPUS très compact, utilisez le [Convertisseur audio](/fr/convertisseur-audio).

## Combien de temps ça prend ?

Le décodage du FLAC et l’encodage en MP3 se font sur votre appareil, avec FFmpeg compilé en WebAssembly. Sur un ordinateur récent, un morceau de quelques minutes se convertit généralement en quelques secondes ; un album complet prend un peu plus longtemps. Sur téléphone, comptez davantage, et gardez la page ouverte au premier plan pendant la conversion.

Vous avez aussi des fichiers WAV issus d’une extraction de CD ? Utilisez [WAV en MP3](/fr/wav-en-mp3). Des morceaux en M4A ? Voyez [M4A en MP3](/fr/m4a-en-mp3).

La conversion se fait localement, dans votre navigateur : pas d’envoi de centaines de Mo vers un serveur, et votre bibliothèque musicale reste chez vous.
