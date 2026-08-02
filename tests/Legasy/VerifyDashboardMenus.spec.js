import { test, expect } from '@playwright/test';

test ('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'Admin' }).click();
  await expect(page.locator('div').filter({ hasText: /^AdminUser Management$/ })).toBeVisible();
  await page.getByRole('link', { name: 'PIM' }).click();
  await expect(page.getByRole('heading', { name: 'PIM' })).toBeVisible();
  await page.getByRole('link', { name: 'Leave' }).click();
  await expect(page.getByRole('heading', { name: 'Leave', exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'Time' }).click();
  await expect(page.locator('div').filter({ hasText: /^TimeTimesheets$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Recruitment' }).click();
  await expect(page.getByRole('heading', { name: 'Recruitment' })).toBeVisible();
  await page.getByRole('link', { name: 'My Info' }).click();
  await expect(page.getByRole('heading', { name: 'PIM' })).toBeVisible();
  await page.getByRole('link', { name: 'Performance' }).click();
  await expect(page.locator('div').filter({ hasText: /^PerformanceManage Reviews$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'Directory' }).click();
  await page.getByRole('link', { name: 'Maintenance' }).click();
  await expect(page.getByRole('heading', { name: 'Administrator Access' })).toBeVisible();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.getByRole('link', { name: 'Claim' }).click();
  await expect(page.getByRole('heading', { name: 'Claim', exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'Buzz' }).click()
  await expect(page.getByRole('heading', { name: 'Buzz' })).toBeVisible();
});