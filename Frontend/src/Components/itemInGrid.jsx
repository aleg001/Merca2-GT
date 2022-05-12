import React from "react";
import itemGrid from "../styles/itemGrid.css";

const itemInGrid = ([
  itemName,
  itemLocation,
  itemPrice,
  itemPublishDate,
  itemRating,
  itemImage,
  itemDetail,
]) => {
  return (
    <div className="container_item">
      <a href={itemDetail}>
        <div className="container_item">
          <figure className="fotositem_portada">
            <img src={itemImage} width="200px" height="200px" />
          </figure>
          <div className="contenidositem_ubicacionprecio">
            <h4 className="ubicacion"> {itemLocation} </h4>
            <h5 className="product_price"> {itemPrice} </h5>
          </div>
          <h3 className="product_name"> {itemName}</h3>
          <div className="contenidositem_tiemporating">
            <h6 className="hora_publicacion"> {itemPublishDate} </h6>
            <figure className="temporalrating">
              <h6 className="hora_publicacion"> Rating: {itemRating} </h6>
            </figure>
          </div>
        </div>
      </a>
    </div>
  );
};
export default itemInGrid;
