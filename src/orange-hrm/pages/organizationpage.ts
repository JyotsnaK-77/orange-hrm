import { Page } from "@playwright/test";
type OrganizationType = "General Information" | "Locations" | "Structure"
export class OrganizationPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async navigateToOrganization() {
    await this.page
      .locator(".oxd-topbar-body-nav-tab-item")
      .filter({ hasText: "Organization" })
      .click();
  }
  async clickOnOrganizationType(
    submenu: OrganizationType
  ) {
    await this.page.getByRole("menuitem", { name: submenu }).click();
  }
}
