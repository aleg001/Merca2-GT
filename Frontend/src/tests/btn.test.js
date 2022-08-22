import React from 'react'
import ReactDOM from 'react-dom'
import { isTSAnyKeyword } from '@babel/types'
import btn from '../Components/btn.jsx'

it('Render sin crashear', () => {
  const div = document.createElement('div')
  ReactDOM.render(<btn />, div)
})
