    import { test} from '@fixtures/pomFixture';
    import { expect } from '@playwright/test';
    import * as espoCRM from '@testData/espoCRM.json';
    import { generateMockData } from '@testData/generateTestData';
    import fs from 'fs/promises';

    var updatedEspoCRM;
    const nameErrorMessage='Name is required';

    test.describe.serial('Account Creation & Verification', ()=>{
        test.beforeEach(async ({ page, loginpage }) => {
            await page.goto('/');
            await loginpage.clickloginButton();
        });
    
        test('Create New Account', async ({ homepage, accountPage, createAccount,assignedUser,teams }) => {
            await generateMockData('testData/espoCRM.json');
            await new Promise(resolve=> setTimeout(resolve,200));
            const updatedJson= await fs.readFile('testData/espoCRM.json','utf-8');
            updatedEspoCRM= JSON.parse(updatedJson);
            await homepage.clickaccountButton();
            await accountPage.clickCreateAccountButton();
            await createAccount.enterName(updatedEspoCRM.nameofAccount);
            await createAccount.enterWebsite(updatedEspoCRM.website);
            await createAccount.enterEmail(updatedEspoCRM.email1);
            await createAccount.enterPhone(updatedEspoCRM.phoneAccount);
            await createAccount.enterBillingAddressStreet(updatedEspoCRM.streetBillingAddress)
            await createAccount.enterBillingAddressCity();
            await createAccount.enterBillingCity();
            await createAccount.enterbillingAddressCounty(updatedEspoCRM.county1);
            await createAccount.enterbillingPostalCode(updatedEspoCRM.postalCode1);
            await createAccount.enterbillingAddressCountry(updatedEspoCRM.country1);
            await createAccount.clickCopyButton();
            await createAccount.enterAssignedUser();
            await assignedUser.clickAssignedUserType();
            await createAccount.enterTeams();
            await teams.selectTeams();
            await teams.clickSelect();
            await createAccount.enterTypeofAccount();
            await createAccount.selectAccountType();
            await createAccount.clickIndustry();
            await createAccount.selectIndustryType(); 
            await createAccount.enterDescription(espoCRM.Description);
            await createAccount.clickSave();
            expect(await accountPage.getAccountTitleText()).toEqual(updatedEspoCRM.nameofAccount);
        });
    
        test('Search name of account as per the name created', async ({homepage,accountPage})=>{
                await homepage.clickaccountButton();
                await accountPage.enterNameOfAccount(updatedEspoCRM.nameofAccount);
                await accountPage.clickSearchIcon();
                expect(await accountPage.getSearchResultAccountName()).toEqual(updatedEspoCRM.nameofAccount);
                expect(await accountPage.getSearchResultCount()).toEqual(1);
        })
    })

    test('Verify Mandatory Fields', async ({ page,loginpage,homepage, accountPage, createAccount }) => {
        await page.goto('/');
        await loginpage.clickloginButton();
        await homepage.clickaccountButton();
        await accountPage.clickCreateAccountButton();
        await createAccount.clickSave();
        expect(await createAccount.getNameErrorText()).toEqual(nameErrorMessage);
    })