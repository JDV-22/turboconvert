---
name: 'Compresser PDF'
title: 'Compresser un PDF gratuitement, sans envoi | TurboConvert'
description: 'Réduisez la taille de vos PDF en ligne, gratuitement : 3 niveaux de compression, traitement dans votre navigateur, aucun envoi de fichier ni inscription.'
h1: 'Compresser un PDF'
lead: 'Réduisez le poids d’un PDF trop lourd pour un e-mail ou un formulaire en ligne. La compression s’exécute sur votre appareil avec Ghostscript : vos documents ne sont jamais envoyés.'
what: 'votre PDF'
howTo: 'compresser un PDF'
steps:
  - 'Cliquez sur <strong>Choisir des fichiers</strong> ou glissez un ou plusieurs PDF dans le cadre (jusqu’à 200 Mo par fichier).'
  - 'Choisissez le niveau de <strong>Compression</strong> : « Recommandée — bonne qualité » convient à la plupart des cas, « Forte — fichier le plus léger » pour passer sous une limite stricte, « Légère — meilleure qualité » pour un document à imprimer.'
  - 'Cliquez sur <strong>Convertir</strong>. À la première utilisation, le moteur de compression (environ 16 Mo) est téléchargé une seule fois puis gardé en cache par votre navigateur.'
  - 'Comparez la taille avant/après affichée, puis téléchargez votre PDF, ou tous les fichiers avec <strong>Tout télécharger (ZIP)</strong>.'
limits:
  - 'Les gains les plus importants concernent les PDF scannés ou riches en photos. Un PDF composé uniquement de texte est souvent déjà compact et ne diminue que légèrement.'
  - 'Si le fichier compressé n’est pas plus petit que l’original, TurboConvert vous rend votre fichier d’origine tel quel.'
  - 'Les PDF protégés par un mot de passe doivent d’abord être déverrouillés avec <a href="/fr/deverrouiller-pdf">Déverrouiller PDF</a>.'
  - 'La compression d’un gros fichier sollicite le processeur et la mémoire : sur téléphone, elle peut prendre plus de temps que sur ordinateur.'
faq:
  - q: 'Comment réduire la taille d’un PDF gratuitement ?'
    a: 'Déposez votre PDF ci-dessus, laissez le niveau « Recommandée » et cliquez sur Convertir. Le fichier allégé est créé dans votre navigateur, sans compte ni limite quotidienne.'
  - q: 'La compression va-t-elle abîmer mon PDF ?'
    a: 'Le texte reste net et sélectionnable : ce sont surtout les images qui sont réduites. Avec le niveau « Recommandée », la différence est rarement visible à l’écran ; le niveau « Forte » peut rendre les photos légèrement floues si on zoome.'
  - q: 'Comment compresser un PDF à moins de 1 Mo ou 2 Mo ?'
    a: 'Essayez d’abord « Recommandée », puis « Forte » si c’est encore trop lourd. Si la limite n’est toujours pas atteinte, séparez le document en plusieurs fichiers avec <a href="/fr/diviser-pdf">Diviser PDF</a> ou supprimez les pages inutiles avec <a href="/fr/organiser-pdf">Organiser PDF</a>.'
  - q: 'Pourquoi mon PDF ne diminue presque pas ?'
    a: 'Il est probablement déjà optimisé : PDF exporté depuis Word avec peu d’images, ou déjà compressé. Un PDF texte de quelques centaines de Ko a peu de marge de réduction.'
  - q: 'Mes documents sont-ils envoyés sur un serveur ?'
    a: 'Non. Ghostscript, le moteur utilisé par de nombreux logiciels professionnels, est exécuté dans votre navigateur grâce à WebAssembly. Vos relevés, avis d’imposition ou contrats restent sur votre appareil.'
---

## Pourquoi votre PDF est-il si lourd ?

La taille d’un PDF dépend presque entièrement de ce qu’il contient :

- **Des scans ou des photos de documents.** Une page scannée en couleur à 300 ou 600 dpi est une grande image ; un dossier de vingt pages peut vite dépasser 10 ou 20 Mo.
- **Des photos haute résolution** insérées dans un rapport, un catalogue ou une présentation exportée en PDF.
- **Des polices intégrées** et des éléments répétés sur chaque page, qui pèsent moins mais s’additionnent.

Compresser un PDF consiste surtout à **réduire la résolution et à recompresser les images** pour qu’elles ne dépassent pas ce qui est utile à l’écran ou à l’impression, tout en gardant le texte vectoriel, net à tous les niveaux de zoom.

## Quel niveau de compression choisir ?

| Niveau | Pour quoi faire | Effet sur les images |
|---|---|---|
| Forte — fichier le plus léger | Formulaires en ligne avec une limite stricte, envoi par messagerie | Résolution réduite pour l’écran, détails fins atténués |
| Recommandée — bonne qualité | E-mail, archivage, partage : le meilleur compromis | Lisible à l’écran et à l’impression bureautique |
| Légère — meilleure qualité | Document à imprimer, plans, photos importantes | Proche de l’original, gain plus modeste |

Sur un PDF scanné ou rempli de photos, la réduction atteint souvent 50 à 90 %. Sur un PDF qui ne contient que du texte, attendez-vous à un gain faible : il n’y a tout simplement pas grand-chose à compresser. Si le résultat n’est pas plus petit, vous le voyez immédiatement et votre fichier d’origine est conservé.

## Faire passer un PDF sous une limite de taille

Les messageries limitent la taille des pièces jointes (25 Mo chez Gmail, par exemple) et de nombreux portails — administrations, plateformes de candidature, dossiers de location, mutuelles — imposent un plafond par document, souvent de quelques mégaoctets. Voici la méthode, dans l’ordre :

1. **Compressez avec « Recommandée ».** C’est suffisant dans la majorité des cas.
2. **Pas assez ? Passez à « Forte ».** Vérifiez que le document reste lisible, en particulier les petits caractères d’un justificatif.
3. **Retirez les pages inutiles** (pages blanches, conditions générales) avec [Organiser PDF](/fr/organiser-pdf).
4. **Découpez le document** en plusieurs fichiers avec [Diviser PDF](/fr/diviser-pdf) si le portail accepte plusieurs pièces.

Astuce : si vous créez vous-même le PDF à partir de photos, réduisez d’abord les images avec [Compresser une image](/fr/compresser-image) avant de les assembler avec [JPG en PDF](/fr/jpg-en-pdf). Le PDF final sera léger dès le départ.

## Ce que la compression ne change pas

La compression agit sur le poids, pas sur le contenu du document :

- **Le nombre et l’ordre des pages** restent identiques.
- **Le texte** reste net, sélectionnable et consultable par recherche.
- **La mise en page** n’est pas modifiée : marges, colonnes et format de page sont conservés.

Un cas particulier : un PDF **signé électroniquement**. Toute modification du fichier, compression comprise, rend la signature numérique invalide. Si un document doit être signé, compressez-le d’abord, puis signez la version allégée.

## Compresser plusieurs PDF d’un coup

Vous pouvez déposer plusieurs fichiers en même temps : chacun est compressé séparément avec le même niveau, et la taille avant/après s’affiche pour chaque document. Récupérez-les ensuite un par un ou en une seule archive ZIP. Pour n’envoyer qu’un seul fichier, vous pouvez aussi les [fusionner](/fr/fusionner-pdf) avant ou après la compression.

## Une compression qui reste sur votre ordinateur

Les PDF que l’on cherche à alléger sont souvent des pièces sensibles : bulletins de salaire, avis d’imposition, pièce d’identité scannée, relevés bancaires. Avec TurboConvert, le moteur de compression est téléchargé dans votre navigateur et travaille localement. Aucun fichier n’est envoyé, il n’y a donc rien à supprimer d’un serveur ensuite. Une fois le moteur chargé, vous pouvez même couper votre connexion et continuer à compresser.
