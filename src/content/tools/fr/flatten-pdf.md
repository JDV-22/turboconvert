---
name: 'Aplatir un PDF'
title: 'Aplatir un PDF en ligne gratuit : figer les champs'
description: 'Aplatissez un formulaire PDF rempli pour que ses réponses deviennent du contenu fixe, non modifiable. Gratuit, par lot, dans votre navigateur, sans envoi.'
h1: 'Aplatir un formulaire PDF'
lead: 'Transformez les champs d’un formulaire PDF rempli en contenu ordinaire de la page : les réponses s’affichent et s’impriment partout de la même façon et ne peuvent plus être modifiées. Rien n’est envoyé.'
what: 'votre PDF'
howTo: 'aplatir un PDF'
steps:
  - 'Cliquez sur <strong>Choisir des fichiers</strong> ou glissez un ou plusieurs PDF dans le cadre.'
  - 'Cliquez sur <strong>Convertir</strong>. Chaque PDF aplati se télécharge avec « -flattened » ajouté à son nom.'
  - 'Ouvrez-le pour vérifier : les champs ont disparu et leurs valeurs font désormais partie de la page.'
limits:
  - 'L’aplatissement est définitif : gardez l’original si vous pourriez devoir changer une réponse.'
  - 'Seuls les champs de formulaire sont aplatis. Les commentaires et autres annotations restent tels quels.'
  - 'L’aplatissement fige les réponses, mais n’importe qui peut encore ajouter du contenu par-dessus avec un éditeur PDF. Pour limiter les modifications, <a href="/fr/proteger-pdf">protégez aussi le PDF</a>.'
  - 'Les PDF protégés par mot de passe doivent d’abord être déverrouillés. Les formulaires dynamiques XFA ne sont pas pris en charge.'
faq:
  - q: 'Que fait l’aplatissement d’un PDF ?'
    a: 'Il convertit les champs interactifs (zones de texte, cases à cocher, listes déroulantes) en contenu ordinaire de la page. Les valeurs saisies restent visibles exactement au même endroit, mais il n’y a plus de champ à cliquer ou à modifier.'
  - q: 'Pourquoi aplatir un formulaire avant de l’envoyer ?'
    a: 'Certains portails et imprimantes n’affichent pas correctement les valeurs des champs, et un formulaire remplissable peut être modifié par le destinataire. Un formulaire aplati s’affiche de la même façon partout et ses réponses ne peuvent pas être changées par erreur.'
  - q: 'Mon PDF aura-t-il un aspect différent ?'
    a: 'Non. Les valeurs sont dessinées là où elles s’affichaient. Seuls disparaissent les surlignages bleus ou les bordures de champs que certains lecteurs ajoutent.'
  - q: 'Mon PDF est-il envoyé ?'
    a: 'Non. L’aplatissement se fait dans votre navigateur avec la bibliothèque open source pdf-lib : vos documents restent sur votre appareil.'
---

## Quand aplatir un PDF ?

- **Avant d’envoyer un formulaire rempli** (déclaration, candidature, dossier de location), pour que les valeurs s’affichent à l’identique chez le destinataire et ne puissent pas être modifiées.
- **Avant d’imprimer**, quand un pilote d’imprimante ou un lecteur ignore les valeurs des champs.
- **Avant de fusionner** plusieurs formulaires remplis en un seul fichier, pour éviter les conflits de noms de champs.

Le formulaire n’est pas encore rempli ? Utilisez [Remplir un formulaire PDF](/fr/remplir-formulaire-pdf), puis aplatissez le résultat ici. Pour ajouter une signature, utilisez [Signer un PDF](/fr/signer-pdf).

## Confidentiel par conception

L’aplatissement se fait dans l’onglet de votre navigateur : le PDF est lu depuis votre disque, ses champs sont convertis et le nouveau fichier est écrit dans vos téléchargements. Rien n’est envoyé à un serveur.
