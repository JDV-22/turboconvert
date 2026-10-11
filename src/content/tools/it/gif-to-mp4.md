---
name: 'GIF in MP4'
title: 'Convertire GIF in MP4: più leggero e fluido, gratis'
description: 'Converti le GIF animate in video MP4, di solito molto più piccoli, che funzionano su Instagram, WhatsApp e su qualsiasi sito. Gratis, nel browser, senza upload.'
h1: 'Convertire GIF in MP4'
lead: 'Trasforma le GIF animate in video MP4 più leggeri, più fluidi e accettati da ogni social network e app di messaggistica. La conversione avviene sul tuo dispositivo: non viene caricato nulla.'
what: 'la tua GIF'
howTo: 'convertire una GIF in MP4'
steps:
  - 'Fai clic su <strong>Scegli i file</strong> oppure trascina una o più GIF animate nel riquadro.'
  - 'Fai clic su <strong>Converti</strong>. Non c’è nulla da impostare: il video mantiene dimensioni e velocità della GIF.'
  - 'Ogni MP4 si scarica appena è pronto; per più GIF usa <strong>Scarica tutto (ZIP)</strong>.'
limits:
  - 'GIF fino a 200 MB ciascuna. Al primo utilizzo viene scaricato il motore di conversione (circa 31 MB), che poi resta nella cache del browser.'
  - 'L’MP4 non supporta la trasparenza: le aree trasparenti della GIF diventano uno sfondo pieno.'
  - 'Di default un MP4 viene riprodotto una volta sola. Per ripeterlo in loop su un sito usa l’attributo <code>loop</code> del video (vedi sotto); la maggior parte delle app social ripete automaticamente i video brevi.'
  - 'Larghezza e altezza vengono arrotondate a un numero pari di pixel, come richiede il formato H.264: al massimo viene tagliato un pixel.'
faq:
  - q: 'Perché convertire una GIF in MP4?'
    a: 'La GIF è un formato degli anni ’80, limitato a 256 colori per fotogramma e poco efficiente per le animazioni. La stessa animazione in MP4 H.264 di solito pesa diverse volte meno, ha un aspetto migliore ed è accettata dalle app che rifiutano i caricamenti di GIF, come Instagram.'
  - q: 'L’MP4 avrà lo stesso aspetto della GIF?'
    a: 'Sì. Dimensioni e tempi vengono mantenuti e ogni fotogramma viene convertito. I colori di solito sono uguali o migliori, perché il limite dei 256 colori della GIF non c’è più.'
  - q: 'L’MP4 ha l’audio?'
    a: 'No: le GIF non hanno audio, quindi l’MP4 è muto. È anche ciò che permette ai browser di avviarlo in automatico nelle pagine web.'
  - q: 'Posso convertire più GIF insieme?'
    a: 'Sì. Trascina più file: vengono elaborati uno dopo l’altro e puoi salvarli tutti in un unico ZIP.'
  - q: 'Le mie GIF vengono caricate?'
    a: 'No. FFmpeg funziona dentro la scheda del browser, quindi i tuoi file non lasciano mai il dispositivo.'
---

## Perché la GIF è il formato sbagliato per le animazioni

Il formato GIF risale al 1987. Memorizza ogni fotogramma come immagine a tavolozza con al massimo 256 colori, comprime i fotogrammi indipendentemente l’uno dall’altro e non ha alcuna nozione del movimento tra di essi. Il risultato sono file pesanti con evidenti sbavature di colore: pochi secondi di animazione possono facilmente pesare diversi megabyte.

L’MP4 con video H.264 è stato progettato per le immagini in movimento: memorizza solo ciò che cambia da un fotogramma all’altro e supporta milioni di colori. Per questo GIPHY, X (Twitter) e la maggior parte delle app di messaggistica convertono in silenzio in video MP4 le GIF che invii.

## Dove un MP4 funziona meglio di una GIF

- **Instagram** non accetta GIF per post, Storie o Reel: un MP4 passa senza problemi.
- **Siti web e blog:** sostituire le GIF con MP4 è uno dei consigli classici di Google PageSpeed Insights, perché le pagine più leggere si caricano più in fretta.
- **Presentazioni:** PowerPoint, Keynote e Presentazioni Google riproducono gli MP4 senza intoppi, mentre le GIF grandi possono scattare.
- **Allegati di email e chat:** un file più piccolo si invia più in fretta e resta sotto i limiti di peso.

## Ripetere il video in loop in una pagina web

Per far comportare un MP4 esattamente come una GIF sul tuo sito (avvio automatico, loop, senza controlli) usa:

```html
<video src="animation.mp4" autoplay loop muted playsinline></video>
```

`muted` e `playsinline` servono perché i browser (soprattutto su iPhone) avviino il video in automatico.

## GIF trasparenti

Il video MP4 non ha un canale di trasparenza. Se la tua GIF ha lo sfondo trasparente, quell’area diventa di un colore pieno nell’MP4. Per un’animazione che deve restare trasparente in una pagina web, tieni la GIF oppure chiedi al grafico un WebP animato o un WebM con canale alfa.

## Privato per costruzione

La conversione usa FFmpeg compilato in WebAssembly e funziona interamente nel tuo browser. Le GIF vengono lette dal tuo disco e gli MP4 vengono scritti nei tuoi download: nulla viene inviato a un server.

## Strumenti correlati

- Il percorso inverso? [Video in GIF](/it/video-in-gif) trasforma una clip in una GIF animata.
- Ti serve un video più piccolo? [Comprimere video](/it/comprimere-video) riduce il peso di qualsiasi MP4.
