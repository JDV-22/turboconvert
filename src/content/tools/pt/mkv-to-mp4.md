---
name: 'MKV para MP4'
title: 'Converter MKV para MP4 rápido, grátis e sem upload'
description: 'Converta vídeos MKV para MP4 e assista na TV, no celular, no iPhone e em editores. Remux rápido quando possível, sem marca d’água, grátis e sem upload.'
h1: 'Converter MKV para MP4'
lead: 'Transforme arquivos MKV em vídeos MP4 que rodam em celulares, TVs e editores, muitas vezes em segundos e sem recodificar. Tudo acontece no navegador, então nada é enviado.'
what: 'seu vídeo MKV'
howTo: 'converter MKV para MP4'
steps:
  - 'Clique em <strong>Escolher arquivos</strong> ou solte um ou mais arquivos .mkv no quadro.'
  - 'Clique em <strong>Converter</strong>. O método mais rápido é escolhido automaticamente para cada arquivo.'
  - 'Cada MP4 é baixado quando fica pronto; para vários arquivos, use <strong>Baixar tudo (ZIP)</strong>.'
limits:
  - 'Arquivos de até 1 GB cada; MKVs muito longos e com taxa de bits alta podem passar disso. No primeiro uso, o motor de conversão (cerca de 31 MB) é baixado e depois fica em cache.'
  - 'Só as faixas principais de vídeo e áudio são mantidas com certeza. Faixas de legenda, áudios em outros idiomas e capítulos podem não ser levados para o MP4.'
  - 'Quando é preciso recodificar, a conversão demora bem mais e depende do seu aparelho.'
faq:
  - q: 'Converter MKV para MP4 perde qualidade?'
    a: 'Geralmente não. A maioria dos arquivos MKV contém vídeo H.264 e áudio AAC ou parecido, que podem ser passados para um contêiner MP4 do jeito que estão: sem recodificar, sem perda de qualidade. Caso contrário, o vídeo é recodificado em H.264/AAC com alta qualidade.'
  - q: 'Por que meu MKV não abre na TV ou no iPhone?'
    a: 'O MKV é um contêiner flexível que muitas TVs, iPhones, consoles e editores não aceitam. O MP4 é aceito quase em todo lugar, então a conversão costuma resolver a reprodução.'
  - q: 'As legendas são mantidas?'
    a: 'Não de forma garantida. O MP4 aceita bem menos formatos de legenda que o MKV, então as faixas de legenda podem ficar de fora. Guarde o MKV se precisar delas.'
  - q: 'Quanto tempo demora?'
    a: 'Quando as faixas podem ser copiadas, de alguns segundos a um minuto, mesmo para um vídeo longo. Quando é preciso recodificar, mais ou menos a duração do vídeo ou mais, conforme o aparelho.'
  - q: 'Meu arquivo é enviado para algum servidor?'
    a: 'Não. A conversão roda no navegador com o FFmpeg, então o arquivo não sai do seu aparelho.'
---

## MKV x MP4

Os dois são contêineres, caixas que guardam vídeo, áudio e outras faixas. O **MKV (Matroska)** é extremamente flexível: pode levar vários idiomas de áudio, diversos formatos de legenda, capítulos e quase qualquer codec. Por isso é tão usado por gravadores de tela como o OBS, em acervos de vídeo e em servidores de mídia. O **MP4** é menos flexível, mas é o que celulares, TVs, navegadores, redes sociais e apps de edição esperam.

| | MKV | MP4 |
|---|---|---|
| Várias faixas de áudio e legenda | Sim, em muitos formatos | Limitado |
| Roda no iPhone, em smart TVs e editores | Muitas vezes não | Sim |
| Codecs típicos | H.264, H.265, VP9, AAC, AC3, Opus… | H.264, H.265, AAC |

## Reempacotar ou recodificar

O TurboConvert primeiro olha o que há dentro do seu MKV:

- **Faixas compatíveis (mais comumente vídeo H.264 com áudio AAC)** são copiadas para um contêiner MP4 como estão. Isso se chama remux: é rápido, e imagem e som ficam idênticos bit a bit.
- **Faixas incompatíveis** são recodificadas em vídeo H.264 e áudio AAC, o que demora bem mais, mas gera um MP4 que roda em qualquer lugar.

## Gravou com o OBS?

O OBS Studio grava em MKV por padrão para que um travamento não corrompa a gravação inteira. Ele também tem a opção *Remux de gravações*. Se você não está com o OBS à mão, ou está em outro computador, solte o MKV aqui para ter o mesmo resultado.

## Problemas comuns

- **O MP4 ficou sem legendas.** As faixas de legenda podem não sobreviver à conversão. Se precisar delas, use um player que leia MKV direto.
- **Ficou o idioma de áudio errado.** Quando um MKV tem várias faixas de áudio, só uma é mantida no MP4, escolhida automaticamente. Se não for a que você quer, continue assistindo ao MKV num player que permita escolher a faixa, como o VLC.
- **O arquivo passa de 1 GB.** MKVs muito longos e com taxa de bits alta passam do limite; divida-os em partes com um programa de computador ou use o original num player que aceite MKV.

## Dicas

- **Quer um arquivo menor?** O [Comprimir vídeo](/pt/comprimir-video) aceita MKV e gera um MP4 mais leve.
- **Só precisa de uma parte?** Corte com [Cortar vídeo](/pt/cortar-video).
- **Outros formatos:** [MOV para MP4](/pt/mov-para-mp4) e [WebM para MP4](/pt/webm-para-mp4).

Sem upload, sem marca d’água e sem conta: seu vídeo fica no seu aparelho do começo ao fim.
