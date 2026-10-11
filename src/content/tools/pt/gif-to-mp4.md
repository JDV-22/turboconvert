---
name: 'GIF para MP4'
title: 'Converter GIF para MP4: menor, mais fluido e grátis'
description: 'Converta GIFs animados em vídeo MP4, geralmente bem menor, que funciona no Instagram, no WhatsApp e em qualquer site. Grátis, em lote, sem upload.'
h1: 'Converter GIF para MP4'
lead: 'Transforme GIFs animados em vídeos MP4 mais leves, mais fluidos e aceitos por todas as redes sociais e apps de mensagem. A conversão roda no seu aparelho: nada é enviado.'
what: 'seu GIF'
howTo: 'converter um GIF para MP4'
steps:
  - 'Clique em <strong>Escolher arquivos</strong> ou solte um ou mais GIFs animados no quadro.'
  - 'Clique em <strong>Converter</strong>. Não há nada para configurar: o vídeo mantém o tamanho e a velocidade do GIF.'
  - 'Cada MP4 é baixado quando fica pronto; para vários GIFs, use <strong>Baixar tudo (ZIP)</strong>.'
limits:
  - 'GIFs de até 200 MB cada. No primeiro uso, o motor de conversão (cerca de 31 MB) é baixado e depois fica no cache do navegador.'
  - 'O MP4 não suporta transparência. As áreas transparentes do GIF viram um fundo sólido.'
  - 'Um MP4 toca uma vez por padrão. Para repeti-lo num site, use o atributo <code>loop</code> do vídeo (veja abaixo); a maioria dos apps sociais repete vídeos curtos automaticamente.'
  - 'Largura e altura são arredondadas para um número par de pixels, exigência do formato H.264; no máximo um pixel é cortado.'
faq:
  - q: 'Por que converter um GIF para MP4?'
    a: 'O GIF é um formato dos anos 1980, limitado a 256 cores por quadro e muito ineficiente para animação. A mesma animação em MP4 H.264 costuma ficar várias vezes menor, tem aparência melhor e é aceita por apps que recusam GIF, como o Instagram.'
  - q: 'O MP4 vai ficar igual ao GIF?'
    a: 'Sim. O tamanho e o tempo são mantidos e todos os quadros são convertidos. As cores costumam ficar iguais ou melhores, já que o limite de 256 cores do GIF deixa de valer.'
  - q: 'O MP4 tem som?'
    a: 'Não: GIFs não têm áudio, então o MP4 é mudo. É isso também que permite que os navegadores o reproduzam automaticamente em páginas da web.'
  - q: 'Posso converter vários GIFs de uma vez?'
    a: 'Sim. Solte vários arquivos; eles são processados um após o outro e você pode salvar todos num único ZIP.'
  - q: 'Meus GIFs são enviados para algum servidor?'
    a: 'Não. O FFmpeg roda dentro da aba do navegador, então seus arquivos não saem do seu aparelho.'
---

## Por que o GIF é o formato errado para animação

O formato GIF é de 1987. Ele guarda cada quadro como uma imagem de paleta com no máximo 256 cores, comprime os quadros de forma independente e não tem noção do movimento entre eles. O resultado são arquivos pesados, com faixas de cor visíveis: poucos segundos de animação podem facilmente pesar vários megabytes.

O MP4 com vídeo H.264 foi pensado para imagens em movimento: ele guarda só o que muda entre os quadros e suporta milhões de cores. Por isso o GIPHY, o X (Twitter) e a maioria dos apps de mensagem convertem em silêncio os GIFs que você envia em vídeos MP4.

## Onde o MP4 funciona melhor que o GIF

- **Instagram** não aceita GIFs em posts, Stories ou Reels; um MP4 passa direto.
- **Sites e blogs:** trocar GIFs por MP4 é uma das recomendações clássicas do Google PageSpeed Insights, porque páginas mais leves carregam mais rápido.
- **Apresentações:** PowerPoint, Keynote e Google Apresentações reproduzem MP4 sem engasgos, enquanto GIFs grandes podem travar.
- **Anexos de e-mail e de chat:** um arquivo menor é enviado mais rápido e cabe nos limites de tamanho.

## Repetindo o vídeo numa página da web

Para fazer um MP4 se comportar exatamente como um GIF no seu site (reprodução automática, repetição, sem controles), use:

```html
<video src="animation.mp4" autoplay loop muted playsinline></video>
```

`muted` e `playsinline` são necessários para que os navegadores (principalmente no iPhone) iniciem o vídeo automaticamente.

## GIFs transparentes

O vídeo MP4 não tem canal de transparência. Se o seu GIF tem fundo transparente, essa área vira uma cor sólida no MP4. Para uma animação que precisa continuar transparente numa página da web, mantenha o GIF ou peça ao designer um WebP animado ou um WebM com canal alfa.

## Privado por princípio

A conversão usa o FFmpeg compilado em WebAssembly e roda inteiramente no seu navegador. Seus GIFs são lidos do seu disco e os MP4 são gravados na sua pasta de downloads; nada é enviado a um servidor.

## Ferramentas relacionadas

- Quer o caminho inverso? [Vídeo para GIF](/pt/video-para-gif) transforma um clipe em GIF animado.
- Precisa de um vídeo menor? [Comprimir vídeo](/pt/comprimir-video) reduz o tamanho de qualquer MP4.
