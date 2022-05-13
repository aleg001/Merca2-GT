import React from "react";
import { createRoot } from "react-dom/client";


import setIcon from "./util/setIcon.js";
import Login from "./pages/Login.jsx";
import SignIn from "./pages/SignIn.jsx";
import DetallesProductos from "./pages/detallesProductos.jsx";

import "./styles/master.css";

// App
const App = () => {
  setIcon();
  const [isRegis, setIsRegis] = React.useState(false);
  const [isLogedIn, setIsLogedIn] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [isAdmin, setIsAdmin] = React.useState(false);

  // if (isLogedIn) return <DirectUser username={username} isAdmin={isAdmin}/>
  // if (isRegis) return <SignIn setIsRegis={setIsRegis} />;
  return (
    <DetallesProductos id_item={'item_prueba'}/>
  //   <Login
  //     setIsRegis={setIsRegis}
  //     setIsLogedIn={setIsLogedIn}
  //     setUsername={setUsername}
  //     setIsAdmin={setIsAdmin}
  //   />
  );
};

// Render
const getRoot = () => document.getElementById("root");
createRoot(getRoot()).render(<App />);
