import React from 'react';
//styles
import "./Footer.scss";
import TextField from "./../textField/TextField";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import {ReactComponent as Tiktok} from "./../../assets/tiktok.svg"
import IconButton from '@mui/material/IconButton'

const Footer = () => {
    return(
        <div className="footerWrapper">
            
            <div id="upperFooter">
                <div className="mailingList" >

                <h2>
                    Join Our Exclusive Mailing List 
                </h2>
                <TextField>
                    Subscribe
                </TextField>
                <div className='socialMedia'>
                    <IconButton aria-label="Facebook Handle" >
                    <FacebookIcon style={{color:"#FFFFFF"}} sx={{fontSize:40}}/>
                    </IconButton>
                    <IconButton aria-label="Insatgram handle" >
                    <InstagramIcon style={{color:"#FFFFFF"}} sx={{fontSize:40}}/>
                    </IconButton>
                    <IconButton aria-label="Tiktok Handle" >
                    <Tiktok/> 
                    </IconButton>
                </div>
                </div>
            </div>
            
            <div className="main-footer">
                <div className="linksSection">
                    
                <div className='main-elements'>
                    <h3>
                    Servicio al Cliente:
                    </h3>
                    <div>


                    <a>
                    Como comprar

                    </a>
                    <a>
                    Seguimiento de pedido

                    </a>
                    <a>
                    Whatsapp

                    </a>
                    <a>
                    Llámanos

                    </a>
                    <a>
                    Contacto

                    </a>
                    <a>

                    Comentarios y 
                    </a>
                    <a>
                    Sugerencias
                    </a>
                    <a>
                    Referidos

                    </a>
                    </div>
                </div>
                <div className='main-elements'>
                    <h3>Florería Suecia</h3>
                    <div>

                    <a>
                    Sobre nosotras

                    </a>
                    <a>
                    Nuestra diferencia

                    </a>
                    <a>
                    Nuestra ubicación

                    </a>
                    <a>
                    Políticas de devoluciones

                    </a>
                    <a>
                    Términos y condiciones

                    </a>
                    <a>

                    Trabaja con nosotras
                    </a>
                    <a>
                    Afiliados

                    </a>
                    </div>
                </div>
                <div className='main-elements'>
                    <h3>Pedidos</h3>
                    <div>

                    <a>
                        Preguntas frecuentes
                    </a>
                    <a>
                        Cambiar datos de pedido

                    </a>
                    <a>
                        Reclamo
                    </a>
                    <a>
                        
                    Devolución
                    </a>
                    </div>
                </div>
                <div className='main-elements'>
                    <div >
                        <h3>Ocasión:</h3>
                        <div>
                        <div>

                        <a>
                            Cumpleaños
                        </a>
                        <a>
                        Aniversario

                        </a>
                        <a>

                        Condolencias
                        </a>
                        <a>
                        Agradecimiento

                        </a>
                        <a>
                            
                        Porque sí
                        </a>
                        </div>
                        </div>
                    </div>
                    <div style={{marginTop:"2rem"}} >
                        <h3>Mi Cuenta</h3>
                        <a>Acceder a mi cuenta</a>
                    </div>
                </div>
            </div>   
            <div className="copyrights">
            2022 1-800 flowers.com, inc, jericho, NY family of brands
            <a>terms of use</a>
            <a>Privacy notice</a>
            </div>
            </div>
            
        </div>        
    )
}

export default Footer;