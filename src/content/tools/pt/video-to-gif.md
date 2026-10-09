---
name: 'Vídeo para GIF'
title: 'Transformar vídeo em GIF: MP4 para GIF grátis e sem upload'
description: 'Transforme um trecho de vídeo em GIF animado: MP4, MOV, WebM e mais. Escolha início, duração, largura e fps. Grátis, sem marca d’água e sem upload.'
h1: 'Transformar vídeo em GIF'
lead: 'Crie um GIF animado a partir de qualquer vídeo: uma reação, a demonstração de um produto, uma gravação de tela. O GIF é feito no seu navegador, então seu vídeo nunca é enviado e não há marca d’água.'
what: 'seu vídeo'
howTo: 'transformar um vídeo em GIF'
steps:
  - 'Clique em <strong>Escolher arquivo</strong> ou solte um vídeo: MP4, MOV, WebM, MKV, AVI e outros formatos comuns são aceitos.'
  - 'Defina o <strong>Início (segundos)</strong>, onde o GIF deve começar, e a <strong>Duração (segundos)</strong>, de 1 a 60 segundos.'
  - 'Escolha a <strong>Largura</strong> (320–800 px) e os <strong>Quadros por segundo</strong> (8–24 fps). Os valores padrão, 480 px e 12 fps, servem para a maioria dos usos.'
  - 'Clique em <strong>Converter</strong>. O GIF é baixado automaticamente quando fica pronto.'
limits:
  - 'Um vídeo por vez, de até 500 MB. O GIF pode ter no máximo 60 segundos.'
  - 'No primeiro uso, o motor de conversão (cerca de 31 MB) é baixado e depois fica em cache. A velocidade depende do seu aparelho.'
  - 'O GIF não tem som e só mostra 256 cores por quadro, então degradês suaves e tons de pele podem ficar um pouco granulados ou em faixas.'
  - 'GIFs são bem mais pesados que vídeos da mesma duração; GIFs longos ou largos podem chegar a dezenas de megabytes.'
faq:
  - q: 'Como transformar um MP4 em GIF?'
    a: 'Solte o MP4 aqui, defina onde o GIF começa e quanto tempo dura, escolha a largura e os quadros por segundo e clique em Converter. O GIF é baixado automaticamente, sem marca d’água.'
  - q: 'Por que meu GIF ficou tão pesado?'
    a: 'O GIF guarda cada quadro como uma imagem separada, com pouca compressão entre eles, então o tamanho cresce com duração × quadros por segundo × largura. Reduzir a largura pela metade divide o tamanho por cerca de quatro; passar de 24 para 12 fps divide por dois.'
  - q: 'Qual o melhor tamanho e taxa de quadros para um GIF?'
    a: 'Para conversas e redes sociais, 480 px a 12 fps é um bom equilíbrio. Para um GIF fluido e detalhado, use 640 px e 15 fps; para e-mail ou um arquivo bem pequeno, 320 px a 8–10 fps.'
  - q: 'Qual a duração máxima de um GIF?'
    a: 'Até 60 segundos aqui. Na prática, os melhores GIFs duram de 2 a 6 segundos; trechos mais longos ficam muito pesados e funcionam melhor como vídeo.'
  - q: 'Dá para fazer um GIF com um vídeo do iPhone?'
    a: 'Sim. Vídeos MOV do iPhone são aceitos. No próprio celular, abra esta página no Safari e escolha o vídeo na biblioteca; para vídeos longos ou em alta resolução, um computador é mais rápido.'
  - q: 'Meu vídeo é enviado para algum servidor?'
    a: 'Não. O GIF é criado pelo FFmpeg rodando dentro do navegador. O vídeo não sai do seu aparelho.'
---

## Escolhendo as configurações certas

Um GIF é como um livro animado (flip-book): cada quadro é guardado como uma imagem própria. Quatro configurações definem a aparência e o peso dele.

| Configuração | O que faz | Dica |
|---|---|---|
| **Início (segundos)** | Onde o GIF começa no vídeo | Assista ao vídeo e anote o segundo em que a ação começa, por exemplo 12 |
| **Duração (segundos)** | Quanto tempo o GIF dura | 2–6 s para reações e loops; até 60 s permitidos |
| **Largura** | Tamanho em pixels (a altura segue a proporção do vídeo) | 480 px para conversas, 640–800 px para tutoriais com texto |
| **Quadros por segundo** | Quantos quadros aparecem por segundo | 12 fps parece fluido; 8 fps para arquivos mínimos; 24 fps para movimento suave |

O tamanho do arquivo cresce com todas elas ao mesmo tempo. Um GIF de 5 segundos a 480 px e 12 fps tem 60 quadros; o mesmo trecho a 800 px e 24 fps tem 120 quadros bem maiores, facilmente cinco vezes mais pesado ou mais.

## Fazendo um GIF menor

Se o GIF está pesado demais para o Slack, o Discord, um e-mail ou uma página web, mude uma configuração por vez:

1. **Encurte.** A duração é a alavanca mais direta. Deixe só o momento que importa.
2. **Reduza a largura.** Passar de 640 para 480 px elimina quase metade dos pixels de cada quadro.
3. **Baixe os quadros por segundo.** 12 fps em vez de 24 fps divide o número de quadros por dois, e a maioria das pessoas ainda vê um movimento fluido.
4. **Escolha cenas calmas.** Cenas com pouco movimento, fundos lisos e menos cores comprimem melhor do que imagens tremidas, detalhadas ou com ruído.

## GIF ou vídeo?

GIFs tocam sozinhos e em loop em qualquer lugar (apps de conversa, e-mails, documentação, issues do GitHub, slides), e é por isso que continuam populares. Mas um GIF costuma ser muitas vezes maior que o mesmo trecho em MP4 e não tem som. Se a plataforma aceita vídeo, um MP4 curto é mais leve e mais nítido: corte o momento de que precisa com [Cortar vídeo](/pt/cortar-video) e, se for preciso, diminua com [Comprimir vídeo](/pt/comprimir-video). Se você quer um vídeo em loop sem som, o [Remover áudio do vídeo](/pt/remover-audio-video) tira a trilha sonora.

## Funciona com gravações de tela e vídeos do celular

Você pode usar arquivos MP4 de celulares Android, câmeras e apps de edição, vídeos **MOV** do iPhone ou de gravações de tela do Mac, arquivos **WebM** de gravadores no navegador, além de MKV, AVI, M4V e outros. Gravações de tela rendem GIFs ótimos para relatar bugs e fazer tutoriais: mantenha a largura em 640–800 px para o texto continuar legível; 8–12 fps bastam para movimentos do mouse.

## Sem upload, sem marca d’água

Muitos criadores de GIF fazem upload do seu vídeo para um servidor e carimbam o logotipo deles no resultado, a menos que você pague. O TurboConvert executa o FFmpeg, o motor de código aberto por trás de muitas ferramentas profissionais de vídeo, compilado em WebAssembly, direto na aba do navegador. Seu vídeo fica no seu aparelho e o GIF sai limpo. O motor (cerca de 31 MB) é baixado no primeiro uso e depois fica em cache, então o próximo GIF começa na hora.

Prefere o áudio do vídeo? O [MP4 para MP3](/pt/mp4-para-mp3) extrai o som como MP3.

## Problemas comuns

- **O GIF começa no momento errado.** O início é medido em segundos desde o começo do vídeo: 1 minuto e 20 segundos são 80. Anote o tempo no seu player e converta para segundos.
- **Está pesado demais para a plataforma.** Reduza primeiro a Duração, depois a Largura e por fim os Quadros por segundo: nessa ordem, elas dão a maior economia com o menor impacto visual.
- **As cores ficaram granuladas.** É o limite de 256 cores do GIF. Cenas com cores lisas e boa iluminação convertem melhor que cenas escuras ou com ruído.
