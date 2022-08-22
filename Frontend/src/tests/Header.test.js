import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../Components/header.jsx'
import { isTSAnyKeyword } from '@babel/types'

it('Render sin crashear', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Header />, div)
})
