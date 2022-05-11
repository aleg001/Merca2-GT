import React from "react";
import TextInput from "../components/TextInput.jsx";
import setDocTitle from "../util/docTitle.js";
import Navbar from "../components/Navbar.jsx";
import itemInGrid from "../components/itemInGrid.jsx";

const Homepage = () => {
  setDocTitle("Homepage");

  return (
    <div className="content">
      <Navbar></Navbar>
      <div className="main-content-login"></div>
      <itemInGrid
        itemName="XD"
        itemLocation="XD"
        itemPrice="XD"
        itemPublishDate="XD"
        itemRating="XD"
        itemImage="XD"
        itemDetail="XD"
      ></itemInGrid>
      <footer>
        Merca2-GT | Tel: +502 5017 - 6509 | administracion@merca2gt.com
      </footer>
    </div>
  );
};

export default Homepage;
