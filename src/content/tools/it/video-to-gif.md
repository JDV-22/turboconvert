---
name: 'Video in GIF'
title: 'Convertire video in GIF: da MP4 a GIF gratis, senza upload'
description: 'Trasforma una clip video in GIF animata: MP4, MOV, WebM e altri formati. Scegli inizio, durata, larghezza e fotogrammi. Gratis, senza filigrana né upload.'
h1: 'Convertire un video in GIF'
lead: 'Crea una GIF animata da qualsiasi clip: una reazione, la demo di un prodotto, una registrazione dello schermo. La GIF nasce nel browser, quindi il video non viene mai caricato e non c’è filigrana.'
what: 'il tuo video'
howTo: 'convertire un video in GIF'
steps:
  - 'Fai clic su <strong>Scegli un file</strong> oppure trascina un video: sono accettati MP4, MOV, WebM, MKV, AVI e gli altri formati più diffusi.'
  - 'Imposta <strong>Inizio (secondi)</strong> sul punto in cui deve partire la GIF e <strong>Durata (secondi)</strong> sulla sua lunghezza (da 1 a 60 secondi).'
  - 'Scegli la <strong>Larghezza</strong> (320–800 px) e i <strong>Fotogrammi al secondo</strong> (8–24 fps). I valori predefiniti, 480 px e 12 fps, vanno bene nella maggior parte dei casi.'
  - 'Fai clic su <strong>Converti</strong>. La GIF si scarica automaticamente quando è pronta.'
limits:
  - 'Un video alla volta, fino a 500 MB. Una GIF può durare al massimo 60 secondi.'
  - 'Al primo utilizzo viene scaricato il motore di conversione (circa 31 MB), poi tenuto in cache. La velocità dipende dal dispositivo.'
  - 'La GIF non ha audio e mostra solo 256 colori per fotogramma: sfumature e incarnati possono apparire leggermente sgranati o a bande.'
  - 'Le GIF pesano molto più di un video della stessa durata; GIF lunghe o larghe possono arrivare a decine di megabyte.'
faq:
  - q: 'Come convertire un MP4 in GIF?'
    a: 'Trascina qui l’MP4, imposta dove inizia la GIF e quanto dura, scegli larghezza e fotogrammi al secondo, poi fai clic su <strong>Converti</strong>. La GIF si scarica automaticamente, senza filigrana.'
  - q: 'Perché la mia GIF pesa così tanto?'
    a: 'La GIF salva ogni fotogramma come un’immagine separata, con poca compressione tra un fotogramma e l’altro: il peso cresce con durata × fotogrammi × larghezza. Dimezzando la larghezza il peso scende circa a un quarto; passando da 24 a 12 fps si dimezza.'
  - q: 'Qual è la dimensione migliore per una GIF?'
    a: 'Per chat e social, 480 px a 12 fps è un buon equilibrio. Per una GIF fluida e dettagliata usa 640 px e 15 fps; per un’e-mail o un file minuscolo, 320 px a 8 fps.'
  - q: 'Quanto può durare una GIF?'
    a: 'Qui fino a 60 secondi. In pratica le GIF migliori durano da 2 a 6 secondi: le clip più lunghe diventano pesantissime ed è meglio condividerle come video.'
  - q: 'Posso creare una GIF da un video dell’iPhone?'
    a: 'Sì, i video MOV dell’iPhone sono supportati. Sul telefono apri questa pagina in Safari e scegli il video dalla libreria; per clip lunghe o ad alta risoluzione un computer è più veloce.'
  - q: 'Il mio video viene caricato?'
    a: 'No. La GIF viene creata da FFmpeg in esecuzione nel browser. Il video non lascia mai il tuo dispositivo.'
---

## Scegliere le impostazioni giuste

Una GIF è come un blocchetto animato: ogni fotogramma è salvato come un’immagine a sé. Quattro impostazioni decidono come appare e quanto pesa.

| Impostazione | Cosa fa | Consiglio |
|---|---|---|
| **Inizio (secondi)** | Dove inizia la GIF nel video | Guarda il video e annota il secondo in cui parte l’azione, es. 12 |
| **Durata (secondi)** | Quanto dura la GIF | 2–6 s per reazioni e loop; fino a 60 s consentiti |
| **Larghezza** | Dimensione in pixel (l’altezza segue le proporzioni del video) | 480 px per le chat, 640–800 px per tutorial con testo |
| **Fotogrammi al secondo** | Fotogrammi mostrati al secondo | 12 fps è fluido; 8 fps per file minuscoli; 24 fps per movimenti morbidi |

Il peso cresce con tutte e quattro insieme. Una GIF di 5 secondi a 480 px e 12 fps ha 60 fotogrammi; la stessa clip a 800 px e 24 fps ne ha 120, molto più grandi: facilmente cinque volte più pesante.

## Ottenere una GIF più leggera

Se la GIF è troppo pesante per Slack, Discord, un’e-mail o una pagina web, cambia un’impostazione alla volta:

1. **Accorciala.** La durata è la leva più diretta: tieni solo il momento che conta.
2. **Riduci la larghezza.** Passare da 640 a 480 px elimina quasi metà dei pixel di ogni fotogramma.
3. **Abbassa i fotogrammi al secondo.** 12 fps invece di 24 dimezzano i fotogrammi, e il movimento appare comunque fluido.
4. **Scegli riprese tranquille.** Scene con pochi movimenti, sfondi uniformi e pochi colori si comprimono meglio di riprese mosse o piene di dettagli.

## GIF o video?

Le GIF partono da sole e vanno in loop ovunque: app di chat, e-mail, documentazione, slide. Ma una GIF pesa molte volte più della stessa clip in MP4 e non ha audio. Se la piattaforma accetta video, un MP4 breve è più leggero e nitido: taglia il momento che ti serve con [Tagliare video](/it/tagliare-video) e, se serve, alleggeriscilo con [Comprimere video](/it/comprimere-video). Per un video in loop senza suono, [Togliere l’audio da un video](/it/togliere-audio-video) elimina la traccia audio.

## Video dello smartphone e registrazioni dello schermo

Puoi usare MP4 da telefoni Android, fotocamere e app di montaggio, clip **MOV** dell’iPhone o registrazioni dello schermo del Mac, file **WebM** dei registratori nel browser, oltre a MKV, AVI, M4V e altri. Le registrazioni dello schermo diventano ottime GIF per segnalazioni di bug e tutorial: tieni la larghezza a 640–800 px perché il testo resti leggibile; 8–12 fps bastano per i movimenti del mouse.

## Niente upload, niente filigrana

Molti creatori di GIF caricano il video su un server e appongono il loro logo sul risultato, a meno di pagare. TurboConvert esegue FFmpeg, compilato in WebAssembly, direttamente nella scheda del browser: la clip resta sul tuo dispositivo e la GIF è pulita. Vuoi invece l’audio della clip? [MP4 in MP3](/it/mp4-in-mp3) lo estrae in MP3.

## Problemi comuni

- **La GIF parte nel momento sbagliato.** L’inizio si misura in secondi dall’inizio del video: 1 minuto e 20 secondi corrisponde a 80.
- **È troppo pesante per la piattaforma.** Riduci prima la durata, poi la larghezza, poi i fotogrammi al secondo: in quest’ordine danno il massimo risparmio con la minima perdita visiva.
- **I colori sono sgranati.** È il limite dei 256 colori della GIF. Riprese con colori piatti e buona luce rendono meglio delle scene scure.
