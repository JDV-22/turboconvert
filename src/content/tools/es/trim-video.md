---
name: 'Cortar video'
title: 'Cortar video online: quédate solo con el fragmento que quieres'
description: 'Corta el principio o el final de un video MP4, MOV o MKV indicando el tiempo de inicio y de fin. Gratis, sin marca de agua, sin registro y sin subir nada.'
h1: 'Cortar video'
lead: 'Quédate solo con la parte que te interesa: elimina un comienzo fallido, un final demasiado largo o extrae una escena. El video se queda en tu dispositivo.'
what: 'tu video'
howTo: 'cortar un video'
steps:
  - 'Haz clic en <strong>Elegir archivo</strong> o arrastra tu video al recuadro (MP4, MOV, MKV, WebM, AVI…).'
  - 'En <strong>Inicio</strong>, escribe el momento en que empieza el fragmento, en formato horas:minutos:segundos (por ejemplo, <code>00:01:15</code>).'
  - 'En <strong>Fin</strong>, escribe el momento en que termina (por ejemplo, <code>00:02:30</code>). Déjalo vacío para llegar hasta el final del video.'
  - 'Haz clic en <strong>Convertir</strong> y luego en <strong>Descargar</strong>. El primer uso carga el motor de video (unos 31 MB), que después queda en caché.'
limits:
  - 'La herramienta conserva un único fragmento continuo. Para quitar una parte del medio, corta dos fragmentos por separado.'
  - 'Según cómo esté codificado el video, el punto de corte puede desplazarse una fracción de segundo: deja un pequeño margen.'
  - 'Un video cada vez, 1 GB como máximo. El proceso es más rápido en una computadora que en un teléfono.'
faq:
  - q: '¿Cómo corto el principio de un video?'
    a: 'Indica en Inicio el momento en que debe empezar el video (por ejemplo, 00:00:08 para quitar los primeros 8 segundos) y deja Fin vacío: se conserva todo lo demás.'
  - q: '¿Cómo corto el final de un video?'
    a: 'Deja Inicio en 00:00:00 y escribe en Fin el momento en que debe terminar, por ejemplo 00:03:20.'
  - q: '¿Cómo sé los tiempos exactos?'
    a: 'Reproduce el video en tu reproductor habitual (VLC, Fotos, QuickTime…) y páusalo en el momento que quieras: el tiempo que aparece es el que tienes que escribir. 1 min 30 s se escribe 00:01:30.'
  - q: '¿Se añade alguna marca de agua?'
    a: 'No, no se añade ninguna marca de agua ni logotipo a tu video.'
  - q: '¿Se sube mi video?'
    a: 'No. FFmpeg hace el corte en tu navegador; el video nunca sale de tu dispositivo.'
---

## Cortar un video sin programa de edición

No necesitas instalar un editor de video para algo tan sencillo como **acortar un video**. Con esta herramienta basta con indicar dónde empieza y dónde termina la parte que quieres conservar. Es útil para:

- quitar el **comienzo fallido** de un video grabado con el teléfono (mientras encuadrabas);
- eliminar un **final demasiado largo** o un momento incómodo;
- **extraer una escena** de una grabación de una reunión, una clase o un partido;
- **reducir la duración** para respetar un límite (red social, formulario, app de mensajería).

## Escribir los tiempos de inicio y fin

Los dos campos usan el formato **horas:minutos:segundos**:

| Quieres | Inicio | Fin |
|---|---|---|
| Quitar los primeros 10 segundos | 00:00:10 | (vacío) |
| Quedarte con el primer minuto | 00:00:00 | 00:01:00 |
| Extraer de 2 min 05 s a 2 min 45 s | 00:02:05 | 00:02:45 |
| Cortar a partir de 1 h 10 min | 00:00:00 | 01:10:00 |

Deja **Fin** vacío para conservar el video hasta el final.

## Quitar una parte del medio

La herramienta conserva un fragmento continuo. Para eliminar un momento situado en mitad del video (una pausa publicitaria en una grabación, una duda), hazlo en dos pasos: corta primero de 00:00:00 hasta el inicio de la parte que sobra y después desde el final de esa parte hasta el final del video. Obtendrás dos fragmentos limpios que puedes unir en cualquier editor de video (Clipchamp, iMovie, CapCut…).

## ¿Y después?

Una vez que tengas el fragmento, puedes seguir con otras herramientas:

- [Comprimir video](/es/comprimir-video) para aligerarlo antes de enviarlo;
- [Video a GIF](/es/video-a-gif) para convertirlo en una animación corta y sin sonido;
- [Quitar audio de un video](/es/quitar-audio-video) si el sonido no aporta nada.

De hecho, cortar antes de comprimir es la mejor estrategia: la compresión solo se aplica a la parte útil, lo que es más rápido y da un archivo más ligero.

## Desde el teléfono o la computadora

La herramienta funciona en Chrome, Safari, Firefox y Edge. En el iPhone, toca **Elegir archivo** y luego «Fototeca» para elegir un video de tu carrete; el resultado se guarda en la app Archivos. En Android llega a la carpeta Descargas. Para videos largos o en 4K, una computadora es más cómoda y rápida.

## Un corte privado

FFmpeg, compilado en WebAssembly, procesa el video en tu navegador. No se envía ningún archivo: puedes cortar la grabación de una videollamada o un video familiar con total confidencialidad.
