import { Page } from "@playwright/test";
type OrganizationType = "General Information" | "Locations" | "Structure";
type JobMenuType = {
  mainMenu: "Job";
  subMenu:
    | "Job Titles"
    | "Pay Grades"
    | "Employment Status"
    | "Job Categories"
    | "Work Shifts";
};
type OrganizationMenuType = {
  mainMenu: "Organization";
  subMenu: OrganizationType;
};
type UserManagementType = "Users";
type QualificationsType =
  | "Skills"
  | "Education"
  | "Licenses"
  | "Languages"
  | "Memberships";
type ConfigurationType =
  | "Email Configuration"
  | "Email Subscriptions"
  | "Localization"
  | "Modules"
  | "Social Media Authentication"
  | "Register OAuth Client"
  | "LDAP Configuration";
type UserManagementMenuType = {
  mainMenu: "User Management";
  subMenu: UserManagementType;
};
type QualificationsMenuType = {
  mainMenu: "Qualifications";
  subMenu: QualificationsType;
};
type ConfigurationMenuType = {
  mainMenu: "Configuration";
  subMenu: ConfigurationType;
};
type AllMenu =
  | JobMenuType
  | OrganizationMenuType
  | UserManagementMenuType
  | QualificationsMenuType
  | ConfigurationMenuType;
export class NavigationBarMenu {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async selectMainMenu(
    menu:
      | "User Management"
      | "Job"
      | "Organization"
      | "Qualifications"
      | "Nationalities"
      | "Corporate Branding"
      | "Configuration"
  ) {
    await this.page
      .locator(".oxd-topbar-body-nav-tab-item")
      .filter({ hasText: menu })
      .click();
  }
  async clickOnJobType(
    submenu:
      | "Job Titles"
      | "Pay Grades"
      | "Employment Status"
      | "Job Categories"
      | "Work Shifts"
  ) {
    await this.page.getByRole("menuitem", { name: submenu }).click();
  }
  async clickOnOrganizationType(submenu: OrganizationType) {
    await this.page.getByRole("menuitem", { name: submenu }).click();
  }
  async selectMenu(menu: AllMenu) {
    await this.page
      .locator(".oxd-topbar-body-nav-tab-item")
      .filter({ hasText: menu.mainMenu })
      .click();
    await this.page.getByRole("menuitem", { name: menu.subMenu }).click();
  }
  async clickOnQualificationType(submenu: QualificationsType){
    await this.page.getByRole("menuitem", { name: submenu }).click();
  }
    
  }

