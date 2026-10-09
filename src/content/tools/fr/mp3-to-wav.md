---
name: 'MP3 en WAV'
title: 'MP3 en WAV : convertir vos fichiers audio gratuitement'
description: 'Convertissez vos MP3, M4A, OGG ou FLAC en WAV pour un logiciel audio, un montage ou un appareil exigeant. Par lot, gratuit et sans envoi de fichier.'
h1: 'Convertir MP3 en WAV'
lead: 'Obtenez un fichier WAV à partir d’un MP3 ou d’un autre format audio, pour un logiciel de montage, un sampler ou une plateforme qui l’exige. Tout se fait dans votre navigateur.'
what: 'vos fichiers audio'
howTo: 'convertir MP3 en WAV'
steps:
  - 'Cliquez sur <strong>Choisir des fichiers</strong> ou glissez vos fichiers audio dans le cadre (MP3, M4A, AAC, OGG, FLAC, OPUS ou WMA).'
  - 'Cliquez sur <strong>Convertir</strong>. La première fois, le moteur audio (environ 31 Mo) se télécharge, puis il reste en cache.'
  - 'Téléchargez chaque WAV, ou l’ensemble avec <strong>Tout télécharger (ZIP)</strong>.'
limits:
  - 'Le WAV ne restaure pas la qualité perdue lors de la compression MP3 : le son est identique à celui du MP3, simplement stocké sans compression.'
  - 'Un WAV est environ 4 à 11 fois plus lourd que le MP3 d’origine, selon le débit de ce dernier.'
  - 'Taille maximale : 1 Go par fichier.'
faq:
  - q: 'Convertir un MP3 en WAV améliore-t-il la qualité ?'
    a: 'Non. Les détails supprimés par la compression MP3 sont définitivement perdus. Le WAV obtenu sonne exactement comme le MP3, mais il est accepté par les logiciels et appareils qui exigent un format non compressé.'
  - q: 'Pourquoi convertir en WAV alors ?'
    a: 'Parce que certains outils l’exigent : logiciels de montage ou de MAO, samplers et boîtes à rythmes, standards téléphoniques et serveurs vocaux, plateformes de distribution ou logiciels de transcription. Le WAV évite aussi une nouvelle perte si vous retouchez le son.'
  - q: 'Pourquoi le fichier WAV est-il si lourd ?'
    a: 'Le WAV n’est pas compressé : environ 10 Mo par minute en qualité CD stéréo, contre 1 à 2,4 Mo pour un MP3. C’est normal.'
  - q: 'Mes fichiers sont-ils envoyés ?'
    a: 'Non, la conversion se fait dans votre navigateur avec FFmpeg compilé en WebAssembly.'
---

## Pourquoi passer du MP3 au WAV ?

Le **MP3** est parfait pour écouter et partager. Mais certains logiciels et appareils réclament du **WAV**, le format audio non compressé de référence :

- **Logiciels de montage vidéo et de MAO** : certains gèrent mieux le WAV, notamment pour un calage précis ou une lecture fluide sur la timeline ;
- **Samplers, boîtes à rythmes, contrôleurs DJ** qui ne lisent que le WAV ;
- **Standards téléphoniques et messageries vocales** d’entreprise, qui demandent un WAV pour les annonces d’accueil ;
- **Plateformes et services** (distribution musicale, transcription, synthèse) qui imposent un format sans compression ;
- **Retouches successives** : travailler en WAV évite de recompresser le son à chaque export.

## Ce que la conversion fait vraiment

Le MP3 est **décodé** puis enregistré sans compression dans un fichier WAV. Le son obtenu est **identique** à celui du MP3 : rien n’est perdu en plus, mais rien n’est récupéré non plus. Si vous disposez de la source originale (enregistrement, CD, fichier FLAC), partez plutôt de celle-ci pour une qualité maximale.

| | MP3 | WAV |
|---|---|---|
| Compression | Avec perte | Aucune |
| Poids par minute | ~1 à 2,4 Mo | ~10 Mo (qualité CD) |
| Usage | Écoute, partage | Montage, production, appareils exigeants |

## Formats acceptés

Malgré son nom, l’outil accepte aussi les fichiers **M4A, AAC, OGG, FLAC, OPUS** et **WMA**. Pratique pour convertir un mémo vocal d’iPhone (M4A) ou un message WhatsApp (OPUS) en WAV.

## Cas fréquent : le message d’accueil téléphonique

Les standards téléphoniques et serveurs vocaux d’entreprise demandent souvent un WAV avec des caractéristiques précises (par exemple mono, 8 kHz, 16 bits). Cet outil produit un WAV standard : si votre opérateur ou votre standard impose un format très spécifique, vérifiez sa documentation, et testez le fichier avant de le mettre en production. Dans la plupart des cas, un WAV standard est accepté et converti automatiquement par le système.

## Outils complémentaires

- Pour l’opération inverse, allégez un WAV avec [WAV en MP3](/fr/wav-en-mp3).
- Pour d’autres formats de sortie (FLAC, M4A, OGG…), utilisez le [Convertisseur audio](/fr/convertisseur-audio).
- Pour ne garder qu’un extrait, utilisez [Couper un audio](/fr/couper-audio).

Vos fichiers audio sont traités localement, sans jamais être envoyés à un serveur.
