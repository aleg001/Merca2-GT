import React from 'react'
import { BiPlusCircle } from 'react-icons/bi.js'

export const AddItemButton = ({ setOnShow }) => (
  <div>
    <BiPlusCircle
      onClick={() => setOnShow('addItem')}
      className='btnSignup1'
    />
  </div>
)

export default AddItemButton
