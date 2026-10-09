---
name: 'PDF a texto'
title: 'PDF a texto: extraer texto de un PDF a TXT | TurboConvert'
description: 'Extrae el texto de un PDF y guárdalo en un archivo .txt sin formato. Extracción rápida y por lotes en tu navegador, sin subir archivos ni registrarte.'
h1: 'Convertir PDF a texto'
lead: 'Saca todo el texto de un PDF en un archivo .txt que puedes pegar donde quieras: un correo, un traductor, un gestor de contenidos o un asistente de IA. La extracción se hace en tu dispositivo; no se sube nada.'
what: 'tu PDF'
howTo: 'extraer el texto de un PDF'
steps:
  - 'Haz clic en <strong>Elegir archivos</strong> o arrastra uno o varios PDF al recuadro (hasta 200 MB por archivo).'
  - 'Haz clic en <strong>Convertir</strong>. Se extrae el texto de todas las páginas.'
  - 'El archivo .txt se descarga automáticamente. Con varios PDF, descarga cada archivo o usa <strong>Descargar todo (ZIP)</strong>.'
limits:
  - 'Solo se extrae texto real. Los PDF escaneados y las fotos contienen imágenes de texto: usa <a href="/es/ocr-pdf">OCR PDF</a> para reconocerlo.'
  - 'El texto plano no tiene formato: se pierden las negritas, las fuentes, las imágenes y los bordes de las tablas. Las tablas se convierten en líneas de texto separadas por espacios.'
  - 'En páginas a varias columnas, el orden de lectura no siempre coincide con el orden visual.'
  - 'Los PDF protegidos con contraseña deben desbloquearse primero con <a href="/es/desbloquear-pdf">Desbloquear PDF</a>.'
faq:
  - q: '¿Cómo extraigo el texto de un PDF?'
    a: 'Suelta el PDF aquí y haz clic en Convertir. Obtienes un archivo .txt con todo el texto del documento, listo para abrir en cualquier editor.'
  - q: '¿Por qué el archivo de texto sale vacío?'
    a: 'Lo más probable es que el PDF sea un escaneo, así que sus páginas son imágenes sin capa de texto. Pásalo por <a href="/es/ocr-pdf">OCR PDF</a> para reconocer el texto.'
  - q: '¿Uso PDF a texto o PDF a Word?'
    a: 'Usa PDF a texto cuando solo necesitas las palabras: para copiar, buscar, traducir o usarlas en otra herramienta. Usa <a href="/es/pdf-a-word">PDF a Word</a> si quieres conservar títulos, formato e imágenes y editar el documento.'
  - q: '¿Puedo extraer el texto de varios PDF a la vez?'
    a: 'Sí. Suelta varios PDF: cada uno da su propio archivo .txt y puedes descargarlos todos en un ZIP.'
  - q: '¿Funciona con cualquier idioma?'
    a: 'Sí, siempre que el PDF tenga una capa de texto real. El archivo se guarda en UTF-8, así que se conservan las tildes, la ñ y los alfabetos no latinos.'
---

## ¿Por qué extraer el texto sin formato?

Copiar y pegar desde un visor de PDF es tedioso en documentos largos, y a menudo corta las líneas, mezcla encabezados y pies de página o se salta páginas. Extraer el texto de una vez te da un archivo `.txt` limpio que cualquier programa puede abrir. Es útil para:

- **Citar o reutilizar contenido** en un correo, un informe o una web.
- **Traducir**: pégalo en un traductor sin que el diseño estorbe.
- **Buscar y analizar**: encontrar términos en varios documentos, contar palabras o procesar el texto con scripts.
- **Asistentes de IA y resumidores**: muchos aceptan el texto plano mejor que los PDF.
- **Accesibilidad**: el texto plano funciona con lectores de pantalla y lectores electrónicos sencillos.

## ¿Tu PDF es digital o escaneado?

Ábrelo e intenta seleccionar una sola palabra con el cursor:

| Qué pasa | Tipo de PDF | Qué usar |
|---|---|---|
| Puedes resaltar palabras y líneas | PDF digital con capa de texto | PDF a texto (esta herramienta) |
| Se selecciona toda la página como un bloque, o nada | PDF escaneado o de imagen | [OCR PDF](/es/ocr-pdf) |

## Consejos

- **¿Necesitas las tablas como tablas?** El texto plano las aplana. [PDF a Excel](/es/pdf-a-excel) conserva filas y columnas.
- **Las palabras cortadas con guion al final de línea** salen tal como están en el PDF; un buscar y reemplazar de «-» seguido de salto de línea las arregla.
- **¿Solo necesitas una parte de un PDF largo?** Extrae antes las páginas que te interesan con [Dividir PDF](/es/dividir-pdf).

Tu PDF se lee dentro de tu navegador y nunca se sube, así que puedes extraer el texto de contratos o informes internos con tranquilidad.

## Problemas frecuentes y soluciones

**El .txt está vacío o casi vacío.** El PDF no tiene capa de texto, algo típico de escaneos, fotos guardadas como PDF y algunos faxes. El OCR es la única forma de sacar el texto.

**Aparecen símbolos raros en lugar de letras.** Algunos PDF usan fuentes con una codificación interna no estándar, así que el texto no se puede decodificar bien aunque se vea correctamente en pantalla. En ese caso, el OCR de la página suele dar un texto legible.

**Las palabras o las líneas salen en un orden extraño.** Un PDF guarda el texto en el orden en que se dibujó, que en diseños complejos —columnas, recuadros laterales, pies de foto— no siempre es el orden de lectura. Los párrafos están todos, pero puede que tengas que reordenarlos.

**Los encabezados y pies se repiten en cada página.** Los encabezados, los números de página y los pies son texto real en el PDF, así que también se extraen. Un buscar y reemplazar en tu editor los elimina en un momento.
