---
layout: ../../layouts/ProsePage.astro
title: Sobre o TurboConvert — o conversor que não envia seus arquivos
description: Quem faz o TurboConvert, como as conversões rodam no seu navegador sem enviar seus arquivos, quais motores de código aberto usamos e como o site se mantém.
h1: Sobre o TurboConvert
lead: Um conversor de arquivos grátis construído sobre uma ideia simples — seus arquivos nunca deveriam precisar sair do seu aparelho.
locale: pt
page: about
updated: 2026-10-09
---

## Por que criamos o TurboConvert

Converter um PDF ou uma foto não deveria significar entregar uma cópia dele ao servidor de um desconhecido. Mesmo assim, é assim que a maioria dos conversores on-line funciona: você faz o upload do arquivo, ele é processado em outro lugar e pedem que você confie que ele será apagado.

O TurboConvert é um projeto independente, criado na França, que faz o contrário. Quando você abre uma ferramenta, o programa de conversão é baixado para o seu navegador e roda no seu computador ou celular. Seus arquivos são lidos, convertidos e salvos localmente. Não existe etapa de upload — e é por isso também que as conversões começam na hora.

## Como funciona

Os navegadores atuais conseguem executar código compilado em velocidade próxima à de um programa instalado, graças ao **WebAssembly**. Usamos isso para rodar, direto na página, motores de código aberto já consagrados:

- **Ghostscript** comprime PDFs — o mesmo motor de muitas ferramentas profissionais de PDF.
- **FFmpeg** (via ffmpeg.wasm) converte, comprime e corta áudio e vídeo.
- **PDF.js** (Mozilla) exibe e lê as páginas de PDF; **pdf-lib** e **qpdf** editam, juntam, dividem e protegem esses arquivos.
- **libheif** decodifica as fotos HEIC do iPhone; **Tesseract** reconhece o texto de documentos escaneados (OCR).
- **docx**, **mammoth**, **docx-preview**, **ExcelJS**, **jsPDF** e **PptxGenJS** leem e geram documentos do Office.

Alguns desses motores são grandes (o FFmpeg tem cerca de 31 MB), então o primeiro uso de uma ferramenta de vídeo ou de OCR demora um pouco mais. Depois, o navegador guarda o motor no cache.

## Confira você mesmo

Abra as ferramentas de desenvolvedor do navegador (F12 no Windows, ⌥⌘I no Mac), selecione a aba **Rede** (*Network*) e faça uma conversão. Você vai ver a página e os arquivos do motor sendo carregados, mas nunca o seu arquivo sendo enviado. Dá até para desconectar da internet depois que a página carregar e continuar convertendo.

## Como o TurboConvert se mantém

As ferramentas são grátis, sem conta, sem limite diário e sem marca d’água. O site é mantido por publicidade (exibida apenas com o consentimento exigido por lei) e pode incluir recomendações de outros produtos, sempre identificadas. Nunca vendemos dados — e, como nunca recebemos os seus arquivos, não há nada sobre eles para vender.

## Transparência sobre os limites

Fazer tudo no seu aparelho tem suas contrapartidas. Arquivos muito grandes dependem da memória do aparelho, e algumas conversões (por exemplo, layouts complexos do Word ou PDFs escaneados) nem sempre ficam perfeitas. Cada página de ferramenta tem uma seção **Bom saber** com as limitações reais dela. Se algo não funcionar como descrito, [fale com a gente](/pt/contato) — lemos todas as mensagens.

## Software de código aberto

O TurboConvert é construído sobre o trabalho de muitos projetos de código aberto, usados sem modificações e sob suas respectivas licenças:

| Projeto | Licença | Código-fonte |
|---|---|---|
| Ghostscript (versão WebAssembly de @jspawn) | AGPL-3.0 | [github.com/jspawn/ghostscript-wasm](https://github.com/jspawn/ghostscript-wasm) · [ghostscript.com](https://ghostscript.com/) |
| FFmpeg / ffmpeg.wasm | LGPL/GPL · MIT | [ffmpeg.org](https://ffmpeg.org/) · [github.com/ffmpegwasm/ffmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm) |
| PDF.js | Apache-2.0 | [github.com/mozilla/pdf.js](https://github.com/mozilla/pdf.js) |
| pdf-lib | MIT | [github.com/Hopding/pdf-lib](https://github.com/Hopding/pdf-lib) |
| qpdf (qpdf-wasm) | Apache-2.0 · ISC | [github.com/qpdf/qpdf](https://github.com/qpdf/qpdf) |
| libheif (libheif-js) | LGPL-3.0 | [github.com/strukturag/libheif](https://github.com/strukturag/libheif) |
| Tesseract.js | Apache-2.0 | [github.com/naptha/tesseract.js](https://github.com/naptha/tesseract.js) |
| docx · mammoth · docx-preview | MIT · BSD-2 · Apache-2.0 | [docx](https://github.com/dolanmiu/docx) · [mammoth](https://github.com/mwilliamson/mammoth.js) · [docx-preview](https://github.com/VolodymyrBaydalka/docxjs) |
| ExcelJS · jsPDF · PptxGenJS · JSZip · fflate · UTIF | MIT | [exceljs](https://github.com/exceljs/exceljs) · [jsPDF](https://github.com/parallax/jsPDF) · [PptxGenJS](https://github.com/gitbrent/PptxGenJS) · [JSZip](https://github.com/Stuk/jszip) · [fflate](https://github.com/101arrowz/fflate) · [UTIF](https://github.com/photopea/UTIF.js) |
| Fonte Geist | SIL OFL 1.1 | [github.com/vercel/geist-font](https://github.com/vercel/geist-font) |

## Contato

Dúvidas, relatos de erro, parcerias ou imprensa: [hello@turboconvert.io](mailto:hello@turboconvert.io). Assuntos de privacidade e dados pessoais: [privacy@turboconvert.io](mailto:privacy@turboconvert.io).
