import { test, expect } from '@playwright/test';

test('OrangeHRM login with invalid username and invalid password shows error', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByRole('textbox', { name: 'Username' }).fill('invalidUser');
  await page.getByRole('textbox', { name: 'Password' }).fill('invalidPass123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Invalid credentials')).toBeVisible();
});
