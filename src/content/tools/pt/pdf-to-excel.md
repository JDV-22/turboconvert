---
name: 'PDF para Excel'
title: 'Converter PDF em Excel — extrair tabelas para XLSX grátis'
description: 'Converta PDF em Excel grátis. Extraia tabelas de PDF para planilhas XLSX editáveis, com números reconhecidos como números. No navegador e sem upload.'
h1: 'Converter PDF em Excel'
lead: 'Tire as tabelas de um PDF para uma planilha do Excel em que você pode ordenar, filtrar e fazer contas. A conversão roda no seu aparelho — seus extratos e relatórios nunca são enviados.'
what: 'seu PDF'
howTo: 'converter PDF em Excel'
steps:
  - 'Clique em <strong>Escolher arquivos</strong> ou arraste um ou mais PDFs para a caixa acima.'
  - 'Clique em <strong>Converter</strong>. As tabelas de cada página são detectadas e organizadas em linhas e colunas.'
  - 'O arquivo .xlsx é baixado automaticamente, com uma aba por página do PDF. Vários arquivos podem ser salvos com <strong>Baixar tudo (ZIP)</strong>.'
  - 'Abra no Excel, Google Planilhas, Numbers ou LibreOffice Calc e confira os cabeçalhos.'
limits:
  - 'Funciona com PDFs digitais (gerados por programas). PDFs digitalizados contêm imagens, e não texto, e não podem ser convertidos em tabelas.'
  - 'Tabelas complexas, com células de cabeçalho mescladas, cabeçalhos em vários níveis ou tabelas que continuam por várias páginas, podem precisar de ajustes no Excel.'
  - 'PDFs protegidos por senha precisam ser desbloqueados antes com <a href="/pt/desbloquear-pdf">Desbloquear PDF</a>. Máximo de 100 MB por PDF.'
faq:
  - q: 'Como converter PDF em Excel de graça?'
    a: 'Solte o PDF aqui e clique em Converter. Você recebe um arquivo .xlsx com as tabelas de cada página — sem cadastro, sem marca d’água e sem limite diário.'
  - q: 'Os números funcionam em fórmulas?'
    a: 'Sim. Valores que parecem números são salvos como números, então você já pode somar, ordenar e fazer gráficos. Confira colunas com formatos diferentes, como valores com código de moeda.'
  - q: 'Dá para converter o PDF do extrato bancário em Excel?'
    a: 'Sim, se for um extrato digital baixado do internet banking — esse é um dos usos mais comuns. O extrato fica no seu navegador e nunca é enviado.'
  - q: 'Por que cada página fica numa aba separada?'
    a: 'Manter as páginas separadas facilita conferir o resultado com o original. Para juntar tudo, copie as linhas de cada aba para uma aba só no Excel.'
  - q: 'Funciona com PDF escaneado?'
    a: 'Não. Uma digitalização não tem camada de texto para ler. Você pode extrair o texto com o <a href="/pt/ocr-pdf">OCR de PDF</a>, mas a estrutura da tabela vai ter de ser refeita à mão.'
---

## Por que converter tabelas de PDF em Excel?

O PDF é feito para ler os dados, não para usá-los. Redigitar números é lento e cheio de erros; copiar e colar de um PDF costuma jogar a tabela inteira numa única coluna. Converter para Excel entrega células de verdade:

- **Extratos bancários e faturas de cartão** — categorizar gastos, montar um orçamento, organizar a declaração do Imposto de Renda.
- **Orçamentos e listas de preços** — importar preços de fornecedores ou conferir pedidos.
- **Relatórios financeiros** — reaproveitar números publicados na sua própria análise.
- **Relatórios exportados** de sistemas que só oferecem PDF.

## O que converte bem

| Conteúdo do PDF | Resultado |
|---|---|
| Tabelas limpas, com uma linha de cabeçalho | Linhas e colunas como no PDF |
| Extratos e faturas gerados por bancos ou sistemas contábeis | Normalmente bom — confira datas e valores |
| Cabeçalhos mesclados ou em vários níveis | Os dados estão lá; os cabeçalhos podem precisar ser reorganizados |
| Páginas digitalizadas | Não aceitas — não há texto para ler |

## Dicas para uma planilha limpa

- **Converta só as páginas com tabelas.** Separe-as com o [Dividir PDF](/pt/dividir-pdf) para evitar abas cheias do texto da capa.
- **Confira os formatos de número e data.** No Brasil, a vírgula é o separador decimal e as datas seguem DD/MM/AAAA. Se o PDF vier de um sistema em inglês (ponto decimal, data no formato americano), ajuste as configurações regionais do Excel antes de fazer contas.
- **Precisa do texto, e não da tabela?** O [PDF para Word](/pt/pdf-para-word) é melhor para relatórios com muitos parágrafos.
- **Caminho inverso?** Transforme uma planilha em um documento fácil de compartilhar com o [Excel para PDF](/pt/excel-para-pdf).

Documentos financeiros estão entre os arquivos mais sensíveis que você tem. Com o TurboConvert, a conversão acontece no seu navegador — o PDF nunca é enviado a um servidor.

## Problemas comuns e soluções

**Tudo foi parar numa coluna só.** Provavelmente o PDF monta a “tabela” com espaços, e não com colunas de verdade, ou a página é uma digitalização. Veja se dá para selecionar palavras individuais no PDF; se não der, é uma imagem e não pode ser convertida em células.

**Os números ficam alinhados à esquerda e não somam.** O Excel está tratando os valores como texto — muitas vezes por causa do símbolo R$, de um sinal de menos no fim ou de um separador de milhar de outro padrão. Use *Dados › Texto para Colunas* ou localize e substitua o símbolo, e o Excel reconhece os números.

**As datas estão erradas (dia e mês trocados).** O PDF e a planilha usam convenções de data diferentes (03/04 pode ser 3 de abril ou 4 de março). Defina o formato de data da coluna no Excel de acordo com a origem.

**A tabela continua por várias páginas.** Cada página vira uma aba. Copie as linhas das abas seguintes para baixo da primeira para reconstruir a tabela inteira e depois apague os cabeçalhos repetidos.

**Algumas células de cabeçalho ficaram deslocadas.** Cabeçalhos que ocupam várias colunas no PDF são difíceis de encaixar numa grade. Mova-os à mão; as linhas de dados embaixo costumam estar alinhadas corretamente.
