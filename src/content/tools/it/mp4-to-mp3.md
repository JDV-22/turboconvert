---
name: 'MP4 in MP3'
title: 'Convertire MP4 in MP3: estrarre l’audio da un video, gratis'
description: 'Converti MP4 in MP3 gratis ed estrai l’audio da qualsiasi video: MOV, WebM, MKV, AVI. Qualità da 128 a 320 kbps. Nel browser, senza upload né registrazione.'
h1: 'Convertire MP4 in MP3'
lead: 'Estrai la colonna sonora, la voce o la musica da un video e salvala in un MP3 che si ascolta ovunque. L’audio viene estratto sul tuo dispositivo: il video non viene mai caricato.'
what: 'il tuo video'
howTo: 'convertire MP4 in MP3'
steps:
  - 'Fai clic su <strong>Scegli i file</strong> oppure trascina uno o più video nel riquadro: funzionano MP4, MOV, WebM, MKV, AVI e gli altri formati più diffusi.'
  - 'Scegli la <strong>Qualità audio</strong>: 192 kbps va bene per quasi tutto, 320 kbps per la musica a cui tieni.'
  - 'Fai clic su <strong>Converti</strong>. Ogni MP3 si scarica appena è pronto; per più video usa <strong>Scarica tutto (ZIP)</strong>.'
limits:
  - 'Video fino a 1 GB ciascuno. Al primo utilizzo viene scaricato il motore di conversione (circa 31 MB), che poi resta nella cache del browser.'
  - 'La velocità dipende dal dispositivo. Su un computer recente l’estrazione dura di solito quanto il video o meno; i telefoni sono più lenti, quindi per i video lunghi usa un computer.'
  - 'Lo strumento converte file che hai già. Non scarica da YouTube o da altri siti e non può leggere video protetti da DRM, come i film acquistati.'
  - 'Un video senza traccia audio non può produrre un MP3.'
faq:
  - q: 'Convertire MP4 in MP3 fa perdere qualità?'
    a: 'L’audio dentro un MP4 è di solito AAC, già compresso, quindi viene ricodificato una volta in MP3. Da 192 kbps in su la differenza non è udibile per la maggior parte delle persone. Un bitrate più alto non può aggiungere qualità che l’audio del video non aveva.'
  - q: 'Che bitrate scegliere: 128, 192, 256 o 320 kbps?'
    a: '128 kbps basta per parlato, podcast e lezioni. 192 kbps è un buon valore per tutto. Usa 256 o 320 kbps per la musica che ascolterai con buone cuffie o casse.'
  - q: 'Quanto peserà l’MP3?'
    a: 'Circa 1 MB al minuto a 128 kbps, 1,4 MB a 192 kbps e 2,4 MB a 320 kbps, qualunque sia il peso del video.'
  - q: 'Posso convertire un MP4 in MP3 su iPhone o Android?'
    a: 'Sì. Apri questa pagina in Safari o Chrome, scegli un video da Foto, Galleria o File e convertilo. Per i video lunghi un computer è nettamente più veloce.'
  - q: 'Posso convertire più video insieme?'
    a: 'Sì. Trascina più file: vengono elaborati uno dopo l’altro e puoi salvare tutti gli MP3 in un unico file ZIP.'
  - q: 'I miei video vengono caricati su un server?'
    a: 'No. Il convertitore è FFmpeg compilato in WebAssembly e funziona dentro la scheda del browser. Il video non lascia mai il tuo dispositivo, quindi non c’è nemmeno un upload da aspettare.'
---

## Perché estrarre l’audio da un video?

Un MP4 è un contenitore: racchiude una traccia video, una o più tracce audio e a volte i sottotitoli. Quando ti serve solo il suono, tenere anche il video spreca spazio e rende il file scomodo da usare. Convertire in MP3 è la soluzione classica quando vuoi:

- **Ascoltare una conferenza, una lezione, un webinar o un’intervista** registrati, sul telefono, in auto o in un’app di podcast.
- **Salvare una registrazione vocale** fatta con la fotocamera invece che con l’app Memo vocali.
- **Trascrivere una riunione**: la maggior parte degli strumenti di trascrizione preferisce un file audio, molto più leggero da caricare.
- **Riutilizzare musica o narrazione** di un tuo video in una presentazione o in un altro montaggio.
- **Tenere l’audio di un concerto** senza le immagini mosse.

Un video di dieci minuti in 1080p girato con il telefono può pesare diverse centinaia di megabyte; gli stessi dieci minuti in MP3 a 192 kbps pesano circa 14 MB.

## Non solo MP4

Nonostante il nome, questo convertitore accetta quasi tutti i formati video che potresti avere: **MOV** (iPhone e Mac), **WebM** (registratori dello schermo, download dal browser), **MKV**, **AVI**, **M4V**, **WMV**, **FLV**, **3GP**, **MPEG** e **TS**. Il procedimento è lo stesso per tutti: la traccia audio viene decodificata e ricodificata in un MP3 standard, che si ascolta su qualsiasi telefono, autoradio, smart speaker e lettore multimediale.

## Scegliere la qualità audio

| Qualità audio | Peso al minuto | Ideale per |
|---|---|---|
| 128 kbps | ≈ 1 MB | Parlato, lezioni, note vocali |
| 192 kbps | ≈ 1,4 MB | Ascolto quotidiano (predefinito) |
| 256 kbps | ≈ 1,9 MB | Musica |
| 320 kbps | ≈ 2,4 MB | Musica su buoni impianti, archivio |

L’MP3 arriva al massimo a 320 kbps. Se ti serve una copia senza perdita per l’editing audio, converti in WAV o FLAC con il [convertitore audio](/it/convertitore-audio), che accetta anche i file video.

## MP3 o un altro formato?

L’MP3 è la scelta più sicura quando non sai dove verrà riprodotto il file: lo legge ogni dispositivo degli ultimi vent’anni. In alcuni casi un altro formato è più adatto:

- **Montaggio audio** in Audacity, GarageBand o un editor video: un WAV senza perdita evita una seconda compressione quando esporti di nuovo.
- **Solo dispositivi Apple**: l’M4A (AAC) è supportato in modo nativo ed è leggermente più efficiente dell’MP3.
- **Voce in pochissimo spazio**: l’OPUS mantiene il parlato comprensibile anche a bitrate molto bassi.

Tutti questi formati sono disponibili nel [convertitore audio](/it/convertitore-audio).

## Come funziona e perché è privato

La maggior parte dei siti «MP4 in MP3» ti fa caricare l’intero video prima di iniziare: lento per i file grandi, e una copia della tua registrazione finisce sul server di qualcun altro. TurboConvert scarica una versione WebAssembly di FFmpeg, il motore open source alla base di molti software video professionali, e la esegue nel browser. Il video viene letto dal tuo disco, l’MP3 viene scritto nei tuoi download e nulla passa dalla rete.

## Consigli e problemi comuni

- **Ti serve solo una parte dell’audio?** Converti, poi taglia l’MP3 con [Tagliare audio](/it/tagliare-audio). Per tenere solo un pezzo del video, usa [Tagliare video](/it/tagliare-video).
- **La conversione fallisce con un errore audio:** il video è stato registrato o esportato senza suono (capita con le registrazioni dello schermo a microfono spento). Non c’è nulla da estrarre.
- **Video molto lunghi sul telefono:** tieni lo schermo acceso e la scheda in primo piano durante la conversione, oppure usa un computer.
- **Il percorso inverso?** Per pubblicare un MP3 su YouTube o Instagram, che accettano solo video, trasformalo in MP4 con un’immagine di copertina usando [MP3 in MP4](/it/mp3-in-mp4).
