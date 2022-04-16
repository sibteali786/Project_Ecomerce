import React from 'react'
import "./ProductCard.scss";
import Button from '@mui/material/Button'
const ProductCard = ({value}) => {
        const {src,title,price,buttontext} = value;
  return (
    <div className="productCard">
        <div className="cardImage">
            <img src={(src).default}/>
        </div>
        <div className='cardTitle'>
            {title}
        </div>
        <div className='cardPrice'>
        {price}
        </div>
        <Button variant="contained" style={{color:"white",backgroundColor:"#72509D"}}>
          {buttontext}
        </Button>
    </div>
  )
}

export default ProductCard