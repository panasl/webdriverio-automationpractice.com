class WdioHelper {
  waitForElementToDisplay(element, timeout = 3000){
    element.waitForDisplayed(timeout)
  }

  waitForElementToExist(element, timeout = 3000){
    element.waitForExist(timeout)
  }

  waitForElementToEnable(element, timeout = 3000){
    element.waitForRnabled(timeout)
  }
}

module.exports = new WdioHelper()
