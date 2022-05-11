import React from "react";
import Header from "../components/Header.jsx";
import TextInput from "../components/TextInput.jsx";
import setDocTitle from "../util/docTitle.js";

const Homepage = () => {
  setDocTitle("Homepage");

  return (
    <div className="content">
      <Header title="Homepage" />
      <div className="main-content-login"></div>
    </div>
  );
};

export default Homepage;
