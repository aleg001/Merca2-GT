/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import '../styles/navbar.css'

import Perfil from './Perfil.jsx'

const Navbar = ({ setOnShow, Cat, cat1 }) => (
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
      <select
        onChange={(event) => cat1(event.target.value)}
      >
        {Cat && Cat.map((option, index) => (
          <option key={index} value={option.id}>{option.nombre_cat}</option>
        ))}
      </select>
    </div>
  </div>
)

Navbar.propTypes = {
  setOnShow: PropTypes.func.isRequired,
}

export default Navbar
