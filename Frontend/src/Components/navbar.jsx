import React from "react";
import "../styles/navbar.css";

import Perfil from './Perfil.jsx'
import Home from '../pages/Homepage.jsx'
import Articulos from '../pages/VerProducto.jsx'

const Navbar = () => {

  const getPath = (type) => {
    if (type === 'home') return 1
    if (type === 'Articulos') return 2
    if (type === 'Perfil') return 3
  }

  const Option = ({title, setShow}) => {
    const Path = getPath(title)
    return (
      <button 
          onClick={() => setShow(Path)}
        >{title} 
        </button>
    )

  }

  const [show, setShow] = React.useState(0)

  if (show === 1) return <Home setShow={setShow}/>
  if (show === 2) return <Articulos setShow={setShow}/>


  return (
    <div className="navbar">
      <div>
        <Option setAdminShow={setShow} title={'Home'}/>
        <Option setAdminShow={setShow} title={'Articulos'}/>

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
