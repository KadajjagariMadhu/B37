// import { test, expect } from '@playwright/test';
// const xyz= ["Admin","admin123"] //Array
// test('Verify the orange hrm logo',{tag:"@smoke"}, async ({ page }) => {
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible()
// });
// test('Verify the login functionality with valid credentials', async ({ page }) => {
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await page.getByRole('textbox', { name: 'Username' }).fill(xyz[0]);
//   await page.getByRole('textbox', { name: 'Password' }).fill(xyz[1]);
//   await page.getByRole('button', { name: 'Login' }).click();
//   await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
// });
// test('Verify the valid user name and invalid password',{tag:"@smoke"}, async ({ page }) => {
//   //xyx[1]="madhu" // changing the index 2 value of array 
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
//   await page.getByRole('textbox', { name: 'Password' }).fill('wqtreuy');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await expect(page.getByText('Invalid credentials')).toBeVisible();
// });
// test('Verify the invalid user name and valid password', async ({ page }) => {
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await page.getByRole('textbox', { name: 'Username' }).fill('etyriyu');
//   await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await expect(page.getByText('Invalid credentials')).toBeVisible();
// });
// test('Verify the login functionality with empty credentials', async ({ page }) => {
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.getByText('Required').first().click();
//   await expect(page.getByText('Required').nth(1)).toBeVisible();
// });
// test('Verify the invalid user name and invalid password', async ({ page }) => {
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await page.getByRole('textbox', { name: 'Username' }).fill('wetryi');
//   await page.getByRole('textbox', { name: 'Password' }).fill('qw5ete8u');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await expect(page.getByText('Invalid credentials')).toBeVisible();
// });




import { test, expect } from '@playwright/test';

const xyz = ["Admin", "admin123"];

test('Verify the orange hrm logo', { tag: "@smoke" }, async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();
});

test('Verify the login functionality with valid credentials', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(xyz[0]);
  await page.getByRole('textbox', { name: 'Password' }).fill(xyz[1]);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});

test('Verify the valid user name and invalid password', { tag: "@smoke" }, async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('wqtreuy');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});

test('Verify the invalid user name and valid password', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('etyriyu');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});

test('Verify the login functionality with empty credentials', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Required').first()).toBeVisible();
  await expect(page.getByText('Required').nth(1)).toBeVisible();
});

test('Verify the invalid user name and invalid password', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('wetryi');
  await page.getByRole('textbox', { name: 'Password' }).fill('qw5ete8u');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});