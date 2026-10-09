---
name: 'PNG en ICO'
title: 'PNG en ICO : créer un favicon .ico multi-tailles gratuit'
description: 'Créez un favicon .ico multi-tailles (16 à 256 px) à partir d’un PNG, JPG, WebP ou SVG. Gratuit, sans inscription et sans envoi de fichier.'
h1: 'Convertir PNG en ICO (favicon)'
lead: 'Transformez votre logo en fichier .ico contenant plusieurs tailles, prêt à servir de favicon pour votre site ou d’icône Windows. Tout se fait dans votre navigateur.'
what: 'votre image'
howTo: 'créer un fichier ICO'
steps:
  - 'Cliquez sur <strong>Choisir un fichier</strong> ou glissez votre image (PNG, JPG, WebP ou SVG) dans le cadre. Idéalement, une image carrée d’au moins 256 × 256 px.'
  - 'Cliquez sur <strong>Convertir</strong> : l’outil génère automatiquement plusieurs tailles, de 16 à 256 px, dans un seul fichier .ico.'
  - 'Cliquez sur <strong>Télécharger</strong>, renommez le fichier en <code>favicon.ico</code> si besoin et placez-le à la racine de votre site.'
limits:
  - 'Une image non carrée sera intégrée dans un format carré : pour un meilleur rendu, recadrez votre logo en carré avant la conversion.'
  - 'Un seul fichier à la fois. Taille maximale : 20 Mo.'
  - 'Les détails fins disparaissent en 16 × 16 px : un logo simplifié (initiale, symbole) donne un favicon plus lisible.'
faq:
  - q: 'Quelles tailles contient le fichier ICO ?'
    a: 'Plusieurs tailles, de 16 × 16 à 256 × 256 px. Le navigateur ou Windows choisit automatiquement celle qui convient : 16 ou 32 px dans un onglet, des tailles plus grandes pour les raccourcis et le bureau.'
  - q: 'Comment ajouter le favicon à mon site ?'
    a: 'Placez <code>favicon.ico</code> à la racine du site (par exemple https://votresite.fr/favicon.ico) : les navigateurs le cherchent à cet endroit. Vous pouvez aussi le déclarer dans le &lt;head&gt; avec &lt;link rel="icon" href="/favicon.ico"&gt;.'
  - q: 'Le fond transparent de mon PNG est-il conservé ?'
    a: 'Oui, le format ICO gère la transparence : votre logo s’affichera proprement sur les onglets clairs comme sombres.'
  - q: 'Faut-il encore un favicon .ico en plus d’un PNG ou d’un SVG ?'
    a: 'C’est recommandé : le fichier favicon.ico à la racine reste la solution la plus compatible, notamment avec certains navigateurs plus anciens et outils qui le cherchent par défaut.'
  - q: 'Mon logo est-il envoyé sur un serveur ?'
    a: 'Non, le fichier ICO est généré dans votre navigateur.'
---

## Qu’est-ce qu’un fichier ICO ?

Le format **ICO** est le format d’icône historique de Windows, repris par les navigateurs pour le **favicon** : la petite image affichée dans l’onglet, les favoris et l’historique. Sa particularité : un seul fichier .ico peut contenir **plusieurs versions de la même image à différentes tailles**. Le système choisit la plus adaptée selon l’endroit où elle s’affiche.

| Taille | Où elle est utilisée |
|---|---|
| 16 × 16 px | Onglet du navigateur, favoris |
| 32 × 32 px | Barre des tâches, onglets sur écran haute densité |
| 48 × 48 px | Raccourcis et explorateur Windows |
| 256 × 256 px | Icônes en grand affichage |

## Préparer une bonne image source

- **Carrée** : le favicon est carré ; un logo rectangulaire sera réduit pour tenir dans le carré.
- **Assez grande** : partez d’au moins 256 × 256 px pour que la plus grande taille reste nette. Un [SVG](/fr/svg-en-png) est idéal, car il reste net à toutes les tailles.
- **Simple** : à 16 px, un texte ou un logo détaillé devient illisible. Utilisez une initiale, un pictogramme ou une version simplifiée.
- **Avec transparence** : un PNG à fond transparent s’intègre mieux aux thèmes clairs et sombres des navigateurs.

Votre image source est énorme (photo de plusieurs milliers de pixels) ? Réduisez-la d’abord à 512 px de côté avec [Redimensionner une image](/fr/redimensionner-image) ; le recadrage en carré, lui, se fait dans n’importe quel éditeur d’images.

## Installer le favicon sur votre site

1. Renommez le fichier en `favicon.ico`.
2. Déposez-le à la racine de votre site, à côté de la page d’accueil.
3. Ajoutez, si votre CMS ne le fait pas déjà, la ligne `<link rel="icon" href="/favicon.ico">` dans l’en-tête de vos pages.
4. Videz le cache ou testez en navigation privée : les navigateurs gardent longtemps l’ancien favicon en mémoire.

Sur WordPress, Shopify ou Wix, l’« icône du site » se règle généralement depuis les paramètres du thème ; certains attendent un PNG plutôt qu’un ICO.

## Icônes Windows

Le format ICO ne sert pas qu’aux sites web : c’est aussi le format des icônes de Windows. Vous pouvez utiliser le fichier obtenu pour personnaliser l’icône d’un raccourci ou d’un dossier (clic droit > Propriétés > Personnaliser > Changer d’icône), ou pour une petite application que vous développez. Les grandes tailles intégrées au fichier assurent un rendu net sur le bureau.

La conversion se fait localement : votre logo, même pas encore dévoilé, n’est envoyé nulle part.
