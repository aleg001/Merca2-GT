import React from 'react'
import { createRoot } from 'react-dom/client'
import navbar from '../Components/navbar.jsx'
import { isTSAnyKeyword } from '@babel/types'

it('Render sin crashear', () => {
  const div = document.createElement('div')
  createRoot(div).render(<navbar />)
})
