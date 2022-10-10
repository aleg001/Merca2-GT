/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import MD5 from 'crypto-js/md5.js'
import PropTypes from 'prop-types'
import Header from '../Components/Header.jsx'
import TextInput from '../Components/TextInput.jsx'

import setDocTitle from '../util/docTitle.js'

/* istanbul ignore next */
const handleLogin = (
  username,
  password,
  setIsRegis,
  setIsLogedIn,
  setUsername,
  setIsAdmin,
) => {
  console.log('llego')
  fetch('http://127.0.0.1:8000/login', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      username,
      password: MD5(password).toString(),
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      if (!result.userExist) return alert('Creedenciales no validos')

      const user = result.username[0].username.toString()
      const admin = result.username[0].administrador
      setIsRegis(false)
      setIsLogedIn(true)
      setUsername(user)
      setIsAdmin(admin)
      fetch('http://127.0.0.1:8000/checkLogin', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          username,
          password: MD5(password).toString(),
        }),
      })
        .then((response) => response.json())
        .then((result2) => {
          if (!result2.success) return alert('Usuario no encontrado')
        })
        .catch((error) => {
          alert('Error de conexion: intente más tarde')
          console.error(error)
        })
    })
    .catch((error) => {
      alert('Error de conexion: intente más tarde')
      console.error(error)
    })
}

const Login = ({
  setIsRegis,
  setIsLogedIn,
  setUsername,
  setIsAdmin,
}) => {
  try {
    setDocTitle('Login')
    // setDocTitle('Login')
  } catch (error) { }
  const [usernameL, setUsernameL] = React.useState('')
  const [passwordL, setPasswordL] = React.useState('')
  /* istanbul ignore next */
  return (
    <div className='content'>
      <Header title='Login' />
      <div className='main-content-login'>
        <form>
          <div className='inputsLogin'>
            <TextInput
              set={setUsernameL}
              title='Ingrese su nombre de Usuario'
              className='userInput'
              placeholderText='Usuario'
            />
            <TextInput
              placeholderText='Contraseña'
              set={setPasswordL}
              title='Ingrese su contraseña'
              className='userInput'
              password={true}
            />
          </div>
          <button
            type='button'
            className='btnLogin'
            onClick={() => {
              /* istanbul ignore next */
              if (usernameL === '' || passwordL === '') {
                return alert('Llene los campos para continuar')
              }

              /* istanbul ignore next */
              return handleLogin(
                usernameL,
                passwordL,
                setIsRegis,
                setIsLogedIn,
                setUsername,
                setIsAdmin,
              )
            }}
          >
            Login
          </button>
          <br />
          <br />
          <button className='btnSignup' type='button'>
            <a onClick={() => setIsRegis(true)}>Sign Up</a>
          </button>
        </form>
      </div>
    </div>
  )
}

Login.propTypes = {
  setIsRegis: PropTypes.func.isRequired,
  setIsLogedIn: PropTypes.func.isRequired,
  setUsername: PropTypes.func.isRequired,
  setIsAdmin: PropTypes.func.isRequired,
}

export default Login
