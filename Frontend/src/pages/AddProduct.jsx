import React from "react";

import Header from "../components/Header.jsx";
import TextInput from "../components/TextInput.jsx";

import MD5 from "crypto-js/md5";
import setDocTitle from "../util/docTitle.js";

import login from "../styles/login.css";
import signin from "../styles/SignIn.css";

const handleRegister = (
  name,
  description,
  productName,
  email,
  contra,
  gender,
  date,
  setIsRegis
) => {
  fetch("http://127.0.0.1:8000/register", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      name,
      description,
      productName,
      email,
      password: MD5(contra).toString(),
      gender: "2",
      date: "04-18-2022: 00:00:00",
      admin: "false",
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      alert("Se añadió el producto con exito!!");
      setTimeout(setIsRegis, 500, false);
    })
    .catch((error) => {
      setTimeout(setIsRegis, 500, false);
    });
};

const AddProduct = ({ setIsRegis }) => {
  setDocTitle("Agregar producto");

  const [productName, setproductName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [description, setdescription] = React.useState("");
  const [name, setName] = React.useState("");
  const [pass2, setRepeatPass] = React.useState("");

  const [email, setEmail] = React.useState("");
  const [admin, setAdmin] = React.useState(false);

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
              set={setName}
              title="Ingrese su precio (en quetzales)"
              className="userInput"
              placeholderText="Precio"
            />

            <TextInput
              set={setdescription}
              title="Descripción del artículo"
              className="userInput"
              placeholderText="Descripción"
            />

            <TextInput
              set={setEmail}
              title="Ingrese su correo"
              className="userInput"
              placeholderText="Correo"
            />

            <TextInput
              set={setPassword}
              title="Ingrese su contraseña"
              className="userInput"
              password={true}
              placeholderText="Contraseña"
            />

            <TextInput
              set={setRepeatPass}
              title="Ingrese contraseña nuevamente"
              className="userInput"
              password={true}
              placeholderText="Contraseña"
            />
          </div>
        </form>
      </div>
      <button
        type="button"
        className="btnLogin"
        onClick={() => {
          if (productName == "" || email == "" || password == "") {
            return alert("Llene los campos para ingresar su producto");
          }
          handleRegister(
            name,
            description,
            productName,
            email,
            password,
            gender,
            date,
            setIsRegis
          );
        }}
      >
        Agregar producto
      </button>
    </div>
  );
};

export default AddProduct;
