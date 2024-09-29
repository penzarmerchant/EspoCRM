import { Page, Locator } from "@playwright/test";
import BasePage from "./basepage";
import { CreateAccount } from "./createAccount";
import { AssignedUser } from "./assignedUser";
import { Teams } from "./teams";
import * as espoCRM from "@testData/espoCRM.json";
import { generateMockData } from "@testData/generateTestData";
import fs from 'fs/promises';

export class AccountPage extends BasePage {
  private readonly createAccount: CreateAccount;
  private readonly assignedUser: AssignedUser;
  private readonly teams: Teams;
  private readonly createAccountButton: Locator;
  private readonly accountNameTitle: Locator;
  private readonly searchBarInputBox: Locator;
  private readonly searchIcon: Locator;
  private readonly searchResultAccountName: Locator;

  constructor(page: Page) {
    super(page);
    this.createAccount = new CreateAccount(page);
    this.assignedUser=new AssignedUser(page);
    this.teams=new Teams(page)
    this.createAccountButton = page.locator('a[title="Ctrl+Space"]');
    this.accountNameTitle = page.locator(".title");
    this.searchBarInputBox = page.locator('input[data-name="textFilter"]');
    this.searchIcon = page.locator('button[title="Search"]');
    this.searchResultAccountName = page.locator('td[data-name="name"]');
  }

  async clickCreateAccountButton() {
    await this.clickelement(this.createAccountButton);
  }

  async getAccountTitleText(): Promise<string> {
    return await this.getElementText(this.accountNameTitle);
  }

  async enterNameOfAccount(nameofAccount: string) {
    await this.fillField(this.searchBarInputBox, nameofAccount);
  }

  async clickSearchIcon() {
    await this.clickelement(this.searchIcon);
  }

  async getSearchResultCount(): Promise<number> {
    return await this.getElementCount(this.searchResultAccountName);
  }

  async getSearchResultAccountName(): Promise<string> {
    return await this.getElementText(this.searchResultAccountName);
  }

  async createCompleteAccount() {
    await generateMockData("testData/espoCRM.json");
    await new Promise((resolve) => setTimeout(resolve, 500));
    const updatedJson = await fs.readFile("testData/espoCRM.json", "utf-8");
    await this.createAccount.enterName(espoCRM.nameofAccount);
    await this.createAccount.enterWebsite(espoCRM.website);
    await this.createAccount.enterEmail(espoCRM.email1);
    await this.createAccount.enterPhone(espoCRM.phoneAccount);
    await this.createAccount.enterBillingAddressStreet(
      espoCRM.streetBillingAddress
    );
    await this.createAccount.enterBillingAddressCity();
    await this.createAccount.enterBillingCity();
    await this.createAccount.enterbillingAddressCounty(espoCRM.county1);
    await this.createAccount.enterbillingPostalCode(espoCRM.postalCode1);
    await this.createAccount.enterbillingAddressCountry(espoCRM.country1);
    await this.createAccount.clickCopyButton();
    await this.createAccount.enterAssignedUser();
    await this.assignedUser.clickAssignedUserType();
    await this.createAccount.enterTeams();
    await this.teams.selectTeams();
    await this.teams.clickSelect();
    await this.createAccount.enterTypeofAccount();
    await this.createAccount.selectAccountType();
    await this.createAccount.clickIndustry();
    await this.createAccount.selectIndustryType();
    await this.createAccount.enterDescription(espoCRM.Description);
    await this.createAccount.clickSave();
  }
}
