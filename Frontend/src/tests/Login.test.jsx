import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import App from '../AppforTesting'
import Homepage from '../pages/Homepage'

describe('Cuando se presiona el boton de sign up', () => {
  it('se muestra la pagina de registro', async () => {
    render(<App />)
    // Codigo viejito xdxd
    const loginInput = (await screen.findByPlaceholderText(/Usuario/))
    const passwordInput = (await screen.findByPlaceholderText(/Contraseña/))
    // await fireEvent.change(loginInput, {target: {value: 'pao'}})
    // await fireEvent.change(passwordInput, {target: {value: 'pao'}})
    
    const Login = (await screen.findAllByText(/Login/))[1]
    await userEvent.click(Login)

    // Codigo nuevo
    const SignUp = await screen.findByText(/Sign Up/)
    await userEvent.click(SignUp)

    expect(
      await screen.findByText(/Registro/)
    ).toBeInTheDocument()
  })
})

describe('Cuando se presiona el boton de tus articulos', () => {
  it('se muestra la pagina de tus articulos', async () => {
    let actualShow = ''
    const set = (item) => {
      actualShow = item
    }
    render(<Homepage userName={'pao'} setOnShow={set} />)
    // Codigo nuevo
    // const add = await screen.findAllByAltText(/agregarP/)
    const add = await screen.findByRole('addbutton')
    await userEvent.click(add.firstChild)


    expect(
      actualShow
    ).toBe('addItem')
  })
})