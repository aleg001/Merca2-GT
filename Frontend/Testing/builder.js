// import chrome from 'selenium-webdriver/chrome.js'
// import { Builder, Browser, By, Key, until } from 'selenium-webdriver'

import { By, Key, Builder } from 'selenium-webdriver'

async function testLogin() {
  const driver = await new Builder().forBrowser('chrome').build()
  await driver.get('http://localhost:8080/')

  await driver
    .findElement(By.cssSelector("input[id*='userInput']"))
    .getAttribute('Usuario')
    .sendKeys('pao')

  console
    .log(
      driver
        .findElement(By.cssSelector("input[id*='userInput']"))
        .getAttribute('Usuario')
    )
    .sendKeys('pao')

  driver.find_element_by_class_name('btnLogin').click()

  setInterval(function () {
    driver.quit()
  }, 10000)
}

testLogin()
