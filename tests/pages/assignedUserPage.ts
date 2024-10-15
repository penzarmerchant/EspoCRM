import { Page, Locator } from "@playwright/test";
import BasePage from "./basepage";

export class AssignedUserPage extends BasePage {
  private readonly firstUser: Locator;

  constructor(page: Page) {
    super(page);
    this.firstUser = page.locator('(//td[@data-name="name"]/child::a)[1]');
  }

  async clickFirstUser() {
    await this.clickelement(this.firstUser);
  }
}