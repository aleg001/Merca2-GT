import React from 'react'
import PropTypes from 'prop-types'

import '../styles/login.css'

/* istanbul ignore next */
const TextInput = ({
  className,
  initValue,
  title,
  password,
  set,
  placeholderText,
}) => (
  <div className={className}>
    <h4 className='tituloInput'>{title}</h4>
    <input
      onChange={(event) => set(event.target.value)}
      type={!password ? 'text' : 'password'}
      value={initValue}
      placeholder={placeholderText}
    />
  </div>
)

TextInput.propTypes = {
  className: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  initValue: PropTypes.any,
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  password: PropTypes.any,
  set: PropTypes.func.isRequired,
  placeholderText: PropTypes.string.isRequired,
}

TextInput.defaultProps = {
  initValue: undefined,
  password: false,
}

export default TextInput
