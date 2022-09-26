import React from 'react'
import { createRoot } from 'react-dom/client'
import { isTSAnyKeyword } from '@babel/types'
import btn from '../Components/btn.jsx'

it('Render sin crashear', () => {
  const div = document.createElement('div')
  createRoot(div).render(<btn />)
})
