import { test, expect } from '@playwright/test';
test('Verify the add employee', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator("//span[text()='Admin']").click()
  await page.locator("//span[normalize-space(text())='Job']").click()
  await page.getByText('Employment Status', { exact: true }).click()
  await page.getByRole('button', { name: 'Add' }).click()
  await page.locator("//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']").fill('aDASFBDBFHJDFHJDAFJAF')
  await page.getByRole('button', { name: 'Save' }).click()
})