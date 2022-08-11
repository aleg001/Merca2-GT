import React, { useEffect } from 'react'
import Header from '../Components/Header.jsx'
import ItemInGrid from '../Components/itemInGrid.jsx'
import DetallesProductos from './detallesProductos.jsx'
import Navbar from '../Components/navbar.jsx'
import AddItemButton from '../Components/AddItemButton.jsx'

const handleItemsHomepage = (setItems) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  }

  fetch('http://127.0.0.1:8000/getItems', requestOptions)
    .then((response) => response.json())
    .then((result) => setItems(result.items))
    .catch((error) => console.log('error', error))
}

const Homepage = ({ userName, setOnShow }) => {
  const [items, setItems] = React.useState()
  const [idSelectedProduct, setIdSelectedProduct] = React.useState()
  const [selectedProduct, setSelectedProduct] = React.useState(false)

  useEffect(() => {
    handleItemsHomepage(setItems)
  }, [])

  //console.log("dsfds", idSelectedProduct)

  if (selectedProduct) return <DetallesProductos id_item={idSelectedProduct} />
  return (
    <div className='content'>
      <Header title='Homepage' user={userName} />
      <AddItemButton setOnShow={setOnShow} />
      <Navbar setOnShow={setOnShow} />

      <div className='main-content-login'></div>
      <div className='container'>
        {items &&
          items.map((item, index) => (
            <ItemInGrid
              itemName={item.nombre}
              itemLocation={item.ubicacion}
              itemPrice={item.precio}
              itemPublishDate={item.post_time}
              itemImage={item.image}
              key={index}
              itemId={item.id}
              setIdSelectedProduct={setIdSelectedProduct}
              setSelectedProduct={setSelectedProduct}
            />
          ))}
      </div>
      <footer>
        Merca2-GT | Tel: +502 5017 - 6509 | administracion@merca2gt.com
      </footer>
    </div>
  )
}

export default Homepage
