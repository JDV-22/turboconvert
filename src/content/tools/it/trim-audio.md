---
name: 'Tagliare audio'
title: 'Tagliare audio e MP3 online gratis, senza upload'
description: 'Taglia un file MP3, WAV, M4A o altro audio impostando inizio e fine. Crea suonerie, estratti e registrazioni più brevi. Gratis, nel browser, senza upload.'
h1: 'Tagliare un file audio'
lead: 'Tieni solo la parte di una registrazione o di una canzone che ti serve inserendo un orario di inizio e di fine: ideale per suonerie, estratti e per ripulire le registrazioni vocali. Tagliato nel browser, mai caricato.'
what: 'il tuo file audio'
howTo: 'tagliare un file audio'
steps:
  - 'Fai clic su <strong>Scegli un file</strong> oppure trascina un file audio: sono accettati MP3, WAV, M4A, AAC, OGG, FLAC, OPUS, WMA, AIFF e AMR.'
  - 'Inserisci l’<strong>Inizio</strong> in ore:minuti:secondi, per esempio <code>00:00:12</code>.'
  - 'Inserisci la <strong>Fine</strong>, per esempio <code>00:00:42</code>, oppure lascia il campo vuoto per tenere tutto fino alla fine.'
  - 'Fai clic su <strong>Converti</strong>. Il file tagliato si scarica automaticamente.'
limits:
  - 'Un file alla volta, fino a 1 GB. Al primo utilizzo viene scaricato il motore di conversione (circa 31 MB), poi tenuto in cache.'
  - 'Non c’è forma d’onda né anteprima: trova prima i tempi nel tuo lettore abituale.'
  - 'Lo strumento tiene una sola sezione continua. Per eliminare una parte centrale, taglia separatamente le due parti.'
  - 'Non viene aggiunta nessuna dissolvenza in entrata o in uscita.'
faq:
  - q: 'Come tagliare l’inizio di un MP3?'
    a: 'Imposta l’inizio nel punto in cui vuoi che parta l’audio (es. 00:00:05) e lascia vuota la fine. Tutto ciò che precede viene eliminato.'
  - q: 'Come trovo i tempi esatti di inizio e fine?'
    a: 'Riproduci il file in qualsiasi lettore (il telefono, VLC, Windows Media Player, QuickTime), metti in pausa nei punti che ti interessano e annota il tempo indicato.'
  - q: 'Come creare una suoneria da una canzone?'
    a: 'Taglia la canzone in una sezione breve, circa 30 secondi, e trasferiscila sul telefono. Android accetta suonerie in MP3; le suonerie dell’iPhone vanno importate con gli strumenti di Apple, nel formato .m4r.'
  - q: 'Posso tagliare un memo vocale o una registrazione?'
    a: 'Sì. Sono accettati memo vocali M4A, registrazioni WAV e gli altri formati più diffusi. Elimina il silenzio all’inizio e alla fine prima di condividerli.'
  - q: 'Il mio audio viene caricato?'
    a: 'No. L’audio viene tagliato da FFmpeg in esecuzione nel browser; il file resta sul tuo dispositivo.'
---

## Perché tagliare un audio

- **Suonerie e suoni di notifica**: tieni il ritornello o i 20–30 secondi più riconoscibili.
- **Memo vocali e interviste**: elimina il silenzio e i rumori di manipolazione all’inizio e alla fine.
- **Estratti di podcast e video**: isola una citazione o un momento clou da condividere sui social.
- **Studio di uno strumento**: isola un passaggio da ripetere in loop in un’app per esercitarti.
- **Presentazioni**: tieni solo la parte di un brano che ti serve come musica di sottofondo.

## Come scrivere i tempi

I tempi si scrivono in **ore:minuti:secondi**:

| Vuoi | Inizio | Fine |
|---|---|---|
| Eliminare i primi 5 secondi | `00:00:05` | *(vuoto)* |
| Tenere i primi 30 secondi | `00:00:00` | `00:00:30` |
| Tenere da 1:10 a 1:40 | `00:01:10` | `00:01:40` |
| Tenere da 45 minuti alla fine | `00:45:00` | *(vuoto)* |

Se non sei sicuro del momento esatto, lascia un secondo di margine da ogni lato: puoi sempre tagliare di nuovo.

## Consigli

- **Ti serve un altro formato dopo il taglio?** Converti l’estratto con il [convertitore audio](/it/convertitore-audio) in MP3, WAV, M4A, OGG, FLAC o OPUS.
- **File più leggero da condividere?** Gli estratti WAV senza perdita diventano MP3 compatti con [WAV in MP3](/it/wav-in-mp3).
- **L’audio è dentro un video?** Estrailo prima con [MP4 in MP3](/it/mp4-in-mp3), oppure taglia direttamente il video con [Tagliare video](/it/tagliare-video).

## Formati supportati

Puoi tagliare file MP3, WAV, M4A, AAC, OGG, FLAC, OPUS, WMA, AIFF e AMR fino a 1 GB: file musicali, memo vocali del telefono, esportazioni dei registratori e vecchie registrazioni dei cellulari.

## Problemi comuni

- **Il taglio è sfasato di una frazione di secondo.** Lascia un po’ di margine e ritaglia se serve; per tagli precisi al campione è più adatto un editor con forma d’onda come Audacity.
- **Si sente un clic all’inizio o alla fine.** Tagliare nel mezzo di un suono può produrre un clic, perché non viene aggiunta nessuna dissolvenza. Sposta il punto di taglio in un momento più silenzioso.

## Nessun upload

Il tuo audio viene elaborato da FFmpeg, il motore open source alla base di molti strumenti multimediali professionali, compilato in WebAssembly e in esecuzione nel browser. Nessun account, nessuna filigrana, e le tue registrazioni non lasciano mai il dispositivo.
