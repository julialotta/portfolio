import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Header from "./partials/Header";
import Main from "./partials/main";
import Footer from "./partials/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
