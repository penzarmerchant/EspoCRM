import { Page, Locator } from "@playwright/test";
import BasePage from "./basepage";

export class AssignedUserPage extends BasePage {
  private readonly userSelection: Locator;

  constructor(page: Page) {
    super(page);
    this.userSelection = page.locator('a[class="link text-warning"]');
  }

  async clickAssignedUserType() {
    await this.clickelement(this.userSelection);
  }
}
