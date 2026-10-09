// Short user-facing messages for the PDF engines, in the page's language.
// The runtime shows them after its generic "Something went wrong…" line.

const MESSAGES = {
  en: {
    rangesEmpty: 'Type the pages to extract, for example 1-3, 5.',
    rangesBad: '“{part}” is not a valid page range. This PDF has {n} pages.',
    passwordEmpty: 'Type the password you want to set.',
    notEncrypted: 'This PDF is not password-protected, so there is nothing to remove.',
    noText: 'This PDF has no text layer — it looks like a scan or a photo. Use OCR PDF to recognize the text.',
    noTextOcr: 'No text was recognized. Check the document language, or try a sharper scan.',
    watermarkEmpty: 'Type the watermark text.',
    ocrDownload: 'The text-recognition data could not be downloaded. Check your internet connection and try again.',
    imageUnreadable: '“{name}” could not be read as an image. Remove it and try again.',
    tooLarge: 'This file is too large for your device’s memory. Try a smaller file, or close other tabs.',
    damaged: 'The file looks damaged or is not a valid PDF.',
    of: 'of',
    page: 'Page',
  },
  fr: {
    rangesEmpty: 'Indiquez les pages à extraire, par exemple 1-3, 5.',
    rangesBad: '« {part} » n’est pas une plage de pages valide. Ce PDF compte {n} pages.',
    passwordEmpty: 'Saisissez le mot de passe à définir.',
    notEncrypted: 'Ce PDF n’est pas protégé par mot de passe : il n’y a rien à retirer.',
    noText: 'Ce PDF n’a pas de couche texte : c’est probablement un scan ou une photo. Utilisez l’outil OCR PDF pour reconnaître le texte.',
    noTextOcr: 'Aucun texte n’a été reconnu. Vérifiez la langue du document ou essayez un scan plus net.',
    watermarkEmpty: 'Saisissez le texte du filigrane.',
    ocrDownload: 'Les données de reconnaissance du texte n’ont pas pu être téléchargées. Vérifiez votre connexion et réessayez.',
    imageUnreadable: '« {name} » n’a pas pu être lu comme image. Retirez-le et réessayez.',
    tooLarge: 'Ce fichier est trop volumineux pour la mémoire de votre appareil. Essayez un fichier plus petit ou fermez d’autres onglets.',
    damaged: 'Le fichier semble endommagé ou n’est pas un PDF valide.',
    of: 'sur',
    page: 'Page',
  },
} as const;

export type MsgKey = keyof (typeof MESSAGES)['en'];

export function msg(key: MsgKey, vars: Record<string, string | number> = {}): string {
  const lang = (typeof document !== 'undefined' ? document.documentElement.lang : 'en').slice(0, 2).toLowerCase();
  const table = (MESSAGES as Record<string, Record<MsgKey, string>>)[lang] ?? MESSAGES.en;
  return table[key].replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''));
}
