import { test } from "@fixtures/pomFixture";
import { expect } from "@playwright/test";
import * as espoCRM from "@testData/espoCRM.json";

const nameErrorMessage:string = "Not valid";

test.describe.serial("Account Creation & Verification", () => {
  test.beforeEach(async ({ page, loginpage }) => {
    await page.goto("/");
    await loginpage.clickloginButton();
  });

  test.only("Create New Account", async ({page,
    homepage,
    accountPage,
    createAccountPage,
    assignedUserPage,
    teamsPage,
  }) => {
    await page.pause();
    await homepage.clickaccountButton();
    await accountPage.clickCreateAccountButton();
    await page.pause();
    await accountPage.createCompleteAccount();
    expect(await accountPage.getAccountTitleText()).toEqual(
      espoCRM.nameofAccount
    );
  });

  test("Search name of account as per the name created", async ({
    homepage,
    accountPage,
  }) => {
    await homepage.clickaccountButton();
    await accountPage.enterNameOfAccount(espoCRM.nameofAccount);
    await accountPage.clickSearchIcon();
    expect(await accountPage.getSearchResultAccountName()).toEqual(
      espoCRM.nameofAccount
    );
    expect(await accountPage.getSearchResultCount()).toEqual(1);
  });
});

test("Verify Mandatory Fields", async ({
  page,
  loginpage,
  homepage,
  accountPage,
  createAccountPage,
}) => {
  test.slow();
  await page.goto("/");
  await loginpage.clickloginButton();
  await homepage.clickaccountButton();
  await accountPage.clickCreateAccountButton();
  await createAccountPage.clickSave();
  const errorText=await createAccountPage.getNameErrorText();
 expect(errorText).toEqual(nameErrorMessage);
});
