import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
//mui icons
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
//assets
import Logo from "../../assets/Logo.png";
import LogoBlack from "../../assets/LogoBlack.png";
//styles
import "./Header.scss";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return(
        <>
            {/*Desktop */}
            <Grid container align="center" justifyContent={'center'} className="HeaderWrapper">
                <Grid item xs={11} className="HeaderSubWrap">
                    <Grid container className="HeaderContent">
                        <Grid item className="LogoWrapper">
                            <img width="47px" src={Logo} alt="logo" />
                            <span className='Title'>
                                <span className='TitleSkin'>Happy</span> 
                                Day
                            </span>
                        </Grid>
                        <Grid item align="center" className="NavLinks">
                            <Grid item className="NavContent Home">
                                <p>Home</p>
                            </Grid>
                            <Grid item className="NavContent Business">
                                <p>Business</p>
                            </Grid>
                            <Grid item className="NavContent About">
                                <p>About</p>
                            </Grid>
                            <Grid item className="NavContent FAQ">
                                <p>FAQ</p>
                            </Grid>
                            <Grid item className="NavContent Reviews">
                                <p>Reviews</p>
                            </Grid>
                            <Grid item className="NavContent ForTherapy">
                                <p>For Therapy</p>
                            </Grid>
                            <Grid item className="NavContent Login">
                                <p>Login</p>
                            </Grid>
                            <Grid item className="NavContent GetStarted active">
                                <p>Get Started</p>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/*Mobile */}
            <Grid container align="center" justifyContent={'center'} className="HeaderWrapperMobile">
                <Grid item xs={11} className="HeaderSubWrapMobile">
                    <Grid container className="HeaderContentMobile">
                        <Grid item className="iconWrapperMobile">
                            {menuOpen ?
                                (<MenuOpenIcon onClick={() => setMenuOpen(false)} />) 
                                    : 
                                (<MenuIcon onClick={() => setMenuOpen(true)}/>)
                            }
                        </Grid>
                        <Grid item className="LogoWrapperMobile">
                            <img width="47px" src={LogoBlack} alt="logo" />
                            <span className='Title'>
                                <span className='TitleSkin'>Happy</span> 
                                Day
                            </span>
                        </Grid>    
                    </Grid>
                    {menuOpen ? (
                        <Grid item align="center" className="NavLinks">
                            <Grid item className="NavContent Home">
                                <p>Home</p>
                            </Grid>
                            <Grid item className="NavContent Business">
                                <p>Business</p>
                            </Grid>
                            <Grid item className="NavContent About">
                                <p>About</p>
                            </Grid>
                            <Grid item className="NavContent FAQ">
                                <p>FAQ</p>
                            </Grid>
                            <Grid item className="NavContent Reviews">
                                <p>Reviews</p>
                            </Grid>
                            <Grid item className="NavContent ForTherapy">
                                <p>For Therapy</p>
                            </Grid>
                            <Grid item className="NavContent Login">
                                <p>Login</p>
                            </Grid>
                            <Grid item className="NavContent GetStarted active">
                                <p>Get Started</p>
                            </Grid>
                        </Grid>    
                            ) : (
                                null
                            ) 
                    }
                </Grid>
            </Grid>
        </>
    )
    
}

export default Header;