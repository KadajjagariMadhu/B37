import { test, expect } from '@playwright/test';
import moment from "moment";
test('Verify the add employee', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator("//span[text()='Leave']").click()
  const onedayback=moment().subtract(1,'days').format('03-08-2026')
  console.log(onedayback)
  await page.locator('(//input[@placeholder="dd-mm-yyyy" and @class="oxd-input oxd-input--active"])[1]').fill(onedayback)
  const today=moment().format('04-08-2026')
  console.log(today)
  await page.locator('(//input[@placeholder="dd-mm-yyyy" and @class="oxd-input oxd-input--active"])[1]').fill(today)
})