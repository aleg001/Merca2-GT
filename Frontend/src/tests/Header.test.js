/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Header from '../Components/Header.jsx'

it('Render sin crashear', () => {
  render(<Header title='prueba' setOnShow={() => undefined} />)
})

describe('Cuando se pasa un titulo al Header al renderizarlo', () => {
  it('Este aparece en el componente', async () => {
    render(<Header title='prueba' user='persona' />)
  })
})

it('uses correct src', async () => {
  const { getByAltText } = await render(<Header title='prueba' />)
  const image = getByAltText('')
  expect(image).toHaveAttribute('src')
})

it('Shows correct page', async () => {
  const setOnShow = jest.fn()
  render(<Header title='prueba' setOnShow={setOnShow} />)

  await userEvent.click(await screen.getByAltText(''))
  expect(setOnShow).toHaveBeenCalledWith('home')
})
