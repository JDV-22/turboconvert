---
name: 'GIF a MP4'
title: 'GIF a MP4: convertidor más ligero y fluido, gratis'
description: 'Convierte GIF animados a video MP4, normalmente mucho más ligero y compatible con Instagram, WhatsApp y cualquier sitio web. Gratis, por lotes y sin subir nada.'
h1: 'Convertir GIF a MP4'
lead: 'Convierte GIF animados en videos MP4 más ligeros, más fluidos y aceptados por todas las redes sociales y apps de mensajería. La conversión se hace en tu dispositivo: no se sube nada.'
what: 'tu GIF'
howTo: 'convertir un GIF a MP4'
steps:
  - 'Haz clic en <strong>Elegir archivos</strong> o arrastra uno o varios GIF animados al recuadro.'
  - 'Haz clic en <strong>Convertir</strong>. No hay nada que configurar: el video conserva el tamaño y la velocidad del GIF.'
  - 'Cada MP4 se descarga cuando está listo; si son varios GIF, usa <strong>Descargar todo (ZIP)</strong>.'
limits:
  - 'GIF de hasta 200 MB cada uno. La primera vez se descarga el motor de conversión (unos 31 MB), que después queda en caché en tu navegador.'
  - 'El MP4 no admite transparencia. Las zonas transparentes del GIF pasan a ser un fondo sólido.'
  - 'Un MP4 se reproduce una sola vez por defecto. Para que se repita en un sitio web, usa el atributo <code>loop</code> del video (ver más abajo); la mayoría de las apps sociales repiten los videos cortos automáticamente.'
  - 'El ancho y el alto se redondean a un número par de píxeles, algo que exige el formato H.264; como máximo se recorta un píxel.'
faq:
  - q: '¿Por qué convertir un GIF a MP4?'
    a: 'El GIF es un formato de los años 80 limitado a 256 colores por fotograma y muy ineficiente para animación. La misma animación en MP4 con H.264 suele pesar varias veces menos, se ve mejor y la aceptan apps que rechazan los GIF, como Instagram.'
  - q: '¿El MP4 se verá igual que el GIF?'
    a: 'Sí. Se conservan el tamaño y los tiempos, y se convierte cada fotograma. Los colores suelen verse igual o mejor, ya que deja de aplicarse el límite de 256 colores del GIF.'
  - q: '¿El MP4 tiene sonido?'
    a: 'No: los GIF no tienen audio, así que el MP4 es silencioso. Eso es también lo que permite a los navegadores reproducirlo automáticamente en las páginas web.'
  - q: '¿Puedo convertir varios GIF a la vez?'
    a: 'Sí. Arrastra varios archivos; se procesan uno tras otro y puedes guardarlos todos en un solo ZIP.'
  - q: '¿Se suben mis GIF?'
    a: 'No. FFmpeg se ejecuta dentro de la pestaña de tu navegador, así que tus archivos nunca salen de tu dispositivo.'
---

## Por qué el GIF es el formato equivocado para animación

El formato GIF data de 1987. Guarda cada fotograma como una imagen con paleta de 256 colores como máximo, comprime los fotogramas de forma independiente y no tiene ninguna noción del movimiento entre ellos. El resultado son archivos pesados con bandas de color visibles: unos pocos segundos de animación pueden pesar fácilmente varios megabytes.

El video MP4 con H.264 se diseñó para imágenes en movimiento: guarda solo lo que cambia entre fotogramas y admite millones de colores. Por eso GIPHY, X (Twitter) y la mayoría de las apps de mensajería convierten en silencio los GIF que envías en videos MP4.

## Dónde funciona mejor un MP4 que un GIF

- **Instagram** no acepta GIF en publicaciones, Historias ni Reels: un MP4 pasa sin problema.
- **Sitios web y blogs:** reemplazar los GIF por MP4 es una de las recomendaciones clásicas de Google PageSpeed Insights, porque las páginas más ligeras cargan más rápido.
- **Presentaciones:** PowerPoint, Keynote y Presentaciones de Google reproducen MP4 con fluidez, mientras que los GIF grandes pueden trabarse.
- **Adjuntos de correo y chat:** un archivo más pequeño se envía más rápido y se mantiene dentro de los límites de tamaño.

## Repetir el video en una página web

Para que un MP4 se comporte exactamente como un GIF en tu sitio (reproducción automática, repetición, sin controles), usa:

```html
<video src="animation.mp4" autoplay loop muted playsinline></video>
```

`muted` y `playsinline` son necesarios para que los navegadores (sobre todo en iPhone) inicien el video automáticamente.

## GIF con transparencia

El video MP4 no tiene canal de transparencia. Si tu GIF tiene un fondo transparente, esa zona se convierte en un color sólido en el MP4. Para una animación que deba seguir siendo transparente en una página web, conserva el GIF o pide al diseñador un WebP animado o un WebM con canal alfa.

## Privado por diseño

La conversión usa FFmpeg compilado en WebAssembly y se ejecuta por completo en tu navegador. Tus GIF se leen desde tu disco y los MP4 se escriben en tus descargas: no se envía nada a ningún servidor.

## Herramientas relacionadas

- ¿Quieres hacer lo contrario? [Video a GIF](/es/video-a-gif) convierte un clip en un GIF animado.
- ¿Necesitas un video más pequeño? [Comprimir video](/es/comprimir-video) reduce el peso de cualquier MP4.
