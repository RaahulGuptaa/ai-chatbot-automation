/**
 * Logs messages to the console with a timestamp.
 * @param {string} message - The message to log.
 */
export const log = (message) => {
  console.log(`[LOG - ${new Date().toISOString()}] ${message}`);
};

/**
 * Waits for the page to finish loading (DOM content loaded) and logs the process.
 * @param {import('playwright').Page} page - The Playwright page object.
 */
export const waitForPageLoad = async (page) => {
  console.log(`[LOG - ${new Date().toISOString()}] Waiting for page to load...`);
  await page.waitForLoadState('domcontentloaded');
  console.log(`[LOG - ${new Date().toISOString()}] Page loaded`);
};

