import { Page } from "@playwright/test";
export class SkillsActionsPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async addSkillName(name: string, description?: string) {
    await this.page
      .locator(".oxd-input-group")
      .filter({ hasText: "Name" })
      .locator("input")
      .fill(name);
    if (description) {
      await this.page
        .locator(".oxd-input-group")
        .filter({ hasText: "Description" })
        .locator("textarea")
        .fill(description);
    }
    await this.page.getByRole("button", { name: "Save" }).click();
  }
  async deleteSkill(skillName: string) {
    await this.page
      .locator(".oxd-table-row")
      .filter({ hasText: skillName })
      .locator("button")
      .filter({ has: this.page.locator("i.bi-trash") })
      .click();
    await this.page.getByRole("button", { name: "Yes, Delete" }).click();
  }
}
