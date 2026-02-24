// TurboConvert — schema-inject.js
// Ajouter dans chaque page HTML : <script src='/schema-inject.js'></script> avant </body>
// Injecte automatiquement Schema.org WebApplication + HowTo + FAQ + Breadcrumb
(function(){
  var slug = window.location.pathname.replace(/^\//,'').replace(/\.html$/,'');
  var tools = {
    "pdf-to-word": {name:"PDF to Word Converter",desc:"Convert PDF to editable Word document online for free. No signup needed.",inp:"PDF",out:"DOCX"},
    "word-to-pdf": {name:"Word to PDF Converter",desc:"Convert Word DOCX to PDF online for free. Perfect formatting.",inp:"DOCX",out:"PDF"},
    "compress-pdf": {name:"Compress PDF Online Free",desc:"Reduce PDF file size online for free without losing quality.",inp:"PDF",out:"PDF"},
    "pdf-to-jpg": {name:"PDF to JPG Converter",desc:"Convert PDF pages to JPG images online for free.",inp:"PDF",out:"JPG"},
    "merge-pdf": {name:"Merge PDF Files Online",desc:"Combine multiple PDF files into one document for free.",inp:"PDF",out:"PDF"},
    "split-pdf": {name:"Split PDF Online Free",desc:"Split PDF into separate pages online for free.",inp:"PDF",out:"PDF"},
    "pdf-to-excel": {name:"PDF to Excel Converter",desc:"Extract PDF tables to Excel spreadsheet for free.",inp:"PDF",out:"XLSX"},
    "rotate-pdf": {name:"Rotate PDF Pages Online",desc:"Rotate PDF pages to fix orientation for free.",inp:"PDF",out:"PDF"},
    "excel-to-pdf": {name:"Excel to PDF Converter",desc:"Convert Excel spreadsheets to PDF for free.",inp:"XLSX",out:"PDF"},
    "ppt-to-pdf": {name:"PowerPoint to PDF Converter",desc:"Convert PowerPoint to PDF online for free.",inp:"PPTX",out:"PDF"},
    "pdf-to-ppt": {name:"PDF to PowerPoint Converter",desc:"Convert PDF to editable PowerPoint for free.",inp:"PDF",out:"PPTX"},
    "word-to-jpg": {name:"Word to JPG Converter",desc:"Convert Word documents to JPG images for free.",inp:"DOCX",out:"JPG"},
    "jpg-to-pdf": {name:"JPG to PDF Converter",desc:"Convert JPG images to PDF online for free.",inp:"JPG",out:"PDF"},
    "png-to-jpg": {name:"PNG to JPG Converter",desc:"Convert PNG to JPG online for free.",inp:"PNG",out:"JPG"},
    "compress-image": {name:"Compress Image Online Free",desc:"Compress images online for free without quality loss.",inp:"Image",out:"Image"},
    "heic-to-jpg": {name:"HEIC to JPG Converter",desc:"Convert iPhone HEIC photos to JPG for free.",inp:"HEIC",out:"JPG"},
    "webp-to-jpg": {name:"WebP to JPG Converter",desc:"Convert WebP to JPG online for free.",inp:"WebP",out:"JPG"},
    "jpg-to-png": {name:"JPG to PNG Converter",desc:"Convert JPG to PNG with transparency for free.",inp:"JPG",out:"PNG"},
    "mp4-to-mp3": {name:"MP4 to MP3 Converter",desc:"Extract audio from MP4 and convert to MP3 online for free. No upload needed.",inp:"MP4",out:"MP3"},
    "wav-to-mp3": {name:"WAV to MP3 Converter",desc:"Convert WAV to MP3 online for free. Reduce file size 10x.",inp:"WAV",out:"MP3"},
    "mp3-to-wav": {name:"MP3 to WAV Converter",desc:"Convert MP3 to WAV online for free. Perfect for audio editing.",inp:"MP3",out:"WAV"},
    "mp3-to-mp4": {name:"MP3 to MP4 Converter",desc:"Convert MP3 to MP4 video online for free. Upload to YouTube.",inp:"MP3",out:"MP4"},
  };
  var t = tools[slug]; if(!t) return;
  var schema = {
    "@context":"https://schema.org",
    "@graph":[
      {"@type":"WebApplication","@id":"https://turboconvert.io/"+slug+"#app",
       "name":t.name,"description":t.desc,"url":"https://turboconvert.io/"+slug,
       "applicationCategory":"UtilitiesApplication","operatingSystem":"Any",
       "offers":{"@type":"Offer","price":"0","priceCurrency":"USD","availability":"https://schema.org/InStock"},
       "featureList":["Free "+t.inp+" to "+t.out+" conversion","No signup required","SSL encrypted","Files deleted after processing"],
       "publisher":{"@type":"Organization","name":"TurboConvert","url":"https://turboconvert.io"}},
      {"@type":"HowTo","name":"How to convert "+t.inp+" to "+t.out+" online for free",
       "description":"Convert "+t.inp+" to "+t.out+" in 3 steps — free, fast, secure.",
       "totalTime":"PT10S","step":[
         {"@type":"HowToStep","position":1,"name":"Upload your "+t.inp+" file","text":"Click Select file or drag and drop your "+t.inp+" file."},
         {"@type":"HowToStep","position":2,"name":"Convert to "+t.out,"text":"Click Convert. Your file is processed instantly."},
         {"@type":"HowToStep","position":3,"name":"Download your "+t.out,"text":"Click Download to save your converted file."}
       ]},
      {"@type":"FAQPage","mainEntity":[
        {"@type":"Question","name":"Is this "+t.inp+" to "+t.out+" converter free?","acceptedAnswer":{"@type":"Answer","text":"Yes, TurboConvert is 100% free. No signup, no credit card, no limits."}},
        {"@type":"Question","name":"Is my file safe?","acceptedAnswer":{"@type":"Answer","text":"Yes. SSL encrypted. Files are permanently deleted after 1 hour."}},
        {"@type":"Question","name":"Do I need software?","acceptedAnswer":{"@type":"Answer","text":"No. Works in your browser on any device. No installation needed."}}
      ]},
      {"@type":"BreadcrumbList","itemListElement":[
        {"@type":"ListItem","position":1,"name":"TurboConvert","item":"https://turboconvert.io"},
        {"@type":"ListItem","position":2,"name":t.name,"item":"https://turboconvert.io/"+slug}
      ]}
    ]
  };
  var s = document.createElement('script');
  s.type = 'application/ld+json';
  s.text = JSON.stringify(schema);
  document.head.appendChild(s);
})();