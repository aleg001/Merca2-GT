import React from 'react'
import { createRoot } from 'react-dom/client'
import AddItemButton from '../Components/AddItemButton.jsx'

import { isTSAnyKeyword } from '@babel/types'

it('Render sin crashear', () => {
  const div = document.createElement('div')
  createRoot(div).render(<AddItemButton />)
})
