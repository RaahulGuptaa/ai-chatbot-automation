import { test, expect } from '../../fixtures/testFixtures.js';
import testData from '../../data/testData.json';
import { log, waitForPageLoad } from '../../utils/utils.js';

test('Verify Context Retention', async ({ chatPage }) => {
  log(`Navigating to Chatbot URL: ${testData.testingUrl}`);
  await chatPage.goto(testData.testingUrl);
  await waitForPageLoad(chatPage.page); 
  log(`Page loaded: ${testData.testingUrl}`);

  log(`Sending question about Taj Mahal: ${testData.tajMahalQues}`);
  await chatPage.sendMessage(testData.tajMahalQues);
  log(`Question sent`);

  const reply = await chatPage.getBotMessageText();
  log(`Bot reply received: "${reply}"`);

  expect(reply).toContain(testData.tajMahalLocation);
  log(`Context retention test passed`);
});
