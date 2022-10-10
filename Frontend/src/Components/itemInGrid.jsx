/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import PropTypes from 'prop-types'

import '../styles/itemGrid.css'

const ItemInGrid = ({
  itemName,
  itemLocation,
  itemPrice,
  itemPublishDate,
  itemImage,
  itemId,
  setIdSelectedProduct,
  setSelectedProduct,
}) => (
  <div
    className='container_item'
    data-testid="homePage"
    onClick={() => {
      setIdSelectedProduct(itemId)
      setSelectedProduct(true)
    }}
  >
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
  </div>
)

ItemInGrid.propTypes = {
  itemName: PropTypes.string.isRequired,
  itemLocation: PropTypes.string.isRequired,
  itemPrice: PropTypes.number.isRequired,
  itemPublishDate: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  itemImage: PropTypes.any.isRequired,
  itemId: PropTypes.string.isRequired,
  setIdSelectedProduct: PropTypes.func.isRequired,
  setSelectedProduct: PropTypes.func.isRequired,
}

export default ItemInGrid
