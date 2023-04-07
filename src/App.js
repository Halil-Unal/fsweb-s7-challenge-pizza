import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Siparis from "./Siparis.js"
import Anasayfa from "./Anasayfa.js"
import Complate from "./Complate.js"
const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Anasayfa} />
        <Route exact path="/pizza" component={Siparis} />
        <Route exact path="/final" component={Complate} />
      </div>
    </Router>
  );
};

export default App;
