import React from "react";
import {  BrowserRouter, Route, BrowserRouter as Router } from "react-router-dom";
import Order from "./Order.js"
import HomePage from "./HomePage.js"
import Complate from "./Complate.js"
import "./HomePage.css";

const App = () => {
  return (
    <BrowserRouter>
    <Router>
      <div className="Home">
        <Route exact path="/" component={HomePage} />
        </div>
        <div className="order">
        <Route exact path="/pizza" component={Order} />
        </div>
        <div className="last">
        <Route exact path="/final" component={Complate} />
      </div>
    </Router>
    </BrowserRouter>
  );
};

export default App;
