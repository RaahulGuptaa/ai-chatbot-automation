import { test, expect } from '../../fixtures/testFixtures.js';
import testData from '../../data/testData.json';
import { log, waitForPageLoad } from '../../utils/utils.js';

test('Chatbot Performance / Response Time Test', async ({ chatPage }) => {
  log(`Navigating to Chatbot URL: ${testData.testingUrl}`);
  await chatPage.goto(testData.testingUrl);
  await waitForPageLoad(chatPage.page); 
  log(`Page loaded: ${testData.testingUrl}`);

  const message = testData.chatInputMessage;
  log(`Sending message for performance test: "${message}"`);
  const startTime = new Date().getTime();

  await chatPage.sendMessage(message);
  const reply = await chatPage.getBotMessageText();
  log(`Bot reply received: "${reply}"`);
  expect(reply).toBeTruthy();
  log(`Bot reply verification passed`);

  const endTime = new Date().getTime();
  const responseTime = (endTime - startTime) / 1000;
  log(`Chatbot response time: ${responseTime} seconds`);

  expect(responseTime).toBeLessThanOrEqual(5);
  log(`Performance test passed (response ≤ 5 seconds)`);
});
