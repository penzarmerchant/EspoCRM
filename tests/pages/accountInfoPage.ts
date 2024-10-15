import {Page,Locator,} from '@playwright/test'
import BasePage from './basepage';

export class AccountInfoPage extends BasePage
{
    private readonly accountNameTitle: Locator;

    constructor(page: Page) {
        super(page);
        this.accountNameTitle = page.locator(".title");
    }
    
    async getAccountTitleText(): Promise<string> {
        return await this.getElementText(this.accountNameTitle);
      }
}