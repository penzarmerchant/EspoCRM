import { test} from '@fixtures/pomFixture';
import * as espoCRM from '@testData/espoCRM.json';
import {faker} from '@faker-js/faker';

test.beforeEach(async ({ page, loginpage }) => {
    await page.goto('/');
    await loginpage.clickloginButton();
});

test('Create New Account', async ({ page,homepage, accountPage, createAccount,assignedUser,teams }) => {
    await homepage.clickaccountButton();
    await accountPage.clickCreateAccountButton();
    await createAccount.enterName(faker.company.name());
    await page.pause();
    await createAccount.enterWebsite(espoCRM.website);
    await createAccount.enterEmail(espoCRM.email1);
    await createAccount.enterPhone(espoCRM.phoneAccount);
    await createAccount.enterBillingAddressStreet(espoCRM.streetBillingAddress)
    await createAccount.enterBillingAddressCity();
    await createAccount.enterBillingCity();
    await createAccount.enterbillingAddressCounty(espoCRM.county1);
    await createAccount.enterbillingPostalCode(espoCRM.postalCode1);
    await createAccount.enterbillingAddressCountry(espoCRM.country1);
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
    
});