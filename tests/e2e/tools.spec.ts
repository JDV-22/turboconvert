import { test, expect } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';
import { TOOLS } from '../../src/data/tools';

// Runs a real conversion on every published tool page with a fixture file and
// checks that a non-empty result is produced without page errors.
const FIX = path.resolve('tests/fixtures');
const fixtureFor = (ext: string) => {
  const f = fs.readdirSync(FIX).find((n) => n.startsWith('sample.') && n.endsWith(`.${ext}`));
  return f ? path.join(FIX, f) : undefined;
};

// Tools that need specific options or several files.
const SETUP: Record<string, { files?: string[]; options?: Record<string, string> }> = {
  'merge-pdf': { files: ['sample.pdf', 'sample.pdf'] },
  'protect-pdf': { options: { password: 'secret-123' } },
  'unlock-pdf': { files: ['sample-protected.pdf'], options: { password: 'secret-123' } },
  'split-pdf': { options: { ranges: '1-2, 3' } },
  'trim-video': { options: { start: '0', end: '2' } },
  'trim-audio': { options: { start: '0', end: '2' } },
};

const dist = path.resolve('dist');
for (const tool of TOOLS) {
  const slug = tool.slugs.en;
  if (!slug || !fs.existsSync(path.join(dist, `${slug}.html`))) continue;
  const setup = SETUP[tool.id] ?? {};
  const files = setup.files?.map((f) => path.join(FIX, f)) ?? tool.accept.map(fixtureFor).filter(Boolean).slice(0, 1) as string[];

  test(`${tool.id} converts`, async ({ page }) => {
    test.skip(!files.length || !files.every((f) => fs.existsSync(f)), `no fixture for ${tool.accept.join(',')}`);
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(e.message));
    await page.goto(`/${slug}`);
    await page.setInputFiles('[data-input]', files);
    for (const [name, value] of Object.entries(setup.options ?? {})) {
      await page.fill(`[data-options] [name="${name}"]`, value);
    }
    if (tool.engine === 'pdf-organize') await page.waitForSelector('.org-page img');
    await page.click('[data-convert]');
    await expect(page.locator('[data-tool-app]')).toHaveAttribute('data-state', 'done', { timeout: 170_000 });
    await expect(page.locator('[data-done-icon]')).toHaveAttribute('data-ok', 'true');
    const failed = await page.locator('[data-results] .is-error').count();
    expect(failed, await page.locator('[data-results]').innerText()).toBe(0);
    expect(errors).toEqual([]);
  });
}
