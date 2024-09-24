import { Page, Locator } from "@playwright/test";
import BasePage from "./basepage";

export class HomePage extends BasePage {
  private readonly contactButton: Locator;
  private readonly accountButton: Locator;

  constructor(page: Page) {
    super(page);
    this.contactButton = page.locator('span[title="Contacts"]');
    this.accountButton = page.locator('span[title="Accounts"]');
  }

  async clickcontactButton() {
    await this.clickelement(this.contactButton);
  }

  async clickaccountButton() {
    await this.clickelement(this.accountButton);
  }
}