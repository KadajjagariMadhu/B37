import {test,expect}from "@playwright/test";
//Is Visible
test("verify the logo",async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page.locator('//img[@alt="company-branding"]')).toHaveAttribute('alt','company-branding')
    //await expect (page.locator('//img[@alt="company-branding"]')).toBeVisible()
})
//Download file
test("download files",async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/download')
    const [download]=await Promise.all([
        page.waitForEvent('download'),
        page.locator('//a[@href="download/OpenCart-TestCases (1).xlsx"]').click()
    ])
})