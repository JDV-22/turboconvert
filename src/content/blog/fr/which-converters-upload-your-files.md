---
title: 'Quels convertisseurs PDF envoient vos fichiers ? 14 sites testés'
description: 'Un PDF de test de 3 Mo passé dans 14 outils PDF en ligne, octets sortants comptés : 12 outils ont envoyé le fichier entier, 2 l’ont traité sur place.'
h1: 'Quels convertisseurs PDF en ligne envoient vos fichiers ? Nous en avons mesuré 14'
permalink: quels-convertisseurs-envoient-vos-fichiers
published: 2026-10-14
updated: 2026-10-14
tool: compress-pdf
category: pdf
faq:
  - q: 'Est-ce dangereux d’utiliser un convertisseur qui envoie les fichiers ?'
    a: 'Pas forcément. Les services établis chiffrent les transferts et indiquent supprimer les fichiers après quelques heures. Mais le document quitte bien votre appareil et il est traité sur le serveur de quelqu’un d’autre : pour une pièce d’identité, un contrat, une fiche de paie ou un dossier médical, un outil qui travaille en local est le choix prudent.'
  - q: 'Comment vérifier si un site envoie mon fichier ?'
    a: 'Ouvrez les outils de développement du navigateur (F12), onglet Réseau, puis sélectionnez votre fichier sur le site. Si une requête a à peu près la taille de votre fichier, il a été envoyé. Notre méthode ci-dessous fait la même chose automatiquement, en comptant chaque octet envoyé par le navigateur.'
  - q: 'Pourquoi la plupart des convertisseurs envoient-ils les fichiers ?'
    a: 'Historiquement, les navigateurs étaient trop lents pour les traitements lourds : tout se faisait sur des serveurs. Aujourd’hui, WebAssembly permet aux navigateurs d’exécuter les mêmes moteurs (Ghostscript, FFmpeg, bibliothèques PDF) sur l’appareil pour beaucoup de tâches. Le traitement serveur reste nécessaire pour certaines fonctions, et il permet aux services de contrôler leurs outils et leurs limites.'
  - q: 'Les convertisseurs qui travaillent en local fonctionnent-ils hors ligne ?'
    a: 'Ils ont besoin de charger la page une fois, et certains téléchargent leur moteur de traitement à la première utilisation. Ensuite, le fichier lui-même est traité sur votre appareil sans être envoyé.'
---

La plupart des convertisseurs en ligne fonctionnent de la même façon : vous choisissez un fichier, il part sur les serveurs de l’entreprise, il y est traité, puis vous téléchargez le résultat. Des outils plus récents font le traitement dans votre navigateur, si bien que le fichier ne quitte jamais votre appareil. Les pages des outils rendent rarement la différence visible : nous l’avons donc mesurée.

**Transparence :** TurboConvert, le site qui publie cette étude, fait partie des outils testés et traite les fichiers en local. Pour que la comparaison reste équitable, nous publions la méthode complète afin que chacun puisse la reproduire, et nous donnons tous les résultats, y compris celui de l’autre outil qui travaille en local.

## Résultats

Test réalisé le 14 octobre 2026 avec l’outil **Compresser un PDF** de chaque site (pour Convertio, dont la page n’a pas d’outil de compression, le convertisseur a été utilisé en PDF vers JPG).

| Outil | Fichier envoyé à un serveur ? | Octets envoyés | Début de l’envoi |
|---|---|---|---|
| iLovePDF | Oui | 3,15 Mo | Dès la sélection du fichier |
| Smallpdf | Oui | 3,16 Mo | Dès la sélection du fichier |
| PDF24 Tools | Oui | 3,15 Mo | Dès la sélection du fichier |
| Adobe Acrobat en ligne | Oui | 3,15 Mo | Dès la sélection du fichier |
| Sejda | Oui | 3,14 Mo | Dès la sélection du fichier |
| PDF2Go | Oui | 3,15 Mo | Dès la sélection du fichier |
| PDF Candy | Oui | 3,16 Mo | Dès la sélection du fichier |
| Soda PDF | Oui | 3,15 Mo | Dès la sélection du fichier |
| CloudConvert | Oui | 3,14 Mo | Après le clic sur Compresser |
| FreeConvert | Oui | 3,15 Mo | Après le clic sur Compresser |
| PDFgear en ligne | Oui | 3,14 Mo | Après le clic sur Compresser |
| Convertio | Oui | 3,14 Mo | Après le clic sur Convertir |
| BentoPDF | **Non** | 6,6 Ko au total | — |
| TurboConvert | **Non** | 5 Ko au total | — |

Le fichier de test pesait 3 135 035 octets. « Octets envoyés » correspond aux données reçues par le serveur qui a récupéré le fichier ; les quelques kilo-octets envoyés par les deux outils locaux sont des statistiques de visite et requêtes similaires, plusieurs centaines de fois moins que le fichier.

## Ce que montrent les résultats

- **12 outils sur 14 ont envoyé le document entier.** Pour 8 d’entre eux, l’envoi a commencé dès la sélection du fichier, avant tout clic sur un bouton. Sélectionner un fichier « pour voir » suffit déjà à ce qu’il quitte votre appareil.
- **2 outils ont traité le fichier en local.** BentoPDF et TurboConvert ont traité le PDF dans le navigateur ; le seul trafic était de quelques kilo-octets sans rapport avec le fichier.
- **Envoyer n’est pas un verdict sur la sécurité.** Les grands services chiffrent les transferts et publient des règles de suppression (souvent quelques heures). Cette étude mesure où va le fichier, pas ce qu’il devient ensuite. Mais une fois le fichier sur un serveur, vous dépendez des pratiques de l’entreprise : c’est pourquoi, pour les documents sensibles, beaucoup préfèrent un traitement local.

## Méthode

1. **Fichier de test :** un PDF de 3 pages composé d’images de bruit aléatoire, pour que sa taille (3 135 035 octets) soit facile à reconnaître dans le trafic réseau et qu’il ne puisse pas être réduit avant l’envoi.
2. **Mesure :** chaque site a été ouvert dans un profil de navigateur Chromium neuf, dont le trafic passait par un proxy local qui compte les octets envoyés vers chaque serveur.
3. **Étapes :** charger la page de l’outil, fermer la bannière de cookies, remettre les compteurs à zéro, sélectionner le fichier, attendre 20 secondes et relever les compteurs ; puis cliquer sur le bouton Compresser (ou Convertir) du site, attendre jusqu’à 60 secondes et relever de nouveau.
4. **Verdict :** « envoie » quand un même serveur a reçu au moins 80 % de la taille du fichier ; « reste en local » quand le total envoyé est resté très inférieur à la taille du fichier **et** que l’outil a terminé le traitement (téléchargement proposé). Chaque site testé est tombé nettement dans l’une des deux catégories.
5. **Portée :** un outil par site, une journée, un type de fichier. Les services évoluent : nous referons le test régulièrement et mettrons cette page à jour avec la date.

## Vérifiez vous-même en 30 secondes

Pas besoin de notre dispositif pour contrôler un outil que vous utilisez :

1. Ouvrez la page du convertisseur et appuyez sur **F12** (ou clic droit → *Inspecter*), puis ouvrez l’onglet **Réseau**.
2. Sélectionnez un fichier de quelques mégaoctets sur le site.
3. Triez les requêtes par taille. Si l’une d’elles a à peu près la taille de votre fichier, il a été envoyé.

## Convertir ses fichiers sensibles en local

Si vous préférez garder un document sur votre appareil, utilisez un outil qui le traite dans le navigateur, ou un logiciel installé. Sur TurboConvert, tous les outils fonctionnent ainsi, dont [Compresser un PDF](/fr/compresser-pdf), [PDF en Word](/fr/pdf-en-word), [Signer un PDF](/fr/signer-pdf) et [Scanner un document en PDF](/fr/scanner-document-pdf).
