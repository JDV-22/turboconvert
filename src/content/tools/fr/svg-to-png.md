---
name: 'SVG en PNG'
title: 'SVG en PNG : convertir en haute résolution, gratuit'
description: 'Convertissez vos fichiers SVG en PNG nets en 1×, 2× ou 4×, avec fond transparent. Par lot, gratuit, sans inscription et sans envoi de fichier.'
h1: 'Convertir SVG en PNG'
lead: 'Transformez vos logos, icônes et illustrations vectorielles SVG en images PNG prêtes à l’emploi, en haute définition. Tout se passe dans votre navigateur.'
what: 'vos fichiers SVG'
howTo: 'convertir SVG en PNG'
steps:
  - 'Cliquez sur <strong>Choisir des fichiers</strong> ou glissez vos fichiers .svg dans le cadre.'
  - 'Choisissez l’<strong>Échelle</strong> : 1× (taille définie dans le SVG), 2× (par défaut, net sur les écrans haute densité) ou 4× (impression, grand format).'
  - 'Cliquez sur <strong>Convertir</strong>, puis téléchargez vos PNG ou l’ensemble avec <strong>Tout télécharger (ZIP)</strong>.'
limits:
  - 'Les polices web et les images externes référencées par le SVG ne sont pas chargées : convertissez le texte en tracés (vectorisez-le) dans votre logiciel avant l’export si le rendu n’est pas correct.'
  - 'Les animations SVG ne sont pas conservées : seule l’image fixe est exportée.'
  - 'Si le SVG n’indique pas de taille, sa viewBox est utilisée (ou 512 px par défaut). Taille maximale : 20 Mo par fichier.'
faq:
  - q: 'Le fond transparent est-il conservé ?'
    a: 'Oui. Les zones sans remplissage du SVG restent transparentes dans le PNG.'
  - q: 'Quelle échelle choisir ?'
    a: '1× donne la taille définie dans le fichier SVG. 2× double la largeur et la hauteur, ce qui reste net sur les écrans Retina et les smartphones. 4× convient pour l’impression ou un affichage en très grand format.'
  - q: 'Pourquoi mon texte s’affiche-t-il dans une autre police ?'
    a: 'Si le SVG utilise une police qui n’est pas intégrée au fichier, le navigateur la remplace par une police par défaut. Dans Illustrator, Inkscape ou Figma, vectorisez le texte (contours ou tracés) avant d’exporter le SVG.'
  - q: 'Puis-je créer un favicon à partir d’un SVG ?'
    a: 'Oui, utilisez directement <a href="/fr/png-en-ico">PNG en ICO</a>, qui accepte aussi les SVG et produit un fichier .ico multi-tailles.'
  - q: 'Mes fichiers sont-ils envoyés en ligne ?'
    a: 'Non, le rendu du SVG est effectué par votre navigateur, sur votre appareil.'
---

## Vectoriel ou matriciel : pourquoi convertir ?

Le **SVG** est un format **vectoriel** : l’image est décrite par des formes et des courbes, et non par des pixels. Elle reste parfaitement nette à n’importe quelle taille, ce qui en fait le format idéal pour les logos et les icônes sur le web.

Mais beaucoup d’usages exigent une image **matricielle** (en pixels) comme le **PNG** :

- **Réseaux sociaux** : photos de profil, publications et bannières n’acceptent pas le SVG ;
- **Documents Word, PowerPoint ou Google Slides** : le PNG s’insère partout sans surprise ;
- **Messageries et e-mails** : le SVG n’est pas affiché dans la plupart des clients ;
- **Applications mobiles, boutiques en ligne, marketplaces** qui demandent un fichier image classique.

Le PNG garde la transparence du SVG, ce qui le rend parfait pour un logo à poser sur n’importe quel fond.

## Choisir la bonne échelle

| Échelle | Taille obtenue (SVG de 200 × 100) | Usage |
|---|---|---|
| 1× | 200 × 100 px | Web classique, petites icônes |
| 2× | 400 × 200 px | Écrans haute densité, présentations |
| 4× | 800 × 400 px | Impression, grands visuels |

Comme le SVG est vectoriel, chaque échelle est calculée à partir des formes d’origine : un export en 4× est vraiment net, ce n’est pas un simple agrandissement.

## Si le rendu n’est pas celui attendu

- **Police différente** : vectorisez le texte dans votre logiciel avant l’export.
- **Image intégrée manquante** : les images liées par URL ne sont pas chargées ; intégrez-les dans le SVG (en base64) ou exportez directement en PNG depuis votre logiciel.
- **Image trop petite** : le SVG définit peut-être une petite taille ; utilisez l’échelle 4×, plutôt que d’agrandir le PNG après coup. À l’inverse, pour obtenir une taille précise en pixels, exportez en 4× puis réduisez avec [Redimensionner une image](/fr/redimensionner-image).

## Exporter une série d’icônes

Vous avez un jeu d’icônes SVG à fournir en PNG pour une application ou une présentation ? Déposez-les toutes d’un coup, choisissez l’échelle et récupérez un ZIP. Chaque fichier garde son nom d’origine, avec l’extension .png.

Besoin d’un JPG plutôt que d’un PNG (sans transparence) ? Convertissez le résultat avec [PNG en JPG](/fr/png-en-jpg).

Le rendu est fait par votre navigateur, localement : vos logos et maquettes non publiés ne sont envoyés à aucun serveur.
