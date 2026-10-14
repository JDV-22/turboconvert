---
name: 'Scanner un document en PDF'
title: 'Scanner un document en PDF avec son téléphone, sans appli'
description: 'Transformez les photos de vos documents papier en un PDF propre : pages redressées, papier blanchi, ordre au choix. Gratuit, sans appli ni envoi.'
h1: 'Scanner un document en PDF'
lead: 'Photographiez vos documents papier avec votre téléphone, redressez chaque page, nettoyez-la comme un vrai scanner et enregistrez le tout dans un seul PDF. Aucune appli à installer, aucun compte : les photos ne quittent jamais votre appareil.'
what: 'vos photos'
howTo: 'scanner un document en PDF'
steps:
  - 'Touchez <strong>Choisir des fichiers</strong> et photographiez la première page (ou choisissez des photos existantes). Ajoutez d’autres pages avec <strong>Prendre une photo</strong>.'
  - 'Touchez une page pour <strong>Ajuster les coins</strong> : placez les 4 coins sur les bords de la feuille et la page est redressée. Utilisez les flèches pour changer l’ordre et <strong>Pivoter</strong> si besoin.'
  - 'Choisissez le <strong>Filtre de scan</strong> (couleur nettoyée, document noir et blanc, niveaux de gris ou photo d’origine) et la <strong>Qualité</strong>.'
  - 'Touchez <strong>Convertir</strong>. Toutes les pages sont enregistrées dans un seul PDF.'
limits:
  - 'Les coins se placent à la main : il n’y a pas encore de détection automatique des bords. Cela prend quelques secondes par page et fonctionne sur n’importe quel fond.'
  - 'Le PDF contient des images des pages : le texte ne peut pas être sélectionné ni recherché. Pour le rendre cherchable, passez le PDF dans <a href="/fr/ocr-pdf">OCR PDF</a>.'
  - 'Photos jusqu’à 50 Mo chacune (JPG, PNG, WebP, HEIC). Les gros lots sont plus lents sur les téléphones anciens.'
  - 'Le résultat ne peut pas être meilleur que la photo : photographiez dans un endroit lumineux, téléphone parallèle à la feuille, sans votre propre ombre.'
faq:
  - q: 'Faut-il installer une application ?'
    a: 'Non. Cette page fonctionne dans Safari, Chrome et les autres navigateurs mobiles. Le bouton Prendre une photo ouvre directement l’appareil photo du téléphone ; sur ordinateur, utilisez des photos existantes.'
  - q: 'Mes documents sont-ils envoyés sur un serveur ?'
    a: 'Non. Le redressement, le nettoyage et la création du PDF se font dans votre navigateur. C’est important pour les pièces d’identité, fiches de paie, avis d’imposition et documents médicaux.'
  - q: 'Quel filtre de scan choisir ?'
    a: 'Le filtre « Couleur, nettoyée » blanchit le papier et supprime les ombres tout en gardant les couleurs : c’est le meilleur choix par défaut, y compris pour les pièces d’identité et les documents avec logo. « Document noir et blanc » donne le rendu le plus net et le plus contrasté pour les pages de texte. « Niveaux de gris » est un intermédiaire, et « Photo d’origine » n’applique aucun traitement.'
  - q: 'Quelle taille fera le PDF ?'
    a: 'En qualité Standard, une page pèse généralement entre 150 et 250 Ko ; Fichier léger divise ce poids environ par deux, Haute le double environ. Si un formulaire impose une taille maximale, choisissez Fichier léger, ou passez le résultat dans Compresser un PDF.'
  - q: 'Peut-on ajouter des pages après la conversion ?'
    a: 'Oui. Touchez Convertir d’autres fichiers pour lancer un nouveau scan, ou ajoutez les nouvelles photos avant de convertir. Vous pouvez aussi assembler plusieurs PDF avec Fusionner des PDF.'
  - q: 'Comment obtenir le meilleur scan ?'
    a: 'Posez la feuille sur une surface sombre et unie, à la lumière du jour ou dans une pièce bien éclairée, tenez le téléphone juste au-dessus de la page et gardez toute la feuille dans le cadre. Placez ensuite les coins précisément grâce à la loupe qui apparaît pendant le déplacement.'
---

## Un scanner dans la poche, sans application

Vous devez envoyer un contrat signé, un justificatif de domicile ou une fiche de paie, et vous n’avez pas de scanner sous la main. De simples photos ne conviennent pas : elles sont de travers, pleines d’ombres, lourdes, et vous finissez par envoyer cinq images séparées. Cet outil transforme ces photos en ce que produirait un scanner (des pages droites et blanches réunies dans un seul PDF) directement dans le navigateur de votre téléphone.

## Comment fonctionne le traitement

1. **Correction de la perspective.** Vous placez les quatre coins sur les bords de la feuille ; la page est mathématiquement « dépliée » en un rectangle droit, même si la photo a été prise de biais.
2. **Correction de l’éclairage.** Les filtres estiment la luminosité du papier sur toute la page et la compensent : les ombres et l’éclairage inégal disparaissent et le papier gris redevient blanc.
3. **Assemblage du PDF.** Chaque page est compressée en JPEG selon la qualité choisie et placée sur une page A4 ou Letter (ou une page aux proportions du scan), dans l’ordre que vous avez défini.

## Choisir la qualité

| Qualité | Résolution sur A4 | Idéal pour |
|---|---|---|
| Haute | environ 300 dpi | Archivage, impression, petits caractères |
| Standard | environ 150 dpi | La plupart des documents (par défaut) |
| Fichier léger | environ 100 dpi | Pièces jointes, formulaires en ligne avec limite de taille |

## Confidentiel par conception

Les papiers scannés comptent parmi les fichiers les plus sensibles : pièces d’identité, RIB, résultats médicaux. Beaucoup d’applis et de sites de scan les envoient sur leurs serveurs pour les traiter. Ici, les photos sont lues sur votre appareil, traitées dans votre navigateur, et le PDF est écrit directement dans vos téléchargements : rien n’est envoyé.

## Outils associés

- Rendez le texte scanné cherchable et copiable avec [OCR PDF](/fr/ocr-pdf).
- Besoin de signer le document ? Utilisez [Signer un PDF](/fr/signer-pdf) sur le PDF scanné.
- Vos photos n’ont pas besoin de correction ? [JPG en PDF](/fr/jpg-en-pdf) les garde telles quelles.
- Fichier encore trop lourd ? [Compressez le PDF](/fr/compresser-pdf).
