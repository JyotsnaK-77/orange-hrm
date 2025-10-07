import { Page } from "@playwright/test";
export class AdminUserManagementPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async clickAddButton() {
    await this.page.getByRole("button", { name: "Add" }).click();
  }
}