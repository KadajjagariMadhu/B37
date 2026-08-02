import { test, expect } from '@playwright/test';
//import { faker } from '@faker-js/faker';


const employeeData={
    set1:{
         firstname:"nabufjg",
         lastname:"kjh",
    },
    set2:{
          firstname:"hubauyik",
          lastname:"gjk"
    },
    set3:{
          firstname:"moonuogj",
          lastname:"gku"
    },
    set4:{
          firstname:"karooripjfi",
          lastname:"tek"
    },
} 
    for(let emp1 in employeeData){
       
  test(`add emp details-${emp1}`, async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  //const firstName = faker.person.firstName();
  //const lastName=faker.person.lastName();
  await page.waitForTimeout(5000);
  await page.getByRole('textbox', { name: 'First Name' }).fill(employeeData[emp1].firstname);
  await page.getByRole('textbox', { name: 'Last Name' }).fill(employeeData[emp1].lastname);
   await page.getByRole('button', { name: 'Save' }).click()
  //const employeeId = Math.floor(Math.random() * 100000);
  //await page.getByRole('textbox').nth(4).fill(employeeId.toString());  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
});
}


