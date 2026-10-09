---
name: 'Comprimir vídeo'
title: 'Comprimir vídeo online: diminuir tamanho de MP4 grátis'
description: 'Comprima vídeos MP4, MOV e outros e diminua o tamanho para e-mail, WhatsApp ou Discord. Escolha 1080p, 720p ou 480p. Grátis, sem marca d’água e sem upload.'
h1: 'Comprimir um vídeo'
lead: 'Diminua um vídeo para caber num e-mail, num app de conversa ou numa conexão lenta, sem deixar de ser assistível. A compressão acontece no navegador: seu vídeo nunca é enviado.'
what: 'seu vídeo'
howTo: 'comprimir um vídeo'
steps:
  - 'Clique em <strong>Escolher arquivo</strong> ou solte um vídeo: MP4, MOV, WebM, MKV, AVI e outros formatos comuns funcionam.'
  - 'Escolha o nível de <strong>Compressão</strong>: <em>Recomendada</em> é um bom equilíbrio, <em>Forte</em> gera o menor arquivo e <em>Leve</em> a melhor qualidade.'
  - 'Escolha a <strong>Resolução máx.</strong>: 720p por padrão, 1080p para telas maiores, 480p para o menor tamanho, ou <em>Original</em> para manter.'
  - 'Clique em <strong>Converter</strong> e acompanhe a barra de progresso. O MP4 comprimido é baixado automaticamente.'
limits:
  - 'Um vídeo por vez, de até 1 GB. No primeiro uso, o motor de conversão (cerca de 31 MB) é baixado e depois fica em cache.'
  - 'A compressão recodifica cada quadro, o que exige bastante do aparelho. No celular, pode levar mais tempo do que a duração do vídeo; um computador recente é bem mais rápido. Deixe a aba aberta até terminar.'
  - 'Não existe configuração de “tamanho final do arquivo”. Se o resultado ainda estiver grande, use um nível mais forte, uma resolução menor ou corte o vídeo antes.'
  - 'O resultado é sempre um MP4. Vídeos que já estão muito comprimidos podem diminuir só um pouco.'
faq:
  - q: 'Como diminuir o tamanho de um vídeo sem perder qualidade?'
    a: 'Baixar a resolução para a tela em que o vídeo vai ser visto (720p para celulares e apps de conversa) dá a maior economia com pouca mudança visível. Depois use o nível Recomendada; a Leve preserva mais detalhes se você notar diferença.'
  - q: 'Quanto menor meu vídeo vai ficar?'
    a: 'Depende da origem. Vídeos de celular gravados em 4K ou 1080p costumam encolher bastante em 720p; gravações de tela e vídeos baixados já comprimidos diminuem menos. Teste primeiro a Recomendada e ajuste.'
  - q: 'Como comprimir um vídeo para mandar por e-mail?'
    a: 'O Gmail e a maioria dos provedores limitam os anexos a cerca de 20–25 MB. Para um vídeo de alguns minutos, escolha 480p ou 720p com compressão Forte. Se ainda estiver grande, corte-o antes com <a href="/pt/cortar-video">Cortar vídeo</a>.'
  - q: 'Como comprimir um vídeo para o WhatsApp ou o Discord?'
    a: 'Escolha 720p com compressão Recomendada ou Forte. O WhatsApp e as contas gratuitas do Discord têm limites de tamanho rígidos, que mudam com o tempo, então confira o limite atual; para vídeos longos, cortar antes é o jeito mais garantido de caber.'
  - q: 'Comprimir o vídeo tira o som?'
    a: 'Não. O áudio é mantido. Se você quer um vídeo sem som, use <a href="/pt/remover-audio-video">Remover áudio do vídeo</a>.'
  - q: 'Meu vídeo é enviado para algum servidor?'
    a: 'Não. A compressão é feita pelo FFmpeg rodando no navegador. O vídeo fica no seu aparelho: não há upload, então nem um arquivo grande precisa passar pela sua conexão.'
---

## Por que os vídeos são tão pesados?

Os celulares gravam com taxas de bits altas para que as imagens continuem boas depois da edição: um minuto de vídeo 4K do iPhone pode pesar várias centenas de megabytes, e até o 1080p enche a memória rápido. Ótimo para a sua galeria, ruim para enviar. Anexos de e-mail, apps de conversa, plataformas de escola e de vagas têm limites de tamanho, e no 4G um arquivo grande demora uma eternidade para ir.

Duas coisas definem o tamanho de um vídeo:

1. **A resolução**: quantos pixels tem cada quadro. O 4K tem nove vezes os pixels do 720p.
2. **A taxa de bits (bitrate)**: quantos dados são gastos por segundo. Codificadores modernos como o H.264 conseguem gastar bem menos mantendo a imagem limpa.

O TurboConvert reduz os dois: a opção **Resolução máx.** diminui a imagem (mantendo a proporção) e o nível de **Compressão** controla o quanto o codificador corta de dados.

## Que configurações escolher

| Objetivo | Compressão | Resolução máx. |
|---|---|---|
| Manter nítido para TV ou monitor grande | Leve | 1080p |
| Compartilhar em apps de conversa ou redes sociais | Recomendada | 720p |
| Mandar por e-mail | Forte | 720p ou 480p |
| Menor arquivo possível | Forte | 480p |
| Diminuir sem mudar a resolução | Recomendada | Original |

A maioria das pessoas assiste a vídeos compartilhados no celular, onde o 720p fica nítido. Se for para lembrar de uma configuração só, use **Recomendada + 720p**, que é o padrão.

## Dicas para um arquivo menor

- **Corte antes.** A duração multiplica tudo. Tirar o tempo morto do começo e do fim com [Cortar vídeo](/pt/cortar-video) muitas vezes economiza mais que qualquer configuração.
- **Tire o som se não precisar dele.** O [Remover áudio do vídeo](/pt/remover-audio-video) elimina a faixa de áudio por completo.
- **Só precisa do áudio?** O [MP4 para MP3](/pt/mp4-para-mp3) transforma uma palestra de 200 MB em alguns megabytes.
- **Quer um loop curto?** Um trecho de poucos segundos pode ser compartilhado como GIF com [Vídeo para GIF](/pt/video-para-gif).
- **Tem um MOV do iPhone?** Dá para comprimir direto: o resultado é um MP4 que toca em qualquer lugar. Para só mudar o formato, sem comprimir, use [MOV para MP4](/pt/mov-para-mp4).

## O que significa cada nível

Os três níveis de **Compressão** definem quanto detalhe o codificador pode descartar:

- **Leve — melhor qualidade:** quase impossível distinguir do original na tela de um celular ou notebook. Escolha para vídeos que você vai guardar ou mostrar numa tela grande.
- **Recomendada — boa qualidade:** o melhor equilíbrio para compartilhar. Detalhes finos em movimentos rápidos podem suavizar um pouco, mas rostos, textos e cores continuam limpos.
- **Forte — arquivo menor:** suavização visível, principalmente em cenas escuras ou movimentadas, em troca de um arquivo bem menor. Boa para prévias, rascunhos e e-mail.

Combinada com uma resolução máxima menor, até a Recomendada costuma reduzir drasticamente vídeos de celular.

## Como funciona

O TurboConvert usa o FFmpeg, o motor de código aberto por trás de muitas ferramentas profissionais de vídeo, compilado em WebAssembly para rodar dentro do navegador. Seu vídeo é lido do disco, recodificado pelo processador do seu aparelho e salvo na pasta de downloads. Nada é enviado: sem espera para transferir um arquivo grande, sem fila, sem marca d’água e sem cópia do vídeo no servidor de ninguém, uma diferença importante para vídeos de família, material de clientes ou gravações de reuniões.

A contrapartida é a velocidade: é o seu computador que trabalha, não um data center. Para vídeos longos, recomendamos um computador; no celular, mantenha a tela ligada e a aba em primeiro plano até o download começar.

## Problemas comuns

- **Está lento:** a compressão é a operação mais pesada que uma ferramenta de vídeo faz. Escolha uma resolução máxima menor: menos pixels para codificar deixa tudo mais rápido, além de menor.
- **O arquivo quase não diminuiu:** a origem já estava comprimida de forma eficiente (por exemplo, um vídeo baixado de uma plataforma de streaming). Escolha Forte e uma resolução menor.
- **A página recarregou no celular:** navegadores de celular podem pausar abas em segundo plano. Fique na página durante a conversão ou use um computador.
