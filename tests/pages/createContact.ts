import {Page,Locator} from '@playwright/test'
import BasePage from './basepage';

export class CreateContact extends BasePage
{
    private readonly createContactButton:Locator;
    private readonly salutationMr:Locator;
    private readonly salutationdropdown:Locator;
    private readonly firstNameTextBox:Locator;
    private readonly lastNameTextBox:Locator;
    private readonly accountsDropDown:Locator;
    private readonly accountName:Locator;
    private readonly emailTextBox:Locator;
    private readonly phoneNumberTextBox:Locator;
    private readonly streetTextBox:Locator;
    private readonly cityTextBox:Locator;
    private readonly countyTextBox:Locator;
    private readonly postalCodeTextBox:Locator;
    private readonly countryTextBox:Locator;
    private readonly datepicker:Locator;
    private readonly description:Locator;
    private readonly citySelection:Locator;
    private readonly saveButton:Locator;
    private readonly assignedUser: Locator;
    private readonly teams:Locator

    constructor(page: Page) {
        super(page)
        this.createContactButton=page.locator('a[title="Ctrl+Space"]');
        this.salutationMr=page.locator('[data-value="Mr."]');
        this.salutationdropdown=page.locator('(//div[contains(@class,"selectize-input items")])[1]');  
        this.firstNameTextBox=page.locator('input[data-name="firstName"]'); 
        this.lastNameTextBox=page.locator('input[data-name="lastName"]');  
        this.accountsDropDown=page.locator('(//button[@data-action="selectLink"])[1]');
        this.accountName=page.locator('a[data-id="5f5f1fcec41c41354"]');
        this.emailTextBox=page.locator('input[type="email"]');
        this.phoneNumberTextBox=page.locator('input[type="input"]');
        this.streetTextBox=page.locator('textarea[data-name="addressStreet"]');
        this.cityTextBox=page.locator('input[data-name="addressCity"]');
        this.countyTextBox=page.locator('input[data-name="addressState"]');
        this.citySelection=page.locator('//div[normalize-space()="London"]');
        this.postalCodeTextBox=page.locator('input[data-name="addressPostalCode"]');
        this.countryTextBox=page.locator('input[data-name="addressCountry"]');
        this.description=page.locator('textarea[data-name="description"]');
        this.saveButton=page.locator('button[data-name="save"]');
        this.assignedUser = page.locator('(//button[@title="Select"])[2]');
        this.teams = page.locator('(//button[@title="Select"])[3]');
    }

    async clickCreateContactButton() {
        await this.clickelement(this.createContactButton);
      }

      async clickSalutationMr(){
        await this.clickelement(this.salutationMr)
      }

      async clickSalutationDropdown(){
        await this.clickelement(this.salutationdropdown);
      }

      async enterFirstName(firstName:string){
        await this.fillField(this.firstNameTextBox,firstName);
      }

      async enterlastName(lastName:string){
        await this.fillField(this.lastNameTextBox,lastName);
      }

      async clickAccountsDropDown(){
        await this.clickelement(this.accountsDropDown);
      }

      async clickAccountName(){
        await this.clickelement(this.accountName);
      }

      async enterEmail(email:string){
        await this.fillField(this.emailTextBox,email);
      }

      async enterPhoneNumber(phoneNumber:string){
        await this.fillField(this.phoneNumberTextBox,phoneNumber)
      }

      async enterStreet(street:string){
        await this.fillField(this.streetTextBox,street)
      }

      async enterCity(){
        await this.clickelement(this.cityTextBox);
      }

      async selectCity(){
        await this.clickelement(this.citySelection)
      }

      async enterCounty(county:string){
        await this.fillField(this.countyTextBox,county)
      }

      async enterPostalCode(postalCode:string){
        await this.fillField(this.postalCodeTextBox,postalCode)
      }

      async enterCountry(country:string){
        await this.fillField(this.countryTextBox,country);
      }

      async enterDescription(description:string){
        await this.fillField(this.description,description)
      }

      async clickSaveButton(){
        await this.clickelement(this.saveButton);
      }

      async enterAssignedUser(){
        await this.clickelement(this.assignedUser);
       }

       async enterTeams(){
        await this.clickelement(this.teams);
       }
}