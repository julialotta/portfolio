import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Header from "./partials/Header";
import TopContent from "./partials/TopContent";
import BottomContent from "./partials/BottomContent";
import Footer from "./partials/Footer";

ReactDOM.render(
  <React.StrictMode>
    <div className="topBody">
      <div className="topBodyContent">
        <Header />
        <TopContent />
      </div>
    </div>
    <div className="btmBody">
      <div>
        <BottomContent />
      </div>
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
