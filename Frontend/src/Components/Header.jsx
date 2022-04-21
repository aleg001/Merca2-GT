import React from "react";
import navbar from "navbar";

const Header = ({ user }) => {
  user === null ? (user = " ") : "";

  return (
    <header>
      <img
        src="./images/logo_merca2gt.png"
        alt="Logo de Merca2-gt"
        className="Header-logo"
      ></img>
      <navbar />
      <h3>{user}</h3>
    </header>
  );
};

export default Header;
