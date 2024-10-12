import { test,expect} from '@fixtures/pomFixture';
import * as espoCRM from '@testData/espoCRM.json';

test.beforeEach(async ({ page, loginpage }) => {
    await page.goto('/');
    await loginpage.clickloginButton();
});

test('Verify creation of a new contact', async ({homepage, contactpage,createContactPage,contactInfoPage }) => {
    await homepage.clickcontactButton();
    await contactpage.clickCreateContactButton();
    await createContactPage.createCompleteContact();
    expect(await contactInfoPage.getContactTitleText()).toEqual(`${espoCRM.firstName} ${espoCRM.lastName}`);
});

// test('Verify search functionality in the "Contacts" module', async ({ homepage, contactpage, createContact,assignedUser,teamsContact }) => {
// });