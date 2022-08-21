import React from 'react'
import PropTypes from 'prop-types'
import logo from '../images/logo.png'

import '../styles/header.css'

const Header = ({ title, user }) => (
  <header>
    <img src={logo} alt='' />
    <h2>{title}</h2>
    <h3 className='benvenute'>{user}</h3>
  </header>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.string,
}

Header.defaultProps = {
  user: ' ',
}

export default Header
