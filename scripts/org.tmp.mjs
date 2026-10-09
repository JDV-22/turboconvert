import { chromium } from '@playwright/test';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const p = await b.newPage({ viewport: { width: 1280, height: 1000 }, acceptDownloads: true });
p.on('pageerror', (e) => console.log('ERR', e.message));
await p.goto('http://localhost:4321/organize-pdf');
await p.setInputFiles('[data-input]', '/tmp/claude-0/qa/six.pdf');
await p.waitForFunction(() => document.querySelectorAll('.org-page img').length === 6, null, { timeout: 30000 });
// rotate page 2, delete page 3, move page 6 left twice
await p.click('button[aria-label="Rotate page 2"]');
await p.click('button[aria-label="Delete page 3"]');
await p.click('button[aria-label="Move page 6 left"]');
await p.screenshot({ path: '/tmp/claude-0/qa/org.png' });
const dl = p.waitForEvent('download');
await p.click('[data-convert]');
const d = await dl; await d.saveAs('/tmp/claude-0/qa/org-out.pdf');
await b.close();
