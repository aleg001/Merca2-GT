import React from 'react'
import PropTypes from 'prop-types'
import '../styles/navbar.css'

import Perfil from './Perfil.jsx'

const Navbar = ({ setOnShow }) => (
  <div className='navbar'>
    <div>
      <button
        onClick={() => setOnShow('home')}
        type='button'
      >
        Comprar
      </button>

      <button
        onClick={() => setOnShow('Articulos')}
        type='button'
      >
        Tus Artículos
      </button>
      {Perfil
        && (
          <button
            onClick={() => setOnShow('Perfil')}
            type='button'
          >
            Perfil
          </button>
        )}
    </div>
  </div>
)

Navbar.propTypes = {
  setOnShow: PropTypes.func.isRequired,
}

export default Navbar
