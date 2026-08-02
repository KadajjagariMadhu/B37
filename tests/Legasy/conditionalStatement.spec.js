import{test, expect, firefox}from '@playwright/test';

test('conditional statements',async({page,browserName})=>{

if(browserName=="firefox")
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.waitForTimeout(5000);
})

test('conditional statements1',async({page,browserName})=>{

    if(browserName=="chromium")

    {
        await page.goto('https://www.flipkart.com/');
    }
    else if(browserName=="firefox")
    {
        await page.goto('https://www.amazon.in/');
        await page.waitForTimeout(5000);

    }
    else if(browserName=="webkit")
    {
        await page.goto('https://www.myntra.com/');

    }

})

test('conditional statements2', async ({ page, browserName }) => {

    switch ("browserName") {

        case "firefox": {
            await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
            break;
        }

        case "chromium": {
            await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
            break;
        }

        case "webkit": {
            await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
            break;
        }

        default: {
            console.log("Unsupported Browser");
            break;
        }
    }

});