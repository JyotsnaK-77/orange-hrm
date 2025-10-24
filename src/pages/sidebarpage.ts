import { Page } from "@playwright/test";
export class SideBarPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async navigateToAdmin() {
    await this.page.getByRole("link", { name: "Admin" }).click();
  }
}
