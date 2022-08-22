import React from 'react'
import ReactDOM from 'react-dom'
import AddItemButton from '../Components/AddItemButton.jsx'

import { isTSAnyKeyword } from '@babel/types'

it('Render sin crashear', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AddItemButton></AddItemButton>, div)
})
