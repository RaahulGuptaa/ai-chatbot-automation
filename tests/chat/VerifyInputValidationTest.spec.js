import { test, expect } from '../../fixtures/testFixtures.js';
import testData from '../../data/testData.json';
import { log, waitForPageLoad } from '../../utils/utils.js';

test('Verify Input Validation Test', async ({ chatPage }) => {
  log(`Navigating to Chatbot URL: ${testData.testingUrl}`);
  await chatPage.goto(testData.testingUrl);
  await waitForPageLoad(chatPage.page); 
  log(`Page loaded: ${testData.testingUrl}`);

  log(`Sending empty message to chat input`);
  await chatPage.sendMessage('');
  const chatInputValue = await chatPage.page.locator(chatPage.chatInput).inputValue();
  log(`Chat input value after sending empty message: "${chatInputValue}"`);
  expect(chatInputValue).toBe('');
  log(`Empty message verification passed`);

  const messagesCount = await chatPage.page.locator(chatPage.message).count();
  log(`Number of messages in chat after empty input: ${messagesCount}`);
  expect(messagesCount).toEqual(0);
  log(`No message sent verification passed`);

  const longMessage = 'A'.repeat(1200);
  log(`Sending long message of length ${longMessage.length}`);
  await chatPage.sendMessage(longMessage);

  const reply = await chatPage.getBotMessageText();
  log(`Bot reply received for long message: "${reply}"`);
  expect(reply).toBeTruthy();
  log(`Long message input validation passed`);
});
