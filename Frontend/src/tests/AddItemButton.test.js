import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import AddItemButton from '../Components/AddItemButton.jsx'
import { isTSAnyKeyword } from '@babel/types'

describe('Cuando se presiona el boton de agregar producto', () => {
  it('se muestra la pagina de ingreso de informacion del nuevo producto', async () => {
    const setter = jest.fn()
    const setIsRegis = jest.fn()<
    render(<Homepage userName={'pao'} setOnShow={set} />)
    // Elemento del boton
    const botonADD = screen.getByTestId('botonagregartesting')

    // User event de click al boton
    await userEvent.click(botonADD)

    // Encontrar nuevo elemento en la nueva página
    expect(
      await screen.findByText(/Agregar nuevo producto/)
    ).toBeInTheDocument()

    expect(setIsRegis).toBeCalledWith(true)
  })
})
