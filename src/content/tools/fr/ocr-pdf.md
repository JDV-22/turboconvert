---
name: 'OCR PDF'
title: 'OCR PDF gratuit : extraire le texte d’un scan | TurboConvert'
description: 'Reconnaissez le texte d’un PDF scanné ou d’une photo (OCR) en français et 5 autres langues. Gratuit, dans votre navigateur, sans envoi de fichier.'
h1: 'OCR : reconnaître le texte d’un PDF scanné'
lead: 'Transformez un scan ou une photo de document en texte que vous pouvez copier, rechercher et modifier. La reconnaissance s’exécute sur votre appareil : rien n’est envoyé.'
what: 'votre scan'
howTo: 'extraire le texte d’un PDF scanné'
steps:
  - 'Cliquez sur <strong>Choisir un fichier</strong> ou glissez un PDF scanné ou une image (JPG, PNG, WebP) dans le cadre, jusqu’à 100 Mo.'
  - 'Choisissez la <strong>Langue du document</strong> : Français, English, Español, Deutsch, Português ou Italiano.'
  - 'Cliquez sur <strong>Convertir</strong>. À la première utilisation, le moteur OCR et les données de la langue choisie sont téléchargés puis gardés en cache par votre navigateur.'
  - 'Le texte reconnu se télécharge une fois l’analyse terminée. Relisez-le, en particulier les chiffres et les noms propres.'
limits:
  - 'La reconnaissance est réalisée par votre appareil : comptez quelques secondes par page sur un ordinateur, davantage sur un téléphone ou pour un long document.'
  - 'La qualité dépend fortement du scan : texte flou, de travers, manuscrit ou très petit sera mal reconnu.'
  - 'Six langues sont disponibles : français, anglais, espagnol, allemand, portugais et italien. Choisir la bonne langue améliore nettement la reconnaissance des accents.'
  - 'La mise en page (colonnes, tableaux) n’est pas reconstruite : vous obtenez le texte.'
faq:
  - q: 'Qu’est-ce que l’OCR ?'
    a: 'L’OCR (reconnaissance optique de caractères) analyse l’image d’une page pour identifier les lettres et les transformer en texte numérique. C’est indispensable pour un PDF scanné, qui ne contient que des images.'
  - q: 'L’OCR reconnaît-il les accents français ?'
    a: 'Oui, à condition de choisir « Français » dans la langue du document. Le moteur utilise alors un modèle qui connaît les accents, la cédille et les ligatures comme « œ ».'
  - q: 'Puis-je faire l’OCR d’une photo prise avec mon téléphone ?'
    a: 'Oui, déposez directement le JPG ou le PNG. Pour de meilleurs résultats, photographiez la page bien à plat, de face, avec un bon éclairage et sans ombre.'
  - q: 'L’OCR reconnaît-il l’écriture manuscrite ?'
    a: 'Très mal. Le moteur est conçu pour le texte imprimé ; une écriture manuscrite donnera un résultat peu exploitable.'
  - q: 'Mes documents scannés sont-ils envoyés en ligne ?'
    a: 'Non. Le moteur Tesseract est exécuté dans votre navigateur. Vos scans restent sur votre appareil, ce qui compte pour des documents d’identité ou médicaux.'
---

## Pourquoi votre PDF scanné n’est pas « lisible »

Quand vous scannez un document, ou le photographiez avec votre téléphone, le PDF obtenu contient **une photo de chaque page**, pas du texte. On ne peut donc ni y chercher un mot, ni copier une phrase, ni le convertir en Word correctement. L’OCR comble ce manque : il examine les formes des lettres et reconstitue le texte.

TurboConvert utilise **Tesseract**, un moteur d’OCR open source largement utilisé, compilé pour fonctionner directement dans votre navigateur.

## Obtenir une bonne reconnaissance

| Facteur | Conseil |
|---|---|
| Résolution | Scannez à 300 dpi : en dessous, les petits caractères sont mal reconnus |
| Cadrage | Page droite et entière, sans bord de table ni doigts |
| Éclairage | Lumière uniforme, sans ombre ni reflet |
| Contraste | Texte noir sur fond clair ; évitez le papier froissé |
| Langue | Sélectionnez la langue réelle du document |

Une page bien scannée donne généralement un texte propre, à relire rapidement. Vérifiez toujours les chiffres (montants, dates, numéros) : une erreur comme « 8 » lu à la place de « 3 » est vite arrivée.

## Pourquoi l’OCR prend un peu de temps

Les services d’OCR en ligne font travailler leurs serveurs ; ici, c’est votre appareil qui analyse chaque page. Lors de la première utilisation, le navigateur télécharge le moteur et le modèle de langue choisi (plusieurs mégaoctets), puis les garde en cache : les fois suivantes, le démarrage est beaucoup plus rapide. La contrepartie de cette attente est simple : vos documents ne sont jamais envoyés. Pour un long PDF, gardez l’onglet ouvert jusqu’à la fin du traitement ; sur téléphone, évitez de verrouiller l’écran pendant l’analyse.

## Que faire du texte reconnu ?

- **Le modifier dans un traitement de texte** : collez-le dans Word, LibreOffice ou Google Docs.
- **Le traduire ou le résumer** avec l’outil de votre choix.
- **Archiver une version consultable** de vos courriers papier.

Si votre PDF contient déjà du texte sélectionnable, l’OCR n’est pas nécessaire : [PDF en texte](/fr/pdf-en-texte) ou [PDF en Word](/fr/pdf-en-word) seront bien plus rapides et plus fidèles.

## OCR d’un PDF de plusieurs pages

Un PDF scanné de plusieurs pages est analysé page après page, et le texte de toutes les pages est réuni dans le résultat. Si seules quelques pages vous intéressent, extrayez-les d’abord avec [Diviser PDF](/fr/diviser-pdf) : l’analyse sera bien plus rapide, surtout sur un téléphone.
