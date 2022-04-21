import React from "react";

import Header from "../components/Header.jsx";
import TextInput from "../components/TextInput.jsx";

import MD5 from "../../node_modules/crypto-js/md5.js";
import setDocTitle from "../util/docTitle.js";

const handleRegister = (username, email, password, admin, plan, setIsRegis) => {
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
          username,
          email,
          password: MD5(password).toString(),
          admin: admin.toString(),
          plan,
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
  const [email, setEmail] = React.useState("");
  const [admin, setAdmin] = React.useState(false);
  const [plan, setPlan] = React.useState(-1);

  return (
    <div className="content">
      <Header title="Registro" />
      <div className="main-content1">
        <form id="form-singin">
          <TextInput
            set={setEmail}
            title="Ingrese Correo"
            className="userInput"
          />
          <TextInput
            set={setUsername}
            title="Ingrese Nombre de Usuario"
            className="userInput"
          />
          <TextInput
            set={setPassword}
            title="Ingrese Contraseña"
            className="userInput"
            password={true}
          />

          <button
            type="button"
            className="button-C"
            onClick={() => {
              if (
                username == "" ||
                email == "" ||
                password == "" ||
                plan == "-1"
              ) {
                return alert("Asegúrate de rellenar los campos!");
              }
              handleRegister(
                username,
                email,
                password,
                admin,
                plan,
                setIsRegis
              );
            }}
          >
            Registrar Cuenta
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
