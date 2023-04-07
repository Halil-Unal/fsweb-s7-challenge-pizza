import React from "react";
import "./Anasayfa.css";

import { Link, Route, BrowserRouter as Router } from "react-router-dom";

const Anasayfa = () => {
    return (
     
      <div className="Top">
        <h1>Teknolojik Yemekler</h1>
        <h1>Kod Acıktırır</h1>
        <h1>Pizza, Doyurur</h1>
  
        <Link to="/pizza">
          <button id="order-pizza">PIZZA SİPARİŞİ VER</button>
        </Link>
      </div>
   
    );
  };
  export default Anasayfa;