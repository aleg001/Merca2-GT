import React from 'react'
import ReactDOM from 'react-dom'
import footer from '../Components/footer.jsx'
import { isTSAnyKeyword } from '@babel/types'

it('Render sin crashear', () => {
  const div = document.createElement('div')
  ReactDOM.render(<footer />, div)
})
