import React, {useState} from 'react'
import { productImages } from './../../assets/productImages/index';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import {Navigation, Thumbs} from "swiper";
// Import Swiper styles
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/thumbs/thumbs.scss';
import "./Products.scss";

const Products = () => {
    const [activeThumb, setactiveThumb] = useState();
  return (
    <div className="ProductContainer">
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