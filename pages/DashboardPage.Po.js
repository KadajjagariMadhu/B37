
export class DashboardPage{
 constructor(page){
     this.page=page
     this.PIMMenu=page.locator('//a[@href="/web/index.php/pim/viewPimModule"]')
     this.BuzzMenu=page.locator('//a[@href="/web/index.php/buzz/viewBuzz"]')
 }
  async navigateToPIMMenu(){
    await this.PIMMenu.click()
  }
  async navigateToBuzzMenu(){
    await this.BuzzMenu.click()
  }
 
}
