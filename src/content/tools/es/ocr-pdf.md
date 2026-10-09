---
name: 'OCR PDF'
title: 'OCR PDF: extraer texto de PDF escaneados e imágenes'
description: 'OCR gratis para extraer el texto de PDF escaneados e imágenes (JPG, PNG). 6 idiomas, motor Tesseract, funciona en tu navegador: sin subir archivos.'
h1: 'OCR: extraer el texto de un PDF escaneado'
lead: 'Reconoce el texto de PDF escaneados, fotos de documentos y capturas de pantalla, y obtenlo como texto editable. El OCR se ejecuta en tu dispositivo con el motor Tesseract: tus archivos nunca se suben.'
what: 'tu escaneo'
howTo: 'extraer el texto de un PDF escaneado'
steps:
  - 'Haz clic en <strong>Elegir archivo</strong> o arrastra un PDF escaneado o una imagen (JPG, PNG, WebP) al recuadro (hasta 100 MB).'
  - 'Elige el <strong>Idioma del documento</strong>: English, Français, Español, Deutsch, Português o Italiano.'
  - 'Haz clic en <strong>Convertir</strong>. La primera vez, tu navegador descarga el motor de OCR y los datos del idioma y los guarda en caché.'
  - 'Cuando termina el reconocimiento, el archivo de texto se descarga automáticamente.'
limits:
  - 'Hay seis idiomas disponibles: inglés, francés, español, alemán, portugués e italiano.'
  - 'El OCR es más lento que otras herramientas porque lee cada página como una imagen. Los documentos largos pueden tardar varios minutos, sobre todo en el teléfono.'
  - 'La precisión depende del escaneo. El texto impreso limpio, recto y bien iluminado funciona mejor; la letra manuscrita, la letra muy pequeña y las fotos borrosas dan malos resultados.'
  - 'Un archivo cada vez. Máximo 100 MB.'
faq:
  - q: '¿Qué es el OCR?'
    a: 'El OCR (reconocimiento óptico de caracteres) convierte una imagen de texto —un escaneo, una foto o una captura— en texto real que puedes copiar, buscar y editar. Sin él, un PDF escaneado no es más que un conjunto de imágenes.'
  - q: '¿Cómo sé si mi PDF necesita OCR?'
    a: 'Intenta seleccionar una palabra del PDF. Si no puedes, o se resalta toda la página como un bloque, el PDF está escaneado y necesita OCR. Si puedes seleccionar palabras, <a href="/es/pdf-a-texto">PDF a texto</a> es más rápido y exacto.'
  - q: '¿Qué tan preciso es el OCR?'
    a: 'En documentos impresos limpios, la mayor parte del texto se reconoce bien, pero ningún OCR es perfecto. Revisa siempre nombres, cifras e importes antes de fiarte de ellos.'
  - q: '¿Puede leer letra manuscrita?'
    a: 'No de forma fiable. El motor está pensado para texto impreso; las mayúsculas escritas con cuidado a veces funcionan, pero la letra cursiva normalmente no.'
  - q: '¿Por qué tarda más la primera vez?'
    a: 'Tu navegador descarga primero el motor de OCR y los datos de tu idioma. Después quedan en caché, así que las siguientes veces empieza mucho más rápido.'
  - q: '¿Se suben mis escaneos?'
    a: 'No. El reconocimiento se hace por completo en tu navegador. Los escaneos de documentos de identidad, informes médicos o contratos nunca salen de tu dispositivo.'
---

## Los PDF escaneados necesitan OCR

Cuando escaneas un papel o fotografías una página, el resultado es una imagen, aunque se guarde como PDF. No puedes buscar en ella, copiar texto ni convertirla a Word. El OCR analiza la forma de las letras y reconstruye el texto.

TurboConvert usa **Tesseract**, un motor de OCR de código abierto muy extendido, compilado para funcionar en tu navegador. Elegir bien el idioma importa: permite al motor reconocer los caracteres con tilde (á, é, ñ, ü, ç…) y las palabras habituales de ese idioma.

## Cómo conseguir el mejor reconocimiento

| Factor | Bien | Problemático |
|---|---|---|
| Resolución | Escaneos a 300 ppp, fotos nítidas con el teléfono | Imágenes pequeñas, muy comprimidas o borrosas |
| Alineación | Páginas rectas | Páginas inclinadas o giradas |
| Contraste | Texto negro sobre papel blanco | Impresión desvaída, fondos de color, sombras |
| Contenido | Texto impreso | Letra manuscrita, fuentes decorativas, texto sobre imágenes |

Consejos prácticos:

- **Endereza primero los escaneos torcidos** con [Girar PDF](/es/girar-pdf); el OCR funciona mejor con páginas derechas.
- **¿Fotografías un documento?** Sostén el teléfono paralelo a la página, con buena luz, y llena el encuadre con el texto.
- **¿Solo necesitas algunas páginas?** Extráelas con [Dividir PDF](/es/dividir-pdf) para ahorrar tiempo en documentos largos.
- **Elige el idioma del documento**, no el tuyo: una carta en inglés escaneada en Madrid debe leerse con English.

## ¿OCR, PDF a texto o PDF a Word?

| Tu archivo | Mejor herramienta | Por qué |
|---|---|---|
| PDF escaneado, foto de una página, captura de pantalla | OCR PDF | El texto solo existe como píxeles |
| PDF digital, solo necesitas las palabras | [PDF a texto](/es/pdf-a-texto) | Texto exacto, al instante, sin errores de reconocimiento |
| PDF digital, quieres editarlo con formato | [PDF a Word](/es/pdf-a-word) | Conserva títulos, estilos e imágenes |

El texto reconocido está listo para pegar en un correo o un documento. Si necesitas un documento con formato, pégalo en Word o Google Docs.

## Problemas frecuentes y soluciones

**El resultado está lleno de caracteres sin sentido.** Probablemente la página está girada, tiene muy poca resolución o el idioma elegido no es el correcto. Endereza la página, usa un escaneo más nítido y elige el idioma del documento.

**Algunas palabras están mal.** Busca caracteres parecidos: «l» y «1», «O» y «0», «rn» y «m» son confusiones clásicas del OCR, sobre todo en letra pequeña. Una revisión rápida las corrige.

**Las columnas se mezclan.** En páginas a varias columnas, como los periódicos, se pueden juntar líneas de columnas vecinas. Recorta cada columna en su propia imagen antes de pasar el OCR.

**Tarda mucho.** Cada página se analiza por separado. Procesa solo las páginas que necesitas y usa una computadora para documentos de más de unas pocas decenas de páginas.
