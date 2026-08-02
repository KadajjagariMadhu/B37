import { test, expect } from '@playwright/test';
 const loginDetails ={
    set1: {Username:"Admin",Password:"admin123"},
    set2: {Username:"Admin",Password:"grtujryk"},
    set3: {Username:"ewtru",Password:"admin123"},
    set4: {Username:"wreyrtu",Password:"eqtrury"}
 }
 for(let book in loginDetails){
test(`Verify the add employee-${book}`, async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(loginDetails[book].Username);
  await page.getByRole('textbox', { name: 'Password' }).fill(loginDetails[book].Password);
  await page.getByRole('button', { name: 'Login' }).click();
  if(book=="set1"){
   await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  }
  if(book==="set2"){
  await expect("page.getByText('Invalid credentials')").toBeVisible();
  }
  if(book=="set3"){
     await expect("page.getByText('Invalid credentials')").toBeVisible();
  }
  if(book=="set3"){
     await expect("page.getByText('Invalid credentials')").toBeVisible();

  }
  

})
}
