import React from "react";
import itemGrid from "../styles/itemGrid.css";

const itemInGrid = (
  itemName,
  itemLocation,
  itemPrice,
  itemPublishDate,
  itemRating,
  itemImage
) => {
  const [itemName, setitemName] = React.useState("");
  const [itemLocation, setitemLocation] = React.useState("");
  const [itemPrice, setitemPrice] = React.useState("");
  const [itemPublishDate, setitemPublishDate] = React.useState("");
  const [itemRating, setitemRating] = React.useState("");
  const [itemImage, setitemImage] = React.useState("");

  return (
    <div className="container">
      <a href="../VerProducto/Producto1/index.html">
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
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Star_rating_3_of_5.png"
                height="40px"
                width="100px"
              />
            </figure>
          </div>
        </div>
      </a>
    </div>
  );
};
export default itemInGrid;
