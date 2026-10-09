---
name: 'Juntar PDF'
title: 'Juntar PDF grátis — unir arquivos PDF sem upload | TurboConvert'
description: 'Junte vários PDFs em um só arquivo, na ordem que você quiser. Grátis e direto no navegador: sem upload, sem cadastro e sem marca d’água.'
h1: 'Juntar arquivos PDF'
lead: 'Una vários PDFs em um único documento, na ordem que você escolher. Tudo acontece no seu navegador: seus arquivos nunca são enviados.'
what: 'seus PDFs'
howTo: 'juntar arquivos PDF'
steps:
  - 'Clique em <strong>Escolher arquivos</strong> ou arraste dois ou mais PDFs para a caixa acima (até 200 MB por arquivo). Dá para incluir outros depois com <strong>Adicionar arquivos</strong>.'
  - 'Coloque os arquivos na ordem certa com as setas <strong>Subir</strong> e <strong>Descer</strong>: o primeiro da lista abre o PDF final.'
  - 'Clique em <strong>Converter</strong>. O PDF unido é baixado automaticamente com o nome <code>merged.pdf</code>.'
limits:
  - 'PDFs protegidos por senha precisam ser desbloqueados antes com <a href="/pt/desbloquear-pdf">Desbloquear PDF</a>.'
  - 'Os marcadores (o sumário lateral) dos arquivos originais não são mantidos; páginas, texto, imagens e links dentro das páginas ficam exatamente como estavam.'
  - 'Junções muito grandes (centenas de MB) dependem da memória do aparelho. No celular, prefira ficar abaixo de uns 200 MB no total.'
faq:
  - q: 'Como juntar vários PDFs em um só?'
    a: 'Solte os PDFs na caixa acima, ajuste a ordem com as setas e clique em Converter. Você recebe um único arquivo com todas as páginas, na ordem escolhida.'
  - q: 'É grátis mesmo e sem cadastro?'
    a: 'Sim. Não tem conta, não tem limite diário de arquivos e nenhuma marca d’água é adicionada. A ferramenta roda no seu navegador, então não existe servidor processando seus documentos.'
  - q: 'Juntar PDFs diminui a qualidade?'
    a: 'Não. As páginas são copiadas como estão: o texto continua selecionável e as imagens não são recomprimidas. Se quiser um arquivo mais leve, passe o resultado depois pelo <a href="/pt/comprimir-pdf">Comprimir PDF</a>.'
  - q: 'Dá para juntar só algumas páginas de um PDF?'
    a: 'Extraia antes as páginas que interessam com <a href="/pt/dividir-pdf">Dividir PDF</a> e depois junte os trechos. Para reordenar ou excluir páginas depois da junção, use <a href="/pt/organizar-pdf">Organizar PDF</a>.'
  - q: 'Posso juntar PDF com fotos ou documentos em JPG?'
    a: 'Converta primeiro as imagens em PDF com <a href="/pt/jpg-para-pdf">JPG para PDF</a> e depois junte esse PDF com os outros documentos.'
  - q: 'Funciona no iPhone e no Android?'
    a: 'Sim, no Safari, Chrome, Firefox ou Edge. Escolha os PDFs no app Arquivos, no Google Drive ou nos downloads: o arquivo unido fica salvo no seu celular.'
---

## Quando vale a pena juntar PDFs?

Muitos processos pedem **um único arquivo** quando você tem vários documentos separados. Alguns casos bem comuns no dia a dia:

- **Aluguel ou financiamento**: RG ou CNH, comprovante de residência, holerites dos últimos meses e declaração do Imposto de Renda, muitas vezes enviados como um só anexo.
- **Processo seletivo, concurso ou matrícula**: currículo, diplomas, histórico escolar e certificados reunidos em um mesmo PDF.
- **Reembolso e prestação de contas**: todas as notas fiscais e recibos do mês em um documento só, mais fácil de enviar e arquivar.
- **Digitalização página por página**: quando o scanner ou o app do celular gera um PDF por página, juntar reconstrói o documento completo.

## O que é mantido na junção

O TurboConvert copia cada página, sem alterações, para um novo PDF, usando a biblioteca de código aberto pdf-lib:

| Elemento | Depois de juntar |
|---|---|
| Texto | Continua selecionável e pesquisável |
| Imagens e digitalizações | Resolução original, sem recompressão |
| Tamanho e orientação | Mantidos: dá para misturar A4, Carta e páginas na horizontal |
| Links dentro das páginas | Continuam funcionando |
| Marcadores do sumário | Não são mantidos |

A junção não adiciona marca d’água nem altera o conteúdo das páginas: o PDF final é simplesmente a sequência dos seus documentos.

## Como preparar os arquivos

- **Nomeie os arquivos em ordem** antes de selecionar, por exemplo `01-rg.pdf`, `02-holerites.pdf`, `03-imposto-de-renda.pdf`: eles aparecem na ordem certa e você não precisa mexer em nada.
- **Uma página de cabeça para baixo?** Depois de juntar, corrija com [Girar PDF](/pt/girar-pdf) ou abra o [Organizar PDF](/pt/organizar-pdf) para girar, mover ou excluir páginas específicas.
- **Arquivo final pesado demais** para o e-mail ou para um portal? Junte primeiro e comprima só uma vez o resultado com [Comprimir PDF](/pt/comprimir-pdf). É mais eficiente do que comprimir cada arquivo separadamente.
- **Precisa de numeração contínua** no documento todo? Acrescente depois com [Numerar páginas](/pt/numerar-paginas-pdf).

## Juntar PDFs sem entregar seus documentos a um site

A maioria dos sites para juntar PDF on-line envia seus arquivos para servidores, faz a junção por lá e pede que você confie que tudo será apagado. O TurboConvert funciona de outro jeito: o código que junta os PDFs é carregado no seu navegador e roda no seu aparelho. Seus documentos não são transmitidos a ninguém — você pode conferir isso na aba *Rede* (Network) das ferramentas de desenvolvedor.

Para um cadastro de aluguel ou um processo seletivo, que reúne justamente os seus documentos mais pessoais, essa diferença conta.

## Problemas comuns e soluções

| O que aparece | Causa | Solução |
|---|---|---|
| “Adicione pelo menos 2 arquivos.” | Só um PDF na lista | Inclua outro PDF com Adicionar arquivos |
| “Este PDF está protegido por senha” | Um dos arquivos está criptografado | Remova a proteção com [Desbloquear PDF](/pt/desbloquear-pdf) e tente de novo |
| O arquivo unido ficou pesado | Digitalizações ou fotos em alta resolução | Comprima o resultado com Comprimir PDF |
| As páginas ficaram fora de ordem | Ordem da lista na hora de juntar | Reordene com as setas ou corrija depois com Organizar PDF |

## Quantos arquivos dá para juntar?

Não há número máximo de arquivos. O único limite prático é a memória do seu aparelho: um computador junta centenas de páginas sem dificuldade, e um celular recente lida bem com pastas de algumas dezenas de MB. Cada arquivo pode ter até 200 MB.
