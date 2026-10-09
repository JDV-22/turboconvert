---
name: 'PNG para ICO'
title: 'Converter PNG para ICO: gerador de favicon grátis'
description: 'Converta PNG, JPG, WebP ou SVG em um arquivo ICO com vários tamanhos, de 16 a 256 px, para o favicon do site ou ícones do Windows. Grátis e sem upload.'
h1: 'Converter PNG para ICO'
lead: 'Crie um arquivo .ico de verdade, com vários tamanhos, a partir de um PNG, JPG, WebP ou SVG, para o favicon do seu site ou um ícone do Windows. Ele é gerado no navegador: seu logotipo nunca é enviado.'
what: 'sua imagem'
howTo: 'converter PNG para ICO'
steps:
  - 'Clique em <strong>Escolher arquivo</strong> ou solte seu logotipo: PNG, JPG, WebP ou SVG. Uma imagem quadrada com pelo menos 256 × 256 px funciona melhor.'
  - 'Clique em <strong>Converter</strong>. A ferramenta monta um único .ico com vários tamanhos, de 16 × 16 até 256 × 256 pixels.'
  - 'O .ico é baixado automaticamente. Renomeie-o para <code>favicon.ico</code> se for usá-lo num site.'
limits:
  - 'Uma imagem por vez, de até 20 MB.'
  - 'Comece com uma imagem quadrada. Um logotipo retangular não preenche bem o ícone; recorte-o em formato quadrado antes, num editor de imagens.'
  - 'Detalhes finos e textos pequenos somem em 16 × 16 px. Uma versão simplificada do logotipo (uma letra ou um símbolo) fica mais legível na aba do navegador.'
faq:
  - q: 'O que é um arquivo ICO?'
    a: 'ICO é o formato de ícone usado pelo Windows e pelos navegadores para favicons. Ao contrário de um PNG, um único arquivo .ico pode conter vários tamanhos do mesmo ícone, e cada lugar em que ele aparece usa o mais nítido.'
  - q: 'Quais tamanhos vêm dentro do ICO?'
    a: 'Vários tamanhos padrão de ícone, de 16 × 16 até 256 × 256 pixels: o suficiente para abas do navegador, favoritos, a barra de tarefas do Windows e atalhos na área de trabalho.'
  - q: 'Como colocar um favicon no meu site?'
    a: 'Envie o <code>favicon.ico</code> para a raiz do site e adicione <code>&lt;link rel="icon" href="/favicon.ico" sizes="any"&gt;</code> ao &lt;head&gt; das páginas. Os navegadores também procuram /favicon.ico automaticamente.'
  - q: 'O ICO mantém a transparência?'
    a: 'Sim. As áreas transparentes de um PNG, WebP ou SVG continuam transparentes, então o ícone fica bem nos temas claro e escuro do navegador.'
  - q: 'Posso usar um JPG para fazer um favicon?'
    a: 'Pode, mas o JPG não tem transparência, então o ícone terá um fundo sólido. Para um resultado limpo, use um PNG ou SVG com fundo transparente.'
  - q: 'Meu logotipo é enviado para algum servidor?'
    a: 'Não. O ícone é gerado pelo navegador, no seu aparelho.'
---

## Por que um ICO com vários tamanhos?

O favicon aparece em vários lugares e em tamanhos diferentes: 16 px na aba do navegador, 32 px nos favoritos e na barra de tarefas do Windows, 48 px ou mais em atalhos e sites fixados. Um único PNG pequeno fica borrado quando é ampliado e perde detalhes quando é reduzido. O arquivo .ico resolve isso reunindo vários tamanhos já prontos num só arquivo, e o navegador ou o sistema escolhe o melhor.

## Preparando a imagem de origem

- **Quadrada.** Ícones são quadrados; recorte o logotipo na proporção 1:1 antes de converter.
- **Grande o bastante.** 256 × 256 px ou mais, para que o maior tamanho dentro do ICO fique nítido. Um SVG é ideal, porque é renderizado com perfeição em qualquer tamanho.
- **Fundo transparente.** Use um PNG ou SVG com transparência para o ícone combinar com os temas claro e escuro do navegador.
- **Simples.** Em 16 px, um logotipo completo com slogan fica ilegível. Use o símbolo ou a primeira letra da sua marca.

Se o seu logotipo é um SVG e você também precisa de versões em PNG, exporte-as com [SVG para PNG](/pt/svg-para-png). Se a imagem de origem for muito grande, dá para reduzi-la antes com [Redimensionar imagem](/pt/redimensionar-imagem).

## Usando o seu favicon

1. Renomeie o arquivo baixado para `favicon.ico`.
2. Envie-o para a pasta raiz do site (para que fique disponível em `seusite.com.br/favicon.ico`).
3. Adicione esta linha dentro do `<head>` das páginas:

```html
<link rel="icon" href="/favicon.ico" sizes="any">
```

Criadores de sites como WordPress, Shopify, Squarespace e Wix têm uma opção de “Ícone do site” ou “Favicon” em que você pode enviar o arquivo. Os navegadores guardam favicons em cache por muito tempo: se o ícone novo não aparecer, abra o site numa janela anônima.

## Problemas comuns

- **O ícone aparece borrado na aba.** A imagem de origem era pequena ou detalhada demais. Use uma imagem maior e mais simples, de preferência um SVG.
- **O ícone tem um quadrado branco ou preto em volta.** A imagem de origem não tinha transparência (muitas vezes um JPG). Use um PNG com fundo transparente.
- **O ícone antigo continua aparecendo.** Limpe o cache ou teste numa janela anônima; os navegadores guardam favicons por bastante tempo.

## Ícones do Windows

O mesmo arquivo .ico funciona no Windows: clique com o botão direito num atalho ou pasta, escolha *Propriedades* → *Personalizar* ou *Alterar Ícone* e procure o seu arquivo.

## Privado e grátis

Sem conta, sem marca d’água e sem upload: o ícone é gerado direto no navegador a partir da sua imagem, então o logotipo de uma marca ainda não lançada fica no seu computador.
