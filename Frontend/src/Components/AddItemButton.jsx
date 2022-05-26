import React, { useEffect, useState } from 'react'

import { BiPlusCircle } from 'react-icons/bi'

export const AddItemButton = () => {
  return (
    <div>
      <button type='button'>
        <BiPlusCircle aria-hidden='true' />
      </button>
    </div>
  )
}

export default AddItemButton
