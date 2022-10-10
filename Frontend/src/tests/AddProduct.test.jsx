/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable global-require */

import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import AddProduct from '../pages/AddProduct'
import fetchMock, { enableFetchMocks} from 'jest-fetch-mock'
enableFetchMocks()
fetchMock.dontMock()

describe('Cuando se ingresan valores en el los inputs de añadir producto', () => {
  it('Estos se guardan como value en los componentes', async () => {
    const setter = jest.fn()
    render(<AddProduct
      userName={'pao'}
      setOnShow={setter}

    />)

    // Elementos de input
    const product = (await screen.findByPlaceholderText(/Producto/))
    const price = (await screen.findByPlaceholderText(/Precio/))
    const description = (await screen.findByPlaceholderText(/Descripción/))
    const ubication = (await screen.findByPlaceholderText(/Ubicación/))

    // Ingreso de datos en los inputs
    await userEvent.type(product, 'prueba_input')
    await userEvent.type(price, 'prueba_input')
    await userEvent.type(description, 'prueba_input')
    await userEvent.type(ubication, 'prueba_input')

    expect(product).toHaveValue('prueba_input')
    expect(price).toHaveValue('prueba_input')
    expect(description).toHaveValue('prueba_input')
    expect(ubication).toHaveValue('prueba_input')
  })
})

describe('Buscar ingreso de categorias', () => {
  it('Esta en el documento', async () => {
    const setter = jest.fn()
    render(<AddProduct
      userName={'pao'}
      setOnShow={setter}
    />)

    expect(
      await screen.getByText('Ingrese una categoria:')
    ).toBeInTheDocument()
  })
})
