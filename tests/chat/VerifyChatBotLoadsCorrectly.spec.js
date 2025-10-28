import { test, expect } from '../../fixtures/testFixtures.js';
import testData from '../../data/testData.json';
import { log, waitForPageLoad } from '../../utils/utils.js';

test('Verify Chatbot Loads Correctly and Check Response', async ({ chatPage }) => {
  log(`Navigating to Chatbot URL: ${testData.testingUrl}`);
  await chatPage.goto(testData.testingUrl);
  await waitForPageLoad(chatPage.page); 
  log(`Page loaded: ${testData.testingUrl}`);

  log(`Verifying heading visibility`);
  await chatPage.verifyHeadingIsVisible();
  log(`Heading verification passed`);

  log(`Sending greeting message: ${testData.greetMessage}`);
  await chatPage.sendMessage(testData.greetMessage);
  log(`Greeting message sent`);

  const reply1 = await chatPage.getBotMessageText();
  log(`Bot reply received: "${reply1}"`);

  expect(reply1).toBeTruthy();
  log(`Greeting response test passed`);

  log(`Sending question about Taj Mahal: ${testData.tajMahalQues}`);
  await chatPage.sendMessage(testData.tajMahalQues);
  log(`Question sent`);

  const reply2 = await chatPage.getBotMessageText();
  log(`Bot reply received: "${reply2}"`);

  expect(reply2).toContain(testData.tajMahalLocation);
  log(`Context retention test passed`);
});

