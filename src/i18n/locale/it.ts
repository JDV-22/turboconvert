import type { LocalePack } from '../packs';

// Italian (it). Register: informal "tu", as is usual for Italian web tools.
const it: LocalePack = {
  slugs: {
    tools: {
      // PDF
      'compress-pdf': 'comprimere-pdf',
      'merge-pdf': 'unire-pdf',
      'split-pdf': 'dividere-pdf',
      'rotate-pdf': 'ruotare-pdf',
      'organize-pdf': 'organizzare-pdf',
      'pdf-to-jpg': 'pdf-in-jpg',
      'pdf-to-png': 'pdf-in-png',
      'jpg-to-pdf': 'jpg-in-pdf',
      'png-to-pdf': 'png-in-pdf',
      'add-page-numbers': 'numerare-pagine-pdf',
      'watermark-pdf': 'filigrana-pdf',
      'protect-pdf': 'proteggere-pdf',
      'unlock-pdf': 'sbloccare-pdf',
      'pdf-to-text': 'pdf-in-testo',
      'ocr-pdf': 'ocr-pdf',
      // Documents
      'pdf-to-word': 'pdf-in-word',
      'word-to-pdf': 'word-in-pdf',
      'pdf-to-excel': 'pdf-in-excel',
      'excel-to-pdf': 'excel-in-pdf',
      'pdf-to-ppt': 'pdf-in-ppt',
      'ppt-to-pdf': 'ppt-in-pdf',
      'word-to-jpg': 'word-in-jpg',
      // Images
      'compress-image': 'comprimere-immagini',
      'resize-image': 'ridimensionare-immagini',
      'heic-to-jpg': 'heic-in-jpg',
      'heic-to-png': 'heic-in-png',
      'png-to-jpg': 'png-in-jpg',
      'jpg-to-png': 'jpg-in-png',
      'webp-to-jpg': 'webp-in-jpg',
      'webp-to-png': 'webp-in-png',
      'jpg-to-webp': 'jpg-in-webp',
      'png-to-webp': 'png-in-webp',
      'svg-to-png': 'svg-in-png',
      'avif-to-jpg': 'avif-in-jpg',
      'image-to-ico': 'png-in-ico',
      // Video
      'mp4-to-mp3': 'mp4-in-mp3',
      'video-to-gif': 'video-in-gif',
      'compress-video': 'comprimere-video',
      'trim-video': 'tagliare-video',
      'mute-video': 'togliere-audio-video',
      'mov-to-mp4': 'mov-in-mp4',
      'webm-to-mp4': 'webm-in-mp4',
      'mkv-to-mp4': 'mkv-in-mp4',
      'mp3-to-mp4': 'mp3-in-mp4',
      // Audio
      'wav-to-mp3': 'wav-in-mp3',
      'mp3-to-wav': 'mp3-in-wav',
      'm4a-to-mp3': 'm4a-in-mp3',
      'ogg-to-mp3': 'ogg-in-mp3',
      'flac-to-mp3': 'flac-in-mp3',
      'audio-converter': 'convertitore-audio',
      'trim-audio': 'tagliare-audio',
    },
    categories: {
      pdf: 'strumenti-pdf',
      image: 'strumenti-immagini',
      document: 'convertitori-documenti',
      video: 'strumenti-video',
      audio: 'strumenti-audio',
    },
    pages: {
      about: 'chi-siamo',
      contact: 'contatti',
      privacy: 'privacy',
      terms: 'termini',
      blog: 'blog',
      tools: 'strumenti',
    },
  },

  home: {
    title: 'Convertitore di file gratis online — PDF, immagini, video',
    description: 'Converti PDF, Word, Excel, immagini, audio e video gratis. Oltre 50 strumenti nel tuo browser: nessun caricamento, nessuna registrazione, nessuna filigrana.',
    faq: [
      { q: 'TurboConvert è davvero gratis?', a: 'Sì. Tutti gli strumenti sono gratuiti, senza account, senza limiti giornalieri e senza filigrana. Il sito si finanzia con una pubblicità discreta, mai facendoti pagare le conversioni.' },
      { q: 'I miei file vengono caricati su un server?', a: 'No. Le conversioni avvengono nel tuo browser grazie a versioni WebAssembly di motori open source (Ghostscript, FFmpeg, PDF.js, pdf-lib). I tuoi file restano sul tuo dispositivo, e puoi verificarlo nella scheda Rete del browser.' },
      { q: 'C’è un limite di dimensione per i file?', a: 'Il limite dipende dallo strumento (di solito da 100 MB a 1 GB) e soprattutto dalla memoria del tuo dispositivo, perché il lavoro avviene in locale. Un computer gestisce i file grandi meglio di uno smartphone.' },
      { q: 'Funziona su iPhone, Android, Mac e Windows?', a: 'Sì. TurboConvert funziona in tutti i browser moderni (Safari, Chrome, Edge, Firefox) su smartphone, tablet e computer. Non devi installare nulla.' },
      { q: 'Perché la prima conversione video o OCR è più lenta?', a: 'Alcuni strumenti hanno bisogno di un motore pesante (per esempio FFmpeg per i video, circa 31 MB). Viene scaricato una sola volta e poi resta nella cache del browser, quindi le conversioni successive partono subito.' },
      { q: 'Posso usare TurboConvert offline?', a: 'Una volta caricati la pagina di uno strumento e il suo motore, la conversione non ha più bisogno di Internet. Puoi disconnetterti e continuare a convertire su quella pagina.' },
    ],
    body: `<h2>Un convertitore che rispetta i tuoi file</h2>
<p>Quasi tutti i convertitori online funzionano allo stesso modo: carichi il documento sui loro server, aspetti in coda e poi scarichi il risultato, sperando che il file venga davvero cancellato come promesso. TurboConvert fa il contrario: è il software di conversione ad arrivare nel tuo browser, e i tuoi file non lasciano mai il dispositivo. È più veloce (niente caricamento, niente coda), più sicuro (non c’è nulla che possa finire in mani sbagliate) e funziona anche con una connessione lenta.</p>
<h2>Cosa puoi fare</h2>
<ul>
<li><strong>PDF</strong>: comprimere, unire, dividere, ruotare, numerare le pagine, aggiungere una filigrana, proteggere o sbloccare, convertire da e verso JPG e PNG, estrarre il testo e fare l’OCR delle scansioni.</li>
<li><strong>Documenti</strong>: convertire PDF in Word, Excel o PowerPoint, e Word, Excel o PowerPoint in PDF.</li>
<li><strong>Immagini</strong>: convertire HEIC (le foto dell’iPhone), WebP, AVIF, PNG, JPG e SVG, comprimere e ridimensionare in blocco, creare favicon.</li>
<li><strong>Video e audio</strong>: estrarre l’MP3 da un video, convertire MOV, WebM e MKV in MP4, creare GIF, comprimere e tagliare video, convertire WAV, M4A, OGG e FLAC.</li>
</ul>`,
  },

  hubs: {
    all: {
      title: 'Tutti gli strumenti di conversione gratis — PDF, immagini, video',
      description: 'Tutti gli strumenti TurboConvert in un unico posto: convertitori PDF, Word, Excel, immagini, video e audio nel tuo browser. Gratis e privati.',
      h1: 'Tutti gli strumenti',
      lead: 'Tutti i convertitori e gli editor di TurboConvert. Gratuiti, e tutti in esecuzione privata nel tuo browser.',
      body: '',
    },
    pdf: {
      title: 'Strumenti PDF gratis online — comprimere, unire, convertire',
      description: 'Comprimi, unisci, dividi, ruota, proteggi e converti PDF gratis, direttamente nel browser. Nessun file viene caricato, nessuna registrazione.',
      h1: 'Strumenti PDF',
      lead: 'Tutto quello che serve per lavorare con i PDF (comprimere, unire, dividere, convertire, proteggere) elaborato sul tuo dispositivo.',
      body: `<h2>Modificare e convertire PDF senza caricarli</h2>
<p>I PDF contengono spesso i documenti che meno vorremmo condividere: contratti, buste paga, dichiarazioni dei redditi, documenti d’identità. Gli strumenti PDF di TurboConvert usano gli stessi motori open source dei software professionali (Ghostscript per la compressione, PDF.js per la visualizzazione, pdf-lib per la modifica), ma funzionano nel tuo browser: i tuoi file non finiscono su nessun server.</p>
<h2>Quale strumento PDF ti serve?</h2>
<ul>
<li><strong>File troppo pesante per un’email?</strong> Usa <a href="/it/comprimere-pdf">Comprimere PDF</a>: i documenti scansionati spesso si riducono di oltre la metà.</li>
<li><strong>Più documenti da inviare come uno solo?</strong> <a href="/it/unire-pdf">Unire PDF</a> li combina nell’ordine che scegli.</li>
<li><strong>Ti servono solo alcune pagine?</strong> <a href="/it/dividere-pdf">Dividere PDF</a> estrae gli intervalli di pagine.</li>
<li><strong>Devi modificare il testo?</strong> Convertilo con <a href="/it/pdf-in-word">PDF in Word</a>.</li>
<li><strong>Documento scansionato?</strong> Rendi il testo utilizzabile con <a href="/it/ocr-pdf">OCR PDF</a>.</li>
</ul>`,
    },
    document: {
      title: 'Convertire PDF in Word, Excel e PowerPoint — gratis online',
      description: 'Converti PDF in Word, Excel o PowerPoint e viceversa, gratis nel tuo browser. File modificabili, nessun caricamento, nessuna registrazione.',
      h1: 'Convertitori di documenti',
      lead: 'Trasforma i PDF in file Word, Excel e PowerPoint modificabili, e i documenti Office in PDF, senza caricarli da nessuna parte.',
      body: `<h2>Documenti Office convertiti sul tuo dispositivo</h2>
<p>Convertire tra PDF e formati Office di solito significa affidare a un sito web relazioni, fatture o presentazioni. Qui la conversione avviene in locale nel browser: il PDF viene analizzato pagina per pagina per ricostruire paragrafi, titoli, tabelle e immagini, e i file Office vengono trasformati in PDF senza lasciare il tuo computer.</p>
<p>Per i PDF scansionati (foto di documenti cartacei), esegui prima l’<a href="/it/ocr-pdf">OCR</a> in modo che il testo venga riconosciuto.</p>`,
    },
    image: {
      title: 'Convertitore e compressore di immagini gratis — HEIC, WebP, JPG',
      description: 'Converti HEIC, WebP, AVIF, PNG, JPG e SVG, comprimi e ridimensiona immagini in blocco, gratis nel tuo browser. Nessun caricamento, niente filigrana.',
      h1: 'Strumenti per immagini',
      lead: 'Converti, comprimi e ridimensiona foto e grafiche in blocco: HEIC dell’iPhone, WebP, AVIF, PNG, JPG, SVG e altro.',
      body: `<h2>Conversione di immagini in blocco, nel tuo browser</h2>
<p>Trascina una foto o qualche centinaio: le immagini vengono decodificate e ricodificate dal motore grafico del tuo browser (più un decoder WebAssembly per le foto HEIC dell’iPhone), poi te le offriamo una per una o in un unico ZIP. Non viene caricato nulla, e proprio per questo è veloce: non c’è tempo di trasferimento.</p>
<h2>Scegliere il formato giusto</h2>
<ul>
<li><strong>JPG</strong>: foto, massima compatibilità.</li>
<li><strong>PNG</strong>: screenshot, loghi, trasparenza, senza perdita.</li>
<li><strong>WebP</strong>: formato web moderno, dal 25 al 35% più leggero del JPG, supporta la trasparenza.</li>
<li><strong>HEIC</strong>: il formato delle foto dell’iPhone; convertilo in JPG per Windows, Android e siti web.</li>
</ul>`,
    },
    video: {
      title: 'Convertitore video gratis online — MP4, MOV, GIF, comprimere',
      description: 'Converti MOV, WebM e MKV in MP4, estrai l’MP3 da un video, crea GIF, comprimi e taglia video: gratis e privato, nel browser. Nessun caricamento.',
      h1: 'Strumenti video',
      lead: 'Converti, comprimi, taglia e trasforma i video in GIF o MP3, con FFmpeg in esecuzione privata nel tuo browser.',
      body: `<h2>FFmpeg nel tuo browser</h2>
<p>Gli strumenti video di TurboConvert usano FFmpeg, il motore alla base della maggior parte dei software video professionali, compilato in WebAssembly. Il motore (circa 31 MB) viene scaricato una volta sola e poi resta in cache. Dato che il tuo video non viene mai caricato, non devi aspettare il trasferimento di 500 MB prima che la conversione inizi.</p>
<p>La velocità dipende dal tuo dispositivo: per video lunghi o ad alta risoluzione è consigliato un computer recente.</p>`,
    },
    audio: {
      title: 'Convertitore audio gratis online — MP3, WAV, M4A, FLAC, OGG',
      description: 'Converti WAV, M4A, FLAC e OGG in MP3, MP3 in WAV e taglia file audio: gratis, nel tuo browser con FFmpeg. Nessun caricamento, nessuna registrazione.',
      h1: 'Strumenti audio',
      lead: 'Converti tra MP3, WAV, M4A, AAC, OGG, FLAC e OPUS, oppure taglia una traccia: in locale, senza caricare nulla.',
      body: `<h2>Con perdita o senza perdita?</h2>
<p><strong>MP3, M4A (AAC), OGG e OPUS</strong> sono formati con perdita: file leggeri, ideali per ascoltare e condividere. <strong>WAV e FLAC</strong> conservano ogni dettaglio: il WAV non è compresso ed è universale nei programmi audio, il FLAC è compresso senza perdita. Convertire un file con perdita in un formato senza perdita non recupera la qualità persa: rende solo il file più grande.</p>`,
    },
  },
};

export default it;
