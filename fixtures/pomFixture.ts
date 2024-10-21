import { test as baseTest } from "@playwright/test";
import { LoginPage } from "@pages/loginPage";
import { HomePage } from "@pages/homePage";
import { CreateContactPage } from "@pages/createContactPage";
import { ContactPage } from "@pages/contactPage";
import { AccountPage } from "@pages/accountPage";
import { CreateAccountPage } from "@pages/createAccountPage";
import { ContactInfoPage } from "@pages/contactInfoPage";
import { AccountInfoPage } from "@pages/accountInfoPage";

type pages = {
  homepage: HomePage;
  loginpage: LoginPage;
  createContactPage: CreateContactPage;
  contactpage: ContactPage;
  accountPage: AccountPage;
  createAccountPage: CreateAccountPage;
  contactInfoPage: ContactInfoPage;
  accountInfoPage:AccountInfoPage
};
const testPages = baseTest.extend<pages>({
  homepage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  loginpage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  createContactPage: async ({ page }, use) => {
    await use(new CreateContactPage(page));
  },

  contactpage: async ({ page }, use) => {
    await use(new ContactPage(page));
  },

  accountPage: async ({ page }, use) => {
    await use(new AccountPage(page));
  },

  createAccountPage: async ({ page }, use) => {
    await use(new CreateAccountPage(page));
  },

  contactInfoPage: async ({ page }, use) => {
    await use(new ContactInfoPage(page));
  },

  accountInfoPage: async ({ page }, use) => {
    await use(new AccountInfoPage(page));
  },
});

export const test = testPages;
export const expect = testPages.expect;
