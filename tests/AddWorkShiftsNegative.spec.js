import { test, expect } from '@playwright/test';
test('Verify the add employee', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator("//span[text()='Admin']").click()
  await page.locator("//span[normalize-space(text())='Job']").click()
  await page.getByText('Work Shifts', { exact: true }).click()
  await page.getByRole('button', { name: 'Add' }).click()
  await page.locator("//div[@class='oxd-grid-2 orangehrm-full-width-grid']//div[@class='oxd-grid-item oxd-grid-item--gutters']//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']").fill("page.getByText('Should not exceed 50 characters', { exact: true })")
  await expect (page.getByText('Should not exceed 50 characters', { exact: true })).toBeVisible()
  await page.locator("//div[@class='oxd-grid-4 orangehrm-full-width-grid']//div[1]//div[1]//div[2]//div[1]//div[1]//input[1]").fill("")
  await expect(page.getByText('Required').first()).toBeVisible();
  await page.locator("//div[@class='oxd-form-row']//div[2]//div[1]//div[2]//div[1]//div[1]//input[1]").fill("")
  await expect (page.locator('span').filter({ hasText: 'Required' }).first()).toBeVisible()
  
})