import React from 'react'
import { createRoot } from 'react-dom/client'
import { render, screen, fireEvent } from '@testing-library/react'
import { isTSAnyKeyword } from '@babel/types'
import Button from '../Components/btn.jsx'

it('Render sin crashear', () => {
  render(<Button setOnShow={setOnShow}/>)
})

describe('Cuando se da click a una opcion del navbar', () => {
  it('Se llama a setOnShow con dicha opcion', async () => {
    const onclick = jest.fn()
    render(<Button 
      child={undefined}
      type={'button'}
      onClick={onclick}
      btnStyle={''}
      btnSize={''}
    />)

    // opcion tus articulos
    await userEvent.click(await screen.getByTestId('Botton'))
    expect(onclick).toBeCalled()
  })
})

