import{test,expect}from"@playwright/test";
test("verify drag and drop",async({page})=>{
    await page.goto('https://kitchen.applitools.com/ingredients/drag-and-drop')
    await page.locator('#menu-fried-chicken').dragTo(page.locator('#plate-items'))
    await page.locator('#menu-hamburger').dragTo(page.locator("#plate-items"))
    await page.locator('#menu-ice-cream').dragTo(page.locator("#plate-items"))

})