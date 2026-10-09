---
name: 'MP3 a WAV'
title: 'MP3 a WAV: convierte tus archivos de audio gratis'
description: 'Convierte tus MP3, M4A, OGG o FLAC a WAV para un programa de audio, una edición o un equipo exigente. Por lotes, gratis y sin subir ningún archivo.'
h1: 'Convertir MP3 a WAV'
lead: 'Obtén un archivo WAV a partir de un MP3 o de otro formato de audio, para un editor, un sampler o una plataforma que lo exija. Todo se hace en tu navegador.'
what: 'tus archivos de audio'
howTo: 'convertir MP3 a WAV'
steps:
  - 'Haz clic en <strong>Elegir archivos</strong> o arrastra tus archivos de audio al recuadro (MP3, M4A, AAC, OGG, FLAC, OPUS o WMA).'
  - 'Haz clic en <strong>Convertir</strong>. La primera vez se descarga el motor de audio (unos 31 MB), que después queda en caché.'
  - 'Descarga cada WAV, o todos con <strong>Descargar todo (ZIP)</strong>.'
limits:
  - 'El WAV no recupera la calidad perdida en la compresión MP3: el sonido es idéntico al del MP3, solo que guardado sin comprimir.'
  - 'Un WAV pesa entre 4 y 11 veces más que el MP3 original, según la tasa de bits de este.'
  - 'Tamaño máximo: 1 GB por archivo.'
faq:
  - q: '¿Convertir un MP3 a WAV mejora la calidad?'
    a: 'No. Los detalles que eliminó la compresión MP3 se pierden para siempre. El WAV resultante suena exactamente igual que el MP3, pero lo aceptan los programas y equipos que exigen un formato sin comprimir.'
  - q: '¿Entonces para qué convertir a WAV?'
    a: 'Porque algunas herramientas lo exigen: editores de video o de producción musical, samplers y cajas de ritmos, centralitas telefónicas y contestadores, plataformas de distribución o programas de transcripción. El WAV también evita una nueva pérdida si vas a editar el sonido.'
  - q: '¿Por qué el archivo WAV pesa tanto?'
    a: 'El WAV no está comprimido: unos 10 MB por minuto con calidad de CD estéreo, frente a 1 a 2.4 MB de un MP3. Es normal.'
  - q: '¿Se suben mis archivos?'
    a: 'No, la conversión se hace en tu navegador con FFmpeg compilado en WebAssembly.'
---

## ¿Por qué pasar de MP3 a WAV?

El **MP3** es perfecto para escuchar y compartir. Pero algunos programas y equipos piden **WAV**, el formato de audio sin comprimir de referencia:

- **Editores de video y programas de producción musical**: algunos trabajan mejor con WAV, sobre todo para sincronizar con precisión o reproducir con fluidez en la línea de tiempo;
- **Samplers, cajas de ritmos y controladores de DJ** que solo leen WAV;
- **Centralitas telefónicas y buzones de voz** de empresa, que piden un WAV para los mensajes de bienvenida;
- **Plataformas y servicios** (distribución musical, transcripción, síntesis de voz) que exigen un formato sin compresión;
- **Ediciones sucesivas**: trabajar en WAV evita recomprimir el sonido en cada exportación.

## Lo que hace realmente la conversión

El MP3 se **decodifica** y se guarda sin compresión en un archivo WAV. El sonido resultante es **idéntico** al del MP3: no se pierde nada más, pero tampoco se recupera nada. Si tienes la fuente original (grabación, CD, archivo FLAC), parte mejor de ella para obtener la máxima calidad.

| | MP3 | WAV |
|---|---|---|
| Compresión | Con pérdida | Ninguna |
| Peso por minuto | ~1 a 2.4 MB | ~10 MB (calidad de CD) |
| Uso | Escuchar, compartir | Edición, producción, equipos exigentes |

## Formatos aceptados

Pese a su nombre, la herramienta también acepta archivos **M4A, AAC, OGG, FLAC, OPUS** y **WMA**. Práctico para convertir a WAV una nota de voz del iPhone (M4A) o un audio de WhatsApp (OPUS).

## Caso frecuente: el mensaje de bienvenida de una centralita

Las centralitas y los sistemas de respuesta de voz de empresa suelen pedir un WAV con características concretas (por ejemplo, mono, 8 kHz, 16 bits). Esta herramienta genera un WAV estándar: si tu operador o tu centralita exigen un formato muy específico, revisa su documentación y prueba el archivo antes de ponerlo en marcha. En la mayoría de los casos, un WAV estándar se acepta y el propio sistema lo convierte.

## Herramientas complementarias

- Para la operación inversa, aligera un WAV con [WAV a MP3](/es/wav-a-mp3).
- Para otros formatos de salida (FLAC, M4A, OGG…), usa el [Convertidor de audio](/es/convertidor-audio).
- Para quedarte solo con un fragmento, usa [Cortar audio](/es/cortar-audio).

Tus archivos de audio se procesan en local, sin subirse nunca a un servidor.
