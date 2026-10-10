// Generates "compress PDF to <size>" and "compress image to <size>" landing
// pages for es/de/pt/it. Re-run after editing: node scripts/gen-intl-size-pages.mjs
import fs from 'node:fs';

const PDF = [
  { id: '100kb', label: '100 KB', pages: '2–5', scans: '1' },
  { id: '200kb', label: '200 KB', pages: '5–15', scans: '1–3' },
  { id: '500kb', label: '500 KB', pages: '10–40', scans: '3–8' },
  { id: '1mb', label: '1 MB', pages: '30+', scans: '10–30' },
];
const IMG = [
  { id: '20kb', label: '20 KB', px: '300–600' },
  { id: '50kb', label: '50 KB', px: '600–900' },
  { id: '100kb', label: '100 KB', px: '1000–1400' },
  { id: '200kb', label: '200 KB', px: '1600' },
];

// Localized UI labels and tool slugs (must match src/i18n/dict and src/i18n/locale).
const L = {
  es: {
    choose: 'Elegir archivos', max: 'Tamaño máximo', convert: 'Convertir', zip: 'Descargar todo (ZIP)',
    slug: { cpdf: 'comprimir-pdf', cimg: 'comprimir-imagen', resize: 'redimensionar-imagen', split: 'dividir-pdf', organize: 'organizar-pdf', unlock: 'desbloquear-pdf' },
    pdf: (z) => ({
      name: `Comprimir PDF a ${z.label}`,
      title: `Comprimir PDF a ${z.label} online — gratis y sin subir`,
      description: `Reduce un PDF por debajo de ${z.label} automáticamente: eliges el límite y encontramos la mejor calidad que cabe. En tu navegador, sin subir archivos.`,
      h1: `Comprimir un PDF a ${z.label}`,
      lead: `¿Necesitas un PDF de menos de ${z.label} para un formulario o un correo? Elige el límite y TurboConvert encuentra la mejor calidad posible, sin subir tu archivo.`,
      what: 'tu PDF', howTo: `comprimir un PDF a ${z.label}`,
      steps: [
        `Haz clic en <strong>${L.es.choose}</strong> o arrastra tu PDF al recuadro.`,
        `Comprueba que <strong>${L.es.max}</strong> esté en ${z.label} (puedes elegir otro límite).`,
        `Haz clic en <strong>${L.es.convert}</strong>: se prueban varios niveles de compresión y se descarga el mejor resultado por debajo de ${z.label}.`,
      ],
      limits: [
        `Si el documento tiene muchas páginas con imágenes, puede que ${z.label} no sea alcanzable sin perder legibilidad: obtendrás la versión más pequeña posible. Divide el PDF o quita páginas y vuelve a intentarlo.`,
        'El texto, los enlaces y los marcadores se conservan; solo se reduce la resolución de las imágenes.',
        `Los PDF protegidos con contraseña deben desbloquearse antes con <a href="/es/${L.es.slug.unlock}">Desbloquear PDF</a>.`,
      ],
      faq: [
        [`¿Cómo se alcanza el objetivo de ${z.label}?`, `TurboConvert comprime el PDF con Ghostscript con un ajuste equilibrado y luego reduce progresivamente la resolución de las imágenes hasta que el archivo quede por debajo de ${z.label}. Si ya está muy por debajo, usa un ajuste de mayor calidad.`],
        [`¿Qué cabe en ${z.label}?`, `Como referencia, unas ${z.pages} páginas de texto, o ${z.scans} páginas escaneadas. El texto ocupa muy poco; lo que pesa son los escaneos y las fotos.`],
        ['¿Se sube mi documento a algún servidor?', 'No. El motor de compresión funciona dentro de tu navegador: documentos de identidad, nóminas o certificados nunca salen de tu dispositivo.'],
      ],
      body: `## ¿Por qué ${z.label}?\n\nMuchos formularios en línea, portales administrativos y webs de empleo limitan el peso de los archivos. En lugar de probar ajustes a ciegas hasta que la web acepte el archivo, fija el límite una vez y deja que la herramienta encuentre el mejor compromiso.\n\n## Cómo se consigue\n\nEn un PDF, el texto y las fuentes apenas pesan: **las imágenes, sobre todo los escaneos y las fotos, son las que lo hacen pesado.** TurboConvert reduce su resolución por pasos (300, 150, 96, 72 y 50 ppp) y se detiene en el primer resultado que cabe, para que conserves la versión más nítida posible.\n\n## Consejos\n\n- Escanea en escala de grises cuando el color no sea necesario: el archivo será mucho más ligero.\n- Envía solo las páginas que te piden: quita las demás con [Organizar PDF](/es/${L.es.slug.organize}) o [Dividir PDF](/es/${L.es.slug.split}).\n- ¿Prefieres elegir tú el nivel de compresión? Usa [Comprimir PDF](/es/${L.es.slug.cpdf}).\n`,
    }),
    img: (z) => ({
      name: `Comprimir imagen a ${z.label}`,
      title: `Comprimir imagen a ${z.label} online — gratis y sin subir`,
      description: `Reduce una foto o imagen por debajo de ${z.label} automáticamente: JPG, PNG, HEIC o WebP. La mejor calidad que cabe, en tu navegador y sin subir nada.`,
      h1: `Comprimir una imagen a ${z.label}`,
      lead: `Elige tu foto y encontramos la versión más nítida por debajo de ${z.label}: primero ajustamos la calidad y, si hace falta, las dimensiones. No se sube nada.`,
      what: 'tus imágenes', howTo: `comprimir una imagen a ${z.label}`,
      steps: [
        `Haz clic en <strong>${L.es.choose}</strong> o arrastra una o varias imágenes (JPG, PNG, HEIC, WebP…).`,
        `Comprueba que <strong>${L.es.max}</strong> esté en ${z.label} (puedes elegir otro límite).`,
        `Haz clic en <strong>${L.es.convert}</strong>. Descarga cada imagen o todo con <strong>${L.es.zip}</strong>.`,
      ],
      limits: [
        'Para llegar a tamaños pequeños, las imágenes PNG, HEIC y BMP se guardan en JPG (WebP sigue en WebP). Las zonas transparentes se vuelven blancas en JPG.',
        'Si la calidad no basta, la imagen se reduce por pasos hasta que cabe: un límite muy bajo implica dimensiones más pequeñas.',
        'Las imágenes que ya están por debajo del límite se devuelven sin cambios.',
      ],
      faq: [
        [`¿Cómo se consigue exactamente ${z.label}?`, `La imagen se codifica con calidades decrecientes (búsqueda binaria) y se guarda la mejor versión que cabe. Si ni con calidad baja basta, se reducen un poco las dimensiones y se vuelve a intentar.`],
        [`¿Qué cabe en ${z.label}?`, `Como referencia, una foto de unos ${z.px} px de ancho con buena calidad. Las fotos con mucho detalle necesitan más espacio.`],
        ['¿Puedo convertir directamente fotos de iPhone (HEIC)?', 'Sí. Las fotos HEIC se decodifican en tu navegador y se guardan en JPG por debajo del límite.'],
        ['¿Se suben mis fotos?', 'No. Todo ocurre en tu dispositivo: tus fotos y documentos nunca salen de él.'],
      ],
      body: `## ¿Por qué ${z.label}?\n\nFormularios de solicitud, portales de empleo y webs administrativas suelen limitar el peso de fotos y documentos. Fija el límite una vez y deja que la herramienta encuentre el mejor compromiso.\n\n## Primero la calidad, luego el tamaño\n\nBajar la calidad es invisible hasta cierto punto, mientras que reducir las dimensiones elimina detalle. Por eso TurboConvert siempre prueba la calidad antes que las dimensiones y se detiene en cuanto la imagen cabe.\n\n## Consejos\n\n- Recorta lo que no sea necesario (fondo, márgenes) antes de comprimir.\n- Para documentos, una foto recta y bien iluminada se comprime mucho mejor.\n- ¿Necesitas otro tamaño o dimensiones exactas? Usa [Comprimir imagen](/es/${L.es.slug.cimg}) o [Redimensionar imagen](/es/${L.es.slug.resize}).\n`,
    }),
  },
  de: {
    choose: 'Dateien auswählen', max: 'Maximale Dateigröße', convert: 'Umwandeln', zip: 'Alle herunterladen (ZIP)',
    slug: { cpdf: 'pdf-verkleinern', cimg: 'bild-komprimieren', resize: 'bildgroesse-aendern', split: 'pdf-teilen', organize: 'pdf-seiten-sortieren', unlock: 'pdf-passwort-entfernen' },
    pdf: (z) => ({
      name: `PDF auf ${z.label} komprimieren`,
      title: `PDF auf ${z.label} komprimieren – kostenlos, ohne Upload`,
      description: `Verkleinern Sie ein PDF automatisch unter ${z.label}: Limit wählen, wir finden die beste Qualität, die passt. Im Browser, ohne Datei-Upload.`,
      h1: `PDF auf ${z.label} komprimieren`,
      lead: `Sie brauchen ein PDF unter ${z.label} für ein Formular oder eine E-Mail? Wählen Sie das Limit – TurboConvert findet die beste Qualität, ohne Ihre Datei hochzuladen.`,
      what: 'Ihr PDF', howTo: `ein PDF auf ${z.label} komprimieren`,
      steps: [
        `Klicken Sie auf <strong>${L.de.choose}</strong> oder ziehen Sie Ihr PDF in das Feld.`,
        `Prüfen Sie, dass <strong>${L.de.max}</strong> auf ${z.label} steht (Sie können ein anderes Limit wählen).`,
        `Klicken Sie auf <strong>${L.de.convert}</strong>: Mehrere Kompressionsstufen werden getestet, das beste Ergebnis unter ${z.label} wird heruntergeladen.`,
      ],
      limits: [
        `Bei vielen bildlastigen Seiten ist ${z.label} eventuell nicht ohne Qualitätsverlust erreichbar – Sie erhalten dann die kleinstmögliche Version. Teilen Sie das PDF oder entfernen Sie Seiten.`,
        'Text, Links und Lesezeichen bleiben erhalten; nur die Auflösung der Bilder wird reduziert.',
        `Passwortgeschützte PDFs müssen zuerst mit <a href="/de/${L.de.slug.unlock}">PDF-Passwort entfernen</a> entsperrt werden.`,
      ],
      faq: [
        [`Wie wird das Ziel von ${z.label} erreicht?`, `TurboConvert komprimiert das PDF mit Ghostscript zunächst ausgewogen und verringert dann schrittweise die Bildauflösung, bis die Datei unter ${z.label} liegt. Ist sie schon deutlich darunter, wird eine höhere Qualitätsstufe verwendet.`],
        [`Was passt in ${z.label}?`, `Als Richtwert etwa ${z.pages} Seiten Text oder ${z.scans} gescannte Seiten. Text ist winzig; Scans und Fotos machen ein PDF schwer.`],
        ['Wird mein Dokument hochgeladen?', 'Nein. Die Kompression läuft in Ihrem Browser: Ausweise, Gehaltsabrechnungen oder Bescheinigungen verlassen nie Ihr Gerät.'],
      ],
      body: `## Warum ${z.label}?\n\nViele Online-Formulare, Behördenportale und Bewerbungsplattformen begrenzen die Dateigröße. Statt blind Einstellungen auszuprobieren, legen Sie das Limit einmal fest und lassen das Tool den besten Kompromiss finden.\n\n## So funktioniert es\n\nIn einem PDF sind Text und Schriften winzig: **Bilder – vor allem Scans und Fotos – machen die Datei schwer.** TurboConvert senkt ihre Auflösung stufenweise (300, 150, 96, 72, dann 50 dpi) und stoppt beim ersten Ergebnis, das passt. So behalten Sie die schärfste mögliche Version.\n\n## Tipps\n\n- Scannen Sie in Graustufen, wenn Farbe nicht nötig ist.\n- Senden Sie nur die verlangten Seiten: Entfernen Sie den Rest mit [PDF-Seiten sortieren](/de/${L.de.slug.organize}) oder [PDF teilen](/de/${L.de.slug.split}).\n- Lieber selbst die Kompressionsstufe wählen? Nutzen Sie [PDF verkleinern](/de/${L.de.slug.cpdf}).\n`,
    }),
    img: (z) => ({
      name: `Bild auf ${z.label} komprimieren`,
      title: `Bild auf ${z.label} komprimieren – kostenlos, ohne Upload`,
      description: `Verkleinern Sie ein Foto oder Bild automatisch unter ${z.label}: JPG, PNG, HEIC oder WebP. Beste Qualität, die passt – im Browser, ohne Upload.`,
      h1: `Bild auf ${z.label} komprimieren`,
      lead: `Wählen Sie Ihr Foto – wir finden die schärfste Version unter ${z.label}: zuerst über die Qualität, bei Bedarf über die Abmessungen. Nichts wird hochgeladen.`,
      what: 'Ihre Bilder', howTo: `ein Bild auf ${z.label} komprimieren`,
      steps: [
        `Klicken Sie auf <strong>${L.de.choose}</strong> oder ziehen Sie ein oder mehrere Bilder (JPG, PNG, HEIC, WebP …) in das Feld.`,
        `Prüfen Sie, dass <strong>${L.de.max}</strong> auf ${z.label} steht (Sie können ein anderes Limit wählen).`,
        `Klicken Sie auf <strong>${L.de.convert}</strong>. Laden Sie jedes Bild einzeln oder alles mit <strong>${L.de.zip}</strong> herunter.`,
      ],
      limits: [
        'Um kleine Größen zu erreichen, werden PNG-, HEIC- und BMP-Bilder als JPG gespeichert (WebP bleibt WebP). Transparente Bereiche werden im JPG weiß.',
        'Reicht die Qualität nicht, wird das Bild schrittweise verkleinert, bis es passt – ein sehr kleines Limit bedeutet kleinere Abmessungen.',
        'Bilder, die schon unter dem Limit liegen, bleiben unverändert.',
      ],
      faq: [
        [`Wie wird genau ${z.label} erreicht?`, `Das Bild wird mit abnehmender Qualität kodiert (binäre Suche), und die beste passende Version wird behalten. Reicht selbst niedrige Qualität nicht, werden die Abmessungen leicht reduziert und es wird erneut versucht.`],
        [`Was passt in ${z.label}?`, `Als Richtwert ein Foto mit etwa ${z.px} px Breite in guter Qualität. Detailreiche Fotos brauchen mehr Platz.`],
        ['Kann ich iPhone-Fotos (HEIC) direkt umwandeln?', 'Ja. HEIC-Fotos werden im Browser dekodiert und als JPG unter dem Limit gespeichert.'],
        ['Werden meine Fotos hochgeladen?', 'Nein. Alles passiert auf Ihrem Gerät: Ihre Fotos und Dokumente verlassen es nie.'],
      ],
      body: `## Warum ${z.label}?\n\nBewerbungsformulare, Behördenportale und Online-Shops begrenzen oft die Größe von Fotos und Dokumenten. Legen Sie das Limit einmal fest und lassen Sie das Tool den besten Kompromiss finden.\n\n## Erst die Qualität, dann die Größe\n\nEine geringere Qualität bleibt bis zu einem gewissen Punkt unsichtbar, während kleinere Abmessungen Details entfernen. TurboConvert versucht daher immer zuerst die Qualität und stoppt, sobald das Bild passt.\n\n## Tipps\n\n- Schneiden Sie Unnötiges (Hintergrund, Ränder) vor dem Komprimieren weg.\n- Bei Dokumenten lässt sich ein gerades, gut beleuchtetes Foto deutlich besser komprimieren.\n- Andere Größe oder exakte Abmessungen? Nutzen Sie [Bild komprimieren](/de/${L.de.slug.cimg}) oder [Bildgröße ändern](/de/${L.de.slug.resize}).\n`,
    }),
  },
  pt: {
    choose: 'Escolher arquivos', max: 'Tamanho máximo', convert: 'Converter', zip: 'Baixar tudo (ZIP)',
    slug: { cpdf: 'comprimir-pdf', cimg: 'comprimir-imagem', resize: 'redimensionar-imagem', split: 'dividir-pdf', organize: 'organizar-pdf', unlock: 'desbloquear-pdf' },
    pdf: (z) => ({
      name: `Comprimir PDF para ${z.label}`,
      title: `Comprimir PDF para ${z.label} online — grátis, sem upload`,
      description: `Reduza um PDF para menos de ${z.label} automaticamente: escolha o limite e encontramos a melhor qualidade que cabe. No navegador, sem enviar arquivos.`,
      h1: `Comprimir um PDF para ${z.label}`,
      lead: `Precisa de um PDF com menos de ${z.label} para um formulário ou e-mail? Escolha o limite e o TurboConvert encontra a melhor qualidade, sem enviar seu arquivo.`,
      what: 'seu PDF', howTo: `comprimir um PDF para ${z.label}`,
      steps: [
        `Clique em <strong>${L.pt.choose}</strong> ou arraste seu PDF para a caixa.`,
        `Confira se <strong>${L.pt.max}</strong> está em ${z.label} (você pode escolher outro limite).`,
        `Clique em <strong>${L.pt.convert}</strong>: vários níveis de compressão são testados e o melhor resultado abaixo de ${z.label} é baixado.`,
      ],
      limits: [
        `Se o documento tiver muitas páginas com imagens, talvez ${z.label} não seja possível sem perder legibilidade: você recebe a menor versão possível. Divida o PDF ou remova páginas.`,
        'Texto, links e marcadores são mantidos; só a resolução das imagens é reduzida.',
        `PDFs protegidos por senha precisam ser desbloqueados antes com <a href="/pt/${L.pt.slug.unlock}">Desbloquear PDF</a>.`,
      ],
      faq: [
        [`Como o objetivo de ${z.label} é atingido?`, `O TurboConvert comprime o PDF com Ghostscript em um ajuste equilibrado e depois reduz aos poucos a resolução das imagens até o arquivo ficar abaixo de ${z.label}. Se ele já estiver bem abaixo, usa um ajuste de qualidade maior.`],
        [`O que cabe em ${z.label}?`, `Como referência, cerca de ${z.pages} páginas de texto, ou ${z.scans} páginas digitalizadas. Texto ocupa pouquíssimo; o que pesa são digitalizações e fotos.`],
        ['Meu documento é enviado para algum servidor?', 'Não. A compressão roda no seu navegador: RG, CNH, holerites ou certificados nunca saem do seu aparelho.'],
      ],
      body: `## Por que ${z.label}?\n\nMuitos formulários online, portais do governo e sites de vagas limitam o tamanho dos arquivos. Em vez de testar configurações às cegas, defina o limite uma vez e deixe a ferramenta encontrar o melhor equilíbrio.\n\n## Como funciona\n\nNum PDF, texto e fontes quase não pesam: **as imagens — principalmente digitalizações e fotos — é que deixam o arquivo pesado.** O TurboConvert reduz a resolução delas por etapas (300, 150, 96, 72 e 50 dpi) e para no primeiro resultado que cabe, mantendo a versão mais nítida possível.\n\n## Dicas\n\n- Digitalize em tons de cinza quando a cor não for necessária.\n- Envie só as páginas pedidas: remova o resto com [Organizar PDF](/pt/${L.pt.slug.organize}) ou [Dividir PDF](/pt/${L.pt.slug.split}).\n- Prefere escolher o nível de compressão? Use [Comprimir PDF](/pt/${L.pt.slug.cpdf}).\n`,
    }),
    img: (z) => ({
      name: `Comprimir imagem para ${z.label}`,
      title: `Comprimir imagem para ${z.label} online — grátis, sem upload`,
      description: `Reduza uma foto ou imagem para menos de ${z.label} automaticamente: JPG, PNG, HEIC ou WebP. A melhor qualidade que cabe, no navegador e sem upload.`,
      h1: `Comprimir uma imagem para ${z.label}`,
      lead: `Escolha sua foto e encontramos a versão mais nítida abaixo de ${z.label}: primeiro ajustando a qualidade, depois as dimensões, se preciso. Nada é enviado.`,
      what: 'suas imagens', howTo: `comprimir uma imagem para ${z.label}`,
      steps: [
        `Clique em <strong>${L.pt.choose}</strong> ou arraste uma ou mais imagens (JPG, PNG, HEIC, WebP…).`,
        `Confira se <strong>${L.pt.max}</strong> está em ${z.label} (você pode escolher outro limite).`,
        `Clique em <strong>${L.pt.convert}</strong>. Baixe cada imagem ou tudo com <strong>${L.pt.zip}</strong>.`,
      ],
      limits: [
        'Para chegar a tamanhos pequenos, imagens PNG, HEIC e BMP são salvas em JPG (WebP continua WebP). Áreas transparentes ficam brancas no JPG.',
        'Se a qualidade não bastar, a imagem é reduzida por etapas até caber: um limite muito baixo significa dimensões menores.',
        'Imagens que já estão abaixo do limite são devolvidas sem alteração.',
      ],
      faq: [
        [`Como se chega exatamente a ${z.label}?`, `A imagem é codificada com qualidades decrescentes (busca binária) e a melhor versão que cabe é mantida. Se nem a qualidade baixa bastar, as dimensões são reduzidas um pouco e o processo se repete.`],
        [`O que cabe em ${z.label}?`, `Como referência, uma foto de cerca de ${z.px} px de largura com boa qualidade. Fotos com muitos detalhes precisam de mais espaço.`],
        ['Posso converter fotos do iPhone (HEIC) diretamente?', 'Sim. As fotos HEIC são decodificadas no navegador e salvas em JPG abaixo do limite.'],
        ['Minhas fotos são enviadas?', 'Não. Tudo acontece no seu aparelho: suas fotos e documentos nunca saem dele.'],
      ],
      body: `## Por que ${z.label}?\n\nFormulários de inscrição, concursos, portais do governo e sites de vagas costumam limitar o tamanho de fotos e documentos. Defina o limite uma vez e deixe a ferramenta encontrar o melhor equilíbrio.\n\n## Primeiro a qualidade, depois o tamanho\n\nBaixar a qualidade é invisível até certo ponto, enquanto reduzir as dimensões elimina detalhes. Por isso o TurboConvert sempre tenta a qualidade antes das dimensões e para assim que a imagem cabe.\n\n## Dicas\n\n- Recorte o que não for necessário (fundo, margens) antes de comprimir.\n- Para documentos, uma foto reta e bem iluminada comprime muito melhor.\n- Precisa de outro tamanho ou dimensões exatas? Use [Comprimir imagem](/pt/${L.pt.slug.cimg}) ou [Redimensionar imagem](/pt/${L.pt.slug.resize}).\n`,
    }),
  },
  it: {
    choose: 'Scegli i file', max: 'Dimensione massima', convert: 'Converti', zip: 'Scarica tutto (ZIP)',
    slug: { cpdf: 'comprimere-pdf', cimg: 'comprimere-immagini', resize: 'ridimensionare-immagini', split: 'dividere-pdf', organize: 'organizzare-pdf', unlock: 'sbloccare-pdf' },
    pdf: (z) => ({
      name: `Comprimere PDF a ${z.label}`,
      title: `Comprimere PDF a ${z.label} online — gratis, senza upload`,
      description: `Riduci un PDF sotto i ${z.label} automaticamente: scegli il limite e troviamo la migliore qualità che ci sta. Nel browser, senza caricare file.`,
      h1: `Comprimere un PDF a ${z.label}`,
      lead: `Ti serve un PDF sotto i ${z.label} per un modulo o un’email? Scegli il limite e TurboConvert trova la qualità migliore, senza caricare il tuo file.`,
      what: 'il tuo PDF', howTo: `comprimere un PDF a ${z.label}`,
      steps: [
        `Fai clic su <strong>${L.it.choose}</strong> o trascina il tuo PDF nel riquadro.`,
        `Controlla che <strong>${L.it.max}</strong> sia impostata su ${z.label} (puoi scegliere un altro limite).`,
        `Fai clic su <strong>${L.it.convert}</strong>: vengono provati più livelli di compressione e si scarica il miglior risultato sotto i ${z.label}.`,
      ],
      limits: [
        `Se il documento ha molte pagine con immagini, ${z.label} potrebbe non essere raggiungibile senza perdere leggibilità: ottieni la versione più piccola possibile. Dividi il PDF o rimuovi pagine.`,
        'Testo, link e segnalibri vengono mantenuti; si riduce solo la risoluzione delle immagini.',
        `I PDF protetti da password vanno prima sbloccati con <a href="/it/${L.it.slug.unlock}">Sbloccare PDF</a>.`,
      ],
      faq: [
        [`Come si raggiunge l’obiettivo di ${z.label}?`, `TurboConvert comprime il PDF con Ghostscript con un’impostazione bilanciata, poi riduce gradualmente la risoluzione delle immagini finché il file scende sotto i ${z.label}. Se è già molto sotto, usa un’impostazione di qualità più alta.`],
        [`Cosa ci sta in ${z.label}?`, `Come riferimento, circa ${z.pages} pagine di testo, oppure ${z.scans} pagine scansionate. Il testo pesa pochissimo; sono scansioni e foto a renderlo pesante.`],
        ['Il mio documento viene caricato su un server?', 'No. La compressione avviene nel browser: documenti d’identità, buste paga o certificati non lasciano mai il tuo dispositivo.'],
      ],
      body: `## Perché ${z.label}?\n\nMolti moduli online, portali della pubblica amministrazione e siti di lavoro limitano il peso dei file. Invece di provare impostazioni a caso, fissa il limite una volta e lascia che lo strumento trovi il compromesso migliore.\n\n## Come funziona\n\nIn un PDF testo e font pesano pochissimo: **sono le immagini — soprattutto scansioni e foto — a renderlo pesante.** TurboConvert ne riduce la risoluzione per gradi (300, 150, 96, 72 e poi 50 dpi) e si ferma al primo risultato che rientra nel limite, così conservi la versione più nitida possibile.\n\n## Consigli\n\n- Scansiona in scala di grigi quando il colore non serve.\n- Invia solo le pagine richieste: rimuovi il resto con [Organizzare PDF](/it/${L.it.slug.organize}) o [Dividere PDF](/it/${L.it.slug.split}).\n- Preferisci scegliere tu il livello di compressione? Usa [Comprimere PDF](/it/${L.it.slug.cpdf}).\n`,
    }),
    img: (z) => ({
      name: `Comprimere immagine a ${z.label}`,
      title: `Comprimere immagine a ${z.label} online — gratis, senza upload`,
      description: `Riduci una foto o un’immagine sotto i ${z.label} automaticamente: JPG, PNG, HEIC o WebP. La migliore qualità che ci sta, nel browser e senza upload.`,
      h1: `Comprimere un’immagine a ${z.label}`,
      lead: `Scegli la foto e troviamo la versione più nitida sotto i ${z.label}: prima regolando la qualità, poi le dimensioni se serve. Nulla viene caricato.`,
      what: 'le tue immagini', howTo: `comprimere un’immagine a ${z.label}`,
      steps: [
        `Fai clic su <strong>${L.it.choose}</strong> o trascina una o più immagini (JPG, PNG, HEIC, WebP…).`,
        `Controlla che <strong>${L.it.max}</strong> sia impostata su ${z.label} (puoi scegliere un altro limite).`,
        `Fai clic su <strong>${L.it.convert}</strong>. Scarica ogni immagine o tutto con <strong>${L.it.zip}</strong>.`,
      ],
      limits: [
        'Per arrivare a dimensioni ridotte, le immagini PNG, HEIC e BMP vengono salvate in JPG (WebP resta WebP). Le aree trasparenti diventano bianche nel JPG.',
        'Se la qualità non basta, l’immagine viene ridotta per gradi finché non rientra: un limite molto basso significa dimensioni più piccole.',
        'Le immagini già sotto il limite vengono restituite invariate.',
      ],
      faq: [
        [`Come si arriva esattamente a ${z.label}?`, `L’immagine viene codificata con qualità decrescenti (ricerca binaria) e si tiene la versione migliore che rientra. Se nemmeno una qualità bassa basta, le dimensioni vengono ridotte leggermente e si riprova.`],
        [`Cosa ci sta in ${z.label}?`, `Come riferimento, una foto larga circa ${z.px} px in buona qualità. Le foto ricche di dettagli richiedono più spazio.`],
        ['Posso convertire direttamente le foto dell’iPhone (HEIC)?', 'Sì. Le foto HEIC vengono decodificate nel browser e salvate in JPG sotto il limite.'],
        ['Le mie foto vengono caricate?', 'No. Tutto avviene sul tuo dispositivo: foto e documenti non lo lasciano mai.'],
      ],
      body: `## Perché ${z.label}?\n\nModuli di candidatura, concorsi, portali della PA e siti di annunci limitano spesso il peso di foto e documenti. Fissa il limite una volta e lascia che lo strumento trovi il compromesso migliore.\n\n## Prima la qualità, poi le dimensioni\n\nAbbassare la qualità resta invisibile fino a un certo punto, mentre ridurre le dimensioni toglie dettagli. Per questo TurboConvert prova sempre prima la qualità e si ferma appena l’immagine rientra nel limite.\n\n## Consigli\n\n- Ritaglia ciò che non serve (sfondo, margini) prima di comprimere.\n- Per i documenti, una foto dritta e ben illuminata si comprime molto meglio.\n- Ti serve un’altra dimensione o misure precise? Usa [Comprimere immagini](/it/${L.it.slug.cimg}) o [Ridimensionare immagini](/it/${L.it.slug.resize}).\n`,
    }),
  },
};

const q = (v) => JSON.stringify(v);
const toMd = (c) => `---
name: ${q(c.name)}
title: ${q(c.title)}
description: ${q(c.description)}
h1: ${q(c.h1)}
lead: ${q(c.lead)}
what: ${q(c.what)}
howTo: ${q(c.howTo)}
steps:
${c.steps.map((s) => `  - ${q(s)}`).join('\n')}
limits:
${c.limits.map((s) => `  - ${q(s)}`).join('\n')}
faq:
${c.faq.map(([a, b]) => `  - q: ${q(a)}\n    a: ${q(b)}`).join('\n')}
---

${c.body}`;

let n = 0;
for (const [loc, l] of Object.entries(L)) {
  fs.mkdirSync(`src/content/tools/${loc}`, { recursive: true });
  for (const z of PDF) { fs.writeFileSync(`src/content/tools/${loc}/compress-pdf-to-${z.id}.md`, toMd(l.pdf(z))); n++; }
  for (const z of IMG) { fs.writeFileSync(`src/content/tools/${loc}/compress-image-to-${z.id}.md`, toMd(l.img(z))); n++; }
}
console.log(`${n} pages written`);
