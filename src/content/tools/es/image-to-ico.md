---
name: 'PNG a ICO'
title: 'PNG a ICO: crea un favicon .ico multitamaño gratis'
description: 'Crea un favicon .ico con varios tamaños (de 16 a 256 px) a partir de un PNG, JPG, WebP o SVG. Gratis, sin registro y sin subir ningún archivo.'
h1: 'Convertir PNG a ICO (favicon)'
lead: 'Convierte tu logotipo en un archivo .ico con varios tamaños, listo para usarlo como favicon de tu web o como icono de Windows. Todo se hace en tu navegador.'
what: 'tu imagen'
howTo: 'crear un archivo ICO'
steps:
  - 'Haz clic en <strong>Elegir archivo</strong> o arrastra tu imagen (PNG, JPG, WebP o SVG) al recuadro. Lo ideal es una imagen cuadrada de al menos 256 × 256 px.'
  - 'Haz clic en <strong>Convertir</strong>: la herramienta genera automáticamente varios tamaños, de 16 a 256 px, en un único archivo .ico.'
  - 'Haz clic en <strong>Descargar</strong>, cambia el nombre del archivo a <code>favicon.ico</code> si hace falta y colócalo en la raíz de tu web.'
limits:
  - 'Una imagen que no sea cuadrada se encaja dentro de un formato cuadrado: para un mejor resultado, recorta tu logotipo en cuadrado antes de convertirlo.'
  - 'Un solo archivo cada vez. Tamaño máximo: 20 MB.'
  - 'Los detalles finos desaparecen a 16 × 16 px: un logotipo simplificado (inicial, símbolo) da un favicon más legible.'
faq:
  - q: '¿Qué tamaños contiene el archivo ICO?'
    a: 'Varios, de 16 × 16 a 256 × 256 px. El navegador o Windows eligen automáticamente el adecuado: 16 o 32 px en una pestaña y tamaños mayores para accesos directos y el escritorio.'
  - q: '¿Cómo añado el favicon a mi web?'
    a: 'Coloca <code>favicon.ico</code> en la raíz del sitio (por ejemplo, https://tuweb.com/favicon.ico): los navegadores lo buscan ahí. También puedes declararlo en el &lt;head&gt; con &lt;link rel="icon" href="/favicon.ico"&gt;.'
  - q: '¿Se conserva el fondo transparente de mi PNG?'
    a: 'Sí, el formato ICO admite transparencia: tu logotipo se verá limpio tanto en pestañas claras como oscuras.'
  - q: '¿Sigue haciendo falta un favicon .ico además de un PNG o un SVG?'
    a: 'Es recomendable: el archivo favicon.ico en la raíz sigue siendo la opción más compatible, sobre todo con algunos navegadores antiguos y herramientas que lo buscan por defecto.'
  - q: '¿Se sube mi logotipo a un servidor?'
    a: 'No, el archivo ICO se genera en tu navegador.'
---

## ¿Qué es un archivo ICO?

**ICO** es el formato de icono clásico de Windows, que los navegadores adoptaron para el **favicon**: la pequeña imagen que aparece en la pestaña, en los marcadores y en el historial. Su particularidad es que un solo archivo .ico puede contener **varias versiones de la misma imagen en distintos tamaños**. El sistema elige la más adecuada según dónde se muestre.

| Tamaño | Dónde se usa |
|---|---|
| 16 × 16 px | Pestaña del navegador, marcadores |
| 32 × 32 px | Barra de tareas, pestañas en pantallas de alta densidad |
| 48 × 48 px | Accesos directos y Explorador de Windows |
| 256 × 256 px | Iconos grandes |

## Preparar una buena imagen de partida

- **Cuadrada**: el favicon es cuadrado; un logotipo rectangular se reducirá para caber en el cuadrado.
- **Suficientemente grande**: parte de al menos 256 × 256 px para que el tamaño mayor se vea nítido. Un [SVG](/es/svg-a-png) es ideal porque se ve nítido a cualquier tamaño.
- **Sencilla**: a 16 px, un texto o un logotipo detallado se vuelve ilegible. Usa una inicial, un pictograma o una versión simplificada.
- **Con transparencia**: un PNG con fondo transparente se integra mejor en los temas claros y oscuros de los navegadores.

¿Tu imagen de partida es enorme (una foto de miles de píxeles)? Redúcela primero a 512 px de lado con [Redimensionar imagen](/es/redimensionar-imagen); el recorte en cuadrado puedes hacerlo en cualquier editor de imágenes.

## Instalar el favicon en tu web

1. Cambia el nombre del archivo a `favicon.ico`.
2. Súbelo a la raíz de tu web, junto a la página de inicio.
3. Si tu gestor de contenidos no lo hace ya, añade la línea `<link rel="icon" href="/favicon.ico">` en la cabecera de tus páginas.
4. Vacía la caché o prueba en una ventana de incógnito: los navegadores recuerdan el favicon anterior durante mucho tiempo.

En WordPress, Shopify o Wix, el «icono del sitio» suele configurarse desde los ajustes del tema; algunos piden un PNG en lugar de un ICO.

## Iconos de Windows

El formato ICO no solo sirve para webs: también es el formato de los iconos de Windows. Puedes usar el archivo para personalizar el icono de un acceso directo o de una carpeta (clic derecho > Propiedades > Personalizar > Cambiar icono) o para una pequeña aplicación que estés desarrollando. Los tamaños grandes incluidos en el archivo garantizan que se vea nítido en el escritorio.

La conversión se hace en local: tu logotipo, aunque todavía no lo hayas presentado, no se envía a ninguna parte.
