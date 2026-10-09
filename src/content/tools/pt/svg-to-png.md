---
name: 'SVG para PNG'
title: 'Converter SVG para PNG em alta resolução, grátis'
description: 'Converta SVG para PNG em escala 1×, 2× ou 4× e tenha imagens nítidas em alta resolução, com fundo transparente. Em lote, grátis, no navegador e sem upload.'
h1: 'Converter SVG para PNG'
lead: 'Transforme arquivos vetoriais SVG em imagens PNG nítidas, na resolução de que você precisa e com a transparência mantida. A conversão acontece no navegador, sem upload.'
what: 'seus arquivos SVG'
howTo: 'converter SVG para PNG'
steps:
  - 'Clique em <strong>Escolher arquivos</strong> ou arraste um ou mais arquivos .svg para o quadro.'
  - 'Escolha a <strong>Escala</strong>: 1× usa o tamanho definido no SVG, 2× dobra esse tamanho (o padrão, nítido em telas de alta densidade) e 4× gera uma imagem grande, pronta para impressão.'
  - 'Clique em <strong>Converter</strong> e baixe cada PNG ou todos com <strong>Baixar tudo (ZIP)</strong>.'
limits:
  - 'Arquivos SVG de até 20 MB cada.'
  - 'Fontes usadas pelo SVG mas não incorporadas a ele são trocadas por uma fonte parecida disponível no navegador. Para um resultado idêntico, converta os textos em curvas no seu programa de design.'
  - 'Imagens ou folhas de estilo externas vinculadas ao SVG (por URL) não são carregadas. Imagens incorporadas funcionam normalmente.'
  - 'Animações e scripts interativos não são renderizados: você recebe uma imagem estática.'
faq:
  - q: 'Como converter SVG para PNG em alta resolução?'
    a: 'Escolha a escala 4×. Um ícone definido com 256 × 256 vira um PNG de 1024 × 1024, desenhado a partir dos vetores e não ampliado, então fica perfeitamente nítido.'
  - q: 'O fundo transparente é mantido?'
    a: 'Sim. As áreas sem preenchimento no SVG continuam transparentes no PNG.'
  - q: 'Por que o texto do meu PNG ficou diferente?'
    a: 'O SVG usa uma fonte que não está incorporada no arquivo nem disponível no navegador, então uma fonte substituta é usada. Converta o texto em curvas antes de exportar o SVG.'
  - q: 'Qual vai ser o tamanho do PNG?'
    a: 'A largura e a altura do próprio SVG multiplicadas pela escala escolhida. Se o SVG não define largura e altura, o tamanho base vem do viewBox ou de um padrão do navegador; defina dimensões explícitas no seu programa de design para um resultado previsível.'
  - q: 'Meus arquivos são enviados para algum servidor?'
    a: 'Não. O navegador renderiza o SVG e salva o PNG no seu aparelho.'
---

## Por que converter SVG para PNG?

O SVG é um formato vetorial: ele descreve as formas matematicamente, por isso fica nítido em qualquer tamanho e é ideal para logotipos, ícones e ilustrações na web. Só que muitos lugares não o aceitam: redes sociais, assinaturas de e-mail, documentos do Office, apps de mensagem, algumas gráficas e marketplaces. O PNG é a alternativa universal que mantém as duas coisas que importam em gráficos: **bordas nítidas** e **transparência**.

## Escolhendo a escala

Como um SVG não tem tamanho fixo em pixels, você decide a resolução na hora de exportar:

| Escala | Exemplo (SVG definido com 200 × 100) | Uso |
|---|---|---|
| 1× | 200 × 100 px | Tamanho exato, arquivos pequenos |
| 2× | 400 × 200 px | Sites e apps em telas de alta densidade (Retina) |
| 4× | 800 × 400 px | Apresentações, impressão, telas grandes |

Cada pixel do PNG é desenhado a partir dos vetores, então uma exportação em 4× é realmente mais nítida do que ampliar depois um PNG gerado em 1×.

## Para um resultado idêntico ao original

SVGs exportados do Illustrator, Figma, Inkscape ou de bibliotecas de ícones costumam converter perfeitamente. Quando algo fica diferente, quase sempre é um destes casos:

- **Fontes não incorporadas**: converta o texto em curvas no programa de design antes de exportar.
- **Imagens vinculadas**: incorpore as imagens no SVG em vez de vinculá-las por URL.
- **CSS da página web**: um ícone copiado de um site pode depender da folha de estilo do site para ter cor; defina o preenchimento (fill) direto no SVG.

## Problemas comuns

- **O PNG saiu em branco ou incompleto.** O SVG pode depender de arquivos externos ou de estilos de uma página web. Incorpore tudo no SVG e tente de novo.
- **O PNG ficou menor do que o esperado.** O SVG define um tamanho pequeno; escolha a escala 4× ou defina dimensões maiores no seu programa de design.

## Ferramentas relacionadas

- Vai criar o ícone de um site? O [PNG para ICO](/pt/png-para-ico) gera um favicon com vários tamanhos direto de um SVG ou PNG.
- Precisa de um JPG com fundo branco? Converta o PNG com [PNG para JPG](/pt/png-para-jpg).
- O PNG ficou pesado para a web? O [PNG para WebP](/pt/png-para-webp) mantém a transparência com uma fração do tamanho.

Tudo é renderizado localmente pelo navegador, então logotipos ainda não lançados e artes de clientes não saem do seu computador.
