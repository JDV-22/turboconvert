---
name: 'Conversor de áudio'
title: 'Conversor de áudio online: MP3, WAV, M4A, OGG, FLAC e OPUS'
description: 'Conversor de áudio online grátis: converta entre MP3, WAV, M4A (AAC), OGG, FLAC e OPUS, ou extraia o áudio de um vídeo. Em lote, no navegador e sem upload.'
h1: 'Conversor de áudio'
lead: 'Converta qualquer arquivo de áudio, ou o som de um vídeo, para MP3, WAV, M4A, OGG, FLAC ou OPUS. Um arquivo ou um lote, tudo processado no navegador sem enviar nada.'
what: 'seus arquivos de áudio'
howTo: 'converter arquivos de áudio'
steps:
  - 'Clique em <strong>Escolher arquivos</strong> ou solte arquivos de áudio ou vídeo: MP3, WAV, M4A, AAC, OGG, FLAC, OPUS, WMA, AIFF, AMR, MP4, MOV e outros são aceitos.'
  - 'Escolha o <strong>Formato de saída</strong>: MP3, WAV, M4A (AAC), OGG (Vorbis), FLAC ou OPUS.'
  - 'Clique em <strong>Converter</strong> e baixe cada arquivo ou tudo com <strong>Baixar tudo (ZIP)</strong>.'
limits:
  - 'Arquivos de até 1 GB cada. No primeiro uso, o motor de conversão (cerca de 31 MB) é baixado e depois fica em cache.'
  - 'Aqui não há ajuste de taxa de bits; cada formato usa uma boa qualidade de uso geral. Para escolher uma taxa específica de MP3, use <a href="/pt/wav-para-mp3">WAV para MP3</a>, <a href="/pt/m4a-para-mp3">M4A para MP3</a> ou <a href="/pt/mp4-para-mp3">MP4 para MP3</a>.'
  - 'Converter um arquivo com perdas (MP3, M4A, OGG) para um formato sem perdas (WAV, FLAC) não recupera a qualidade; só evita perdas novas.'
  - 'Arquivos protegidos contra cópia (DRM) não podem ser convertidos.'
faq:
  - q: 'Qual formato de áudio escolher?'
    a: 'MP3 para a máxima compatibilidade, M4A (AAC) para aparelhos Apple e boa qualidade em arquivos pequenos, OPUS para voz em tamanhos mínimos, FLAC para arquivar sem perdas e WAV para programas de edição.'
  - q: 'Dá para extrair o áudio de um vídeo?'
    a: 'Sim. Solte um MP4, MOV, WebM, MKV ou outro vídeo e escolha o formato de saída; a faixa de som é extraída e convertida.'
  - q: 'FLAC é melhor que WAV?'
    a: 'Os dois são sem perdas e soam iguais. O FLAC é comprimido, então costuma ter de metade a dois terços do tamanho do WAV, e aceita tags; o WAV é aceito por mais ferramentas de edição e equipamentos.'
  - q: 'Posso converter vários arquivos de uma vez?'
    a: 'Sim. Solte quantos arquivos quiser; eles são convertidos para o formato escolhido um após o outro e podem ser baixados juntos num ZIP.'
  - q: 'Meus arquivos são enviados para algum servidor?'
    a: 'Não. O conversor é o FFmpeg rodando dentro do navegador, então seu áudio fica no seu aparelho.'
---

## Qual formato para cada uso?

| Formato | Tipo | Ideal para |
|---|---|---|
| **MP3** | Com perdas | Tocar em qualquer lugar: celulares, carros, sites, qualquer player |
| **M4A (AAC)** | Com perdas | iPhone, iTunes/Música, boa qualidade em arquivos pequenos |
| **OGG (Vorbis)** | Com perdas | Jogos, Linux, projetos de código aberto |
| **OPUS** | Com perdas | Voz, podcasts e streaming com taxas muito baixas |
| **FLAC** | Sem perdas (comprimido) | Arquivar músicas, audição hi-fi |
| **WAV** | Sem perdas (sem compressão) | Edição, produção, equipamentos, CDs |

### Com perdas ou sem perdas?

Os formatos com perdas (MP3, AAC, Vorbis, Opus) removem sons que o ouvido mal percebe para deixar os arquivos pequenos. Os formatos sem perdas (FLAC, WAV) mantêm cada amostra. Daí saem três regras:

- **Converter sem perdas → com perdas** economiza muito espaço, com pouca diferença audível em boas taxas.
- **Converter com perdas → sem perdas** nunca melhora o som; só é útil quando uma ferramenta exige WAV ou FLAC, ou para editar sem acrescentar mais uma rodada de compressão.
- **Evite cadeias de conversões com perdas** (MP3 → OGG → M4A): cada etapa perde um pouco mais. Converta a partir da melhor fonte que você tiver.

## Formatos de entrada

O conversor lê quase todo arquivo de áudio: **MP3, WAV, M4A, AAC, OGG/OGA, FLAC, OPUS, WMA, AIFF/AIF e AMR** (comum em gravações de celulares antigos). Ele também aceita **vídeos** (MP4, MOV, WebM, MKV, AVI, WMV, 3GP e outros) e extrai o som deles.

## Ferramentas específicas

Para as conversões mais comuns, páginas dedicadas oferecem a escolha da taxa de bits:

- [WAV para MP3](/pt/wav-para-mp3), [M4A para MP3](/pt/m4a-para-mp3), [OGG para MP3](/pt/ogg-para-mp3), [FLAC para MP3](/pt/flac-para-mp3)
- [MP3 para WAV](/pt/mp3-para-wav) para editores e equipamentos
- [Cortar áudio](/pt/cortar-audio) para manter só uma parte de uma gravação

## Privado por padrão

Os conversores de áudio online geralmente fazem upload dos seus arquivos para um servidor. O TurboConvert roda o FFmpeg, o motor de código aberto por trás de inúmeras ferramentas de mídia, compilado em WebAssembly no seu navegador. Suas gravações, entrevistas e faixas inéditas não saem do seu aparelho, e não há tempo de upload para esperar.

## Problemas comuns

- **O arquivo convertido não soa melhor.** Converter de MP3 para WAV ou FLAC não devolve o que o MP3 tirou. Use a gravação original ou uma fonte sem perdas, quando tiver.
- **O arquivo não toca no iPhone.** OGG e OPUS têm suporte limitado nos apps padrão da Apple; escolha M4A (AAC) ou MP3 para aparelhos Apple.
- **Uma gravação antiga de celular (.amr) não abre.** O AMR é aceito aqui: converta para MP3 para tocar em qualquer lugar.
