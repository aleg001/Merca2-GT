import React from 'react'
import PropTypes from 'prop-types'
import '../styles/itemGrid.css'
import '../styles/VerProductos.css'

const handleDeleteItem = (itemId, setItems) => {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      itemId,
    }),
    redirect: 'follow',
  }

  fetch('http://127.0.0.1:8000/deleteItem', requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result.succes)
      setItems([])
      alert('borrado con exito')
      window.location.reload(false)
    })
    .catch(error => console.log('Error en handleItemsUser', error))
}

const ItemVerProductos = ({
  itemName,
  itemLocation,
  itemPrice,
  itemPublishDate,
  itemId,
  itemImage,
}) => {
  const [items, setItems] = React.useState()

  return (
    <div className='container_item'>
      <figure className='fotositem_portada'>
        <img className='productImage' src={itemImage} alt='' />
      </figure>
      <div className='contenidositem_ubicacionprecio'>
        <h4 className='ubicacion'>
          {itemLocation}
        </h4>
        <h5 className='product_price'>
          Q.
          {itemPrice}
        </h5>
      </div>
      <h3 className='product_name'>
        {itemName}
      </h3>
      <div className='contenidositem_tiemporating'>
        <h6 className='hora_publicacion'>
          {itemPublishDate}
        </h6>
      </div>
      <button
        type='button'
        className='btn_delete'
        onClick={() => handleDeleteItem(itemId, setItems)}
      >
        x
      </button>
    </div>
  )
}

ItemVerProductos.propTypes = {
  itemName: PropTypes.string.isRequired,
  itemLocation: PropTypes.string.isRequired,
  itemPrice: PropTypes.string.isRequired,
  itemPublishDate: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  itemImage: PropTypes.any.isRequired,
}
export default ItemVerProductos
