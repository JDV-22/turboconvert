---
name: 'PDF en Excel'
title: 'Convertir PDF en Excel gratuit (XLSX) | TurboConvert'
description: 'Convertissez les tableaux d’un PDF en fichier Excel (XLSX) modifiable, chiffres compris. Gratuit, dans votre navigateur, sans envoi de fichier ni inscription.'
h1: 'Convertir un PDF en Excel'
lead: 'Récupérez les tableaux d’un PDF dans un classeur Excel, avec des nombres prêts à être calculés. La conversion se fait sur votre appareil : votre PDF n’est jamais envoyé.'
what: 'votre PDF'
howTo: 'convertir un PDF en Excel'
steps:
  - 'Cliquez sur <strong>Choisir des fichiers</strong> ou glissez un ou plusieurs PDF dans le cadre (jusqu’à 100 Mo chacun).'
  - 'Cliquez sur <strong>Convertir</strong> : les lignes et colonnes des tableaux sont détectées page par page.'
  - 'Le fichier <code>.xlsx</code> se télécharge automatiquement (ou via <strong>Tout télécharger (ZIP)</strong> pour plusieurs PDF). Chaque page du PDF correspond à une feuille du classeur.'
  - 'Ouvrez-le dans Excel, LibreOffice Calc ou Google Sheets et vérifiez les en-têtes avant de lancer vos calculs.'
limits:
  - 'Fonctionne sur les PDF « natifs » (exportés depuis un logiciel), pas sur les scans. Pour un tableau scanné, l’<a href="/fr/ocr-pdf">OCR</a> récupère le texte mais pas la structure en colonnes.'
  - 'Les en-têtes complexes (cellules fusionnées, titres sur plusieurs lignes) peuvent demander un peu de nettoyage.'
  - 'Les graphiques et la mise en forme des cellules (couleurs, bordures) ne sont pas repris.'
faq:
  - q: 'Comment convertir un PDF en Excel gratuitement ?'
    a: 'Déposez le PDF ci-dessus et cliquez sur Convertir. Vous obtenez un fichier .xlsx avec une feuille par page, sans compte et sans filigrane.'
  - q: 'Les nombres seront-ils reconnus comme des nombres ?'
    a: 'Oui, les valeurs numériques sont enregistrées comme des nombres et non comme du texte : vous pouvez directement faire des sommes, des moyennes ou des tableaux croisés. Vérifiez tout de même les formats particuliers (devises, pourcentages).'
  - q: 'Ça marche avec un relevé bancaire en PDF ?'
    a: 'Oui, si le relevé a été téléchargé depuis votre espace bancaire (PDF natif). C’est un cas d’usage idéal : vous retrouvez dates, libellés et montants en colonnes pour faire vos comptes. Un relevé scanné, en revanche, ne fonctionnera pas.'
  - q: 'Mon fichier est-il envoyé sur un serveur ?'
    a: 'Non. La détection des tableaux s’exécute dans votre navigateur. Vos relevés et données financières restent sur votre appareil.'
---

## Pourquoi convertir un PDF en Excel ?

Les tableaux arrivent souvent en PDF : relevés bancaires, factures détaillées, exports de logiciels comptables, rapports, grilles tarifaires, résultats. Pour les trier, les filtrer ou faire des calculs, il faut les retrouver dans un tableur. Recopier à la main est long et source d’erreurs ; le copier-coller depuis un PDF mélange souvent toutes les colonnes dans une seule cellule.

PDF en Excel analyse la position de chaque mot sur la page pour reconstituer **les lignes et les colonnes**, puis écrit un vrai classeur `.xlsx`.

## Ce que vous obtenez

| Dans le PDF | Dans Excel |
|---|---|
| Chaque page | Une feuille du classeur |
| Lignes et colonnes de tableau | Cellules alignées |
| Montants, quantités | Nombres calculables |
| Texte hors tableau | Repris dans les cellules |
| Cellules fusionnées, en-têtes sur deux lignes | À vérifier et nettoyer |
| Graphiques, couleurs | Non repris |

## Conseils pour un résultat exploitable

- **Retirez les pages inutiles** (conditions générales, pages de garde) avec [Organiser PDF](/fr/organiser-pdf) avant la conversion : le classeur ne contiendra que les feuilles utiles.
- **Regroupez les feuilles** : si le tableau s’étend sur plusieurs pages, copiez les feuilles les unes sous les autres puis supprimez les en-têtes répétés.
- **Vérifiez le séparateur décimal** : un montant « 1 234,56 » doit apparaître comme un nombre ; s’il reste aligné à gauche, il est traité comme du texte.
- **Le PDF contient surtout du texte rédigé ?** [PDF en Word](/fr/pdf-en-word) sera plus adapté.

Et pour l’opération inverse, transformer un classeur en PDF propre à envoyer : [Excel en PDF](/fr/excel-en-pdf). Comme pour tous nos outils, la conversion a lieu dans votre navigateur et aucun fichier n’est envoyé.

## Problèmes fréquents

- **Toutes les données sont dans une seule colonne** : le PDF ne contient peut-être pas de vrai tableau, mais du texte aligné avec des espaces. Utilisez la fonction « Convertir » (données › colonnes) d’Excel pour redécouper.
- **Le fichier est vide ou presque** : votre PDF est sans doute un scan. La conversion en tableau nécessite un PDF avec du texte sélectionnable.
- **Des montants restent en texte** : sélectionnez la colonne et utilisez « Convertir en nombre » dans Excel, ou vérifiez les espaces insérés comme séparateurs de milliers.
- **Le PDF est protégé** : retirez d’abord le mot de passe avec [Déverrouiller PDF](/fr/deverrouiller-pdf).
