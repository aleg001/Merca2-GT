/* eslint-disable no-plusplus */
// import chrome from 'selenium-webdriver/chrome.js'
// import { Builder, Browser, By, Key, until } from 'selenium-webdriver'
/* eslint-disable */

import { By, Key, Builder } from 'selenium-webdriver'
import JavascriptExecutor from 'selenium-webdriver'

async function testLogin() {
  const driver = await new Builder().forBrowser('chrome').build()

  await driver.get('http://localhost:8080/')

  await driver
    .findElement(By.xpath('//*[@id="root"]/div/div/form/div/div[1]/input'))
    .sendKeys('pao')

  await driver
    .findElement(By.xpath('//*[@id="root"]/div/div/form/div/div[2]/input'))
    .sendKeys('pao')

  await driver
    .findElement(By.xpath('//*[@id="root"]/div/div/form/button[1]'))
    .click()

  setInterval(function () {
    driver.close()
    driver.quit()
  }, 3000)
}

async function testHomepageMisProductos() {
  const driver = await new Builder().forBrowser('chrome').build()
  await driver.get('http://localhost:8080/')
  await driver
    .findElement(By.xpath('//*[@id="root"]/div/div/form/div/div[1]/input'))
    .sendKeys('pao')
  await driver
    .findElement(By.xpath('//*[@id="root"]/div/div/form/div/div[2]/input'))
    .sendKeys('pao')

  await driver
    .findElement(By.xpath('//*[@id="root"]/div/div/form/button[1]'))
    .click()

  await new Promise((r) => setTimeout(r, 2000))

  await driver
    .findElement(By.xpath('//*[@id="root"]/div/div[2]/div/button[2]'))
    .click()

  setInterval(function () {
    //driver.quit()
    //driver.close()
  }, 3000)
}

async function testEstadisticas() {
  const driver = await new Builder().forBrowser('chrome').build()
  await driver.get('http://localhost:8080/')
  await driver
    .findElement(By.xpath('//*[@id="root"]/div/div/form/div/div[1]/input'))
    .sendKeys('pao')
  await driver
    .findElement(By.xpath('//*[@id="root"]/div/div/form/div/div[2]/input'))
    .sendKeys('pao')

  await driver
    .findElement(By.xpath('//*[@id="root"]/div/div/form/button[1]'))
    .click()

  await new Promise((r) => setTimeout(r, 2000))

  await driver
    .findElement(By.xpath('//*[@id="root"]/div/div[2]/div/button[3]'))
    .click()

  setInterval(function () {
    //driver.quit()
    //driver.close()
  }, 3000)
}

async function testVerDetallesProducto() {
  // Abrir página
  const driver = await new Builder().forBrowser('chrome').build()
  await driver.get('http://localhost:8080/')

  // Iniciar sesión
  await driver
    .findElement(By.xpath('//*[@id="root"]/div/div/form/div/div[1]/input'))
    .sendKeys('pao')
  await driver
    .findElement(By.xpath('//*[@id="root"]/div/div/form/div/div[2]/input'))
    .sendKeys('pao')

  await driver
    .findElement(By.xpath('//*[@id="root"]/div/div/form/button[1]'))
    .click()

  // Cargar homepage
  await new Promise((r) => setTimeout(r, 2000))

  // Seleccionar producto
  await driver
    .findElement(By.xpath('//*[@id="root"]/div/div[4]/div[2]'))
    .click()

  setInterval(function () {
    driver.quit()
    //driver.close()
  }, 10000)
}

async function testContactarProducto() {
  // Abrir página
  const driver = await new Builder().forBrowser('chrome').build()
  await driver.get('http://localhost:8080/')

  // Iniciar sesión
  await driver
    .findElement(By.xpath('//*[@id="root"]/div/div/form/div/div[1]/input'))
    .sendKeys('pao')
  await driver
    .findElement(By.xpath('//*[@id="root"]/div/div/form/div/div[2]/input'))
    .sendKeys('pao')

  await driver
    .findElement(By.xpath('//*[@id="root"]/div/div/form/button[1]'))
    .click()

  // Cargar homepage
  await new Promise((r) => setTimeout(r, 2000))

  // Seleccionar producto
  await driver
    .findElement(By.xpath('//*[@id="root"]/div/div[4]/div[2]'))
    .click()

  // Cargar producto
  await new Promise((r) => setTimeout(r, 2000))

  await driver
    .findElement(By.xpath('//*[@id="root"]/div/div/div/div[4]/button[1]'))
    .click()

  setInterval(function () {
    driver.quit()
    //driver.close()
  }, 10000)
}

async function testOfertarProducto() {
  // Abrir página
  const driver = await new Builder().forBrowser('chrome').build()
  await driver.get('http://localhost:8080/')

  // Iniciar sesión
  await driver
    .findElement(By.xpath('//*[@id="root"]/div/div/form/div/div[1]/input'))
    .sendKeys('pao')
  await driver
    .findElement(By.xpath('//*[@id="root"]/div/div/form/div/div[2]/input'))
    .sendKeys('pao')

  await driver
    .findElement(By.xpath('//*[@id="root"]/div/div/form/button[1]'))
    .click()

  // Cargar homepage
  await new Promise((r) => setTimeout(r, 2000))

  // Seleccionar producto
  await driver
    .findElement(By.xpath('//*[@id="root"]/div/div[4]/div[2]'))
    .click()

  // Cargar producto
  await new Promise((r) => setTimeout(r, 2000))

  await driver
    .findElement(By.xpath('//*[@id="root"]/div/div/div/div[4]/button[2]'))
    .click()

  setInterval(function () {
    driver.quit()
    //driver.close()
  }, 10000)
}

/*
async function testSignUp() {
  const driver = await new Builder().forBrowser('chrome').build()
  await driver.get('http://localhost:8080/')

  await driver
    .findElement(By.xpath('//*[@id="root"]/div/div/form/button[2]'))
    .click()

  await new Promise((r) => setTimeout(r, 4000))

  await driver
    .findElement(By.xpath('//*[@id="form-singin"]/div/div[1]'))
    .sendKeys('andrea1')

  await driver
    .findElement(By.xpath('//*[@id="form-singin"]/div/div[2]'))
    .sendKeys('andrea')

  await driver
    .findElement(By.xpath('//*[@id="form-singin"]/div/div[3]'))
    .sendKeys('grimaldi')

  await driver
    .findElement(By.xpath('//*[@id="form-singin"]/div/div[4]'))
    .sendKeys('grim1@uvg.edu.gt')

  await driver
    .findElement(By.xpath(' //*[@id="form-singin"]/div/div[5]'))
    .sendKeys('contraseña123')

  await driver
    .findElement(By.xpath('  //*[@id="form-singin"]/div/div[6]'))
    .sendKeys('contraseña123')

  await driver.findElement(By.xpath('//*[@id="date"]')).sendKeys('06/11/2022')

  await driver.findElement(By.xpath('//*[@id="gender"]')).sendKeys('Femenino')

  setInterval(function () {
    driver.quit()
    //driver.close()
  }, 3000)
}
*/

switch (process.argv[2]) {
  case 'testLogin':
    testLogin()
    break
  case 'testHomepageMisProductos':
    testHomepageMisProductos()
    break
  case 'testEstadisticas':
    testEstadisticas()
    break
  case 'testVerDetallesProducto':
    testVerDetallesProducto()
    break
  case 'testContactarProducto':
    testContactarProducto()
    break
  case 'testOfertarProducto':
    testOfertarProducto()
    break
  default:
    break
}
