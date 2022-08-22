import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Header from '../Components/Header.jsx'
import ItemInGrid from '../Components/itemInGrid.jsx'
import DetallesProductos from './detallesProductos.jsx'
import Navbar from '../Components/navbar.jsx'
import { AddItemButton } from '../Components/AddItemButton.jsx'

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

const handleCategory = (setCat) => {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
    }),
    redirect: 'follow',
  }

  fetch('http://127.0.0.1:8000/getCategory', requestOptions)
    .then(response => response.json())
    .then(result => {
      setCat(result.user)
    })
}

const handleCategoryItems = (setItems, id_cat) => {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      id_cat
    }),
    redirect: 'follow',
  }

  fetch('http://127.0.0.1:8000/getCategoryItems', requestOptions)
    .then(response => response.json())
    .then(result => {
      setItems(result.items)
    })
}

const Homepage = ({ userName, setOnShow }) => {
  const [items, setItems] = React.useState()
  const [Cat, setCat] = React.useState([])
  const [Cat1, setCat1] = React.useState('')
  const [idSelectedProduct, setIdSelectedProduct] = React.useState()
  const [selectedProduct, setSelectedProduct] = React.useState(false)

  useEffect(() => {
    handleItemsHomepage(setItems)
    handleCategory(setCat)
  }, [])

  useEffect(() => {
    if (Cat1 != '') {
      handleCategoryItems(setItems, Cat1)
      console.log(Cat1, ' cat1')
    } 
    if (Cat1 === 'cat_prueba') {
      handleItemsHomepage(setItems)
    }
  }, [Cat1])

  if (selectedProduct) return <DetallesProductos idItem={idSelectedProduct} />
  return (
    <div className='content'>
      <Header title='Homepage' user={userName} />
      <AddItemButton setOnShow={setOnShow} />
      <Navbar setOnShow={setOnShow} Cat={Cat} cat1={setCat1}/>

      <div className='main-content-login' />
      <div className='container'>
        {
          items
          && items.map((item, index) => (
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
          ))
        }
      </div>
      <footer>
        Merca2-GT | Tel: +502 5017 - 6509 | administracion@merca2gt.com
      </footer>
    </div>
  )
}

Homepage.propTypes = {
  userName: PropTypes.string.isRequired,
  setOnShow: PropTypes.func.isRequired,
}

export default Homepage
