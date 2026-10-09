---
name: 'WebM en MP4'
title: 'WebM en MP4 : convertir vos vidéos WebM gratuitement'
description: 'Convertissez vos vidéos WebM (enregistrements d’écran, vidéos web) en MP4 compatibles partout. Gratuit, par lot, sans filigrane et sans envoi de fichier.'
h1: 'Convertir WebM en MP4'
lead: 'Transformez vos fichiers WebM en MP4, le format vidéo lu par tous les téléphones, ordinateurs, téléviseurs et logiciels de montage. La conversion a lieu dans votre navigateur.'
what: 'vos vidéos WebM'
howTo: 'convertir WebM en MP4'
steps:
  - 'Cliquez sur <strong>Choisir des fichiers</strong> ou glissez vos vidéos .webm dans le cadre.'
  - 'Cliquez sur <strong>Convertir</strong>. La première fois, le moteur vidéo (environ 31 Mo) se télécharge, puis il est mis en cache.'
  - 'Téléchargez chaque MP4, ou toutes les vidéos avec <strong>Tout télécharger (ZIP)</strong>.'
limits:
  - 'Les WebM utilisent des codecs (VP8, VP9, AV1, Opus) généralement incompatibles avec le MP4 classique : la vidéo est donc réencodée en H.264/AAC, ce qui prend du temps. Comptez souvent plus que la durée de la vidéo, selon votre appareil.'
  - 'La transparence éventuelle d’une vidéo WebM (canal alpha) n’est pas conservée en MP4.'
  - 'Taille maximale : 1 Go par vidéo. Un ordinateur est recommandé pour les vidéos longues.'
faq:
  - q: 'Qu’est-ce qu’un fichier WebM ?'
    a: 'Le WebM est un format vidéo ouvert promu par Google, conçu pour le web. On le rencontre surtout dans les enregistrements d’écran faits depuis le navigateur, les vidéos téléchargées depuis certains sites et les exports de certains outils en ligne.'
  - q: 'Pourquoi convertir un WebM en MP4 ?'
    a: 'Le WebM se lit bien dans les navigateurs, mais beaucoup moins ailleurs : lecteurs vidéo de télévision, certains logiciels de montage ou de présentation, iPhone selon l’application, réseaux sociaux. Le MP4 en H.264 est compatible partout.'
  - q: 'La conversion fait-elle perdre de la qualité ?'
    a: 'Un réencodage est nécessaire, mais il est réglé pour une très bonne qualité : la différence est rarement visible. Le fichier MP4 peut être un peu plus lourd ou plus léger que le WebM selon le contenu.'
  - q: 'Mes vidéos sont-elles envoyées ?'
    a: 'Non. Tout se passe dans votre navigateur, avec FFmpeg compilé en WebAssembly.'
---

## WebM : très répandu sur le web, moins ailleurs

Le **WebM** est un format vidéo libre, pensé pour la diffusion sur Internet. Il contient en général une vidéo en **VP8, VP9 ou AV1** et un son en **Opus ou Vorbis**. Vous en avez probablement obtenu un :

- en **enregistrant votre écran** avec une extension de navigateur ou un outil en ligne ;
- en **téléchargeant une vidéo** depuis un site qui diffuse ce format ;
- en **exportant** depuis certaines applications web (enregistreurs vocaux et vidéo, outils de visioconférence).

Le problème : en dehors des navigateurs, le WebM est beaucoup moins bien pris en charge. Certains logiciels de montage, de présentation, lecteurs de salon ou applications mobiles le refusent.

## WebM et MP4

| | WebM | MP4 (H.264/AAC) |
|---|---|---|
| Codecs | VP8, VP9, AV1 / Opus, Vorbis | H.264 / AAC |
| Navigateurs | Très bonne prise en charge | Universelle |
| Logiciels, TV, mobiles | Variable | Universelle |
| Montage vidéo | Parfois refusé | Accepté partout |

## Ce qui se passe pendant la conversion

Comme les codecs du WebM ne sont pas ceux du MP4 classique, l’outil **réencode** l’image en **H.264** et le son en **AAC**, la combinaison la plus compatible du marché. Ce traitement se fait sur votre appareil : il est plus lent qu’une simple copie, et sa vitesse dépend de votre processeur et de la résolution de la vidéo.

Conseils :

- **Vidéo longue ?** Coupez d’abord le passage utile avec [Couper une vidéo](/fr/couper-video) : moins de durée, c’est moins d’attente.
- **Fichier trop lourd après conversion ?** Réduisez-le avec [Compresser une vidéo](/fr/compresser-video).
- **Vous n’avez besoin que du son** d’un enregistrement ? [MP4 en MP3](/fr/mp4-en-mp3) accepte aussi le WebM et va beaucoup plus vite.

## Où trouver le MP4 converti ?

Sur ordinateur, le fichier arrive dans votre dossier Téléchargements avec le même nom que l’original et l’extension .mp4. Sur Android, il se trouve aussi dans Téléchargements ; sur iPhone, dans l’app Fichiers. Si vous convertissez plusieurs vidéos, le bouton **Tout télécharger (ZIP)** les regroupe dans une seule archive.

Autres conversions possibles : [MOV en MP4](/fr/mov-en-mp4) pour les vidéos d’iPhone et [MKV en MP4](/fr/mkv-en-mp4) pour les fichiers MKV.

Vos enregistrements d’écran contiennent souvent des informations sensibles (messages, tableaux de bord, données clients) : ici, ils ne quittent jamais votre appareil.
