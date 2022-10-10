/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Navbar from '../Components/navbar.jsx'

it('Render sin crashear', () => {
  render(<Navbar setOnShow={() => undefined} />)
})

describe('Cuando se da click a una opcion del navbar', () => {
  it('Se llama a setOnShow con dicha opcion', async () => {
    const setOnShow = jest.fn()
    render(<Navbar setOnShow={setOnShow} />)

    // opcion tus articulos
    await userEvent.click(await screen.getByText('Tus Artículos'))
    expect(setOnShow).toHaveBeenCalledWith('Articulos')

    // opcion comprar
    await userEvent.click(await screen.getByText('Comprar'))
    expect(setOnShow).toHaveBeenCalledWith('home')
  })
})

describe('Cuando se da click a una categoriar', () => {
  it('Se llama a la funcion para hacer filtro por esa categoria', async () => {
    const setOnShow = jest.fn()
    const setCat = jest.fn()
    const categories = [{ id: '1', nombre_cat: '1' }]

    render(<Navbar
      Cat={categories}
      cat1={setCat}
      setOnShow={setOnShow}
    />)

    const select = await screen.getByTestId('select-nav')
    await userEvent.selectOptions(select, '1')
    expect(setCat).toHaveBeenCalledWith('1')
  })
})
