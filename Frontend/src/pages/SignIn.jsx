import React from 'react'

import MD5 from 'crypto-js/md5.js'
import PropTypes from 'prop-types'
import Header from '../Components/Header.jsx'
import TextInput from '../Components/TextInput.jsx'

import setDocTitle from '../util/docTitle.js'

import '../styles/login.css'
import '../styles/SignIn.css'

const handleRegister = (
  name,
  lastname,
  username,
  email,
  contra,
  gender,
  date,
  setIsRegis,
) => {
  fetch('http://127.0.0.1:8000/register', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      name,
      lastname,
      username,
      email,
      password: MD5(contra).toString(),
      gender,
      date,
      admin: 'false',
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      if (!result) return alert('Error al registrarse')
      alert('Se creo usuario con exito!!')
      setIsRegis(false)
    })
}

const SignIn = ({ setIsRegis }) => {
  setDocTitle('Registro')

  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [lastname, setLastname] = React.useState('')
  const [name, setName] = React.useState('')
  const [gender, setGender] = React.useState('')

  const [email, setEmail] = React.useState('')

  return (
    <div className='content'>
      <Header title='Registro' />
      <div className='main-content1'>
        <form id='form-singin'>
          <div className='formSignIn'>
            <TextInput
              set={setUsername}
              title='Ingrese nombre de Usuario'
              className='userInput'
              placeholderText='Usuario'
            />

            <TextInput
              set={setName}
              title='Ingrese su nombre'
              className='userInput'
              placeholderText='Nombre'
            />

            <TextInput
              set={setLastname}
              title='Ingrese su apellido'
              className='userInput'
              placeholderText='Apellido'
            />

            <TextInput
              set={setEmail}
              title='Ingrese su correo'
              className='userInput'
              placeholderText='Correo'
            />

            <TextInput
              set={setPassword}
              title='Ingrese su contraseña'
              className='userInput'
              password={true}
              placeholderText='Contraseña'
            />

            <TextInput
              set={() => undefined}
              title='Ingrese contraseña nuevamente'
              className='userInput'
              password={true}
              placeholderText='Contraseña'
            />

            <input type='date' id='date' />

            <select
              name='gender'
              id='gender'
              onChange={(event) => {
                setGender(event.target.value)
              }}
            >
              <option value='' disabled>
                Género
              </option>
              <option value='1'>Masculino</option>
              <option value='2'>Femenino</option>
              <option value='3'>Otro</option>
            </select>
          </div>
        </form>
      </div>
      <button
        type='button'
        className='btnLogin'
        onClick={() => {
          if ([username, email, password].includes('')) {
            return alert('Llene los campos para continuar')
          }

          const today = new Date()

          handleRegister(
            name,
            lastname,
            username,
            email,
            password,
            gender,
            `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`,
            setIsRegis,
          )
        }}
      >
        Registrar Cuenta
      </button>
    </div>
  )
}

SignIn.propTypes = {
  setIsRegis: PropTypes.func.isRequired,
}

export default SignIn
