    import { test} from '@fixtures/pomFixture';
    import { expect } from '@playwright/test';
    import * as espoCRM from '@testData/espoCRM.json';

    const nameErrorMessage='Name is required';

    test.describe.serial('Account Creation & Verification', ()=>{
        test.beforeEach(async ({ page, loginpage }) => {
            await page.goto('/');
            await loginpage.clickloginButton();
        });
    
        test('Create New Account', async ({ homepage, accountPage, createAccount,assignedUser,teams }) => {
            await homepage.clickaccountButton();
            await accountPage.clickCreateAccountButton();
            await accountPage.createCompleteAccount();
            expect(await accountPage.getAccountTitleText()).toEqual(espoCRM.nameofAccount);
        });
    
        test('Search name of account as per the name created', async ({homepage,accountPage})=>{
                await homepage.clickaccountButton();
                await accountPage.enterNameOfAccount(espoCRM.nameofAccount);
                await accountPage.clickSearchIcon();
                expect(await accountPage.getSearchResultAccountName()).toEqual(espoCRM.nameofAccount);
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