---
name: 'MOV para MP4'
title: 'Converter MOV para MP4: vídeos do iPhone grátis e privado'
description: 'Converta vídeos MOV do iPhone, do Mac ou de câmeras para MP4 que roda no Windows, no Android e em qualquer site. Em lote, grátis, sem marca d’água e sem upload.'
h1: 'Converter MOV para MP4'
lead: 'Transforme vídeos MOV do iPhone, de gravações de tela do Mac ou de câmeras em arquivos MP4 que rodam em qualquer lugar. A conversão acontece no navegador: seus vídeos nunca são enviados.'
what: 'seu vídeo MOV'
howTo: 'converter MOV para MP4'
steps:
  - 'Clique em <strong>Escolher arquivos</strong> ou solte um ou mais vídeos .mov (ou .m4v) no quadro.'
  - 'Clique em <strong>Converter</strong>. Não há nada para configurar: o melhor método é escolhido automaticamente.'
  - 'Cada MP4 é baixado quando fica pronto; para vários vídeos, use <strong>Baixar tudo (ZIP)</strong>.'
limits:
  - 'Vídeos de até 1 GB cada. No primeiro uso, o motor de conversão (cerca de 31 MB) é baixado e depois fica em cache.'
  - 'Quando o vídeo precisa ser recodificado (veja abaixo), a conversão demora mais e depende da potência do seu aparelho; para vídeos longos, recomendamos um computador.'
  - 'O resultado mantém a resolução original. Para deixar o arquivo menor, use o <a href="/pt/comprimir-video">Comprimir vídeo</a>, que também gera MP4.'
faq:
  - q: 'Qual a diferença entre MOV e MP4?'
    a: 'Os dois são contêineres derivados do mesmo formato QuickTime da Apple e podem guardar os mesmos tipos de vídeo. O MP4 é um padrão aberto aceito por praticamente todo aparelho, app e site; o MOV se dá bem principalmente nos aparelhos da Apple.'
  - q: 'Converter MOV para MP4 perde qualidade?'
    a: 'Quando o vídeo dentro do MOV já está num formato que o MP4 aceita, ele é só reempacotado, sem nenhuma mudança de qualidade. Caso contrário, é recodificado com uma configuração de alta qualidade.'
  - q: 'Por que o vídeo do meu iPhone não abre no Windows?'
    a: 'Muitos apps do Windows e sites recusam o contêiner MOV, e a conversão para MP4 resolve isso. O iPhone também grava em HEVC (H.265) por padrão; se um PC mais antigo ainda não reproduzir o MP4, instale a extensão HEVC da Microsoft, ou mude o iPhone para Mais Compatível nos próximos vídeos.'
  - q: 'Quanto tempo demora a conversão?'
    a: 'Um vídeo reempacotado é convertido em segundos. Um recodificado demora mais: mais ou menos a duração do próprio vídeo ou mais, conforme o aparelho e a resolução.'
  - q: 'Meu vídeo é enviado para algum servidor?'
    a: 'Não. O FFmpeg roda dentro do navegador, então seus vídeos ficam no seu aparelho.'
---

## MOV e MP4: mesma família, alcance diferente

MOV é o formato QuickTime da Apple. É o que geram iPhones, iPads, gravações de tela do Mac (⌘+Shift+5) e muitas câmeras. O MP4 nasceu dele e virou o padrão universal de vídeo: todo celular, navegador, TV, rede social, editor de vídeo e plataforma de cursos lê MP4.

Por isso, converter MOV para MP4 costuma ser uma questão de **compatibilidade**, não de qualidade:

- Formulários de envio, cursos online ou plataformas de site que só aceitam MP4.
- PCs com Windows, celulares Android e smart TVs que não abrem o MOV.
- Editores de vídeo e ferramentas de apresentação que esperam MP4.

## Reempacotamento rápido ou recodificação

Um arquivo de vídeo é um contêiner com faixas codificadas dentro. O TurboConvert primeiro verifica o que há no seu MOV:

- **Se o vídeo e o áudio já usam codecs aceitos pelo MP4**, as faixas são copiadas para um contêiner MP4 sem mexer na imagem. É rápido (em geral, segundos) e sem perdas.
- **Se não** (por exemplo, vídeos em ProRes ou formatos de áudio incomuns), o vídeo é recodificado em H.264 com áudio AAC, a combinação mais compatível que existe. Isso leva mais tempo e depende do seu aparelho.

## Dicas para iPhone

- **Alta Eficiência ou Mais Compatível:** em Ajustes → Câmera → Formatos, *Alta Eficiência* grava vídeo em HEVC e *Mais Compatível* grava em H.264, que roda em quase todo lugar mas ocupa mais espaço.
- **No próprio celular:** abra esta página no Safari, toque em **Escolher arquivos**, escolha os vídeos na biblioteca e encontre os MP4 no app Arquivos, na pasta Downloads.
- **Arquivos grandes demais para enviar?** Converta e diminua numa etapa só com o [Comprimir vídeo](/pt/comprimir-video): ele aceita MOV e gera MP4.

## Problemas comuns

- **A conversão está lenta.** O MOV precisou ser recodificado (por exemplo, um vídeo em ProRes de uma câmera ou de um app de edição). Para isso, um computador é bem mais rápido que um celular.
- **O MP4 ficou do tamanho do MOV.** É o esperado quando as faixas são copiadas como estão. Para deixá-lo menor, use o [Comprimir vídeo](/pt/comprimir-video).

## Ferramentas relacionadas

- Outros formatos: [WebM para MP4](/pt/webm-para-mp4) e [MKV para MP4](/pt/mkv-para-mp4).
- Só precisa da trilha sonora? O [MP4 para MP3](/pt/mp4-para-mp3) funciona direto com arquivos MOV.

Como tudo roda localmente com o FFmpeg compilado em WebAssembly, não há upload, fila nem marca d’água, e seus vídeos pessoais continuam privados.
