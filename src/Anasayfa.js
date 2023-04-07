import React from "react";
import "./Anasayfa.css";

import { Link  } from "react-router-dom";

const Anasayfa = () => {
  
    return (
     
      <div className="Top">
        <div className="Main">
        <h1>Teknolojik Yemekler <br></br> Kod Acıktırır<br></br>Pizza, Doyurur</h1>
     
        </div>
        <Link to="/pizza">
          <button id="order-pizza">PIZZA SİPARİŞİ VER</button>
        </Link>
      </div>
   
    );
  };
  export default Anasayfa;