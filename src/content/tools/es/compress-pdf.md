---
name: 'Comprimir PDF'
title: 'Comprimir PDF gratis — reducir tamaño sin subirlo | TurboConvert'
description: 'Reduce el tamaño de tus PDF gratis para enviarlos por correo o subirlos a un portal: 3 niveles de compresión, en tu navegador, sin subir archivos ni registro.'
h1: 'Comprimir PDF'
lead: 'Reduce el peso de un PDF demasiado grande para un correo o un formulario en línea sin dejar de leerlo bien. La compresión se hace en tu dispositivo con Ghostscript: tus documentos nunca se suben.'
what: 'tu PDF'
howTo: 'comprimir un PDF'
steps:
  - 'Haz clic en <strong>Elegir archivos</strong> o arrastra uno o varios PDF al recuadro (hasta 200 MB por archivo).'
  - 'Elige el nivel de <strong>Compresión</strong>: «Recomendada: buena calidad» sirve para casi todo, «Fuerte: archivo más pequeño» para entrar en un límite estricto y «Ligera: máxima calidad» para un documento que vas a imprimir.'
  - 'Haz clic en <strong>Convertir</strong>. La primera vez, tu navegador descarga el motor de compresión (unos 16 MB) y luego lo guarda en caché.'
  - 'El PDF comprimido se descarga automáticamente y verás cuánto se ha reducido. Con varios archivos, usa <strong>Descargar todo (ZIP)</strong>.'
limits:
  - 'Lo que se gana depende del contenido del PDF. Los escaneos y los archivos con muchas imágenes son los que más se reducen; un PDF solo con texto suele ser ya compacto y apenas baja.'
  - 'Si la compresión no consigue un archivo más pequeño, TurboConvert conserva tu original en lugar de darte un archivo más grande.'
  - 'Los PDF protegidos con contraseña deben desbloquearse primero con <a href="/es/desbloquear-pdf">Desbloquear PDF</a>.'
  - 'Máximo 200 MB por PDF. Los archivos grandes tardan más en un teléfono; para escaneos pesados, una computadora es más rápida.'
faq:
  - q: '¿Cómo reduzco el tamaño de un PDF gratis?'
    a: 'Suelta el PDF en el recuadro de arriba, deja el nivel Recomendada y haz clic en Convertir. La copia comprimida se descarga al momento, sin cuenta, sin límite diario y sin marca de agua.'
  - q: '¿Comprimir un PDF le quita calidad?'
    a: 'La compresión reduce sobre todo la resolución de las imágenes; el texto y los gráficos vectoriales se ven nítidos en todos los niveles. Usa Ligera si vas a imprimir, Recomendada para pantalla y correo, y Fuerte solo cuando el tamaño sea lo más importante.'
  - q: '¿Cómo hago un PDF lo bastante pequeño para enviarlo por correo?'
    a: 'Gmail y muchos otros servicios limitan los adjuntos a unos 20–25 MB, y algunos servidores de empresa permiten menos. Prueba primero con Recomendada; si sigue pesando demasiado, usa Fuerte o divídelo en partes con <a href="/es/dividir-pdf">Dividir PDF</a>.'
  - q: '¿Puedo comprimir un PDF a un tamaño exacto, como 1 MB o 200 KB?'
    a: 'No puedes escribir un tamaño objetivo, pero puedes acercarte eligiendo el nivel: empieza con Recomendada y pasa a Fuerte si hace falta. Quitar páginas innecesarias con <a href="/es/organizar-pdf">Organizar PDF</a> también ayuda.'
  - q: '¿Por qué mi PDF casi no se ha reducido?'
    a: 'Un PDF que contiene sobre todo texto ya es eficiente y queda poco que quitar. Las grandes reducciones llegan con las páginas escaneadas y las fotos, que a menudo bajan a menos de la mitad.'
  - q: '¿Se suben mis PDF para comprimirlos?'
    a: 'No. El motor Ghostscript está compilado a WebAssembly y se ejecuta en tu navegador, así que tu PDF no sale de tu dispositivo. Incluso puedes desconectarte de internet cuando el motor ya se ha cargado.'
---

## ¿Por qué pesa tanto tu PDF?

El tamaño de un PDF depende casi por completo de lo que lleva dentro:

- **Páginas escaneadas.** Cada página de un escaneo es una foto de página completa. Un documento de 20 páginas escaneado en color a 300 o 600 ppp supera fácilmente los 20–50 MB.
- **Fotos y capturas.** Las imágenes pegadas en Word o PowerPoint suelen conservar la resolución original de la cámara, mucho más de lo que necesita una pantalla.
- **Fuentes incrustadas.** Cada tipo de letra usado se guarda en el archivo. Se nota en documentos cortos, pero rara vez vuelve enorme un archivo.
- **Texto y dibujos vectoriales.** Ocupan muy poco: un informe de 100 páginas solo con texto suele quedarse muy por debajo de 1 MB.

Por eso comprimir un PDF consiste sobre todo en **reducir las imágenes**: bajar su resolución a lo que de verdad necesitas y guardarlas de forma más eficiente. Así, un contrato escaneado puede perder la mayor parte de su peso, mientras que un PDF de texto apenas cambia.

## ¿Qué nivel de compresión elegir?

TurboConvert usa Ghostscript, el mismo motor de código abierto que hay detrás de muchas herramientas PDF profesionales, con tres ajustes:

| Nivel | Ideal para | Imágenes | Resultado habitual |
|---|---|---|---|
| **Fuerte: archivo más pequeño** | Correo, formularios con límites estrictos, copias de archivo | Reducidas a resolución de pantalla | El archivo más ligero; las fotos pierden detalle al hacer zoom |
| **Recomendada: buena calidad** | La mayoría de documentos, lectura en pantalla, compartir | Reducidas a resolución de libro electrónico | Nítido en cualquier pantalla, buena reducción |
| **Ligera: máxima calidad** | Documentos para imprimir | Se mantienen a resolución de impresión | Casi idéntico al original; ahorro menor |

En PDF escaneados o con muchas fotos, son habituales reducciones del 50 al 90 %. En un PDF solo de texto, espera una ganancia modesta; y si no hay ninguna, se conserva tu original para que nunca acabes con un archivo más grande.

## Entrar en un límite de tamaño

Los servicios de correo limitan el tamaño de los adjuntos y muchos portales (administraciones, plataformas de empleo, universidades) imponen un máximo por documento, a menudo de pocos megas. Este es el orden que funciona:

1. **Comprime con «Recomendada».** Basta en la mayoría de los casos.
2. **¿No es suficiente? Pasa a «Fuerte».** Comprueba que se sigue leyendo bien, sobre todo la letra pequeña.
3. **Quita las páginas que sobran** (páginas en blanco, anexos repetidos) con [Organizar PDF](/es/organizar-pdf).
4. **Divide el documento** en varios archivos con [Dividir PDF](/es/dividir-pdf) si el portal admite varios adjuntos.

## Consejos para conseguir el archivo más pequeño

- **Comprime una sola vez, al final.** Si vas a juntar documentos, [únelos](/es/unir-pdf) primero y comprime el archivo final. Comprimir el mismo PDF una y otra vez solo degrada más las imágenes.
- **¿Escaneas tú mismo?** Escanea los documentos de texto a 150–200 ppp en escala de grises en lugar de 600 ppp en color: el archivo nace mucho más pequeño y se lee perfectamente.
- **¿Son fotos y no un PDF?** Comprímelas directamente con [Comprimir imagen](/es/comprimir-imagen): es más rápido y tienes más control.

## Problemas frecuentes

**«Este PDF está protegido con contraseña».** Un PDF cifrado no se puede reescribir sin la contraseña. Desbloquéalo, comprímelo y vuelve a protegerlo si hace falta.

**El archivo comprimido pesa lo mismo.** El PDF ya estaba optimizado, algo típico de los archivos exportados desde Word o generados por programas de contabilidad. No queda nada pesado que quitar.

**El texto se ve borroso.** Solo pasa cuando el «texto» es en realidad parte de una imagen escaneada. Usa el nivel Ligera para escaneos que debas imprimir o leer con detalle.

**Un PDF con firma electrónica.** Cualquier modificación del archivo, incluida la compresión, invalida la firma digital. Si el documento debe firmarse, comprímelo primero y firma después la versión reducida.

## Una compresión que se queda en tu dispositivo

Los PDF que queremos aligerar suelen ser documentos sensibles: nóminas, declaraciones de impuestos, extractos bancarios, un documento de identidad escaneado. Con TurboConvert, el motor de compresión se descarga una vez en tu navegador y lo procesa todo en local. No se sube ningún archivo, así que no hay nada que borrar de ningún servidor. En el teléfono funciona igual en Safari o Chrome: elige el PDF desde la app Archivos o Google Drive y el archivo comprimido se guarda en tus descargas.
