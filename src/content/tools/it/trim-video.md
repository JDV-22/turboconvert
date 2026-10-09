---
name: 'Tagliare video'
title: 'Tagliare video online: accorciare un MP4 gratis, senza upload'
description: 'Taglia un video impostando inizio e fine: accorcia clip MP4, MOV, WebM o MKV da condividere. Gratis, senza filigrana, funziona nel browser senza upload.'
h1: 'Tagliare un video'
lead: 'Elimina l’inizio o la fine di un video, oppure tieni solo la parte che conta, inserendo un orario di inizio e di fine. Tutto avviene nel browser: il video non viene mai caricato.'
what: 'il tuo video'
howTo: 'tagliare un video'
steps:
  - 'Fai clic su <strong>Scegli un file</strong> oppure trascina il video: sono accettati MP4, MOV, WebM, MKV, AVI e gli altri formati più diffusi.'
  - 'Inserisci l’<strong>Inizio</strong> della parte da tenere, in ore:minuti:secondi (per esempio <code>00:01:15</code>).'
  - 'Inserisci la <strong>Fine</strong> (per esempio <code>00:02:30</code>), oppure lascia il campo vuoto per tenere tutto fino alla fine.'
  - 'Fai clic su <strong>Converti</strong>. La clip tagliata si scarica automaticamente.'
limits:
  - 'Un video alla volta, fino a 1 GB. Al primo utilizzo viene scaricato il motore di conversione (circa 31 MB), poi tenuto in cache.'
  - 'Lo strumento tiene un solo segmento continuo. Per eliminare una parte centrale, taglia due volte (prima e dopo il pezzo da togliere) e conserva entrambe le clip.'
  - 'Non c’è una timeline visiva: riproduci prima il video nel tuo lettore abituale per trovare i tempi esatti.'
  - 'La velocità dipende dal dispositivo; per i video lunghi un computer è più veloce di un telefono.'
faq:
  - q: 'Come tagliare l’inizio di un video?'
    a: 'Imposta l’inizio nel momento in cui vuoi che parta il video (es. 00:00:08) e lascia vuota la fine. Tutto ciò che precede viene eliminato.'
  - q: 'Come tagliare la fine di un video?'
    a: 'Lascia l’inizio a 00:00:00 e imposta la fine nel momento in cui il video deve fermarsi. Tutto ciò che segue viene eliminato.'
  - q: 'Come trovo i tempi giusti di inizio e fine?'
    a: 'Riproduci il video in qualsiasi lettore (Foto, QuickTime, VLC, la galleria del telefono), metti in pausa nei punti di inizio e fine e annota il tempo indicato. Poi inserisci quei tempi qui.'
  - q: 'Tagliare un video ne riduce la qualità?'
    a: 'Il taglio mantiene la risoluzione del video. Per rendere anche il file più leggero, passa la clip tagliata in <a href="/it/comprimere-video">Comprimere video</a>.'
  - q: 'Ci sono filigrane o limiti di durata?'
    a: 'Nessuna filigrana. I file possono arrivare a 1 GB, senza limiti sulla durata della parte che tieni.'
  - q: 'Il mio video viene caricato?'
    a: 'No. Il video viene tagliato da FFmpeg in esecuzione nel browser e non lascia mai il tuo dispositivo.'
---

## Quando tagliare un video

Quasi tutte le registrazioni hanno qualche secondo di troppo: il telefono che si assesta prima dell’azione, il momento in cui cerchi il tasto stop, la lunga introduzione prima che parta una conferenza. Eliminarli rende i video più piacevoli da guardare e più leggeri da inviare. Usi tipici:

- **Condividere un momento clou** (un gol, un discorso, una scena divertente) da una registrazione più lunga.
- **Ripulire registrazioni dello schermo** prima di pubblicare un tutorial o segnalare un bug.
- **Rientrare in un limite di peso o di durata** di un’app di chat, di un’e-mail o di un social.
- **Preparare una clip** per una presentazione o un progetto video.

## Come funzionano i tempi

I tempi si scrivono in **ore:minuti:secondi**:

| Vuoi | Inizio | Fine |
|---|---|---|
| Eliminare i primi 10 secondi | `00:00:10` | *(vuoto)* |
| Tenere solo il primo minuto | `00:00:00` | `00:01:00` |
| Tenere da 1:15 a 2:30 | `00:01:15` | `00:02:30` |
| Tenere da 1 h 5 min alla fine | `01:05:00` | *(vuoto)* |

La clip contiene tutto ciò che sta tra l’inizio e la fine. Se non sei sicuro, aggiungi un secondo di margine da ogni lato: puoi sempre tagliare di nuovo.

## Consigli

- **Ti serve una GIF?** [Video in GIF](/it/video-in-gif) crea un’animazione in loop da pochi secondi di video, con le sue impostazioni di inizio e durata.
- **Togli il suono** alla clip tagliata con [Togliere l’audio da un video](/it/togliere-audio-video).
- **Alleggeriscila per l’invio:** tagliare prima e comprimere poi con [Comprimere video](/it/comprimere-video) dà il file più piccolo.
- **Ti serve solo l’audio di un pezzo?** Converti con [MP4 in MP3](/it/mp4-in-mp3), poi taglia l’MP3 con [Tagliare audio](/it/tagliare-audio).

## Problemi comuni

- **La clip parte un attimo prima o dopo.** Correggi l’inizio di un secondo e converti di nuovo.
- **Ricevi un errore sul tempo.** Usa il formato ore:minuti:secondi con due cifre per ogni parte e verifica che la fine sia dopo l’inizio e non oltre la durata del video.
- **Il video del telefono è molto pesante.** Il taglio non cambia la qualità: per ridurre il peso, comprimi la clip dopo averla tagliata.

## Niente upload, niente filigrana

I servizi online per tagliare video di solito caricano l’intero file prima di permetterti di fare qualsiasi cosa: lento per i video grandi e poco adatto ai filmati personali. TurboConvert esegue FFmpeg, il motore open source usato da molti software video professionali, dentro il browser. Il video viene letto dal tuo disco e la clip tagliata finisce direttamente nei tuoi download, senza filigrana e senza account.
