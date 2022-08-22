import React from 'react'
// eslint-disable-next-line import/extensions
import { createRoot } from 'react-dom/client'

import Homepage from './pages/Homepage.jsx'
import setIcon from './util/setIcon.js'
import SignIn from './pages/SignIn.jsx'
// import DetallesProductos from './pages/detallesProductos.jsx'
import Login from './pages/Login.jsx'
import AddProduct from './pages/AddProduct.jsx'
import VerProducto from './pages/VerProducto.jsx'

import './styles/master.css'

// App
const App = () => {
  setIcon()
  const [isRegis, setIsRegis] = React.useState(false)
  const [isLogedIn, setIsLogedIn] = React.useState(false)
  const [username, setUsername] = React.useState('')
  // eslint-disable-next-line no-unused-vars
  const [isAdmin, setIsAdmin] = React.useState(false)
  const [onShow, setOnShow] = React.useState('home')

  console.table('regis', isRegis)
  console.table('log', isLogedIn)
  console.table('regis', isRegis)
  if (isRegis) return <SignIn setIsRegis={setIsRegis} />
  if (isLogedIn) {
    if (onShow === 'home') return <Homepage userName={username} setOnShow={setOnShow} />
    if (onShow === 'addItem') return <AddProduct userName={username} setOnShow={setOnShow} />
    if (onShow === 'Articulos') return <VerProducto userName={username} setOnShow={setOnShow} />

    // TODO Articulos
    /// TODO Perfil
  }
  return (
    <Login
      setIsRegis={setIsRegis}
      setIsLogedIn={setIsLogedIn}
      setUsername={setUsername}
      setIsAdmin={setIsAdmin}
    />
  )
}

// Render
const getRoot = () => document.getElementById('root')
createRoot(getRoot()).render(<App />)
