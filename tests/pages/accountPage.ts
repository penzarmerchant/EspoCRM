import { Page, Locator } from "@playwright/test";
import BasePage from "./basepage";
import { L } from "@faker-js/faker/dist/airline-C5Qwd7_q";

export class AccountPage extends BasePage {
  private readonly createAccountButton: Locator;
  private readonly accountNameTitle: Locator;
  private readonly searchBarInputBox:Locator;
  private readonly searchIcon:Locator;
  private readonly searchResultAccountName:Locator;

  constructor(page: Page) {
    super(page);
    this.createAccountButton = page.locator('a[title="Ctrl+Space"]');
    this.accountNameTitle = page.locator(".title");
    this.searchBarInputBox=page.locator('input[data-name="textFilter"]');
    this.searchIcon=page.locator('button[title="Search"]');
    this.searchResultAccountName=page.locator('td[data-name="name"]');
  }

  async clickCreateAccountButton() {
    await this.clickelement(this.createAccountButton);
  }

  async getAccountTitleText(): Promise<string> {
    return await this.getElementText(this.accountNameTitle);
  }

  async enterNameOfAccount(nameofAccount:string){
    await this.fillField(this.searchBarInputBox,nameofAccount);
  }

  async clickSearchIcon(){
    await this.clickelement(this.searchIcon);
  }

  async getSearchResultCount():Promise<number>{
    return await this.getElementCount(this.searchResultAccountName);
  }

  async getSearchResultAccountName():Promise<string>{
   return await this.getElementText(this.searchResultAccountName)
  }
}