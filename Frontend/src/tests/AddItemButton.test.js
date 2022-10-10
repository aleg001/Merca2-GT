import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import AddItemButton from '../Components/AddItemButton.jsx'
import Homepage from '../pages/Homepage.jsx'
import { isTSAnyKeyword } from '@babel/types'


it('Render sin crashear', () => {
  const setter = jest.fn()
  render(<AddItemButton setOnShow={setter}/>)
})

describe('Cuando se presiona el boton de agregar producto', () => {
  it('se muestra la pagina de ingreso de informacion del nuevo producto', async () => {
    const setter = jest.fn()
    render(<Homepage userName={'pao'} setOnShow={setter} />)
    // Elemento del boton
    const botonADD = screen.getByTestId('botonagregartesting')

    // User event de click al boton
    await userEvent.click(botonADD)

    // Encontrar nuevo elemento en la nueva página
    expect(
      setter
    ).toBeCalledWith('addItem')
  })
})

describe('Cuando se carga la pagina de homepage', () => {
  it('se muestra el nombre de usuario', async () => {
    const setter = jest.fn()
    render(<Homepage userName={'pao'} setOnShow={setter} />)
    // Elemento del drop down menu
    expect (
      await screen.findByText(/pao/)
    ).toBeInTheDocument()
  })
})