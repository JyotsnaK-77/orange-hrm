import { Page } from "@playwright/test";
export class JobTitlePage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async clickOnAddButton() {
    await this.page.getByRole("button", { name: "Add" }).click();
  }
}
