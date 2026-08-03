import{test,expect} from '@playwright/test';
import demoqa from "../../testdata/demoqa.json"with { type: "json" };

test('verify test box', async({page})=>{
await page.goto('https://demoqa.com/text-box')
await expect(page.locator('//h1[text()="Text Box"]')).toHaveText('Text Box')
await expect(page.locator('//h1[text()="Text Box"]')).toBeVisible()
await page.locator('//input[@placeholder="Full Name"]').pressSequentially(demoqa.fullname+'kumar',{delay:1000})
await page.locator('//input[@placeholder="name@example.com"]').fill(demoqa.email)
await page.locator('//textarea[@id="currentAddress"]').fill(demoqa.currentaddress)
await page.locator('//textarea[@id="permanentAddress"]').fill(demoqa.permanentaddress)
await page.locator('//button[@id="submit"]').click()
await expect(page.locator('//p[@id="name"]')).toContainText(demoqa.fullname)

    
})
