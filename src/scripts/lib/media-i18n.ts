// Short user-facing messages for the media/image engines (progress labels and
// UserError details). Kept engine-side so the shared UI strings stay small;
// picks the page language from <html lang>, English as fallback.

const MESSAGES = {
  en: {
    downloadingEngine: 'Downloading the converter (one time only)… {pct}%',
    startingEngine: 'Starting the converter…',
    analysing: 'Reading the file…',
    converting: 'Converting…',
    palette: 'Analysing colours…',
    rendering: 'Rendering the GIF…',
    compressing: 'Compressing…',
    finishing: 'Finishing…',
    engineDownload: 'The converter could not be downloaded. Check your connection, disable any blocker for this site and try again.',
    noAudio: 'This file has no audio track.',
    noVideo: 'This file has no video track.',
    unreadable: 'The file looks damaged or uses a format we cannot read.',
    badTime: '“{v}” is not a valid time. Use seconds (90) or minutes:seconds (1:30).',
    endBeforeStart: 'The end time must be after the start time.',
    startTooLate: 'The start time is after the end of the file ({d}).',
    badNumber: '“{v}” is not a valid value.',
    audioImage: 'Add exactly one audio file, and optionally one image for the picture.',
    tooBig: 'This file is too large to process in the browser on this device.',
  },
  fr: {
    downloadingEngine: 'Téléchargement du convertisseur (une seule fois)… {pct} %',
    startingEngine: 'Démarrage du convertisseur…',
    analysing: 'Lecture du fichier…',
    converting: 'Conversion…',
    palette: 'Analyse des couleurs…',
    rendering: 'Création du GIF…',
    compressing: 'Compression…',
    finishing: 'Finalisation…',
    engineDownload: 'Le convertisseur n’a pas pu être téléchargé. Vérifiez votre connexion, désactivez tout bloqueur pour ce site et réessayez.',
    noAudio: 'Ce fichier ne contient pas de piste audio.',
    noVideo: 'Ce fichier ne contient pas de piste vidéo.',
    unreadable: 'Le fichier semble endommagé ou utilise un format illisible.',
    badTime: '« {v} » n’est pas un temps valide. Utilisez des secondes (90) ou minutes:secondes (1:30).',
    endBeforeStart: 'La fin doit être après le début.',
    startTooLate: 'Le début est après la fin du fichier ({d}).',
    badNumber: '« {v} » n’est pas une valeur valide.',
    audioImage: 'Ajoutez un seul fichier audio et, si vous voulez, une seule image.',
    tooBig: 'Ce fichier est trop volumineux pour être traité dans le navigateur sur cet appareil.',
  },
} as const;

export type MsgKey = keyof (typeof MESSAGES)['en'];

function lang(): keyof typeof MESSAGES {
  const l = (typeof document !== 'undefined' ? document.documentElement.lang : '').slice(0, 2).toLowerCase();
  return l in MESSAGES ? (l as keyof typeof MESSAGES) : 'en';
}

export function mt(key: MsgKey, vars: Record<string, string | number> = {}): string {
  const s: string = MESSAGES[lang()][key] ?? MESSAGES.en[key];
  return s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''));
}

/** 75.5 → "1:15.5", 3725 → "1:02:05". */
export function fmtTime(sec: number): string {
  const s = Math.max(0, sec);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const r = s % 60;
  const rs = (Math.round(r * 10) / 10).toString();
  const ss = r < 10 ? `0${rs}` : rs;
  return h ? `${h}:${String(m).padStart(2, '0')}:${ss}` : `${m}:${ss}`;
}
