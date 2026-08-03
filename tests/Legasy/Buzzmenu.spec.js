import{test,expect} from "@playwright/test";
import{loginpage} from "../../pages/LoginPage.Po";
import{DashboardPage} from "../../pages/DashboardPage.Po";
import { BuzzNewsfeed } from "../../pages/BuzzNewsfeed.Po";
//import data from "../testdata/JsonData.json"

test("verify buzzmenu functionality",async({page})=>{
    const login=new loginpage(page)
    const dashboard=new DashboardPage(page)
    const BuzzNewsMessage=new BuzzNewsfeed(page)

    await login.launchURL()
    //await login.loginCreds(data.username,data.password)
    await login.loginCreds("Admin", "admin123");
    await login.verifyLoginSuccess()
    await dashboard.navigateToBuzzMenu()
    await BuzzNewsMessage.enterBuzzPost("hey Hi everyone")


})