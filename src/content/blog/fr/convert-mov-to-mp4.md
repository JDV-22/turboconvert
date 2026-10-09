---
title: 'Convertir un MOV en MP4 sur Mac, Windows et iPhone (gratuit)'
description: 'Convertissez les vidéos MOV d’iPhone et de Mac en MP4 — Finder, iMovie, Clipchamp, VLC, HandBrake ou navigateur — et réparez les vidéos illisibles.'
h1: 'Comment convertir un MOV en MP4 sur Mac, Windows et iPhone'
permalink: convertir-mov-en-mp4
published: 2026-10-09
updated: 2026-10-09
tool: mov-to-mp4
category: video
faq:
  - q: 'Peut-on simplement renommer un fichier .mov en .mp4 ?'
    a: 'Parfois la vidéo se lit, car les deux formats sont proches, mais ce n’est pas fiable : la structure du fichier diffère et certains lecteurs, logiciels de montage ou sites le refuseront. Une conversion, même par simple réempaquetage, est la méthode sûre.'
  - q: 'Convertir un MOV en MP4 fait-il perdre en qualité ?'
    a: 'Non si la vidéo est seulement réempaquetée (remux) : vidéo et audio sont copiés à l’identique. Un réencodage fait perdre un peu de qualité, difficile à voir avec des réglages raisonnables. Le réempaquetage est possible quand le MOV utilise déjà des codecs compatibles MP4, comme les vidéos d’iPhone.'
  - q: 'Pourquoi ma vidéo d’iPhone ne se lit-elle pas sur Windows ?'
    a: 'Les iPhone récents filment en HEVC (H.265) par défaut. Windows a besoin des Extensions vidéo HEVC (payantes dans la plupart des pays) pour la lire. Réencodez la vidéo en H.264, ou réglez l’iPhone sur Réglages > Appareil photo > Formats > Le plus compatible pour les prochaines vidéos.'
  - q: 'Comment convertir un MOV en MP4 sur Mac sans logiciel ?'
    a: 'Sélectionnez la vidéo dans le Finder, faites un clic droit et choisissez Encoder les fichiers vidéo sélectionnés. Vous obtenez un fichier MPEG-4 (.m4v) qui se lit comme un MP4. iMovie, gratuit sur tous les Mac, exporte de vrais .mp4 via Partager > Fichier.'
  - q: 'Y a-t-il une limite de taille pour convertir un MOV en MP4 en ligne ?'
    a: 'La plupart des convertisseurs en ligne limitent les fichiers gratuits à quelques centaines de Mo et les envoient sur un serveur. <a href="/fr/mov-en-mp4">MOV en MP4</a> de TurboConvert fonctionne dans votre navigateur, sur des fichiers jusqu’à 1 Go, sans les envoyer.'
---

Le MOV est le format vidéo des iPhone, des Mac et de nombreux appareils photo. Il se lit parfaitement dans l’univers Apple, puis refuse de s’ouvrir sur un PC Windows, une smart TV, un téléphone Android ou le formulaire d’envoi d’un site. Le MP4 est l’alternative universelle. Ce guide explique la différence, présente les méthodes gratuites sur chaque appareil, et pourquoi certaines vidéos « converties » restent illisibles.

## MOV ou MP4 : quelle différence ?

Ce sont deux **conteneurs** : des boîtes qui renferment une piste vidéo, une piste audio et des métadonnées. Le MOV a été créé par Apple pour QuickTime ; le MP4 est la norme internationale qui en dérive. Ce sont des cousins, ce qui explique qu’on puisse souvent convertir sans toucher à la vidéo elle-même.

Ce qui détermine vraiment la compatibilité, c’est le **codec** à l’intérieur :

| Codec | Source typique | Lisible sur |
|---|---|---|
| Vidéo **H.264** + audio AAC | iPhone en mode « Le plus compatible », la plupart des appareils photo | Pratiquement tout |
| Vidéo **HEVC (H.265)** + audio AAC | iPhone par défaut (« Haute efficacité ») | Appareils Apple, Android récents ; Windows exige une extension payante |
| **ProRes** | Mode ProRes des iPhone Pro, caméras professionnelles | Logiciels de montage ; fichiers énormes |

Il existe donc deux sortes de « conversion » :

- **Réempaqueter (remux)** : déplacer la même vidéo et le même son d’une boîte MOV vers une boîte MP4. Rapide, sans perte, le poids bouge à peine.
- **Réencoder** : décoder puis recompresser la vidéo, par exemple du HEVC ou du ProRes vers le H.264. Plus lent, légèrement destructeur, et seul moyen de changer de codec.

## Méthode 1 : dans le navigateur (Windows, Mac, Chromebook, Linux)

[MOV en MP4](/fr/mov-en-mp4) convertit dans votre navigateur : la vidéo reste sur votre appareil.

1. Ouvrez [MOV en MP4](/fr/mov-en-mp4) et cliquez sur **Choisir des fichiers**. Les fichiers MOV, M4V et QT jusqu’à 1 Go sont acceptés ; vous pouvez en ajouter plusieurs.
2. Cliquez sur **Convertir**.
3. Le MP4 se télécharge automatiquement (plusieurs fichiers peuvent être récupérés en ZIP).

Quand les codecs du MOV peuvent passer tels quels dans un MP4, la vidéo est réempaquetée sans réencodage : rapide et sans perte. Sinon, elle est réencodée en vidéo H.264 avec audio AAC, ce qui prend plus de temps et dépend de la puissance de votre ordinateur. La première utilisation télécharge le moteur FFmpeg (environ 31 Mo, mis en cache ensuite). Un ordinateur est recommandé pour les longues vidéos.

À noter : le réempaquetage conserve le codec d’origine. Une vidéo d’iPhone filmée en HEVC devient un MP4 en HEVC, lisible sur la plupart des appareils récents, mais pas sur Windows sans l’extension HEVC.

## Méthode 2 : sur Mac, sans rien installer

### Finder : « Encoder les fichiers vidéo sélectionnés »

1. Sélectionnez un ou plusieurs fichiers MOV dans le Finder.
2. Faites un clic droit et choisissez **Encoder les fichiers vidéo sélectionnés** (dans *Actions rapides* ou *Services* selon votre version de macOS).
3. Choisissez une résolution et **H.264** pour une compatibilité maximale (ou HEVC pour des fichiers plus légers), puis **Continuer**.

Vous obtenez un fichier `.m4v`, une vidéo MPEG-4 lisible partout où le MP4 l’est. Renommez-le en `.mp4` si un site exige cette extension.

### iMovie : un vrai export MP4

Importez le clip dans iMovie (gratuit sur tous les Mac), puis **Fichier > Partager > Fichier**, choisissez résolution et qualité et enregistrez. iMovie exporte des `.mp4` en H.264.

### Et QuickTime Player ?

*Fichier > Exporter sous* dans QuickTime Player permet de changer la résolution, mais le résultat reste un fichier **.mov** : ce n’est pas ce que vous cherchez ici.

## Méthode 3 : sur Windows

### Clipchamp (inclus dans Windows 11)

1. Ouvrez **Clipchamp** (installé avec Windows 11, ou gratuit sur le Microsoft Store), connectez-vous et créez une vidéo.
2. Importez le MOV et faites-le glisser sur la timeline.
3. Cliquez sur **Exporter** et choisissez une résolution (jusqu’à 1080p avec l’offre gratuite). Le résultat est un MP4.

Clipchamp réencode la vidéo : c’est plus lent qu’un réempaquetage, mais vous obtenez des MP4 en H.264 lisibles partout.

### Le lecteur VLC

**Média > Convertir / Enregistrer > Ajouter**, sélectionnez le MOV, cliquez sur **Convertir / Enregistrer**, choisissez le profil **Video - H.264 + MP3 (MP4)**, indiquez une destination en `.mp4` et cliquez sur **Démarrer**. Gratuit et hors ligne, mais l’interface ne pardonne pas les erreurs.

### HandBrake (Windows, Mac, Linux)

Le logiciel libre et gratuit **HandBrake** est le réencodeur le plus souple : choisissez un préréglage comme *Fast 1080p30*, vérifiez que le format est **MP4** et lancez l’encodage. Idéal pour convertir beaucoup de gros fichiers avec des réglages homogènes.

## Méthode 4 : sur iPhone

- **Éviter le problème :** **Réglages > Appareil photo > Formats > Le plus compatible** filme en H.264. Les fichiers gardent l’extension `.MOV`, mais se lisent sur Windows et presque partout. Contrepartie : des fichiers plus lourds, et certains modes (comme la 4K à 60 i/s) exigent la haute efficacité.
- **Convertir une vidéo existante :** ouvrez [MOV en MP4](/fr/mov-en-mp4) dans Safari et choisissez la vidéo dans votre photothèque. Pour les longues vidéos, transférez-les d’abord sur un ordinateur (AirDrop ou câble).
- **Les applications de partage convertissent souvent pour vous :** messageries et réseaux sociaux réencodent généralement les vidéos à l’envoi, il est donc rarement utile de convertir avant de publier.

## Comparatif rapide

| Méthode | Plateforme | Réempaquetage sans perte | Réencodage en H.264 | Coût |
|---|---|---|---|---|
| TurboConvert MOV en MP4 | Tout navigateur | Oui, quand c’est possible | Si nécessaire | Gratuit, sans envoi |
| Encodage Finder | Mac | Non | Oui (.m4v) | Intégré |
| iMovie | Mac | Non | Oui | Gratuit |
| Clipchamp | Windows | Non | Oui | Offre gratuite jusqu’à 1080p |
| VLC | Win/Mac/Linux | Possible | Oui | Gratuit |
| HandBrake | Win/Mac/Linux | Non | Oui, très paramétrable | Gratuit |

## En cas de problème

**Le MP4 se lit sans le son.** Rare avec les vidéos d’iPhone (audio AAC), mais certains appareils enregistrent en PCM ou dans d’autres formats audio. Il faut réencoder l’audio en AAC, ce que l’outil du navigateur fait automatiquement si nécessaire.

**Le MP4 ne se lit toujours pas sur Windows ou sur la TV.** La vidéo est sans doute en HEVC. Réencodez-la en H.264 avec le Finder (choix H.264), iMovie, Clipchamp ou HandBrake, ou installez les Extensions vidéo HEVC sur Windows.

**Le fichier est trop lourd pour être envoyé.** La conversion ne l’allège guère. Utilisez [Compresser une vidéo](/fr/compresser-video) en choisissant une **Résolution max** (1080p, 720p ou 480p). Voir [comment compresser une vidéo pour l’envoyer par mail ou WhatsApp](/fr/blog/compresser-video-pour-mail-whatsapp) pour les limites de chaque application.

**Vous n’avez besoin que d’un extrait.** Coupez d’abord avec [Couper une vidéo](/fr/couper-video) : une vidéo plus courte se convertit plus vite.

**C’est un WebM ou un MKV, pas un MOV.** Utilisez [WebM en MP4](/fr/webm-en-mp4) ou [MKV en MP4](/fr/mkv-en-mp4), qui fonctionnent de la même façon.

**Vous voulez seulement le son.** [MP4 en MP3](/fr/mp4-en-mp3) accepte directement les MOV : voir [comment extraire le son d’une vidéo](/fr/blog/extraire-le-son-d-une-video).
