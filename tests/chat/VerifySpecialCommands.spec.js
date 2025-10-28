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

  const emojiMessage = testData.greetWithEmoji;
  log(`Sending emoji message: "${emojiMessage}"`);
  await chatPage.sendMessage(emojiMessage);

  const emojiReply = await chatPage.getBotMessageText();
  log(`Bot reply received for emoji: "${emojiReply}"`);
  expect(emojiReply).toBeTruthy();
  log(`Emoji handling verification passed`);

  const linkMessage = testData.randomLink;
  log(`Sending link message: "${linkMessage}"`);
  await chatPage.sendMessage(linkMessage);

  const linkReply = await chatPage.getBotMessageText();
  log(`Bot reply received for link: "${linkReply}"`);
  expect(linkReply).toBeTruthy();
  log(`Link handling verification passed`);
});
