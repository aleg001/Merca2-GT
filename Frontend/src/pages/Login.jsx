import React from "react";

import Header from "../components/Header.jsx";
import TextInput from "../components/TextInput.jsx";

import MD5 from "../../node_modules/crypto-js/md5.js";
import setDocTitle from "../util/docTitle.js";

const handleLogin = (
  username,
  password,
  setIsRegis,
  setIsLogedIn,
  setUsername,
  setIsAdmin
) => {
  console.log("llego");
  fetch("http://127.0.0.1:8000/login", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      username,
      password: MD5(password).toString(),
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      if (!result.userExist) return alert("Creedenciales no validos");

      const user = result.username[0].username.toString();
      const admin = result.username[0].administrador;
      setIsRegis(false);
      setIsLogedIn(true);
      setUsername(user);
      setIsAdmin(admin);
      fetch("http://127.0.0.1:8000/checkLogin", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          username,
          password: MD5(password).toString(),
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          if (!result.success) return alert("Usuario no encontrado");
          alert("Credenciales correctas!!");
        })
        .catch((error) => {
          alert("Error de conexion: intente más tarde");
        });
    })
    .catch((error) => {
      alert("Error de conexion: intente más tarde");
    });
};

const Login = ({ setIsRegis, setIsLogedIn, setUsername, setIsAdmin }) => {
  setDocTitle("Login");
  const [usernameL, setUsernameL] = React.useState("");
  const [passwordL, setPasswordL] = React.useState("");
  const [isRegistering, setRegistering] = React.useState(false);

  return (
    <div className="content">
      <Header title="Login" />
      <div className="main-content-login">
        <form>
          <div className="inputsLogin">
            <TextInput
              set={setUsernameL}
              title="Ingrese su nombre de Usuario"
              className="userInput"
              placeholderText="Usuario"
            />
            <TextInput
              placeholderText="Contraseña"
              set={setPasswordL}
              title="Ingrese su contraseña"
              className="userInput"
              password={true}
            />
          </div>
          <button
            type="button"
            className="btnLogin"
            onClick={() => {
              if (usernameL == "" || passwordL == "") {
                return alert("Llene los campos para continuar");
              }

              handleLogin(
                usernameL,
                passwordL,
                setIsRegis,
                setIsLogedIn,
                setUsername,
                setIsAdmin
              );
            }}
          >
            Login
          </button>
          <br />
          <br />
          <button className="btnSignup">
            {!isRegistering && <a onClick={() => setIsRegis(true)}>Sign Up</a>}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
