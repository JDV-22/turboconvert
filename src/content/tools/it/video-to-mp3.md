---
name: 'Video in MP3'
title: 'Convertire video in MP3: qualsiasi formato, gratis e senza upload'
description: 'Estrai l’audio da qualsiasi video (MP4, MOV, WebM, MKV, AVI, WMV) e salvalo in MP3 da 128 a 320 kbps. Gratis, più file insieme, nel browser, senza upload.'
h1: 'Convertire video in MP3'
lead: 'Trasforma il suono di qualsiasi video in un MP3: una lezione, un’intervista, un messaggio vocale o la tua musica. Tutto avviene sul tuo dispositivo: il video non viene mai caricato.'
what: 'il tuo video'
howTo: 'convertire un video in MP3'
steps:
  - 'Fai clic su <strong>Scegli i file</strong> oppure trascina uno o più video nel riquadro: sono accettati MP4, MOV, WebM, MKV, AVI, M4V, WMV, FLV, 3GP, MPEG e TS.'
  - 'Scegli la <strong>Qualità audio</strong>: 128 kbps per il parlato, 192 kbps per quasi tutto, 320 kbps per la musica.'
  - 'Fai clic su <strong>Converti</strong>. Ogni MP3 si scarica appena è pronto; per più video usa <strong>Scarica tutto (ZIP)</strong>.'
limits:
  - 'Video fino a 1 GB ciascuno. Al primo utilizzo viene scaricato il motore di conversione (circa 31 MB), che poi resta nella cache del browser.'
  - 'Lo strumento converte video che si trovano sul tuo dispositivo. Non può scaricare da YouTube, TikTok o altri siti e non può leggere video protetti da copia (DRM).'
  - 'La velocità dipende dal dispositivo: su un computer recente di solito ci vuole quanto dura il video, o meno. I telefoni sono più lenti con i video lunghi.'
  - 'Un video registrato senza audio non ha nulla da estrarre.'
faq:
  - q: 'Quali formati video posso convertire in MP3?'
    a: 'MP4, MOV, WebM, MKV, AVI, M4V, WMV, FLV, 3GP, MPEG e TS. In pratica sono coperte le registrazioni del telefono, le registrazioni dello schermo, i filmati delle fotocamere e i file esportati dai programmi di montaggio.'
  - q: 'Posso convertire un video di YouTube in MP3?'
    a: 'Non direttamente: questo strumento non scarica nulla dai siti web e i termini di YouTube non permettono di scaricare i video degli altri. Se il video è tuo, scaricalo da YouTube Studio (Contenuti → ⋮ → Scarica) e poi trascina qui il file.'
  - q: 'Estrarre l’audio riduce la qualità?'
    a: 'L’audio viene ricodificato una volta in MP3. Da 192 kbps in su la maggior parte delle persone non sente differenza rispetto al suono del video originale. Un bitrate più alto non può aggiungere qualità che il video non aveva.'
  - q: 'Quanto peserà l’MP3?'
    a: 'Circa 1 MB al minuto a 128 kbps, 1,4 MB a 192 kbps e 2,4 MB a 320 kbps, qualunque siano il peso o la risoluzione del video.'
  - q: 'Funziona su iPhone e Android?'
    a: 'Sì. Apri la pagina in Safari o Chrome e scegli un video da Foto, Galleria o File. Per i video lunghi un computer è più veloce.'
  - q: 'Il mio video viene caricato su un server?'
    a: 'No. Il convertitore è FFmpeg compilato in WebAssembly e funziona dentro la scheda del browser: il video resta sul tuo dispositivo e non c’è nessun upload da aspettare.'
---

## Un solo convertitore per ogni formato video

I video ti arrivano in tanti formati: **MOV** da un iPhone o da un Mac, **MP4** dai telefoni Android e dalla maggior parte delle fotocamere, **WebM** dai registratori dello schermo e dai browser, **MKV** dai media server, **AVI** e **WMV** dai vecchi programmi per Windows. Questo convertitore li legge tutti e tiene solo ciò che ti serve, il suono, in un MP3 standard che si ascolta su qualsiasi telefono, autoradio, smart speaker e app di podcast.

Se sai già che il tuo file è un MP4 o un MOV, le pagine dedicate [MP4 in MP3](/it/mp4-in-mp3) e [MOV in MP3](/it/mov-in-mp3) funzionano allo stesso modo.

## Perché estrarre l’audio da un video

- **Ascoltare una lezione, un webinar o un intervento** mentre sei in giro, senza tenere sul telefono un enorme file video.
- **Salvare un messaggio vocale** registrato per errore con l’app della fotocamera.
- **Preparare un file per la trascrizione**: gli strumenti di riconoscimento vocale preferiscono l’audio, e un MP3 pesa una frazione del video.
- **Riutilizzare la tua musica o la tua voce narrante** in una presentazione, in un podcast o in un altro montaggio.
- **Conservare il suono di un concerto o di una prova** che hai filmato tu.

## Scegliere la qualità audio

| Qualità audio | Peso al minuto | Ideale per |
|---|---|---|
| 128 kbps | ≈ 1 MB | Parlato, lezioni, note vocali |
| 192 kbps | ≈ 1,4 MB | Ascolto quotidiano (predefinito) |
| 256 kbps | ≈ 1,9 MB | Musica |
| 320 kbps | ≈ 2,4 MB | Musica su buoni impianti |

Ti serve un altro formato: WAV per il montaggio, M4A per i dispositivi Apple, OPUS per file vocali minuscoli? Il [convertitore audio](/it/convertitore-audio) accetta anche i file video.

## E i video di YouTube, TikTok o Instagram?

TurboConvert converte solo file che si trovano già sul tuo dispositivo: non scarica mai nulla da un sito web. È una scelta voluta. Scaricare i video degli altri va contro i termini di quelle piattaforme e spesso viola il diritto d’autore, e i siti «YouTube in MP3» che lo fanno funzionano su server che vedono tutto ciò che converti.

Esistono modi legittimi per ottenere un file dei **tuoi** contenuti, che poi puoi convertire qui:

- **YouTube:** in YouTube Studio apri *Contenuti*, fai clic sul menu ⋮ accanto a un video e scegli *Scarica*.
- **Instagram, TikTok, Facebook:** richiedi una copia dei tuoi dati dalle impostazioni dell’account; i video che hai pubblicato sono inclusi.
- **Registrazioni di Zoom, Teams, Meet:** scarica la registrazione dall’app della riunione, di solito è un MP4.

## Privato per costruzione

La maggior parte dei convertitori online ti fa caricare prima l’intero video: ci vuole tempo e una copia della tua registrazione resta sul server di qualcun altro. Qui una versione WebAssembly di FFmpeg gira dentro il tuo browser: il video viene letto dal tuo disco, l’MP3 viene scritto nei tuoi download e nulla passa dalla rete. Il motore (circa 31 MB) viene scaricato una sola volta e salvato nella cache.

## Consigli

- **Ti serve solo una parte?** Converti, poi taglia l’MP3 con [Tagliare audio](/it/tagliare-audio).
- **«Questo file non contiene una traccia audio.»:** il video è stato registrato senza suono, come capita con le registrazioni dello schermo a microfono spento.
- **Vuoi invece il video senza il suo audio?** Usa [Togliere l’audio da un video](/it/togliere-audio-video).
