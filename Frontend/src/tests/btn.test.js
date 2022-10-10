/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from '../Components/btn.jsx'

it('Render sin crashear', () => {
  const onclick = jest.fn()
  render(<Button
    btnSize="big"
    btnStyle=""
    type="button"
    onClick={onclick}
    setOnShow={() => undefined}
  />)
})

describe('Cuando se da click a una opcion del navbar', () => {
  it('Se llama a setOnShow con dicha opcion', async () => {
    const onclick = jest.fn()
    render(<Button
      child={undefined}
      type="button"
      onClick={onclick}
      btnStyle=""
      btnSize=""
    />)

    // opcion tus articulos
    await userEvent.click(await screen.getByTestId('botton'))
    expect(onclick).toBeCalled()
  })
})

it('Se verifica que el btn cuente con un estilo', async () => {
  const onclick = jest.fn()
  render(<Button
    onClick={onclick}
    type="button"
    btnStyle="btn--light--solid"
    btnSize="btn--big"
  />)
})
