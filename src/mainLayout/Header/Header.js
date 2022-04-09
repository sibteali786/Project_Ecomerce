import React, { useState } from 'react';
//styles
import "./Header.scss";
import {ReactComponent as ReactLogo} from "./../../assets/logo.svg";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button'

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
    [theme.breakpoints.up('lg')]: {
      width: '60ch',
      '&:focus': {
        width: '70ch',
      },
    },
    [theme.breakpoints.up('md')]: {
        width: '50ch',
        '&:focus': {
          width: '60ch',
        },
      },
  },
}));

const Header = () => {
    
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
            <Button variant="outlined" style={{backgroundColor: "#72509D",color:"#FFFFFF", margin:"0 0.5rem",width:"1rem"}}>
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
        </div>
    )
    
}

export default Header;