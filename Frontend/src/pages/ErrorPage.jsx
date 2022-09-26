/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Header from '../Components/Header.jsx'
import setDocTitle from '../util/docTitle.js'

const ErrorPage = () => {
  try {
    setDocTitle('Error 404')
    // setDocTitle('Login')
  } catch (error) { console.log(error) }

  return (
    <div className='content'>
      <Header title='ERROR 404' />
      <div className='main-content-login'>
        <form>
          <p>
            Ha ocurrido un error. Por favor contactar a algún administrador.
          </p>

          <br />
          <br />
        </form>
      </div>
    </div>
  )
}

export default ErrorPage
