import { test, expect } from '../../fixtures/testFixtures.js';
import testData from '../../data/testData.json';
import { log, waitForPageLoad } from '../../utils/utils.js';

test('Verify Chatbot can Handle Invalid Input', async ({ chatPage }) => {
  log(`Navigating to URL: ${testData.testingUrl}`);
  await chatPage.goto(testData.testingUrl);
  await waitForPageLoad(chatPage.page); 
  log(`Page loaded: ${testData.testingUrl}`);

  log(`Sending invalid input: ${testData.invalidInput}`);
  await chatPage.sendMessage(testData.invalidInput);
  log(`Invalid input sent.`);

  const reply = await chatPage.getBotMessageText();
  log(`Bot reply received: "${reply}"`);

  expect(reply).toBeTruthy();
  log(`Invalid input handling test passed.`);
});
