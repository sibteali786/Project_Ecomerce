import React from 'react';
import Grid from '@mui/material/Grid';
//icons
import AppleIcon from '@mui/icons-material/Apple';
import {IoLogoGooglePlaystore} from 'react-icons/io5'
//styles
import "./Footer.scss";

const Footer = () => {
    return(
        <>
            {/* Desktop */}
            <Grid container className="FooterWrapper">
                <Grid item xs={9} className="FooterSubWrap">
                    <Grid item className="LinksWrapper">
                        <p className="Header">HappyDay</p>
                        <Grid item className="LinksNav">
                            <p className="LinksFooter">Home</p>
                            <p className="LinksFooter">Business</p>
                            <p className="LinksFooter">About</p>
                            <p className="LinksFooter">FAQ</p>
                            <p className="LinksFooter">Reviews</p>
                        </Grid>
                    </Grid>
                    <Grid item className="LinksWrapper">
                        <p className="Header">Therapy</p>
                        <Grid item className="LinksNav">
                            <p className="LinksFooter">Advice</p>
                            <p className="LinksFooter">Online Therapy</p>
                            <p className="LinksFooter">Find A Therapist</p>
                        </Grid>
                    </Grid>
                    <Grid item className="LinksWrapper">
                        <p className="Header">My Account</p>
                        <Grid item className="LinksNav">
                            <p className="LinksFooter">Profile</p>
                            <p className="LinksFooter">Sessions</p>
                        </Grid>
                    </Grid>
                    <Grid item className="LinksWrapper">
                        <p className="Header">Information</p>
                        <Grid item className="LinksNav">
                            <p className="LinksFooter">Terms & Conditions</p>
                            <p className="LinksFooter">Privacy Policy</p>
                        </Grid>
                    </Grid>
                    <Grid item className="LinksWrapper">
                        <p className="Header">HappyDay</p>
                        <Grid item className="LinksNav">
                            <p className="LinksFooter">Home</p>
                            <p className="LinksFooter">Business</p>
                            <p className="LinksFooter">About</p>
                            <p className="LinksFooter">FAQ</p>
                            <p className="LinksFooter">Reviews</p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid align="center" item xs={12} className="horizontalLineWrapper">
                    <div className="HorizontalLine" />
                </Grid>
                <Grid item align="center" xs={12} className="downloadWrapper">
                        <p className="download">Download Our App</p>
                </Grid>
                <Grid container xs={12} className="buttonContainer">
                    <Grid item xl={3} lg={4} md={5} sm={6} className="buttonSubWrap">
                        <Grid item className="buttonWrap">
                            <button className="buttonAndroid">
                                <AppleIcon/><span>App Store</span>
                            </button>
                        </Grid>
                        <Grid item className="buttonWrap">
                            <button className="buttonAndroid">
                                <IoLogoGooglePlaystore/><span>Play Store</span>
                            </button>
                        </Grid>    
                    </Grid>
                    <Grid item xs={12} className="label" align="center">
                        <p className='footerLabel'>© 2021 HappyDay</p>    
                    </Grid>                    
                </Grid>
            </Grid>
            
        </>
    )
}

export default Footer;