import React from "react";

import Header from "../components/Header.jsx";
import TextInput from "../components/TextInput.jsx";

import MD5 from "crypto-js/md5";
import setDocTitle from "../util/docTitle.js";

import login from "../styles/login.css";
import signin from "../styles/SignIn.css";

//const handleRegister = (
//name,
// description,
// productName,
// email,
// contra,
// gender,
// date,
// setIsRegis
//) => {
// fetch("http://127.0.0.1:8000/register", {
//   headers: {
//     "Content-Type": "application/json",
//   },
//   method: "POST",
//  body: JSON.stringify({
//    name,
//    description,
//    productName,
//    email,
//    password: MD5(contra).toString(),
//    gender: "2",
//   date: "04-18-2022: 00:00:00",
//   admin: "false",
// }),
//})
// .then((response) => response.json())
// .then((result) => {
//   alert("Se añadió el producto con exito!!");
//   setTimeout(setIsRegis, 500, false);
// })
//  .catch((error) => {
//   setTimeout(setIsRegis, 500, false);
//  });
//};

const AddProduct = ({ setIsRegis }) => {
  setDocTitle("Agregar producto");
  // Estructura de tabla:
  // id, nombre, id_cat, descripcion, precio, id_usuario, ubicacion, post_time, item_rating, image

  // random item id
  const randomID = () => {
    return Date.now();
  };

  // posting time
  const postTime = () => {
    const d = new Date();
    return d.toLocaleString();
  };

  // star rating
  const rating = () => {
    const starRating = (Math.random() * (5 - 1) + 1).toFixed(2);
    return parseFloat(starRating);
  };

  const [productName, setproductName] = React.useState("");
  const [description, setdescription] = React.useState("");
  const [price, setprice] = React.useState("");
  const [ubication, setubication] = React.useState("");
  const [Link, setLink] = React.useState("");
  const [Cat, setCat] = React.useState("");

  return (
    <div className="content">
      <Header title="Agregar nuevo producto" />
      <div className="main-content1">
        <form id="form-singin">
          <div className="formSignIn">
            <TextInput
              set={setproductName}
              title="Ingrese nombre del producto"
              className="userInput"
              placeholderText="Producto"
            />

            <TextInput
              set={setprice}
              title="Ingrese su precio (en quetzales)"
              className="userInput"
              placeholderText="Precio"
            />

            <TextInput
              set={setCat}
              title="Categoría del artículo"
              className="userInput"
              placeholderText="Categoría"
            />

            <TextInput
              set={setdescription}
              title="Descripción del artículo"
              className="userInput"
              placeholderText="Descripción"
            />

            <TextInput
              set={setubication}
              title="Ubicación del artículo"
              className="userInput"
              placeholderText="Ubicación"
            />

            <TextInput
              set={setLink}
              title="Link de la imagen del artículo"
              className="userInput"
              placeholderText="Link"
            />
          </div>
        </form>
      </div>
      <button
        type="button"
        className="btnLogin"
        onClick={() => {
          if (
            productName == "" ||
            Cat == "" ||
            description == "" ||
            price == "" ||
            ubication == "" ||
            Link == ""
          ) {
            return alert("Llene los campos para ingresar su producto");
          }
          handleRegister(
            randomID(),
            productName,
            Cat,
            description,
            price,
            id_user,
            ubication,
            postTime(),
            rating(),
            Link
          );
        }}
      >
        Agregar producto
      </button>
    </div>
  );
};

export default AddProduct;
