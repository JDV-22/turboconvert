---
name: 'Comprimere PDF'
title: 'Comprimere PDF online gratis — ridurre le dimensioni'
description: 'Comprimi i PDF e riduci le dimensioni per email, PEC e portali online. Tre livelli di compressione, motore Ghostscript, nessun caricamento né registrazione.'
h1: 'Comprimere un PDF'
lead: 'Rendi il tuo PDF più leggero per rispettare i limiti di email e moduli online, mantenendolo leggibile. La compressione avviene sul tuo dispositivo con Ghostscript: i file non vengono mai caricati.'
what: 'il tuo PDF'
howTo: 'comprimere un PDF'
steps:
  - 'Fai clic su <strong>Scegli i file</strong> oppure trascina uno o più PDF nel riquadro qui sopra (fino a 200 MB per file).'
  - 'Scegli il livello di <strong>Compressione</strong>: «Consigliata — buona qualità» va bene per la maggior parte dei documenti.'
  - 'Fai clic su <strong>Converti</strong>. La prima volta il browser scarica il motore di compressione (circa 16 MB), che poi resta in cache.'
  - 'Il PDF compresso si scarica automaticamente e vedi quanto spazio hai risparmiato. Con più file, usa <strong>Scarica tutto (ZIP)</strong>.'
limits:
  - 'Il risultato dipende dal contenuto del PDF. Scansioni e file ricchi di immagini si riducono di più; i PDF di solo testo sono già compatti e calano poco.'
  - 'Se la compressione non rende il file più piccolo, TurboConvert ti restituisce l’originale invece di un file più grande.'
  - 'I PDF protetti da password vanno prima sbloccati con <a href="/it/sbloccare-pdf">Sbloccare PDF</a>.'
  - 'Massimo 200 MB per PDF. I file grandi richiedono più tempo da smartphone; per le scansioni pesanti un computer è più veloce.'
faq:
  - q: 'Come si riducono le dimensioni di un PDF gratis?'
    a: 'Trascina il PDF nel riquadro qui sopra, lascia il livello «Consigliata» e fai clic su Converti. La copia compressa si scarica subito, senza account, senza limiti giornalieri e senza filigrana.'
  - q: 'Comprimere un PDF ne peggiora la qualità?'
    a: 'La compressione abbassa soprattutto la risoluzione delle immagini contenute nel PDF; testo e grafica vettoriale restano nitidi a ogni livello. Usa «Leggera» se il documento va stampato, «Consigliata» per schermo ed email, «Forte» solo quando conta il peso.'
  - q: 'Come rendo un PDF abbastanza leggero da inviarlo via email?'
    a: 'Gmail e molti altri servizi limitano gli allegati a circa 20–25 MB, e alcuni server aziendali anche meno. Prova prima «Consigliata»; se il file è ancora troppo grande, usa «Forte» oppure dividilo in parti con <a href="/it/dividere-pdf">Dividere PDF</a>.'
  - q: 'Perché il mio PDF si è ridotto pochissimo?'
    a: 'Un PDF composto quasi solo da testo è già efficiente, quindi c’è poco da togliere. I risparmi grandi arrivano da pagine scansionate e foto, che spesso si riducono di oltre la metà.'
  - q: 'Posso comprimere un PDF a una dimensione precisa, come 1 MB o 200 KB?'
    a: 'Non puoi digitare una dimensione di destinazione, ma puoi avvicinarti scegliendo il livello: parti da «Consigliata» e passa a «Forte» se serve. Per un file ostinato aiuta anche eliminare le pagine superflue con <a href="/it/organizzare-pdf">Organizzare PDF</a>.'
  - q: 'I miei PDF vengono caricati per comprimerli?'
    a: 'No. Il motore Ghostscript è compilato in WebAssembly e gira nel tuo browser, quindi il PDF non lascia mai il tuo dispositivo. Una volta caricato il motore puoi persino disconnetterti da Internet.'
---

## Perché alcuni PDF sono così pesanti

Il peso di un PDF dipende quasi tutto da ciò che contiene:

- **Pagine scansionate.** Ogni pagina di una scansione è in realtà una fotografia a tutta pagina. Un documento di 20 pagine scansionato a colori a 300 o 600 dpi arriva facilmente a 20–50 MB.
- **Foto e screenshot.** Le immagini incollate in Word o PowerPoint restano spesso alla risoluzione originale della fotocamera, molto più di quanto serva a uno schermo.
- **Font incorporati.** Ogni carattere usato viene salvato nel file. Conta nei documenti brevi, ma raramente rende un file enorme.
- **Testo e disegni vettoriali.** Pesano pochissimo: una relazione di 100 pagine di solo testo resta di norma ben sotto 1 MB.

Comprimere un PDF significa quindi soprattutto **intervenire sulle immagini**: ridurne la risoluzione a ciò che serve davvero e salvarle in modo più efficiente. Per questo un contratto scansionato può perdere gran parte del suo peso, mentre un PDF di solo testo cambia appena.

## Quale livello di compressione scegliere?

TurboConvert usa Ghostscript, lo stesso motore open source di molti strumenti PDF professionali, con tre impostazioni:

| Livello | Ideale per | Immagini | Risultato tipico |
|---|---|---|---|
| **Forte — file più leggero** | Email, portali con limiti rigidi, copie d’archivio | Ridotte a risoluzione schermo | File minimo; le foto perdono dettaglio se ingrandite |
| **Consigliata — buona qualità** | La maggior parte dei documenti, lettura a schermo, condivisione | Ridotte a risoluzione e-book | Nitido su qualsiasi schermo, buona riduzione |
| **Leggera — qualità migliore** | Documenti da stampare | Mantenute a risoluzione di stampa | Simile all’originale; risparmio minore |

Su PDF scansionati o pieni di foto, riduzioni dal 50 al 90% sono frequenti. Sui PDF di solo testo aspettati un guadagno modesto; e se non c’è, ti viene restituito l’originale, così non ti ritrovi mai con un file più grande.

## Ridurre un PDF sotto un limite di peso

Le caselle email limitano gli allegati e molti portali (pubblica amministrazione, università, concorsi, banche) accettano solo file di pochi megabyte. Procedi in quest’ordine:

1. **Comprimi con «Consigliata».** Nella maggior parte dei casi basta.
2. **Non basta? Passa a «Forte».** Controlla che il documento resti leggibile, soprattutto le scritte piccole di un certificato o di una ricevuta.
3. **Togli le pagine inutili** (pagine bianche, allegati doppi) con [Organizzare PDF](/it/organizzare-pdf).
4. **Spezza il documento** in più file con [Dividere PDF](/it/dividere-pdf), se il portale accetta più allegati.

## Consigli per ottenere il file più piccolo

- **Comprimi una sola volta, alla fine.** Se devi combinare più documenti, prima [uniscili](/it/unire-pdf) e poi comprimi il file finale. Comprimere più volte lo stesso PDF degrada solo le immagini.
- **Scansioni tu la carta?** Per i documenti di testo scansiona a 150–200 dpi in scala di grigi invece che a 600 dpi a colori: il file parte molto più leggero e resta perfettamente leggibile.
- **Devi inviare foto e non un PDF?** Comprimile direttamente con [Comprimere immagini](/it/comprimere-immagini): è più rapido e hai più controllo.

## Problemi frequenti

**«Questo PDF è protetto da password».** Un PDF cifrato non può essere riscritto senza password. Sbloccalo, comprimilo e, se serve, proteggilo di nuovo.

**Il testo è diventato sfocato.** Succede solo quando il «testo» fa parte di un’immagine scansionata. Per le scansioni da stampare o leggere con attenzione usa il livello «Leggera».

**Sullo schermo va bene ma in stampa no.** La compressione forte è pensata per gli schermi. Per una tesi, una brochure o un modulo firmato da stampare, comprimi l’originale con «Leggera».

Tutto questo avviene in locale: dichiarazioni dei redditi, estratti conto o cartelle cliniche restano sul tuo dispositivo, senza nulla da cancellare da un server.
