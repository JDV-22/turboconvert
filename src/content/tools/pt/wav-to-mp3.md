---
name: 'WAV para MP3'
title: 'Converter WAV para MP3 grátis, em lote e sem upload'
description: 'Converta áudio WAV e AIFF para MP3 de 128 a 320 kbps: arquivos até 10 vezes menores para compartilhar e ouvir. Grátis, em lote, no navegador e sem upload.'
h1: 'Converter WAV para MP3'
lead: 'Transforme gravações WAV pesadas em MP3 fáceis de enviar, ouvir e guardar, um arquivo ou um álbum inteiro. Convertido no seu aparelho, nunca enviado.'
what: 'seus arquivos WAV'
howTo: 'converter WAV para MP3'
steps:
  - 'Clique em <strong>Escolher arquivos</strong> ou solte seus arquivos .wav (ou .aiff) no quadro.'
  - 'Escolha a <strong>Qualidade do áudio</strong>: 192 kbps por padrão, 320 kbps para músicas em que cada detalhe conta, 128 kbps para fala.'
  - 'Clique em <strong>Converter</strong> e baixe cada MP3 ou tudo com <strong>Baixar tudo (ZIP)</strong>.'
limits:
  - 'Arquivos de até 1 GB cada. No primeiro uso, o motor de conversão (cerca de 31 MB) é baixado e depois fica em cache.'
  - 'O MP3 é um formato com perdas, então guarde os WAV originais se for editar ou masterizar o áudio depois.'
  - 'A velocidade depende do seu aparelho; gravações longas convertem mais rápido num computador.'
faq:
  - q: 'Quanto um MP3 é menor que um WAV?'
    a: 'Um WAV com qualidade de CD ocupa cerca de 10 MB por minuto. Em MP3, fica com cerca de 1,4 MB a 192 kbps ou 2,4 MB a 320 kbps: de 4 a 7 vezes menor, e cerca de 10 vezes a 128 kbps.'
  - q: 'Converter WAV para MP3 perde qualidade?'
    a: 'Tecnicamente sim, já que o MP3 descarta sons que o ouvido mal percebe. Entre 256 e 320 kbps, a maioria das pessoas não distingue do WAV numa audição normal.'
  - q: 'Qual taxa de bits escolher?'
    a: '128 kbps para gravações de voz e podcasts, 192 kbps para ouvir no dia a dia, 256–320 kbps para música. 320 kbps é o máximo que o MP3 permite.'
  - q: 'Dá para converter arquivos AIFF também?'
    a: 'Sim. O AIFF (.aiff, .aif), formato sem compressão comum no Mac e em programas de música, é convertido do mesmo jeito.'
  - q: 'Meus arquivos são enviados para algum servidor?'
    a: 'Não. O FFmpeg roda no navegador e os MP3 são gravados no seu aparelho. Faixas inéditas e gravações privadas ficam com você.'
---

## WAV x MP3

O **WAV** guarda o áudio sem compressão, cada amostra exatamente como foi gravada. É o que gravadores, DAWs (Ableton, Logic, FL Studio, Audacity) e CDs ripados produzem, e é ideal para edição. Mas pesa: cerca de 10 MB por minuto com qualidade de CD, bem mais em gravações de 24 bits ou com taxa de amostragem alta.

O **MP3** usa compressão perceptual para descartar o que o ouvido tem menos chance de notar. O resultado é um arquivo que toca em qualquer celular, som de carro, site e app, com uma fração do tamanho.

| | WAV | MP3 |
|---|---|---|
| Compressão | Nenhuma (sem perdas) | Com perdas, ajustável |
| Tamanho por minuto (qualidade de CD) | ≈ 10 MB | ≈ 1–2,4 MB |
| Ideal para | Gravar, editar, masterizar | Compartilhar, fazer streaming, ouvir |
| Compatibilidade | Muito boa | Universal |

## Escolhendo a taxa de bits

| Qualidade do áudio | Tamanho por minuto | Uso |
|---|---|---|
| 128 kbps | ≈ 1 MB | Gravações de voz, podcasts, aulas |
| 192 kbps | ≈ 1,4 MB | Uso do dia a dia (padrão) |
| 256 kbps | ≈ 1,9 MB | Música |
| 320 kbps | ≈ 2,4 MB | Demos, sets de DJ, arquivo para ouvir |

## Usos típicos

- **Enviar demos** para a banda, uma gravadora ou um cliente por e-mail ou WhatsApp.
- **Publicar podcasts**: as plataformas de hospedagem costumam esperar MP3.
- **Colocar gravações no celular** ou num pendrive para ouvir no carro.
- **Economizar espaço** num acervo grande de gravações de voz ou de campo.

## Problemas comuns

- **O MP3 soa um pouco diferente do WAV.** A 128 kbps, pratos e caudas de reverb podem perder detalhe. Use 256 ou 320 kbps para música.
- **WAVs grandes de 24 bits ou multicanal.** São aceitos até 1 GB por arquivo; gravações muito longas convertem mais rápido num computador.

## Ferramentas relacionadas

- Precisa voltar para WAV para usar num editor? Use o [MP3 para WAV](/pt/mp3-para-wav), mas saiba que ele não recupera o detalhe que o MP3 tirou.
- Outros formatos de origem: [M4A para MP3](/pt/m4a-para-mp3), [FLAC para MP3](/pt/flac-para-mp3) ou o [conversor de áudio](/pt/conversor-de-audio), que faz tudo.
- Tire o silêncio do começo ou do fim com [Cortar áudio](/pt/cortar-audio).

A conversão é feita pelo FFmpeg compilado em WebAssembly, dentro do navegador: sem upload, sem conta e sem limite de quantidade de arquivos.
