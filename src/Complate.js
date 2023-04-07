import React ,{ useState } from "react";
import { Link } from "react-router-dom";
import "./Siparis.css";
import axios from 'axios';

const Final = () => {
    const [data, setData] = useState(null);
  
    function makePostRequest() {
        axios
          .post('https://reqres.in/api/orders')
          .then((response) => {
            console.log(response.data);
            setData(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }
      
    return (
        
      
        <div className="EndTop">
            <div>
        <button onClick={makePostRequest}>POST Request Yap</button>
      
      </div>
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