---
name: 'Comprimir PDF'
title: 'Comprimir PDF on-line — diminuir tamanho do PDF grátis'
description: 'Comprima PDF e diminua o tamanho do arquivo para e-mail e portais. Três níveis de compressão, motor Ghostscript, sem upload, sem cadastro e sem marca d’água.'
h1: 'Comprimir arquivos PDF'
lead: 'Deixe o seu PDF mais leve para caber no limite do e-mail e dos formulários de envio, sem perder a legibilidade. A compressão roda no seu aparelho com o Ghostscript — seus arquivos nunca são enviados.'
what: 'seu PDF'
howTo: 'comprimir um PDF'
steps:
  - 'Clique em <strong>Escolher arquivos</strong> ou arraste um ou mais PDFs para a caixa acima.'
  - 'Escolha o nível de <strong>Compressão</strong> — <em>Recomendada</em> serve para a maioria dos documentos.'
  - 'Clique em <strong>Converter</strong>. Na primeira vez, o navegador baixa o motor de compressão (≈ 16 MB); depois ele fica no cache.'
  - 'O PDF menor é baixado automaticamente e a economia de tamanho aparece na tela. Com vários arquivos, use <strong>Baixar tudo (ZIP)</strong>.'
limits:
  - 'O ganho depende do conteúdo do PDF. Digitalizações e arquivos cheios de imagens são os que mais diminuem; PDFs só de texto geralmente já são compactos e diminuem pouco.'
  - 'Se a compressão não deixar o arquivo menor, o TurboConvert mantém o seu original em vez de entregar um arquivo maior.'
  - 'PDFs protegidos por senha precisam ser desbloqueados antes com <a href="/pt/desbloquear-pdf">Desbloquear PDF</a>.'
  - 'Máximo de 200 MB por PDF. Arquivos grandes demoram mais no celular; para digitalizações pesadas, o computador é mais rápido.'
faq:
  - q: 'Como diminuir o tamanho de um PDF de graça?'
    a: 'Solte o PDF na caixa acima, mantenha o nível Recomendada e clique em Converter. A cópia comprimida é baixada na hora — sem conta, sem limite diário e sem marca d’água.'
  - q: 'Comprimir o PDF reduz a qualidade?'
    a: 'A compressão reduz principalmente a resolução das imagens dentro do PDF; textos e gráficos vetoriais continuam nítidos em qualquer nível. Use Leve se o documento for impresso, Recomendada para tela e e-mail, e Forte só quando o tamanho for o mais importante.'
  - q: 'Como deixar o PDF pequeno o bastante para enviar por e-mail?'
    a: 'O Gmail e muitos outros serviços limitam os anexos a algo entre 20 e 25 MB, e alguns servidores de empresas aceitam menos. Tente primeiro Recomendada; se ainda ficar grande, use Forte ou divida o arquivo em partes com <a href="/pt/dividir-pdf">Dividir PDF</a>.'
  - q: 'Por que meu PDF quase não diminuiu?'
    a: 'Um PDF que tem basicamente texto já é eficiente, então sobra pouco para tirar. A grande economia vem de páginas digitalizadas e fotos, que muitas vezes caem para menos da metade.'
  - q: 'Dá para comprimir um PDF para um tamanho exato, como 1 MB ou 200 KB?'
    a: 'Não é possível digitar um tamanho-alvo, mas dá para chegar perto escolhendo o nível. Comece com Recomendada e, se precisar, tente Forte. Em um arquivo teimoso, tirar páginas desnecessárias com <a href="/pt/organizar-pdf">Organizar PDF</a> também ajuda.'
  - q: 'Meus PDFs são enviados para algum lugar para serem comprimidos?'
    a: 'Não. O Ghostscript é compilado em WebAssembly e roda no seu navegador, então o PDF nunca sai do seu aparelho. Dá até para desconectar da internet depois que o motor carregar.'
---

## Por que alguns PDFs ficam tão pesados

O tamanho de um PDF vem quase todo do que está embutido nele:

- **Páginas digitalizadas.** Cada página escaneada é, na prática, uma foto da folha inteira. Um documento de 20 páginas digitalizado em cores a 300 ou 600 dpi chega fácil a 20–50 MB.
- **Fotos e capturas de tela.** Imagens coladas no Word ou no PowerPoint costumam ficar na resolução original da câmera, muito mais do que a tela precisa.
- **Fontes incorporadas.** Cada fonte usada é guardada no arquivo. Isso pesa em documentos curtos, mas raramente deixa um arquivo enorme.
- **Texto e desenhos vetoriais.** Ocupam pouquíssimo. Um relatório de 100 páginas só com texto normalmente fica bem abaixo de 1 MB.

Ou seja, comprimir um PDF é sobretudo uma questão de **imagens**: reduzir a resolução ao que você realmente precisa e guardá-las de forma mais eficiente. Por isso um contrato escaneado pode perder a maior parte do peso, enquanto um PDF só de texto quase não muda.

## Qual nível de compressão escolher?

O TurboConvert usa o Ghostscript, o mesmo motor de código aberto de muitas ferramentas profissionais de PDF, com três predefinições:

| Nível | Indicado para | Imagens | Resultado típico |
|---|---|---|---|
| **Forte — arquivo menor** | E-mail, portais com limite rígido de upload, cópias de arquivo | Reduzidas à resolução de tela | Arquivo menor possível; fotos perdem detalhes no zoom |
| **Recomendada — boa qualidade** | A maioria dos documentos, leitura na tela, compartilhamento | Reduzidas à resolução de e-book | Nítido em qualquer tela, boa redução |
| **Leve — melhor qualidade** | Documentos que vão ser impressos | Mantidas em resolução de impressão | Parece o original; economia menor |

Em PDFs digitalizados ou cheios de fotos, reduções de 50% a 90% são comuns. Em PDFs só de texto, espere um ganho modesto — e, se não houver ganho, o original é mantido para você nunca acabar com um arquivo maior.

## Comprimir PDF sem fazer upload

A maioria dos compressores on-line envia o arquivo para um servidor e promete apagá-lo depois. O TurboConvert baixa o motor de compressão para o seu navegador uma vez e processa tudo localmente. Isso faz dele uma boa opção para documentos que você não quer entregar a ninguém: declaração do Imposto de Renda, extratos bancários, exames médicos, contratos assinados ou documentos de identidade para um cadastro.

## Dicas para chegar ao menor arquivo

- **Comprima uma vez só, no final.** Se for combinar documentos, [junte os PDFs](/pt/juntar-pdf) primeiro e comprima o arquivo final. Comprimir o mesmo PDF várias vezes só degrada ainda mais as imagens.
- **Tire o que não precisa.** Páginas em branco, anexos duplicados ou um apêndice que ninguém pediu podem ser removidos com [Organizar PDF](/pt/organizar-pdf) antes de comprimir.
- **Vai digitalizar papel?** Escaneie documentos de texto a 150–200 dpi em tons de cinza em vez de 600 dpi em cores. O arquivo já nasce bem menor e continua perfeitamente legível.
- **São imagens, e não um PDF?** Se for enviar fotos, comprima direto com [Comprimir imagem](/pt/comprimir-imagem) — é mais rápido e dá mais controle.
- **Confira o resultado.** Abra o PDF comprimido e dê zoom em uma foto ou assinatura antes de enviar. Se algo ficou borrado, processe o original de novo com um nível mais leve.

## Problemas comuns

**“Este PDF está protegido por senha.”** Um PDF criptografado não pode ser reescrito sem a senha. Desbloqueie, comprima e, se precisar, proteja de novo.

**O arquivo comprimido ficou do mesmo tamanho.** O PDF já estava otimizado — é comum em arquivos exportados do Word ou gerados por sistemas de nota fiscal e contabilidade. Não sobrou nada pesado para remover.

**O texto ficou borrado.** Isso só acontece quando o “texto” na verdade faz parte de uma imagem digitalizada. Para digitalizações que vão ser impressas ou lidas com atenção, use o nível Leve.

**O PDF fica bom na tela, mas imprime mal.** A compressão Forte é pensada para tela. Para algo que vai para a impressora — um TCC, um folheto, um formulário assinado —, comprima o original com o nível Leve.
