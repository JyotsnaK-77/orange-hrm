import { test, chromium, expect } from "@playwright/test";

test("validate orange hrm portal", async ({}) => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(
    page.getByText("Employee Distribution by Sub Unit")
  ).toBeVisible();
 const context2 = await browser.newContext(); //creating 2nd context here
  const page2 = await context2.newPage(); //creating 2nd page using 2nd context
 await page2.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
 await expect(
    page2.getByText("Employee Distribution by Sub Unit")
  ).toBeVisible();
});









