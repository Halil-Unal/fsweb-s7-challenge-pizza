import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Siparis from "./Siparis.js"
import Anasayfa from "./Anasayfa.js"
import Complate from "./Complate.js"
import "./Anasayfa.css";
const App = () => {
  return (
    <Router>
      <div className="anasayfa">
        <Route exact path="/" component={Anasayfa} />
        </div>
        <div className="order">
        <Route exact path="/pizza" component={Siparis} />
        </div>
        <div className="last">
        <Route exact path="/final" component={Complate} />
      </div>
    </Router>
  );
};

export default App;
