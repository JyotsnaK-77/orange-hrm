import { Page } from "@playwright/test";
export class JobPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
async navigateToJob() {
  await this.page.locator('.oxd-topbar-body-nav-tab-item').filter({ hasText: 'Job' }).click();
}
async clickoOnJobTitle() {
  await this.page.getByRole('menuitem',{name:'Job Titles'}).click();
}
}