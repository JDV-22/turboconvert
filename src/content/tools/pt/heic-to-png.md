---
name: 'HEIC para PNG'
title: 'Converter HEIC para PNG grátis, sem perdas e sem upload'
description: 'Converta fotos HEIC do iPhone em arquivos PNG sem perdas, uma ou várias de cada vez. Ideal para edição e design. Grátis, no seu navegador e sem upload.'
h1: 'Converter HEIC para PNG'
lead: 'Transforme fotos HEIC do iPhone em imagens PNG sem perdas para editar, criar artes e montar documentos. A conversão acontece no seu aparelho: suas fotos nunca são enviadas.'
what: 'suas fotos HEIC'
howTo: 'converter HEIC para PNG'
steps:
  - 'Clique em <strong>Escolher arquivos</strong> ou arraste suas fotos .heic ou .heif para o quadro.'
  - 'Clique em <strong>Converter</strong>. Não há ajuste de qualidade: o PNG guarda cada pixel exatamente como foi decodificado.'
  - 'Baixe cada PNG ou todos de uma vez com <strong>Baixar tudo (ZIP)</strong>.'
limits:
  - 'Arquivos PNG são grandes: uma foto de 12 megapixels costuma pesar de 15 a 25 MB em PNG. Para compartilhar, o <a href="/pt/heic-para-jpg">HEIC para JPG</a> é mais adequado.'
  - 'Live Photos são convertidas como imagem estática; dados de profundidade e o brilho HDR não são mantidos.'
  - 'Os metadados (data da foto, câmera, localização GPS) não são copiados para o PNG.'
  - 'Fotos de até 100 MB cada. A primeira conversão carrega um decodificador HEIC (cerca de 1,5 MB), que depois fica em cache.'
faq:
  - q: 'É melhor converter HEIC para PNG ou para JPG?'
    a: 'Escolha JPG para compartilhar, mandar por e-mail, imprimir e enviar em formulários: os arquivos são bem menores. Escolha PNG quando você ainda vai editar a imagem (retoque, design, recortes) e não quer nenhuma compressão extra no caminho.'
  - q: 'A conversão de HEIC para PNG é sem perdas?'
    a: 'O PNG guarda a foto decodificada exatamente, sem perda adicional de compressão. Ele não recupera detalhes que a compressão do HEIC já tirou, mas nada mais se perde.'
  - q: 'Por que o PNG ficou tão maior que o HEIC?'
    a: 'O HEIC é um formato com perdas muito eficiente; o PNG é sem perdas e não foi pensado para fotografias. Um PNG dez vezes maior que o HEIC é normal.'
  - q: 'O PNG vem com fundo transparente?'
    a: 'Não. Fotos do iPhone não têm transparência, então o PNG é totalmente opaco. Para recortar uma pessoa ou objeto, abra o PNG num editor que remove fundos.'
  - q: 'Minhas fotos são enviadas para algum servidor?'
    a: 'Não. O arquivo HEIC é decodificado dentro do navegador com uma versão em WebAssembly da libheif, e o PNG é gravado no seu aparelho.'
---

## Quando o PNG é a escolha certa

Quase todo mundo que converte HEIC quer um JPG: é menor e aceito em todo lugar. O PNG faz sentido em algumas situações específicas:

- **Edição posterior.** Cada vez que um JPG é editado e salvo, ele perde um pouco de detalhe. Um PNG pode ser aberto, editado e salvo quantas vezes for preciso, sem perda acumulada.
- **Design e diagramação.** Designers costumam preferir uma cópia matriz sem perdas para usar no Figma, no Canva, no InDesign ou numa apresentação.
- **Prints de tela e fotos de documentos.** Textos e linhas finas ficam nítidos, sem os halos borrados que a compressão JPG pode criar em volta das letras.
- **Programas que exigem PNG.** Algumas ferramentas, plugins e fluxos científicos ou de arquivamento só aceitam PNG.

## HEIC, PNG e JPG comparados

| | HEIC | PNG | JPG |
|---|---|---|---|
| Compressão | Com perdas, muito eficiente | Sem perdas | Com perdas |
| Foto de 12 MP | 1–2 MB | 15–25 MB | 2–4 MB |
| Abre em qualquer lugar | Não | Sim | Sim |
| Ideal para | Guardar fotos no iPhone | Edição, design | Compartilhar, imprimir |

Se o tamanho virar problema depois da edição, converta o PNG final com [PNG para JPG](/pt/png-para-jpg) ou [PNG para WebP](/pt/png-para-webp), ou reduza o peso com [Comprimir imagem](/pt/comprimir-imagem).

## Convertido no seu aparelho

Fotos do celular são pessoais: fotos de família, documentos fotografados com a câmera, prints de conversas. Em vez de enviá-las, o TurboConvert decodifica o arquivo HEIC no navegador com a libheif, um decodificador de código aberto compilado em WebAssembly, e salva o PNG direto na sua pasta de downloads. Depois que a página carrega, ela continua funcionando mesmo offline.

## Problemas comuns

- **O PNG é grande demais para mandar por e-mail.** É da natureza das fotos em PNG sem perdas. Converta para JPG para compartilhar, ou diminua as dimensões com [Redimensionar imagem](/pt/redimensionar-imagem).
- **A foto parece menos viva do que no iPhone.** Os iPhones recentes exibem as fotos HDR com brilho extra; o PNG contém a versão padrão da imagem.

## Dicas

- **No iPhone:** abra esta página no Safari, toque em **Escolher arquivos**, selecione as fotos da biblioteca e encontre os PNG no app Arquivos, na pasta Downloads.
- **No Windows:** você não precisa das extensões HEIF ou HEVC da Microsoft Store; o próprio navegador faz a decodificação.
- **Lotes grandes:** como os PNG são pesados, no celular converta em grupos menores para não faltar memória.
