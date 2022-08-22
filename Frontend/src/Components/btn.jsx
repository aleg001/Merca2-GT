/* eslint-disable react/button-has-type */
import React from 'react'
import '../styles/btn.css'
import PropTypes from 'prop-types'

const STYLES = [
  'btn--light--solid',
  'btn--dark--solid',
  'btn--white--solid',
  'btn--light--outline',
  'btn--dark--outline',
  'btn--white--outline',
]

const SIZES = ['btn--big', 'btn--medium', 'btn--small']

const Button = ({
  child,
  type,
  onClick,
  btnStyle,
  btnSize,
}) => {
  const checkButtonStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0]
  const checkButtonSize = SIZES.includes(btnSize) ? btnSize : SIZES[0]

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {child}
    </button>
  )
}

Button.propTypes = {
  child: PropTypes.node,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  btnStyle: PropTypes.string.isRequired,
  btnSize: PropTypes.string.isRequired,
}

Button.defaultProps = {
  child: null,
}

export default Button
