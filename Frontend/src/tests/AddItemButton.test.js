import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import AddItemButton from '../Components/AddItemButton.jsx'
import { isTSAnyKeyword } from '@babel/types'

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
      await screen.findByText(/Agregar nuevo producto/)
    ).toBeInTheDocument()
  })
})

describe('Cuando se presiona el drop down menu de categorias', () => {
  it('se muestran las categorias disponibles', async () => {
    const setter = jest.fn()
    render(<Homepage userName={'pao'} setOnShow={setter} />)
    // Elemento del drop down menu
    const DDmenu = screen.findByText(/Seleccione una categoria/)

    // Click al dd menu
    await userEvent.click(DDmenu)

    // Buscar que las categorias si aparezcan en pantalla
    expect (
      await screen.findByText(/Tecnologia/)
    ).toBeInTheDocument()
  })
})