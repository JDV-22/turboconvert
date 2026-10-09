---
name: 'Couper une vidéo'
title: 'Couper une vidéo en ligne : garder seulement un extrait'
description: 'Coupez le début ou la fin d’une vidéo MP4, MOV ou MKV en indiquant les temps de début et de fin. Gratuit, sans filigrane, sans inscription et sans envoi.'
h1: 'Couper une vidéo'
lead: 'Gardez uniquement le passage qui vous intéresse : supprimez un début raté, une fin trop longue ou extrayez une séquence. La vidéo reste sur votre appareil.'
what: 'votre vidéo'
howTo: 'couper une vidéo'
steps:
  - 'Cliquez sur <strong>Choisir un fichier</strong> ou glissez votre vidéo dans le cadre (MP4, MOV, MKV, WebM, AVI…).'
  - 'Dans <strong>Début</strong>, saisissez le moment où l’extrait commence, au format heures:minutes:secondes (par exemple <code>00:01:15</code>).'
  - 'Dans <strong>Fin</strong>, saisissez le moment où il se termine (par exemple <code>00:02:30</code>). Laissez vide pour aller jusqu’à la fin de la vidéo.'
  - 'Cliquez sur <strong>Convertir</strong>, puis sur <strong>Télécharger</strong>. La première utilisation charge le moteur vidéo (environ 31 Mo), mis ensuite en cache.'
limits:
  - 'L’outil garde un seul passage continu. Pour supprimer un morceau au milieu, coupez deux extraits séparément.'
  - 'Selon l’encodage de la vidéo, le point de coupe peut être décalé d’une fraction de seconde : prévoyez une petite marge.'
  - 'Une vidéo à la fois, 1 Go maximum. Le traitement est plus rapide sur ordinateur que sur téléphone.'
faq:
  - q: 'Comment couper le début d’une vidéo ?'
    a: 'Indiquez dans Début le moment où la vidéo doit commencer (par exemple 00:00:08 pour supprimer les 8 premières secondes) et laissez Fin vide : tout le reste est conservé.'
  - q: 'Comment couper la fin d’une vidéo ?'
    a: 'Laissez Début à 00:00:00 et saisissez dans Fin le moment où la vidéo doit s’arrêter, par exemple 00:03:20.'
  - q: 'Comment connaître les temps exacts ?'
    a: 'Lisez la vidéo dans votre lecteur habituel (VLC, Photos, QuickTime…) et mettez sur pause au moment voulu : le temps affiché est celui à saisir. 1 min 30 s s’écrit 00:01:30.'
  - q: 'Y a-t-il un filigrane ?'
    a: 'Non, aucun filigrane ni logo n’est ajouté à votre vidéo.'
  - q: 'Ma vidéo est-elle téléversée ?'
    a: 'Non. La découpe est réalisée par FFmpeg dans votre navigateur ; la vidéo ne quitte jamais votre appareil.'
---

## Couper une vidéo sans logiciel de montage

Pas besoin d’installer un logiciel de montage pour une opération aussi simple que **raccourcir une vidéo**. Avec cet outil, il suffit d’indiquer où commence et où finit le passage à garder. C’est utile pour :

- supprimer le **début raté** d’une vidéo filmée au téléphone (le temps de cadrer) ;
- enlever une **fin trop longue** ou un moment gênant ;
- **extraire une séquence** d’un enregistrement de réunion, de cours ou de match ;
- **réduire la durée** pour respecter une limite (réseau social, formulaire, messagerie).

## Saisir les temps de début et de fin

Les deux champs utilisent le format **heures:minutes:secondes** :

| Vous voulez | Début | Fin |
|---|---|---|
| Supprimer les 10 premières secondes | 00:00:10 | (vide) |
| Garder la première minute | 00:00:00 | 00:01:00 |
| Extraire de 2 min 05 s à 2 min 45 s | 00:02:05 | 00:02:45 |
| Couper à partir de 1 h 10 min | 00:00:00 | 01:10:00 |

Laissez **Fin** vide pour conserver la vidéo jusqu’au bout.

## Supprimer un passage au milieu

L’outil conserve un passage continu. Pour retirer un moment situé au milieu de la vidéo (une coupure publicitaire dans un enregistrement, une hésitation), procédez en deux temps : coupez une première fois de 00:00:00 jusqu’au début du passage à supprimer, puis une seconde fois de la fin du passage jusqu’à la fin de la vidéo. Vous obtenez deux extraits propres, que vous pouvez assembler dans n’importe quel éditeur vidéo (Photos de Windows, iMovie, CapCut…).

## Et ensuite ?

Une fois l’extrait obtenu, vous pouvez enchaîner avec d’autres outils :

- [Compresser une vidéo](/fr/compresser-video) pour l’alléger avant de l’envoyer ;
- [Vidéo en GIF](/fr/video-en-gif) pour en faire une animation courte et sans son ;
- [Supprimer le son d’une vidéo](/fr/supprimer-son-video) si l’audio n’a pas d’intérêt.

Couper avant de compresser est d’ailleurs la meilleure stratégie : la compression ne porte alors que sur le passage utile, ce qui est plus rapide et donne un fichier plus léger.

## Une découpe privée

La vidéo est traitée dans votre navigateur par FFmpeg, compilé en WebAssembly. Aucun fichier n’est envoyé : vous pouvez couper un enregistrement de visioconférence ou une vidéo de famille en toute confidentialité.
