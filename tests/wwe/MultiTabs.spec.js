import { test, expect } from "@playwright/test";
test("verify simple alert", async ({ page }) => {
    await page.goto('https://www.amazon.in/')
    await page.locator('#twotabsearchtextbox').nth(0).fill("iphones")
    await page.keyboard.press('Enter')
    const [newTab] =await Promise.all([
    page.waitForEvent('popup'),
    page.locator('(//img[@class="s-image"])[1]').click()

    ])
    await expect(newTab.locator('//a[@class="nav-logo-link nav-progressive-attribute"]')).toBeVisible()
    await newTab.close()
    await page.close()
    //await browser.close()
    

})