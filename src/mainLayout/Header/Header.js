import React, { useState } from 'react';
//styles
import "./Header.scss";
import {ReactComponent as ReactLogo} from "./../../assets/logo.svg";
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#F4F4F4"
  ,
  '&:hover': {
    backgroundColor: "#F4F4F4"
    ,
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      width: '10ch',
      '&:focus': {
        width: '12ch',
      },
    },
    [theme.breakpoints.up('md')]: {
      width: '35ch',
      '&:focus': {
        width: '40ch',
      },
    },
    [theme.breakpoints.up('lg')]: {
      width: '60ch',
      '&:focus': {
        width: '70ch',
      },
    },
  },
}));

const Header = () => {
    const [menu,setMenu] = useState();
    const [state,setState] = useState(false);
    const toggleDrawer = (open) => (event)=>{
      setState(open);
    }
    return(
        <div className='container'>
            <div className='logo'>  
                <ReactLogo/>
            </div>
            <div className='searchBar'>
            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                color="primary"
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
            <Button variant="outlined" style={{backgroundColor: "#72509D",color:"#FFFFFF", margin:"0 0.5rem",minWidth:"30px",width:"40px"}}>
              <SearchIcon/>
            </Button>
            </div>
            <div className='menu-desktop'>
                    <span >
                    <img src = {require('./../../assets/delivery.png').default} alt="Delievry truck"/>
                    <a>Delivery</a>
                    </span>
                    <span >
                    <img src = {require('./../../assets/cart.png').default} alt="Cart" style={{width :"22px", height :"24.73px"}}/>
                    <a>Cart</a>
                    </span>
                    <span >
                    <img src = {require('./../../assets/user.png').default} alt="User" style={{width :"22px", height :"24px"}}/>
                    <a>Mi Cuenta</a>
                    </span>
                    
            </div>
            <div className="menuMobile">
              <IconButton aria-label="" onClick={toggleDrawer(true)}>
                <MenuIcon/>
              </IconButton>
            </div>
            <Drawer
              variant="temporary"
              anchor="right"
              open={state}
              onClose={toggleDrawer(false)}            
            >
              <div className="DrawerElements" style={{display: "flex",
    flexDirection: "column",
    width: "250px",
    alignItems: "flex-start",
    justifyContent:"space-evenly",
    padding: "0 2rem",
    margin: "1rem",
    height:"600px"}}>

                  <span style={{margin:"1rem 0rem"}}>
                    <img src = {require('./../../assets/delivery.png').default} alt="Delievry truck"/>
                    <a>Delivery</a>
                  </span>
                  <span style={{margin:"1rem 0rem"}} >
                    <img src = {require('./../../assets/cart.png').default} alt="Cart" style={{width :"22px", height :"24.73px"}}/>
                    <a>Cart</a>
                  </span>
                  <span style={{margin:"1rem 0rem"}} >
                    <img src = {require('./../../assets/user.png').default} alt="User" style={{width :"22px", height :"24px"}}/>
                    <a>Mi Cuenta</a>
                  </span>
              </div>
            </Drawer>
        </div>
    )
    
}

export default Header;