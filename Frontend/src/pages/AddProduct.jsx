import React from 'react'

import Header from '../components/Header.jsx'
import TextInput from '../components/TextInput.jsx'

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
  id_usuario,
  ubicacion,
  rating,
  image
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
      id_usuario,
      ubicacion,
      rating,
      image,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      if (!result.succes)
        return alert(
          'No se pudo agregar el producto\nPor favor intente mas tarde'
        )
      alert('Se añadió el producto con exito!!')
      setTimeout(setIsRegis, 500, false)
    })
    .catch((error) => {
      setTimeout(setIsRegis, 500, false)
    })
}

const AddProduct = ({ userName, setIsRegis }) => {
  setDocTitle('Agregar producto')
  // Estructura de tabla:
  // id, nombre, id_cat, descripcion, precio, id_usuario, ubicacion, post_time, item_rating, image

  // random item id
  const randomID = () => {
    return Date.now()
  }

  // posting time
  const postTime = () => {
    const d = new Date()
    return d.toLocaleString()
  }

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
  const [Cat, setCat] = React.useState('')
  console.log(Cat)

  return (
    <div className='content'>
      <Header title='Agregar nuevo producto' />
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

            <label className="category-label">Ingrese una categoria:</label>
              <select 
                onChange={(event) => setCat(event.target.value)}
                className='category-input'
              >
                <option value="1">Vehiculos</option>
                <option value="2">Alquiler de Propiedades</option>
                <option value="3">Artiuclos Deportivos</option>
                <option value="4">Articulos Gratis</option>
                <option value="5">Articulos para el hogar</option>
                <option value="6">Clasificados</option>
                <option value="7">Electrónica</option>
                <option value="8">Entretenimiento</option>
                <option value="9">Familia</option>
                <option value="10">Indumentaria</option>
                <option value="11">Instrumentos Musicales</option>
                <option value="12">Jardín y aire libre</option>
                <option value="13">Juguetes y juegos</option>
                <option value="14">Materiales para reformas del hogar</option>
                <option value="15">Pasatiempos</option>
                <option value="16">Productos para mascotas</option>
                <option value="17">Suministros de Oficina</option>
                <option value="18">Viviendas en venta</option>
                <option value="19">Artículos para intercambio</option>
                <option value="20">Joyería</option>
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
            productName == '' ||
            Cat == '' ||
            description == '' ||
            price == '' ||
            ubication == '' ||
            Link == ''
          ) {
            return alert('Llene los campos para ingresar su producto')
          }
          handleAddItem(
            randomID(),
            productName,
            Cat,
            description,
            price,
            userName,
            ubication,
            rating(),
            Link
          )
        }}
      >
        Agregar producto
      </button>
    </div>
  )
}

export default AddProduct
