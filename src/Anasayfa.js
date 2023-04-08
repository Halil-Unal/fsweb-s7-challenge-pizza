import React from "react";
import "./Anasayfa.css";
import { Card,Button,CardBody,CardTitle,CardSubtitle,CardText} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link  } from "react-router-dom";
import { FaTwitter ,FaFacebook,FaInstagram} from 'react-icons/fa';


const Anasayfa = () => {
  
    return (
     
      <div className="Top">
        <div className="Main">
        <h1>Teknolojik Yemekler <br></br> Kod Acıktırır<br></br>Pizza, Doyurur</h1>
     
      <br></br>
       
        <div/>
       
        <div/>
       
        
        <div className="topbutton"> 
        <Link to="/pizza">
          <button id="order-pizza">Pizza Siparişi Ver</button>
        </Link>
        </div>
        </div>
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
      Kendine Güvenenlerin Seçimi
    </CardText>
    <Link to="/pizza">
 <Button> Sipariş Ver</Button>
 </Link>
  </CardBody>
</Card>
<div className="twoside">  
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
      Ağzının Tadını Bilenlere Enfes Bir Burger
    </CardText>
    <Link to="/pizza">
    <Button> Sipariş Ver</Button>
    </Link>
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
      En Geç 30dk'da Siparişin Kapında
    </CardText>
    <Link to="/pizza">
    <Button> Sipariş Ver</Button>
    </Link>
  </CardBody>

</Card>
</div>

</div>
<div className="footertop">  
<h3>En Çok Paketlenen Menüler   </h3> 
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
<div className="comcontainer">
<div className="comminication"  >  
<h2>Teknolojik Yemekler   </h2>
<img
  
    src={`${process.env.PUBLIC_URL}/esnek/icon-1.png`}  />
  <p> 341 londarary road, <br></br> İstanbul/Türkiye </p>
  <img
   
    src={`${process.env.PUBLIC_URL}/esnek/icon-2.png`}  />
<p>acıktım@teknolojikyemekler.com </p>
<img
  
    src={`${process.env.PUBLIC_URL}/esnek/icon-3.png`}  />
<p>+90 216 784 25 36</p>
  </div>
   <div className="menuıtem">  
   <h2>Sıcacık Menüler</h2>
   <p>Terminal Pizza</p>
   <p>5 Kişilik Pizza</p>
   <p>Absolute Pizza</p>
   <p> Hungry Burger </p>
   <p>Tavuklu Burger </p>
   <p> Patatas Kızartması</p>
   
   
   
    </div>
    <div className="insta">
      <h2>İnstagram</h2>
      <div className="instatop">
      <img
       src={`${process.env.PUBLIC_URL}/esnek/insta/li-0.png`}  />
      <img src={`${process.env.PUBLIC_URL}/esnek/insta/li-1.png`}  />
      <img src={`${process.env.PUBLIC_URL}/esnek/insta/li-2.png`}  />
      </div>
      <div className="instabot">
      <img src={`${process.env.PUBLIC_URL}/esnek/insta/li-3.png`}  />
      <img src={`${process.env.PUBLIC_URL}/esnek/insta/li-4.png`}  />
      <img src={`${process.env.PUBLIC_URL}/esnek/insta/li-5.png`}  />
      
      </div>
   

    </div>
    
    </div>
    <div className="footersbot">
      <p> @Teknolojik Yemekler 2023</p>
      <div class="social">
      <FaTwitter />
      <FaFacebook></FaFacebook>
      <FaInstagram/>
			
			</div>
          </div>
</div>
      
    );
  };
  export default Anasayfa;