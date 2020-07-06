const registerPage = require('../pages/register-page')
const constants = require('../constants/constants')
const { assert, expect } = require('chai')

describe('Register', () => {
  describe('A new user should be able to register', () => {
    it('should get the homepage', ()=>{
      browser.url('/')
      browser.maximizeWindow()
      const title = browser.getTitle()
      assert.equal(title, constants.FIRST_PAGE_TITLE, 'Title not found')
    })

    it('should create an account', () => {
      registerPage.newUserSignUp()
      expect(browser.getUrl()).to.contain('my-account')
      registerPage.newUserRegisterInfo()
      browser.pause(3000)
      const title = browser.getTitle()
      assert.equal(title, constants.SECOND_PAGE_TITLE, "Title not found")
    })
  })
})
