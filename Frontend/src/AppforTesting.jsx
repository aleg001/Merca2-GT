import React from 'react'
// eslint-disable-next-line import/extensions

import Homepage from './pages/Homepage.jsx'
import SignIn from './pages/SignIn.jsx'
// import DetallesProductos from './pages/detallesProductos.jsx'
import Login from './pages/Login.jsx'
import AddProduct from './pages/AddProduct.jsx'
import VerProducto from './pages/VerProducto.jsx'

import './styles/master.css'

// App
const App = () => {
  const [isRegis, setIsRegis] = React.useState(false)
  const [isLogedIn, setIsLogedIn] = React.useState(false)
  const [username, setUsername] = React.useState('')
  // eslint-disable-next-line no-unused-vars
  const [isAdmin, setIsAdmin] = React.useState(false)
  const [onShow, setOnShow] = React.useState('home')

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

export default App

