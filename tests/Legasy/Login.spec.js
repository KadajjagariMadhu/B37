import { test, expect } from '@playwright/test';
import logindata from "../../testdata/Login.json";
test('Verify the orange hrm logo', async ({ page }) => {

  // if(process.env.ENVIRONMENT=="DEV"){
  //   await page.goto('www.dev.com/');
  // }else if(process.env.ENVIRONMENT=="DEV"){
  //   await page.goto('www.qa.com/'); 
  // }else if('process.env.prepod.com/'){
  //   await page.goto('www.prepod.com/');
  //   }

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible()
});
test('Verify the login functionality with valid credentials', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.APP_username);
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.APP_password);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});

test("verify 1/4 vegitables",async({page})=>{
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/')
  let vegi=await page.locator('//h4[@class="product-name"]').allTextContents()
  console.log(vegi.filter(element=>element.includes("1/4 Kg")))
})


