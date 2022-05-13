import React from "react";
import { createRoot } from "react-dom/client";

import Homepage from "./pages/Homepage.jsx";
import setIcon from "./util/setIcon.js";
import SignIn from "./pages/SignIn.jsx";
import DetallesProductos from "./pages/detallesProductos.jsx";
import Login from "./pages/Login.jsx";

import "./styles/master.css";

// App
const App = () => {
  setIcon();
  const [isRegis, setIsRegis] = React.useState(false);
  const [isLogedIn, setIsLogedIn] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [isAdmin, setIsAdmin] = React.useState(false);

  if (isRegis) return <SignIn setIsRegis={setIsRegis} />;
  if (isLogedIn) return <Homepage />;
  return (
    <DetallesProductos id_item={"item_prueba"} />
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
