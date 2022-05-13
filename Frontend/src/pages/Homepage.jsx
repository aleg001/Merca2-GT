import React, { useEffect } from "react";
import TextInput from "../components/TextInput.jsx";
import setDocTitle from "../util/docTitle.js";
import Header from "../components/Header.jsx";
import ItemInGrid from "../components/ItemInGrid.jsx";

const handleItemsHomepage = (setItems) => {
  const requestOptions = {
  method: 'GET',
  redirect: 'follow'
  };

  fetch("http://127.0.0.1:8000/getItems", requestOptions)
    .then(response => response.json())
    .then(result => setItems(result.items))
    .catch(error => console.log('error', error));
}

const Homepage = () => {
  const [items, setItems] = React.useState();
  useEffect(() => {
    handleItemsHomepage(setItems)
  }, [])

  items && console.log(items)


  return (
  <div className="content">
    <Header title="Homepage"/>
    <div className="main-content-login"></div>
    <div className="container">
      {items && items.map((item, index) => (
        <ItemInGrid
          itemName = {item.nombre}
          itemLocation = {item.ubicacion}
          itemPrice = {item.precio}
          itemPublishDate = {item.post_time}
          itemImage = {item.image}
          key={index}
        />
      ))}
    </div>
    <footer>
        Merca2-GT | Tel: +502 5017 - 6509 | administracion@merca2gt.com
    </footer>
  </div>
  );
};

export default Homepage;
