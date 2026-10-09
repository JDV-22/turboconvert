---
name: 'Couper un audio'
title: 'Couper un MP3 en ligne : extraire un passage audio'
description: 'Coupez un fichier MP3, WAV, M4A ou OGG en indiquant le début et la fin : sonnerie, extrait, suppression des blancs. Gratuit et sans envoi de fichier.'
h1: 'Couper un fichier audio'
lead: 'Gardez seulement le passage qui vous intéresse d’un morceau, d’un podcast ou d’un enregistrement : créez une sonnerie, retirez un blanc ou isolez une citation. Tout reste sur votre appareil.'
what: 'votre fichier audio'
howTo: 'couper un fichier audio'
steps:
  - 'Cliquez sur <strong>Choisir un fichier</strong> ou glissez votre fichier audio dans le cadre (MP3, WAV, M4A, AAC, OGG, FLAC, OPUS, WMA, AIFF, AMR).'
  - 'Dans <strong>Début</strong>, saisissez le moment où l’extrait commence, au format heures:minutes:secondes (par exemple <code>00:00:45</code>).'
  - 'Dans <strong>Fin</strong>, saisissez le moment où il s’arrête (par exemple <code>00:01:15</code>). Laissez vide pour aller jusqu’à la fin.'
  - 'Cliquez sur <strong>Convertir</strong>, puis sur <strong>Télécharger</strong>. La première utilisation charge le moteur audio (environ 31 Mo), mis ensuite en cache.'
limits:
  - 'Un seul passage continu est conservé. Pour retirer un morceau au milieu, coupez deux extraits.'
  - 'Pas de fondu en entrée ou en sortie : la coupe est franche.'
  - 'Un fichier à la fois, 1 Go maximum.'
faq:
  - q: 'Comment couper le début d’un MP3 ?'
    a: 'Indiquez dans Début le moment où l’audio doit commencer (par exemple 00:00:05 pour retirer les 5 premières secondes) et laissez Fin vide.'
  - q: 'Comment créer une sonnerie à partir d’une chanson ?'
    a: 'Repérez le passage voulu (30 secondes environ, le refrain par exemple), saisissez ses temps de début et de fin, puis convertissez. Sur Android, le fichier obtenu peut être défini comme sonnerie ; sur iPhone, les sonneries doivent être importées au format M4R via un ordinateur ou une app dédiée.'
  - q: 'Comment connaître le temps exact à saisir ?'
    a: 'Écoutez le fichier dans votre lecteur habituel et mettez sur pause au bon moment : le compteur indique le temps à saisir. 2 min 07 s s’écrit 00:02:07.'
  - q: 'La qualité est-elle conservée ?'
    a: 'Oui, le passage conservé garde une très bonne qualité. Pour changer ensuite de format, utilisez le <a href="/fr/convertisseur-audio">Convertisseur audio</a>.'
  - q: 'Mon fichier est-il envoyé sur un serveur ?'
    a: 'Non. La découpe est faite par FFmpeg dans votre navigateur ; le fichier ne quitte pas votre appareil.'
---

## Couper un fichier audio sans logiciel

Pas besoin d’installer Audacity ou un éditeur audio pour **raccourcir un MP3**. Indiquez simplement où commence et où s’arrête le passage à garder. Quelques usages courants :

- **Créer une sonnerie** à partir du refrain d’une chanson ;
- **Supprimer les blancs** au début et à la fin d’un enregistrement ;
- **Isoler une citation** dans une interview ou un podcast ;
- **Extraire un passage** d’un cours ou d’une réunion pour le partager ;
- **Respecter une durée maximale** imposée par une plateforme ou un formulaire.

## Saisir les temps

Les champs **Début** et **Fin** utilisent le format **heures:minutes:secondes** :

| Vous voulez | Début | Fin |
|---|---|---|
| Retirer les 3 premières secondes | 00:00:03 | (vide) |
| Garder les 30 premières secondes | 00:00:00 | 00:00:30 |
| Extraire de 1 min 20 s à 1 min 50 s | 00:01:20 | 00:01:50 |
| Garder la première heure d’un enregistrement | 00:00:00 | 01:00:00 |

Laissez **Fin** vide pour conserver l’audio jusqu’au bout.

## Enchaîner avec d’autres outils

- **Changer de format** après la coupe (MP3, WAV, M4A, FLAC…) : [Convertisseur audio](/fr/convertisseur-audio) ;
- **Alléger un WAV** une fois coupé : [WAV en MP3](/fr/wav-en-mp3) ;
- **Extraire d’abord le son d’une vidéo** : [MP4 en MP3](/fr/mp4-en-mp3), puis coupez le MP3 ici.

## Couper un long enregistrement en plusieurs parties

Vous avez enregistré une réunion de deux heures ou un cours complet et voulez le découper en chapitres ? Répétez simplement l’opération : une première coupe de 00:00:00 à 00:45:00, puis une deuxième de 00:45:00 à 01:30:00, et ainsi de suite. Chaque partie est téléchargée séparément. Notez au fur et à mesure les temps de début et de fin de chaque passage pour ne rien oublier.

## Astuce sonnerie

Une sonnerie dure en général **20 à 30 secondes** : choisissez un passage qui démarre fort (refrain, riff), car la coupe est franche, sans fondu. Évitez de commencer au milieu d’un mot ou d’une note tenue : décalez le début d’une seconde si besoin.

La découpe se fait localement par FFmpeg dans votre navigateur : vos enregistrements personnels ou professionnels ne sont jamais envoyés.
