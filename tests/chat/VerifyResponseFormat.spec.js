import { test, expect } from '../../fixtures/testFixtures.js';
import testData from '../../data/testData.json';
import { log, waitForPageLoad } from '../../utils/utils.js';

test('Verify Response Format', async ({ chatPage }) => {
  log(`Navigating to Chatbot URL: ${testData.testingUrl}`);
  await chatPage.goto(testData.testingUrl);
  await waitForPageLoad(chatPage.page); 
  log(`Page loaded: ${testData.testingUrl}`);

  log(`Sending date question: "${testData.randomQuestion}"`);
  await chatPage.sendMessage(testData.randomQuestion);
  const reply = await chatPage.getBotMessageText();
  log(`Bot reply received: "${reply}"`);
  expect(reply).toMatch(/\d+/);
  log(`Date format verification passed`);

  log(`Sending calculation question: "${testData.randomCalculation_2}"`);
  await chatPage.sendMessage(testData.randomCalculation_2);
  const reply3 = await chatPage.getBotMessageText();
  log(`Bot reply received: "${reply3}"`);
  expect(reply3).toContain(testData.randomCalculationAnswer_2);
  log(`Calculation answer verification passed`);
});
