import { test, expect } from '@playwright/test';

test('Expected failure test', async ({ page }) => {

    test.fail();

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Intentionally wrong assertion
    await expect(
        page.getByRole('heading', { name: 'This heading does not exist' })
    ).toBeVisible();

});