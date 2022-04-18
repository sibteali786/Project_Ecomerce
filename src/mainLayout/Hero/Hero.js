import React from 'react'
import "./Hero.scss";
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div className='Hero'>
        <div className="heroModal">
            <h4>Happy Birthday</h4>
            <h2>Special</h2>
            <Link to="/thankyou" style={{textDecoration:"none"}}>
            <Button variant="contianed" sx={{fontSize:20}} style={{backgroundColor:"#DEC177",color:"#000000", 
            border:"3px solid #000000",borderRadius:"0px",
            textTransform:"capitalize"}}>
              Shop Now
            </Button>
              </Link>
        </div>
    </div>
  )
}

export default Hero