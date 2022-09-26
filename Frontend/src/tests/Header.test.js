import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Header from '../Components/header.jsx'

it('Render sin crashear', () => {
  render(<Header title='prueba'/>)
})

describe('Cuando se pasa un titulo al Header al renderizarlo', () => { 
  it('Este aparece en el componente', async () => {
    render(<Header title='prueba'/>)

    expect(
      await screen.findByText(/prueba/)
    ).toBeInTheDocument()
  })
})
