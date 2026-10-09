import { defineConfig } from '@playwright/test';

const local = !process.env.CI;
export default defineConfig({
  testDir: 'tests/e2e',
  timeout: 180_000,
  fullyParallel: true,
  workers: process.env.CI ? 2 : 4,
  retries: 0,
  reporter: process.env.CI ? [['github'], ['list']] : 'list',
  use: {
    baseURL: 'http://localhost:4321',
    acceptDownloads: true,
    ...(local ? { launchOptions: { executablePath: '/opt/pw-browsers/chromium' } } : {}),
  },
  webServer: {
    command: 'node scripts/serve.mjs dist',
    url: 'http://localhost:4321',
    reuseExistingServer: true,
  },
});
