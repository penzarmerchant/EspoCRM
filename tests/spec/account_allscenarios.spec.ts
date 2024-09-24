    import { test} from '@fixtures/pomFixture';
    import { expect } from '@playwright/test';
    import * as espoCRM from '@testData/espoCRM.json';
    import { generateMockData } from '@testData/generateTestData';
    import fs from 'fs/promises';

    let updatedEspoCRM;
    const nameErrorMessage='Name is required';

    test.beforeEach(async ({ page, loginpage }) => {
        await generateMockData('testData/espoCRM.json');
        await new Promise(resolve=> setTimeout(resolve,200));
        const updatedJson= await fs.readFile('testData/espoCRM.json','utf-8');
        updatedEspoCRM= JSON.parse(updatedJson);
        await page.goto('/');
        await loginpage.clickloginButton();
    });

    test('Create New Account', async ({ homepage, accountPage, createAccount,assignedUser,teams }) => {
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
        // await createAccount.enterShippingAddressStreet(espoCRM.streetShippingAddress);
        // await createAccount.enterShippingAddressCity();
        // await createAccount.enterShippingCity();
        // await createAccount.enterShippingAddressCounty(espoCRM.county2);
        // await createAccount.enterShippingPostalCode(espoCRM.postalCode2);
        // await createAccount.enterShippingAddressCountry(espoCRM.country2);
        await createAccount.enterTypeofAccount();
        await createAccount.selectAccountType();
        await createAccount.clickIndustry();
        await createAccount.selectIndustryType(); 
        await createAccount.enterDescription(espoCRM.Description);
        await createAccount.clickSave();
        expect(await accountPage.getAccountTitleText()).toEqual(updatedEspoCRM.nameofAccount);
    });

    test('Verify Mandatory Fields', async ({ homepage, accountPage, createAccount }) => {
        await homepage.clickaccountButton();
        await accountPage.clickCreateAccountButton();
        await createAccount.clickSave();
        expect(await createAccount.getNameErrorText()).toEqual(nameErrorMessage);
    })