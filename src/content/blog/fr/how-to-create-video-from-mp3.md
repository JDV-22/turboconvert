---
title: 'Mettre un MP3 sur YouTube : transformer un audio en vidéo'
description: 'YouTube et Instagram refusent les MP3. Transformez un audio et une image en MP4 gratuitement : dans le navigateur, avec iMovie, Clipchamp ou FFmpeg.'
h1: 'Comment mettre un MP3 sur YouTube (en le transformant en vidéo)'
permalink: mettre-un-mp3-sur-youtube
published: 2026-10-09
updated: 2026-10-09
tool: mp3-to-mp4
category: video
faq:
  - q: 'Peut-on mettre un MP3 directement sur YouTube ?'
    a: 'Non. L’envoi classique de YouTube n’accepte que des fichiers vidéo. Associez le MP3 à une image pour créer un MP4, puis mettez-le en ligne. Les podcasteurs des pays concernés peuvent aussi relier un flux RSS dans YouTube Studio.'
  - q: 'Quelle taille d’image pour une vidéo audio sur YouTube ?'
    a: 'Une image au format 16:9, idéalement 1 920 × 1 080 pixels, pour remplir le lecteur sans bandes noires. Pour Instagram ou TikTok, préférez une image verticale de 1 080 × 1 920 pixels.'
  - q: 'Transformer un MP3 en MP4 fait-il perdre en qualité audio ?'
    a: 'L’audio est réencodé une fois dans le MP4, puis YouTube le réencode encore après la mise en ligne. Partez de la meilleure source possible (WAV ou MP3 à 320 kbit/s) pour un résultat propre.'
  - q: 'Pourquoi ma vidéo a-t-elle reçu une réclamation pour droits d’auteur ?'
    a: 'Le système Content ID de YouTube compare le son à une base de musiques protégées. Ne publiez que des enregistrements dont vous détenez les droits ; sinon la vidéo peut être bloquée, démonétisée ou rendue muette.'
  - q: 'Peut-on ajouter une forme d’onde ou un visualiseur animé ?'
    a: '<a href="/fr/mp3-en-mp4">MP3 en MP4</a> de TurboConvert crée une vidéo avec une image fixe, ce qu’utilisent la plupart des musiques et podcasts publiés. Pour une forme d’onde animée, il faut un logiciel de montage ou un outil de visualisation dédié.'
---

Vous avez enregistré un épisode de podcast, terminé un morceau ou numérisé une vieille interview, et YouTube refuse votre MP3. Instagram, TikTok et Facebook aussi : ce sont des plateformes vidéo, il leur faut un fichier vidéo. La solution est simple et courante chez les musiciens et les podcasteurs : associer le son à une image (pochette, logo, photo) dans un MP4. Voici comment faire gratuitement sur chaque appareil, et comment obtenir un résultat qui s’affiche et sonne bien.

## Pourquoi les plateformes exigent une vidéo

L’outil d’envoi de YouTube accepte des formats comme MP4, MOV ou WebM : des conteneurs avec une piste vidéo. Un MP3 ne contient que du son. En l’enveloppant dans une vidéo avec une image fixe, le fichier est accepté et la plateforme affiche votre image pendant la lecture. Comme l’image ne bouge pas, ce type de vidéo se compresse très bien : un morceau de 5 minutes donne en général un fichier modeste.

**Podcasteurs :** dans certains pays, YouTube Studio peut aussi importer les épisodes depuis un flux RSS et créer les vidéos pour vous. Si vous publiez régulièrement, vérifiez si l’option est disponible dans les paramètres de votre chaîne.

## Méthode 1 : dans le navigateur (Windows, Mac, Chromebook)

[MP3 en MP4](/fr/mp3-en-mp4) crée la vidéo dans votre navigateur, sans rien envoyer :

1. Préparez votre image de couverture (voir les tailles plus bas).
2. Ouvrez [MP3 en MP4](/fr/mp3-en-mp4) et cliquez sur **Choisir des fichiers**. Sélectionnez votre fichier audio (MP3, WAV, M4A, AAC, OGG ou FLAC) **et** votre image (JPG, PNG ou WebP). L’image est facultative : sans elle, vous obtenez un fond uni.
3. Cliquez sur **Convertir**. Le MP4 se télécharge automatiquement, prêt à être mis en ligne.

L’outil utilise FFmpeg compilé en WebAssembly. La première utilisation télécharge le moteur (environ 31 Mo, mis en cache ensuite) ; les fichiers jusqu’à 500 Mo sont acceptés. Pour un long enregistrement, comme un podcast de deux heures, un ordinateur est plus rapide qu’un téléphone.

## Méthode 2 : iMovie (Mac, iPhone, iPad)

1. Créez un nouveau projet **Film**.
2. Importez l’image et le fichier audio. Glissez l’image sur la timeline, puis l’audio en dessous.
3. Étirez le plan de l’image pour qu’il dure autant que l’audio (sur Mac, sélectionnez-le et ajustez la durée dans l’inspecteur). Désactivez l’effet *Ken Burns* si vous voulez une image fixe.
4. **Partager > Fichier** (Mac) ou **Partager > Enregistrer la vidéo** (iPhone), en 1080p.

iMovie est gratuit et offre plus de possibilités créatives (titres, plusieurs images), mais demande plus de temps pour une simple image fixe.

## Méthode 3 : Clipchamp (Windows)

1. Ouvrez **Clipchamp**, créez une vidéo au format 16:9.
2. Importez l’image et le MP3, glissez-les sur la timeline.
3. Étirez la fin du plan de l’image jusqu’à la fin de l’audio.
4. **Exportez** en 1080p (l’offre gratuite va jusqu’au 1080p, en MP4).

## Méthode 4 : FFmpeg pour les utilisateurs avancés

Si FFmpeg est installé, une commande suffit :

```
ffmpeg -loop 1 -i cover.jpg -i audio.mp3 -c:v libx264 -tune stillimage -pix_fmt yuv420p -c:a aac -b:a 192k -shortest output.mp4
```

`-loop 1` répète l’image, `-tune stillimage` optimise l’encodage pour une image fixe, `-pix_fmt yuv420p` garantit la compatibilité et `-shortest` arrête la vidéo à la fin de l’audio.

## Bien préparer l’image

| Plateforme | Image conseillée | Format |
|---|---|---|
| YouTube | 1 920 × 1 080 px | 16:9 horizontal |
| Reels Instagram, TikTok, YouTube Shorts | 1 080 × 1 920 px | 9:16 vertical |
| Fil Instagram, Facebook | 1 080 × 1 080 px | 1:1 carré |

Conseils :

- **Une image nette à la bonne taille.** Un petit logo étiré à 1 920 pixels devient flou. Si votre visuel est carré (c’est le cas des pochettes d’album), placez-le sur un fond 16:9 dans un éditeur d’images plutôt que de le laisser étirer.
- **Un texte lisible.** Titre et artiste ou nom de l’épisode doivent se lire sur un téléphone.
- **Image à redimensionner ou à convertir ?** [Redimensionner une image](/fr/redimensionner-image) change les dimensions ; [HEIC en JPG](/fr/heic-en-jpg) convertit les photos d’iPhone.

## Bien préparer le son

- **Partez de la meilleure source.** YouTube réencode tout ce qu’il reçoit : commencez par un WAV ou un MP3 à 256-320 kbit/s. Convertir un fichier à 96 kbit/s ne l’améliorera pas.
- **Normalisez le volume** dans votre éditeur audio si le morceau est bien plus faible que les autres vidéos.
- **Supprimez les silences** au début et à la fin avec [Couper un audio](/fr/couper-audio).
- **Autres formats :** M4A, OGG ou FLAC sont acceptés directement par l’outil ; vous pouvez aussi les convertir d’abord avec le [Convertisseur audio](/fr/convertisseur-audio).

Notre guide [MP3 ou WAV](/fr/blog/mp3-ou-wav) explique quel format garder comme copie de référence.

## Avant de publier

- **Les droits.** Ne publiez que des musiques et enregistrements dont vous êtes l’auteur ou pour lesquels vous avez une licence. Content ID détecte automatiquement la musique commerciale ; une réclamation peut bloquer ou démonétiser la vidéo.
- **Les limites de durée.** Les nouveaux comptes YouTube sont limités en durée d’envoi tant que le compte n’est pas validé (la validation débloque les vidéos plus longues). Les plateformes de vidéos courtes ont leurs propres durées maximales : vérifiez-les avant de créer une version verticale.
- **Titre, description et chapitres.** Pour un podcast ou un long mix, ajoutez des horodatages (`00:00 Introduction`, `04:30 Interview`) dans la description : YouTube les transforme en chapitres.
- **La miniature.** Mettez aussi votre visuel en miniature personnalisée : c’est ce que les gens voient avant de cliquer.

## Un morceau ou un album entier ?

Pour un seul titre ou épisode, une image et un fichier audio suffisent. Pour un album ou une série :

- **Une vidéo par morceau** est préférable pour la recherche : chaque titre peut être trouvé seul, et les auditeurs partagent une chanson précise.
- **Une longue vidéo** (album complet ou mix) convient aux contenus « album complet » ou d’écoute en fond. Assemblez les pistes en un seul fichier audio dans votre éditeur, puis ajoutez des chapitres dans la description.
- **Gardez une identité visuelle cohérente** : le même modèle avec un titre différent par morceau rend votre chaîne reconnaissable d’un coup d’œil.

## En cas de problème

**YouTube affiche « Traitement abandonné » ou l’envoi échoue.** Vérifiez d’abord que le fichier se lit sur votre ordinateur. Des dimensions d’image inhabituelles (nombre impair de pixels) peuvent poser problème : utilisez des tailles standard comme 1 920 × 1 080.

**L’image est étirée ou entourée de bandes noires.** Son format ne correspond pas à celui de la plateforme. Retravaillez l’image en 16:9 ou 9:16 selon le cas.

**Le son est décalé ou coupé avant la fin.** Rare avec une image fixe, mais possible avec des fichiers endommagés ou à débit variable. Convertissez l’audio en WAV avec [MP3 en WAV](/fr/mp3-en-wav) ou réexportez-le depuis votre éditeur, puis recréez la vidéo.

**Il me faut l’inverse : le son d’une vidéo.** Voir [comment extraire le son d’une vidéo](/fr/blog/extraire-le-son-d-une-video), ou utilisez directement [MP4 en MP3](/fr/mp4-en-mp3).
