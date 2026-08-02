import { test, expect } from '@playwright/test';

test('Verify login', async ({ page }) => {

    await page.goto('/web/index.php/auth/login');

    const usernametext=await page.locator('(//p[@class="oxd-text oxd-text--p"])[1]').textContent()
    console.log(usernametext) //"Usernme : Admin"
    const username=usernametext.split(" ")[2]
    await page.locator('//input[@name="username"]').fill(username)

    const passwordtext=await page.locator('(//p[@class="oxd-text oxd-text--p"])[2]').textContent()
    console.log(passwordtext) //"Password : admin123"
    const password=passwordtext.split(" ")[2]
    await page.locator('//input[@name="password"]').fill(password)
    
    
})

