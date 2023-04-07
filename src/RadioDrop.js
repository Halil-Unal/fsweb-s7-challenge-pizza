import "./Radio.css";
import React from "react";
import { DropdownToggle,DropdownMenu,DropdownItem,UncontrolledDropdown,Button} from 'reactstrap';
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

<UncontrolledDropdown>
  <p> Hamur Seç *</p>
  <DropdownToggle
    caret
    color="white"
  >
  Hamur Kalınlığı
  </DropdownToggle>
  <DropdownMenu >
    <DropdownItem >
      Kalın Hamur
    </DropdownItem>
    <DropdownItem>
      İnce Hamur
    </DropdownItem>
    
  </DropdownMenu>
</UncontrolledDropdown>
</div>



    );
  };
  
  export default RadioDrop;



