import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import "./Siparis.css";


const Final = () => {
    return (
        <div className="EndTop">
            <div className="enduse">
            <Link to="/">
        <h1>Teknolojik Yemekler</h1>
        </Link>
        </div>
        <div className="end" >
        <h1>  Tebrikler! <br></br>  Siparişiniz Alındı! </h1>
        
        </div>
        </div>
    );
  };
  
  export default Final;