import { chromium } from '@playwright/test';
import fs from 'node:fs';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const p = await b.newPage();
const src = 'data:image/png;base64,' + fs.readFileSync('/tmp/claude-0/brand/icon-512.png').toString('base64');
const out = await p.evaluate(async (src) => {
  const img = new Image(); img.src = src; await img.decode();
  const res = {};
  for (const s of [512, 192, 180, 48, 32, 16]) {
    const c = document.createElement('canvas'); c.width = c.height = s;
    const ctx = c.getContext('2d'); ctx.imageSmoothingQuality = 'high';
    if (s === 180) { ctx.fillStyle = '#0d0f12'; ctx.fillRect(0, 0, s, s); }
    ctx.drawImage(img, 0, 0, s, s);
    res[s] = c.toDataURL('image/png').split(',')[1];
  }
  return res;
}, src);
await b.close();
const buf = (s) => Buffer.from(out[s], 'base64');
fs.writeFileSync('public/icon-512.png', buf(512));
fs.writeFileSync('public/icon-192.png', buf(192));
fs.writeFileSync('public/apple-touch-icon.png', buf(180));
// ICO with PNG-encoded 16/32/48 entries
const sizes = [16, 32, 48];
const imgs = sizes.map(buf);
const header = Buffer.alloc(6); header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(sizes.length, 4);
let offset = 6 + 16 * sizes.length;
const dir = Buffer.concat(sizes.map((s, i) => { const e = Buffer.alloc(16); e.writeUInt8(s, 0); e.writeUInt8(s, 1); e.writeUInt16LE(1, 4); e.writeUInt16LE(32, 6); e.writeUInt32LE(imgs[i].length, 8); e.writeUInt32LE(offset, 12); offset += imgs[i].length; return e; }));
fs.writeFileSync('public/favicon.ico', Buffer.concat([header, dir, ...imgs]));
console.log('icons ok');
