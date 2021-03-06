import React from "react";
import itemGrid from "../styles/itemGrid.css";

const ItemInGrid = ({
  itemName,
  itemLocation,
  itemPrice,
  itemPublishDate,
  itemImage,
  itemId,
  setIdSelectedProduct,
  setSelectedProduct
}) => {
  return (
    <div className="container_item" onClick={()=> {
      setIdSelectedProduct(itemId),
      setTimeout(setSelectedProduct(true), 100)
    }}>
      <figure className="fotositem_portada">
        <img className="productImage" src={itemImage}/>
      </figure>
      <div className="contenidositem_ubicacionprecio">
        <h4 className="ubicacion"> {itemLocation} </h4>
        <h5 className="product_price">Q. {itemPrice} </h5>
      </div>
      <h3 className="product_name"> {itemName}</h3>
      <div className="contenidositem_tiemporating">
        <h6 className="hora_publicacion">{itemPublishDate} </h6>
        {/* <h3 className="hora_publicacion">Publicado el {itemPublishDate[8]}{itemPublishDate[9]}/{itemPublishDate[5]}{itemPublishDate[6]}/{itemPublishDate[0]}{itemPublishDate[1]}{itemPublishDate[2]}{itemPublishDate[3]}</h3> */}
      </div>
    </div>
  );
};

export default ItemInGrid;
