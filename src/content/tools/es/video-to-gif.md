---
name: 'Video a GIF'
title: 'Video a GIF: crea un GIF animado a partir de un MP4'
description: 'Convierte un fragmento de video MP4, MOV o WebM en un GIF animado. Elige inicio, duración, ancho y fluidez. Gratis, sin marca de agua y sin subir nada.'
h1: 'Convertir video a GIF'
lead: 'Crea un GIF animado a partir de un momento de tu video, para un mensaje, un tutorial o un meme. Tu navegador procesa el video sin subirlo a ningún sitio.'
what: 'tu video'
howTo: 'convertir un video a GIF'
steps:
  - 'Haz clic en <strong>Elegir archivo</strong> o arrastra tu video al recuadro (MP4, MOV, WebM, MKV, AVI…).'
  - 'Indica el <strong>Inicio (segundos)</strong> del fragmento y su <strong>Duración (segundos)</strong>, hasta 60 segundos (5 por defecto).'
  - 'Elige el <strong>Ancho</strong> (de 320 a 800 px) y los <strong>Fotogramas por segundo</strong> (de 8 a 24; 12 por defecto).'
  - 'Haz clic en <strong>Convertir</strong> y luego en <strong>Descargar</strong>. La primera vez se carga el motor de video (unos 31 MB), que después queda en caché.'
limits:
  - 'Duración máxima del GIF: 60 segundos. Un GIF largo y ancho pesa muchísimo enseguida.'
  - 'El GIF no tiene sonido y está limitado a 256 colores por fotograma: los degradados suaves pueden mostrar un ligero tramado.'
  - 'Un video cada vez, 500 MB como máximo. En el teléfono, mejor fragmentos cortos.'
faq:
  - q: '¿Cómo hago un GIF a partir de un video?'
    a: 'Arrastra el video, indica en qué segundo empieza el fragmento y cuánto dura, elige el ancho y la fluidez y haz clic en Convertir. Para un fragmento corto, el GIF está listo en pocos segundos.'
  - q: '¿Cómo consigo un GIF ligero?'
    a: 'Juega con tres ajustes: una duración corta (de 3 a 6 segundos), un ancho reducido (320 o 480 px) y menos fotogramas por segundo (de 8 a 12). Juntos pueden dividir el peso entre diez frente a los ajustes más altos.'
  - q: '¿Por qué mi GIF pesa mucho más que el video?'
    a: 'El GIF es un formato antiguo que comprime muy mal la animación, a diferencia del MP4. Es normal: unos segundos de GIF pueden pesar más que un minuto de video. Para una secuencia larga, comparte mejor un video corto y ligero.'
  - q: '¿El GIF tendrá sonido?'
    a: 'No, el formato GIF no admite audio. Si quieres conservar el sonido, recorta el fragmento en video con <a href="/es/cortar-video">Cortar video</a>.'
  - q: '¿Lleva marca de agua?'
    a: 'No, no se añade ninguna marca de agua. El GIF se genera en tu navegador y es completamente tuyo.'
---

## El GIF animado, todavía imprescindible

Incluso en la era del video, el **GIF** sigue siendo la forma más sencilla de compartir una animación corta: se reproduce solo, en bucle, sin botón de reproducción, y se ve casi en cualquier sitio: correos, apps de mensajería, foros, documentación, herramientas de gestión de proyectos o páginas de GitHub.

Algunos usos típicos:

- **Tutoriales y documentación**: mostrar un clic, un gesto o un paso en un programa;
- **Informes de errores**: ilustrar un comportamiento en pocos segundos;
- **Reacciones y memes** a partir de una escena de tus propios videos;
- **Demostraciones de producto** en un correo, donde los videos normalmente no se reproducen.

## Ajustar bien tu GIF

| Ajuste | Valores | Efecto |
|---|---|---|
| Ancho | 320 / 480 / 640 / 800 px | Más ancho = más nítido, pero mucho más pesado |
| Fotogramas por segundo | 8 / 12 / 15 / 24 | 8–12 bastan para un tutorial; 15–24 para un movimiento fluido |
| Inicio (segundos) | 0, 30, 75… | Punto de partida del fragmento en el video |
| Duración (segundos) | De 1 a 60 | El peso crece de forma proporcional |

La altura se calcula automáticamente para respetar las proporciones del video.

### Encontrar el inicio correcto

Busca el momento que quieres en tu reproductor de video habitual y anota el tiempo en segundos: 1 min 15 s equivale a **75**. Si prefieres cortar primero con precisión, usa [Cortar video](/es/cortar-video) y después convierte el fragmento a GIF con inicio en 0.

## El peso de un GIF: órdenes de magnitud

El peso depende muchísimo del contenido (una grabación de pantalla estática se comprime mucho mejor que una escena filmada con movimiento). En la práctica:

- un GIF de **3 a 5 segundos a 480 px y 12 fotogramas por segundo** suele tener un peso razonable para un mensaje o una documentación;
- por encima de **10 segundos a 800 px y 24 fotogramas por segundo**, el archivo se vuelve muy pesado enseguida.

Si tienes que compartir una secuencia más larga, un video MP4 corto es mucho más eficiente: redúcelo con [Comprimir video](/es/comprimir-video).

## Recetas rápidas

- **GIF para un tutorial o un informe de errores**: ancho 640 px, de 10 a 12 fotogramas por segundo, de 3 a 8 segundos. El texto de la interfaz se sigue leyendo.
- **GIF de reacción para mensajería**: ancho 320 o 480 px, 12 fotogramas por segundo, de 2 a 4 segundos.
- **Animación fluida (deporte, baile, movimiento rápido)**: de 15 a 24 fotogramas por segundo, pero reduce el ancho y la duración para que el peso siga siendo razonable.
- **GIF para un correo**: 480 px de ancho como máximo y pocos segundos, porque muchos servicios de correo limitan el tamaño de los mensajes.

## Creado en tu dispositivo

El video nunca se sube: FFmpeg, compilado en WebAssembly, genera el GIF en tu navegador. Práctico para un fragmento de una reunión, la demo de un producto que aún no se ha lanzado o un video familiar. El tiempo de proceso depende de tu equipo y de la duración del fragmento; una computadora es más rápida que un teléfono.

¿Prefieres quedarte con el sonido del video? Usa [MP4 a MP3](/es/mp4-a-mp3).
