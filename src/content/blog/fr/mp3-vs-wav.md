---
title: 'MP3 ou WAV : différences, poids des fichiers et lequel choisir'
description: 'Le WAV est sans perte et lourd, le MP3 compressé et universel. Qualité sonore, poids par minute, et quand choisir WAV, MP3, FLAC ou AAC, expliqué simplement.'
h1: 'MP3 ou WAV : quelle différence, et lequel choisir ?'
permalink: mp3-ou-wav
published: 2026-10-09
updated: 2026-10-09
tool: wav-to-mp3
category: audio
faq:
  - q: 'Le WAV est-il de meilleure qualité que le MP3 ?'
    a: 'Le WAV est sans perte, il stocke le son exactement tel qu’enregistré, alors que le MP3 supprime les sons difficiles à percevoir. À 256-320 kbit/s, la plupart des gens ne font pas la différence de façon fiable sur un équipement courant, mais le WAV reste préférable pour le montage, le mixage et l’archivage.'
  - q: 'Convertir un MP3 en WAV améliore-t-il la qualité ?'
    a: 'Non. Ce que le MP3 a supprimé ne revient pas. Le WAV sera bien plus lourd et sonnera exactement comme le MP3. Ne convertissez en WAV que si un logiciel l’exige, par exemple un éditeur audio ou un outil de gravure de CD.'
  - q: 'Quelle place prend un WAV par rapport à un MP3 ?'
    a: 'Un WAV qualité CD occupe environ 10 Mo par minute. Un MP3 à 320 kbit/s environ 2,4 Mo par minute et un MP3 à 128 kbit/s moins de 1 Mo : le WAV est donc de 4 à 11 fois plus lourd.'
  - q: 'Quel est le meilleur débit pour un MP3 ?'
    a: '320 kbit/s pour la musique quand la qualité compte, 192 kbit/s comme réglage polyvalent, 128 kbit/s pour la voix, les podcasts et les mémos vocaux.'
  - q: 'Faut-il préférer le FLAC au WAV ?'
    a: 'Pour stocker de la musique, souvent oui. Le FLAC est sans perte comme le WAV, mais pèse en général environ moitié moins, et gère mieux les étiquettes (artiste, album, pochette). Le WAV reste le choix le plus sûr pour l’enregistrement et les logiciels de montage.'
---

Vous exportez un morceau, archivez des enregistrements, envoyez une voix off à un client ou remplissez une clé USB pour la voiture : MP3 ou WAV ? La réponse dépend moins de la « qualité » dans l’absolu que de ce que vous ferez ensuite du fichier. Voici ce qui distingue vraiment les deux formats, la place qu’ils occupent, une règle simple pour choisir, et où se situent FLAC, AAC et les autres.

## La différence en une phrase

Le **WAV** stocke le son sans compression, exactement tel qu’enregistré. Le **MP3** le compresse en supprimant les sons que l’oreille humaine a peu de chances de percevoir, pour des fichiers plusieurs fois plus légers.

## Comment fonctionne chaque format

### WAV : l’enregistrement brut

Le WAV (*Waveform Audio File Format*) contient le plus souvent de l’audio **PCM** : une suite de mesures d’amplitude prises des milliers de fois par seconde. La « qualité CD », c’est 44 100 échantillons par seconde, sur 16 bits, en stéréo, soit 1 411 kbit/s. Les enregistrements de studio utilisent souvent 24 bits et 48 kHz ou plus.

Rien n’est supprimé : vous pouvez monter, traiter et réenregistrer un WAV autant de fois que vous le voulez sans dégradation. Le prix à payer, c’est le poids. Les fichiers WAV standard sont aussi limités à 4 Go et gèrent mal les étiquettes comme l’artiste ou la pochette.

### MP3 : la compression perceptive

Le MP3 s’appuie sur un **modèle psychoacoustique** : il supprime les fréquences masquées par des sons plus forts et les détails au-delà de ce que la plupart des oreilles perçoivent, puis compresse le reste. Le **débit** (128, 192, 256, 320 kbit/s…) fixe la quantité de données conservée par seconde : plus il est élevé, plus le son est fidèle et le fichier lourd.

La perte est définitive, et elle s’accumule : décoder un MP3, le modifier puis le réencoder le dégrade un peu plus à chaque fois.

## Le poids des fichiers comparé

Par minute d’audio stéréo :

| Format | Débit | Poids par minute | Poids d’un morceau de 4 minutes |
|---|---|---|---|
| WAV 24 bits / 48 kHz | 2 304 kbit/s | ~17 Mo | ~69 Mo |
| WAV 16 bits / 44,1 kHz (CD) | 1 411 kbit/s | ~10,6 Mo | ~42 Mo |
| FLAC (qualité CD) | variable | souvent ~5 à 7 Mo | ~20 à 28 Mo |
| MP3 320 kbit/s | 320 kbit/s | ~2,4 Mo | ~9,6 Mo |
| MP3 192 kbit/s | 192 kbit/s | ~1,4 Mo | ~5,8 Mo |
| MP3 128 kbit/s | 128 kbit/s | ~0,96 Mo | ~3,8 Mo |

Les chiffres du WAV et du MP3 découlent directement du débit (débit × 60 secondes ÷ 8). Ceux du FLAC dépendent de la musique : un rock dense se compresse moins qu’un piano solo.

## Entend-on la différence ?

À **128 kbit/s**, un auditeur attentif avec un bon casque remarque souvent des cymbales un peu « chuintantes », des réverbérations bavant légèrement ou une stéréo moins précise. À **256-320 kbit/s**, la différence avec un WAV est extrêmement difficile à détecter pour la plupart des gens en écoute à l’aveugle, surtout sur un haut-parleur de téléphone, un autoradio ou des écouteurs Bluetooth (qui compressent de toute façon le son eux-mêmes).

Pour **écouter**, un MP3 à haut débit est donc pratiquement transparent pour la plupart d’entre nous. Pour **travailler le son**, le WAV s’impose : non pas parce qu’on entendrait la différence en une écoute, mais parce que les pertes s’additionnent à chaque modification et chaque export.

## Quand choisir le WAV

- **Enregistrer** une voix, des instruments, un podcast : enregistrez en WAV (en 24 bits si votre interface le permet).
- **Monter et mixer** dans un logiciel audio (Audacity, GarageBand, Logic, Reaper…).
- **Livrer des masters** à un ingénieur de mastering, un label ou un distributeur : la plupart exigent du WAV.
- **Radio et post-production vidéo**, où le WAV en 48 kHz est la norme.
- **Les logiciels qui l’exigent** : certains outils de transcription, d’échantillonnage ou de gravure de CD.

## Quand choisir le MP3

- **Partager** avec n’importe qui, sur n’importe quel appareil : le MP3 se lit partout, du vieil autoradio à l’enceinte connectée.
- **Le mail et les messageries**, soumis à des limites de taille.
- **Les podcasts** à diffuser (128 à 192 kbit/s est la norme pour la voix).
- **Les bibliothèques musicales** sur téléphone ou clé USB, quand la place compte.

Pour convertir : [WAV en MP3](/fr/wav-en-mp3) (de 128 à 320 kbps, l’AIFF est aussi accepté). Dans l’autre sens, pour un éditeur qui exige du WAV : [MP3 en WAV](/fr/mp3-en-wav). Les deux fonctionnent dans votre navigateur sans envoyer vos enregistrements.

## Et le FLAC, l’AAC, l’OGG et l’Opus ?

| Format | Type | Idéal pour |
|---|---|---|
| **FLAC** | Sans perte, compressé | Archiver sa musique en pleine qualité dans deux fois moins de place ; bonnes étiquettes |
| **AAC / M4A** | Avec perte | Appareils Apple, YouTube ; un peu plus efficace que le MP3 à débit égal |
| **OGG Vorbis** | Avec perte | Jeux vidéo, certains services de streaming, logiciels libres |
| **Opus** | Avec perte | Voix et musique à bas débit ; utilisé par de nombreuses applications d’appel |
| **AIFF** | Non compressé | L’équivalent Apple du WAV |

Le [Convertisseur audio](/fr/convertisseur-audio) passe d’un format à l’autre parmi MP3, WAV, M4A (AAC), OGG, FLAC et OPUS. Pour les cas courants : [FLAC en MP3](/fr/flac-en-mp3), [M4A en MP3](/fr/m4a-en-mp3), [OGG en MP3](/fr/ogg-en-mp3).

## La bonne méthode : garder un master sans perte

L’approche des professionnels, valable pour tout le monde :

1. **Enregistrez et montez en WAV** (ou gardez votre bibliothèque en FLAC).
2. **Exportez des copies MP3** pour le partage, au débit adapté à l’usage.
3. **Ne faites jamais MP3 → WAV → MP3** en espérant améliorer quelque chose : chaque encodage avec perte retire un peu plus.
4. **Sauvegardez les masters.** Le stockage coûte peu ; un original perdu ne se reconstitue pas à partir d’un MP3.

## Fréquence d’échantillonnage et profondeur de bits

À l’export d’un WAV, votre logiciel demande une **fréquence d’échantillonnage** et une **profondeur de bits** :

- **44,1 kHz** est la norme de la musique et du CD ; **48 kHz** celle de la vidéo. Respectez ce qu’attend la destination et évitez les allers-retours entre les deux.
- **16 bits** suffisent pour un morceau terminé ; **24 bits** offrent plus de marge à l’enregistrement et au mixage, pour que les passages calmes restent propres quand on monte le volume.
- Les valeurs supérieures (96 kHz, 32 bits flottants) servent en studio, mais alourdissent beaucoup les fichiers pour un bénéfice audible minime sur un produit fini.

## Le guide de décision

| Votre situation | Choisissez |
|---|---|
| Enregistrer un podcast ou un morceau | WAV |
| Envoyer une maquette par mail | MP3 320 kbit/s |
| Publier un épisode de podcast | MP3 128-192 kbit/s |
| Archiver une collection de CD | FLAC (ou WAV si votre lecteur l’exige) |
| Musique sur téléphone ou clé USB de voiture | MP3 256-320 kbit/s ou AAC |
| Envoi à un distributeur ou un label | WAV, selon leurs consignes |
| Faire une vidéo YouTube à partir d’un morceau | La meilleure source possible : voir [mettre un MP3 sur YouTube](/fr/blog/mettre-un-mp3-sur-youtube) |

## Questions fréquentes sur la conversion

**Passer du WAV au MP3 va-t-il dégrader ma musique ?** À 256-320 kbit/s, presque certainement pas de façon audible. À 128 kbit/s, peut-être pour de la musique sur un bon équipement ; c’est très bien pour la voix.

**Quel débit pour un mémo vocal ?** 128 kbit/s suffit largement ; la voix ne gagne rien à plus.

**Mon WAV fait 2 Go, est-ce normal ?** Pour un enregistrement de plusieurs heures en 24 bits, oui. Gardez les passages utiles avec [Couper un audio](/fr/couper-audio) ou exportez un MP3 pour l’écoute.

**Besoin de la piste audio d’une vidéo ?** Voir [comment extraire le son d’une vidéo](/fr/blog/extraire-le-son-d-une-video).
