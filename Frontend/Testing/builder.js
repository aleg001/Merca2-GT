// import chrome from 'selenium-webdriver/chrome.js'
// import { Builder, Browser, By, Key, until } from 'selenium-webdriver'

import { By, Key, Builder } from 'selenium-webdriver'

async function example() {
  let driver = await new Builder().forBrowser('chrome').build()
  await driver.get('http://localhost:8080/')
  await driver.findElement(By.name('q')).sendKeys('Hello World', Key.RETURN)

  setInterval(function () {
    driver.quit()
  }, 10000)
}

/*
async function testLogin() {
    let driver = await new Builder().forBrowser('chrome').build()
    await driver.get("http://localhost:8080/")

    WebElement caja_usuario = findElement_by_xpath("//a[@placeholderText='Usuario']")
    caja_usuario.sendKeys('pao')

    WebElement caja_usuario = findElement_by_xpath("//a[@placeholderText='Contraseña']")
    caja_usuario.sendKeys('pao')

    driver.find_element_by_class_name('btnLogin').click()


    await driver.findElements(By.xpath("//ul[@placeholderText='Usuario']").sendKeys('Pao'))
    await driver.findElements(By.xpath("//ul[@title='Ingrese su contraseña']").sendKeys('Pao'))
    await 

}
*/

example()
