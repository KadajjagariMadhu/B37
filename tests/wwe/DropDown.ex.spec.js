import{test,expect}from"@playwright/test";
test("verify drop down",async({page})=>{
    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')
    //await page.locator('//select[@class="middle month"]').selectOption('MAR')//test
    //await page.locator('//select[@class="middle month"]').selectOption('03')//value
    await page.locator('//select[@class="middle month"]').selectOption({index:3})
    await page.waitForTimeout(3000)
})

test("verify radio button",async({page})=>{
    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')
    await page.locator('//input[@value="f"]').check()
    await page.waitForTimeout(3000)
    await page.locator('//input[@type="checkbox"]').check()
    await page.waitForTimeout(3000)
    await page.locator('//input[@type="checkbox"]').uncheck()
    await page.waitForTimeout(3000)
    await page.close()
})

test("verify multiple selects",async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    const checkboxes=['#checkBoxOption1','#checkBoxOption2','#checkBoxOption3']
    for(let checkbox of checkboxes){
        await page.locator(checkbox).check()
    }
})