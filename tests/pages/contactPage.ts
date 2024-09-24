import {Page,Locator} from '@playwright/test'
import BasePage from './basepage';

export class ContactPage extends BasePage
{
    private readonly createContactButton:Locator;
    private readonly searchTextBox:Locator;
    private readonly searchSymbol:Locator;

    constructor(page: Page) {
        super(page)
        this.createContactButton=page.locator('a[title="Ctrl+Space"]');
        this.searchTextBox=page.locator('//input[@class="form-control text-filter"]');
        this.searchSymbol=page.locator('button[data-action="search"]')
        
    }

    async clickCreateContactButton() {
        await this.clickelement(this.createContactButton);
      }
}
    
