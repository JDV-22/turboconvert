---
name: 'Cortar áudio'
title: 'Cortar áudio online: cortar MP3 e outros áudios grátis'
description: 'Corte um MP3, WAV, M4A ou outro arquivo de áudio definindo o início e o fim. Crie toques, trechos e gravações mais curtas. Grátis, no navegador e sem upload.'
h1: 'Cortar um arquivo de áudio'
lead: 'Fique só com a parte da gravação ou da música de que você precisa informando o tempo de início e de fim. Ideal para toques de celular, trechos e para limpar gravações de voz. Cortado no navegador, nunca enviado.'
what: 'seu arquivo de áudio'
howTo: 'cortar um arquivo de áudio'
steps:
  - 'Clique em <strong>Escolher arquivo</strong> ou solte um arquivo de áudio: MP3, WAV, M4A, AAC, OGG, FLAC, OPUS, WMA, AIFF e AMR são aceitos.'
  - 'Digite o tempo de <strong>Início</strong> em horas:minutos:segundos, por exemplo <code>00:00:12</code>.'
  - 'Digite o tempo de <strong>Fim</strong>, por exemplo <code>00:00:42</code>, ou deixe vazio para manter tudo até o final.'
  - 'Clique em <strong>Converter</strong>. O arquivo cortado é baixado automaticamente.'
limits:
  - 'Um arquivo por vez, de até 1 GB. No primeiro uso, o motor de conversão (cerca de 31 MB) é baixado e depois fica em cache.'
  - 'Não há forma de onda nem pré-escuta: encontre os tempos antes no seu player de costume.'
  - 'A ferramenta mantém um único trecho contínuo. Para tirar uma parte do meio, corte as duas partes separadamente.'
  - 'Não é aplicado fade-in nem fade-out.'
faq:
  - q: 'Como cortar o começo de um MP3?'
    a: 'Coloque em Início o ponto em que o áudio deve começar (por exemplo, 00:00:05) e deixe o Fim vazio. Tudo o que vem antes desse ponto é removido.'
  - q: 'Como descobrir os tempos exatos de início e fim?'
    a: 'Toque o arquivo em qualquer player (o do celular, VLC, Windows Media Player, QuickTime), pause nos pontos desejados e anote o tempo mostrado.'
  - q: 'Como fazer um toque de celular com uma música?'
    a: 'Corte a música num trecho curto, de uns 30 segundos, e passe para o celular. O Android aceita toques em MP3; no iPhone, os toques precisam ser importados pelas ferramentas da própria Apple, no formato .m4r.'
  - q: 'Dá para cortar uma gravação de voz?'
    a: 'Sim. Gravações M4A do iPhone, gravações em WAV e outros formatos comuns são aceitos. Tire o silêncio do começo e do fim antes de compartilhar.'
  - q: 'Meu áudio é enviado para algum servidor?'
    a: 'Não. O áudio é cortado pelo FFmpeg rodando dentro do navegador; seu arquivo fica no seu aparelho.'
---

## Para que as pessoas cortam áudio

- **Toques de celular e sons de notificação**: fique com o refrão ou com os 20–30 segundos mais marcantes.
- **Gravações de voz e entrevistas**: tire o silêncio e os ruídos de manuseio do começo e do fim.
- **Trechos de podcasts e vídeos**: extraia uma frase ou um destaque para compartilhar nas redes sociais.
- **Estudo de música**: isole uma passagem para repetir num app de prática.
- **Apresentações**: mantenha só a parte de uma faixa que você precisa como música de fundo.

## Como escrever os tempos

Os tempos usam **horas:minutos:segundos**:

| Você quer | Início | Fim |
|---|---|---|
| Tirar os 5 primeiros segundos | `00:00:05` | *(vazio)* |
| Manter os 30 primeiros segundos | `00:00:00` | `00:00:30` |
| Manter de 1:10 a 1:40 | `00:01:10` | `00:01:40` |
| Manter dos 45 minutos até o fim | `00:45:00` | *(vazio)* |

Na dúvida sobre o momento exato, deixe um segundo de folga de cada lado; você sempre pode cortar de novo.

## Dicas

- **Precisa de outro formato depois?** Converta o trecho com o [conversor de áudio](/pt/conversor-de-audio) para MP3, WAV, M4A, OGG, FLAC ou OPUS.
- **Arquivo menor para compartilhar?** Trechos em WAV ou FLAC sem perdas viram MP3 compactos com o [WAV para MP3](/pt/wav-para-mp3).
- **O áudio está num vídeo?** Extraia antes com o [MP4 para MP3](/pt/mp4-para-mp3), ou corte o vídeo direto com [Cortar vídeo](/pt/cortar-video).

## Formatos aceitos

Você pode cortar arquivos MP3, WAV, M4A, AAC, OGG, FLAC, OPUS, WMA, AIFF e AMR de até 1 GB. Isso cobre arquivos de música, gravações de voz do celular, exportações de gravadores e gravações de celulares antigos.

## Problemas comuns

- **O corte ficou uma fração de segundo fora.** Deixe uma pequena folga e corte de novo se precisar; para edições com precisão de amostra, um editor com forma de onda como o Audacity é mais indicado.
- **Aparece um estalo no começo ou no fim.** Cortar no meio de um som pode gerar um estalo, já que nenhum fade é aplicado. Mova o ponto de corte para um momento mais silencioso.

## Sem precisar de upload

Seu áudio é processado pelo FFmpeg, o motor de código aberto por trás de muitas ferramentas profissionais de mídia, compilado em WebAssembly e rodando no navegador. Sem conta, sem marca d’água, e suas gravações não saem do seu aparelho.
