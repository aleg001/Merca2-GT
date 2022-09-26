import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import AddItemButton from '../Components/AddItemButton.jsx'

import { isTSAnyKeyword } from '@babel/types'

it('Render sin crashear', () => {
  render(<AddItemButton setOnShow={(x) => undefined}/>)
})
