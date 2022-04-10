import React from 'react';
//styles
import "./Footer.scss";
import TextField from "./../textField/TextField";
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
            </div>
            <div className="main-footer">   

            </div>
            <div className="copyrights">

            </div>
            
        </div>        
    )
}

export default Footer;