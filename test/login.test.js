const loginPage = require("../pages/login.page");
const configData = require("../config")
const constants = require("../constants")
describe('login page feature test', function(){
    //retry logic
    // this.retries(2)
    it('verify login page title',function(){
         browser.url('/')
         browser.maximizeWindow();
         const title = loginPage.getPageTitle()
         console.log('login page title is', title);
         assert.equal(constants.LOGIN_PAGE_TITLE, title, 'title is not found error')
    })

    it('verify signup link',function(){
        browser.url('/')
        browser.maximizeWindow();
        loginPage.isSignUpLinkExist()
        assert.equal(false, loginPage.isSignUpLinkExist(), 'sign up link is not present')
   })

   it('verify login',function(){
    browser.url('/')
    browser.maximizeWindow();
    loginPage.doLogin(configData.username, configData.password)

})

})