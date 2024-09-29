import { Page, Locator } from "@playwright/test";

export default class BasePage {
  readonly page: Page; // Global

  constructor(page: Page) {
    // Local
    this.page = page;
  }

  async navigateTo(url: string,maxTimeout?:number) {
    await this.page.goto(url,{timeout:maxTimeout,waitUntil:'load'});
  }

  async clickelement(element: Locator,maxTimeout?:number,isForceClick?:boolean) {
    this.waitForElementVisible(element,maxTimeout);
    await element.click({force:isForceClick});
  }

  async fillField(element: Locator, text: string,maxTimeout?:number,isForceFill?:boolean) {
    this.waitForElementVisible(element,maxTimeout);
    await element.fill(text,{timeout:maxTimeout,force:isForceFill});
  }

  async waitForElementVisible(element: Locator | string,maxTimeout?:number) {
    if (typeof element === "string") {
      await this.page.waitForSelector(element, { state: "visible" });
    } else {
      await element.waitFor({ state: "visible",timeout:maxTimeout});
    }
  }

  async getElementText(element: Locator,maxTimeout?:number): Promise<string> {
    this.waitForElementVisible(element,maxTimeout);
    return element.innerText({timeout:maxTimeout});
  }

  async isElementVisible(element: Locator,maxTimeout?:number): Promise<boolean> {
    this.waitForElementVisible(element,maxTimeout);
    return element.isVisible({timeout:maxTimeout});
  }

  async getElementCount(element: Locator,maxTimeout?:number): Promise<number> {
    this.waitForElementVisible(element,maxTimeout);
    return await element.count();
  }
}
