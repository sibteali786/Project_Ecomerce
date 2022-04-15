import React, {useState} from 'react'
import { productImages } from './../../assets/productImages/index';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import {Navigation, Thumbs} from "swiper";
// Import Swiper styles
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/thumbs/thumbs.scss';
import "./Products.scss";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Stack from '@mui/material/Stack';

const Products = () => {
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
      }
    const [activeThumb, setactiveThumb] = useState();
    const breadcrumbs = [
        <a  key="1" href="/" onClick={handleClick}>
          Estado de México
        </a>,
        <a
          key="2"
          href="/material-ui/getting-started/installation/"
          onClick={handleClick}
        >
          Atizapan de Zaragoza
        </a>,
        <a key="3" style={{color:"#72509D",fontWeight:"bold"}}>
          Vino 3V con Botanas
        </a>,
      ];
  return (
    <div className="ProductContainer">
        <div className="topNavigation">
            <Stack spacing={2}>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                    {breadcrumbs}  
                </Breadcrumbs>
            </Stack>
            <Stack spacing={2}>
                <Breadcrumbs separator="|" aria-label="breadcrumb">
                    <a>
                    Enviar a
                    </a>  
                    <a style={{fontWeight:"bold"}}>
                    Benito Juarez
                    </a>
                </Breadcrumbs>
            </Stack>
        </div>
        {/* Product Display Slider */}
        <div className="sliderProduct">
        <Swiper 
            loop={true}
            spaceBetween={5}
            navigation={true}
            modules={[Navigation,Thumbs]}   
            grabCursor ={true}
            thumbs={{swiper:activeThumb}}
            className="product-image-slider"
            style={{width:"300px",height:"400px"}}
            >
                {
                    productImages.map((item,index)=>(
                        <SwiperSlide key={index}>
                            <img src={item.default} alt="product Image" style={{width:"100%",height:"auto"}} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <Swiper
            onSwiper={setactiveThumb} 
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            modules={[Navigation,Thumbs]}
            className="product-image-slider-thumbs"
            style={{marginTop:"1rem",width:"300px"}}
            >
                {
                    productImages.map((item,index)=>(
                        <SwiperSlide key={index}>
                            <div className="product-image-slider-thumbs-wrapper">
                                <img src={item.default} alt="product Image" style={{width:"100%",height:"auto"}} />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </div>
  )
}

export default Products