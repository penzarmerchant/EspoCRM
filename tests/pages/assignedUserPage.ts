import { Page, Locator } from "@playwright/test";
import BasePage from "./basepage";

export class AssignedUserPage extends BasePage {
  private readonly userSelection: Locator;

  constructor(page: Page) {
    super(page);
    this.userSelection = page.locator('td[data-name="name"] a[href="#User/view/1"]');
  }

  async clickAssignedUserType() {
    await this.clickelement(this.userSelection);
  }
}
