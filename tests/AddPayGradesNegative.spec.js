import { test, expect } from '@playwright/test';
test('Verify the add employee', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator("//span[text()='Admin']").click()
  await page.locator("//span[normalize-space(text())='Job']").click()  
  await page.getByRole('menuitem', { name: 'Pay Grades' }).click();
  await page.getByRole('button', { name: 'Add' }).click()
  await page.locator("//label[normalize-space(text())='Name']/following::input").fill("aDASFBDBBDFABHBHBFBDKFBKBFAHKBFADBFKHBFJDFJAFNJJNFJSFNKJSFJLAFJLADFLJADJFDAJLFADJFJADFJADHFJDAHFJAHFJAHDJFLDAJLFHJADHFJDAHFJDAHFJDAHFJDJFHJDFHJDAFJAF")
  await expect(page.getByText('Should not exceed 50')).toBeVisible();
});