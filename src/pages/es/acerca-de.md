---
layout: ../../layouts/ProsePage.astro
title: Acerca de TurboConvert — un convertidor que no sube nada
description: Quién hace TurboConvert, cómo funcionan las conversiones en tu navegador sin subir tus archivos y qué motores de código abierto usamos.
h1: Acerca de TurboConvert
lead: Un convertidor de archivos gratuito basado en una idea sencilla — tus archivos nunca deberían tener que salir de tu dispositivo.
locale: es
page: about
updated: 2026-10-09
---

## Por qué lo creamos

Convertir un PDF o una foto no debería significar entregar una copia a un servidor desconocido. Sin embargo, así funcionan la mayoría de los convertidores en línea: subes tu archivo, se procesa a distancia y te piden que confíes en que lo borrarán.

TurboConvert es un proyecto independiente creado en Francia que hace justo lo contrario. Cuando abres una herramienta, el programa de conversión se descarga en tu navegador y se ejecuta en tu propia computadora o teléfono. Tus archivos se leen, se convierten y se guardan en local. No hay ningún paso de subida, y por eso las conversiones empiezan al instante.

## Cómo funciona

Los navegadores actuales pueden ejecutar código compilado a una velocidad casi nativa gracias a **WebAssembly**. Lo aprovechamos para ejecutar motores de código abierto probados directamente en la página:

- **Ghostscript** comprime los PDF: es el mismo motor que hay detrás de muchas herramientas PDF profesionales.
- **FFmpeg** (a través de ffmpeg.wasm) convierte, comprime y corta audio y video.
- **PDF.js** (Mozilla) muestra y lee las páginas PDF; **pdf-lib** y **qpdf** las editan, unen, dividen y protegen.
- **libheif** decodifica las fotos HEIC del iPhone; **Tesseract** reconoce el texto de los documentos escaneados (OCR).
- **docx**, **mammoth**, **docx-preview**, **ExcelJS**, **jsPDF** y **PptxGenJS** leen y escriben documentos de Office.

Algunos de estos motores son pesados (FFmpeg ocupa unos 31 MB), así que el primer uso de una herramienta de video u OCR tarda un poco más. Después, tu navegador guarda el motor en su caché.

## Puedes comprobarlo tú mismo

Abre las herramientas para desarrolladores de tu navegador (F12 en Windows, ⌥⌘I en Mac), selecciona la pestaña **Red** (Network) y haz una conversión. Verás cómo se cargan la página y los archivos del motor, pero nunca verás tu archivo enviándose. Incluso puedes desconectarte de internet una vez cargada la página y seguir convirtiendo.

## Cómo se financia TurboConvert

Las herramientas son gratuitas, sin cuenta, sin límite diario y sin marca de agua. El sitio se financia con publicidad (mostrada solo con el consentimiento que exige la ley) y puede incluir recomendaciones de otros productos claramente identificadas. Nunca vendemos datos y, como nunca recibimos tus archivos, no hay nada sobre ellos que vender.

## Honestos con los límites

Hacerlo todo en tu dispositivo tiene sus contrapartidas. Los archivos muy grandes dependen de la memoria de tu dispositivo, y algunas conversiones (por ejemplo, diseños complejos de Word o PDF escaneados) no siempre pueden ser perfectas. Cada página de herramienta tiene una sección **Conviene saber** que enumera sus limitaciones reales. Si algo no funciona como se describe, [escríbenos](/es/contacto): leemos todos los mensajes.

## Software de código abierto

TurboConvert se apoya en el trabajo de muchos proyectos de código abierto. Los usamos sin modificar, bajo sus respectivas licencias:

| Proyecto | Licencia | Código fuente |
|---|---|---|
| Ghostscript (versión WebAssembly de @jspawn) | AGPL-3.0 | [github.com/jspawn/ghostscript-wasm](https://github.com/jspawn/ghostscript-wasm) · [ghostscript.com](https://ghostscript.com/) |
| FFmpeg / ffmpeg.wasm | LGPL/GPL · MIT | [ffmpeg.org](https://ffmpeg.org/) · [github.com/ffmpegwasm/ffmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm) |
| PDF.js | Apache-2.0 | [github.com/mozilla/pdf.js](https://github.com/mozilla/pdf.js) |
| pdf-lib | MIT | [github.com/Hopding/pdf-lib](https://github.com/Hopding/pdf-lib) |
| qpdf (qpdf-wasm) | Apache-2.0 · ISC | [github.com/qpdf/qpdf](https://github.com/qpdf/qpdf) |
| libheif (libheif-js) | LGPL-3.0 | [github.com/strukturag/libheif](https://github.com/strukturag/libheif) |
| Tesseract.js | Apache-2.0 | [github.com/naptha/tesseract.js](https://github.com/naptha/tesseract.js) |
| docx · mammoth · docx-preview | MIT · BSD-2 · Apache-2.0 | [docx](https://github.com/dolanmiu/docx) · [mammoth](https://github.com/mwilliamson/mammoth.js) · [docx-preview](https://github.com/VolodymyrBaydalka/docxjs) |
| ExcelJS · jsPDF · PptxGenJS · JSZip · fflate · UTIF | MIT | [exceljs](https://github.com/exceljs/exceljs) · [jsPDF](https://github.com/parallax/jsPDF) · [PptxGenJS](https://github.com/gitbrent/PptxGenJS) · [JSZip](https://github.com/Stuk/jszip) · [fflate](https://github.com/101arrowz/fflate) · [UTIF](https://github.com/photopea/UTIF.js) |
| Fuente Geist | SIL OFL 1.1 | [github.com/vercel/geist-font](https://github.com/vercel/geist-font) |

## Contacto

Preguntas, errores, colaboraciones o prensa: [hello@turboconvert.io](mailto:hello@turboconvert.io). Solicitudes sobre privacidad: [privacy@turboconvert.io](mailto:privacy@turboconvert.io).
