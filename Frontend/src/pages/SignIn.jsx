import React from "react";

import Header from "../components/Header.jsx";
import TextInput from "../components/TextInput.jsx";

import MD5 from "../../node_modules/crypto-js/md5.js";
import setDocTitle from "../util/docTitle.js";

import login from "../styles/login.css";
import signin from "../styles/SignIn.css";

const handleRegister = (
  name,
  lastname,
  username,
  email,
  password,
  gender,
  date,
  admin,
  setIsRegis
) => {
  fetch("http://127.0.0.1:8000/checkNewUser", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      username,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.userExist) return alert("El usuario ya existe");

      fetch("http://127.0.0.1:8000/register", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          name,
          lastname,
          username,
          email,
          password: MD5(password).toString(),
          gender,
          date,
          admin: admin.toString(),
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          if (!result.success) return alert("Error al crear usuario");
          alert("Se creo usuario con exito!!");
          setTimeout(setIsRegis, 2000, false);
        })
        .catch((error) => {
          console.error("Failed to sign in", error);
          alert("Error de conexion: intente más tarde");
        });
    })
    .catch((error) => {
      console.error("Failed to check for user", error);
      alert("Error de conexion: intente más tarde");
    });
};

const SignIn = ({ setIsRegis }) => {
  setDocTitle("Registro");

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [name, setName] = React.useState("");
  const [pass2, setRepeatPass] = React.useState("");

  const [email, setEmail] = React.useState("");
  const [admin, setAdmin] = React.useState(false);

  return (
    <div className="content">
      <Header title="Registro" />
      <div className="main-content1">
        <form id="form-singin">
          <div className="formSignIn">
            <TextInput
              set={setUsername}
              title="Ingrese nombre de Usuario"
              className="userInput"
              placeholderText="Usuario"
            />

            <TextInput
              set={setName}
              title="Ingrese su nombre"
              className="userInput"
              placeholderText="Nombre"
            />

            <TextInput
              set={setLastname}
              title="Ingrese su apellido"
              className="userInput"
              placeholderText="Apellido"
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

            <input type="date" id="date" />

            <select name="gender" id="gender">
              <option value="" disabled>
                Género
              </option>
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
              <option value="other">Otro</option>
            </select>
          </div>
        </form>
      </div>
      <button
        type="button"
        className="btnLogin"
        onClick={() => {
          if (username == "" || email == "" || password == "" || plan == "-1") {
            return alert("Llene los campos para continuar");
          }
          handleRegister(
            name,
            lastname,
            username,
            email,
            password,
            pass2,
            gender,
            date,

            setIsRegis
          );
        }}
      >
        Registrar Cuenta
      </button>
    </div>
  );
};

export default SignIn;
