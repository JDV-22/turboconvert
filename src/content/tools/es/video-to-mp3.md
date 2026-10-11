---
name: 'Video a MP3'
title: 'Video a MP3: convertidor de cualquier formato, gratis'
description: 'Extrae el audio de cualquier video (MP4, MOV, WebM, MKV, AVI, WMV) y guárdalo en MP3 de 128 a 320 kbps. Gratis, por lotes, en tu navegador y sin subir nada.'
h1: 'Convertir video a MP3'
lead: 'Convierte el sonido de cualquier archivo de video en un MP3: una clase, una entrevista, un mensaje de voz o tu propia música. Todo ocurre en tu dispositivo; el video nunca se sube.'
what: 'tu video'
howTo: 'convertir un video a MP3'
steps:
  - 'Haz clic en <strong>Elegir archivos</strong> o arrastra uno o varios videos al recuadro: se aceptan MP4, MOV, WebM, MKV, AVI, M4V, WMV, FLV, 3GP, MPEG y TS.'
  - 'Elige la <strong>Calidad de audio</strong>: 128 kbps para voz, 192 kbps para la mayoría de los usos, 320 kbps para música.'
  - 'Haz clic en <strong>Convertir</strong>. Cada MP3 se descarga cuando está listo; si son varios videos, usa <strong>Descargar todo (ZIP)</strong>.'
limits:
  - 'Videos de hasta 1 GB cada uno. La primera vez se descarga el motor de conversión (unos 31 MB), que después queda en caché en tu navegador.'
  - 'Esta herramienta convierte videos que ya tienes en tu dispositivo. No puede descargar de YouTube, TikTok ni de ningún otro sitio web, y no puede leer videos con protección contra copia (DRM).'
  - 'La velocidad depende de tu dispositivo: en una computadora reciente suele tardar lo mismo que dura el video, o menos. Los teléfonos son más lentos con videos largos.'
  - 'Un video grabado sin sonido no tiene audio que extraer.'
faq:
  - q: '¿Qué formatos de video se pueden convertir a MP3?'
    a: 'MP4, MOV, WebM, MKV, AVI, M4V, WMV, FLV, 3GP, MPEG y TS. En la práctica, abarca grabaciones del teléfono, grabaciones de pantalla, videos de cámaras y archivos exportados desde editores de video.'
  - q: '¿Se puede convertir un video de YouTube a MP3?'
    a: 'No directamente: esta herramienta nunca descarga nada de sitios web, y las condiciones de YouTube no permiten descargar los videos de otras personas. Si el video es tuyo, descárgalo desde YouTube Studio (Contenido → ⋮ → Descargar) y arrastra aquí el archivo.'
  - q: '¿Extraer el audio reduce la calidad?'
    a: 'El audio se vuelve a codificar una sola vez a MP3. A 192 kbps o más, la mayoría de las personas no distingue la diferencia con el sonido del video original. Una tasa de bits más alta no puede añadir una calidad que el video no tenía.'
  - q: '¿Cuánto pesará el MP3?'
    a: 'Alrededor de 1 MB por minuto a 128 kbps, 1.4 MB a 192 kbps y 2.4 MB a 320 kbps, sea cual sea el peso o la resolución del video.'
  - q: '¿Funciona en iPhone y Android?'
    a: 'Sí. Abre la página en Safari o Chrome y elige un video desde Fotos, la Galería o Archivos. Una computadora es más rápida con videos largos.'
  - q: '¿Se sube mi video a un servidor?'
    a: 'No. El convertidor es FFmpeg compilado en WebAssembly y se ejecuta en la pestaña de tu navegador, así que el video se queda en tu dispositivo y no hay tiempo de subida.'
---

## Un convertidor para todos los formatos de video

Los videos te llegan en muchos formatos: **MOV** desde un iPhone o un Mac, **MP4** desde teléfonos Android y la mayoría de las cámaras, **WebM** desde grabadores de pantalla y navegadores, **MKV** desde servidores multimedia, **AVI** y **WMV** desde programas antiguos de Windows. Este convertidor los lee todos y se queda solo con lo que necesitas, el sonido, en un MP3 estándar que se reproduce en cualquier teléfono, radio de auto, altavoz inteligente y app de pódcasts.

Si ya sabes que tu archivo es un MP4 o un MOV, las páginas específicas [MP4 a MP3](/es/mp4-a-mp3) y [MOV a MP3](/es/mov-a-mp3) funcionan igual.

## Motivos habituales para extraer el audio de un video

- **Escuchar una clase, un webinar o una charla** mientras te desplazas, sin guardar un archivo de video enorme en el teléfono.
- **Guardar un mensaje de voz** que grabaste por error con la app de la cámara.
- **Preparar un archivo para transcribirlo**: las herramientas de voz a texto prefieren el audio, y un MP3 pesa una fracción del video.
- **Reutilizar tu propia música o narración** en una presentación, un pódcast u otra edición.
- **Conservar el sonido de un concierto o un ensayo** que filmaste tú.

## Cómo elegir la calidad de audio

| Calidad de audio | Peso por minuto | Ideal para |
|---|---|---|
| 128 kbps | ≈ 1 MB | Voz, clases, notas de voz |
| 192 kbps | ≈ 1.4 MB | Escucha diaria (por defecto) |
| 256 kbps | ≈ 1.9 MB | Música |
| 320 kbps | ≈ 2.4 MB | Música con buenos equipos |

¿Necesitas otro formato: WAV para editar, M4A para dispositivos Apple, OPUS para archivos de voz diminutos? El [Convertidor de audio](/es/convertidor-audio) también acepta archivos de video.

## ¿Y los videos de YouTube, TikTok o Instagram?

TurboConvert solo convierte archivos que ya están en tu dispositivo: nunca obtiene nada de un sitio web. Es deliberado. Descargar los videos de otras personas va contra las condiciones de esas plataformas y a menudo infringe los derechos de autor, y los sitios de «YouTube a MP3» que lo hacen funcionan en servidores que ven todo lo que conviertes.

Hay formas legítimas de obtener un archivo de **tu propio** contenido, que luego puedes convertir aquí:

- **YouTube:** en YouTube Studio, abre *Contenido*, haz clic en el menú ⋮ junto a un video y elige *Descargar*.
- **Instagram, TikTok, Facebook:** solicita una copia de tus datos desde los ajustes de la cuenta; incluye los videos que subiste.
- **Grabaciones de Zoom, Teams, Meet:** descarga la grabación desde la app de la reunión; normalmente es un MP4.

## Privado por diseño

La mayoría de los convertidores en línea te obligan a subir primero todo el video, lo que lleva tiempo y deja una copia de tu grabación en el servidor de otra persona. Aquí, una versión de FFmpeg en WebAssembly se ejecuta dentro de tu navegador: el video se lee desde tu disco, el MP3 se escribe en tus descargas y no se envía nada por la red. El motor (unos 31 MB) se descarga una sola vez y queda en caché.

## Consejos

- **¿Solo necesitas una parte?** Convierte y luego corta el MP3 con [Cortar audio](/es/cortar-audio).
- **«Este archivo no tiene pista de audio»:** el video se grabó sin sonido, algo típico de las grabaciones de pantalla con el micrófono apagado.
- **¿Prefieres el video sin su sonido?** Usa [Quitar audio de un video](/es/quitar-audio-video).
