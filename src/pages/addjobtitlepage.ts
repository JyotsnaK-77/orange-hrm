import { expect, Page } from "@playwright/test";
export class AddJobTitlePage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async enterJobTitle(title: string) {
    await this.page
      .locator(".oxd-input-group")
      .filter({ hasText: "Job Title" })
      .locator("input")
      .fill(title);
  }
  async enterJobDescription(description: string) {
    await this.page.getByPlaceholder("Type description here").fill(description);
  }
  async uploadJobSpecificationFile(filePath: string) {
    await this.page.locator('input[type="file"]').setInputFiles(filePath);
  }
  async enterNoteInput(note: string) {
    await this.page.getByPlaceholder("Add note").fill(note);
  }
  async clickSave() {
    await this.page.getByRole("button", { name: "Save" }).click();
  }
   async addJobTitleUsingAPI(title:string){
    await this.page.request.post("https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/job-titles",
      {data:{title:title,description:"",specification:null,note:""}})
  }
  async validateJobTitle(title:string){
    await expect(this.page.getByText(title)).toBeVisible();
  }
}
