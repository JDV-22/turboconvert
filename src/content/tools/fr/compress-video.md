---
name: 'Compresser une vidéo'
title: 'Compresser une vidéo : réduire la taille d’un MP4 en ligne'
description: 'Réduisez le poids de vos vidéos MP4, MOV ou MKV pour l’e-mail ou WhatsApp : 3 niveaux, 1080p à 480p. Gratuit, sans filigrane et sans envoi de fichier.'
h1: 'Compresser une vidéo'
lead: 'Allégez une vidéo trop lourde pour l’envoyer, la publier ou libérer de la place, en gardant une image nette. La compression se fait dans votre navigateur : la vidéo n’est jamais envoyée.'
what: 'votre vidéo'
howTo: 'compresser une vidéo'
steps:
  - 'Cliquez sur <strong>Choisir un fichier</strong> ou glissez votre vidéo dans le cadre (MP4, MOV, MKV, WebM, AVI…).'
  - 'Choisissez le niveau de <strong>Compression</strong> : <strong>Recommandée — bonne qualité</strong> par défaut, <strong>Forte</strong> pour le fichier le plus léger, <strong>Légère</strong> pour préserver un maximum de détails.'
  - 'Réglez la <strong>Résolution max</strong> : 720p par défaut, 1080p, 480p, ou <strong>Originale</strong> pour garder la définition d’origine.'
  - 'Cliquez sur <strong>Convertir</strong>. La première fois, le moteur vidéo (environ 31 Mo) se télécharge, puis il est mis en cache. Téléchargez la vidéo compressée en MP4.'
limits:
  - 'La compression vidéo demande beaucoup de calcul : elle est nettement plus lente que la durée de la vidéo, surtout sur téléphone. Pour une vidéo de plusieurs minutes, utilisez un ordinateur et gardez l’onglet ouvert.'
  - 'Une vidéo à la fois, 1 Go maximum. Le résultat est toujours un fichier MP4.'
  - 'Une vidéo déjà très compressée (téléchargée depuis un réseau social, par exemple) ne gagnera parfois presque rien : dans ce cas, l’original est conservé.'
faq:
  - q: 'Comment réduire la taille d’une vidéo sans perdre trop de qualité ?'
    a: 'Gardez la compression Recommandée et réduisez la résolution à 720p : sur un téléphone ou un ordinateur portable, la différence avec du 1080p ou de la 4K est peu visible, alors que le fichier devient beaucoup plus léger.'
  - q: 'Comment envoyer une vidéo trop lourde par e-mail ?'
    a: 'Gmail limite les pièces jointes à 25 Mo. Pour une vidéo courte, choisissez la compression Forte et une résolution de 480p ou 720p. Si elle reste trop lourde, raccourcissez-la avec <a href="/fr/couper-video">Couper une vidéo</a> avant de la compresser.'
  - q: 'Combien de temps prend la compression ?'
    a: 'Tout dépend de votre appareil, de la durée et de la résolution d’origine. La conversion se fait sur votre processeur : comptez souvent plus que la durée de la vidéo pour une vidéo en 1080p ou 4K. Réduire la résolution accélère aussi le traitement.'
  - q: 'Puis-je compresser une vidéo d’iPhone (MOV) ?'
    a: 'Oui. Les vidéos MOV de l’iPhone sont acceptées et ressortent en MP4, un format lisible partout, y compris sur Windows et Android.'
  - q: 'Y a-t-il un filigrane ou une limite de durée ?'
    a: 'Non, ni filigrane ni limite de durée. Seule la taille du fichier est limitée à 1 Go, pour rester dans les capacités de mémoire d’un navigateur.'
  - q: 'Ma vidéo est-elle envoyée sur un serveur ?'
    a: 'Non. La compression utilise FFmpeg, compilé en WebAssembly, directement dans votre navigateur. Vos vidéos ne quittent jamais votre appareil.'
---

## Pourquoi une vidéo est-elle si lourde ?

Une minute de vidéo filmée avec un smartphone récent en 4K peut peser plusieurs centaines de Mo. Les téléphones privilégient la qualité maximale au moment de filmer, sans se soucier du partage. Or la plupart des usages n’ont pas besoin d’autant :

- **E-mail** : les pièces jointes sont limitées (25 Mo chez Gmail) ;
- **Messageries** : les gros fichiers sont recompressés automatiquement ou refusés ;
- **Plateformes et formulaires** : dépôt de devoirs, dossiers, sites d’annonces imposent souvent une taille maximale ;
- **Stockage** : téléphone plein, cloud saturé, clé USB trop petite.

## Les deux réglages qui comptent

### Compression

| Niveau | Rendu | Quand le choisir |
|---|---|---|
| Légère — meilleure qualité | Quasi identique à l’original | Archivage, montage, grand écran |
| Recommandée — bonne qualité | Très bon, gain important | La plupart des usages (par défaut) |
| Forte — fichier le plus léger | Correct, quelques défauts dans les scènes rapides | Envoi par e-mail, limite de taille stricte |

### Résolution max

C’est souvent le levier le plus puissant. Passer de 1080p à 720p divise le nombre de pixels par plus de deux, et la 4K contient quatre fois plus de pixels que le 1080p.

- **1080p** (Full HD) : pour regarder sur un téléviseur ou un grand écran ;
- **720p** (HD, par défaut) : idéal pour le partage, très net sur téléphone et ordinateur portable ;
- **480p** : poids minimal, suffisant pour une vidéo regardée en petit ou une démonstration simple ;
- **Originale** : garde la définition d’origine, seule la compression agit.

La vidéo n’est jamais agrandie : une vidéo en 720p reste en 720p si vous choisissez 1080p.

## Astuces pour gagner encore plus

1. **Coupez d’abord** les passages inutiles avec [Couper une vidéo](/fr/couper-video) : chaque seconde en moins, c’est autant de poids et de temps de traitement économisés.
2. **Supprimez le son** s’il ne sert à rien (vidéo de démonstration, plan d’illustration) avec [Supprimer le son d’une vidéo](/fr/supprimer-son-video).
3. **Vous n’avez besoin que de l’audio ?** Une conférence ou un cours se transforme en MP3 bien plus léger avec [MP4 en MP3](/fr/mp4-en-mp3).
4. **Vidéo d’iPhone illisible sur PC ?** La compression produit un MP4 compatible ; si vous voulez seulement changer de format, [MOV en MP4](/fr/mov-en-mp4) est plus rapide.

## Quels réglages pour quel usage ?

| Objectif | Compression | Résolution max |
|---|---|---|
| Envoyer par e-mail une vidéo courte | Forte | 480p ou 720p |
| Partager sur une messagerie | Recommandée | 720p |
| Publier sur un site ou un réseau social | Recommandée | 1080p |
| Archiver en gagnant de la place | Légère | Originale ou 1080p |
| Déposer sur une plateforme avec limite de taille | Forte | 720p |

Si le fichier obtenu est encore trop lourd, réduisez d’abord la résolution, puis passez en compression Forte, et enfin raccourcissez la vidéo.

## Problèmes fréquents

- **La progression semble bloquée** : sur une longue vidéo, l’encodage peut prendre plusieurs minutes. Laissez l’onglet ouvert au premier plan ; sur téléphone, empêchez la mise en veille de l’écran.
- **Le fichier compressé est à peine plus léger** : la vidéo était déjà fortement compressée. Réduisez la résolution max ou raccourcissez-la.
- **L’image est floue** : passez en compression Légère ou choisissez une résolution plus élevée.
- **Erreur sur un téléphone ancien** : la mémoire disponible est insuffisante ; utilisez un ordinateur.

## Compression locale : plus lente, mais privée

Les compresseurs en ligne classiques vous font téléverser la vidéo entière (parfois plusieurs centaines de Mo), puis la retélécharger. Ici, rien ne transite par Internet : FFmpeg tourne dans votre navigateur et utilise la puissance de votre appareil. C’est idéal pour des vidéos personnelles ou professionnelles confidentielles. La contrepartie : la vitesse dépend de votre machine. Un ordinateur récent est conseillé pour les vidéos longues ou en 4K.
