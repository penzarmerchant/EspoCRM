import { Page, Locator } from "@playwright/test";
import BasePage from "./basepage";

export class CreateAccountPage extends BasePage {
  private readonly nameTextBox: Locator;
  private readonly websiteTextBox: Locator;
  private readonly emailTextBox: Locator;
  private readonly phoneTextBox: Locator;
  private readonly streetBillingAddTextBox: Locator;
  private readonly cityBillingAddTextBox: Locator;
  private readonly countyBillingAddTextBox: Locator;
  private readonly postalCodeBillingAddTextBox: Locator;
  private readonly countryBillingAddTextBox: Locator;
  private readonly streetShippingAddTextBox: Locator;
  private readonly cityShippingAddTextBox: Locator;
  private readonly countyShippingAddTextBox: Locator;
  private readonly postalCodeShippingAddTextBox: Locator;
  private readonly countryShippingAddTextBox: Locator;
  private readonly typeTextBox: Locator;
  private readonly industryTextBox: Locator;
  private readonly descriptionTextBox: Locator;
  private readonly assignedUser: Locator;
  private readonly teams: Locator;
  private readonly selectCity: Locator;
  private readonly citySelection: Locator;
  private readonly typeofAccount: Locator;
  private readonly copyButton: Locator;
  private readonly saveButton: Locator;
  private readonly typeofIndustry: Locator;
  private readonly nameErrorMessage: Locator;

  constructor(page: Page) {
    super(page);

    this.nameTextBox = page.locator('input[data-name="name"]');
    this.websiteTextBox = page.locator('input[data-name="website"]');
    this.emailTextBox = page.locator('input[type="email"]');
    this.phoneTextBox = page.locator('.phone-number');
    this.streetBillingAddTextBox = page.locator(
      'textarea[data-name="billingAddressStreet"]'
    );
    this.cityBillingAddTextBox = page.locator(
      'input[data-name="billingAddressCity"]'
    );
    this.countyBillingAddTextBox = page.locator(
      'input[data-name="billingAddressState"]'
    );
    this.postalCodeBillingAddTextBox = page.locator(
      'input[data-name="billingAddressPostalCode"]'
    );
    this.countryBillingAddTextBox = page.locator('input[data-name="billingAddressCountry"]'); 
    this.typeTextBox = page.locator('div[data-name="type"]:nth-child(2)');
    this.industryTextBox = page.locator('(//div[@data-name="industry"])[2]');
    this.descriptionTextBox = page.locator('textarea[data-name="description"]');
    this.assignedUser = page.locator('(//button[@title="Select"])[1]');
    this.teams = page.locator('(//button[@title="Select"])[2]');
    this.selectCity = page.locator('//div[normalize-space(text())="London"]');
    this.typeofAccount = page.locator('div[data-value="Partner"]');
    this.copyButton = page.locator('button[class="btn btn-default btn-sm"]');
    this.saveButton = page.locator('button[data-name="save"]');
    this.typeofIndustry = page.locator('//div[normalize-space()="Automotive"]');
    this.nameErrorMessage = page.locator('#notification');
  }

  async enterName(name: string) {
    await this.fillField(this.nameTextBox, name);
  }

  async enterWebsite(website: string) {
    await this.fillField(this.websiteTextBox, website);
  }

  async enterEmail(email: string) {
    await this.fillField(this.emailTextBox, email);
  }

  async enterPhone(phoneNumber: string) {
    await this.fillField(this.phoneTextBox, phoneNumber);
  }

  async enterBillingAddressStreet(billingAddressStreet: string) {
    await this.fillField(this.streetBillingAddTextBox, billingAddressStreet);
  }

  async enterBillingAddressCity() {
    await this.clickelement(this.cityBillingAddTextBox);
  }

  async enterbillingAddressCounty(billingAddressCounty: string) {
    await this.fillField(this.countyBillingAddTextBox, billingAddressCounty);
  }

  async enterbillingPostalCode(billingAddresspostalCode: string) {
    await this.fillField(
      this.postalCodeBillingAddTextBox,
      billingAddresspostalCode
    );
  }

  async enterbillingAddressCountry(billingAddressCountry: string) {
    await this.fillField(this.countryBillingAddTextBox, billingAddressCountry);
  }

  async enterTypeofAccount() {
    await this.clickelement(this.typeTextBox);
  }

  async enterIndustryType() {
    await this.clickelement(this.industryTextBox);
  }

  async enterDescription(description: string) {
    await this.fillField(this.descriptionTextBox, description);
  }

  async enterAssignedUser() {
    await this.clickelement(this.assignedUser);
  }

  async enterTeams() {
    await this.clickelement(this.teams);
  }

  async enterBillingCity() {
    await this.clickelement(this.selectCity);
  }

  async enterShippingCity() {
    await this.clickelement(this.citySelection);
  }

  async selectAccountType() {
    await this.clickelement(this.typeofAccount);
  }

  async clickCopyButton() {
    await this.clickelement(this.copyButton);
  }

  async clickIndustry() {
    await this.clickelement(this.industryTextBox);
  }

  async selectIndustryType() {
    await this.clickelement(this.typeofIndustry);
  }

  async clickSave() {
    await this.clickelement(this.saveButton);
  }

  async getNameErrorText(): Promise<string> {
    return await this.getElementText(this.nameErrorMessage);
  }
}
