import { test as base } from '@playwright/test';
import ChatPage from '../pages/ChatPage.js';

/**
 * Extending the base Playwright test to include a ChatPage fixture.
 * This allows tests to access `chatPage` directly.
 */
export const test = base.extend({
  chatPage: async ({ page }, use) => {
    console.log('Initializing ChatPage fixture...');
    const chatPage = new ChatPage(page);
    await use(chatPage);
    console.log('ChatPage fixture teardown complete.');
  }
});

export { expect } from '@playwright/test';
