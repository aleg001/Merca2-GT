import React from "react";
import itemGrid from "../styles/itemGrid.css";

const ItemInGrid = ({
  itemName,
  itemLocation,
  itemPrice,
  itemPublishDate,
  itemImage
}) => {
  return (
    <div className="container_item">
      <div className="container_item">
        <figure className="fotositem_portada">
          <img className="productImage" src={itemImage}/>
        </figure>
        <div className="contenidositem_ubicacionprecio">
          <h4 className="ubicacion"> {itemLocation} </h4>
          <h5 className="product_price"> {itemPrice} </h5>
        </div>
        <h3 className="product_name"> {itemName}</h3>
        <div className="contenidositem_tiemporating">
          <h6 className="hora_publicacion"> {itemPublishDate} </h6>
        </div>
      </div>
    </div>
  );
};

export default ItemInGrid;
