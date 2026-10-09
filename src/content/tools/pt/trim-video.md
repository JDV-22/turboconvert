---
name: 'Cortar vídeo'
title: 'Cortar vídeo online: recortar trechos de MP4 grátis'
description: 'Corte um vídeo definindo o início e o fim: recorte trechos de MP4, MOV, WebM ou MKV para compartilhar. Grátis, sem marca d’água, no navegador e sem upload.'
h1: 'Cortar um vídeo'
lead: 'Tire o começo ou o final de um vídeo, ou fique só com a parte que importa, informando o tempo de início e de fim. Tudo acontece no navegador: seu vídeo nunca é enviado.'
what: 'seu vídeo'
howTo: 'cortar um vídeo'
steps:
  - 'Clique em <strong>Escolher arquivo</strong> ou solte seu vídeo: MP4, MOV, WebM, MKV, AVI e outros formatos comuns são aceitos.'
  - 'Digite o tempo de <strong>Início</strong> do trecho que você quer manter, em horas:minutos:segundos (por exemplo, <code>00:01:15</code>).'
  - 'Digite o tempo de <strong>Fim</strong> (por exemplo, <code>00:02:30</code>), ou deixe vazio para manter tudo até o final.'
  - 'Clique em <strong>Converter</strong>. O trecho cortado é baixado automaticamente.'
limits:
  - 'Um vídeo por vez, de até 1 GB. No primeiro uso, o motor de conversão (cerca de 31 MB) é baixado e depois fica em cache.'
  - 'A ferramenta mantém um único trecho contínuo. Para tirar uma parte do meio, corte duas vezes (antes e depois do trecho) e fique com os dois clipes.'
  - 'Não há linha do tempo visual: assista ao vídeo no seu player de costume para encontrar os tempos exatos antes.'
  - 'A velocidade depende do seu aparelho; para vídeos longos, um computador é mais rápido que um celular.'
faq:
  - q: 'Como cortar o começo de um vídeo?'
    a: 'Coloque em Início o momento em que o vídeo deve começar (por exemplo, 00:00:08) e deixe o Fim vazio. Tudo o que vem antes desse ponto é removido.'
  - q: 'Como cortar o final de um vídeo?'
    a: 'Deixe o Início em 00:00:00 e coloque em Fim o momento em que o vídeo deve parar. Tudo o que vem depois é removido.'
  - q: 'Como descobrir os tempos certos de início e fim?'
    a: 'Assista ao vídeo em qualquer player (Fotos, QuickTime, VLC, a galeria do celular), pause nos pontos de início e fim e anote o tempo mostrado. Depois digite esses tempos aqui.'
  - q: 'Cortar o vídeo diminui a qualidade?'
    a: 'O corte mantém a resolução do vídeo. Para deixar o arquivo menor também, passe o trecho cortado pelo <a href="/pt/comprimir-video">Comprimir vídeo</a>.'
  - q: 'Tem marca d’água ou limite de duração?'
    a: 'Sem marca d’água. Os arquivos podem ter até 1 GB, sem limite para a duração do trecho que você mantém.'
  - q: 'Meu vídeo é enviado para algum servidor?'
    a: 'Não. O vídeo é cortado pelo FFmpeg rodando dentro do navegador; ele não sai do seu aparelho.'
---

## Quando cortar um vídeo

Quase toda gravação tem alguns segundos sobrando: o celular balançando antes de a ação começar, o momento em que você procura o botão de parar, uma introdução longa antes de uma palestra. Tirar esses trechos deixa o vídeo mais agradável de assistir e mais leve para enviar. Usos típicos:

- **Compartilhar o melhor momento** (um gol, um discurso, uma cena engraçada) de uma gravação mais longa.
- **Limpar gravações de tela** antes de publicar um tutorial ou relatar um bug.
- **Caber num limite de tamanho ou de duração** de um app de conversa, de um e-mail ou de uma rede social.
- **Preparar um trecho** para uma apresentação ou um projeto de vídeo.

## Como funcionam os tempos

Os tempos são escritos como **horas:minutos:segundos**:

| Você quer | Início | Fim |
|---|---|---|
| Tirar os 10 primeiros segundos | `00:00:10` | *(vazio)* |
| Manter só o primeiro minuto | `00:00:00` | `00:01:00` |
| Manter de 1:15 a 2:30 | `00:01:15` | `00:02:30` |
| Manter de 1 h 05 min até o fim | `01:05:00` | *(vazio)* |

O trecho contém tudo o que está entre o Início e o Fim. Na dúvida, deixe um segundo de folga de cada lado: você sempre pode cortar de novo.

## Dicas

- **Prefere um GIF?** O [Vídeo para GIF](/pt/video-para-gif) cria uma animação em loop com alguns segundos de vídeo, com configurações próprias de início e duração.
- **Tire o som** do trecho cortado com [Remover áudio do vídeo](/pt/remover-audio-video).
- **Diminua para enviar:** cortar primeiro e depois comprimir com [Comprimir vídeo](/pt/comprimir-video) gera o menor arquivo.
- **Só precisa do áudio de um trecho?** Converta com [MP4 para MP3](/pt/mp4-para-mp3) e depois corte o MP3 com [Cortar áudio](/pt/cortar-audio).

## Problemas comuns

- **O trecho começa um pouco antes ou depois do esperado.** Ajuste o Início em um segundo e converta de novo.
- **Aparece um erro sobre o tempo.** Use o formato horas:minutos:segundos com dois dígitos em cada parte e confira se o Fim vem depois do Início e não passa da duração do vídeo.

## Sem upload, sem marca d’água

Os cortadores de vídeo online geralmente fazem upload do arquivo inteiro antes de você poder fazer qualquer coisa, o que é lento para vídeos grandes e pouco indicado para gravações pessoais. O TurboConvert executa o FFmpeg, o motor de código aberto usado por programas profissionais de vídeo, dentro do navegador. Seu vídeo é lido do disco e o trecho cortado vai direto para a pasta de downloads, sem marca d’água e sem conta.
