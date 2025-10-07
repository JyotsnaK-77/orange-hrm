import { Page } from "@playwright/test";
export class LoginPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async navigatetologin() {
    await this.page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  }

  async login(userid: string, pwd: string) {
    await this.page.getByPlaceholder("Username").fill(userid);
    await this.page.getByPlaceholder("Password").fill(pwd);
    await this.page.getByRole("button", { name: "Login" }).click();
  }
}