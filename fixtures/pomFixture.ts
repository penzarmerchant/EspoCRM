import { test as baseTest } from "@playwright/test";
import { LoginPage } from "@pages/loginPage";
import { HomePage } from "@pages/homePage";
import { CreateContactPage } from "@pages/createContactPage";
import { ContactPage } from "@pages/contactPage";
import { AccountPage } from "@pages/accountPage";
import { CreateAccountPage } from "@pages/createAccountPage";
import { TeamsPage } from "@pages/teamsPage";
import { AssignedUserPage } from "@pages/assignedUserPage";
import { TeamsContactPage } from "@pages/teamsContactPage";
import { ContactInfoPage } from "@pages/contactInfoPage";

type pages = {
  homepage: HomePage;
  loginpage: LoginPage;
  createContactPage: CreateContactPage;
  contactpage: ContactPage;
  accountPage: AccountPage;
  createAccountPage: CreateAccountPage;
  teamsPage: TeamsPage;
  assignedUserPage: AssignedUserPage;
  teamsContactPage: TeamsContactPage;
  createdContactPage: ContactInfoPage;
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

  assignedUserPage: async ({ page }, use) => {
    await use(new AssignedUserPage(page));
  },

  teamsPage: async ({ page }, use) => {
    await use(new TeamsPage(page));
  },

  createAccountPage: async ({ page }, use) => {
    await use(new CreateAccountPage(page));
  },

  teamsContactPage: async ({ page }, use) => {
    await use(new TeamsContactPage(page));
  },

  createdContactPage: async ({ page }, use) => {
    await use(new ContactInfoPage(page));
  },
});

export const test = testPages;
export const expect = testPages.expect;
