// import chrome from 'selenium-webdriver/chrome.js'
// import { Builder, Browser, By, Key, until } from 'selenium-webdriver'

import { By, Key, Builder } from 'selenium-webdriver'

async function testLogin() {
  const driver = await new Builder().forBrowser('chrome').build()
  await driver.get('http://localhost:8080/')

  //*[@id="root"]/div/div/form/div/div[1]/input
  //*[@id="root"]/div/div/form/div/div[2]/input

  await driver
    .findElement(By.xpath('//*[@id="root"]/div/div/form/div/div[1]/input'))
    .sendKeys('pao')

  await driver
    .findElement(By.xpath('//*[@id="root"]/div/div/form/div/div[2]/input'))
    .sendKeys('pao')

  driver.findElement(By.xpath('//*[@id="root"]/div/div/form/button[1]')).click()

  setInterval(function () {
    driver.quit()
  }, 10000)
}

testLogin()
