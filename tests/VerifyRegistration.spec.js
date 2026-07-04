import{test,expect} from '@playwright/test';
import jsondata from "../testdata/JsonData.json"
import { faker } from '@faker-js/faker';
import ExcelJS from 'exceljs';
import path from 'path';



test('Verify registration functionality',async({page})=>{
const workbook = new ExcelJS.Workbook();
await workbook.xlsx.readFile('./testdata/XlsxData.xlsx');
const worksheet = workbook.getWorksheet('Sheet1');
const email = worksheet.getCell('B1').text;
await page.goto('https://demoqa.com/text-box');
await page.getByRole('link', { name: 'Text Box' }).click();
await page.getByRole('textbox', { name: 'Full Name' }).fill(faker.person.fullName());
await page.getByRole('textbox', { name: 'name@example.com' }).fill(email.toString());
await page.getByRole('textbox', { name: 'Current Address' }).fill(process.env.Current_Address);
await page.locator('#permanentAddress').fill(jsondata.permanentAddress);
await page.getByRole('button', { name: 'Submit' }).click()
const fullName = faker.person.fullName();
console.log("Full Name:", fullName);
console.log("Email:", email.toString());
console.log("Current Address:", process.env.Current_Address);
console.log("Permanent Address:", jsondata.permanentAddress);
await expect(page.getByRole('heading', { name: 'Text Box' })).toBeVisible();
});