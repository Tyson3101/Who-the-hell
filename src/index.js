import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Game from "./Game";

const renderMethod =
  root && root.innerHTML === "" ? ReactDOM.render : ReactDOM.hydrate;
renderMethod(
  <React.StrictMode>
    <Redirect />
  </React.StrictMode>,
  document.getElementById("root")
);

export default function Redirect() {
  return (
    <Router>
      <Switch>
        <Route path="/:id">
          <Game />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
