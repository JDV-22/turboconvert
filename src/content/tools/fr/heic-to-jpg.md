---
name: 'HEIC en JPG'
title: 'HEIC en JPG : convertir vos photos iPhone gratuitement'
description: 'Convertissez vos photos HEIC d’iPhone en JPG, une par une ou par lot, gratuitement. Aucun envoi : la conversion se fait dans votre navigateur.'
h1: 'Convertir HEIC en JPG'
lead: 'Transformez les photos HEIC de votre iPhone en JPG lisibles partout : Windows, Android, sites web, imprimeurs. Vos photos restent sur votre appareil, rien n’est envoyé.'
what: 'vos photos HEIC'
howTo: 'convertir HEIC en JPG'
steps:
  - 'Cliquez sur <strong>Choisir des fichiers</strong> ou glissez vos photos HEIC (ou HEIF) dans le cadre. Vous pouvez en sélectionner des dizaines d’un coup.'
  - 'Ajustez la <strong>Qualité</strong> si besoin : 92 % par défaut, visuellement identique à l’original, ou 80–85 % pour des fichiers plus légers.'
  - 'Cliquez sur <strong>Convertir</strong>, puis sur <strong>Télécharger</strong> pour chaque photo, ou sur <strong>Tout télécharger (ZIP)</strong> pour récupérer tout le lot.'
limits:
  - 'La première conversion charge le décodeur HEIC (environ 1,5 Mo), ensuite mis en cache par votre navigateur.'
  - 'Les métadonnées EXIF (date de prise de vue, position GPS, modèle d’appareil) ne sont pas recopiées dans le JPG. C’est utile pour partager sans révéler où la photo a été prise, mais à savoir si vous classez vos photos par date.'
  - 'Seule l’image fixe est convertie : la petite vidéo d’une Live Photo est un fichier séparé et n’est pas concernée.'
  - 'Taille maximale : 100 Mo par fichier. Sur un téléphone ancien, convertissez les gros lots en plusieurs fois.'
faq:
  - q: 'Pourquoi mon iPhone enregistre-t-il les photos en HEIC ?'
    a: 'Depuis iOS 11, l’iPhone utilise par défaut le format HEIC, nettement plus léger que le JPG à qualité comparable. Le revers : Windows, beaucoup de sites et de logiciels ne l’ouvrent pas sans module supplémentaire.'
  - q: 'Comment ouvrir un fichier HEIC sur Windows ?'
    a: 'Windows 10 et 11 ont besoin de l’extension « Extensions d’image HEIF » du Microsoft Store pour afficher ces photos. Si vous devez les envoyer ou les publier, le plus simple reste de les convertir en JPG ici, sans rien installer.'
  - q: 'Comment faire pour que mon iPhone prenne directement des photos en JPG ?'
    a: 'Allez dans Réglages > Appareil photo > Formats et choisissez « Le plus compatible ». Pour les photos déjà prises, Réglages > Photos > Transférer sur Mac ou PC > « Automatique » les convertit en JPG lors d’un transfert par câble.'
  - q: 'Est-ce que je perds de la qualité en passant de HEIC à JPG ?'
    a: 'Le JPG est un format avec perte, mais à 92 % la différence est invisible à l’œil nu et la définition (en pixels) reste identique. Le JPG obtenu est souvent plus lourd que le HEIC d’origine : c’est normal, le HEIC compresse mieux.'
  - q: 'Mes photos sont-elles envoyées sur un serveur ?'
    a: 'Non. Le décodage HEIC tourne dans votre navigateur grâce à WebAssembly. Vos photos de famille, papiers d’identité ou captures privées ne quittent jamais votre appareil.'
  - q: 'Puis-je convertir mes HEIC en PNG ou en PDF ?'
    a: 'Oui : utilisez <a href="/fr/heic-en-png">HEIC en PNG</a> pour un format sans perte, ou <a href="/fr/jpg-en-pdf">JPG en PDF</a>, qui accepte aussi directement les photos HEIC, pour réunir plusieurs photos dans un seul PDF.'
---

## HEIC : le format photo de l’iPhone, et pourquoi il pose problème

Le **HEIC** (High Efficiency Image Container) est la variante Apple du format HEIF. Il repose sur la même technologie de compression que la vidéo HEVC (H.265) et permet de stocker une photo de bonne qualité dans un fichier bien plus léger qu’un JPG. Sur un iPhone dont la mémoire se remplit vite, la différence compte.

Le problème apparaît dès que la photo quitte l’écosystème Apple :

- **Windows** n’affiche pas les HEIC sans l’extension HEIF du Microsoft Store ;
- de nombreux **formulaires en ligne** (administrations, candidatures, sites d’annonces) n’acceptent que JPG ou PNG ;
- les **laboratoires photo** et services d’impression demandent presque toujours du JPG ;
- certains **logiciels de retouche** ou de mise en page plus anciens refusent le fichier.

Convertir en JPG règle la question une fois pour toutes : le JPG s’ouvre sur tous les appareils, sans exception.

## HEIC, JPG ou PNG : que choisir ?

| | HEIC | JPG | PNG |
|---|---|---|---|
| Compression | Avec perte, très efficace | Avec perte, réglable | Sans perte |
| Poids d’une photo d’iPhone | Le plus léger | Moyen | Très lourd |
| Compatibilité | Apple, Android récents | Universelle | Universelle |
| Idéal pour | Stocker sur l’iPhone | Partager, imprimer, publier | Retoucher sans perte |

Dans la grande majorité des cas, **le JPG est le bon choix**. Le [PNG](/fr/heic-en-png) n’a d’intérêt que si vous comptez retoucher l’image plusieurs fois sans dégradation, au prix de fichiers beaucoup plus lourds.

## Convertir sans installer de logiciel ni envoyer vos photos

La plupart des convertisseurs HEIC en ligne téléversent vos photos sur leurs serveurs. Or les photos d’un téléphone sont souvent personnelles : enfants, pièces d’identité, documents scannés, captures de conversations. Ici, le décodeur HEIC est chargé dans votre navigateur et la conversion se fait sur votre ordinateur ou votre téléphone. Aucune photo n’est transmise ; vous pouvez le vérifier dans l’onglet *Réseau* des outils de développement.

Autre avantage pour la vie privée : le JPG produit ne contient pas les données EXIF de l’original, en particulier la **position GPS** enregistrée par l’iPhone.

## Choisir la bonne qualité

- **92 % (par défaut)** : impossible à distinguer de l’original, idéal pour l’impression et l’archivage.
- **80–85 %** : parfait pour l’e-mail, les réseaux sociaux et les sites web, avec des fichiers nettement plus légers.
- **En dessous de 70 %** : des artefacts apparaissent dans les dégradés (ciel, peau) ; à réserver aux cas où le poids compte plus que tout.

Votre JPG est encore trop lourd pour un formulaire limité à 1 ou 2 Mo ? Passez-le dans [Compresser une image](/fr/compresser-image) ou réduisez ses dimensions avec [Redimensionner une image](/fr/redimensionner-image) : une photo de 12 mégapixels ramenée à 2000 px de large reste très nette sur un écran.

## Depuis quel appareil convertir ?

- **Sur PC Windows** : copiez les photos de l’iPhone (câble, iCloud.com, Google Photos, clé USB), puis glissez-les dans le cadre. Aucune extension à installer.
- **Directement sur iPhone** : ouvrez cette page dans Safari, touchez **Choisir des fichiers**, puis « Photothèque » ou « Choisir un fichier ». Les JPG obtenus s’enregistrent dans l’app Fichiers, d’où vous pouvez les partager.
- **Sur Mac** : l’app Aperçu sait déjà exporter en JPG, mais une photo à la fois. Ici, vous convertissez un dossier entier d’un seul geste.
- **Sur Android** : si l’on vous a envoyé des photos HEIC par e-mail ou messagerie et qu’elles ne s’affichent pas, téléchargez-les puis convertissez-les ici.

## Problèmes fréquents

- **« Fichier non pris en charge »** : vérifiez l’extension. Les vidéos de l’iPhone (.MOV) ne sont pas des photos ; pour elles, utilisez [MOV en MP4](/fr/mov-en-mp4).
- **Photos déjà en JPG après transfert** : si le réglage de transfert est sur « Automatique », iOS convertit déjà les photos lors de la copie par câble. Vérifiez l’extension avant de convertir.
- **Conversion lente sur mobile** : chaque photo de 12 à 48 mégapixels demande beaucoup de mémoire. Sur un téléphone, traitez des lots de quelques dizaines de photos plutôt que plusieurs centaines d’un coup.
