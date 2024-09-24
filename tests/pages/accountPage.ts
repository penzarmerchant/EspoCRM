import { Page, Locator } from "@playwright/test";
import BasePage from "./basepage";

export class AccountPage extends BasePage {
  private readonly createAccountButton: Locator;
  private readonly accountNameTitle: Locator;

  constructor(page: Page) {
    super(page);
    this.createAccountButton = page.locator('a[title="Ctrl+Space"]');
    this.accountNameTitle = page.locator(".title");
  }

  async clickCreateAccountButton() {
    await this.clickelement(this.createAccountButton);
  }

  async getAccountTitleText(): Promise<string> {
    return await this.getElementText(this.accountNameTitle);
  }
}