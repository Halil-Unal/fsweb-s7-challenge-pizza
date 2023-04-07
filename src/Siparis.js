import React  from "react";
import "./Siparis.css";
import RadioDrop from "./RadioDrop"
import Check from "./Check"
import { Link } from "react-router-dom";


const Siparis = () => {
 
   
    
  return (
    
    <div id="pizza-form" className="siparis">
     
    <>
    <div className="TopFood"> 
      <h1>Teknolojik Yemekler  </h1>
      <div className="navbar">
        <ul>
      <Link to="/">
       
          <li>  Anasayfa-  </li>
          </Link>
          <li>  Seçenekler-  </li>
          <li> Sipariş oluştur   </li>
          </ul>
          </div>
          </div>
          <div className="MiddleFood">
        <h2>  <strong> Positon Absolute Acılı Pizza </strong>  </h2>
        <h2>  <strong> 85.50 TL </strong>  </h2>
        <p> Fronted dev olarak hala positon absolute kullanıyorsan bu pizza tam sana göre. <br></br>  Pizza domates,peynir ve çeşitli diğer malzemelerle kaplanmış, daha <br></br> sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, <br></br> genellikle yuvarlak düzleştirilmiş mayalı buğday bazlı hamurdan oluşan italyan <br></br>köken lezzetli bir yemektir.küçük pizzaya pizzeta denir.           </p>
       <div className="radio"> 
        <RadioDrop></RadioDrop> 
        </div>
        <div className="check">
     <Check></Check>
     </div>
          </div>
          
        
      
    </>
    </div>
  );
};
export default Siparis;
