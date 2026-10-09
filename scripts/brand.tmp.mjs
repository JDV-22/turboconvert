import { chromium } from '@playwright/test';
import fs from 'node:fs';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const tpl = fs.readFileSync('/tmp/claude-0/brand/og.html', 'utf8');
const variants = {
  default: { LOCK_TEXT: 'No upload · 100% in your browser', H1A: 'Convert any file.', H1B: 'Right in your browser.', SUB: 'Free · No sign-up · No watermark · Your files never leave your device', IMG_LABEL: 'Images', VIDEO_LABEL: 'Video' },
  'default-fr': { LOCK_TEXT: 'Aucun envoi · 100 % dans le navigateur', H1A: 'Convertissez tout.', H1B: 'Dans votre navigateur.', SUB: 'Gratuit · Sans inscription · Sans filigrane · Vos fichiers restent chez vous', IMG_LABEL: 'Images', VIDEO_LABEL: 'Vidéo' },
};
fs.mkdirSync('public/og', { recursive: true });
for (const [name, v] of Object.entries(variants)) {
  let html = tpl; for (const [k, val] of Object.entries(v)) html = html.replaceAll(k, val);
  fs.writeFileSync(`/tmp/claude-0/brand/${name}.html`, html);
  const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
  await p.goto(`file:///tmp/claude-0/brand/${name}.html`); await p.waitForTimeout(300);
  await p.screenshot({ path: `public/og/${name}.png` }); await p.close();
}
const p = await b.newPage({ viewport: { width: 512, height: 512 } });
await p.goto('file:///tmp/claude-0/brand/icon.html');
for (const s of [512, 192, 180, 48, 32, 16]) {
  await p.setViewportSize({ width: 512, height: 512 });
  const buf = await p.screenshot({ omitBackground: true, clip: { x: 0, y: 0, width: 512, height: 512 } });
  fs.writeFileSync(`/tmp/claude-0/brand/icon-512.png`, buf);
  break;
}
await b.close();
