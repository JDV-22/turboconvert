---
layout: ../../layouts/ProsePage.astro
title: À propos de TurboConvert — un convertisseur qui n’envoie rien
description: Qui conçoit TurboConvert, comment les conversions s’exécutent dans votre navigateur sans envoyer vos fichiers, quels moteurs open source nous utilisons.
h1: À propos de TurboConvert
lead: Un convertisseur de fichiers gratuit fondé sur une idée simple — vos fichiers ne devraient jamais avoir à quitter votre appareil.
locale: fr
page: about
updated: 2026-10-09
---

## Pourquoi TurboConvert

Convertir un PDF ou une photo ne devrait pas obliger à en confier une copie au serveur d’un inconnu. C’est pourtant le fonctionnement de la plupart des convertisseurs en ligne : vous envoyez votre fichier, il est traité à distance, et l’on vous demande de croire qu’il sera bien supprimé.

TurboConvert est un projet indépendant conçu en France qui fait l’inverse. Quand vous ouvrez un outil, le logiciel de conversion est téléchargé dans votre navigateur et s’exécute sur votre ordinateur ou votre téléphone. Vos fichiers sont lus, convertis et enregistrés localement. Il n’y a aucune étape d’envoi — c’est aussi pour cela que les conversions démarrent instantanément.

## Comment ça marche

Les navigateurs modernes exécutent du code compilé presque aussi vite qu’un logiciel installé, grâce à **WebAssembly**. Nous l’utilisons pour faire tourner, directement dans la page, des moteurs open source éprouvés :

- **Ghostscript** compresse les PDF — le moteur de nombreux outils PDF professionnels.
- **FFmpeg** (via ffmpeg.wasm) convertit, compresse et coupe l’audio et la vidéo.
- **PDF.js** (Mozilla) affiche et lit les pages PDF ; **pdf-lib** et **qpdf** les modifient, fusionnent, divisent et protègent.
- **libheif** décode les photos HEIC d’iPhone ; **Tesseract** reconnaît le texte des documents scannés (OCR).
- **docx**, **mammoth**, **docx-preview**, **ExcelJS**, **jsPDF** et **PptxGenJS** lisent et écrivent les documents Office.

Certains moteurs sont volumineux (FFmpeg pèse environ 31 Mo) : la première utilisation d’un outil vidéo ou OCR prend donc un peu plus de temps. Votre navigateur garde ensuite le moteur en cache.

## Vérifiez par vous-même

Ouvrez les outils de développement de votre navigateur (F12 sous Windows, ⌥⌘I sur Mac), onglet **Réseau**, puis lancez une conversion. Vous verrez la page et les moteurs se charger, mais jamais votre fichier partir. Vous pouvez même couper Internet une fois la page chargée et continuer à convertir.

## Comment le site est financé

Les outils sont gratuits, sans compte, sans limite quotidienne et sans filigrane. Le site est financé par la publicité (affichée uniquement avec le consentement exigé par la loi) et peut contenir des recommandations de produits clairement signalées. Nous ne vendons aucune donnée — et comme nous ne recevons jamais vos fichiers, il n’y a rien à vendre à leur sujet.

## Honnêtes sur les limites

Tout traiter sur votre appareil a des contreparties. Les très gros fichiers dépendent de la mémoire de votre appareil, et certaines conversions (mises en page Word complexes, PDF scannés…) ne peuvent pas toujours être parfaites. Chaque page d’outil comporte une rubrique **Bon à savoir** qui liste ses vraies limites. Si quelque chose ne fonctionne pas comme annoncé, [écrivez-nous](/fr/contact) : nous lisons chaque message.

## Logiciels open source

TurboConvert repose sur le travail de nombreux projets open source, utilisés sans modification et sous leurs licences respectives :

| Projet | Licence | Source |
|---|---|---|
| Ghostscript (version WebAssembly de @jspawn) | AGPL-3.0 | [github.com/jspawn/ghostscript-wasm](https://github.com/jspawn/ghostscript-wasm) · [ghostscript.com](https://ghostscript.com/) |
| FFmpeg / ffmpeg.wasm | LGPL/GPL · MIT | [ffmpeg.org](https://ffmpeg.org/) · [github.com/ffmpegwasm/ffmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm) |
| PDF.js | Apache-2.0 | [github.com/mozilla/pdf.js](https://github.com/mozilla/pdf.js) |
| pdf-lib | MIT | [github.com/Hopding/pdf-lib](https://github.com/Hopding/pdf-lib) |
| qpdf (qpdf-wasm) | Apache-2.0 · ISC | [github.com/qpdf/qpdf](https://github.com/qpdf/qpdf) |
| libheif (libheif-js) | LGPL-3.0 | [github.com/strukturag/libheif](https://github.com/strukturag/libheif) |
| Tesseract.js | Apache-2.0 | [github.com/naptha/tesseract.js](https://github.com/naptha/tesseract.js) |
| docx · mammoth · docx-preview | MIT · BSD-2 · Apache-2.0 | [docx](https://github.com/dolanmiu/docx) · [mammoth](https://github.com/mwilliamson/mammoth.js) · [docx-preview](https://github.com/VolodymyrBaydalka/docxjs) |
| ExcelJS · jsPDF · PptxGenJS · JSZip · fflate · UTIF | MIT | [exceljs](https://github.com/exceljs/exceljs) · [jsPDF](https://github.com/parallax/jsPDF) · [PptxGenJS](https://github.com/gitbrent/PptxGenJS) · [JSZip](https://github.com/Stuk/jszip) · [fflate](https://github.com/101arrowz/fflate) · [UTIF](https://github.com/photopea/UTIF.js) |
| Police Geist | SIL OFL 1.1 | [github.com/vercel/geist-font](https://github.com/vercel/geist-font) |

## Contact

Questions, bugs, partenariats ou presse : [hello@turboconvert.io](mailto:hello@turboconvert.io). Données personnelles : [privacy@turboconvert.io](mailto:privacy@turboconvert.io).
