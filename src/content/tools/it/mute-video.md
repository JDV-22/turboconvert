---
name: 'Togliere l’audio da un video'
title: 'Togliere l’audio da un video: rendere muto un MP4, gratis'
description: 'Togli l’audio da un video con un clic: rendi muti MP4, MOV, WebM e altri, anche in blocco. Gratis, senza filigrana, nel browser: il video non viene caricato.'
h1: 'Togliere l’audio da un video'
lead: 'Rimuovi la traccia audio da uno o più video e ottieni una clip muta. L’audio viene eliminato nel browser: i tuoi video non lasciano mai il dispositivo.'
what: 'il tuo video'
howTo: 'togliere l’audio da un video'
steps:
  - 'Fai clic su <strong>Scegli i file</strong> oppure trascina uno o più video: sono accettati MP4, MOV, WebM, MKV, AVI e gli altri formati più diffusi.'
  - 'Fai clic su <strong>Converti</strong>. Non ci sono impostazioni: la traccia audio viene semplicemente rimossa.'
  - 'Ogni video muto si scarica appena è pronto; per più file usa <strong>Scarica tutto (ZIP)</strong>.'
limits:
  - 'Video fino a 1 GB ciascuno. Al primo utilizzo viene scaricato il motore di conversione (circa 31 MB), poi tenuto in cache.'
  - 'Viene rimosso tutto l’audio: non puoi tenere una sola traccia né abbassare il volume di una parte del video.'
  - 'La velocità di elaborazione dipende dal dispositivo e dal peso del file.'
faq:
  - q: 'Come togliere il suono da un video?'
    a: 'Trascina qui il video e fai clic su <strong>Converti</strong>. Il nuovo file ha le stesse immagini senza alcuna traccia audio, non solo con il volume a zero.'
  - q: 'Rendere muto un video ne riduce la qualità?'
    a: 'L’immagine mantiene risoluzione e qualità; viene tolto solo l’audio. Il file diventa anche un po’ più leggero, perché i dati audio non ci sono più.'
  - q: 'Posso togliere l’audio da più video insieme?'
    a: 'Sì. Trascina più video: vengono elaborati uno alla volta e puoi scaricarli tutti in uno ZIP.'
  - q: 'Posso conservare l’audio in un file separato?'
    a: 'Sì: prima di togliere l’audio, estrailo con <a href="/it/mp4-in-mp3">MP4 in MP3</a>. Avrai così il video muto e la colonna sonora separati.'
  - q: 'Il mio video viene caricato?'
    a: 'No. Tutto viene elaborato da FFmpeg in esecuzione nel browser.'
---

## Perché togliere l’audio?

Spesso un video muto è proprio ciò che serve:

- **Video di sfondo o di copertina sui siti web**: i browser in genere bloccano la riproduzione automatica con audio, e un file senza traccia audio garantisce che i visitatori non abbiano sorprese.
- **Privacy**: elimina conversazioni, nomi o rumori di fondo captati dal microfono del telefono prima di condividere una clip.
- **Post sui social e presentazioni** a cui aggiungerai musica o una voce fuori campo in un’altra app.
- **Musica protetta da copyright** in sottofondo a una registrazione che non vuoi pubblicare.
- **Demo di prodotto e registrazioni dello schermo** in cui il suono non aggiunge nulla.

## Togliere l’audio o abbassare il volume?

Portare il volume a zero in un editor lascia comunque nel file una traccia audio (vuota), che alcune piattaforme considerano ancora un video con suono. Questo strumento elimina completamente la traccia audio, così lettori, siti e app sanno che il video è muto.

## Cosa ottieni

Il risultato mantiene la risoluzione e la durata del video originale; manca solo il suono. Puoi trascinare più clip insieme, comodo quando prepari una serie di video di prodotto o di loop di sfondo per un sito, e scaricarle tutte in uno ZIP. Sono accettati file fino a 1 GB ciascuno, compresi i video MOV presi direttamente dall’iPhone.

## Da combinare con altri strumenti

- **Clip più corta?** Tagliala prima con [Tagliare video](/it/tagliare-video), poi togli l’audio.
- **File più leggero?** [Comprimere video](/it/comprimere-video) riduce risoluzione e bitrate.
- **Animazione in loop per una chat o un documento?** [Video in GIF](/it/video-in-gif) crea direttamente una GIF, che per sua natura è muta.
- **Video MOV dell’iPhone?** [MOV in MP4](/it/mov-in-mp4) cambia formato se un sito non accetta il MOV.

## Privato per scelta

Il video viene elaborato da FFmpeg compilato in WebAssembly, che funziona nella scheda del tuo browser. Nulla viene caricato: particolarmente utile quando il motivo per cui togli l’audio è proprio che contiene qualcosa di privato.

## Problemi comuni

- **Il file muto pesa quasi quanto l’originale.** L’audio è una piccola parte della maggior parte dei video. Per alleggerire il file, usa anche Comprimere video.
- **Volevo togliere solo il rumore di fondo o la musica.** Questo strumento rimuove tutto il suono. Separare la voce dalla musica richiede un programma di editing audio.
