//import { expect } from "@playwright/test";
import { test } from "../fixture/fixture";

// test.beforeEach(async ({ loginPage }) => {
//   await loginPage.navigatetologin();
//   await loginPage.login("Admin", "admin123");
// });

test("Adding User to OrangeHRM",
  async ({ loginPage, sideBarPage, adminUserManagementPage, addUserPage }) => {
    await loginPage.navigatetologin();
   await loginPage.login("Admin", "admin123");
    await sideBarPage.navigateToAdmin();
    await adminUserManagementPage.clickAddButton();
    await addUserPage.selectOption("ESS");
    await addUserPage.selectEmployeeName("Ravi M B");
    await addUserPage.selectOptionStatus("Enabled");
    await addUserPage.fillUsername("Admini");
    await addUserPage.fillPassword("Admini7");
    await addUserPage.fillConfirmPassword("Admini7");
    await addUserPage.clickSave();
  }
);

test("Adding Job Title to OrangeHRM", async ({
  loginPage,
  sideBarPage,
  navigationBarMenu,
  jobTitlePage,
  addJobTitlePage,
}) => {
 await loginPage.navigatetologin();
 await loginPage.login("Admin", "admin123");
 await addJobTitlePage.addJobTitleUsingAPI("Pilot")
  await sideBarPage.navigateToAdmin();
  await navigationBarMenu.selectMainMenu("Job");
  await navigationBarMenu.clickOnJobType("Job Titles");
  await addJobTitlePage.validateJobTitle("Pilot")
  await jobTitlePage.clickOnAddButton();
  await addJobTitlePage.enterJobTitle("Test Analyst");
  await addJobTitlePage.enterJobDescription("Manual/Automation Testing");
  await addJobTitlePage.uploadJobSpecificationFile(
    "src/orange-hrm/test-data/Game+Delivery.xlsx"
  );
  await addJobTitlePage.enterNoteInput("Testing team");
  await addJobTitlePage.clickSave();
});

test("Updating General Information in OrangeHRM", async ({
  loginPage,
  sideBarPage,
  navigationBarMenu,
  updateGeneralInfoPage,
}) => {
  await loginPage.navigatetologin();
  await loginPage.login("Admin", "admin123");
  await sideBarPage.navigateToAdmin();
  await navigationBarMenu.selectMenu({
    mainMenu: "Organization",
    subMenu: "General Information",
  });
  await navigationBarMenu.selectMainMenu("Organization");
  await navigationBarMenu.clickOnOrganizationType("General Information");
  await updateGeneralInfoPage.editGeneralInformation({
    orgname: "Demo Orange HRM",
    taxid: "0707",
    fax: "8989",
    phoneno: "8978978978",
    regname: "9797",
    email: "generalinfo@orangehrm.com",
    address1: "309 Beverly Place",
    //address2:"Arizona",
    city: "Phoenix",
    state: "AZ",
    zipcode: "20247",
    country: "Israel",
    notes: "Orange HRM Demo Website",
  });
});
test("Performing CUD on Skills Page to OrangeHRM", async ({
  loginPage,
  sideBarPage,
  navigationBarMenu,
  skillsPage,
  skillsActionPage,
}) => {
await loginPage.navigatetologin();
await loginPage.login("Admin", "admin123");
  await sideBarPage.navigateToAdmin();
  await navigationBarMenu.selectMainMenu("Qualifications");
  await navigationBarMenu.clickOnQualificationType("Skills");
  await skillsPage.clickOnAddButton();
  await skillsActionPage.addSkillName("Painting","It is artwork");
await skillsActionPage.deleteSkill("Painting")
});
