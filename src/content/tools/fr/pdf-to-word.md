---
name: 'PDF en Word'
title: 'Convertir PDF en Word gratuit, sans envoi | TurboConvert'
description: 'Convertissez un PDF en Word (DOCX) modifiable, gratuitement et dans votre navigateur : aucun envoi de fichier, sans inscription, sans filigrane.'
h1: 'Convertir un PDF en Word'
lead: 'Transformez un PDF en document Word (.docx) modifiable : paragraphes, titres, gras, italique et images sont reconstruits. Tout se passe sur votre appareil, votre fichier n’est jamais envoyé.'
what: 'votre PDF'
howTo: 'convertir un PDF en Word'
steps:
  - 'Cliquez sur <strong>Choisir des fichiers</strong> ou glissez un ou plusieurs PDF dans le cadre ci-dessus (jusqu’à 100 Mo par fichier).'
  - 'Cliquez sur <strong>Convertir</strong>. Le texte, les titres et les images de chaque page sont analysés directement dans votre navigateur.'
  - 'Le fichier <code>.docx</code> se télécharge automatiquement. Si vous avez converti plusieurs PDF, récupérez-les un par un ou d’un coup avec <strong>Tout télécharger (ZIP)</strong>.'
  - 'Ouvrez le document dans Word, LibreOffice, Pages ou Google Docs et relisez la mise en page avant de le modifier.'
limits:
  - 'Un PDF scanné (photo ou scan de page) ne contient pas de texte, seulement une image : passez-le d’abord dans <a href="/fr/ocr-pdf">OCR PDF</a> pour en extraire le texte.'
  - 'Les tableaux simples sont reconstruits au mieux ; les mises en page complexes (plusieurs colonnes, plaquettes, magazines) peuvent demander quelques retouches.'
  - 'Les PDF protégés par un mot de passe à l’ouverture doivent d’abord être déverrouillés avec <a href="/fr/deverrouiller-pdf">Déverrouiller PDF</a>.'
  - 'Si une police du PDF n’est pas installée sur l’ordinateur qui ouvre le .docx, Word la remplace par une police proche.'
faq:
  - q: 'Comment convertir un PDF en Word gratuitement ?'
    a: 'Déposez votre PDF ci-dessus et cliquez sur Convertir : le fichier .docx est prêt en quelques secondes. C’est gratuit, sans compte, sans limite quotidienne et sans filigrane ajouté au document.'
  - q: 'Mon PDF est un document scanné, est-ce que ça marche ?'
    a: 'Pas directement : un scan n’est qu’une image de la page, il n’y a pas de texte à récupérer. Utilisez d’abord <a href="/fr/ocr-pdf">OCR PDF</a> (reconnaissance de caractères, en français notamment), puis collez le texte obtenu dans Word.'
  - q: 'La mise en page sera-t-elle identique au PDF ?'
    a: 'Elle sera proche, mais pas toujours au pixel près. Un PDF fixe la position de chaque caractère, alors qu’un document Word organise le texte en paragraphes qui se réorganisent quand on écrit. Les documents simples (courriers, rapports, CV) ressortent très bien ; les mises en page en colonnes demandent parfois des ajustements.'
  - q: 'Mon fichier est-il envoyé sur un serveur ?'
    a: 'Non. La conversion s’exécute dans votre navigateur, sur votre ordinateur ou votre téléphone. Le PDF ne quitte jamais votre appareil : rien n’est stocké, rien n’est à supprimer ensuite.'
  - q: 'Je n’ai pas Microsoft Word, comment ouvrir le fichier DOCX ?'
    a: 'Le format .docx s’ouvre gratuitement avec LibreOffice Writer, Google Docs, Pages sur Mac ou l’application Word mobile. Une fois vos modifications faites, vous pouvez repasser en PDF avec <a href="/fr/word-en-pdf">Word en PDF</a>.'
  - q: 'Peut-on convertir un PDF en Word sur iPhone ou Android ?'
    a: 'Oui. L’outil fonctionne dans Safari, Chrome, Firefox et Edge. Choisissez le PDF depuis l’app Fichiers ou Google Drive : le .docx est enregistré dans vos téléchargements.'
---

## Pourquoi un PDF est difficile à modifier

Le PDF a été conçu pour **afficher** un document de la même façon partout, pas pour le modifier. À l’intérieur, il n’y a pas de « paragraphes » au sens de Word : seulement des morceaux de texte placés à des coordonnées précises sur la page. C’est pour cela que copier-coller depuis un PDF donne souvent des retours à la ligne au milieu des phrases.

Pour convertir un PDF en Word, TurboConvert lit ces fragments, les regroupe en lignes puis en paragraphes, repère les titres d’après la taille et la graisse du texte, et récupère les images. Le résultat est un vrai document `.docx` que vous pouvez corriger, compléter ou reformater, pas une simple image de page collée dans Word.

## Ce que vous retrouvez dans le fichier Word

| Élément du PDF | Dans le document Word |
|---|---|
| Texte courant | Paragraphes modifiables, avec retour à la ligne automatique |
| Titres | Texte plus grand ou en gras, comme dans l’original |
| Gras, italique | Conservés |
| Images, logos | Insérés dans le document |
| Tableaux simples | Reconstruits au mieux, à vérifier |
| Colonnes multiples, encadrés | Peuvent nécessiter des retouches |
| Pages scannées | Non converties en texte : passez par l’OCR |

## PDF « natif » ou PDF scanné : faites le test

Avant de convertir, ouvrez votre PDF et essayez de **sélectionner une phrase** avec la souris.

- **Le texte se sélectionne** : c’est un PDF natif, exporté depuis un traitement de texte, un logiciel de facturation ou un site administratif. La conversion en Word donnera un bon résultat.
- **Rien ne se sélectionne**, ou toute la page se surligne d’un bloc : c’est un scan. Il faut d’abord reconnaître les caractères avec [OCR PDF](/fr/ocr-pdf), qui gère le français et ses accents.

Un document photographié avec un smartphone puis enregistré en PDF est presque toujours un scan.

## Conseils pour obtenir un document Word propre

- **Commencez par un PDF déverrouillé.** Si votre PDF demande un mot de passe à l’ouverture, retirez-le d’abord avec [Déverrouiller PDF](/fr/deverrouiller-pdf).
- **Vous n’avez besoin que de quelques pages ?** Isolez-les avec [Diviser PDF](/fr/diviser-pdf) : un document plus court se convertit plus vite et se relit plus facilement.
- **Le PDF contient surtout des tableaux de chiffres** (relevé, devis, export comptable) ? [PDF en Excel](/fr/pdf-en-excel) donnera un meilleur résultat, avec des nombres directement calculables.
- **Relisez les tableaux et les en-têtes.** Dans Word, activez l’affichage des marques de paragraphe (bouton ¶) pour repérer rapidement les sauts de ligne superflus.
- **Vous voulez seulement récupérer le texte**, sans mise en forme ? [PDF en texte](/fr/pdf-en-texte) est plus direct.

## Convertir un PDF en Word sans l’envoyer en ligne

La plupart des convertisseurs gratuits envoient votre fichier sur leurs serveurs, le traitent à distance, puis promettent de le supprimer au bout d’un certain temps. Ici, le code de conversion est chargé dans votre navigateur et travaille sur votre appareil : le PDF n’est transmis nulle part. Vous pouvez le vérifier dans l’onglet *Réseau* des outils de développement de votre navigateur.

C’est un vrai avantage pour les documents que l’on préfère garder pour soi : contrat de travail, bail, avis d’imposition, CV, compte rendu médical ou dossier client à mettre à jour.

## TurboConvert, Word ou Google Docs : quelle méthode choisir ?

Les versions récentes de Microsoft Word savent ouvrir un PDF et le transformer en document modifiable, et Google Docs propose une conversion depuis Google Drive (clic droit sur le PDF › Ouvrir avec › Google Docs). Ces solutions dépannent si vous avez déjà le logiciel ou un compte, mais chacune a ses contraintes.

| Méthode | Ce qu’il faut | Envoi du fichier | Plusieurs PDF d’un coup |
|---|---|---|---|
| TurboConvert | Un navigateur, sur ordinateur ou téléphone | Non | Oui, avec téléchargement en ZIP |
| Microsoft Word | Word installé, avec licence | Non | Non, un fichier à la fois |
| Google Docs | Un compte Google | Oui, dans votre Drive | Non |

TurboConvert est surtout pratique sur un ordinateur sans Microsoft Office, sur un téléphone, ou quand vous avez une série de PDF à convertir en une seule fois.

## Et pour revenir au PDF ?

Une fois vos modifications terminées dans Word, convertissez le document avec [Word en PDF](/fr/word-en-pdf) pour l’envoyer dans un format que tout le monde peut ouvrir et qui ne bougera plus.
