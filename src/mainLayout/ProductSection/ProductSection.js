import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import CardMedia from '@mui/material/CardMedia'
import "./ProductSection.scss"

const ProductSection = () => {
  return (
    <div className='productSection'>
          <h1>Entregas de lunes  a domingo</h1>
          <div className="cards"> 
            <Card className="ItemCotainer" style={{backgroundColor: "#DDCEC14D"}} >
                <img src={require("./../../assets/image4.png").default} />
                <CardActions style={{width:"100%"}}>
                    <Button size="large" style={{backgroundColor:"#513A32",width:"100%"}} variant='contained'>Postreys pasteles</Button>
                </CardActions>
            </Card>
           
            <Card className="ItemCotainer" style={{backgroundColor:"#AA38324D"}} >
                <img src={require("./../../assets/image9.png").default} />
                <CardActions style={{width:"100%"}}>
                    <Button size="large" style={{backgroundColor:"#AA3832",width:"100%"}} variant='contained'>botanas y licories</Button>
                </CardActions>
            </Card>
          
           
            <Card className="ItemCotainer" style={{backgroundColor: "#2ACDF94D"}}>
                <img src={require("./../../assets/image6.png").default} />
                <CardActions style={{width:"100%"}}>
                    <Button size="large" style={{backgroundColor:"#00678E",width:"100%"}} variant='contained'>Globos</Button>
                </CardActions>
            </Card>
          
           
            <Card className="ItemCotainer" style={{backgroundColor:"#FDB8B24D",justifyContent:"space-between"}}>
                <img src={require("./../../assets/image5.png").default} id="abnormal" />
                <CardActions style={{width:"100%"}}>
                    <Button size="large" style={{backgroundColor:"#D59368",width:"100%"}} variant='contained'>Flores y Plantas</Button>
                </CardActions>
            </Card>
          
           
            <Card className="ItemCotainer" style={{backgroundColor: "#D963284D"}}>
                <img src={require("./../../assets/image7.png").default} />
                <CardActions style={{width:"100%"}}>
                    <Button size="large" style={{backgroundColor:"#D96328",width:"100%"}} variant='contained'>regalos</Button>
                </CardActions>
            </Card>
          
           
            <Card className="ItemCotainer" style={{backgroundColor: "#A5A9524D"}}>
                <img src = {require("./../../assets/image8.png").default} />
                <CardActions style={{width:"100%"}}>
                    <Button size="large" style={{backgroundColor:"#A5A952",width:"100%"}} variant='contained'>condolencias</Button>
                </CardActions>
            </Card>
          
          </div>
    </div>
  )
};

export default ProductSection;