import{test, expect} from '@playwright/test';
import logindata from "from../../../testdata/Login.json"
import jobtitledata from "../testdata/AddJobTitle.json"
//import generateJobTitle from '../utilities../../'
test("verify the add job title",async({page})=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.locator("input[name='username']").fill(logindata.username)
await page.locator("input[name='password']").fill(logindata.password)
await page.locator("//button[contains(.,'Login')]").click()
await page.locator("//span[text()='Admin']").click()
await page.locator("//span[normalize-space(text())='Job']").click()
await page.getByText('Job Titles', { exact: true }).click()
await page.getByRole('button', { name: 'Add' }).click()
const jobtitle = Math.random().toString(36).substring(2, 12);
console.log(jobtitle)
await page.locator("div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']").fill(jobtitle)
await page.waitForTimeout(5000)
await page.getByRole('textbox', { name: 'Type description here' }).fill(jobtitledata.jobdescription)
await page.getByRole('textbox', { name: 'Add note' }).fill(jobtitledata.note)
await page.getByRole('button', { name: 'Save' }).click()
await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList')
})