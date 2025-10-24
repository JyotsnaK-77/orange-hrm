import { Page } from "@playwright/test";
export class SkillsPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async clickOnAddButton() {
    await this.page.getByRole("button", { name: "Add" }).click();
  }
}