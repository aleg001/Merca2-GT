import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import DetallesProductos from '../pages/detallesProductos.jsx'

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
    const DetallesProductos = await screen.findByText(/Contactar/)
    await userEvent.click(DetallesProductos)

    expect(username).toBeCalledWith('MarcoJ')
  })
})
