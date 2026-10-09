---
name: 'PDF para texto'
title: 'PDF para texto — extrair texto de PDF em TXT grátis'
description: 'Extraia o texto de um PDF e salve como arquivo .txt simples. Extração rápida, em lote, no navegador — sem upload, sem cadastro e sem formatação para limpar.'
h1: 'Converter PDF em texto'
lead: 'Tire todo o texto de um PDF para um arquivo .txt simples, pronto para colar em qualquer lugar — um e-mail, um tradutor, um site ou um assistente de IA. A extração roda no seu aparelho; nada é enviado.'
what: 'seu PDF'
howTo: 'extrair o texto de um PDF'
steps:
  - 'Clique em <strong>Escolher arquivos</strong> ou arraste um ou mais PDFs para a caixa acima.'
  - 'Clique em <strong>Converter</strong>. O texto de todas as páginas é extraído.'
  - 'O arquivo .txt é baixado automaticamente. Com vários PDFs, baixe cada arquivo ou use <strong>Baixar tudo (ZIP)</strong>.'
limits:
  - 'Só o texto de verdade é extraído. PDFs digitalizados e fotos contêm imagens do texto — use o <a href="/pt/ocr-pdf">OCR de PDF</a> para reconhecê-lo.'
  - 'Texto simples não tem formatação — negrito, fontes, imagens e bordas de tabela são descartados. As tabelas viram linhas de texto separadas por espaços.'
  - 'Em páginas com várias colunas, a ordem de leitura nem sempre corresponde à ordem visual.'
  - 'PDFs protegidos por senha precisam ser desbloqueados antes com <a href="/pt/desbloquear-pdf">Desbloquear PDF</a>. Máximo de 200 MB por PDF.'
faq:
  - q: 'Como extrair o texto de um PDF?'
    a: 'Solte o PDF aqui e clique em Converter. Você recebe um arquivo .txt com todo o texto do documento, pronto para abrir em qualquer editor.'
  - q: 'Por que o arquivo de texto veio vazio?'
    a: 'Provavelmente o PDF é uma digitalização, ou seja, as páginas são imagens sem camada de texto. Passe-o pelo <a href="/pt/ocr-pdf">OCR de PDF</a> para reconhecer o texto.'
  - q: 'Uso PDF para texto ou PDF para Word?'
    a: 'Use PDF para texto quando só precisar das palavras — para copiar, pesquisar, traduzir ou usar em outra ferramenta. Use o <a href="/pt/pdf-para-word">PDF para Word</a> quando quiser manter títulos, formatação e imagens e editar o documento.'
  - q: 'Dá para extrair o texto de vários PDFs de uma vez?'
    a: 'Sim. Solte vários PDFs; cada um gera o próprio arquivo .txt e você pode baixar todos juntos em um ZIP.'
  - q: 'Funciona com qualquer idioma?'
    a: 'Sim, desde que o PDF tenha uma camada de texto real. O arquivo é salvo em UTF-8, então acentos, cedilha e alfabetos não latinos são mantidos.'
---

## Por que extrair só o texto?

Copiar e colar do leitor de PDF é cansativo em documentos longos e muitas vezes quebra linhas, mistura cabeçalhos e rodapés ou pula páginas. Extrair o texto de uma vez gera um arquivo `.txt` limpo, que qualquer programa abre. Útil para:

- **Citar ou reaproveitar conteúdo** em um e-mail, relatório ou site.
- **Tradução** — colar num tradutor sem o layout atrapalhando.
- **Pesquisa e análise** — encontrar termos em vários documentos, contar palavras, processar o texto com scripts.
- **Assistentes de IA e ferramentas de resumo** — muitos aceitam texto simples de forma mais confiável do que PDFs.
- **Acessibilidade** — texto simples funciona com leitores de tela e e-readers básicos.

## Meu PDF é digital ou digitalizado?

Abra o arquivo e tente selecionar uma única palavra com o cursor:

| O que acontece | Tipo de PDF | O que usar |
|---|---|---|
| Você consegue destacar palavras e linhas | PDF digital, com camada de texto | PDF para texto (esta ferramenta) |
| A página inteira é selecionada como um bloco, ou nada é selecionado | PDF digitalizado / de imagem | [OCR de PDF](/pt/ocr-pdf) |

## Dicas

- **Precisa das tabelas como tabelas?** O texto simples achata tudo. O [PDF para Excel](/pt/pdf-para-excel) mantém linhas e colunas.
- **Palavras hifenizadas no fim da linha** saem como aparecem no PDF; uma busca e substituição de “-” seguido de quebra de linha deixa tudo arrumado.
- **Só precisa de parte de um PDF longo?** Extraia antes as páginas relevantes com o [Dividir PDF](/pt/dividir-pdf).

Seu PDF é lido dentro do navegador e nunca é enviado, então extrair texto de contratos ou relatórios internos é seguro.

## Problemas comuns e soluções

**O .txt veio vazio ou quase vazio.** O PDF não tem camada de texto — típico de digitalizações, fotos salvas como PDF e alguns faxes. O OCR é a única forma de tirar o texto.

**Símbolos estranhos no lugar das letras.** Alguns PDFs usam fontes com uma codificação interna fora do padrão, e o texto não pode ser decodificado corretamente, mesmo parecendo normal na tela. Nesse caso, o OCR da página costuma gerar um texto legível.

**Palavras ou linhas aparecem numa ordem estranha.** O PDF guarda o texto na ordem em que foi desenhado, e em layouts complexos — colunas, barras laterais, legendas — essa nem sempre é a ordem de leitura. Os parágrafos estão todos lá, mas podem precisar ser reordenados.

**Cabeçalhos e rodapés se repetem em todas as páginas.** Cabeçalhos, números de página e rodapés são texto de verdade no PDF, então também são extraídos. Uma busca e substituição no editor de texto remove tudo rapidinho.

**Só algumas páginas importam.** Relatórios longos geram arquivos de texto longos. Separe antes as páginas necessárias com o Dividir PDF e converta só essas.
