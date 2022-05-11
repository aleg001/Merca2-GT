import React, { Component } from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Tus Artículos</a>
        </li>
        <li>
          <a href="">Historial</a>
        </li>
        <li>
          <a href="">Perfil</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
