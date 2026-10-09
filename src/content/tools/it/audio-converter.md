---
name: 'Convertitore audio'
title: 'Convertitore audio online: MP3, WAV, M4A, OGG, FLAC, OPUS'
description: 'Convertitore audio online gratuito: converti tra MP3, WAV, M4A (AAC), OGG, FLAC e OPUS o estrai l’audio da un video. In blocco, nel browser, senza upload.'
h1: 'Convertitore audio'
lead: 'Converti qualsiasi file audio, o la colonna sonora di un video, in MP3, WAV, M4A, OGG, FLAC o OPUS. Un file o un gruppo, tutto elaborato nel browser senza caricare nulla.'
what: 'i tuoi file audio'
howTo: 'convertire file audio'
steps:
  - 'Fai clic su <strong>Scegli i file</strong> oppure trascina file audio o video: sono accettati MP3, WAV, M4A, AAC, OGG, FLAC, OPUS, WMA, AIFF, AMR, MP4, MOV e altri.'
  - 'Scegli il <strong>Formato di output</strong>: MP3, WAV, M4A (AAC), OGG (Vorbis), FLAC oppure OPUS.'
  - 'Fai clic su <strong>Converti</strong>, poi scarica ogni file oppure tutto con <strong>Scarica tutto (ZIP)</strong>.'
limits:
  - 'File fino a 1 GB ciascuno. Al primo utilizzo viene scaricato il motore di conversione (circa 31 MB), poi tenuto in cache.'
  - 'Qui non c’è un’impostazione del bitrate: ogni formato usa una buona qualità per uso generale. Per scegliere un bitrate MP3 preciso usa <a href="/it/wav-in-mp3">WAV in MP3</a>, <a href="/it/m4a-in-mp3">M4A in MP3</a> o <a href="/it/mp4-in-mp3">MP4 in MP3</a>.'
  - 'Convertire un file con perdita (MP3, M4A, OGG) in un formato senza perdita (WAV, FLAC) non recupera la qualità: evita solo ulteriori perdite.'
  - 'I file protetti da copia (DRM) non possono essere convertiti.'
faq:
  - q: 'Quale formato audio scegliere?'
    a: 'MP3 per la massima compatibilità, M4A (AAC) per i dispositivi Apple e una buona qualità in poco spazio, OPUS per la voce in file minuscoli, FLAC per l’archiviazione senza perdita, WAV per i software di editing.'
  - q: 'Posso estrarre l’audio da un video?'
    a: 'Sì. Trascina un MP4, MOV, WebM, MKV o un altro video e scegli il formato di output: la traccia audio viene estratta e convertita.'
  - q: 'Il FLAC è meglio del WAV?'
    a: 'Entrambi sono senza perdita e suonano in modo identico. Il FLAC è compresso, quindi in genere pesa da metà a due terzi del WAV, e supporta i tag; il WAV è accettato da più strumenti di editing e hardware.'
  - q: 'Posso convertire più file insieme?'
    a: 'Sì. Trascina tutti i file che vuoi: vengono convertiti nel formato scelto uno dopo l’altro e puoi scaricarli insieme in uno ZIP.'
  - q: 'I miei file vengono caricati?'
    a: 'No. Il convertitore è FFmpeg in esecuzione nel browser, quindi il tuo audio resta sul tuo dispositivo.'
---

## Quale formato per quale uso?

| Formato | Tipo | Ideale per |
|---|---|---|
| **MP3** | Con perdita | Ascoltare ovunque: telefoni, auto, siti, qualsiasi lettore |
| **M4A (AAC)** | Con perdita | iPhone, iTunes/Musica, buona qualità in poco spazio |
| **OGG (Vorbis)** | Con perdita | Giochi, Linux, progetti open source |
| **OPUS** | Con perdita | Voce, podcast e streaming a bitrate molto bassi |
| **FLAC** | Senza perdita (compresso) | Archiviare musica, ascolto hi-fi |
| **WAV** | Senza perdita (non compresso) | Editing, produzione, hardware, CD |

### Con perdita o senza perdita?

I formati con perdita (MP3, AAC, Vorbis, Opus) eliminano i suoni che l’orecchio percepisce a fatica per rendere i file leggeri. I formati senza perdita (FLAC, WAV) conservano ogni campione. Ne derivano tre regole:

- **Da senza perdita a con perdita** risparmi molto spazio con poca differenza udibile a bitrate adeguati.
- **Da con perdita a senza perdita** il suono non migliora mai: serve solo quando uno strumento richiede WAV o FLAC, o per modificare l’audio senza aggiungere un’altra compressione.
- **Evita le catene di conversioni con perdita** (MP3 → OGG → M4A): ogni passaggio perde qualcosa in più. Converti dalla sorgente migliore che hai.

## Formati in ingresso

Il convertitore legge quasi ogni file audio: **MP3, WAV, M4A, AAC, OGG/OGA, FLAC, OPUS, WMA, AIFF/AIF e AMR** (frequente nelle registrazioni dei vecchi cellulari). Accetta anche **video** (MP4, MOV, WebM, MKV, AVI, WMV, 3GP e altri) e ne estrae il suono.

## Strumenti specifici

Per le conversioni più comuni, pagine dedicate offrono la scelta del bitrate:

- [WAV in MP3](/it/wav-in-mp3), [M4A in MP3](/it/m4a-in-mp3), [OGG in MP3](/it/ogg-in-mp3), [FLAC in MP3](/it/flac-in-mp3)
- [MP3 in WAV](/it/mp3-in-wav) per editor e hardware
- [Tagliare audio](/it/tagliare-audio) per tenere solo una parte di una registrazione

## Privato per scelta

I convertitori audio online di solito caricano i tuoi file su un server. TurboConvert esegue FFmpeg, il motore open source alla base di innumerevoli strumenti multimediali, compilato in WebAssembly nel tuo browser. Registrazioni, interviste e brani inediti non lasciano mai il tuo dispositivo, e non c’è nessun upload da aspettare.

## Problemi comuni

- **Il file convertito non suona meglio.** Passare da MP3 a WAV o FLAC non può restituire ciò che l’MP3 ha eliminato. Usa la registrazione originale o una sorgente senza perdita, se ce l’hai.
- **Il file non si apre sull’iPhone.** OGG e OPUS hanno un supporto limitato nelle app predefinite di Apple; per i dispositivi Apple scegli M4A (AAC) o MP3.
- **Una vecchia registrazione del cellulare (.amr) non si apre.** L’AMR è accettato qui: convertilo in MP3 per ascoltarlo ovunque.
