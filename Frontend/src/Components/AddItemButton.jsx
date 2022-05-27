import React, { useEffect, useState } from 'react'
import addItem from '../styles/addItem.css'
import { BiPlusCircle } from 'react-icons/bi'

export const AddItemButton = ({ setOnShow }) => {
  return (
    <div>
      <BiPlusCircle
        onClick={() => setOnShow('addItem')}
        className='btnSignup1'
      />
    </div>
  )
}

export default AddItemButton
