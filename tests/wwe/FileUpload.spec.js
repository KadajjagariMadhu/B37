import { faker } from '@faker-js/faker';
import { test, expect } from '@playwright/test';
test('Verify the add employee', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('//a[@href="/web/index.php/pim/viewPimModule"]').click();
  await page.waitForTimeout(3000);
  await page.locator('//a[text()="Add Employee"]').click();
  await page.waitForTimeout(3000);
  await page.locator('//input[@name="firstName"]').fill(faker.person.firstName());
  await page.waitForTimeout(3000);
  await page.locator('//input[@name="lastName"]').fill(faker.person.lastName());
  await page.waitForTimeout(3000);
  await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill(faker.string.alphanumeric(5));
  await page.waitForTimeout(3000);
  //upload file
  //await page.locator('//input[@type="file"]').setInputFiles(['tests/Legasy/clarified_exam_hall_ticket.png'],'testdata/XlsxData.xlsx');
  await page.locator('//input[@type="file"]').setInputFiles('testdata/XlsxData.xlsx');
  await expect(page.locator('//span[text()="File type not allowed"]')).toBeVisible();
  await page.waitForTimeout(3000);



})