---
name: 'GIF en MP4'
title: 'Convertir un GIF en MP4 : plus léger et fluide, gratuit'
description: 'Convertissez vos GIF animés en vidéo MP4, généralement bien plus légère et acceptée par Instagram, WhatsApp et tous les sites. Gratuit, par lot, sans envoi.'
h1: 'Convertir un GIF en MP4'
lead: 'Transformez vos GIF animés en vidéos MP4 plus légères, plus fluides et acceptées par tous les réseaux sociaux et messageries. La conversion se fait sur votre appareil, rien n’est envoyé.'
what: 'votre GIF'
howTo: 'convertir un GIF en MP4'
steps:
  - 'Cliquez sur <strong>Choisir des fichiers</strong> ou glissez un ou plusieurs GIF animés dans le cadre.'
  - 'Cliquez sur <strong>Convertir</strong>. Aucun réglage : la vidéo garde la taille et la vitesse du GIF.'
  - 'Chaque MP4 se télécharge dès qu’il est prêt ; pour plusieurs GIF, utilisez <strong>Tout télécharger (ZIP)</strong>.'
limits:
  - 'GIF jusqu’à 200 Mo chacun. La première utilisation télécharge le moteur de conversion (environ 31 Mo), qui reste ensuite en cache.'
  - 'Le MP4 ne gère pas la transparence : les zones transparentes du GIF deviennent un fond uni.'
  - 'Un MP4 se lit une fois par défaut. Pour le faire boucler sur un site, utilisez l’attribut <code>loop</code> de la vidéo (voir plus bas) ; la plupart des applis sociales bouclent automatiquement les vidéos courtes.'
  - 'La largeur et la hauteur sont arrondies à un nombre pair de pixels, comme l’exige le format H.264 : au plus un pixel est rogné.'
faq:
  - q: 'Pourquoi convertir un GIF en MP4 ?'
    a: 'Le GIF est un format des années 1980, limité à 256 couleurs par image et très peu efficace pour l’animation. La même animation en MP4 H.264 est généralement plusieurs fois plus légère, plus belle, et acceptée par les applis qui refusent les GIF, comme Instagram.'
  - q: 'Le MP4 sera-t-il identique au GIF ?'
    a: 'Oui. La taille et le rythme sont conservés et chaque image est convertie. Les couleurs sont identiques ou meilleures, puisque la limite de 256 couleurs du GIF ne s’applique plus.'
  - q: 'Le MP4 a-t-il du son ?'
    a: 'Non : un GIF n’a pas de son, le MP4 est donc muet. C’est aussi ce qui permet aux navigateurs de le lancer automatiquement sur une page web.'
  - q: 'Peut-on convertir plusieurs GIF à la fois ?'
    a: 'Oui. Déposez plusieurs fichiers : ils sont traités l’un après l’autre et vous pouvez tous les enregistrer dans un seul ZIP.'
  - q: 'Mes GIF sont-ils envoyés ?'
    a: 'Non. FFmpeg tourne dans l’onglet de votre navigateur, vos fichiers ne quittent jamais votre appareil.'
---

## Pourquoi le GIF est un mauvais format pour l’animation

Le format GIF date de 1987. Il stocke chaque image avec une palette de 256 couleurs au maximum, compresse les images indépendamment les unes des autres et ignore tout du mouvement entre elles. Résultat : des fichiers lourds aux dégradés en escalier ; quelques secondes d’animation pèsent facilement plusieurs mégaoctets.

Le MP4 en H.264 a été conçu pour l’image animée : il ne stocke que ce qui change d’une image à l’autre et gère des millions de couleurs. C’est pourquoi GIPHY, X (Twitter) et la plupart des messageries convertissent discrètement en MP4 les GIF que vous envoyez.

## Là où un MP4 fait mieux qu’un GIF

- **Instagram** n’accepte pas les GIF pour les publications, Stories ou Reels : un MP4 passe sans problème.
- **Sites et blogs :** remplacer les GIF par des MP4 est une recommandation classique de Google PageSpeed Insights, car des pages plus légères se chargent plus vite.
- **Présentations :** PowerPoint, Keynote et Google Slides lisent le MP4 de façon fluide, alors que les gros GIF peuvent saccader.
- **Pièces jointes et messageries :** un fichier plus léger s’envoie plus vite et reste sous les limites de taille.

## Faire boucler la vidéo sur une page web

Pour qu’un MP4 se comporte exactement comme un GIF sur votre site (lecture automatique, en boucle, sans commandes), utilisez :

```html
<video src="animation.mp4" autoplay loop muted playsinline></video>
```

Les attributs `muted` et `playsinline` sont nécessaires pour que les navigateurs (surtout sur iPhone) lancent la vidéo automatiquement.

## GIF transparents

La vidéo MP4 n’a pas de couche de transparence. Si votre GIF a un fond transparent, cette zone devient une couleur unie dans le MP4. Pour une animation qui doit rester transparente sur une page web, gardez le GIF, ou demandez au graphiste un WebP animé ou un WebM avec transparence.

## Confidentiel par conception

La conversion utilise FFmpeg compilé en WebAssembly et se déroule entièrement dans votre navigateur. Vos GIF sont lus depuis votre disque et les MP4 sont écrits dans vos téléchargements : rien n’est envoyé à un serveur.

## Outils associés

- Dans l’autre sens ? [Vidéo en GIF](/fr/video-en-gif) transforme un clip en GIF animé.
- Besoin d’une vidéo plus légère ? [Compresser une vidéo](/fr/compresser-video) réduit la taille de n’importe quel MP4.
