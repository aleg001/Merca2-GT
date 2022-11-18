import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Header from '../Components/Header.jsx'
import ItemInGrid from '../Components/itemInGrid.jsx'
import DetallesProductos from './detallesProductos.jsx'
import Navbar from '../Components/navbar.jsx'
import { AddItemButton } from '../Components/AddItemButton.jsx'

/* istanbul ignore next */
const handleItemsHomepage = (setItems) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  }

  fetch('https://backend-merca2.onrender.com/getItems', requestOptions)
    .then((response) => response.json())
    .then((result) => setItems(result.items))
    .catch((error) => console.log('error', error))
}

/* istanbul ignore next */
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

  fetch('https://backend-merca2.onrender.com/getCategory', requestOptions)
    .then(response => response.json())
    .then(result => {
      setCat(result.user)
    })
}

/* istanbul ignore next */
const handleCategoryItems = (setItems, id_cat) => {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      id_cat,
    }),
    redirect: 'follow',
  }

  fetch('https://backend-merca2.onrender.com/getCategoryItems', requestOptions)
    .then(response => response.json())
    .then(result => {
      setItems(result.items)
    })
}

/* istanbul ignore next */
const handleRegisterVisit = (username) => {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      username,
    }),
    redirect: 'follow',
  }

  fetch('https://backend-merca2.onrender.com/registerVisit', requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result, 'yess')
    })
}

const Homepage = ({ userName, setOnShow }) => {
  const [items, setItems] = React.useState()
  const [Cat, setCat] = React.useState([])
  const [Cat1, setCat1] = React.useState('')
  const [idSelectedProduct, setIdSelectedProduct] = React.useState()
  const [selectedProduct, setSelectedProduct] = React.useState(false)

  /* istanbul ignore next */
  useEffect(() => {

    try {
      handleItemsHomepage(setItems)
      handleCategory(setCat)

    } catch (e) {
      console.log('')
    }


  }, [])

  /* istanbul ignore next */
  useEffect(() => {
    if (Cat1 !== '') {
      handleCategoryItems(setItems, Cat1)
      console.log(Cat1, ' cat1')
    }
    /* istanbul ignore next */
    if (Cat1 === 'cat_prueba') {
      handleItemsHomepage(setItems)
    }
  }, [Cat1])

  /* istanbul ignore next */
  if (selectedProduct) {
    return (
      <DetallesProductos
        username={userName}
        idItem={idSelectedProduct}
        setOnShow={setOnShow}
        setSelectedProduct={setSelectedProduct}
      />
    )
  }

  /* istanbul ignore next */
  return (
    <div className='content'>
      <Header title='Homepage' user={userName} setOnShow={setOnShow} />
      <AddItemButton setOnShow={setOnShow} />

      <Navbar setOnShow={setOnShow} Cat={Cat} cat1={setCat1} />

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
