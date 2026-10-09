import type { LocalePack } from '../packs';

// Spanish (neutral, understandable in Spain and Latin America). Informal “tú”.
// Slugs are keyword-first, matching how people search: “comprimir pdf”,
// “unir pdf”, “pdf a word”, “quitar audio video”…
const es: LocalePack = {
  slugs: {
    tools: {
      // PDF
      'compress-pdf': 'comprimir-pdf',
      'merge-pdf': 'unir-pdf',
      'split-pdf': 'dividir-pdf',
      'rotate-pdf': 'girar-pdf',
      'organize-pdf': 'organizar-pdf',
      'pdf-to-jpg': 'pdf-a-jpg',
      'pdf-to-png': 'pdf-a-png',
      'jpg-to-pdf': 'jpg-a-pdf',
      'png-to-pdf': 'png-a-pdf',
      'add-page-numbers': 'numerar-paginas-pdf',
      'watermark-pdf': 'marca-de-agua-pdf',
      'protect-pdf': 'proteger-pdf',
      'unlock-pdf': 'desbloquear-pdf',
      'pdf-to-text': 'pdf-a-texto',
      'ocr-pdf': 'ocr-pdf',
      // Documents
      'pdf-to-word': 'pdf-a-word',
      'word-to-pdf': 'word-a-pdf',
      'pdf-to-excel': 'pdf-a-excel',
      'excel-to-pdf': 'excel-a-pdf',
      'pdf-to-ppt': 'pdf-a-ppt',
      'ppt-to-pdf': 'ppt-a-pdf',
      'word-to-jpg': 'word-a-jpg',
      // Images
      'compress-image': 'comprimir-imagen',
      'resize-image': 'redimensionar-imagen',
      'heic-to-jpg': 'heic-a-jpg',
      'heic-to-png': 'heic-a-png',
      'png-to-jpg': 'png-a-jpg',
      'jpg-to-png': 'jpg-a-png',
      'webp-to-jpg': 'webp-a-jpg',
      'webp-to-png': 'webp-a-png',
      'jpg-to-webp': 'jpg-a-webp',
      'png-to-webp': 'png-a-webp',
      'svg-to-png': 'svg-a-png',
      'avif-to-jpg': 'avif-a-jpg',
      'image-to-ico': 'png-a-ico',
      // Video
      'mp4-to-mp3': 'mp4-a-mp3',
      'video-to-gif': 'video-a-gif',
      'compress-video': 'comprimir-video',
      'trim-video': 'cortar-video',
      'mute-video': 'quitar-audio-video',
      'mov-to-mp4': 'mov-a-mp4',
      'webm-to-mp4': 'webm-a-mp4',
      'mkv-to-mp4': 'mkv-a-mp4',
      'mp3-to-mp4': 'mp3-a-mp4',
      // Audio
      'wav-to-mp3': 'wav-a-mp3',
      'mp3-to-wav': 'mp3-a-wav',
      'm4a-to-mp3': 'm4a-a-mp3',
      'ogg-to-mp3': 'ogg-a-mp3',
      'flac-to-mp3': 'flac-a-mp3',
      'audio-converter': 'convertidor-audio',
      'trim-audio': 'cortar-audio',
    },
    categories: {
      pdf: 'herramientas-pdf',
      image: 'herramientas-imagen',
      document: 'herramientas-documentos',
      video: 'herramientas-video',
      audio: 'herramientas-audio',
    },
    pages: {
      about: 'acerca-de',
      contact: 'contacto',
      privacy: 'privacidad',
      terms: 'terminos',
      blog: 'blog',
      tools: 'herramientas',
    },
  },

  home: {
    title: 'Convertidor de archivos gratis — PDF, imagen, video, sin subir',
    description: 'Convierte PDF, Word, Excel, imágenes, audio y video gratis. Más de 50 herramientas en tu navegador: sin subir archivos, sin registro y sin marca de agua.',
    faq: [
      { q: '¿TurboConvert es realmente gratis?', a: 'Sí. Todas las herramientas son gratuitas, sin cuenta, sin límite diario y sin marca de agua. El sitio se financia con publicidad discreta, nunca cobrando por tus conversiones.' },
      { q: '¿Mis archivos se suben a un servidor?', a: 'No. Las conversiones se ejecutan dentro de tu navegador gracias a versiones WebAssembly de motores de código abierto (Ghostscript, FFmpeg, PDF.js, pdf-lib). Tus archivos se quedan en tu dispositivo, y puedes comprobarlo en la pestaña Red de tu navegador.' },
      { q: '¿Hay un límite de tamaño de archivo?', a: 'Depende de la herramienta (normalmente de 100 MB a 1 GB) y, sobre todo, de la memoria de tu dispositivo, ya que el trabajo se hace en local. Una computadora maneja los archivos grandes con más soltura que un teléfono.' },
      { q: '¿Funciona en iPhone, Android, Mac y Windows?', a: 'Sí. TurboConvert funciona en cualquier navegador actual —Safari, Chrome, Edge, Firefox— en teléfonos, tabletas y computadoras. No hay nada que instalar.' },
      { q: '¿Por qué la primera conversión de video u OCR tarda más?', a: 'Algunas herramientas necesitan un motor pesado (por ejemplo, FFmpeg para video, unos 31 MB). Se descarga una sola vez y tu navegador lo guarda en caché, así que las siguientes conversiones empiezan al instante.' },
      { q: '¿Puedo usar TurboConvert sin conexión?', a: 'Una vez cargadas la página de una herramienta y su motor, la conversión ya no necesita internet. Puedes desconectarte y seguir convirtiendo en esa página.' },
    ],
    body: `<h2>Un convertidor que respeta tus archivos</h2>
<p>La mayoría de los convertidores en línea funcionan igual: subes tu documento a sus servidores, esperas en una cola y luego descargas el resultado, confiando en que borren tu archivo como prometen. TurboConvert hace lo contrario: es el programa de conversión el que llega a tu navegador, y tus archivos nunca salen de tu dispositivo. Es más rápido (sin subidas ni colas), más seguro (no hay nada que pueda filtrarse) y sigue funcionando aunque tu conexión sea lenta.</p>
<h2>Qué puedes hacer</h2>
<ul>
<li><strong>PDF</strong>: comprimir, unir, dividir, girar, numerar páginas, añadir una marca de agua, proteger o desbloquear, convertir de y a JPG y PNG, extraer el texto y aplicar OCR a documentos escaneados.</li>
<li><strong>Documentos</strong>: convertir PDF a Word, Excel o PowerPoint, y Word, Excel o PowerPoint a PDF.</li>
<li><strong>Imágenes</strong>: convertir HEIC (fotos de iPhone), WebP, AVIF, PNG, JPG y SVG, comprimir y redimensionar por lotes, crear favicons.</li>
<li><strong>Video y audio</strong>: extraer el MP3 de un video, convertir MOV, WebM y MKV a MP4, crear GIF, comprimir y cortar videos, convertir WAV, M4A, OGG y FLAC.</li>
</ul>`,
  },

  hubs: {
    all: {
      title: 'Todas las herramientas gratis — convertir PDF, imagen, video',
      description: 'Todas las herramientas de TurboConvert en un solo lugar: convertidores de PDF, Word, Excel, imágenes, video y audio en tu navegador. Gratis y privado.',
      h1: 'Todas las herramientas',
      lead: 'Todos los convertidores y editores de TurboConvert. Gratuitos y ejecutados de forma privada en tu navegador.',
      body: '',
    },
    pdf: {
      title: 'Herramientas PDF gratis en línea — comprimir, unir, convertir',
      description: 'Comprime, une, divide, gira, protege y convierte tus PDF gratis, directamente en tu navegador. Sin subir archivos y sin registro.',
      h1: 'Herramientas PDF',
      lead: 'Todo lo que necesitas para trabajar con PDF —comprimir, unir, dividir, convertir, proteger— procesado en tu propio dispositivo.',
      body: `<h2>Edita y convierte PDF sin subirlos</h2>
<p>Los PDF suelen contener justo los documentos que menos queremos compartir: contratos, nóminas, declaraciones de impuestos, documentos de identidad. Las herramientas PDF de TurboConvert usan los mismos motores de código abierto que el software profesional —Ghostscript para comprimir, PDF.js para mostrar las páginas y pdf-lib para editar—, pero dentro de tu navegador, así que tus archivos no viajan a ningún servidor.</p>
<h2>¿Qué herramienta PDF necesitas?</h2>
<ul>
<li><strong>¿Archivo demasiado pesado para un correo?</strong> Usa <a href="/es/comprimir-pdf">Comprimir PDF</a>: los documentos escaneados suelen reducirse a menos de la mitad.</li>
<li><strong>¿Varios documentos que enviar como uno solo?</strong> <a href="/es/unir-pdf">Unir PDF</a> los combina en el orden que elijas.</li>
<li><strong>¿Solo necesitas algunas páginas?</strong> <a href="/es/dividir-pdf">Dividir PDF</a> extrae rangos de páginas.</li>
<li><strong>¿Necesitas editar el texto?</strong> Conviértelo con <a href="/es/pdf-a-word">PDF a Word</a>.</li>
<li><strong>¿Documento escaneado?</strong> Haz que su texto sea utilizable con <a href="/es/ocr-pdf">OCR PDF</a>.</li>
</ul>`,
    },
    document: {
      title: 'Convertir PDF a Word, Excel y PowerPoint — gratis en línea',
      description: 'Convierte PDF a Word, Excel o PowerPoint y viceversa, gratis y en tu navegador. Archivos editables, sin subir nada, sin registro ni marca de agua.',
      h1: 'Convertidores de documentos',
      lead: 'Convierte tus PDF en archivos de Word, Excel y PowerPoint editables —y tus documentos de Office en PDF— sin subirlos a ninguna parte.',
      body: `<h2>Documentos de Office convertidos en tu dispositivo</h2>
<p>Convertir entre PDF y formatos de Office suele implicar confiar tus informes, facturas o presentaciones a un sitio web. Aquí la conversión se ejecuta en local, en tu navegador: el PDF se analiza página a página para reconstruir párrafos, títulos, tablas e imágenes, y los archivos de Office se convierten a PDF sin salir de tu equipo.</p>
<p>Si el PDF está escaneado (una foto de un papel), aplica primero el <a href="/es/ocr-pdf">OCR</a> para que se reconozca el texto.</p>`,
    },
    image: {
      title: 'Convertidor y compresor de imágenes gratis — HEIC, WebP, JPG',
      description: 'Convierte HEIC, WebP, AVIF, PNG, JPG y SVG, y comprime o redimensiona imágenes por lotes, gratis en tu navegador. Sin subir archivos ni registrarte.',
      h1: 'Herramientas de imagen',
      lead: 'Convierte, comprime y redimensiona fotos y gráficos por lotes: HEIC de iPhone, WebP, AVIF, PNG, JPG, SVG y más.',
      body: `<h2>Conversión de imágenes por lotes, en tu navegador</h2>
<p>Suelta una foto o unos cuantos cientos: tu navegador decodifica y vuelve a codificar las imágenes con su propio motor gráfico (más un decodificador WebAssembly para las fotos HEIC del iPhone) y te las ofrece una a una o en un único ZIP. No se sube nada, y eso también lo hace rápido: no hay tiempo de transferencia.</p>
<h2>Cómo elegir el formato</h2>
<ul>
<li><strong>JPG</strong>: fotos, máxima compatibilidad.</li>
<li><strong>PNG</strong>: capturas de pantalla, logotipos, transparencia, sin pérdida.</li>
<li><strong>WebP</strong>: formato web moderno, entre un 25 y un 35 % más ligero que el JPG, admite transparencia.</li>
<li><strong>HEIC</strong>: formato de fotos del iPhone; conviértelo a JPG para Windows, Android y sitios web.</li>
</ul>`,
    },
    video: {
      title: 'Convertidor de video gratis — MP4, MOV, GIF, comprimir video',
      description: 'Convierte MOV, WebM y MKV a MP4, extrae el MP3 de un video, crea GIF, comprime y corta videos: gratis, privado y en tu navegador. Sin subir nada.',
      h1: 'Herramientas de video',
      lead: 'Convierte, comprime, corta y transforma videos en GIF o MP3, con FFmpeg funcionando de forma privada en tu navegador.',
      body: `<h2>FFmpeg en tu navegador</h2>
<p>Las herramientas de video de TurboConvert usan FFmpeg —el motor que hay detrás de la mayoría del software de video profesional— compilado a WebAssembly. El motor (unos 31 MB) se descarga una sola vez y luego queda en caché. Como tu video nunca se sube, no tienes que esperar a que se transfieran 500 MB antes de que empiece la conversión.</p>
<p>La velocidad depende de tu dispositivo: para videos largos o de alta resolución se recomienda una computadora reciente.</p>`,
    },
    audio: {
      title: 'Convertidor de audio gratis — MP3, WAV, M4A, FLAC, OGG',
      description: 'Convierte WAV, M4A, FLAC y OGG a MP3, MP3 a WAV y corta archivos de audio: gratis, en tu navegador con FFmpeg. Sin subir archivos ni registrarte.',
      h1: 'Herramientas de audio',
      lead: 'Convierte entre MP3, WAV, M4A, AAC, OGG, FLAC y OPUS, o corta una pista, en local y sin subir nada.',
      body: `<h2>¿Con pérdida o sin pérdida?</h2>
<p><strong>MP3, M4A (AAC), OGG y OPUS</strong> son formatos con pérdida: archivos ligeros, ideales para escuchar y compartir. <strong>WAV y FLAC</strong> conservan todos los detalles: el WAV no tiene compresión y es universal en los editores de audio; el FLAC comprime sin pérdida. Convertir un archivo con pérdida a un formato sin pérdida no recupera la calidad perdida: solo hace el archivo más grande.</p>`,
    },
  },
};

export default es;
