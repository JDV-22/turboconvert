import type { LocalePack } from '../packs';

// Português do Brasil — slugs, home e páginas de categoria.
const pt: LocalePack = {
  slugs: {
    tools: {
      // PDF
      'compress-pdf': 'comprimir-pdf',
      'merge-pdf': 'juntar-pdf',
      'split-pdf': 'dividir-pdf',
      'rotate-pdf': 'girar-pdf',
      'organize-pdf': 'organizar-pdf',
      'pdf-to-jpg': 'pdf-para-jpg',
      'pdf-to-png': 'pdf-para-png',
      'jpg-to-pdf': 'jpg-para-pdf',
      'png-to-pdf': 'png-para-pdf',
      'add-page-numbers': 'numerar-paginas-pdf',
      'watermark-pdf': 'marca-dagua-pdf',
      'protect-pdf': 'proteger-pdf',
      'unlock-pdf': 'desbloquear-pdf',
      'pdf-to-text': 'pdf-para-texto',
      'ocr-pdf': 'ocr-pdf',
      // Documentos
      'pdf-to-word': 'pdf-para-word',
      'word-to-pdf': 'word-para-pdf',
      'pdf-to-excel': 'pdf-para-excel',
      'excel-to-pdf': 'excel-para-pdf',
      'pdf-to-ppt': 'pdf-para-ppt',
      'ppt-to-pdf': 'ppt-para-pdf',
      'word-to-jpg': 'word-para-jpg',
      // Imagem
      'compress-image': 'comprimir-imagem',
      'resize-image': 'redimensionar-imagem',
      'heic-to-jpg': 'heic-para-jpg',
      'heic-to-png': 'heic-para-png',
      'png-to-jpg': 'png-para-jpg',
      'jpg-to-png': 'jpg-para-png',
      'webp-to-jpg': 'webp-para-jpg',
      'webp-to-png': 'webp-para-png',
      'jpg-to-webp': 'jpg-para-webp',
      'png-to-webp': 'png-para-webp',
      'svg-to-png': 'svg-para-png',
      'avif-to-jpg': 'avif-para-jpg',
      'image-to-ico': 'png-para-ico',
      // Vídeo
      'mp4-to-mp3': 'mp4-para-mp3',
      'video-to-gif': 'video-para-gif',
      'compress-video': 'comprimir-video',
      'trim-video': 'cortar-video',
      'mute-video': 'remover-audio-video',
      'mov-to-mp4': 'mov-para-mp4',
      'webm-to-mp4': 'webm-para-mp4',
      'mkv-to-mp4': 'mkv-para-mp4',
      'mp3-to-mp4': 'mp3-para-mp4',
      // Áudio
      'wav-to-mp3': 'wav-para-mp3',
      'mp3-to-wav': 'mp3-para-wav',
      'm4a-to-mp3': 'm4a-para-mp3',
      'ogg-to-mp3': 'ogg-para-mp3',
      'flac-to-mp3': 'flac-para-mp3',
      'audio-converter': 'conversor-de-audio',
      'trim-audio': 'cortar-audio',
    },
    categories: {
      pdf: 'ferramentas-pdf',
      image: 'ferramentas-imagem',
      document: 'conversor-de-documentos',
      video: 'ferramentas-video',
      audio: 'ferramentas-audio',
    },
    pages: {
      about: 'sobre',
      contact: 'contato',
      privacy: 'privacidade',
      terms: 'termos',
      blog: 'blog',
      tools: 'ferramentas',
    },
  },

  home: {
    title: 'Conversor de arquivos grátis — PDF, imagem, vídeo, sem upload',
    description: 'Converta PDF, Word, Excel, imagens, áudio e vídeo de graça. 50+ ferramentas que rodam no seu navegador: sem upload, sem cadastro, sem marca d’água.',
    faq: [
      { q: 'O TurboConvert é grátis mesmo?', a: 'Sim. Todas as ferramentas são grátis, sem conta, sem limite diário e sem marca d’água. O site é mantido por publicidade discreta, nunca cobrando pelas suas conversões.' },
      { q: 'Meus arquivos são enviados para algum servidor?', a: 'Não. As conversões rodam dentro do seu navegador, com versões em WebAssembly de motores de código aberto (Ghostscript, FFmpeg, PDF.js, pdf-lib). Seus arquivos ficam no seu aparelho, e você pode confirmar isso na aba Rede (Network) do navegador.' },
      { q: 'Existe limite de tamanho de arquivo?', a: 'O limite depende da ferramenta (em geral de 100 MB a 1 GB) e principalmente da memória do seu aparelho, já que todo o trabalho é feito localmente. Um computador lida com arquivos grandes com mais folga do que um celular.' },
      { q: 'Funciona no iPhone, Android, Mac e Windows?', a: 'Sim. O TurboConvert funciona em qualquer navegador atual — Safari, Chrome, Edge, Firefox — no celular, no tablet e no computador. Não precisa instalar nada.' },
      { q: 'Por que a primeira conversão de vídeo ou de OCR demora mais?', a: 'Algumas ferramentas precisam de um motor grande (por exemplo, o FFmpeg para vídeo, com cerca de 31 MB). Ele é baixado uma vez e fica no cache do navegador, então as próximas conversões começam na hora.' },
      { q: 'Dá para usar o TurboConvert offline?', a: 'Depois que a página da ferramenta e o motor dela carregam, a conversão em si não precisa de internet. Você pode desconectar e continuar convertendo nessa página.' },
    ],
    body: `<h2>Um conversor que respeita os seus arquivos</h2>
<p>A maioria dos conversores on-line funciona do mesmo jeito: você faz upload do documento para os servidores deles, espera numa fila, baixa o resultado — e torce para que o arquivo seja apagado como prometido. O TurboConvert faz o contrário. É o programa de conversão que vem até o seu navegador, e os seus arquivos nunca saem do seu aparelho. É mais rápido (sem upload, sem fila), mais seguro (não há o que vazar) e continua funcionando mesmo com internet lenta.</p>
<h2>O que você pode fazer</h2>
<ul>
<li><strong>PDF</strong>: comprimir, juntar, dividir, girar, numerar páginas, colocar marca d’água, proteger com senha ou desbloquear, converter de e para JPG e PNG, extrair o texto e aplicar OCR em documentos escaneados.</li>
<li><strong>Documentos</strong>: converter PDF em Word, Excel ou PowerPoint, e Word, Excel ou PowerPoint em PDF.</li>
<li><strong>Imagens</strong>: converter HEIC (fotos do iPhone), WebP, AVIF, PNG, JPG e SVG, comprimir e redimensionar em lote, criar favicons.</li>
<li><strong>Vídeo e áudio</strong>: extrair o MP3 de um vídeo, converter MOV, WebM e MKV para MP4, criar GIFs, comprimir e cortar vídeos, converter WAV, M4A, OGG e FLAC.</li>
</ul>`,
  },

  hubs: {
    all: {
      title: 'Todas as ferramentas de conversão grátis — PDF, imagem, vídeo',
      description: 'Todas as ferramentas do TurboConvert em um só lugar: conversores de PDF, Word, Excel, imagem, vídeo e áudio no navegador. Grátis, privado, sem cadastro.',
      h1: 'Todas as ferramentas',
      lead: 'Todos os conversores e editores do TurboConvert. Todos grátis e rodando com privacidade no seu navegador.',
      body: '',
    },
    pdf: {
      title: 'Ferramentas de PDF grátis — comprimir, juntar, dividir, converter',
      description: 'Comprima, junte, divida, gire, proteja e converta PDF de graça, direto no navegador. Seus arquivos nunca são enviados. Sem cadastro e sem marca d’água.',
      h1: 'Ferramentas de PDF',
      lead: 'Tudo o que você precisa para trabalhar com PDF — comprimir, juntar, dividir, converter, proteger — processado no seu próprio aparelho.',
      body: `<h2>Edite e converta PDFs sem fazer upload</h2>
<p>É em PDF que circulam justamente os documentos que menos queremos compartilhar: contratos, holerites, declaração do Imposto de Renda, RG e CNH escaneados. As ferramentas de PDF do TurboConvert usam os mesmos motores de código aberto dos programas profissionais — Ghostscript para comprimir, PDF.js para exibir e pdf-lib para editar —, mas rodam dentro do seu navegador, então os seus arquivos não passam por nenhum servidor.</p>
<h2>Qual ferramenta de PDF você precisa?</h2>
<ul>
<li><strong>Arquivo grande demais para e-mail ou para um portal?</strong> Use <a href="/pt/comprimir-pdf">Comprimir PDF</a> — documentos escaneados costumam cair para menos da metade.</li>
<li><strong>Vários documentos para enviar como um só?</strong> <a href="/pt/juntar-pdf">Juntar PDF</a> une os arquivos na ordem que você escolher.</li>
<li><strong>Precisa só de algumas páginas?</strong> <a href="/pt/dividir-pdf">Dividir PDF</a> extrai intervalos de páginas.</li>
<li><strong>Precisa editar o texto?</strong> Converta com <a href="/pt/pdf-para-word">PDF para Word</a>.</li>
<li><strong>Documento escaneado?</strong> Deixe o texto utilizável com o <a href="/pt/ocr-pdf">OCR de PDF</a>.</li>
</ul>`,
    },
    document: {
      title: 'Converter PDF em Word, Excel e PowerPoint — grátis on-line',
      description: 'Converta PDF em Word, Excel ou PowerPoint e vice-versa, de graça e no navegador. Arquivos editáveis, sem upload, sem cadastro e sem marca d’água.',
      h1: 'Conversores de documentos',
      lead: 'Transforme PDFs em arquivos editáveis de Word, Excel e PowerPoint — e documentos do Office em PDF — sem enviar nada para lugar nenhum.',
      body: `<h2>Documentos do Office convertidos no seu aparelho</h2>
<p>Converter entre PDF e formatos do Office normalmente significa entregar relatórios, notas fiscais ou apresentações a um site qualquer. Aqui, a conversão roda localmente no seu navegador: o PDF é analisado página por página para reconstruir parágrafos, títulos, tabelas e imagens, e os arquivos do Office são transformados em PDF sem sair do seu computador.</p>
<p>Para PDFs escaneados (fotos de papel), passe primeiro pelo <a href="/pt/ocr-pdf">OCR</a> para que o texto seja reconhecido.</p>`,
    },
    image: {
      title: 'Conversor e compressor de imagens grátis — HEIC, WebP, PNG, JPG',
      description: 'Converta HEIC, WebP, AVIF, PNG, JPG e SVG, comprima e redimensione imagens em lote — grátis, no navegador. Sem upload, sem cadastro, sem marca d’água.',
      h1: 'Ferramentas de imagem',
      lead: 'Converta, comprima e redimensione fotos e imagens em lote — HEIC do iPhone, WebP, AVIF, PNG, JPG, SVG e mais.',
      body: `<h2>Conversão de imagens em lote, direto no navegador</h2>
<p>Solte uma foto ou algumas centenas: as imagens são decodificadas e recodificadas pelo próprio motor de imagens do navegador (mais um decodificador em WebAssembly para as fotos HEIC do iPhone) e ficam disponíveis uma a uma ou em um único ZIP. Nada é enviado, o que também deixa tudo mais rápido — não existe tempo de transferência.</p>
<h2>Escolhendo o formato certo</h2>
<ul>
<li><strong>JPG</strong> — fotos, compatibilidade máxima.</li>
<li><strong>PNG</strong> — capturas de tela, logotipos, transparência, sem perda.</li>
<li><strong>WebP</strong> — formato moderno para a web, 25–35% mais leve que o JPG, aceita transparência.</li>
<li><strong>HEIC</strong> — formato de foto do iPhone; converta para JPG para abrir no Windows, no Android e em sites.</li>
</ul>`,
    },
    video: {
      title: 'Conversor de vídeo grátis on-line — MP4, MOV, GIF, comprimir',
      description: 'Converta MOV, WebM e MKV para MP4, extraia o MP3 de vídeos, crie GIFs, comprima e corte vídeos — grátis e privado, no navegador. Sem upload.',
      h1: 'Ferramentas de vídeo',
      lead: 'Converta, comprima, corte e transforme vídeos em GIF ou MP3 — com o FFmpeg rodando com privacidade no seu navegador.',
      body: `<h2>FFmpeg no seu navegador</h2>
<p>As ferramentas de vídeo do TurboConvert usam o FFmpeg — o motor por trás da maioria dos programas de vídeo profissionais — compilado em WebAssembly. O motor (cerca de 31 MB) é baixado uma vez e depois fica no cache. Como o seu vídeo nunca é enviado, você não precisa esperar a transferência de 500 MB antes de a conversão começar.</p>
<p>A velocidade depende do seu aparelho: para vídeos longos ou em alta resolução, o ideal é usar um computador recente.</p>`,
    },
    audio: {
      title: 'Conversor de áudio grátis on-line — MP3, WAV, M4A, FLAC, OGG',
      description: 'Converta WAV, M4A, FLAC e OGG para MP3, MP3 para WAV e corte áudios — grátis, no navegador, com o FFmpeg. Sem upload e sem cadastro.',
      h1: 'Ferramentas de áudio',
      lead: 'Converta entre MP3, WAV, M4A, AAC, OGG, FLAC e OPUS, ou corte uma faixa — localmente, sem upload.',
      body: `<h2>Com ou sem perda?</h2>
<p><strong>MP3, M4A (AAC), OGG e OPUS</strong> são formatos com perda: arquivos pequenos, ideais para ouvir e compartilhar. <strong>WAV e FLAC</strong> preservam todos os detalhes: o WAV não tem compressão e é aceito por qualquer editor de áudio; o FLAC é comprimido sem perda. Converter um arquivo com perda para um formato sem perda não recupera a qualidade perdida — só deixa o arquivo maior.</p>`,
    },
  },
};

export default pt;
