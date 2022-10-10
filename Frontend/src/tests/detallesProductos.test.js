import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import DetallesProductos from '../pages/detallesProductos.jsx'
import fetchMock, { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()

describe('Cuando se presiona un producto', () => {
  it('se muestra la pagina del producto', async () => {
    const setter = jest.fn()
    render(
      <DetallesProductos
        username={'MarcoJ'}
        idItem={'idprod4'}
        setOnShow={setter}
        setSelectedProduct={setter}
      />
    )

    // Codigo nuevo
    const detalle = await screen.findByTestId('headerglobal')
    await userEvent.click(detalle)

    expect(setter).toBeCalled()
  })
})

describe('Cuando se presiona un producto', () => {
  it('se muestra la pagina del producto', async () => {
    const setter = jest.fn()
    render(
      <DetallesProductos
        username={'MarcoJ'}
        idItem={'idprod4'}
        setOnShow={setter}
        setSelectedProduct={setter}
      />
    )

    // Codigo nuevo
    const detalle = await screen.findByTestId('headerglobal')
    await userEvent.click(detalle)

    expect(setter).toBeCalled()
  })
})
