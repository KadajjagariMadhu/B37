import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('DemoQA Text Box - submit dynamically generated details', async ({ page }) => {
  const fullName = faker.person.fullName();
  const email = faker.internet.email({ firstName: faker.person.firstName(), lastName: faker.person.lastName() });
  const currentAddress = `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.zipCode()}`;
  const permanentAddress = `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.zipCode()}`;

  await page.goto('https://demoqa.com/text-box', { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('#userName');

  await page.locator('#userName').fill(fullName);
  await page.locator('#userEmail').fill(email);
  await page.locator('#currentAddress').fill(currentAddress);
  await page.locator('#permanentAddress').fill(permanentAddress);

  await page.locator('#submit').click();

  await expect(page.locator('#output')).toBeVisible();
  await expect(page.locator('#output #name')).toHaveText(`Name:${fullName}`);
  await expect(page.locator('#output #email')).toHaveText(`Email:${email}`);
  await expect(page.locator('#output #currentAddress')).toHaveText(`Current Address :${currentAddress}`);
  await expect(page.locator('#output #permanentAddress')).toHaveText(`Permananet Address :${permanentAddress}`);
});
