import { test, expect } from "@fixtures/pomFixture";
import fs from "fs/promises";
import { EspoCRM } from "@testData/espoCRMTypes";

let espoCRM;
const nameErrorMessage: string = "Not valid";

test.beforeEach(async ({ page, loginpage }) => {
  await page.goto("/");
  await loginpage.clickloginButton();
});

test.describe.serial("Contact Creation & Verification", () => {
  test("Create New Contact", async ({
    homepage,
    createContactPage,
    contactpage,
    contactInfoPage,
  }) => {
    await homepage.clickcontactButton();
    await contactpage.clickCreateContactButton();
    await createContactPage.createCompleteContact();
    espoCRM = JSON.parse(
      await fs.readFile("testData/espoCRM.json", "utf-8")
    ) as EspoCRM;
    expect(await contactInfoPage.getContactTitleText()).toEqual(`${espoCRM.firstName} ${espoCRM.lastName}`);
  });

  test("Search by name of contact", async ({ homepage, contactpage }) => {
    await homepage.clickcontactButton();
    await contactpage.enterNameOfContact(
      `${espoCRM.firstName} ${espoCRM.lastName}`
    );
    await contactpage.clickSearchIcon();
    expect(await contactpage.getSearchResultContactName()).toEqual(
      `${espoCRM.firstName} ${espoCRM.lastName}`
    );
    expect(await contactpage.getSearchResultCount()).toEqual(1);
  });
});

test("Verify Mandatory Fields", async ({
  homepage,
  contactpage,
  createContactPage,
}) => {
  await homepage.clickcontactButton();
  await contactpage.clickCreateContactButton();
  await createContactPage.clickSaveButton();
  const errorText = await createContactPage.getNameErrorText();
  expect(errorText).toEqual(nameErrorMessage);
});