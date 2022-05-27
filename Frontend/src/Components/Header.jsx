import React from 'react'
import logo from '../images/logo.png'

import '../styles/header.css'

const Header = ({ title, user }) => {
  if (user === undefined) {
    user = ' '
  } else {
    user = 'Bienvenido, ' + user
  }

  return (
    <header>
      <img src={logo} alt='' />
      <h2>{title}</h2>
      <h3 className='benvenute'>{user}</h3>
    </header>
  )
}

export default Header
