---
name: 'MP4 a MP3'
title: 'MP4 a MP3: extrae el audio de un video gratis'
description: 'Convierte un video MP4, MOV, MKV o WebM a MP3 de 128 a 320 kbps. Extrae el audio gratis, por lotes, sin registro y sin subir ningún archivo.'
h1: 'Convertir MP4 a MP3'
lead: 'Saca el audio de un video en MP3: música, entrevistas, clases, pódcasts o mensajes de voz. Tu navegador procesa el video y nunca se sube a ningún sitio.'
what: 'tu video'
howTo: 'convertir un video MP4 a MP3'
steps:
  - 'Haz clic en <strong>Elegir archivos</strong> o arrastra uno o varios videos al recuadro: se aceptan MP4, MOV, MKV, WebM, AVI, M4V, WMV y otros formatos.'
  - 'Elige la <strong>Calidad de audio</strong>: 192 kbps por defecto, 320 kbps para música, 128 kbps para voz.'
  - 'Haz clic en <strong>Convertir</strong>. La primera vez se descarga el motor de conversión (unos 31 MB), que después queda en caché.'
  - 'Descarga tu MP3, o todos los archivos con <strong>Descargar todo (ZIP)</strong>.'
limits:
  - 'Tamaño máximo: 1 GB por video. Para videos largos, una computadora es más rápida y cómoda que un teléfono.'
  - 'Un video sin pista de audio no se puede convertir: el MP3 estaría vacío.'
  - 'La herramienta convierte archivos que ya tienes en tu dispositivo; no descarga videos de YouTube ni de otras plataformas.'
  - 'Si el video tiene varias pistas de audio (varios idiomas, por ejemplo), se extrae solo una, normalmente la principal.'
faq:
  - q: '¿Cómo saco el audio de un video en MP3?'
    a: 'Arrastra el video aquí arriba, elige la calidad de audio y haz clic en Convertir. Solo se conserva la pista de sonido, que se codifica en MP3; la imagen se descarta, por eso el proceso es bastante rápido.'
  - q: '¿Qué calidad de MP3 elijo?'
    a: '192 kbps es un muy buen equilibrio para la mayoría de los usos. Elige 320 kbps para música de buena calidad y 128 kbps para voz (clases, conferencias, entrevistas), con un archivo más ligero.'
  - q: '¿Se puede convertir un video de YouTube a MP3?'
    a: 'Esta herramienta no descarga nada de internet: convierte los videos que ya tienes en tu dispositivo. Si tienes los derechos de un video, simplemente convierte su archivo MP4.'
  - q: '¿Se mantiene la calidad del audio?'
    a: 'El audio de un MP4 suele estar en AAC; se decodifica y se vuelve a codificar en MP3. A 192 kbps o más, la diferencia es inaudible para la gran mayoría de las personas. Elegir 320 kbps no mejora una fuente de baja calidad.'
  - q: '¿Funciona en iPhone y Android?'
    a: 'Sí, en Safari, Chrome o Firefox. En el teléfono, convertir un video corto es rápido; para un video de una hora, una computadora será mucho más eficaz.'
  - q: '¿Se sube mi video a un servidor?'
    a: 'No. La conversión usa FFmpeg compilado en WebAssembly y se ejecuta en tu navegador. Tus videos personales nunca salen de tu dispositivo.'
---

## Extraer el audio de un video: usos habituales

Convertir un **MP4 a MP3** consiste en quedarte solo con el sonido de un video. Es útil en muchas situaciones:

- **Escuchar una clase, una conferencia o un webinar** mientras caminas o vas al trabajo, sin tener la pantalla encendida;
- **Recuperar una canción** de un videoclip, un montaje o un concierto que grabaste tú;
- **Transcribir una entrevista** o una reunión grabada en video;
- **Guardar un mensaje de voz** o una nota que recibiste en formato de video;
- **Preparar un pódcast** a partir de una grabación en video.

El MP3 resultante se reproduce en todas partes: teléfono, radio del auto, altavoz inteligente, reproductor MP3 o programa de edición de audio.

## Formatos de video aceptados

Pese a su nombre, la herramienta no se limita al MP4. Acepta la mayoría de los formatos de video habituales: **MP4, MOV** (videos del iPhone), **MKV, WebM, AVI, M4V, WMV, FLV, 3GP, MPEG** y **TS**. Si el video tiene pista de sonido, se puede extraer en MP3.

## ¿Qué tasa de bits elegir?

| Calidad de audio | Uso | Peso aproximado por minuto |
|---|---|---|
| 128 kbps | Voz, clases, reuniones | ~1 MB |
| 192 kbps | Uso general (por defecto) | ~1.4 MB |
| 256 kbps | Música, buena escucha | ~1.9 MB |
| 320 kbps | Música, máxima calidad del MP3 | ~2.4 MB |

Una tasa de bits alta no recupera calidad que el video original no tenga: si el audio del video está comprimido a 128 kbps, un MP3 a 320 kbps solo pesará más. Si dudas, quédate con **192 kbps**.

## Cómo funciona, sin subir archivos

La mayoría de los convertidores de MP4 a MP3 en línea te piden subir el video, a menudo cientos de MB, y esperar a que sus servidores lo procesen. Aquí es al revés: **FFmpeg**, el motor de referencia para audio y video, se carga una vez en tu navegador (unos 31 MB, que luego quedan en caché) y la conversión se hace en tu dispositivo.

Consecuencias prácticas:

- **sin tiempo de subida**, aunque el video pese 500 MB;
- **tus videos privados** (reuniones, videos familiares, formaciones internas) no se confían a nadie;
- la velocidad depende de tu equipo: en una computadora reciente, extraer el audio suele tardar lo mismo o menos que la duración del video.

## En la computadora, el iPhone o Android

- **Computadora (Windows, Mac, Linux)**: arrastra el video al recuadro. Es la opción más rápida para videos largos o numerosos.
- **iPhone y iPad**: en Safari, toca **Elegir archivos** y luego «Fototeca» para elegir un video de tu carrete. El MP3 se guarda en la app Archivos (carpeta Descargas).
- **Android**: en Chrome, elige el video desde la galería o el gestor de archivos; el MP3 llega a la carpeta Descargas.

En todos los casos, mantén la página abierta en primer plano durante la conversión: si el navegador pasa a segundo plano, puede ralentizar o pausar el proceso.

## Problemas frecuentes y soluciones

- **El MP3 no suena o la conversión falla**: comprueba que el video tenga sonido al reproducirlo. Algunas grabaciones de pantalla se guardan sin audio.
- **Solo quieres un fragmento**: convierte el video a MP3 y luego recorta la parte que te interesa con [Cortar audio](/es/cortar-audio).
- **Necesitas otro formato** (WAV, M4A, FLAC…): usa el [Convertidor de audio](/es/convertidor-audio), que también acepta videos.

Para hacer lo contrario, crear un video a partir de un MP3 y una imagen, usa [MP3 a MP4](/es/mp3-a-mp4). Y para reducir el peso de un video en lugar de extraer su audio, usa [Comprimir video](/es/comprimir-video). Recuerda también los derechos de autor: extraer la música de un video para uso personal es una cosa; volver a publicarla es otra.
