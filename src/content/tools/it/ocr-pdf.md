---
name: 'OCR PDF'
title: 'OCR PDF online gratis — estrarre testo da scansioni'
description: 'OCR gratis per estrarre il testo da PDF scansionati e immagini (JPG, PNG). 6 lingue, italiano compreso, motore Tesseract nel browser: nessun caricamento.'
h1: 'OCR: estrarre il testo da PDF scansionati'
lead: 'Riconosci il testo in PDF scansionati, foto di documenti e screenshot, e ottienilo come testo modificabile. L’OCR gira sul tuo dispositivo con il motore Tesseract: i file non vengono mai caricati.'
what: 'la tua scansione'
howTo: 'estrarre il testo da un PDF scansionato'
steps:
  - 'Fai clic su <strong>Scegli un file</strong> oppure trascina un PDF scansionato o un’immagine (JPG, PNG, WebP) nel riquadro qui sopra.'
  - 'Scegli la <strong>Lingua del documento</strong>: inglese, francese, spagnolo, tedesco, portoghese o italiano.'
  - 'Fai clic su <strong>Converti</strong>. La prima volta il browser scarica il motore OCR e i dati della lingua, poi li tiene in cache.'
  - 'Al termine del riconoscimento, il file di testo si scarica automaticamente.'
limits:
  - 'Sono disponibili sei lingue: inglese, francese, spagnolo, tedesco, portoghese e italiano.'
  - 'L’OCR è più lento degli altri strumenti perché legge ogni pagina come un’immagine. I documenti lunghi possono richiedere diversi minuti, soprattutto da smartphone.'
  - 'La precisione dipende dalla scansione. Testo stampato pulito, dritto e ben illuminato dà i risultati migliori; scrittura a mano, caratteri minuscoli e foto sfocate danno risultati scarsi.'
  - 'Un file alla volta. Massimo 100 MB.'
faq:
  - q: 'Che cos’è l’OCR?'
    a: 'L’OCR (riconoscimento ottico dei caratteri) trasforma un’immagine di testo (una scansione, una foto o uno screenshot) in testo vero che puoi copiare, cercare e modificare. Senza OCR, un PDF scansionato è solo una serie di immagini.'
  - q: 'Come capisco se il mio PDF ha bisogno dell’OCR?'
    a: 'Prova a selezionare una parola nel PDF. Se non ci riesci, o si evidenzia tutta la pagina come un blocco, il PDF è scansionato e serve l’OCR. Se riesci a selezionare le parole, <a href="/it/pdf-in-testo">PDF in testo</a> è più veloce ed esatto.'
  - q: 'Quanto è preciso l’OCR?'
    a: 'Sui documenti stampati e puliti la maggior parte del testo viene riconosciuta correttamente, ma nessun OCR è perfetto. Rileggi sempre nomi, numeri e importi prima di farci affidamento.'
  - q: 'Riesce a leggere la scrittura a mano?'
    a: 'Non in modo affidabile. Il motore è pensato per il testo stampato; lo stampatello ordinato a volte funziona, il corsivo di solito no.'
  - q: 'Perché la prima volta è lento?'
    a: 'Il browser scarica prima il motore OCR e i dati della tua lingua. Poi restano in cache, quindi le volte successive si parte molto più in fretta.'
  - q: 'Le mie scansioni vengono caricate?'
    a: 'No. Il riconoscimento avviene interamente nel tuo browser. Scansioni di documenti d’identità, referti medici o contratti non lasciano mai il tuo dispositivo.'
---

## I PDF scansionati hanno bisogno dell’OCR

Quando scansioni un foglio o fotografi una pagina, il risultato è un’immagine, anche se viene salvata come PDF. Non puoi cercarci dentro, copiarne il testo né convertirla in Word. L’OCR analizza la forma delle lettere e ricostruisce il testo.

TurboConvert usa **Tesseract**, un motore OCR open source molto diffuso, compilato per girare nel tuo browser. Scegliere la lingua giusta è importante: permette al motore di riconoscere i caratteri accentati (à, è, é, ì, ò, ù…) e le parole più comuni di quella lingua.

## Ottenere il riconoscimento migliore

| Fattore | Bene | Problematico |
|---|---|---|
| Risoluzione | Scansioni a 300 dpi, foto nitide dal telefono | Immagini piccole, compresse o sfocate |
| Allineamento | Pagine dritte | Pagine storte o ruotate |
| Contrasto | Testo nero su carta bianca | Stampa sbiadita, sfondi colorati, ombre |
| Contenuto | Testo stampato | Scrittura a mano, font decorativi, testo sopra immagini |

Consigli pratici:

- **Raddrizza prima le scansioni di lato** con [Ruotare PDF](/it/ruotare-pdf): l’OCR funziona meglio sulle pagine dritte.
- **Fotografi un documento?** Tieni il telefono parallelo al foglio, con buona luce, e riempi l’inquadratura con il testo.
- **Ti servono solo alcune pagine?** Estraile con [Dividere PDF](/it/dividere-pdf) per risparmiare tempo sui documenti lunghi.
- **Scegli la lingua del documento**, non la tua: una lettera in inglese scansionata a Milano va comunque letta in inglese.

## OCR, PDF in testo o PDF in Word?

| Il tuo file | Strumento migliore | Perché |
|---|---|---|
| PDF scansionato, foto di una pagina, screenshot | OCR PDF | Il testo esiste solo come pixel |
| PDF digitale, ti servono solo le parole | [PDF in testo](/it/pdf-in-testo) | Testo esatto, immediato, senza errori di riconoscimento |
| PDF digitale da modificare con la formattazione | [PDF in Word](/it/pdf-in-word) | Mantiene titoli, stili e immagini |

Il testo riconosciuto è pronto da incollare in un’email o in un documento. Se ti serve un documento formattato, incollalo in Word o Google Documenti.

## Problemi frequenti e soluzioni

**Il risultato è pieno di caratteri senza senso.** Probabilmente la pagina è ruotata, ha una risoluzione molto bassa o è selezionata la lingua sbagliata. Raddrizza la pagina, usa una scansione più nitida e scegli la lingua del documento.

**Alcune parole sono sbagliate.** Controlla i caratteri simili: «l» e «1», «O» e «0», «rn» e «m» sono confusioni classiche dell’OCR, soprattutto con caratteri piccoli. Una rilettura veloce le corregge.

**Le colonne si mescolano.** Nelle pagine a più colonne, come i giornali, le righe di colonne vicine possono essere unite. Ritaglia ogni colonna in un’immagine separata prima di avviare l’OCR.

**Ci mette molto tempo.** Ogni pagina viene analizzata singolarmente. Elabora solo le pagine che ti servono davvero e, per documenti di più di qualche decina di pagine, preferisci un computer.
