import React from 'react'
import PropTypes from 'prop-types'

import Header from '../Components/Header.jsx'
import Navbar from '../Components/navbar.jsx'
import ItemVerProductos from '../Components/itemVerProductos.jsx'

const handleItemsUser = ( setItems, idUsuario ) => {
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

const VerProducto = ({ userName, setOnShow }) => {
  const [items, setItems] = React.useState()
  React.useEffect(() => {
    handleItemsUser(setItems, userName)
  }, [])

  return (
    <div className='content'>
      <Header title='Mis productos' user={userName} setOnShow={setOnShow} />
      <Navbar setOnShow={setOnShow} />
      <div className='container'>
        {items
        && items.map((item, index) => (
          <ItemVerProductos
            itemName={item.nombre}
            itemLocation={item.ubicacion}
            itemPrice={item.precio}
            itemPublishDate={item.post_time}
            itemImage={item.image}
            key={index}
            itemId={item.id}
          />
        ))}
      </div>

      <footer>
        Merca2-GT | Tel: +502 5017 - 6509 | administracion@merca2gt.com
      </footer>
    </div>
  )
}

VerProducto.propTypes = {
  userName: PropTypes.string.isRequired,
  setOnShow: PropTypes.func.isRequired,
}

export default VerProducto
