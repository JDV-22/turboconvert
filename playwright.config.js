// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 90_000,          // 90s par test (FFmpeg est lourd)
  expect: { timeout: 60_000 },
  fullyParallel: false,     // séquentiel pour ne pas saturer la CI
  retries: process.env.CI ? 1 : 0,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['github'],             // annotations inline dans les PR GitHub
  ],
  use: {
    baseURL: process.env.BASE_URL || 'https://turboconvert.io',
    headless: true,
    viewport: { width: 1280, height: 720 },
    // Ignorer les erreurs CORS des AdSense en CI
    ignoreHTTPSErrors: true,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
