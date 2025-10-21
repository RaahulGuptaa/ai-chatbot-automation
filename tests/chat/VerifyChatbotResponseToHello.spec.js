import { test, expect } from '../../fixtures/testFixtures.js';
import testData from '../../data/testData.json';
import { log, waitForPageLoad } from '../../utils/utils.js';

test('Verify Chatbot Response To Hello', async ({ chatPage }) => {
  log(`Navigating to Chatbot URL: ${testData.testingUrl}`);
  await chatPage.goto(testData.testingUrl);
  await waitForPageLoad(chatPage.page); 
  log(`Page loaded: ${testData.testingUrl}`);

  log(`Sending greeting message: ${testData.greetMessage}`);
  await chatPage.sendMessage(testData.greetMessage);
  log(`Greeting message sent`);

  const reply = await chatPage.getBotMessageText();
  log(`Bot reply received: "${reply}"`);

  expect(reply).toBeTruthy();
  log(`Greeting response test passed`);
});
