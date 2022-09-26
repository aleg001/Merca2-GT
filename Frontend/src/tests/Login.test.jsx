import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Login from '../pages/Login'

describe('Cuando se presiona el boton de sign up', () => {
  it('se muestra la pagina de registro', async () => {
    const setter = jest.fn()
    const setIsRegis = jest.fn()
    render(<Login 
      setIsRegis={setIsRegis}
      setIsLogedIn={setter}
      setUsername={setter}
      setIsAdmin={setter}
    />)
    // Codigo nuevo
    const SignUp = await screen.findByText(/Sign Up/)
    await userEvent.click(SignUp)

    expect(setIsRegis).toBeCalledWith(true)
  })
})


describe('Cuando se ingresan valores en el los inputs', () => {
  it('Estos se guardan como value en los componentes', async () => {
    const setter = jest.fn()
    render(<Login 
      setIsRegis={setter}
      setIsLogedIn={setter}
      setUsername={setter}
      setIsAdmin={setter}
    />)

    // Elementos de input
    const loginInput = (await screen.findByPlaceholderText(/Usuario/))
    const passwordInput = (await screen.findByPlaceholderText(/Contraseña/))

    // Ingreso de datos en los inputs
    await userEvent.type(loginInput, 'prueba_input')
    await userEvent.type(passwordInput, 'prueba_input')

    expect(loginInput).toHaveValue('prueba_input')
    expect(passwordInput).toHaveValue('prueba_input')
  })
})
