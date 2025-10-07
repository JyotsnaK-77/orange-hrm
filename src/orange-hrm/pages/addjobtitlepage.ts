import { Page } from "@playwright/test";
export class AddJobTitlePage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async jobTitle(title:string) {
    await this.page.locator('.oxd-input-group').filter({ hasText: 'Job Title' }).locator('input').fill(title);
  }
async jobDescription(description:string){
    await this.page.getByPlaceholder('Type description here').fill(description);
}
async jobSpecification(filePath:string){
    await this.page.locator('input[type="file"]').setInputFiles(filePath);
  }
async noteInput(note:string){
    await this.page.getByPlaceholder('Add note').fill(note);
}
async clickSave(){
    await this.page.getByRole('button', { name: 'Save' }).click();
}
}

