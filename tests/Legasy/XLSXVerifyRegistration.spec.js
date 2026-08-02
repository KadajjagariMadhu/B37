import {test,expect} from '@playwright/test';
import jsondata from "../../testdata/JsonData.json"
import { faker } from '@faker-js/faker';
import ExcelJS from 'exceljs';
import path from 'path';



test('Verify registration functionality',async({page})=>{
console.log('Starting registration verification test');
const workbook = new ExcelJS.Workbook();
console.log('Loading Excel workbook from ./testdata/XlsxData.xlsx');
await workbook.xlsx.readFile('./testdata/XlsxData.xlsx');
console.log('Reading worksheet Sheet1');
const worksheet = workbook.getWorksheet('Sheet1');
const email = worksheet.getCell('B1').text;
console.log('Email from Excel:', email.toString());
await page.goto('https://demoqa.com/text-box');
await page.getByRole('link', { name: 'Text Box' }).click();
console.log('Clicked Text Box link');
const fullName = faker.person.fullName();
console.log('Generated full name:', fullName);
await page.getByRole('textbox', { name: 'Full Name' }).fill(fullName);
await page.getByRole('textbox', { name: 'name@example.com' }).fill(email.toString());
console.log('Filled email field with:', email.toString());
await page.getByRole('textbox', { name: 'Current Address' }).fill(jsondata.currentAddress);
console.log('Filled Current Address field with:', jsondata.currentAddress);
await page.locator('#permanentAddress').fill(jsondata.permanentAddress);
console.log('Filled Permanent Address field with:', jsondata.permanentAddress);
await page.getByRole('button', { name: 'Submit' }).click();
console.log('Clicked Submit button');
console.log('Full Name:', fullName);
console.log('Email:', email.toString());
console.log('Current Address:', process.env.Current_Address);
console.log('Permanent Address:', jsondata.permanentAddress);
await expect(page.getByRole('heading', { name: 'Text Box' })).toBeVisible();
console.log('Verified Text Box heading is visible');
});