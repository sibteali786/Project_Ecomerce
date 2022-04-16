import React, { useState } from "react";
import { productImages } from "./../../assets/productImages/index";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { Navigation, Thumbs } from "swiper";
// Import Swiper styles
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/thumbs/thumbs.scss";
import "./Products.scss";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import DateRangeIcon from "@mui/icons-material/DateRange";
import IconButton from "@mui/material/IconButton";
import { selectableProductImages } from "./../../assets/selectableProductImages/index";
import Carousel from "react-elastic-carousel";
import { ReactComponent as Gift } from "./../../assets/gift.svg";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { productImagesButton } from "./../../assets/productImagesBottom/index";
import ProductCard from "./../../mainLayout/ProductCard/ProductCard";
const Products = () => {
  // List Item state
  const [open, setOpen] = React.useState(false);

  const handleClickList = () => {
    setOpen(!open);
  };
  // Tab panel State
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  // tab Panel Component
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <div>{children}</div>}
      </div>
    );
  }
  // Props Types for TabPanel
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const [activeThumb, setactiveThumb] = useState();
  const breadcrumbs = [
    <a key="1" href="/" onClick={handleClick}>
      Estado de México
    </a>,
    <a
      key="2"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Atizapan de Zaragoza
    </a>,
    <a key="3" style={{ color: "#72509D", fontWeight: "bold" }}>
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
            <a>Enviar a</a>
            <a style={{ fontWeight: "bold" }}>Benito Juarez</a>
          </Breadcrumbs>
        </Stack>
      </div>
      {/* Product Display Slider */}
      <div className="productDetails">
        <div className="sliderProduct">
          <Swiper
            loop={true}
            spaceBetween={5}
            navigation={true}
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            thumbs={{ swiper: activeThumb }}
            className="product-image-slider"
            style={{ width: "500px", height: "500px" }}
          >
            {productImages.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  src={item.default}
                  alt="product Image"
                  style={{ width: "100%", height: "auto" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setactiveThumb}
            loop={true}
            spaceBetween={10}
            slidesPerView={3}
            modules={[Navigation, Thumbs]}
            className="product-image-slider-thumbs"
            style={{ marginTop: "1rem", width: "500px" }}
          >
            {productImages.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="product-image-slider-thumbs-wrapper">
                  <img
                    src={item.default}
                    alt="product Image"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="productInformation">
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <h6>Vino 3V y Botanas con Globo "Love You"</h6>
            <h6 style={{ fontWeight: "bold" }}>
              $1,115.00 <span style={{ color: "#72509D" }}> MXN </span>
            </h6>
          </div>
          <Divider style={{ color: "#C4C4C4" }} />
          <div id="productDescription1">
            <h6>1.- Selecciona un horario</h6>
            <p>* Se hará un cargo de envío por $99.00 MXN</p>
            <div className="Cards">
              <div>
                <h6>Hoy</h6>
                <p
                  style={{
                    color: "#FFFFFF",
                    backgroundColor: "#72509D",
                    padding: "1rem 0.5rem",
                  }}
                >
                  08:00am - 02:00pm
                </p>
                <p>25 febrero</p>
                <p>10:00am - 04:00pm</p>
                <p>03:00am - 08:00pm</p>
              </div>
              <div>
                <h6>Manana</h6>

                <p>26 febrero</p>
              </div>
              <div>
                <IconButton aria-label="Calendar Icon button">
                  <DateRangeIcon size="small" />
                </IconButton>
                <p>Mas fechas</p>
              </div>
            </div>
          </div>
          <Divider />
          <div id="productDescription2">
            <h6>2.-Agrandar producto (opcional)</h6>
            <div className="Cards2">
              <div>
                <h6>$84</h6>
                <p>GRAND</p>
                <p>JG Rose Stems Triple line Blooms</p>
              </div>

              <div
                style={{
                  border: "1px solid #72509D",
                }}
              >
                <h6 style={{ fontWeight: "bold" }}>$69</h6>
                <p style={{ fontWeight: "bold", color: "#000000" }}>DELUXE</p>
                <p>24 Rose Stems Double the Blooms</p>
              </div>

              <div>
                <h6>$24</h6>
                <p>ORIGINAL</p>
                <p>12 Rose Stems A Classic Sized Bouq</p>
              </div>
            </div>
          </div>
          <Divider style={{ color: "#C4C4C4" }} />
          <div id="productDescription3">
            <h6>3.- Complementar pedido (opcional)</h6>
            <Carousel itemsToShow={3} className="carousel">
              {selectableProductImages.map((item, index) => (
                <div key={index}>
                  <img src={item.src.default} />
                  <h6>{item.title}</h6>
                  <h6 style={{ color: "black", fontWeight: "bold" }}>
                    {item.price}
                  </h6>
                </div>
              ))}
            </Carousel>
          </div>

          <div
            style={{
              width: "100%",
              marginTop: "0.8rem",
              marginBottom: "0.8rem",
            }}
          >
            <Button
              variant="contained"
              style={{
                backgroundColor: "transparent",
                width: "100%",
                height: "60px",
                border: "1px solid black",
              }}
              startIcon={<Gift />}
            >
              <p style={{ fontSize: "medium", marginBottom: "0" }}>
                Ver globos y mas
              </p>
            </Button>
          </div>
          <Divider style={{ color: "#C4C4C4" }} />
          <div id="productTotal">
            <h6>4.- Agregar a tu carrito</h6>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#72509D",
                color: "#FFFFFF",
                width: "100%",
              }}
            >
              Agregar ( $1,150.00 MXN)
            </Button>
            <p>
              {" "}
              El mensaje de la tarjeta podrás escribirlo más adelante en la
              sección de "Datos de Envío y Formas de Pago".{" "}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="secondary tabs example"
            className="productDetailTab"
          >
            <Tab {...a11yProps(0)} label="Descripción del producto" />
            <Tab {...a11yProps(1)} label="Políticas de envío" />
            <Tab {...a11yProps(2)} label="Políticas de Sustitución" />
          </Tabs>
        </div>
        <div style={{ margin: "0 0.3rem" }}>
          <TabPanel value={value} index={0}>
            <div>
              <h4
                style={{
                  fontWeight: "bold",
                  marginTop: "0.8rem",
                  marginBottom: "0.8rem",
                }}
              >
                Vino 3V y Botanas con Globo "Love You"
              </h4>
              <p style={{ textAlign: "left" }}>
                Demuestra tu agradecimiento y cariño con nuestra exclusiva
                canasta Vinum la cual contiene la combinación perfecta de vino y
                botanas que hará de este, el regalo perfecto junto con un globo
                con la frase "Love you". Nuestra caja titulada Vinum, palabra de
                origen latin que significa Vino, conecta el origen de esta
                bebida que tiene presencia desde antiguas civilizaciones, y se
                posiciona hasta el día de hoy como la bebida por excelencia para
                celebraciones.
              </p>
              <h5 style={{ fontWeight: "bold" }}>
                Especificaciones del Empaque:
              </h5>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                className="DetailList"
              >
                <ListItemButton>
                  <ListItemIcon>{">"}</ListItemIcon>
                  <ListItemText primary="Caja rígida decorativa o reutilizable tipo libro color hueso y foil color champagne." />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>{">"}</ListItemIcon>
                  <ListItemText primary="Medidas de la caja: 36.5 cm x 21 cm x 9.5 cm" />
                </ListItemButton>
                <ListItemButton onClick={handleClickList}>
                  <ListItemIcon>{">"}</ListItemIcon>
                  <ListItemText
                    style={{ color: "#72509D", textDecoration: "underline" }}
                    primary="see more"
                  />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>{">"}</ListItemIcon>
                      <ListItemText primary="Random Text" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </div>
      </div>
      <div className="productSlide">
        {productImagesButton.map((item, index) => (
          <ProductCard key={index} value={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
