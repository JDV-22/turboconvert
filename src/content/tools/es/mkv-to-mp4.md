---
name: 'MKV a MP4'
title: 'MKV a MP4: convierte tus videos MKV gratis'
description: 'Convierte tus videos MKV a MP4 para verlos en la tele, el teléfono o tu editor de video. Conversión rápida cuando es posible, gratis y sin subir archivos.'
h1: 'Convertir MKV a MP4'
lead: 'Haz que tus archivos MKV se reproduzcan en tu televisor, tu teléfono o tu editor de video pasándolos a MP4. Todo se hace en tu navegador.'
what: 'tus videos MKV'
howTo: 'convertir MKV a MP4'
steps:
  - 'Haz clic en <strong>Elegir archivos</strong> o arrastra tus archivos .mkv al recuadro.'
  - 'Haz clic en <strong>Convertir</strong>. La primera vez se descarga el motor de video (unos 31 MB), que después queda en caché.'
  - 'Descarga cada MP4, o todos los archivos con <strong>Descargar todo (ZIP)</strong>.'
limits:
  - 'Si el video está en H.264 (lo más habitual), la conversión es muy rápida y sin pérdida. Con otros códecs hay que recodificar a H.264/AAC, lo que tarda bastante más.'
  - 'Los MKV suelen tener varias pistas de audio y subtítulos: esas pistas adicionales y los subtítulos pueden no conservarse en el MP4.'
  - 'Tamaño máximo: 1 GB por archivo. Las películas más pesadas no se pueden procesar en el navegador.'
faq:
  - q: '¿Qué diferencia hay entre MKV y MP4?'
    a: 'Son dos contenedores de video. El MKV (Matroska) es muy flexible: varias pistas de audio, subtítulos, capítulos y casi cualquier códec. El MP4 es más limitado, pero lo reproducen prácticamente todos los dispositivos y programas.'
  - q: '¿Se pierde calidad al convertir de MKV a MP4?'
    a: 'No si el video ya está en H.264: las pistas se copian tal cual al MP4. Si hace falta recodificar, el proceso está configurado para mantener una muy buena calidad.'
  - q: '¿Se conservan mis subtítulos?'
    a: 'No necesariamente: los subtítulos y las pistas de audio adicionales de un MKV pueden no incluirse. Si los necesitas, guarda una copia del MKV original.'
  - q: '¿Se suben mis archivos a internet?'
    a: 'No. La conversión se hace en local, en tu navegador, gracias a FFmpeg.'
---

## MKV: el contenedor para todo

**MKV** (Matroska) es un formato contenedor libre muy apreciado por su flexibilidad: un solo archivo puede contener un video, **varias pistas de audio** (idiomas, comentarios), **subtítulos** y **capítulos**. Es habitual en grabaciones de programas de captura (OBS, por ejemplo), en archivos de video personales o en exportaciones de algunos programas.

La otra cara de la moneda: muchos dispositivos y programas no lo reproducen, o lo hacen mal:

- algunos **televisores** y **decodificadores** desde una memoria USB;
- el **iPhone y el iPad** en la app Fotos;
- muchos **editores de video** y **programas de presentaciones**;
- la mayoría de las **redes sociales** y plataformas para compartir videos.

## ¿MKV o MP4?

| | MKV | MP4 |
|---|---|---|
| Varias pistas de audio | Sí | Posible, pero poco usado |
| Subtítulos integrados | Cualquier formato | Limitados |
| Compatibilidad con dispositivos | Variable | Universal |
| Edición y publicación en línea | A menudo rechazado | Aceptado en todas partes |

## Una conversión a menudo instantánea

La mayoría de los MKV ya contienen video en **H.264** y un audio compatible. En ese caso, la herramienta solo **copia las pistas** a un contenedor MP4: el proceso es muy rápido y **sin ninguna pérdida**. Si el video usa un códec que el MP4 no admite bien, se recodifica en **H.264/AAC**, lo que tarda más y depende de la potencia de tu dispositivo.

### Truco para OBS

Si grabas con OBS Studio en MKV (el formato más seguro por si el programa se cierra inesperadamente), esta herramienta es ideal para obtener un MP4 que editar o publicar. Después, si hace falta, redúcelo con [Comprimir video](/es/comprimir-video).

## Archivos grandes

La conversión se hace en la memoria de tu navegador, de ahí el límite de 1 GB por archivo. Por encima de ese tamaño, un programa instalado en tu computadora sigue siendo la mejor opción. Por debajo, si solo necesitas una parte, córtala primero con [Cortar video](/es/cortar-video): el archivo que conviertas será más pequeño. En una computadora reciente, la copia de pistas (sin recodificar) es rápida incluso con un video de casi 1 GB.

## Otras conversiones útiles

- [MOV a MP4](/es/mov-a-mp4) para videos del iPhone y del Mac;
- [WebM a MP4](/es/webm-a-mp4) para grabaciones de pantalla hechas en el navegador;
- [MP4 a MP3](/es/mp4-a-mp3) para extraer solo el audio.

Tus videos nunca salen de tu dispositivo: FFmpeg, compilado en WebAssembly, hace la conversión en tu navegador.
