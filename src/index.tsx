import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Anette from "./Anette";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Anette />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
