---
title: 'Mettre un mot de passe sur un PDF gratuitement (PC, Mac, mobile)'
description: 'Protégez un PDF par mot de passe avec Aperçu, Word, LibreOffice ou un outil gratuit dans le navigateur. Ouverture ou restrictions, AES-256, partage sûr.'
h1: 'Comment mettre un mot de passe sur un PDF gratuitement'
permalink: mettre-un-mot-de-passe-sur-un-pdf
published: 2026-10-09
updated: 2026-10-09
tool: protect-pdf
category: pdf
faq:
  - q: 'Comment protéger un PDF par mot de passe sans Adobe Acrobat ?'
    a: 'Sur Mac, avec Aperçu (Fichier > Exporter > Autorisations). Sur Windows, en exportant depuis Word avec l’option « Chiffrer le document avec un mot de passe », avec l’export PDF de LibreOffice, ou avec un outil dans le navigateur comme <a href="/fr/proteger-pdf">Protéger PDF</a>, qui chiffre le fichier localement en AES-256.'
  - q: 'Un PDF protégé par mot de passe peut-il être cracké ?'
    a: 'Un PDF chiffré en AES-256 avec un mot de passe long et unique n’est pas cassable en pratique. Les mots de passe courts ou courants peuvent être devinés par force brute, et l’ancien chiffrement RC4 est faible. Un mot de passe de restrictions seul protège très peu.'
  - q: 'Comment enlever le mot de passe d’un PDF ?'
    a: 'Si vous le connaissez, ouvrez le PDF et enregistrez une copie non protégée, ou utilisez <a href="/fr/deverrouiller-pdf">Déverrouiller PDF</a>. Si vous avez perdu le mot de passe d’ouverture, aucun outil légitime ne peut simplement le retirer : demandez une copie non protégée à l’expéditeur.'
  - q: 'Le destinataire a-t-il besoin d’un logiciel particulier ?'
    a: 'Non. Tous les lecteurs PDF courants — Adobe Reader, Aperçu, Edge, Chrome, les visionneuses iPhone et Android — demandent le mot de passe et ouvrent le fichier normalement.'
  - q: 'Est-il prudent d’utiliser un outil en ligne pour protéger un PDF ?'
    a: 'Avec un outil qui traite sur serveur, le fichier non chiffré et souvent le mot de passe sont envoyés à un tiers, ce qui contredit en partie l’objectif. Un outil qui travaille dans le navigateur sans rien téléverser, comme celui de TurboConvert, garde les deux sur votre appareil.'
---

Vous envoyez une fiche de paie, un avis d’imposition, un compte rendu médical ou un contrat signé ? Un mot de passe transforme un PDF que n’importe qui pourrait ouvrir en un fichier lisible par le seul destinataire, même si le mail est transféré, l’ordinateur perdu ou le fichier oublié dans un dossier partagé. Pas besoin d’un abonnement Acrobat : chaque ordinateur sait le faire gratuitement. Voici comment, et ce que protègent réellement les différents types de mots de passe PDF.

## Deux types de mots de passe PDF

La sécurité PDF repose sur deux mots de passe distincts, et les confondre est l’erreur la plus fréquente :

| | Mot de passe d’ouverture (« utilisateur ») | Mot de passe d’autorisations (« propriétaire ») |
|---|---|---|
| Effet | Impossible d’ouvrir ou de lire le fichier sans lui | Restreint impression, copie ou modification dans les lecteurs qui respectent la règle |
| Chiffrement | Contenu chiffré | Contenu chiffré mais lisible sans mot de passe |
| Protection réelle | **Forte**, avec AES-256 et un bon mot de passe | **Faible** : beaucoup d’outils ignorent ou suppriment les restrictions |
| À utiliser pour | Documents confidentiels | Décourager la copie ou la modification occasionnelle |

Pour la confidentialité, il vous faut un **mot de passe d’ouverture**. Les restrictions seules relèvent de la courtoisie, pas du verrou.

## Le chiffrement : visez l’AES-256

Le chiffrement des PDF a évolué. L’ancien RC4 (40 ou 128 bits) se casse rapidement avec des outils gratuits. Les PDF modernes utilisent l’**AES-256**, qui, associé à un mot de passe long, résiste à toute attaque par force brute dans un délai réaliste. La plupart des outils actuels utilisent l’AES par défaut ; si vous voyez une option « compatibilité Acrobat 5 » ou RC4, évitez-la.

Le maillon faible est presque toujours le mot de passe lui-même. `Dupont2026` tombe en quelques minutes face à une attaque par dictionnaire ; `riviere-planete-sept-lanterne`, non.

## Méthode 1 : dans le navigateur, sur tous les appareils

[Protéger PDF](/fr/proteger-pdf) chiffre le fichier en AES-256 directement dans votre navigateur : ni le document ni le mot de passe ne sont envoyés.

1. Ouvrez [Protéger PDF](/fr/proteger-pdf) et cliquez sur **Choisir un fichier** (PDF jusqu’à 200 Mo).
2. Saisissez un **Mot de passe** : une phrase de passe de quatre mots ou plus pris au hasard, ou une chaîne générée par un gestionnaire de mots de passe.
3. Cliquez sur **Convertir** : le PDF chiffré se télécharge automatiquement.
4. Ouvrez le fichier téléchargé pour vérifier qu’il demande bien le mot de passe avant de l’envoyer.

La méthode est identique sur Windows, Mac, Chromebook, iPhone et Android, ce qui est précieux sur mobile, où il n’existe pas d’option intégrée.

## Méthode 2 : sur Mac, avec Aperçu

Aperçu propose un vrai chiffrement :

1. Ouvrez le PDF dans Aperçu et choisissez **Fichier > Exporter**.
2. Donnez un autre nom à la copie si vous voulez conserver un original non protégé.
3. Cliquez sur **Autorisations**, cochez l’option exigeant un mot de passe pour ouvrir le document, puis saisissez-le deux fois.
4. Facultatif : définissez un mot de passe propriétaire et choisissez ce qui reste permis sans lui (impression, copie, modification).
5. Cliquez sur **Appliquer**, puis **Enregistrer**.

Pour changer le mot de passe plus tard, ouvrez le fichier, saisissez le mot de passe et utilisez **Fichier > Modifier les autorisations**.

## Méthode 3 : sur Windows, depuis Word

Windows ne sait pas chiffrer un PDF existant, mais si votre document part de Word, vous pouvez le chiffrer à l’export :

1. Dans Word pour Windows, choisissez **Fichier > Enregistrer sous** (ou *Enregistrer une copie*) et le type **PDF**.
2. Cliquez sur **Options**, cochez **Chiffrer le document avec un mot de passe** et validez.
3. Saisissez deux fois le mot de passe et enregistrez.

Pour un PDF reçu (et non créé dans Word), utilisez plutôt un outil dans le navigateur ou LibreOffice : ouvrir un PDF dans Word le convertit, et la mise en page peut bouger.

## Méthode 4 : LibreOffice (gratuit, Windows, Mac, Linux)

LibreOffice chiffre tout ce qu’il exporte en PDF : **Fichier > Exporter au format PDF**, onglet **Sécurité**, puis **Définir les mots de passe**. Vous pouvez définir un mot de passe d’ouverture et un mot de passe d’autorisations. Idéal pour les documents rédigés dans Writer ou Calc ; pour un PDF existant, LibreOffice l’ouvre dans Draw, ce qui peut altérer les mises en page complexes.

## iPhone et Android

Ni iOS ni Android ne proposent d’option système pour chiffrer un PDF existant. La solution gratuite la plus simple : ouvrir [Protéger PDF](/fr/proteger-pdf) dans Safari ou Chrome, choisir le fichier dans Fichiers ou Google Drive, puis télécharger la copie chiffrée.

## Comment transmettre le mot de passe en sécurité

Le chiffrement ne sert à rien si le mot de passe voyage avec le fichier :

- **Ne mettez jamais le mot de passe dans le même mail** que la pièce jointe. Envoyez-le par SMS, par téléphone ou par messagerie.
- **Convenez d’un mot de passe à l’avance** pour les échanges réguliers (expert-comptable, avocat) et rangez-le dans un gestionnaire de mots de passe.
- **Utilisez un mot de passe différent par destinataire** pour les documents sensibles.
- **Ne réutilisez pas** le mot de passe de votre messagerie ou de votre banque.

## Retirer ou changer un mot de passe

Si vous connaissez le mot de passe et voulez une copie non protégée — par exemple pour fusionner, compresser ou modifier le fichier —, utilisez [Déverrouiller PDF](/fr/deverrouiller-pdf) : saisissez le **Mot de passe actuel** et téléchargez la copie déchiffrée. L’outil retire aussi les mots de passe de restrictions seules. Il ne **cracke pas** les mots de passe inconnus, et aucun outil légitime ne le fait pour un AES-256 avec un mot de passe solide. En cas de perte, demandez une nouvelle copie à l’expéditeur.

La plupart des outils, y compris la compression et la fusion, ont besoin d’un fichier déverrouillé. L’ordre logique est donc : **fusionner → compresser → protéger**, la protection en dernier.

## D’autres façons de protéger un document

| Situation | Meilleure option |
|---|---|
| Envoyer un PDF confidentiel par mail | Mot de passe d’ouverture en AES-256 |
| Éviter les retouches d’un formulaire ou d’une brochure | Mot de passe d’autorisations (sans trop compter dessus) |
| Prouver qu’un document n’a pas été modifié | Signature électronique avec certificat |
| Marquer une copie « Brouillon » ou « Copie pour X » | Filigrane visible avec [Filigrane PDF](/fr/filigrane-pdf) |
| Partager de nombreux fichiers avec une équipe | Un dossier cloud à accès contrôlé |

Filigrane et mot de passe se combinent bien : le filigrane identifie la copie (pratique pour une pièce d’identité envoyée à une agence), le mot de passe empêche les inconnus de la lire.

## Les erreurs à éviter

- **Ne protéger qu’avec des restrictions.** Un fichier doté d’un mot de passe d’autorisations mais sans mot de passe d’ouverture est lisible par tous, et les restrictions se retirent facilement.
- **Perdre le mot de passe.** Rangez-le dans un gestionnaire. Si la seule copie d’un document est chiffrée et que le mot de passe a disparu, le contenu est en pratique perdu.
- **Chiffrer avant de finir le document.** La plupart des outils ne savent ni fusionner ni compresser un PDF chiffré. Finalisez, puis protégez.
- **Croire que le mot de passe cache le nom du fichier.** Le nom et la taille restent visibles : n’y mettez pas d’informations sensibles comme le nom complet d’un patient et son diagnostic.

## En résumé

1. Pour la confidentialité, un **mot de passe d’ouverture**, pas seulement des restrictions.
2. Un chiffrement **AES-256**.
3. Une **phrase de passe longue**, transmise par un autre canal.
4. La protection **en dernier**, après fusion et compression.
5. Un original non protégé conservé en lieu sûr, au cas où le mot de passe serait perdu.

Vous préparez un dossier complet ? Voyez aussi nos guides pour [fusionner des PDF sur Mac](/fr/blog/fusionner-pdf-sur-mac) et [réduire un PDF pour l’envoyer par mail](/fr/blog/reduire-taille-pdf-pour-mail).
