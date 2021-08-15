import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";

ReactDOM.hydrate(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);
