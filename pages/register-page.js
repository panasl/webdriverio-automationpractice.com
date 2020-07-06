const wdioHelper = require('../util/wdio-helpers')
const constants = require('../constants/constants')

class RegisterPage {
  // Elements
  get signUpBtn(){
    return $('.login')
  }
  get createAccountEmail(){
    return $('#email_create')
  }
  get createBtn(){
    return $('#SubmitCreate')
  }
  get firsName(){
    return $('#customer_firstname')
  }
  get lastName(){
    return $('#customer_lastname')
  }
  get email(){
    return $('#email')
  }
  get passwrd(){
    return $('#passwd')
  }
  get selectDay(){
    return $('#days')
  }
  get selectMonth(){
    return $('#months')
  }
  get selectYears(){
    return $('#years')
  }
  get options(){
    return $('#optin')
  }
  get companyName(){
    return $('#company')
  }
  get address(){
    return $('#address1')
  }
  get city(){
    return $('#city')
  }
  get stats(){
    return $('#id_state')
  }
  get zip(){
    return $('#postcode')
  }
  get country(){
    return $('#id_country')
  }
  get information(){
    return $('#other')
  }
  get phoneHome(){
    return $('#phone')
  }
  get phoneMob(){
    return $('#phone_mobile')
  }
  get alias(){
    return $('#alias')
  }
  get registerBtn(){
    return $('#submitAccount')
  }

  // Page actions
  setEmail(){
    const value = this.generateUserDetails('newValidEmail')
    this.createAccountEmail.setValue(value)
  }
  clickSignUp(){
    wdioHelper.waitForElementToExist(this.signUpBtn)
    this.signUpBtn.click()
  }
  newUserSignUp(){
    this.clickSignUp()
    this.setEmail()
    wdioHelper.waitForElementToExist(this.createBtn)
    this.createBtn.click()
  }
  personalTitle(index){
    return $(`#id_gender${index}`)
  }
  selectPersonalTitle(index){
    this.personalTitle(index).click()
  }
  newUserRegisterInfo(){
    this.selectPersonalTitle(2)
    const firstName = this.generateUserDetails('firstName')
    this.firsName.setValue(firstName)
    const lastName = this.generateUserDetails('surName')
    this.lastName.setValue(lastName)
    const passwrd = this.generateUserDetails('validPasswordIs')
    this.passwrd.setValue(passwrd)
    this.selectDateOfBirth('24')
    this.selectMonthOfBirth('12')
    this.selectYearOfBirth('2000')
    this.options.click()
    const company = this.generateUserDetails('company')
    this.companyName.setValue(company)
    const addressLine = this.generateUserDetails('addressLine')
    this.address.setValue(addressLine)
    const cityName = this.generateUserDetails('cityName')
    this.city.setValue(cityName)
    this.selectState(5)
    const postCode = this.generateUserDetails('postCode')
    this.zip.setValue(postCode)
    this.additionalInformation()
    const homeNumber = this.generateUserDetails('homeNumber')
    this.phoneHome.setValue(homeNumber)
    const mobileNumber = this.generateUserDetails('mobileNumber')
    this.phoneMob.setValue(mobileNumber)
    this.alias.setValue(addressLine)

    // Click and register new user
    this.clickRegisterBtn()
  }
  generateUserDetails(detailType){
    switch(detailType){
      case 'newValidEmail':
        const newEmail = Math.random().toString(36).substring(2,15)
        + '@gmail.com'
        return newEmail

      case 'validPasswordIs':
        const validPasswordIs = Math.random().toString(36).substring(2,15)
        +123
        return validPasswordIs

      case 'firstName':
        const firstName = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 7)
        return firstName

      case 'surName':
        const surName = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 7)
        return surName

      case 'mobileNumber':
        const mobileNumber =  Math.floor(Math.random() * 100000000)
        return '074' +  mobileNumber

      case 'homeNumber':
        const homeNumber =  Math.floor(Math.random() * 100000000)
        return '020' + homeNumber

      case 'postCode':
        const postCode = Math.floor(Math.random() * 10000)
        return postCode + '1'

      case 'addressLine':
        const addressLine = 'Mushroom kingdom 25'
        return addressLine

      case 'cityName':
        const cityName = 'Boston'
        return cityName

      case 'company':
        const companyName = 'CoolLife'
        return companyName

      default :
        const text = 'No user details required'
        return text
    }
  }
  selectDateOfBirth(number){
    this.selectDay.selectByAttribute('value', number)
  }
  selectMonthOfBirth(number){
    this.selectMonth.selectByAttribute('value', number)
  }
  selectYearOfBirth(number){
    this.selectYears.selectByAttribute('value', number)
  }
  selectState(index){
    this.stats.selectByIndex(index)
  }
  additionalInformation(){
    this.information.setValue(constants.ADDITIONAL_INFO)
  }
  addressAlias(){
    this.alias
  }
  clickRegisterBtn(){
    this.registerBtn.click()
  }
}
module.exports = new RegisterPage()
