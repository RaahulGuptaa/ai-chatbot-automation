import { expect } from "@playwright/test";
import { log } from '../utils/utils.js';


export default class ChatPage {
 
  constructor(page) {
    this.page = page;
    this.chatInput = "//textarea[@data-testid='ai-chat-input']";
    this.sendButton = "//button[@data-testid='quill-chat-send-button']";
    this.message = "//div[@id='ai-chat-assistance-last-replay']/preceding-sibling::span";
    this.heading = "div.MuiTypography-headingLarge";
  }

  /**
   * Navigate to a given URL
   * @param {string} url - URL of the chatbot page
   */
  async goto(url) {
    log(`Navigating to URL: ${url}`);
    await this.page.goto(url);
    log(`Page loaded: ${url}`);
  }

  /**
   * Sends a message to the chatbot input field and clicks send
   * @param {string} text - Message to send
   */
  async sendMessage(text) {
    log(`Filling chat input with: ${text}`);
    await this.page.fill(this.chatInput, text);
    log(`Clicking send button`);
    await this.page.click(this.sendButton);
    log(`Message sent: ${text}`);
  }

  /**
   * Verify that the heading element is visible on the page
   */
  async verifyHeadingIsVisible() {
    log(`Checking heading visibility for selector: ${this.heading}`);
    const element = this.page.locator(this.heading).textContent;
    log(`Heading element: ${element}`);
    expect(element).toBeTruthy();
    log(`Heading verification passed`);
  }

  /**
   * Get the last bot message text from the chat
   * @returns {Promise<string>} - Text content of the bot message
   */
  async getBotMessageText() {
    log(`Fetching bot message using selector: ${this.message}`);
    const element = this.page.locator(this.message);
    const text = await element.textContent();
    log(`Bot message received: ${text}`);
    return text;
  }
}

module.exports = ChatPage;
