import{test,expect} from '@playwright/test';
test('verify check box ',async({page}) =>{

    const galarystatus = await page.goto('https://the-internet.herokuapp.com/disappearing_elements');
    await page.locator('//a[@href="/gallery/"]').isVisible();
    console.log(galarystatus);

    if(galarystatus){
     await page.locator('//a[@href="/gallery/"]').click();
     
    }else{
        await page.locator('//a[@href="/portfolio/"]').click();
    }
})