import { test, expect } from '@playwright/test';

test('Login to OrangeHRM, open profile, and logout', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  const username = page.locator('input[placeholder="Username"]');
  const password = page.locator('input[placeholder="Password"]');
  const loginButton = page.getByRole('button', { name: 'Login' });

  await expect(username).toBeVisible();
  await expect(password).toBeVisible();
  await username.fill('Admin');
  await password.fill('admin123');

  await loginButton.click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

  const profileImage = page.locator('img[alt="profile picture"]').first();
  await expect(profileImage).toBeVisible();
  await profileImage.click();

  const logoutOption = page.locator('text=Logout').first();
  await expect(logoutOption).toBeVisible();
  await logoutOption.click();

  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(loginButton).toBeVisible();
});
