import { Page, Locator } from "@playwright/test";
import BasePage from "./basepage";

export class ContactPage extends BasePage {
  private readonly createContactButton: Locator;
  private readonly searchTextBox: Locator;
  private readonly searchIcon: Locator;
  private readonly searchResultContactName:Locator;

  constructor(page: Page) {
    super(page);
    this.createContactButton = page.locator('a[data-name="create"]');
    this.searchTextBox = page.locator('input[data-name="textFilter"]');
    this.searchIcon = page.locator('button[title="Search"]');
    this.searchResultContactName = page.locator('td[data-name="name"]');
  }

  async clickCreateContactButton() {
    await this.clickelement(this.createContactButton);
  }

  async enterNameOfContact(nameofContact: string) {
    await this.fillField(this.searchTextBox, nameofContact);
  }

  async clickSearchIcon() {
    await this.clickelement(this.searchIcon);
  }

  async getSearchResultCount(): Promise<number> {
    return await this.getElementCount(this.searchResultContactName);
  }

  async getSearchResultContactName(): Promise<string> {
    return await this.getElementText(this.searchResultContactName);
  }
}
