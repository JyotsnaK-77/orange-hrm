import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/?zx=1760438517094&no_sw_cr=1');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('news');
  await page.getByRole('combobox', { name: 'Search' }).press('ArrowDown');
  await page.getByRole('combobox', { name: 'Search' }).press('ArrowDown');
  await page.getByRole('combobox', { name: 'Search' }).press('ArrowDown');
  await page.locator('iframe[name="a-npm7p6314x5g"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('div:nth-child(2) > div').first().click();
  await page.locator('iframe[name="a-npm7p6314x5g"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('iframe[name="c-npm7p6314x5g"]').contentFrame().locator('[id="1"]').click();
  await page.locator('iframe[name="c-npm7p6314x5g"]').contentFrame().locator('[id="1"]').click();
  await page.locator('iframe[name="c-npm7p6314x5g"]').contentFrame().locator('[id="3"]').click();
  await page.locator('iframe[name="c-npm7p6314x5g"]').contentFrame().locator('[id="8"]').click();
  await page.locator('iframe[name="c-npm7p6314x5g"]').contentFrame().locator('[id="2"]').click();
  await page.locator('iframe[name="c-npm7p6314x5g"]').contentFrame().locator('[id="8"]').click();
  await page.locator('iframe[name="c-npm7p6314x5g"]').contentFrame().locator('[id="8"]').click();
  await page.locator('iframe[name="c-npm7p6314x5g"]').contentFrame().locator('[id="8"]').click();
  await page.locator('iframe[name="c-npm7p6314x5g"]').contentFrame().locator('[id="3"]').click();
  await page.locator('iframe[name="c-npm7p6314x5g"]').contentFrame().locator('[id="3"]').click();
  await page.locator('iframe[name="c-npm7p6314x5g"]').contentFrame().locator('[id="3"]').click();
});