import React from 'react'
import PropTypes from 'prop-types'

import { BiPlusCircle } from 'react-icons/bi'
import '../styles/addItem.css'

export const AddItemButton = ({ setOnShow }) => (
  <div>
    <BiPlusCircle onClick={() => setOnShow('addItem')} className='btnSignup1' />
  </div>
)

AddItemButton.propTypes = {
  setOnShow: PropTypes.func.isRequired,
}

export default AddItemButton
