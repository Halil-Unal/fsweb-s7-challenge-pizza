import "./Radio.css";
import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
const RadioDrop = () => {
    return (
      <div className="radio">


<form >

  <p>Boyut Seç *</p>

  <input type="radio" id="small" name="fav_language" value="Küçük"></input>

  <label htmlfor="small">Küçük</label><br></br>


  <input type="radio" id="med" name="fav_language" value="Orta"></input>
  <label htmlFor="med">Orta</label><br></br>


  <input type="radio" id="large" name="fav_language" value="Büyük"></input>
  <label htmlFor="large">Büyük</label><br></br>


</form>

<form action="/action_page.php">
  <label for="cars">Hamur Seçiniz *</label>
  <br></br>
  <select name="cars" id="cars">
    <option value="Kalın">Kalın Hamur</option>
    <option value="İnce">İnce Hamur</option>
    <option value="Çok İnce">Çok İnce Hamur</option>
    
  </select>
  
  
</form>
</div>



    );
  };
  
  export default RadioDrop;



