import {Page,Locator} from '@playwright/test'
import BasePage from './basepage';

export class LoginPage extends BasePage
{
    private readonly loginButton:Locator

    constructor(page: Page) {
        super(page)
        this.loginButton=page.locator('#btn-login');
    }

    async clickloginButton() {
        await this.clickelement(this.loginButton);
      }
}