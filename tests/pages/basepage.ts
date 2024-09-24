import { Page, Locator } from '@playwright/test';

export default class BasePage {

    readonly page: Page; // Global

    constructor(page: Page) { // Local
        this.page = page;
    }

    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    async clickelement(element: Locator) {
        this.waitForElementVisible(element);
        await element.click()

    }

    async fillField(element: Locator, text: string) {
        this.waitForElementVisible(element);

        await element.fill(text);
    }

    async waitForElementVisible(element: Locator | string) {
        if (typeof element === 'string') {
            await this.page.waitForSelector(element, { state: 'visible' });
        }
        else {
            await element.waitFor({ state: 'visible' });
        }
    }

    async getElementText(element: Locator): Promise<string> {
        this.waitForElementVisible(element);
        return element.innerText();

    }

    async isElementVisible(element:Locator):Promise<boolean>{
        this.waitForElementVisible(element);
        return element.isVisible();      
    }
}