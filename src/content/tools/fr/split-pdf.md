---
name: 'Diviser PDF'
title: 'Diviser un PDF et extraire des pages, gratuit | TurboConvert'
description: 'Divisez un PDF en plusieurs fichiers ou extrayez les pages de votre choix (ex. 1-3, 5). Gratuit, dans votre navigateur, sans envoi ni inscription.'
h1: 'Diviser un PDF'
lead: 'Extrayez une page, une plage de pages ou séparez chaque page dans son propre fichier. Le découpage se fait sur votre appareil : votre PDF n’est jamais envoyé.'
what: 'votre PDF'
howTo: 'diviser un PDF'
steps:
  - 'Cliquez sur <strong>Choisir un fichier</strong> ou glissez votre PDF dans le cadre (jusqu’à 200 Mo).'
  - 'Dans <strong>Mode de découpe</strong>, choisissez « Extraire des plages de pages » ou « Un PDF par page ».'
  - 'Pour extraire des plages, indiquez les numéros dans le champ <strong>Pages</strong>, par exemple <code>1-3, 5, 8-10</code> : chaque plage séparée par une virgule donne un PDF distinct.'
  - 'Cliquez sur <strong>Convertir</strong>, puis téléchargez les fichiers un par un ou avec <strong>Tout télécharger (ZIP)</strong>.'
limits:
  - 'Un seul PDF à la fois. Pour regrouper ensuite plusieurs extraits en un document, utilisez <a href="/fr/fusionner-pdf">Fusionner PDF</a>.'
  - 'Les PDF protégés par un mot de passe doivent d’abord être déverrouillés avec <a href="/fr/deverrouiller-pdf">Déverrouiller PDF</a>.'
  - 'Les pages sont copiées telles quelles : le découpage ne réduit pas la qualité, mais ne compresse pas non plus les fichiers.'
faq:
  - q: 'Comment extraire une seule page d’un PDF ?'
    a: 'Choisissez « Extraire des plages de pages » et tapez simplement le numéro de la page, par exemple <code>4</code>, dans le champ Pages. Vous obtenez un PDF qui ne contient que cette page.'
  - q: 'Comment séparer toutes les pages d’un PDF ?'
    a: 'Sélectionnez le mode « Un PDF par page » : chaque page devient un fichier distinct, que vous récupérez en une seule archive ZIP.'
  - q: 'Comment obtenir plusieurs pages dans un même fichier ?'
    a: 'Écrivez-les sous forme de plage : <code>2-6</code> crée un seul PDF avec les pages 2 à 6. En revanche, <code>2, 6</code> crée deux fichiers séparés. Pour réunir des pages non consécutives, extrayez-les puis assemblez-les avec <a href="/fr/fusionner-pdf">Fusionner PDF</a>.'
  - q: 'Mes documents sont-ils envoyés en ligne ?'
    a: 'Non. Le PDF est lu et découpé dans votre navigateur. Aucun fichier ne quitte votre appareil.'
---

## Écrire les plages de pages

Le champ **Pages** accepte des numéros et des plages séparés par des virgules. **Chaque élément séparé par une virgule devient un fichier PDF.**

| Vous saisissez | Vous obtenez |
|---|---|
| `3` | Un PDF contenant uniquement la page 3 |
| `1-3` | Un PDF avec les pages 1, 2 et 3 |
| `1-3, 5` | Deux PDF : pages 1 à 3, puis page 5 seule |
| `1-10, 11-20, 21-30` | Trois PDF de dix pages chacun |

Le mode **« Un PDF par page »** ignore ce champ et sépare toutes les pages, quelle que soit la longueur du document.

## Quand diviser un PDF ?

- **Envoyer seulement la partie utile** : la page signée d’un contrat, l’attestation dans un dossier de vingt pages, le chapitre d’un manuel.
- **Respecter une limite de taille** : un portail qui refuse un fichier trop lourd acceptera souvent deux ou trois fichiers plus petits. Combinez avec [Compresser PDF](/fr/compresser-pdf) si nécessaire.
- **Séparer un scan groupé** : quand plusieurs documents ont été scannés à la suite dans un seul fichier, retrouvez une pièce par fichier.
- **Préparer un envoi par destinataire** : un relevé ou un bulletin par personne à partir d’un export global.

## Problèmes fréquents

- **Rien ne se passe ou une erreur s’affiche** : vérifiez la syntaxe du champ Pages. Utilisez des tirets pour les plages (`4-7`) et des virgules pour séparer les fichiers (`1, 4-7`), sans lettres ni points.
- **Une page n’existe pas** : si le document fait 12 pages, une plage comme `10-15` dépasse la fin du document. Vérifiez le nombre de pages dans votre lecteur PDF.
- **Vous obtenez trop de fichiers** : en mode « Un PDF par page », un document de 50 pages donne 50 fichiers. Pour regrouper des pages, revenez au mode « Extraire des plages de pages ».
- **Le PDF est protégé** : retirez d’abord le mot de passe avec [Déverrouiller PDF](/fr/deverrouiller-pdf).

## Diviser ou organiser ?

Diviser crée **plusieurs fichiers**. Si vous voulez garder **un seul PDF** mais en supprimer, déplacer ou faire pivoter certaines pages, [Organiser PDF](/fr/organiser-pdf) est plus adapté : vous voyez les miniatures de chaque page et agissez directement dessus.

Le découpage s’effectue entièrement dans votre navigateur : pratique pour isoler une page d’un document confidentiel sans l’envoyer sur un site tiers.
