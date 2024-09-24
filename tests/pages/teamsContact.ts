import {Page,Locator} from '@playwright/test'
import BasePage from './basepage';

export class TeamsContact extends BasePage
{
    private readonly teamsSelection:Locator;
    private readonly selectButton:Locator;
    private readonly typeofTeams:Locator;
    
    constructor(page: Page) {
        super(page)
        this.teamsSelection=page.locator('a[title="Sales"]');
        this.selectButton=page.locator('button[data-name="select"]');
        this.typeofTeams=page.locator('//input[@data-id="6128977b8cc8163d5"]');
    }

    async clickSales(){
        await this.clickelement(this.teamsSelection)
    }

    async clickSelect(){
        await this.clickelement(this.selectButton);
    }

    async selectTeams(){
        await this.clickelement(this.typeofTeams)
      }
}