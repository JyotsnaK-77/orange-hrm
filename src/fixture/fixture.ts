import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/loginpage";
import { SideBarPage } from "../pages/sidebarpage";
import { AdminUserManagementPage } from "../pages/adminusermanagementpage";
import { AddUserPage } from "../pages/adduserpage";
import { NavigationBarMenu } from "../pages/navigationbarmenu";
import { JobTitlePage } from "../pages/jobtitlepage";
import { AddJobTitlePage } from "../pages/addjobtitlepage";
import { UpdateGeneralInfoPage } from "../pages/updategeneralinfopage";
import { SkillsPage } from "../pages/skillspage";
import { SkillsActionsPage } from "../pages/skillsactionspage";

export const test = base.extend<{
  loginPage: LoginPage;
  sideBarPage: SideBarPage;
  adminUserManagementPage: AdminUserManagementPage;
  addUserPage: AddUserPage;
  navigationBarMenu: NavigationBarMenu;
  jobTitlePage: JobTitlePage;
  addJobTitlePage: AddJobTitlePage;
  updateGeneralInfoPage: UpdateGeneralInfoPage;
  skillsPage: SkillsPage;
  skillsActionPage: SkillsActionsPage;
}>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  sideBarPage: async ({ page }, use) => {
    const sideBarPage = new SideBarPage(page);
    await use(sideBarPage);
  },
  adminUserManagementPage: async ({ page }, use) => {
    const adminUserManagementPage = new AdminUserManagementPage(page);
    await use(adminUserManagementPage);
  },
  addUserPage: async ({ page }, use) => {
    const addUserPage = new AddUserPage(page);
    await use(addUserPage);
  },
  navigationBarMenu: async ({ page }, use) => {
    const navigationBarMenu = new NavigationBarMenu(page);
    await use(navigationBarMenu);
  },
  jobTitlePage: async ({ page }, use) => {
    const jobTitlePage = new JobTitlePage(page);
    await use(jobTitlePage);
  },
  addJobTitlePage: async ({ page }, use) => {
    const addJobTitlePage = new AddJobTitlePage(page);
    await use(addJobTitlePage);
  },
  updateGeneralInfoPage: async ({ page }, use) => {
    const updateGeneralInfoPage = new UpdateGeneralInfoPage(page);
    await use(updateGeneralInfoPage);
  },
   skillsPage: async ({ page }, use) => {
    const skillsPage = new SkillsPage(page);
    await use(skillsPage);
  },
   skillsActionPage: async ({ page }, use) => {
    const skillsActionPage = new SkillsActionsPage(page);
    await use(skillsActionPage);
  },
});
