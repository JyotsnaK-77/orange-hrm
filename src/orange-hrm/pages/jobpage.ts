import { Page } from "@playwright/test";
export class JobPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
async navigateToJob() {
  await this.page.locator('.oxd-topbar-body-nav-tab-item').filter({ hasText: 'Job' }).click();
}
async clickOnJobType(submenu:'Job Titles'|'Pay Grades'|'Employment Status'|'Job Categories'|'Work Shifts') {
  await this.page.getByRole('menuitem',{name: submenu}).click();
}
}