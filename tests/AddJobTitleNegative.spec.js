import{test, expect} from '@playwright/test';
test("verify the add job title",async({page})=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.locator("input[name='username']").fill('Admin')
await page.locator("input[name='password']").fill('admin123')
await page.locator("//button[contains(.,'Login')]").click()
await page.locator("//span[text()='Admin']").click()
await page.locator("//span[normalize-space(text())='Job']").click()
await page.getByText('Job Titles', { exact: true }).click()
await page.getByRole('button', { name: 'Add' }).click()
await page.locator("//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']").fill('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcddfertreyytywywrtwerhqeurheuqhruoherueqhuhqeurhqquhqeufhqfqeefghijabcdsefghijabcdefghijabcd');
await expect (page.getByText('Should not exceed 100 characters')).toHaveText('Should not exceed 100 characters');
await page.getByRole('textbox', { name: /Type description here/i }).fill("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890")
await expect (page.getByText('Should not exceed 400 characters')).toHaveText('Should not exceed 400 characters')
await page.getByRole('textbox', { name: /Add note/i }).fill("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890")
await expect(page.locator('span').filter({ hasText: 'Should not exceed 400 characters' }).last()).toHaveText('Should not exceed 400 characters')
})