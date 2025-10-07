import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/loginpage";
import { SideBarPage } from "../pages/sidebarpage";
import { AdminUserManagementPage } from "../pages/adminusermanagementpage";
import { AddUserPage } from "../pages/adduserpage";
import { JobPage } from "../pages/jobpage";
import { JobTitlePage } from "../pages/jobtitlepage";
import { AddJobTitlePage } from "../pages/addjobtitlepage";

export const test = base.extend<{
  loginPage: LoginPage;
  sideBarPage: SideBarPage;
  adminUserManagementPage:AdminUserManagementPage;
  addUserPage:AddUserPage;
  jobPage:JobPage;
  jobTitlePage:JobTitlePage;
  addJobTitlePage:AddJobTitlePage;
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
   jobPage: async ({ page }, use) => {
    const jobPage = new JobPage(page);
    await use(jobPage);
   },
    jobTitlePage: async ({ page }, use) => {
    const jobTitlePage = new JobTitlePage(page);
    await use(jobTitlePage);
    },
     addJobTitlePage: async ({ page }, use) => {
    const addJobTitlePage = new AddJobTitlePage(page);
    await use(addJobTitlePage);
     },
});