---
name: 'Cortar audio'
title: 'Cortar MP3 online: recorta un fragmento de audio gratis'
description: 'Corta un archivo MP3, WAV, M4A u OGG indicando el inicio y el fin: tonos de llamada, fragmentos, silencios. Gratis, sin registro y sin subir ningún archivo.'
h1: 'Cortar un archivo de audio'
lead: 'Quédate solo con la parte que te interesa de una canción, un pódcast o una grabación: crea un tono de llamada, quita un silencio o aísla una cita. Todo se queda en tu dispositivo.'
what: 'tu archivo de audio'
howTo: 'cortar un archivo de audio'
steps:
  - 'Haz clic en <strong>Elegir archivo</strong> o arrastra tu archivo de audio al recuadro (MP3, WAV, M4A, AAC, OGG, FLAC, OPUS, WMA, AIFF, AMR).'
  - 'En <strong>Inicio</strong>, escribe el momento en que empieza el fragmento, en formato horas:minutos:segundos (por ejemplo, <code>00:00:45</code>).'
  - 'En <strong>Fin</strong>, escribe el momento en que termina (por ejemplo, <code>00:01:15</code>). Déjalo vacío para llegar hasta el final.'
  - 'Haz clic en <strong>Convertir</strong> y luego en <strong>Descargar</strong>. El primer uso carga el motor de audio (unos 31 MB), que después queda en caché.'
limits:
  - 'Se conserva un único fragmento continuo. Para quitar una parte del medio, corta dos fragmentos.'
  - 'Sin fundido de entrada ni de salida: el corte es seco.'
  - 'Un archivo cada vez, 1 GB como máximo.'
faq:
  - q: '¿Cómo corto el principio de un MP3?'
    a: 'Indica en Inicio el momento en que debe empezar el audio (por ejemplo, 00:00:05 para quitar los primeros 5 segundos) y deja Fin vacío.'
  - q: '¿Cómo creo un tono de llamada a partir de una canción?'
    a: 'Localiza la parte que quieres (unos 30 segundos, el estribillo por ejemplo), escribe sus tiempos de inicio y fin y convierte. En Android, puedes usar el archivo resultante como tono de llamada; en el iPhone, los tonos deben importarse en formato M4R a través de una computadora o de una app específica.'
  - q: '¿Cómo sé el tiempo exacto que tengo que escribir?'
    a: 'Escucha el archivo en tu reproductor habitual y páusalo en el momento justo: el contador muestra el tiempo que debes escribir. 2 min 07 s se escribe 00:02:07.'
  - q: '¿Se mantiene la calidad?'
    a: 'Sí, el fragmento conservado mantiene una muy buena calidad. Para cambiar después de formato, usa el <a href="/es/convertidor-audio">Convertidor de audio</a>.'
  - q: '¿Se sube mi archivo a un servidor?'
    a: 'No. FFmpeg hace el corte en tu navegador; el archivo no sale de tu dispositivo.'
---

## Cortar un archivo de audio sin instalar nada

No necesitas instalar Audacity ni un editor de audio para **recortar un MP3**. Solo tienes que indicar dónde empieza y dónde termina la parte que quieres conservar. Algunos usos habituales:

- **Crear un tono de llamada** con el estribillo de una canción;
- **Quitar los silencios** al principio y al final de una grabación;
- **Aislar una cita** de una entrevista o un pódcast;
- **Extraer un fragmento** de una clase o una reunión para compartirlo;
- **Respetar una duración máxima** impuesta por una plataforma o un formulario.

## Escribir los tiempos

Los campos **Inicio** y **Fin** usan el formato **horas:minutos:segundos**:

| Quieres | Inicio | Fin |
|---|---|---|
| Quitar los primeros 3 segundos | 00:00:03 | (vacío) |
| Quedarte con los primeros 30 segundos | 00:00:00 | 00:00:30 |
| Extraer de 1 min 20 s a 1 min 50 s | 00:01:20 | 00:01:50 |
| Quedarte con la primera hora de una grabación | 00:00:00 | 01:00:00 |

Deja **Fin** vacío para conservar el audio hasta el final.

## Seguir con otras herramientas

- **Cambiar de formato** después del corte (MP3, WAV, M4A, FLAC…): [Convertidor de audio](/es/convertidor-audio);
- **Aligerar un WAV** una vez cortado: [WAV a MP3](/es/wav-a-mp3);
- **Extraer primero el audio de un video**: [MP4 a MP3](/es/mp4-a-mp3), y luego corta el MP3 aquí.

## Dividir una grabación larga en varias partes

¿Grabaste una reunión de dos horas o una clase completa y quieres dividirla en capítulos? Repite la operación: un primer corte de 00:00:00 a 00:45:00, un segundo de 00:45:00 a 01:30:00, y así sucesivamente. Cada parte se descarga por separado. Apunta sobre la marcha los tiempos de inicio y fin de cada fragmento para no olvidarte de ninguno.

## Truco para tonos de llamada

Un tono de llamada suele durar **entre 20 y 30 segundos**: elige una parte que empiece con fuerza (estribillo, riff), porque el corte es seco, sin fundido. Evita empezar en mitad de una palabra o de una nota sostenida: si hace falta, adelanta o retrasa el inicio un segundo.

FFmpeg hace el corte en local, en tu navegador: tus grabaciones personales o profesionales nunca se envían.
