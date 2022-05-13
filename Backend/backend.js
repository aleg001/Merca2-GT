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
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const {
  checkNewUser,
  register,
  login,
  checkLogin,
} = require("./controllers/Users");
const {
  getItems,
  getSelectedItem,
  getSellerName,
  getProductPics,
  getSellerPic,
  addItem,
  deleteItem,
  filterItemsCat,
} = require("./controllers/Items");

// Server para API
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(8000, () => {
  console.log("Backend server Running in port 8000");
});

// ROUTES

// Registro de nuevos usuarios
app.post("/checkNewUser", checkNewUser);
app.post("/register", register);
app.post("/login", login);
app.post("/checkLogin", checkLogin);

// Manejo de items
app.post("/addItem", addItem);
app.get("/getItems", getItems);
app.post("/deleteItem", deleteItem);
app.post("/getSellerPic", getSellerPic);
app.post("/getSellerName", getSellerName);
app.post("/getProductPics", getProductPics);
app.post("/filterItemsCat", filterItemsCat);
app.post("/getSelectedItem", getSelectedItem);
