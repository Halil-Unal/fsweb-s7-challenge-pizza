import React from "react";
import "./Anasayfa.css";
import { Card,Button,CardBody,CardTitle,CardSubtitle,CardText} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link  } from "react-router-dom";

const Anasayfa = () => {
  
    return (
     
      <div className="Top">
        <div className="Main">
        <h1>Teknolojik Yemekler <br></br> Kod Acıktırır<br></br>Pizza, Doyurur</h1>
     
      
        <Link to="/pizza">
          <button id="order-pizza">PIZZA SİPARİŞİ VER</button>
        </Link>
        

        <div className="mid">  
       
        <Card
  style={{
    width: '25rem'
  }}
>
  <img
    alt="Sample"
    src={`${process.env.PUBLIC_URL}/esnek/kart-1.png`}  />
  
  <CardBody>
    <CardTitle tag="h5">
    Özel Lezzetus
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
    Position : Absolute Acılı Pizzza
    </CardSubtitle>
    <CardText>
      Kendine güvenenlerin seçimi
    </CardText>
    <Link to="/pizza">
 <Button> Sipariş Ver</Button>
 </Link>
  </CardBody>
</Card>

<Card
  style={{
    width: '25rem',
   
  }}
>
  <img
    alt="Sample"
    src={`${process.env.PUBLIC_URL}/esnek/kart-2.png`}  />
  
  <CardBody>
    <CardTitle tag="h5">
     Haccathlon
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
     Burger Menü
    </CardSubtitle>
    <CardText>
      Ağzının tadını bilenlere enfes bir burger
    </CardText>

  </CardBody>
</Card>

       
<Card
  style={{
    width: '25rem'
  }}
>
  <img
    alt="Sample"
    src={`${process.env.PUBLIC_URL}/esnek/kart-3.png`}  />
  
  <CardBody>
    <CardTitle tag="h5">
    Çoookkkk Hızlı
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
     Npm gibi kurye
    </CardSubtitle>
    <CardText>
      
    </CardText>

  </CardBody>

</Card>
</div>
</div>
<div className="footertop">  
<p> En Çok Paketlenen Menüler   </p>
<h2>Acıktıran Kodlarla Doyuran Lezzetler    </h2>

   </div>
   <div className="footerbot" >
   <Card
  style={{
    width: '25rem',
   
  }}
>
  <img
    alt="Sample"
    src={`${process.env.PUBLIC_URL}/esnek/food-1.png`}  />
  
  <CardBody>
    <CardTitle tag="h5">
     Terminal Pizza
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
   
    </CardSubtitle>
    <CardText>
      4.8      (200)          60 TL
    </CardText>

  </CardBody>
</Card>
<Card
  style={{
    width: '25rem',
   
  }}
>
  <img
    alt="Sample"
    src={`${process.env.PUBLIC_URL}/esnek/food-2.png`}  />
  
  <CardBody>
    <CardTitle tag="h5">
     Position Absolute Acılı Pizza
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
     
    </CardSubtitle>
    <CardText>
    4.9      (250)          85.50 TL
    </CardText>

  </CardBody>
</Card>
<Card
  style={{
    width: '25rem',
   
  }}
>
  <img
    alt="Sample"
    src={`${process.env.PUBLIC_URL}/esnek/food-3.png`}  />
  
  <CardBody>
    <CardTitle tag="h5">
     useEffect Tavuklu Burger
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
    
    </CardSubtitle>
    <CardText>
    4.5      (250)          68 TL
    </CardText>

  </CardBody>
</Card>
</div>
   
</div>
      
    );
  };
  export default Anasayfa;