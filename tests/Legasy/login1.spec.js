import{test,expect}from"@playwright/test"
import { loginpage } from "../../pages/LoginPage.Po"
import data from "../../testdata/JsonData.json"
test("verify login functionality22",async({page})=>{
    const nn1 = new loginpage(page)
     await nn1.launchURL()
     await nn1.loginCreds(process.env.APP_username,process.env.APP_password)
     await nn1.verifyLoginSuccess()
})
test("verify valid username and invalid password",async({page})=>{
    const nn1 = new loginpage(page)
     await nn1.launchURL()
     await nn1.loginCreds(process.env.APP_username,"wertriury")
     await nn1.verifyLoginError()
})
test("verify invalid username and valid password",async({page})=>{
    const nn1 = new loginpage(page)
     await nn1.launchURL()
     await nn1.loginCreds("weyrtrurykl",process.env.APP_password)
     await nn1.verifyLoginError()
})
test("verify invalid username and invalid password",async({page})=>{
    const nn1 = new loginpage(page)
     await nn1.launchURL()
     await nn1.loginCreds("weyrtrurykl","wertriurdy")
     await nn1.verifyLoginError()
})