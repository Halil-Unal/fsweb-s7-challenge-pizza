import React from "react";
import "./Siparis.css";

import { Link, Route, BrowserRouter as Router } from "react-router-dom";
const Siparis = () => {
  return (
    <div className="Top">
    <>
    
      <h1>Teknolojik Yemekler  </h1>
      <Link to="/">
          <button id="ANASAYFA">Ana Sayfaya Git</button>
        </Link>
      
    </>
    </div>
  );
};
export default Siparis;
