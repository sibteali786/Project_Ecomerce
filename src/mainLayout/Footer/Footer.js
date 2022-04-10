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
            <div className="mailingList">
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
            <div className="main-footer">   

            </div>
            <div className="copyrights">

            </div>
            
        </div>        
    )
}

export default Footer;