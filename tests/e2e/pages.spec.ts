import { test, expect } from '@playwright/test';
import fs from 'node:fs';

// Every URL in the sitemap loads, has one H1, a canonical and no page errors.
const sitemap = fs.readFileSync('dist/sitemap.xml', 'utf8');
const urls = [...sitemap.matchAll(/<loc>https:\/\/turboconvert\.io([^<]*)<\/loc>/g)].map((m) => m[1] || '/');

for (const url of urls) {
  test(`page ${url}`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(e.message));
    const res = await page.goto(url);
    expect(res?.status()).toBe(200);
    await expect(page.locator('h1')).toHaveCount(1);
    const canonical = await page.locator('link[rel=canonical]').getAttribute('href');
    expect(canonical).toBe(`https://turboconvert.io${url === '/' ? '/' : url}`);
    const title = await page.title();
    expect(title.length).toBeGreaterThan(10);
    expect(title.length).toBeLessThanOrEqual(70);
    const broken = await page.$$eval('a[href^="/"]', (as) => as.map((a) => a.getAttribute('href')!));
    for (const href of new Set(broken)) {
      const clean = href.split('#')[0];
      if (!clean || clean === '/') continue;
      expect(fs.existsSync(`dist${clean}.html`) || fs.existsSync(`dist${clean}`), `broken link ${href} on ${url}`).toBe(true);
    }
    expect(errors).toEqual([]);
  });
}
