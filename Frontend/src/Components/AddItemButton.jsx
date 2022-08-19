import React from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line import/no-unresolved
import { BiPlusCircle } from 'react-icons/bi'

export const AddItemButton = ({ setOnShow }) => (
  <div>
    <BiPlusCircle
      onClick={() => setOnShow('addItem')}
      className='btnSignup1'
    />
  </div>
)

AddItemButton.propTypes = {
  setOnShow: PropTypes.func.isRequired,
}

export default AddItemButton
