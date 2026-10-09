---
name: 'PNG in ICO'
title: 'Convertire PNG in ICO: creare una favicon gratis'
description: 'Converti PNG, JPG, WebP o SVG in un file ICO multi-formato per la favicon del tuo sito o le icone di Windows, da 16 a 256 px. Gratis, nel browser, senza upload.'
h1: 'Convertire PNG in ICO'
lead: 'Crea un vero file .ico multi-formato da un PNG, JPG, WebP o SVG: per la favicon di un sito o per un’icona di Windows. Viene generato nel browser, quindi il tuo logo non viene mai caricato.'
what: 'la tua immagine'
howTo: 'convertire PNG in ICO'
steps:
  - 'Fai clic su <strong>Scegli un file</strong> oppure trascina il tuo logo: PNG, JPG, WebP o SVG. Funziona meglio un’immagine quadrata di almeno 256 × 256 px.'
  - 'Fai clic su <strong>Converti</strong>. Lo strumento crea un unico .ico che contiene più dimensioni, da 16 × 16 fino a 256 × 256 pixel.'
  - 'Il file .ico si scarica automaticamente. Rinominalo <code>favicon.ico</code> se lo usi su un sito web.'
limits:
  - 'Un’immagine alla volta, fino a 20 MB.'
  - 'Parti da un’immagine quadrata. Un logo rettangolare non riempie bene l’icona: ritaglialo prima in quadrato con un editor di immagini.'
  - 'Dettagli fini e testo sottile spariscono a 16 × 16 px. Una versione semplificata del logo (una lettera o un simbolo) si legge meglio nella scheda del browser.'
faq:
  - q: 'Che cos’è un file ICO?'
    a: 'ICO è il formato di icone usato da Windows e dai browser per le favicon. A differenza di un PNG, un solo file .ico può contenere più dimensioni della stessa icona, così ogni posto in cui compare può usare quella più nitida.'
  - q: 'Quali dimensioni sono incluse nell’ICO?'
    a: 'Diverse dimensioni standard da 16 × 16 fino a 256 × 256 pixel: abbastanza per schede del browser, preferiti, barra delle applicazioni di Windows e collegamenti sul desktop.'
  - q: 'Come aggiungere una favicon al mio sito?'
    a: 'Carica <code>favicon.ico</code> nella cartella principale del sito e aggiungi <code>&lt;link rel="icon" href="/favicon.ico" sizes="any"&gt;</code> nel &lt;head&gt; delle pagine. I browser cercano comunque /favicon.ico in automatico.'
  - q: 'L’ICO mantiene la trasparenza?'
    a: 'Sì. Le zone trasparenti di un PNG, WebP o SVG restano trasparenti, così l’icona sta bene sia sui temi chiari sia su quelli scuri del browser.'
  - q: 'Posso usare un JPG per creare una favicon?'
    a: 'Sì, ma il JPG non ha trasparenza, quindi l’icona avrà uno sfondo pieno. Per un risultato pulito usa un PNG o un SVG con sfondo trasparente.'
  - q: 'Il mio logo viene caricato su un server?'
    a: 'No. L’icona viene generata dal browser sul tuo dispositivo.'
---

## Perché un ICO multi-formato?

Una favicon compare in tanti posti e a dimensioni diverse: 16 px nella scheda del browser, 32 px nei preferiti e nella barra delle applicazioni di Windows, 48 px e oltre per collegamenti e siti fissati. Un singolo PNG piccolo diventa sfocato quando viene ingrandito e perde dettagli quando viene rimpicciolito. Un file .ico risolve il problema raccogliendo più dimensioni già pronte in un unico file: browser e sistema operativo scelgono quella migliore.

## Preparare l’immagine di partenza

- **Quadrata.** Le icone sono quadrate: ritaglia il logo in formato 1:1 prima di convertirlo.
- **Abbastanza grande.** 256 × 256 px o più, perché anche la dimensione maggiore dentro l’ICO sia nitida. Un SVG è l’ideale, perché si disegna in modo pulito a ogni dimensione.
- **Sfondo trasparente.** Usa un PNG o un SVG con trasparenza, così l’icona si fonde con i temi chiari e scuri del browser.
- **Semplice.** A 16 px un logo completo di slogan è illeggibile: usa il simbolo o l’iniziale del tuo marchio.

Se il logo è un SVG e ti servono anche versioni PNG, esportale con [SVG in PNG](/it/svg-in-png). Se l’immagine di partenza è molto grande, puoi ridurla prima con [Ridimensionare immagini](/it/ridimensionare-immagini).

## Usare la favicon

1. Rinomina il file scaricato in `favicon.ico`.
2. Caricalo nella cartella principale del sito (in modo che sia raggiungibile su `tuosito.it/favicon.ico`).
3. Aggiungi questa riga nel `<head>` delle tue pagine:

```html
<link rel="icon" href="/favicon.ico" sizes="any">
```

Piattaforme come WordPress, Shopify, Squarespace e Wix hanno un’impostazione «Icona del sito» o «Favicon» dove puoi caricare direttamente il file. I browser tengono in cache le favicon molto a lungo: se non vedi la nuova icona, apri il sito in una finestra in incognito.

## Problemi comuni

- **L’icona è sfocata nella scheda del browser.** L’immagine di partenza era troppo piccola o troppo dettagliata. Usa un’immagine più grande e più semplice, idealmente un SVG.
- **L’icona ha un quadrato bianco o nero intorno.** L’immagine di partenza non aveva trasparenza (spesso un JPG). Usa un PNG con sfondo trasparente.
- **Si vede ancora la vecchia icona.** Svuota la cache o prova in una finestra in incognito.

## Icone per Windows

Lo stesso file .ico funziona anche su Windows: fai clic destro su un collegamento o una cartella, scegli *Proprietà* → *Personalizza* o *Cambia icona* e seleziona il tuo file.

## Privato e gratuito

Nessun account, nessuna filigrana e nessun upload: l’icona viene generata direttamente nel browser a partire dalla tua immagine, quindi il logo di un marchio non ancora lanciato resta sul tuo computer.
