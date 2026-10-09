---
name: 'Fusionner PDF'
title: 'Fusionner PDF gratuitement, sans envoi | TurboConvert'
description: 'Fusionnez plusieurs PDF en un seul fichier, dans l’ordre de votre choix. Gratuit, dans votre navigateur : aucun envoi, sans inscription ni filigrane.'
h1: 'Fusionner des fichiers PDF'
lead: 'Combinez plusieurs PDF en un seul document, dans l’ordre que vous choisissez. Tout se passe dans votre navigateur : vos fichiers ne sont jamais envoyés.'
what: 'vos PDF'
howTo: 'fusionner des fichiers PDF'
steps:
  - 'Cliquez sur <strong>Choisir des fichiers</strong> ou glissez au moins deux PDF dans le cadre (jusqu’à 200 Mo par fichier). Vous pouvez en ajouter d’autres ensuite avec <strong>Ajouter des fichiers</strong>.'
  - 'Mettez les fichiers dans l’ordre voulu avec les flèches <strong>Monter</strong> et <strong>Descendre</strong> : le premier de la liste sera au début du PDF final.'
  - 'Cliquez sur <strong>Convertir</strong>. Le PDF fusionné se télécharge automatiquement sous le nom <code>merged.pdf</code>.'
limits:
  - 'Les PDF protégés par un mot de passe doivent d’abord être déverrouillés avec <a href="/fr/deverrouiller-pdf">Déverrouiller PDF</a>.'
  - 'Les signets (sommaire latéral) des fichiers d’origine ne sont pas repris ; les pages, le texte, les images et les liens à l’intérieur des pages sont conservés tels quels.'
  - 'Pour de très gros assemblages (plusieurs centaines de Mo), tout dépend de la mémoire de votre appareil. Sur téléphone, restez de préférence sous 200 Mo au total.'
faq:
  - q: 'Comment fusionner plusieurs PDF en un seul ?'
    a: 'Déposez vos PDF ci-dessus, classez-les avec les flèches puis cliquez sur Convertir. Vous obtenez un seul fichier qui contient toutes les pages, dans l’ordre choisi.'
  - q: 'Est-ce vraiment gratuit et sans inscription ?'
    a: 'Oui. Pas de compte, pas de limite de fichiers par jour et aucun filigrane ajouté. L’outil fonctionne dans votre navigateur, il n’y a pas de serveur à financer pour traiter vos documents.'
  - q: 'La fusion réduit-elle la qualité de mes PDF ?'
    a: 'Non. Les pages sont copiées telles quelles : le texte reste sélectionnable et les images ne sont pas recompressées. Pour un fichier plus léger, passez ensuite le résultat dans <a href="/fr/compresser-pdf">Compresser PDF</a>.'
  - q: 'Peut-on fusionner seulement certaines pages ?'
    a: 'Extrayez d’abord les pages utiles avec <a href="/fr/diviser-pdf">Diviser PDF</a>, puis fusionnez les extraits. Pour réordonner ou supprimer des pages après la fusion, utilisez <a href="/fr/organiser-pdf">Organiser PDF</a>.'
  - q: 'Puis-je fusionner des PDF avec des photos ou des scans JPG ?'
    a: 'Convertissez d’abord vos images en PDF avec <a href="/fr/jpg-en-pdf">JPG en PDF</a>, puis fusionnez ce PDF avec vos autres documents.'
  - q: 'Ça fonctionne sur iPhone et Android ?'
    a: 'Oui, dans Safari, Chrome, Firefox ou Edge. Sélectionnez vos PDF depuis l’app Fichiers, Google Drive ou vos téléchargements : le fichier fusionné est enregistré sur votre téléphone.'
---

## Quand faut-il fusionner des PDF ?

Beaucoup de démarches demandent **un seul fichier** là où vous avez plusieurs documents séparés. Quelques cas très courants :

- **Dossier de location** : pièce d’identité, trois derniers bulletins de salaire, avis d’imposition et justificatif de domicile, souvent à envoyer en une seule pièce jointe.
- **Candidature** : CV, lettre de motivation, diplômes et lettres de recommandation réunis dans un même PDF.
- **Comptabilité et notes de frais** : toutes les factures du mois dans un seul document, plus simple à transmettre et à archiver.
- **Scans page par page** : quand un scanner ou une application crée un PDF par page, la fusion reconstitue le document complet.

## Ce qui est conservé lors de la fusion

TurboConvert copie chaque page à l’identique dans un nouveau PDF, avec la bibliothèque open source pdf-lib :

| Élément | Après fusion |
|---|---|
| Texte | Toujours sélectionnable et consultable par recherche |
| Images et scans | Résolution d’origine, sans recompression |
| Format et orientation | Conservés : vous pouvez mélanger A4, Letter et pages en paysage |
| Liens dans les pages | Toujours actifs |
| Signets du sommaire | Non repris |

La fusion n’ajoute aucun filigrane et ne modifie pas le contenu des pages : le PDF obtenu est simplement la suite de vos documents.

## Bien préparer ses fichiers

- **Nommez vos fichiers dans l’ordre** avant de les sélectionner, par exemple `01-identite.pdf`, `02-bulletins.pdf`, `03-avis-imposition.pdf` : ils apparaîtront dans le bon ordre et vous n’aurez rien à déplacer.
- **Une page à l’envers ?** Après la fusion, redressez-la avec [Pivoter PDF](/fr/pivoter-pdf), ou ouvrez [Organiser PDF](/fr/organiser-pdf) pour tourner, déplacer ou supprimer des pages précises.
- **Fichier final trop lourd** pour un e-mail ou un portail en ligne ? Fusionnez d’abord, puis compressez une seule fois le résultat avec [Compresser PDF](/fr/compresser-pdf). C’est plus efficace que de compresser chaque fichier séparément.
- **Besoin d’une pagination continue** sur l’ensemble ? Ajoutez-la après coup avec [Numéroter PDF](/fr/numeroter-pdf).

## Fusionner des PDF sans les confier à un site

La plupart des sites qui permettent de fusionner des PDF en ligne envoient vos fichiers sur leurs serveurs, les assemblent à distance et vous demandent de leur faire confiance pour la suppression. TurboConvert fonctionne autrement : le code de fusion est chargé dans votre navigateur et s’exécute sur votre appareil. Vos documents ne sont transmis à personne — vous pouvez le vérifier dans l’onglet *Réseau* des outils de développement.

Pour un dossier de location ou une candidature, qui réunit justement vos papiers les plus personnels, c’est une différence qui compte.

## Problèmes fréquents et solutions

| Ce que vous voyez | Cause | Solution |
|---|---|---|
| « Ajoutez au moins 2 fichiers. » | Un seul PDF dans la liste | Ajoutez un autre PDF avec Ajouter des fichiers |
| « Ce PDF est protégé par mot de passe » | Un des fichiers est chiffré | Retirez la protection avec [Déverrouiller PDF](/fr/deverrouiller-pdf), puis recommencez |
| Le fichier fusionné est trop lourd | Scans ou photos en haute résolution | Compressez le résultat avec [Compresser PDF](/fr/compresser-pdf) |
| Les pages ne sont pas dans le bon ordre | Ordre de la liste au moment de la fusion | Réordonnez avec les flèches, ou corrigez après coup avec Organiser PDF |

## Sur Mac, Windows, iPhone ou Android

Pas besoin d’installer de logiciel : la fusion fonctionne dans n’importe quel navigateur récent. Sur Mac, l’application Aperçu permet aussi d’assembler des PDF, mais la manipulation des miniatures est moins intuitive ; Windows, lui, ne propose pas d’outil intégré pour fusionner des PDF. Sur téléphone, sélectionnez vos fichiers depuis l’app Fichiers ou Google Drive : le PDF fusionné est enregistré dans vos téléchargements, prêt à être envoyé.

## Combien de fichiers peut-on fusionner ?

Il n’y a pas de nombre maximal de fichiers. La seule limite pratique est la mémoire de votre appareil : un ordinateur assemble sans difficulté des centaines de pages, un téléphone récent gère confortablement des dossiers de plusieurs dizaines de Mo. Chaque fichier peut peser jusqu’à 200 Mo.
