---
name: 'Vidéo en GIF'
title: 'Vidéo en GIF : créer un GIF animé à partir d’un MP4'
description: 'Transformez un extrait de vidéo MP4, MOV ou WebM en GIF animé. Choisissez début, durée, largeur et fluidité. Gratuit, sans filigrane et sans envoi.'
h1: 'Convertir une vidéo en GIF'
lead: 'Créez un GIF animé à partir d’un passage de votre vidéo, pour un message, un tutoriel ou un mème. La vidéo est traitée dans votre navigateur, sans être envoyée.'
what: 'votre vidéo'
howTo: 'convertir une vidéo en GIF'
steps:
  - 'Cliquez sur <strong>Choisir un fichier</strong> ou glissez votre vidéo dans le cadre (MP4, MOV, WebM, MKV, AVI…).'
  - 'Indiquez le <strong>Début (secondes)</strong> du passage et sa <strong>Durée (secondes)</strong>, jusqu’à 60 secondes (5 par défaut).'
  - 'Choisissez la <strong>Largeur</strong> (320 à 800 px) et le nombre d’<strong>Images par seconde</strong> (8 à 24 ; 12 par défaut).'
  - 'Cliquez sur <strong>Convertir</strong>, puis sur <strong>Télécharger</strong>. La première fois, le moteur vidéo (environ 31 Mo) est chargé puis mis en cache.'
limits:
  - 'Durée maximale du GIF : 60 secondes. Un GIF long et large devient vite très lourd.'
  - 'Le GIF ne contient pas de son et se limite à 256 couleurs par image : les dégradés subtils peuvent montrer un léger tramage.'
  - 'Une vidéo à la fois, 500 Mo maximum. Sur téléphone, préférez des extraits courts.'
faq:
  - q: 'Comment faire un GIF à partir d’une vidéo ?'
    a: 'Déposez la vidéo, indiquez à quelle seconde commence le passage et combien de temps il dure, choisissez la largeur et la fluidité, puis cliquez sur Convertir. Le GIF se télécharge en quelques secondes pour un extrait court.'
  - q: 'Comment obtenir un GIF léger ?'
    a: 'Jouez sur trois leviers : une durée courte (3 à 6 secondes), une largeur réduite (320 ou 480 px) et moins d’images par seconde (8 à 12). Ensemble, ils peuvent diviser le poids par dix par rapport aux réglages les plus élevés.'
  - q: 'Pourquoi mon GIF est-il beaucoup plus lourd que la vidéo ?'
    a: 'Le GIF est un format ancien qui compresse très mal l’animation, contrairement au MP4. C’est normal : quelques secondes de GIF peuvent peser plus qu’une minute de vidéo. Pour une longue séquence, partagez plutôt une vidéo courte et légère.'
  - q: 'Le GIF aura-t-il du son ?'
    a: 'Non, le format GIF ne gère pas l’audio. Pour garder le son, coupez plutôt l’extrait en vidéo avec <a href="/fr/couper-video">Couper une vidéo</a>.'
  - q: 'Y a-t-il un filigrane ?'
    a: 'Non, aucun filigrane n’est ajouté. Le GIF est généré dans votre navigateur et vous appartient entièrement.'
---

## Le GIF animé, toujours incontournable

Même face à la vidéo, le **GIF** reste le format le plus simple pour partager une courte animation : il se lit automatiquement, en boucle, sans bouton lecture, et s’affiche presque partout — e-mails, messageries, forums, documentations, outils de gestion de projet, pages GitHub.

Quelques usages typiques :

- **Tutoriels et documentation** : montrer un clic, un geste ou une manipulation dans un logiciel ;
- **Rapports de bug** : illustrer un comportement en quelques secondes ;
- **Réactions et mèmes** à partir d’une scène de vos propres vidéos ;
- **Démonstrations produit** dans un e-mail, où les vidéos ne sont généralement pas lues.

## Bien régler votre GIF

| Réglage | Valeurs | Effet |
|---|---|---|
| Largeur | 320 / 480 / 640 / 800 px | Plus large = plus net, mais beaucoup plus lourd |
| Images par seconde | 8 / 12 / 15 / 24 | 8–12 suffisent pour un tutoriel ; 15–24 pour un mouvement fluide |
| Début (secondes) | 0, 30, 75… | Point de départ du passage dans la vidéo |
| Durée (secondes) | 1 à 60 | Le poids augmente proportionnellement |

La hauteur est calculée automatiquement pour respecter les proportions de la vidéo.

### Trouver le bon début

Repérez le moment voulu dans votre lecteur vidéo habituel et notez le temps en secondes : 1 min 15 s correspond à **75**. Si vous préférez couper précisément d’abord, utilisez [Couper une vidéo](/fr/couper-video), puis convertissez l’extrait obtenu en GIF avec un début à 0.

## Le poids d’un GIF : ordres de grandeur

Le poids dépend énormément du contenu (une capture d’écran statique se compresse bien mieux qu’une scène filmée qui bouge). En pratique :

- un GIF de **3 à 5 secondes en 480 px à 12 images/s** reste en général raisonnable pour un message ou une documentation ;
- au-delà de **10 secondes en 800 px à 24 images/s**, le fichier devient vite très lourd.

Si vous devez partager une séquence plus longue, une petite vidéo MP4 est bien plus efficace : réduisez-la avec [Compresser une vidéo](/fr/compresser-video).

## Recettes rapides

- **GIF pour un tutoriel ou un rapport de bug** : largeur 640 px, 10 à 12 images/s, durée de 3 à 8 secondes. Le texte d’interface reste lisible.
- **GIF de réaction pour une messagerie** : largeur 320 ou 480 px, 12 images/s, 2 à 4 secondes.
- **Animation fluide (sport, danse, mouvement rapide)** : 15 à 24 images/s, mais réduisez la largeur et la durée pour garder un poids raisonnable.
- **GIF pour un e-mail** : 480 px de large au maximum, quelques secondes, car de nombreuses messageries limitent la taille des messages.

## Une création 100 % locale

La vidéo n’est jamais téléversée : le GIF est fabriqué dans votre navigateur par FFmpeg, compilé en WebAssembly. Pratique pour un extrait de réunion, une démo d’un produit pas encore lancé ou une vidéo de famille. Le temps de traitement dépend de votre appareil et de la longueur de l’extrait ; un ordinateur est plus rapide qu’un téléphone.

Vous voulez plutôt le son de la vidéo ? Utilisez [MP4 en MP3](/fr/mp4-en-mp3).
