import { test } from "../fixture/fixture";

test("Adding User to OrangeHRM", async({loginPage,sideBarPage,adminUserManagementPage,addUserPage})=>{
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
});

test("Adding Job Title to OrangeHRM", async({loginPage,sideBarPage,jobPage,jobTitlePage,addJobTitlePage})=>{
  await loginPage.navigatetologin();
  await loginPage.login("Admin", "admin123");
  await sideBarPage.navigateToAdmin();
  await jobPage.navigateToJob();
  await jobPage.clickOnJobType('Job Titles');
  await jobTitlePage.clickOnAddButton();
  await addJobTitlePage.enterJobTitle('Test Analyst');
  await addJobTitlePage.enterJobDescription('Manual/Automation Testing');
  await addJobTitlePage.uploadJobSpecificationFile('src/orange-hrm/test-data/Game+Delivery.xlsx');
  await addJobTitlePage.enterNoteInput('Testing team');
  await addJobTitlePage.clickSave();
})