---
name: 'SVG a PNG'
title: 'SVG a PNG: convierte en alta resolución, gratis'
description: 'Convierte tus archivos SVG a PNG nítidos a 1×, 2× o 4×, con fondo transparente. Por lotes, gratis, sin registro y sin subir ningún archivo.'
h1: 'Convertir SVG a PNG'
lead: 'Convierte tus logotipos, iconos e ilustraciones vectoriales SVG en imágenes PNG listas para usar, en alta definición. Todo se hace en tu navegador.'
what: 'tus archivos SVG'
howTo: 'convertir SVG a PNG'
steps:
  - 'Haz clic en <strong>Elegir archivos</strong> o arrastra tus archivos .svg al recuadro.'
  - 'Elige la <strong>Escala</strong>: 1× (tamaño definido en el SVG), 2× (por defecto, nítido en pantallas de alta densidad) o 4× (impresión, gran formato).'
  - 'Haz clic en <strong>Convertir</strong> y descarga tus PNG o todos con <strong>Descargar todo (ZIP)</strong>.'
limits:
  - 'No se cargan las fuentes web ni las imágenes externas a las que haga referencia el SVG: si el resultado no es correcto, convierte el texto en trazados en tu programa antes de exportar.'
  - 'Las animaciones SVG no se conservan: solo se exporta la imagen fija.'
  - 'Si el SVG no indica un tamaño, se usa su viewBox (o 512 px por defecto). Tamaño máximo: 20 MB por archivo.'
faq:
  - q: '¿Se conserva el fondo transparente?'
    a: 'Sí. Las zonas sin relleno del SVG siguen siendo transparentes en el PNG.'
  - q: '¿Qué escala elijo?'
    a: '1× da el tamaño definido en el archivo SVG. 2× duplica el ancho y el alto, lo que se ve nítido en pantallas Retina y teléfonos. 4× sirve para imprimir o para mostrar a muy gran tamaño.'
  - q: '¿Por qué mi texto aparece con otra fuente?'
    a: 'Si el SVG usa una fuente que no está incrustada en el archivo, el navegador la sustituye por una fuente por defecto. En Illustrator, Inkscape o Figma, convierte el texto en contornos o trazados antes de exportar el SVG.'
  - q: '¿Puedo crear un favicon a partir de un SVG?'
    a: 'Sí, usa directamente <a href="/es/png-a-ico">PNG a ICO</a>, que también acepta SVG y genera un archivo .ico con varios tamaños.'
  - q: '¿Se suben mis archivos a internet?'
    a: 'No, tu navegador renderiza el SVG en tu propio dispositivo.'
---

## Vectorial o mapa de bits: ¿por qué convertir?

El **SVG** es un formato **vectorial**: la imagen se describe con formas y curvas, no con píxeles. Se ve perfectamente nítida a cualquier tamaño, por eso es el formato ideal para logotipos e iconos en la web.

Pero muchos usos exigen una imagen de **mapa de bits** (en píxeles), como el **PNG**:

- **Redes sociales**: fotos de perfil, publicaciones y portadas no aceptan SVG;
- **Documentos de Word, PowerPoint o Google Slides**: el PNG se inserta en todas partes sin sorpresas;
- **Apps de mensajería y correo**: la mayoría de los clientes no muestran SVG;
- **Apps móviles, tiendas online y marketplaces** que piden un archivo de imagen convencional.

El PNG conserva la transparencia del SVG, así que es perfecto para un logotipo que vas a colocar sobre cualquier fondo.

## Elegir la escala adecuada

| Escala | Tamaño obtenido (SVG de 200 × 100) | Uso |
|---|---|---|
| 1× | 200 × 100 px | Web estándar, iconos pequeños |
| 2× | 400 × 200 px | Pantallas de alta densidad, presentaciones |
| 4× | 800 × 400 px | Impresión, imágenes grandes |

Como el SVG es vectorial, cada escala se calcula a partir de las formas originales: una exportación a 4× es realmente nítida, no una simple ampliación.

## Si el resultado no es el esperado

- **Fuente distinta**: convierte el texto en trazados en tu programa antes de exportar.
- **Falta una imagen incrustada**: las imágenes enlazadas por URL no se cargan; incrústalas en el SVG (en base64) o exporta directamente a PNG desde tu programa.
- **Imagen demasiado pequeña**: puede que el SVG defina un tamaño pequeño; usa la escala 4× en lugar de ampliar el PNG después. Y para obtener un tamaño exacto en píxeles, exporta a 4× y redúcelo con [Redimensionar imagen](/es/redimensionar-imagen).

## Exportar un conjunto de iconos

¿Tienes un set de iconos SVG que entregar en PNG para una app o una presentación? Arrástralos todos a la vez, elige la escala y descarga un ZIP. Cada archivo conserva su nombre original con la extensión .png.

¿Necesitas un JPG en lugar de un PNG (sin transparencia)? Convierte el resultado con [PNG a JPG](/es/png-a-jpg).

Tu navegador hace el renderizado en local: tus logotipos y maquetas sin publicar no se envían a ningún servidor.
