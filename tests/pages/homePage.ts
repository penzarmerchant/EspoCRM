import { Page, Locator } from "@playwright/test";
import BasePage from "./basepage";

export class HomePage extends BasePage {
  private readonly contactButton: Locator;
  private readonly accountButton: Locator;

  constructor(page: Page) {
    super(page);
    this.accountButton = page.locator('li[data-name="Account"] a');
    this.contactButton = page.locator('li[data-name="Contact"] a');
  }

  async clickContactButton() {
    await this.clickelement(this.contactButton);
  }

  async clickAccountButton() {
    await this.clickelement(this.accountButton);
  }
}
