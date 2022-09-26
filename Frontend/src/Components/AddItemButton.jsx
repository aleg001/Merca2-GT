import React from 'react'
import PropTypes from 'prop-types'

import { BiPlusCircle } from 'react-icons/bi'
import '../styles/addItem.css'

export const AddItemButton = ({ setOnShow }) => (
  <div
    data-testid="botonagregartesting"
  >
    <BiPlusCircle
      alt='agregarP'
      onClick={() => setOnShow('addItem')}
      className='btnSignup1'
      name='Channels'
    >
      add
    </BiPlusCircle>
  </div>
)

AddItemButton.propTypes = {
  setOnShow: PropTypes.func.isRequired,
}

export default AddItemButton
