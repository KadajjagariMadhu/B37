import{test,expect}from"@playwright/test"
import{loginpage}from"../../pages/LoginPage.Po"
import{DashboardPage}from"../../pages/DashboardPage.Po"
import{AddEmployeePage}from"../../pages/AddEmploye.Po"
import logindata from"../../testdata/JsonData.json"
import { faker } from "@faker-js/faker";
test("verify add employee login details",async({page})=>{
        const login=new loginpage(page)
        const dashboard=new DashboardPage(page)
        const addemp=new AddEmployeePage(page)

        await login.launchURL()
        await login.loginCreds(logindata.username,logindata.password)
        await login.verifyLoginSuccess()
        await dashboard.navigateToPIMMenu()
        await addemp.navigateToAddEmployeePage()
        await addemp.addEmployeeBasicDetails(faker.person.firstName(),faker.person.lastName(),faker.string.alphanumeric(5))
        await addemp.verifyAddEmployeeCreationSuccess()
    })