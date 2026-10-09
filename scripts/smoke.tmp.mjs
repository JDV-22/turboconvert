import { chromium } from '@playwright/test';
const [,, path, fixtures, ...opts] = process.argv;
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 }, acceptDownloads: true });
const errors = [];
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
await page.goto('http://localhost:4321' + path);

await page.setInputFiles('[data-input]', fixtures.split(','));
await page.screenshot({ path: '/tmp/claude-0/qa/files.png' });
const dl = page.waitForEvent('download', { timeout: 60000 }).catch(() => null);
await page.click('[data-convert]');
await page.waitForSelector('[data-tool-app][data-state="done"]', { timeout: 120000 });
const d = await dl;
await page.screenshot({ path: '/tmp/claude-0/qa/done.png' });
const results = await page.$$eval('[data-results] li', (l) => l.map((x) => x.textContent.trim().replace(/\s+/g, ' ')));
console.log('results:', results);
if (d) { const p = '/tmp/claude-0/qa/' + d.suggestedFilename(); await d.saveAs(p); console.log('downloaded', p); }
console.log('errors:', errors.filter((e) => !e.includes('_vercel')));
await browser.close();
