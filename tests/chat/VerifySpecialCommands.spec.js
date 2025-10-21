import { test, expect } from '../../fixtures/testFixtures.js';
import testData from '../../data/testData.json';
import { log, waitForPageLoad } from '../../utils/utils.js';

test('Special Commands Test', async ({ chatPage }) => {
  log(`Navigating to Chatbot URL: ${testData.testingUrl}`);
  await chatPage.goto(testData.testingUrl);
  await waitForPageLoad(chatPage.page); 
  log(`Page loaded: ${testData.testingUrl}`);

  log(`Sending /help command: "${testData.command_HELP}"`);
  await chatPage.sendMessage(testData.command_HELP);
  const reply = await chatPage.getBotMessageText();
  log(`Bot reply received for /help: "${reply}"`);
  expect(reply).toBeTruthy();
  log(`/help command verification passed`);

  log(`Sending /summarize command: "${testData.command_SUMMARIZE}"`);
  await chatPage.sendMessage(testData.command_SUMMARIZE);
  const summarizeReply = await chatPage.getBotMessageText();
  log(`Bot reply received for /summarize: "${summarizeReply}"`);
  expect(summarizeReply).toBeTruthy();
  log(`/summarize command verification passed`);
});
