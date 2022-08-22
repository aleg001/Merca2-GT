/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import Header from '../Components/Header.jsx'

import '../styles/detallesProducto.css'

const openInNewTab = (name, product) => {
  // eslint-disable-next-line no-param-reassign
  const number = '58747112'
  window.open(
    `https://wa.me/502${number}?text=Hola,+${name}!+Estoy+interesado+en+comprar+${product}`,
    '_blank',
    'noopener,noreferrer',
  )
}

const handleItems = (setItems, id) => {
  fetch('http://127.0.0.1:8000/getSelectedItem', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      id,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      setItems(result.items)
    })
    .catch((error) => console.log('error', error))
}

const handleSellerName = (setSellerName, setSellerLastName, id) => {
  fetch('http://127.0.0.1:8000/getSellerName', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      id,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      setSellerName(result.user[0].name)
      setSellerLastName(result.user[0].lastname)
    })
    .catch((error) => console.log('error', error))
}

const handleSellerPic = (setSellerPic, id) => {
  fetch('http://127.0.0.1:8000/getSellerPic', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      id,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      setSellerPic(result.user[0].profile_pic)
    })
    .catch((error) => console.log('error', error))
}

const handleProductPics = (setProductPics, id) => {
  fetch('http://127.0.0.1:8000/getProductPics', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      id,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      setProductPics(result.pictures)
    })
    .catch((error) => console.log('error', error))
}

const DetallesProductos = ({ idItem }) => {
  const [items, setItems] = React.useState()
  const [mainPic, setMainPic] = React.useState()
  const [sellerPic, setSellerPic] = React.useState()
  const [sellerName, setSellerName] = React.useState()
  const [productPics, setProductPics] = React.useState()
  const [sellerLastName, setSellerLastName] = React.useState()

  useEffect(() => {
    handleItems(setItems, idItem)
  }, [])

  useEffect(() => {
    if (!items) return
    // eslint-disable-next-line array-callback-return
    items.map((item) => {
      handleSellerPic(setSellerPic, item.id_usuario)
      handleSellerName(setSellerName, setSellerLastName, item.id_usuario)
      handleProductPics(setProductPics, idItem)
    })
  }, [items])

  useEffect(() => {
    if (!productPics) return
    setMainPic(productPics[0].imagen)
  }, [productPics])

  return (
    <>
      <Header title='Producto' />
      <div className='content'>
        {items &&
          items.map((item, index) => (
            <div className='wrapper'>
              <div className='main-grid'>
                <div className='seller-info'>
                  <div className='profile-pic'>
                    <img id='img_profile' src={sellerPic} alt='' />
                  </div>
                  <div className='seller-data'>
                    <div className='seller-name '>
                      <h1 key={index}>
                        {sellerName}
                        ‎
                        {sellerLastName}
                      </h1>
                    </div>
                    <div className='publication-time'>
                      {/* <!-- Hora de publicación --> */}
                      <h3 key={index + 1}>
                        Publicado el
                        {item.post_time[8]}
                        {item.post_time[9]}/{item.post_time[5]}
                        {item.post_time[6]}/{item.post_time[0]}
                        {item.post_time[1]}
                        {item.post_time[2]}
                        {item.post_time[3]}
                      </h3>
                    </div>
                    <div className='stars'>
                      {/* <!-- Calificación con estrellas --> */}
                      <button type='button' className='star'>
                        &#9733;
                      </button>
                      <button type='button' className='star'>
                        &#9733;
                      </button>
                      <button type='button' className='star'>
                        &#9733;
                      </button>
                      <button type='button' className='star'>
                        &#9733;
                      </button>
                      <button type='button' className='star'>
                        &#9734;
                      </button>
                    </div>
                  </div>
                </div>
                <div className='product-info'>
                  <div className='product-name'>
                    {/* <!-- Nombre de producto --> */}
                    <h1 key={index + 2}>{item.nombre}</h1>
                  </div>
                  <div className='imagenesProducto'>
                    {/* <!-- Imágen de producto --> */}
                    <img className='mainPic' src={mainPic} alt='' />
                    <div className='all-pictures'>
                      {productPics &&
                        productPics.map((pic, index2) => (
                          <img
                            key={index2}
                            className='Pic'
                            src={pic.imagen}
                            alt='Product pictures'
                            onClick={() => setMainPic(pic.imagen)}
                          />
                        ))}
                    </div>
                  </div>
                </div>
                <div className='product-footer'>
                  <div className='product-details'>
                    <div className='price'>
                      {/* <!-- Precio --> */}
                      <h3 key={index + 3}>
                        Q.
                        {item.precio}
                      </h3>
                    </div>
                    <div className='description'>
                      <p key={index + 4}>{item.descripcion}</p>
                    </div>
                  </div>
                </div>
                <div className='contact'>
                  <button
                    key={index + 2}
                    className='myButton1'
                    onClick={() => openInNewTab(sellerName, item.nombre)}
                  >
                    Contactar
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      {/* <Footer/> */}
    </>
  )
}

// Props Validation
DetallesProductos.propTypes = {
  idItem: PropTypes.string.isRequired,
}

export default DetallesProductos
