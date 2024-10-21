import { test, expect } from "@fixtures/pomFixture";
import fs from "fs/promises";
import { EspoCRM } from "@testData/espoCRMTypes";

const nameErrorMessage: string = "Not valid";
let espoCRM;

test.describe.serial("Account Creation & Verification", () => {
  test.beforeEach(async ({ page, loginpage }) => {
    await page.goto("/");
    await loginpage.clickloginButton();
  });

  test("Create New Account", async ({
    homepage,
    accountPage,
    createAccountPage,
    accountInfoPage,
  }) => {
    await homepage.clickAccountButton();
    await accountPage.clickCreateAccountButton();
    await createAccountPage.createCompleteAccount();
    espoCRM = JSON.parse(
      await fs.readFile("testData/espoCRM.json", "utf-8")
    ) as EspoCRM;
    expect(await accountInfoPage.getAccountTitleText()).toEqual(
      espoCRM.nameofAccount
    );
  });

  test("Search by name of account", async ({homepage, accountPage }) => {
    await homepage.clickAccountButton();
    await accountPage.enterNameOfAccount(espoCRM.nameofAccount);
    await accountPage.clickSearchIcon();
    expect(await accountPage.getFirstSearchResultAccountName()).toEqual(
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
  await page.goto("/");
  await loginpage.clickloginButton();
  await homepage.clickAccountButton();
  await accountPage.clickCreateAccountButton();
  await createAccountPage.clickSave();
  const errorText = await createAccountPage.getNameErrorText();
  expect(errorText).toEqual(nameErrorMessage);
});
