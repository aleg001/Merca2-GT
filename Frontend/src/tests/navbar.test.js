import React from 'react'
import ReactDOM from 'react-dom'
import navbar from '../Components/navbar.jsx'
import { isTSAnyKeyword } from '@babel/types'

it('Render sin crashear', () => {
  const div = document.createElement('div')
  ReactDOM.render(<navbar />, div)
})
