import { expect } from "@playwright/test";
export class AddEmployeePage{
    constructor(page){
        this.page=page
        this.AddEmployeeSubMenu=page.getByText('Add Employee')
        this.firstNameInput=page.locator('input[name="firstName"]')
        this.lastNameInput=page.locator('input[name="lastName"]')
        this.employeeIDInput=page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
        this.saveButton=page.locator('//button[@type="submit"]')
        this.personalDetails=page.locator("//h6[text()='Personal Details']")
    }

    async navigateToAddEmployeePage(){
        await this.AddEmployeeSubMenu.click()
        
    }
    async addEmployeeBasicDetails(firstName, lastName, empid){
        await this.firstNameInput.fill(firstName)
        await this.lastNameInput.fill(lastName)
        await this.employeeIDInput.fill(empid)
        await this.saveButton.click()

    }
    async verifyAddEmployeeCreationSuccess(){
        await expect(this.personalDetails).toBeVisible()
    }
}
