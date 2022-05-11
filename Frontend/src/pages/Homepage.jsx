import React from "react";
import Header from "../components/Header.jsx";
import TextInput from "../components/TextInput.jsx";
import setDocTitle from "../util/docTitle.js";
import Navbar from "../components/Navbar.jsx";
import itemInGrid from "../components/itemInGrid.jsx";

const Homepage = () => {
  setDocTitle("Homepage");

  return (
    <div className="content">
      <Header title="Homepage" />
      <Navbar></Navbar>
      <div className="main-content-login"></div>
    </div>
  );
};

export default Homepage;
