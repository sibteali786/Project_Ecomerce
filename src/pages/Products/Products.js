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
import Divider from '@mui/material/Divider';
import DateRangeIcon from '@mui/icons-material/DateRange';
import IconButton from '@mui/material/IconButton'

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
        <div className="productDetails">
        <div className="productInformation">
            <div style={{
                display:"flex",
                justifyContent:"space-around"
            }}>
            <h6>
                Vino 3V y Botanas con Globo "Love You"
            </h6>
            <h6 style={{fontWeight:"bold"}}>
                $1,115.00 <span style={{color:"#72509D"}}> MXN </span>
            </h6>
            </div>
            <Divider style={{color:"#C4C4C4"}}/>
            <div id="productDescription1">
                <h6>
                    1.- Selecciona un horario
                </h6>
                <p>
                * Se hará un cargo de envío por $99.00 MXN
                </p>
                <div className="Cards">
                    <div >

                    <h6>
                        Hoy
                    </h6>
                    <p style={{color:"#FFFFFF",backgroundColor:"#72509D",padding:"1rem 0.5rem"}}>
                        08:00am - 02:00pm
                    </p>
                    <p>
                        25 febrero
                    </p>
                    <p>
                        10:00am - 04:00pm
                    </p>
                    <p>
                        03:00am - 08:00pm
                    </p>
                    </div>
                    <div >

                    <h6>
                        Manana
                    </h6>
                    
                    <p>
                        26 febrero
                    </p>
                    </div>
                    <div >
                        <IconButton aria-label="Calendar Icon button">
                        <DateRangeIcon size="small"/>
                        </IconButton>
                    <p>
                        Mas fechas
                    </p>
                    </div>
                </div>
            </div>
            <Divider/>
            <div id="productDescription2">

                <h6>
                2.-Agrandar producto (opcional)
                </h6>
                <div className="Cards2">
                    <div >

                    <h6>
                        $84
                    </h6>
                    <p>
                        GRAND
                    </p>
                    <p>
                    JG Rose Stems
                    Triple line Blooms
                    </p>
                    </div>

                    <div style={{
                        border: "1px solid #72509D"
                    }}>

                    <h6 style={{fontWeight:"bold"}}>
                        $69
                    </h6>
                    <p style={{fontWeight:"bold"}}>
                        DELUXE
                    </p>
                    <p>
                    24 Rose Stems
                    Double the Blooms
                    </p>
                    </div>

                    <div>

                    <h6>
                        $24
                    </h6>
                    <p >
                        ORIGINAL
                    </p>
                    <p>
                    12 Rose Stems
                    A Classic Sized Bouq
                    </p>
                    </div>
                    </div>
                
            </div>
        </div>
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
    </div>
  )
}

export default Products