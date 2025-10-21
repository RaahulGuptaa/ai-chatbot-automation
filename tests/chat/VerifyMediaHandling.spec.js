import { test, expect } from '../../fixtures/testFixtures.js';
import testData from '../../data/testData.json';
import { log, waitForPageLoad } from '../../utils/utils.js';

test('Verify Emoji / Media Handling', async ({ chatPage }) => {
  log(`Navigating to Chatbot URL: ${testData.testingUrl}`);
  await chatPage.goto(testData.testingUrl);
  await waitForPageLoad(chatPage.page); 
  log(`Page loaded: ${testData.testingUrl}`);

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
