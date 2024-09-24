import {Page,Locator} from '@playwright/test'
import BasePage from './basepage';

export class AccountPage extends BasePage
{
    private readonly createAccountButton:Locator

    constructor(page: Page) {
        super(page)
        this.createAccountButton=page.locator('a[title="Ctrl+Space"]')
        
    }

    async clickCreateAccountButton() {
        await this.clickelement(this.createAccountButton);
      }
}
    
