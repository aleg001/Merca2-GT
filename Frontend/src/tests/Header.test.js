import React from 'react'
import { createRoot } from 'react-dom/client'
import Header from '../Components/header.jsx'
import { isTSAnyKeyword } from '@babel/types'

it('Render sin crashear', () => {
  const div = document.createElement('div')
  createRoot(div, <Header />)
})
