import{test,expect} from '@playwright/test';
test('check ternary condition ',async({page}) =>{

    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details');
    const statusofcheckbox= await page.locator('//input[@type="checkbox"]').isChecked();
    await page.waitForTimeout(10000);
    console.log(statusofcheckbox);


    if (!statusofcheckbox){
        await page.locator('//input[@type="checkbox"]').check();


    }
});
