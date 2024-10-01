import {Page,Locator, expect} from '@playwright/test'
import BasePage from './basepage';

export class ContactInfoPage extends BasePage
{
    private readonly contactText:Locator;

    constructor(page: Page) {
        super(page);
        this.contactText = page.locator('.font-size-flexible.title');
    }

    async textVisible(){
        await expect(this.contactText).toHaveText('Ramesh Kumar')
    }
}