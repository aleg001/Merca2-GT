// import chrome from 'selenium-webdriver/chrome.js'
// import { Builder, Browser, By, Key, until } from 'selenium-webdriver'

import { By, Key, Builder } from 'selenium-webdriver'

async function example() {
  let driver = await new Builder().forBrowser('chrome').build()
  try {
    await driver.get('https://www.google.com/ncr')
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN)

    await driver.findElement(By.name('q')).sendKeys('Hello World')
  } finally {
    await driver.quit()
  }
}
example()
