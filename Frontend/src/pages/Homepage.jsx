import React from "react";
import TextInput from "../components/TextInput.jsx";
import setDocTitle from "../util/docTitle.js";
import Navbar from "../components/Navbar.jsx";
import itemInGrid from "../components/itemInGrid.jsx";

const Homepage = () => {
  setDocTitle("Homepage");
  // Hacer llamado a backend para llenar de los items de la bd
  var items = [];
  // Array temporal con elementos
  var itemsInDB = [];
  // Se itera sobre los productos existentes
  for (var i = 0; i < items.length; i++) {
    // Se itera sobre parametros por item
    for (var j = 0; j < i.length; j++) {
      itemsInDB.push(
        <itemInGrid
          value={items[j]}
          itemName={items[j]}
          itemLocation={items[j]}
          itemPrice={items[j]}
          itemPublishDate={items[j]}
          itemRating={items[j]}
          itemImage={items[j]}
          itemDetail={items[j]}
        />
      );
    }
  }

  return (
    <div className="content">
      <Navbar></Navbar>
      <div className="main-content-login"></div>
      <div class="container">
        <div> {itemsInDB}</div>
      </div>
      <footer>
        Merca2-GT | Tel: +502 5017 - 6509 | administracion@merca2gt.com
      </footer>
    </div>
  );
};

export default Homepage;
