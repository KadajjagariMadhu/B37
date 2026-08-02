export class BuzzNewsfeed{
   constructor(page){
    this.page=page
    this.BuzzNewsFeed=page.locator('//textarea[@class="oxd-buzz-post-input"]')
    this.BuzzNewsFeedButton=page.locator('button[type="submit"]')
  }
  async enterBuzzPost(message){
    await this.BuzzNewsFeed.fill(message)
    await this.BuzzNewsFeedButton.click()
  }
}