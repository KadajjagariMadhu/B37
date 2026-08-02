import { test, expect } from '@playwright/test';

test('Verify about page', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Lutfi Ardiananto', { exact: true })
  await page.getByRole('menuitem', { name: 'About' })
  await page.getByRole('heading', { name: 'About' })
});

test('Verify support page', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('manda user', { exact: true })
  await page.getByRole('menuitem', { name: 'Support' })
  await page.getByText('Customer Support', { exact: true })
})

test('Verify change passaord page', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('manda user', { exact: true })
  await page.getByRole('menuitem', { name: 'Change Password' })
  await page.getByRole('heading', { name: 'Update Password' })})

test('Verify change password page', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click(); 
  await page.getByText('manda user', { exact: true })
  await page.getByRole('menuitem', { name: 'Logout' })
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible()
})