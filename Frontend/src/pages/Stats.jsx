import React from 'react'
import PropTypes from 'prop-types'

import Header from '../Components/Header.jsx'
import Navbar from '../Components/navbar.jsx'

const handleItemsUser = (setItems, idUsuario) => {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      idUsuario,
    }),
    redirect: 'follow',
  }

  fetch('http://127.0.0.1:8000/getItemsUser', requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(idUsuario, "iddd")
      console.log(result.items)
      setItems(result.items)
    })
}

const Stats = ({ userName, setOnShow }) => {
  const [items, setItems] = React.useState()
  React.useEffect(() => {
    handleItemsUser(setItems, userName)
  }, [])

  return (
    <div className='content'>
      <Header title='Estadísticas' user={userName} setOnShow={setOnShow} />
      <Navbar setOnShow={setOnShow} />
      <div className='container'>
        {items
        && items.map((item, index) => (
          <h3>Estadísticas generales</h3>
        ))}
      </div>

      <footer>
        Merca2-GT | Tel: +502 5017 - 6509 | administracion@merca2gt.com
      </footer>
    </div>
  )
}

Stats.propTypes = {
  userName: PropTypes.string.isRequired,
  setOnShow: PropTypes.func.isRequired,
}

export default Stats
