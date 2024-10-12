import {Page,Locator, expect} from '@playwright/test'
import BasePage from './basepage';

export class ContactInfoPage extends BasePage
{
    private readonly contactNameTitle:Locator;

    constructor(page: Page) {
        super(page);
        this.contactNameTitle = page.locator('(//div[@class="breadcrumb-item"])[2]');
    }

    

    async getContactTitleText(): Promise<string> {
        return await this.getElementText(this.contactNameTitle);
      }
}