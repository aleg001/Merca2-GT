/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react'

import PropTypes from 'prop-types'
import Header from '../Components/Header.jsx'
import TextInput from '../Components/TextInput.jsx'

import setDocTitle from '../util/docTitle.js'

import '../styles/login.css'
import '../styles/SignIn.css'
import '../styles/categoryInput.css'

const handleAddItem = (
  id,
  itemName,
  categoryId,
  description,
  price,
  idUsuario,
  ubicacion,
  rating,
  image,
) => {
  fetch('http://127.0.0.1:8000/addItem', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      id,
      itemName,
      categoryId,
      description,
      price,
      idUsuario,
      ubicacion,
      rating,
      image,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.succes) handleAddItemPartes(id, image)
      if (!result.succes) {
        return alert(
          'No se pudo agregar el producto\nPor favor intente mas tarde',
        )
      }

      return alert('Se añadió el producto con exito!!')
    })
}

const handleAddItemPartes = (id_item, imagen) => {
  fetch('http://127.0.0.1:8000/addItemPartes', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      id_item,
      imagen,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      if (!result.succes) {
        return alert(
          'No se pudo agregar el producto\nPor favor intente mas tarde',
        )
      }

      return alert('Se añadió el producto con exito!!')
    })
}

const handleCategory = (setCat) => {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({}),
    redirect: 'follow',
  }

  fetch('http://127.0.0.1:8000/getCategory', requestOptions)
    .then((response) => response.json())
    .then((result) => {
      const categories = result.user
      setCat(categories)
    })
}

const AddProduct = ({ userName, setOnShow }) => {
  try {
    setDocTitle('Agregar producto')
    // setDocTitle('Login')
  } catch (error) { console.log(error) }
  // Estructura de tabla:
  // id, nombre, id_cat, descripcion, precio, id_usuario, ubicacion, post_time, item_rating, image

  // random item id
  const randomID = () => Date.now()

  // star rating
  const rating = () => {
    const starRating = (Math.random() * (5 - 1) + 1).toFixed(2)
    return parseFloat(starRating)
  }

  const [productName, setproductName] = React.useState('')
  const [description, setdescription] = React.useState('')
  const [price, setprice] = React.useState('')
  const [ubication, setubication] = React.useState('')
  const [Link, setLink] = React.useState('')
  const [Cat, setCat] = React.useState([])
  const [Cat1, setCat1] = React.useState('')

  useEffect(() => {
    handleCategory(setCat)
  }, [])

  return (
    <div className='content'>
      <Header title='Agregar nuevo producto' setOnShow={setOnShow} />
      <div className='main-content1'>
        <form id='form-singin'>
          <div className='formSignIn'>
            <TextInput
              set={setproductName}
              title='Ingrese nombre del producto'
              className='userInput'
              placeholderText='Producto'
            />

            <TextInput
              set={setprice}
              title='Ingrese su precio (en quetzales)'
              className='userInput'
              placeholderText='Precio'
            />

            <label className='category-label'>Ingrese una categoria:</label>
            <select
              onChange={(event) => setCat1(event.target.value)}
              className='category-input'
            >
              {Cat
                && Cat.map((option, index) => (
                  <option key={index} value={option.id}>
                    {option.nombre_cat}
                  </option>
                ))}
            </select>

            <TextInput
              set={setdescription}
              title='Descripción del artículo'
              className='userInput'
              placeholderText='Descripción'
            />

            <TextInput
              set={setubication}
              title='Ubicación del artículo'
              className='userInput'
              placeholderText='Ubicación'
            />

            <TextInput
              set={setLink}
              title='Link de la imagen del artículo'
              className='userInput'
              placeholderText='Link'
            />
          </div>
        </form>
      </div>
      <button
        type='button'
        className='btnLogin'
        onClick={() => {
          if (
            [productName, Cat, description, price, ubication, Link].includes('')
          ) { return alert('Llene los campos para ingresar su producto') }

          return handleAddItem(
            randomID(),
            productName,
            Cat1,
            description,
            price,
            userName,
            ubication,
            rating(),
            Link,
          )
        }}
      >
        Agregar producto
      </button>
    </div>
  )
}

// Props Validation
AddProduct.propTypes = {
  userName: PropTypes.string.isRequired,
}

export default AddProduct
