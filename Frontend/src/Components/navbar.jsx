import React from "react";
import "../styles/navbar.css";

import Perfil from './Perfil.jsx'

const Navbar = ({ setOnShow }) => {
  return (
    <div className="navbar">
      <div>
        <button 
          onClick={() => setOnShow('home')}
        >
          Comprar
        </button>

        <button 
          onClick={() => setOnShow('Articulos')}
        >
          Tus Artículos
        </button>
        {Perfil &&
        <button 
          onClick={() => setOnShow('Perfil')}
        >
          Perfil
        </button>}
      </div>
    </div>
  );
};

export default Navbar;
