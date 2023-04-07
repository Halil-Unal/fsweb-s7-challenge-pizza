import "./Radio.css";
import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
const RadioDrop = () => {
    return (
      <div className="radio">


<form >

  <p>Boyut Seç *</p>

  <input type="radio" id="html" name="fav_language" value="Küçük"></input>

  <label htmlfor="html">Küçük</label> 
<br></br>

  <input type="radio" id="javascript" name="fav_language" value="Orta"></input>
  <label htmlFor="javascript">Orta</label><br></br>


  <input type="radio" id="javascript" name="fav_language" value="Büyük"></input>
  <label htmlFor="javascript">Büyük</label><br></br>


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



