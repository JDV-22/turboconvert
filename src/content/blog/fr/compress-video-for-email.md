---
title: 'Vidéo trop lourde ? La compresser pour mail, WhatsApp, Discord'
description: 'Vidéo trop lourde à envoyer ? Limites actuelles de Gmail, Outlook, WhatsApp, Discord et Telegram, bons réglages et méthodes gratuites pour la compresser.'
h1: 'Comment compresser une vidéo pour l’envoyer par mail, WhatsApp ou Discord'
permalink: compresser-video-pour-mail-whatsapp
published: 2026-10-09
updated: 2026-10-09
tool: compress-video
category: video
faq:
  - q: 'Quelle durée de vidéo peut-on envoyer par Gmail ?'
    a: 'Les pièces jointes Gmail sont limitées à 25 Mo. En 720p bien compressé, cela représente une à deux minutes de vidéo ; en 480p, quelques minutes. Au-delà, mieux vaut un lien Google Drive, que Gmail insère automatiquement au-dessus de 25 Mo.'
  - q: 'Comment envoyer une longue vidéo sur WhatsApp sans perte de qualité ?'
    a: 'Envoyez-la comme Document (pièce jointe > Document) et non depuis la galerie. WhatsApp ne compresse pas les documents, et son centre d’aide indique une limite de 2 Go. Le destinataire télécharge le fichier original.'
  - q: 'Compresser une vidéo réduit-il la qualité ?'
    a: 'Oui, un peu : la compression baisse le débit et souvent la résolution. Sur un écran de téléphone, une vidéo en 720p bien compressée reste très proche de l’original. Évitez de compresser plusieurs fois la même vidéo.'
  - q: 'Quelle résolution choisir pour envoyer une vidéo ?'
    a: 'Le 720p est le meilleur compromis pour les téléphones et les ordinateurs portables. Gardez le 1080p si la vidéo sera regardée sur une TV ou un grand écran et que le poids le permet, et le 480p pour passer sous des limites très serrées.'
  - q: 'Peut-on compresser une vidéo sans l’envoyer sur Internet ?'
    a: 'Oui. <a href="/fr/compresser-video">Compresser une vidéo</a> fonctionne dans votre navigateur : la vidéo reste sur votre appareil. Les outils intégrés comme le Finder sur Mac ou Clipchamp sur Windows fonctionnent aussi hors ligne.'
---

Une minute filmée en 4K avec un téléphone récent peut dépasser largement 100 Mo, soit quatre fois ce qu’accepte Gmail. Vidéo de famille, bug à montrer à un collègue, extrait pour un serveur Discord : il faut souvent l’alléger avant de l’envoyer. Ce guide récapitule les limites actuelles de chaque application, explique quels réglages réduisent vraiment le poids et présente les méthodes gratuites sur chaque appareil.

## Combien peut-on envoyer ? Les limites en 2026

Vérifiées en octobre 2026 dans les pages d’aide ou les annonces de chaque service :

| Service | Limite | À savoir |
|---|---|---|
| Gmail | 25 Mo | Au-delà, Gmail insère un lien Google Drive |
| Outlook.com | 25 Mo par message | Liens OneDrive jusqu’à 2 Go |
| iCloud Mail | 20 Mo | Lien Mail Drop jusqu’à 5 Go, conservé 30 jours |
| WhatsApp — en vidéo | Compressée par WhatsApp, limite plus basse | Sa FAQ a mentionné 16 Mo pour les médias |
| WhatsApp — en document | 2 Go | Envoyé tel quel, sans compression |
| Discord (gratuit) | 20 Mo par fichier | Relevé de 10 à 20 Mo en août 2026 ; Nitro permet davantage |
| Telegram | 2 Go (4 Go avec Premium) | Envoyer comme fichier pour éviter la compression |
| Messagerie pro (Microsoft 365, Workspace) | Fixée par votre service informatique | Souvent 25 à 35 Mo |

Pour le mail, visez **un peu en dessous** de la limite : une pièce jointe grossit d’environ un tiers à l’envoi, et le serveur du destinataire peut être plus strict que le vôtre.

## Qu’est-ce qui rend une vidéo lourde ?

Le poids d’un fichier vidéo, c’est simplement **débit × durée**. Une règle pratique :

> Poids en Mo ≈ débit en Mbit/s × durée en secondes ÷ 8

Pour faire tenir une vidéo de 60 secondes dans 25 Mo, le débit total doit donc rester autour de 3 Mbit/s : confortable en 720p, juste en 1080p, impossible en 4K. Trois facteurs déterminent le débit :

1. **La résolution.** La 4K compte quatre fois plus de pixels que le 1080p, et neuf fois plus que le 720p.
2. **Le niveau de compression.** Une compression plus forte baisse le débit, au prix de détails dans les mouvements rapides.
3. **La durée.** Moitié moins longue, moitié moins lourde. Couper est la compression la plus indolore qui soit.

Votre iPhone indique le poids approximatif d’une minute de vidéo pour chaque format dans **Réglages > Appareil photo > Enregistrement vidéo**.

## Méthode 1 : compresser dans le navigateur (ordinateur ou téléphone)

[Compresser une vidéo](/fr/compresser-video) réencode la vidéo avec FFmpeg, directement dans votre navigateur : le fichier n’est pas envoyé.

1. Ouvrez [Compresser une vidéo](/fr/compresser-video) et cliquez sur **Choisir un fichier** (MP4, MOV, WebM, MKV, AVI… jusqu’à 1 Go).
2. Réglez la **Résolution max** : *Originale*, **1080p**, **720p** (par défaut) ou **480p**.
3. Choisissez la **Compression** : *Forte — fichier le plus léger*, *Recommandée — bonne qualité* ou *Légère — meilleure qualité*.
4. Cliquez sur **Convertir** et patientez : le MP4 compressé se télécharge automatiquement.

Quels réglages selon la destination :

| Destination | Résolution max | Compression |
|---|---|---|
| Gmail / Outlook, extrait de moins d’une minute | 720p | Recommandée |
| Gmail / Outlook, 1 à 3 minutes | 480p | Forte |
| Discord gratuit (20 Mo) | 720p ou 480p | Forte |
| WhatsApp en document, pour la famille | 720p | Recommandée |
| Archive ou visionnage sur TV | 1080p | Légère |

L’outil ne vise pas un poids précis en Mo : vérifiez le résultat et descendez d’un cran si nécessaire. La compression est exigeante : la première utilisation télécharge le moteur (environ 31 Mo), et une longue vidéo prend du temps — un ordinateur portable récent est bien plus rapide qu’un téléphone. Avant de compresser, supprimez les passages inutiles avec [Couper une vidéo](/fr/couper-video).

## Méthode 2 : les outils intégrés

### Mac

- **Finder :** sélectionnez la vidéo, clic droit, **Encoder les fichiers vidéo sélectionnés**, puis choisissez **720p** ou **480p**. Le résultat est un fichier `.m4v` (MPEG-4).
- **QuickTime Player :** **Fichier > Exporter sous > 720p** ou **480p**. Le résultat est un `.mov`, parfait pour les utilisateurs de Mac et d’iPhone.

### Windows

- **Clipchamp** (inclus dans Windows 11) : importez le clip, placez-le sur la timeline, **Exporter**, puis **480p** ou **720p**. L’offre gratuite exporte en MP4 jusqu’à 1080p.
- Aucun autre outil intégré à Windows ne compresse directement une vidéo.

### iPhone

- **Messages et WhatsApp** compressent automatiquement les vidéos envoyées depuis la galerie : pratique, mais sans contrôle de la qualité.
- Pour des fichiers plus légers dès le départ, baissez la résolution dans **Réglages > Appareil photo > Enregistrement vidéo** (1080p à 30 i/s au lieu de 4K).
- Pour viser une taille précise, ouvrez [Compresser une vidéo](/fr/compresser-video) dans Safari.

### Android

Les messageries compressent automatiquement. Certaines galeries de constructeurs proposent un choix de résolution à l’export d’une vidéo retouchée, selon la marque. Pour un contrôle précis, un outil dans le navigateur fonctionne de la même façon sur tous les téléphones Android.

## Méthode 3 : ne pas compresser, envoyer un lien

Pour les vidéos longues ou importantes (un mariage, un livrable client), la compression sacrifie une qualité que vous regretterez. Envoyez plutôt un lien :

- **Google Drive** depuis Gmail, **OneDrive** depuis Outlook, **Mail Drop** depuis Mail d’Apple ;
- **WhatsApp ou Telegram en document/fichier** : jusqu’à 2 Go, livré sans recompression ;
- tout dossier cloud avec un lien de partage, réglé pour que seul le destinataire puisse l’ouvrir.

## D’autres façons d’alléger une vidéo

- **Couper** le début et la fin : souvent 30 % de gagnés sans effort. [Couper une vidéo](/fr/couper-video) fonctionne avec des heures de début et de fin.
- **Supprimer le son** s’il est inutile (captures d’écran, bruit de fond) avec [Supprimer le son d’une vidéo](/fr/supprimer-son-video). L’audio pèse peu, mais cela aide sur les clips courts.
- **Convertir en GIF ?** Seulement pour des boucles très courtes et sans son (quelques secondes). Un GIF est généralement *plus lourd* qu’un MP4 du même extrait. Si vous en avez besoin, [Vidéo en GIF](/fr/video-en-gif) limite durée et largeur pour rester raisonnable.
- **Éviter la double compression.** Compressez le fichier original, pas une version déjà compressée par WhatsApp.

## En cas de problème

**La vidéo compressée est à peine plus légère.** Elle était sans doute déjà très compressée (HEVC d’iPhone, ou vidéo récupérée d’une messagerie). Baissez la résolution max plutôt que seulement le niveau de compression.

**Le destinataire ne peut pas lire la vidéo.** Assurez-vous qu’il s’agit d’un MP4 en H.264, la combinaison la plus compatible. Les vidéos HEVC d’iPhone peuvent ne pas se lire sur d’anciens PC Windows : voir [comment convertir un MOV en MP4](/fr/blog/convertir-mov-en-mp4).

**La compression est très lente.** L’encodage vidéo est un travail lourd. Fermez les autres onglets, branchez votre portable, choisissez une résolution max plus basse (le 720p s’encode bien plus vite que le 1080p) ou coupez d’abord la vidéo.

**Discord indique toujours que le fichier est trop lourd.** Discord vérifie la taille d’origine, avant toute compression sur mobile. Compressez d’abord sur votre appareil, puis envoyez le fichier allégé.

## La recette rapide

1. Couper ce qui ne sert pas.
2. Compresser en 720p, *Recommandée*.
3. Vérifier le poids ; s’il est encore trop élevé, passer en 480p ou en *Forte*.
4. Au-delà de 25 Mo pour un mail, envoyer un lien.
