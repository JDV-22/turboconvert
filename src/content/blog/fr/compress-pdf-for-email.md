---
title: 'PDF trop lourd pour un mail ? Comment le réduire (Gmail, Outlook)'
description: 'Gmail et Outlook.com limitent les pièces jointes à 25 Mo, iCloud à 20 Mo. Comment alléger un PDF pour l’envoyer par mail, sur PC, Mac ou smartphone.'
h1: 'Réduire la taille d’un PDF pour l’envoyer par mail'
permalink: reduire-taille-pdf-pour-mail
published: 2026-10-09
updated: 2026-10-09
tool: compress-pdf
category: pdf
faq:
  - q: 'Quelle est la taille maximale d’une pièce jointe sur Gmail ?'
    a: '25 Mo pour un compte Gmail personnel, toutes pièces jointes confondues. Au-delà, Gmail remplace automatiquement le fichier par un lien Google Drive. Les comptes professionnels peuvent avoir une limite différente, fixée par l’administrateur.'
  - q: 'Pourquoi mon PDF de 22 Mo est-il refusé alors que la limite est de 25 Mo ?'
    a: 'Les pièces jointes sont encodées en texte pendant l’envoi, ce qui augmente leur poids d’environ un tiers, et certains serveurs comptent ce poids encodé ou la taille totale du message. Visez environ 18 Mo pour une limite de 25 Mo.'
  - q: 'Compresser un PDF le rend-il flou ?'
    a: 'Le texte et les graphiques vectoriels restent nets : la compression agit surtout sur les images contenues dans le PDF. Les photos et scans perdent un peu de détail au niveau le plus fort, rarement visible à l’écran. Commencez par le niveau recommandé.'
  - q: 'Zipper un PDF permet-il de le réduire ?'
    a: 'Très peu, en général quelques pour cent. Un PDF est déjà compressé en interne. Le vrai gain vient du réencodage des images qu’il contient, ce que fait un compresseur de PDF.'
  - q: 'Peut-on compresser un PDF confidentiel en ligne sans risque ?'
    a: 'Cela dépend de l’outil : la plupart envoient le fichier sur leurs serveurs. <a href="/fr/compresser-pdf">Compresser PDF</a> de TurboConvert fonctionne dans votre navigateur, le document ne quitte jamais votre appareil.'
---

Vous cliquez sur « Envoyer » et la messagerie répond : *pièce jointe trop volumineuse*. Bonne nouvelle : la plupart des PDF trop lourds peuvent être réduits à une fraction de leur taille en moins d’une minute, sans devenir illisibles. Ce guide récapitule les limites actuelles des principales messageries, explique pourquoi certains PDF pèsent si lourd et présente les solutions, de la plus rapide à la plus radicale.

## Les limites des pièces jointes en 2026

Voici les limites publiées par chaque service, vérifiées en octobre 2026. Elles s’appliquent au **total** des pièces jointes d’un même message, pas à chaque fichier.

| Messagerie | Limite | Au-delà |
|---|---|---|
| Gmail (compte personnel) | 25 Mo | Gmail remplace le fichier par un lien Google Drive |
| Outlook.com / Hotmail | 25 Mo par message | Partage via OneDrive proposé (jusqu’à 2 Go) |
| Application Outlook (comptes internet) | souvent 20 Mo par défaut | Message « La taille de la pièce jointe dépasse la limite autorisée » |
| Yahoo Mail | 25 Mo | Le message est refusé |
| iCloud Mail | 20 Mo | Lien Mail Drop jusqu’à 5 Go, conservé 30 jours |
| Microsoft 365 / Google Workspace (travail) | Définie par votre service informatique | Variable |

Les messageries des fournisseurs d’accès (Orange, SFR, Free, Bouygues) appliquent leurs propres limites, souvent du même ordre ou plus basses : vérifiez dans leur aide si vous les utilisez.

Deux précautions :

- **Gardez une marge.** Une pièce jointe grossit d’environ un tiers pendant l’envoi. Un PDF de 19 ou 20 Mo peut être rejeté par une messagerie « à 25 Mo », surtout si le serveur du destinataire est plus strict. Visez **moins de 18 Mo**, et moins de 10 Mo si vous ne connaissez pas le destinataire.
- **La limite du destinataire compte aussi.** Votre Gmail accepte 25 Mo, mais le serveur d’une petite entreprise peut s’arrêter à 10 Mo. Si le message revient avec « message size exceeds fixed maximum », la limite est chez le destinataire.

## Pourquoi mon PDF est-il si lourd ?

Le texte ne pèse presque rien : un rapport de 50 pages uniquement textuel tient souvent sous 1 Mo. Quand un PDF pèse 20, 50 ou 100 Mo, le coupable est presque toujours **l’image** :

- **Les scans et photos de documents.** Un scanner réglé en couleur à 300 ou 600 dpi produit plusieurs mégaoctets par page. Vingt pages de justificatifs scannés dépassent vite 40 Mo.
- **Les exports Word ou PowerPoint** contenant des photos en pleine résolution. Le PDF conserve chaque image à sa taille d’origine, même affichée en vignette.
- **Les fichiers modifiés et réenregistrés de nombreuses fois**, qui peuvent contenir des ressources en double.
- **Les polices intégrées** ajoutent un peu de poids, rarement plus d’un ou deux mégaoctets.

C’est pourquoi la compression est très efficace sur les scans et les documents riches en images (souvent 50 à 90 % de gain) et quasi inutile sur un PDF purement textuel, déjà léger.

## Méthode 1 : compresser le PDF dans votre navigateur (tous appareils)

C’est la solution la plus rapide, identique sur Windows, Mac, Chromebook, iPhone et Android.

1. Ouvrez [Compresser PDF](/fr/compresser-pdf) et cliquez sur **Choisir des fichiers**, ou glissez votre PDF sur la page. Vous pouvez en ajouter plusieurs.
2. Choisissez le niveau de **Compression** :
   - **Recommandée — bonne qualité** : le bon choix pour un envoi par mail, les images restent nettes à l’écran.
   - **Forte — fichier le plus léger** : pour les très gros scans ou une limite serrée. Les détails fins des photos sont réduits.
   - **Légère — meilleure qualité** : si le destinataire doit imprimer le document.
3. Cliquez sur **Convertir**. Le PDF compressé se télécharge automatiquement et vous voyez le poids avant/après.

La compression utilise Ghostscript, le moteur open source au cœur de nombreux logiciels PDF professionnels, exécuté directement dans votre navigateur. Le fichier n’est jamais envoyé sur un serveur, ce qui compte pour un bulletin de salaire, un contrat, une pièce d’identité ou un compte rendu médical. La première utilisation télécharge le moteur, ce qui prend quelques secondes ; il reste ensuite en cache. Si le PDF est déjà optimisé et que le résultat ne serait pas plus léger, vous gardez votre original.

**Astuce :** compressez toujours à partir du fichier d’origine. Recompresser un PDF déjà compressé apporte peu et dégrade les images une seconde fois.

## Méthode 2 : les outils déjà installés sur votre ordinateur

### Mac : « Réduire la taille du fichier » dans Aperçu

Ouvrez le PDF dans Aperçu, choisissez **Fichier > Exporter**, puis **Réduire la taille du fichier** dans le menu *Filtre Quartz*. C’est intégré et privé, mais brutal : les scans deviennent souvent difficiles à lire. Vérifiez le résultat avant l’envoi et conservez l’original.

### Windows : pas de compresseur intégré

Windows 10 et 11 savent créer des PDF (Microsoft Print to PDF) mais pas compresser un PDF existant. « Imprimer » un PDF lourd vers un nouveau PDF le réduit parfois un peu, parfois l’alourdit : ce n’est pas une méthode fiable.

### Word et PowerPoint : exporter plus léger dès le départ

Si vous avez créé le PDF vous-même depuis Office, réexportez-le. Dans Word pour Windows, choisissez **Fichier > Enregistrer sous > PDF** puis **Taille minimale (publication en ligne)** au lieu de *Standard*. Dans PowerPoint, utilisez **Compresser les images** avant l’export. Le PDF obtenu est bien plus léger qu’en compressant après coup.

### Scanner avec un smartphone : mieux régler la numérisation

Si le PDF vient de votre téléphone (Notes ou Fichiers sur iPhone, Google Drive sur Android), renumérisez en **niveaux de gris ou noir et blanc** quand la couleur est inutile. Le fichier est plusieurs fois plus léger, et souvent plus lisible.

## Méthode 3 : diviser le PDF et l’envoyer en plusieurs fois

Si un document de 300 pages reste trop lourd après compression, découpez-le. Avec [Diviser PDF](/fr/diviser-pdf), saisissez des plages comme `1-100, 101-200, 201-300` pour obtenir trois fichiers, puis envoyez chacun dans un mail distinct, numéroté (« partie 1 sur 3 »). Pour n’envoyer que les pages utiles, extrayez-les et laissez de côté annexes et pages blanches.

## Méthode 4 : envoyer un lien plutôt qu’une pièce jointe

Pour les très gros fichiers — brochure prête à imprimer, archives scannées, rapport plein de photos —, la compression n’est pas la bonne réponse : vous perdriez la qualité nécessaire. Envoyez un lien :

- **Google Drive** depuis Gmail (automatique au-delà de 25 Mo) ;
- **OneDrive** depuis Outlook (les fichiers liés jusqu’à 2 Go ne comptent pas dans la limite) ;
- **Mail Drop** depuis Mail sur iPhone ou Mac (jusqu’à 5 Go, lien valable 30 jours).

Réglez les droits de partage pour que seul le destinataire puisse ouvrir le fichier, et évitez les liens publics pour les documents sensibles.

## Et WhatsApp, les téléservices et les plateformes en ligne ?

WhatsApp accepte les **documents jusqu’à 2 Go** : la taille y pose rarement problème, mais un PDF de 60 Mo est long à télécharger en 4G et encombre le téléphone du destinataire. Le compresser à quelques mégaoctets reste une politesse.

Les formulaires en ligne (candidatures, démarches administratives, plateformes universitaires, déclarations de sinistre) sont plus stricts : des limites de **2, 5 ou 10 Mo par fichier** sont courantes et rarement négociables. Utilisez alors le niveau *Forte* et, si le scan est en couleur, renumérisez en niveaux de gris.

## Quelle méthode choisir ?

| Votre situation | La meilleure option |
|---|---|
| Document scanné de 20 à 100 Mo | [Compresser PDF](/fr/compresser-pdf), niveau *Recommandée* |
| Téléservice limité à 2-5 Mo | Compression *Forte*, scan en niveaux de gris si besoin |
| PDF exporté depuis Word/PowerPoint | Réexport en taille minimale, puis compression |
| Long document encore trop lourd | [Diviser PDF](/fr/diviser-pdf) en plusieurs parties |
| Fichier qualité impression de plus de 25 Mo | Lien Drive, OneDrive ou Mail Drop |
| Photos à envoyer en un seul PDF | [JPG en PDF](/fr/jpg-en-pdf), puis compression |

## Les vérifications avant d’envoyer

- Ouvrez le PDF compressé et zoomez sur le plus petit texte, ainsi que sur une signature ou un tampon.
- Donnez un nom explicite au fichier (`Facture-2026-09-Dupont.pdf` plutôt que `scan0042.pdf`).
- Si le document est sensible, ajoutez un mot de passe avec [Protéger PDF](/fr/proteger-pdf) et communiquez-le par un autre canal (SMS, appel) : voir notre guide pour [mettre un mot de passe sur un PDF](/fr/blog/mettre-un-mot-de-passe-sur-un-pdf).

Pour aller plus loin sur le poids d’un PDF — polices, résolution des images, ce que « sans perte » veut vraiment dire —, lisez notre guide pour [réduire la taille d’un PDF sans perte de qualité](/fr/blog/reduire-taille-pdf-sans-perte-de-qualite).
