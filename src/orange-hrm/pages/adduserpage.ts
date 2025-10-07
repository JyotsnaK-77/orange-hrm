import { Page } from "@playwright/test";
export class AddUserPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async selectOption(option: 'Admin'|'ESS') {
    await this.page.locator('.oxd-grid-item').filter({hasText:'User Role'}).locator(".oxd-select-text-input").click();
    await this.page.getByRole('option', {name:option }).click();
  }
  async selectEmployeeName(text: string) {
    await this.page.getByPlaceholder("Type for hints...").pressSequentially(text);
  }
  async selectOptionStatus(optionText: string) {
    await this.page.locator('.oxd-grid-item').filter({hasText:'Status'}).locator(".oxd-select-text-input").click();
    await this.page.getByRole('option', {name:optionText }).click();
  }
  async fillUsername(user: string) {
   await this.page.locator('.oxd-grid-item').filter({hasText:'Username'}).getByRole('textbox').fill(user);
  }
  async fillPassword(password: string) {
    await this.page.locator('.oxd-grid-item').filter({hasText:/^Password/}).getByRole('textbox').fill(password);
  }
   async fillConfirmPassword(confirmpassword: string) {
    await this.page.locator('.oxd-grid-item').filter({hasText:'Confirm Password'}).getByRole('textbox').fill(confirmpassword);
  }
  async clickSave() {
    await this.page.getByRole("button", { name: "Save" }).click();
  }
}
