import { test, expect } from '@playwright/test';

test('Verify menu items', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.APP_username);
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.APP_password);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

  const menuitems = await page.locator('//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"]').allTextContents();
  console.log(menuitems);

  await expect(menuitems.includes("PIM")).toBe(true); // all menuitems will get it into the array
   // then we can check whether is it is there or not
});