import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 60_000,
  testDir: './tests',
  retries: 1,
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
  use: {
    headless: true,
    viewport: { width: 1280, height: 800 },
    actionTimeout: 10_000,
    ignoreHTTPSErrors: true,
  }
});
