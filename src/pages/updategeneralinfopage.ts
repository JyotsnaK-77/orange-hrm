import { Page } from "@playwright/test";
type GeneralInformation = {orgname: string,
    regname: string,
    taxid: string,
    phoneno: string,
    fax: string,
    email: string,
    address1: string,
    address2?: string,
    city: string,
    state: string,
    zipcode: string,
    country: string,
    notes: string}
export class UpdateGeneralInfoPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async editGeneralInformation(generalinformationobj:GeneralInformation) {
    await this.page.getByLabel("Edit").click();
    await this.page
      .locator(".oxd-grid-item")
      .filter({ hasText: "Organization Name" })
      .locator("input")
      .fill(generalinformationobj.orgname);
    await this.page
      .locator(".oxd-grid-item")
      .filter({ hasText: "Registration Number" })
      .locator("input")
      .fill(generalinformationobj.regname);

    await this.page
      .locator(".oxd-grid-item")
      .filter({ hasText: "Tax ID" })
      .locator("input")
      .fill(generalinformationobj.taxid);

    await this.page
      .locator(".oxd-grid-item")
      .filter({ hasText: "Phone" })
      .locator("input")
      .fill(generalinformationobj.phoneno);

    await this.page
      .locator(".oxd-grid-item")
      .filter({ hasText: "Fax" })
      .locator("input")
      .fill(generalinformationobj.fax);

    await this.page
      .locator(".oxd-grid-item")
      .filter({ hasText: "Email" })
      .locator("input")
      .fill(generalinformationobj.email);

    await this.page
      .locator(".oxd-grid-item")
      .filter({ hasText: "Address Street 1" })
      .locator("input")
      .fill(generalinformationobj.address1);
  
if(generalinformationobj.address2){
  await this.page
      .locator(".oxd-grid-item")
      .filter({ hasText: "Address Street 2" })
      .locator("input")
      .fill(generalinformationobj.address2);
}
    await this.page
      .locator(".oxd-grid-item")
      .filter({ hasText: "City" })
      .locator("input")
      .fill(generalinformationobj.city);

    await this.page
      .locator(".oxd-grid-item")
      .filter({ hasText: "State/Province" })
      .locator("input")
      .fill(generalinformationobj.state);

    await this.page
      .locator(".oxd-grid-item")
      .filter({ hasText: "Zip/Postal Code" })
      .locator("input")
      .fill(generalinformationobj.zipcode);
    await this.page
      .locator(".oxd-grid-item")
      .filter({ hasText: "Country" })
      .locator(".oxd-select-text-input")
      .click();
    await this.page.getByRole("option", { name: generalinformationobj.country }).click();
    await this.page
      .locator(".oxd-grid-item")
      .filter({ hasText: "Notes" })
      .locator("textarea")
      .fill(generalinformationobj.notes);
    await this.page.getByRole("button", { name: "Save" }).click();
  }
}
