import { expect } from "@playwright/test";

export class loginpage{

    constructor(page){
       this.page=page
       this.usernameInput = page.locator('//input[@name="username"]')
       this.passwordInput = page.locator('//input[@name="password"]')
       this.loginbutton = page.locator('//button[@type="submit"]')
       this.loginError = page.locator('//p[@class="oxd-text oxd-text--p oxd-alert-content-text"]')

    }
    async launchURL(){
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    }
    async loginCreds(username,password ){
         await this.usernameInput.fill(username)
         await this.passwordInput.fill(password)
         await this.loginbutton.click()
    }
    async verifyLoginError(){
        await expect(this.loginError).toBeVisible()
    }
    async verifyLoginSuccess(){
        await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    }
}




