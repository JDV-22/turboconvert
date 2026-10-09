---
name: 'PDF in testo'
title: 'Estrarre testo da PDF — convertire PDF in TXT gratis'
description: 'Estrai il testo da un PDF e salvalo come file .txt semplice. Estrazione rapida anche di più file nel tuo browser: nessun caricamento, nessuna registrazione.'
h1: 'Convertire PDF in testo'
lead: 'Estrai tutto il testo di un PDF in un file .txt da incollare ovunque: in un’email, in un traduttore, in un CMS o in un assistente IA. L’estrazione avviene sul tuo dispositivo; non viene caricato nulla.'
what: 'il tuo PDF'
howTo: 'estrarre il testo da un PDF'
steps:
  - 'Fai clic su <strong>Scegli i file</strong> oppure trascina uno o più PDF nel riquadro qui sopra.'
  - 'Fai clic su <strong>Converti</strong>. Viene estratto il testo di tutte le pagine.'
  - 'Il file .txt si scarica automaticamente. Con più PDF, scarica ogni file oppure usa <strong>Scarica tutto (ZIP)</strong>.'
limits:
  - 'Viene estratto solo il testo vero. I PDF scansionati e le foto contengono immagini di testo: usa <a href="/it/ocr-pdf">OCR PDF</a> per riconoscerlo.'
  - 'Il testo semplice non ha formattazione: grassetto, font, immagini e bordi delle tabelle vengono eliminati. Le tabelle diventano righe di testo separate da spazi.'
  - 'Nelle pagine a più colonne l’ordine di lettura può non corrispondere sempre a quello visivo.'
  - 'I PDF protetti da password vanno prima sbloccati con <a href="/it/sbloccare-pdf">Sbloccare PDF</a>. Massimo 200 MB per PDF.'
faq:
  - q: 'Come si estrae il testo da un PDF?'
    a: 'Trascina qui il PDF e fai clic su Converti. Ottieni un file .txt con tutto il testo del documento, pronto da aprire in qualsiasi editor.'
  - q: 'Perché il file di testo è vuoto?'
    a: 'Molto probabilmente il PDF è una scansione, quindi le pagine sono immagini senza livello di testo. Passalo in <a href="/it/ocr-pdf">OCR PDF</a> per riconoscere il testo.'
  - q: 'Meglio PDF in testo o PDF in Word?'
    a: 'Usa PDF in testo quando ti servono solo le parole: per copiare, cercare, tradurre o passarle a un altro strumento. Usa <a href="/it/pdf-in-word">PDF in Word</a> quando vuoi mantenere titoli, formattazione e immagini e modificare il documento.'
  - q: 'Posso estrarre il testo da più PDF insieme?'
    a: 'Sì. Trascina più PDF: ognuno produce il suo file .txt e puoi scaricarli tutti in uno ZIP.'
  - q: 'Funziona con qualsiasi lingua?'
    a: 'Sì, purché il PDF contenga un vero livello di testo. Il file viene salvato in UTF-8, quindi accenti e alfabeti non latini vengono conservati.'
---

## Perché estrarre il testo semplice?

Copiare e incollare da un lettore PDF è noioso sui documenti lunghi, e spesso spezza le righe, mescola intestazioni e piè di pagina o salta delle pagine. Estrarre il testo in un colpo solo ti dà un file `.txt` pulito che qualsiasi programma può aprire. Utile per:

- **Citare o riutilizzare contenuti** in un’email, una relazione o un sito web.
- **Tradurre**: incolla in un traduttore senza che l’impaginazione ti intralci.
- **Cercare e analizzare**: trova termini in più documenti, conta le parole, elabora il testo con script.
- **Assistenti IA e strumenti di riassunto**: molti accettano il testo semplice in modo più affidabile dei PDF.
- **Accessibilità**: il testo semplice funziona con gli screen reader e i lettori di e-book più semplici.

## Il mio PDF è digitale o scansionato?

Aprilo e prova a selezionare una sola parola con il cursore:

| Cosa succede | Tipo di PDF | Cosa usare |
|---|---|---|
| Riesci a evidenziare parole e righe | PDF digitale con livello di testo | PDF in testo (questo strumento) |
| Si seleziona tutta la pagina come un blocco, o niente | PDF scansionato / immagine | [OCR PDF](/it/ocr-pdf) |

## Consigli

- **Ti servono le tabelle come tabelle?** Il testo semplice le appiattisce. [PDF in Excel](/it/pdf-in-excel) mantiene righe e colonne.
- **Le parole sillabate a fine riga** escono come appaiono nel PDF; un rapido «trova e sostituisci» del trattino seguito da un a capo le sistema.
- **Ti serve solo una parte di un PDF lungo?** Estrai prima le pagine utili con [Dividere PDF](/it/dividere-pdf).

Il PDF viene letto nel tuo browser e non viene mai caricato, quindi estrarre il testo da contratti o relazioni interne è sicuro.

## Problemi frequenti e soluzioni

**Il file .txt è vuoto o quasi.** Il PDF non ha un livello di testo: tipico di scansioni, foto salvate come PDF e alcuni fax. L’OCR è l’unico modo per ricavarne il testo.

**Simboli strani al posto delle lettere.** Alcuni PDF usano font con una codifica interna non standard, quindi il testo non può essere decodificato correttamente anche se a schermo sembra a posto. In questi casi l’OCR della pagina di solito restituisce un testo leggibile.

**Parole o righe in un ordine strano.** Un PDF memorizza il testo nell’ordine in cui è stato disegnato, che nelle impaginazioni complesse (colonne, riquadri laterali, didascalie) non sempre coincide con l’ordine di lettura. I paragrafi ci sono tutti, ma potrebbero andare riordinati.

**Intestazioni e piè di pagina si ripetono su ogni pagina.** Intestazioni, numeri di pagina e piè di pagina sono testo vero nel PDF, quindi vengono estratti anche loro. Un «trova e sostituisci» nell’editor di testo li elimina in fretta.

**Contano solo alcune pagine.** Le relazioni lunghe producono file di testo lunghi. Estrai prima le pagine che ti servono con Dividere PDF, poi converti solo quelle.
