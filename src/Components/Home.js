import React from 'react'
import './../css/Home.css'
import Product from './Product'
import productList from '../ProductList'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "lightgray", height:"20vh", border: "1px solid transparent",display:"flex",alignItems:"center",justifyContent:"center" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "lightgray", height:"20vh", border: "1px solid transparent",display:"flex",alignItems:"center",justifyContent:"center" }}
        onClick={onClick}
      />
    );
  }
  
function Home() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
  return (
    <div>
        <Slider {...settings} style={{marginLeft: "30px",marginRight:"30px"}}>
            <div className="home">
                <div className="home__container">
                    <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img15/4th/sept/unrechero/8thslot/Tws_Tallhero_3000x1200._CB596103422_.jpg" alt="" />
                </div>
            </div>
            <div className="home">
                <div className="home__container">
                    <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Gw/Dec/one/Monthly/Deals-Unrec-PC-3000._CB586257034_.jpg" alt="" />
                </div>
                </div>
            <div className="home"> 
                <div className="home__container">
                    <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Dec_2023/3000X1200BAU_Dec._CB587127632_.jpg" alt="" />
                </div>
            </div>
        </Slider>
        <div className="home__row">
        {productList.map((product)=>(
            
                <Product title={product.title}
                key={product.key}
                id={product.id}
                image={product.image}
                rating={product.rating}
                price={product.price}/>
        ))}
        </div>
            {/* <Product title="Von Dutch Baseball Jacks Crest Cap"
                key={123}
                id="123"
                image="https://m.media-amazon.com/images/I/61MVihgwB+L._AC_UL400_.jpg"
                rating={5}
                price={19}/>
            <Product title="Jiakalamo Straighter Timer Night Light-Count-Soccer Stopwatch Match Game for Sports Training (Black)"
                key={234}
                id="234"
                image="https://m.media-amazon.com/images/I/61VV1oYxSjL._AC_UL400_.jpg"
                rating={5}
                price={19}/>
        </div> */}
        {/* <div className="home__row">
        <Product title="URAQT Elastic Non-Slip Sports Headband, 5PCS Non-Slip Silicone Grip Sports Headband, Elastic Thin Sports Headbands Sweatband"
                key={345}
                id="345"
                image="https://m.media-amazon.com/images/I/71FNpxIoLxL._AC_UL400_.jpg"
                rating={5}
                price={19}/>
            <Product title="Padding Running Socks - Running Fitness Socks I Running Jogging Socks for Men and Women | Sports Socks in Black, Navy Blue"
                key={456}
                id="456"
                image="https://m.media-amazon.com/images/I/71fPbANyloS._AC_UL400_.jpg"
                rating={5}
                price={19}/>
            <Product title="SAGUARO Unisex Barefoot Shoes Trail Running Shoes Flexible Lightweight Water Sports Shoes Non-Slip Comfortable Minimalist"
                key={567}
                id="567"
                image="https://m.media-amazon.com/images/I/81r8dMxVnBL._AC_UL400_.jpg"
                rating={5}
                price={19}/>
              
        </div>   
        <div className="home__row">
        <Product title="ECCO Ecco Biom 2.1 X Country M Low Men's Running Shoe"
                key={678}
                id="678"
                image="https://m.media-amazon.com/images/I/81qWl6PszpL._AC_UL400_.jpg"
                rating={5}
                price={19}/>
        </div> */}
    </div>
  )
}

export default Home
