---
name: 'Protéger PDF'
title: 'Protéger un PDF par mot de passe (AES-256) | TurboConvert'
description: 'Ajoutez un mot de passe à votre PDF avec un chiffrement AES-256. Gratuit et dans votre navigateur : ni le fichier ni le mot de passe ne sont envoyés.'
h1: 'Protéger un PDF par mot de passe'
lead: 'Chiffrez votre PDF pour qu’il ne s’ouvre qu’avec le mot de passe choisi. Le chiffrement a lieu sur votre appareil : ni le document ni le mot de passe ne quittent votre navigateur.'
what: 'votre PDF'
howTo: 'protéger un PDF par mot de passe'
steps:
  - 'Cliquez sur <strong>Choisir un fichier</strong> ou glissez votre PDF dans le cadre (jusqu’à 200 Mo).'
  - 'Saisissez un <strong>Mot de passe</strong> robuste : au moins 12 caractères, idéalement une phrase de plusieurs mots.'
  - 'Cliquez sur <strong>Convertir</strong> : le PDF chiffré se télécharge automatiquement.'
  - 'Ouvrez-le pour vérifier que le mot de passe est bien demandé, et conservez ce dernier en lieu sûr.'
limits:
  - 'Un mot de passe oublié ne peut pas être récupéré, ni par TurboConvert ni par personne : gardez-le dans un gestionnaire de mots de passe.'
  - 'Le PDF d’origine reste non protégé sur votre appareil : supprimez-le si nécessaire.'
  - 'Un fichier à la fois.'
faq:
  - q: 'Comment mettre un mot de passe sur un PDF ?'
    a: 'Déposez votre PDF, tapez le mot de passe dans le champ prévu et cliquez sur Convertir. Le fichier téléchargé demandera ce mot de passe à chaque ouverture, dans n’importe quel lecteur PDF.'
  - q: 'Le chiffrement est-il vraiment sûr ?'
    a: 'Le PDF est chiffré en AES-256, l’algorithme standard le plus robuste prévu par le format PDF. La sécurité dépend surtout de votre mot de passe : un mot de passe court ou courant peut être deviné, une longue phrase ne le sera pas en pratique.'
  - q: 'Comment transmettre le mot de passe au destinataire ?'
    a: 'Par un autre canal que le fichier : si vous envoyez le PDF par e-mail, donnez le mot de passe par SMS ou par téléphone. Les deux ensemble dans le même message n’apportent presque aucune protection.'
  - q: 'J’ai oublié le mot de passe de mon PDF, pouvez-vous le retrouver ?'
    a: 'Non. Sans le mot de passe, un PDF chiffré en AES-256 ne peut pas être ouvert. <a href="/fr/deverrouiller-pdf">Déverrouiller PDF</a> permet seulement de retirer un mot de passe que vous connaissez.'
  - q: 'Mon mot de passe est-il envoyé sur un serveur ?'
    a: 'Non. Le chiffrement est effectué par votre navigateur. Ni le PDF ni le mot de passe ne sont transmis ou enregistrés.'
---

## Quand protéger un PDF par mot de passe ?

Un PDF protégé ne peut être ouvert que par quelqu’un qui connaît le mot de passe. C’est utile dès qu’un document sensible transite par un canal que vous ne maîtrisez pas totalement : e-mail, clé USB, dossier partagé ou espace cloud.

- **Documents financiers** : relevés bancaires, avis d’imposition, bulletins de salaire.
- **Documents médicaux** : comptes rendus, ordonnances, résultats d’analyses.
- **Documents professionnels** : contrats, devis, données clients ou RH.

## Un chiffrement local, sans intermédiaire

Les sites de protection PDF classiques reçoivent votre document **et** votre mot de passe sur leurs serveurs. Ici, tout se passe dans votre navigateur : le chiffrement AES-256 est calculé sur votre appareil. Il n’existe donc aucune copie de votre fichier ou de votre mot de passe ailleurs que chez vous.

## Choisir un bon mot de passe

| Exemple | Robustesse |
|---|---|
| `123456`, `azerty`, votre date de naissance | Trouvé en quelques secondes |
| `Marseille2024!` | Faible : mot courant + année |
| `cerise-tramway-orage-lumiere` | Robuste : long, facile à retenir |

Une phrase de quatre ou cinq mots sans lien entre eux est à la fois plus sûre et plus facile à retenir qu’un mot de passe court et compliqué. Notez-la dans un gestionnaire de mots de passe.

## Comment le destinataire ouvre-t-il le fichier ?

Aucun logiciel particulier n’est nécessaire. Adobe Acrobat Reader, l’aperçu PDF de Windows et de macOS, les navigateurs Chrome, Edge, Firefox et Safari, ainsi que les applications mobiles demandent automatiquement le mot de passe à l’ouverture. Une fois le bon mot de passe saisi, le document s’affiche normalement. Sans lui, le contenu reste illisible, même si quelqu’un intercepte le fichier.

## Compléter la protection

- Ajoutez un [filigrane](/fr/filigrane-pdf) indiquant le destinataire : utile si le document est ouvert puis copié.
- [Compressez](/fr/compresser-pdf) le PDF **avant** de le protéger si vous devez réduire sa taille.
- Pour retirer plus tard la protection d’un PDF dont vous connaissez le mot de passe, utilisez [Déverrouiller PDF](/fr/deverrouiller-pdf).

## Protéger plusieurs documents

L’outil traite un fichier à la fois. Pour protéger plusieurs documents avec le même mot de passe, deux solutions : les réunir d’abord en un seul PDF avec [Fusionner PDF](/fr/fusionner-pdf), puis le protéger ; ou répéter l’opération pour chaque fichier, ce qui ne prend que quelques secondes.
