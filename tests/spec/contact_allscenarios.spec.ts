import { test,expect} from '@fixtures/pomFixture';
import * as espoCRM from '@testData/espoCRM.json';
import exp from 'constants';

test.beforeEach(async ({ page, loginpage }) => {
    await page.goto('/');
    await loginpage.clickloginButton();
});

test('Verify creation of a new contact', async ({ page,homepage, contactpage, createContact,assignedUser,teamsContact,createdContact }) => {
    await homepage.clickcontactButton();
    await contactpage.clickCreateContactButton();
    await createContact.clickSalutationDropdown();
    await createContact.clickSalutationMr();
    await createContact.enterFirstName(espoCRM.firstName);
    await createContact.enterlastName(espoCRM.lastName);
    await createContact.clickAccountsDropDown();
    await createContact.clickAccountName();
    await createContact.enterEmail(espoCRM.email2);
    await createContact.enterPhoneNumber(espoCRM.phoneNumber);
    await createContact.enterStreet(espoCRM.street);
    await createContact.enterCity();
    await createContact.selectCity();
    await createContact.enterPostalCode(espoCRM.postalCode);
    await createContact.enterCountry(espoCRM.country);
    await createContact.enterCounty(espoCRM.county);
    await createContact.enterDescription(espoCRM.description);
    await createContact.enterAssignedUser();
    await assignedUser.clickAssignedUserType(); 
    await createContact.enterTeams();
    await teamsContact.selectTeams();
    await teamsContact.clickSelect();
    await createContact.clickSaveButton();
    await createdContact.textVisible();
});

// test('Verify search functionality in the "Contacts" module', async ({ homepage, contactpage, createContact,assignedUser,teamsContact }) => {
// });