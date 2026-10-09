---
name: 'Remover áudio do vídeo'
title: 'Remover áudio de vídeo: tirar o som de MP4 grátis'
description: 'Tire o som de um vídeo com um clique: remova o áudio de MP4, MOV, WebM e outros, em lote. Grátis e sem marca d’água. No navegador, seu vídeo nunca é enviado.'
h1: 'Remover o áudio de um vídeo'
lead: 'Tire a trilha sonora de um ou vários vídeos e fique com um vídeo mudo. O áudio é removido no seu navegador: seus vídeos não saem do seu aparelho.'
what: 'seu vídeo'
howTo: 'remover o áudio de um vídeo'
steps:
  - 'Clique em <strong>Escolher arquivos</strong> ou solte um ou mais vídeos: MP4, MOV, WebM, MKV, AVI e outros formatos comuns são aceitos.'
  - 'Clique em <strong>Converter</strong>. Não há configurações: a faixa de áudio é simplesmente removida.'
  - 'Cada vídeo sem som é baixado quando fica pronto; para vários arquivos, use <strong>Baixar tudo (ZIP)</strong>.'
limits:
  - 'Vídeos de até 1 GB cada. No primeiro uso, o motor de conversão (cerca de 31 MB) é baixado e depois fica em cache.'
  - 'Todo o áudio é removido; não dá para manter só uma faixa ou baixar o volume de uma parte do vídeo.'
  - 'A velocidade depende do seu aparelho e do tamanho do arquivo.'
faq:
  - q: 'Como tirar o som de um vídeo?'
    a: 'Solte o vídeo aqui e clique em Converter. O novo arquivo tem a mesma imagem sem nenhuma faixa de áudio, e não apenas com o volume no zero.'
  - q: 'Tirar o som diminui a qualidade do vídeo?'
    a: 'A imagem mantém a resolução e a qualidade; só o áudio sai. O arquivo também fica um pouco menor, já que os dados de som somem.'
  - q: 'Dá para remover o áudio de vários vídeos de uma vez?'
    a: 'Sim. Solte vários vídeos; cada um é processado na sua vez e você pode baixar todos num ZIP.'
  - q: 'Posso guardar o áudio num arquivo separado?'
    a: 'Sim. Antes de tirar o som, extraia o áudio com o <a href="/pt/mp4-para-mp3">MP4 para MP3</a>. Assim você fica com o vídeo mudo e a trilha sonora separados.'
  - q: 'Meu vídeo é enviado para algum servidor?'
    a: 'Não. Tudo é processado pelo FFmpeg rodando dentro do navegador.'
---

## Por que remover o áudio?

Muitas vezes um vídeo mudo é exatamente o que você precisa:

- **Vídeos de fundo ou de destaque em sites**: os navegadores costumam bloquear a reprodução automática com som, e um arquivo sem faixa de áudio garante que o visitante nunca leve um susto.
- **Privacidade**: tire conversas, nomes ou barulhos captados pelo microfone do celular antes de compartilhar um vídeo.
- **Posts em redes sociais e apresentações** em que você vai colocar música ou narração em outro app.
- **Música com direitos autorais** tocando no fundo de uma gravação que você não quer publicar.
- **Demonstrações de produtos e gravações de tela** em que o som não acrescenta nada.

## Tirar o som x baixar o volume

Zerar o volume num editor ainda deixa uma faixa de áudio (vazia) no arquivo, e algumas plataformas continuam tratando o vídeo como se tivesse som. Esta ferramenta remove a faixa de áudio por completo, então players, sites e apps sabem que o vídeo é mudo.

## O que você recebe

O resultado mantém a resolução e a duração do vídeo original; só o som desaparece. Você pode soltar vários vídeos de uma vez, o que ajuda a preparar um lote de vídeos de produtos ou de loops de fundo para um site, e baixar todos juntos num ZIP. São aceitos arquivos de até 1 GB cada, incluindo vídeos MOV direto do iPhone.

## Combine com outras ferramentas

- **Quer um trecho menor?** Corte antes com [Cortar vídeo](/pt/cortar-video) e depois tire o som.
- **Quer um arquivo mais leve?** O [Comprimir vídeo](/pt/comprimir-video) reduz a resolução e a taxa de bits.
- **Uma animação em loop para um chat ou documento?** O [Vídeo para GIF](/pt/video-para-gif) cria um GIF sem som direto.
- **Vai converter um MOV do iPhone?** O [MOV para MP4](/pt/mov-para-mp4) muda o formato se um site não aceitar MOV.

## Privado por padrão

Seu vídeo é processado pelo FFmpeg compilado em WebAssembly, rodando na sua própria aba do navegador. Nada é enviado, o que faz ainda mais sentido quando o motivo para tirar o som é justamente algo privado no áudio.

## Problemas comuns

- **O arquivo sem som é quase do tamanho do original.** O áudio é uma parte pequena da maioria dos vídeos. Para deixar o arquivo menor, use também o Comprimir vídeo.
- **Eu queria tirar só o barulho de fundo ou a música.** Esta ferramenta remove todo o som. Separar vozes de música exige um programa de edição de áudio.
