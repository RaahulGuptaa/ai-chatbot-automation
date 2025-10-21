import { test, expect } from '../../fixtures/testFixtures.js';
import testData from '../../data/testData.json';
import { log, waitForPageLoad } from '../../utils/utils.js';

test('Verify Multi Conversation Test', async ({ chatPage }) => {
  log(`Navigating to Chatbot URL: ${testData.testingUrl}`);
  await chatPage.goto(testData.testingUrl);
  await waitForPageLoad(chatPage.page); 
  log(`Page loaded: ${testData.testingUrl}`);

  log(`Sending question about Taj Mahal: "${testData.tajMahalQues}"`);
  await chatPage.sendMessage(testData.tajMahalQues);
  const reply = await chatPage.getBotMessageText();
  log(`Bot reply received: "${reply}"`);
  expect(reply).toContain(testData.tajMahalLocation);
  log(`Taj Mahal context verification passed`);

  log(`Sending question about Taj Hotel: "${testData.tajHotelQues}"`);
  await chatPage.sendMessage(testData.tajHotelQues);
  const reply2 = await chatPage.getBotMessageText();
  log(`Bot reply received: "${reply2}"`);
  expect(reply2).toContain(testData.tajHotelLocation);
  log(`Taj Hotel context verification passed`);

  log(`Sending random calculation question: "${testData.randomCalculation_1}"`);
  await chatPage.sendMessage(testData.randomCalculation_1);
  const reply3 = await chatPage.getBotMessageText();
  log(`Bot reply received: "${reply3}"`);
  expect(reply3).toContain(testData.randomCalculationAnswer_1);
  log(`Calculation answer verification passed`);
});
