import { test, expect } from '@playwright/test';

test('OrangeHRM login with empty username and empty password shows error', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByRole('button', { name: 'Login' }).click();

  const requiredMessages = page.getByText('Required');
  await expect(requiredMessages).toHaveCount(2);
  await expect(requiredMessages.first()).toBeVisible();
});
