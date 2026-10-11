---
name: 'Remplir un formulaire PDF'
title: 'Remplir un formulaire PDF en ligne gratuit, sans envoi'
description: 'Remplissez un formulaire PDF gratuitement dans le navigateur : tapez dans les champs ou écrivez sur un formulaire sans champs. Cochez, datez, signez.'
h1: 'Remplir un formulaire PDF'
lead: 'Tapez dans les champs d’un formulaire PDF remplissable, ou écrivez directement sur un formulaire sans champs, puis cochez, datez et signez. Le formulaire est rempli dans votre navigateur et n’est jamais envoyé.'
what: 'votre formulaire PDF'
howTo: 'remplir un formulaire PDF'
steps:
  - 'Cliquez sur <strong>Choisir un fichier</strong> ou glissez le formulaire PDF dans le cadre.'
  - 'Si le formulaire a des champs remplissables, ils s’affichent en bleu : cliquez et tapez. Sinon, choisissez <strong>Texte</strong> et cliquez là où vous voulez écrire ; utilisez <strong>Coche</strong>, <strong>Croix</strong> et <strong>Date</strong> pour les cases et les dates.'
  - 'Ajoutez votre <strong>Signature</strong> si le formulaire en demande une, puis cliquez sur <strong>Enregistrer le PDF</strong>. Le PDF rempli se télécharge avec « -filled » ajouté à son nom.'
limits:
  - 'Les champs sont remplis en Helvetica, qui couvre les langues d’Europe de l’Ouest. Les autres alphabets ne sont pas encore pris en charge.'
  - 'Les formulaires dynamiques XFA (certains formulaires administratifs qui ne s’ouvrent que dans Adobe Reader) ne sont pas pris en charge. Leurs pages affichent « Veuillez patienter… » ou un message similaire au lieu du formulaire.'
  - 'Les champs remplis restent modifiables dans le PDF téléchargé. Pour les figer, passez le fichier dans Aplatir un PDF.'
  - 'PDF jusqu’à 100 Mo. Les formulaires protégés par mot de passe doivent d’abord être déverrouillés.'
faq:
  - q: 'Comment savoir si mon formulaire PDF est remplissable ?'
    a: 'Ouvrez-le ici. Les champs remplissables sont détectés automatiquement et affichés en bleu, et leur nombre s’affiche au-dessus des pages. S’il n’y en a aucun, le formulaire est un document « plat » : utilisez Texte pour écrire dessus.'
  - q: 'Peut-on remplir un formulaire scanné ?'
    a: 'Oui. Un formulaire scanné n’a pas de champs : utilisez Texte pour cliquer et taper sur chaque ligne, et Coche ou Croix pour les cases. Ajustez la taille avec les boutons A− et A+ pour que le texte tienne sur les lignes.'
  - q: 'Le destinataire verra-t-il mes réponses ?'
    a: 'Oui. Les valeurs sont écrites dans les champs du formulaire eux-mêmes : elles s’affichent dans tous les lecteurs PDF, s’impriment correctement et peuvent être lues par les systèmes qui traitent le formulaire.'
  - q: 'Peut-on enregistrer et finir plus tard ?'
    a: 'Téléchargez le PDF quand vous vous arrêtez, puis rouvrez plus tard le fichier téléchargé ici : les valeurs déjà saisies sont conservées et vous pouvez continuer.'
  - q: 'Mon formulaire est-il envoyé ?'
    a: 'Non. Les formulaires contiennent souvent des données personnelles (numéro fiscal, adresse, RIB) : cet outil fonctionne donc entièrement dans votre navigateur. Rien n’est envoyé à un serveur.'
---

## Deux types de formulaires PDF

**Les formulaires remplissables** (dits AcroForms) contiennent de vrais champs : zones de texte, cases à cocher, boutons radio et listes déroulantes. Cette page les détecte automatiquement et les affiche en bleu : cliquez dans un champ et tapez, cochez les cases, choisissez les options. Les valeurs sont enregistrées dans les champs, exactement comme le ferait Adobe Reader.

**Les formulaires plats** ne sont que des pages avec des lignes et des cases : formulaires papier scannés, ou PDF exportés depuis Word sans champs. Rien à détecter, mais vous pouvez quand même les remplir : choisissez **Texte**, cliquez au début d’une ligne et tapez. Utilisez **Coche** ou **Croix** pour les cases et **Date** pour insérer la date du jour.

Les deux méthodes peuvent se combiner sur un même document, et vous pouvez **signer** le formulaire avant de le télécharger.

## Astuces pour un résultat propre

- **Texte trop grand pour la ligne ?** Sélectionnez-le et utilisez **A−** jusqu’à ce qu’il tienne. La taille est conservée pour le texte suivant.
- **Déplacez un texte** en le faisant glisser ; **modifiez-le** en cliquant deux fois dessus.
- **Une erreur sur un formulaire plat ?** Masquez-la avec l’**Effaceur blanc** et réécrivez.
- **Envoi par e-mail ?** Si le fichier est trop lourd, [compressez-le](/fr/compresser-pdf) après l’avoir rempli.
- **Figer les réponses ?** Passez le PDF rempli dans [Aplatir un PDF](/fr/aplatir-pdf) : les champs ne pourront plus être modifiés.

## Vos données restent sur votre appareil

Formulaires administratifs et fiscaux, candidatures, questionnaires médicaux, dossiers de location : tous regorgent d’informations personnelles. Au lieu de les envoyer à un service en ligne, cette page remplit le formulaire dans votre navigateur avec des bibliothèques open source (PDF.js pour l’afficher, pdf-lib pour l’écrire). Rien n’est envoyé, stocké ni enregistré.

## Outils associés

- Seulement besoin de signer ? Utilisez [Signer un PDF](/fr/signer-pdf).
- Ajoutez du texte, des images ou du surlignage à n’importe quel PDF avec [Modifier un PDF](/fr/modifier-pdf).
- Formulaire réparti sur plusieurs fichiers ? [Fusionnez-les](/fr/fusionner-pdf) d’abord.
