/*********************************************
 * Universidad del Valle de Guatemala
 * Merca2 GT
 * Autores:
 *  Alejandro Gómez
 * 	Marco Jurado
 *  Diego Córdova
 * 	Paola de León
 * 	Paola Contreras
 *
 * backend.js
 * - Maneja el acceso a base de datos y Api
 *   para la aplicacion Merca2Gt
 *********************************************/

// Imports
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const {
  checkNewUser,
  register,
  login,
  checkLogin,
  getSellerId,
  registerVisit,
  deleteUser,
} = require('./controllers/Users')

const {
  getItems,
  getSelectedItem,
  addItemPartes,
  getSellerName,
  getProductPics,
  getSellerPic,
  addItem,
  deleteItem,
  filterItemsCat,
  getItemsUser,
  disableItem,
  reportItem,
  getCategoryItems,
  getCategory,
  recordVisitItem,
  getCantItems,
} = require('./controllers/Items')
const { dataVendedor } = require('./controllers/contacto')

const { totalUsersStat } = require('./controllers/Stats')

// Server para API
const app = express()
app.use(bodyParser.json())
app.use(cors())

app.listen(8000, () => {
  console.log('Backend server Running in port 8000')
})

// ROUTES

// Registro de nuevos usuarios

app.post('/checkNewUser', checkNewUser)
app.post('/register', register)
app.post('/login', login)

app.post('/checkLogin', checkLogin)
app.post('/deleteUser', deleteUser)

// Manejo de items
app.post('/addItem', addItem)
app.get('/getItems', getItems)
app.post('/addItemPartes', addItemPartes)
app.post('/deleteItem', deleteItem)
app.post('/getSellerPic', getSellerPic)
app.post('/getSellerName', getSellerName)
app.post('/getProductPics', getProductPics)
app.post('/filterItemsCat', filterItemsCat)
app.post('/getSelectedItem', getSelectedItem)
app.post('/getItemsUser', getItemsUser)
app.post('/getCategory', getCategory)
app.post('/getCantItems', getCantItems)

app.post('/getSellerId', getSellerId)
app.post('/registerVisit', registerVisit)
app.post('/recordVisitItem', recordVisitItem)

app.post('/disableItem', disableItem)
app.post('/reportItem', reportItem)
app.post('/getCategoryItems', getCategoryItems)

// Contacto con vendedor
app.post('/dataVendedor', dataVendedor)

// Estadisticas
app.get('/statsQuery', totalUsersStat)
