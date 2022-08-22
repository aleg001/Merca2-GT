/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'
import PropTypes from 'prop-types'
import logo from '../images/logo.png'

import '../styles/header.css'

const Header = ({ title, user, setOnShow }) => (
  <header>
    <img src={logo} alt='' onClick={() => setOnShow('home')} />
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
