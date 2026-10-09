---
name: 'MKV en MP4'
title: 'MKV en MP4 : convertir vos vidéos MKV gratuitement'
description: 'Convertissez vos vidéos MKV en MP4 lisibles sur TV, smartphone et logiciel de montage. Conversion rapide quand c’est possible, gratuite et sans envoi.'
h1: 'Convertir MKV en MP4'
lead: 'Rendez vos fichiers MKV lisibles sur votre téléviseur, votre téléphone ou votre logiciel de montage en les passant en MP4. Tout se fait dans votre navigateur.'
what: 'vos vidéos MKV'
howTo: 'convertir MKV en MP4'
steps:
  - 'Cliquez sur <strong>Choisir des fichiers</strong> ou glissez vos fichiers .mkv dans le cadre.'
  - 'Cliquez sur <strong>Convertir</strong>. La première fois, le moteur vidéo (environ 31 Mo) se télécharge, puis il reste en cache.'
  - 'Téléchargez chaque MP4, ou tous les fichiers avec <strong>Tout télécharger (ZIP)</strong>.'
limits:
  - 'Si la vidéo est en H.264 (cas fréquent), la conversion est très rapide et sans perte. Avec d’autres codecs, un réencodage en H.264/AAC est nécessaire et prend nettement plus de temps.'
  - 'Les MKV contiennent souvent plusieurs pistes audio et des sous-titres : ces pistes supplémentaires et les sous-titres peuvent ne pas être conservés dans le MP4.'
  - 'Taille maximale : 1 Go par fichier. Les films plus lourds ne peuvent pas être traités dans le navigateur.'
faq:
  - q: 'Quelle est la différence entre MKV et MP4 ?'
    a: 'Ce sont deux conteneurs vidéo. Le MKV (Matroska) est très souple : plusieurs pistes audio, sous-titres, chapitres, presque tous les codecs. Le MP4 est plus limité, mais lu par quasiment tous les appareils et logiciels.'
  - q: 'La conversion MKV en MP4 fait-elle perdre de la qualité ?'
    a: 'Pas si la vidéo est déjà en H.264 : les flux sont recopiés tels quels dans le MP4. Si un réencodage est nécessaire, il est réglé pour conserver une très bonne qualité.'
  - q: 'Mes sous-titres seront-ils conservés ?'
    a: 'Pas forcément : les sous-titres et les pistes audio additionnelles d’un MKV peuvent ne pas être repris. Si vous en avez besoin, gardez une copie du MKV d’origine.'
  - q: 'Mes fichiers sont-ils envoyés en ligne ?'
    a: 'Non. La conversion se fait localement dans votre navigateur grâce à FFmpeg.'
---

## MKV : le conteneur à tout faire

Le **MKV** (Matroska) est un format conteneur libre très apprécié pour sa souplesse : un seul fichier peut contenir une vidéo, **plusieurs pistes audio** (langues, commentaires), des **sous-titres** et des **chapitres**. On le rencontre souvent avec les enregistrements de logiciels de capture (OBS, par exemple), les vidéos d’archives personnelles ou les exports de certains logiciels.

Revers de la médaille : de nombreux appareils et logiciels ne le lisent pas, ou mal :

- certains **téléviseurs** et **box** via clé USB ;
- les **iPhone et iPad** dans l’application Photos ;
- de nombreux **logiciels de montage** et de **présentation** ;
- la plupart des **réseaux sociaux** et plateformes de partage.

## MKV ou MP4 ?

| | MKV | MP4 |
|---|---|---|
| Pistes audio multiples | Oui | Possible, mais rarement exploité |
| Sous-titres intégrés | Tous formats | Limités |
| Compatibilité appareils | Variable | Universelle |
| Montage, partage en ligne | Souvent refusé | Accepté partout |

## Une conversion souvent instantanée

La plupart des MKV contiennent déjà une vidéo en **H.264** et un son compatible. Dans ce cas, l’outil se contente de **recopier les flux** dans un conteneur MP4 : l’opération est très rapide et **sans aucune perte**. Si la vidéo utilise un codec que le MP4 ne gère pas bien, elle est réencodée en **H.264/AAC**, ce qui prend plus de temps et dépend de la puissance de votre appareil.

### Astuce OBS

Si vous enregistrez avec OBS Studio en MKV (le format le plus sûr en cas de plantage), cet outil est idéal pour obtenir un MP4 à monter ou à publier. Ensuite, allégez-le si besoin avec [Compresser une vidéo](/fr/compresser-video).

## Fichiers volumineux

La conversion se fait dans la mémoire de votre navigateur, d’où la limite de 1 Go par fichier. Au-delà, un logiciel installé sur votre ordinateur reste la meilleure option. En dessous, si vous n’avez besoin que d’un passage, coupez-le d’abord avec [Couper une vidéo](/fr/couper-video) : le fichier à convertir sera plus petit. Sur un ordinateur récent, la copie des flux (sans réencodage) reste rapide même pour une vidéo de près d’1 Go.

## Autres conversions utiles

- [MOV en MP4](/fr/mov-en-mp4) pour les vidéos d’iPhone et de Mac ;
- [WebM en MP4](/fr/webm-en-mp4) pour les enregistrements d’écran faits dans le navigateur ;
- [MP4 en MP3](/fr/mp4-en-mp3) pour extraire uniquement la bande son.

Vos vidéos ne quittent jamais votre appareil : la conversion est réalisée dans votre navigateur par FFmpeg compilé en WebAssembly.
