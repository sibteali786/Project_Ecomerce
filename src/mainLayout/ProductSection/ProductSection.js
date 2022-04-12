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
        <Grid container spacing={2}>
          <Grid item xs={4} > 
            <Card sx={{ minWidth: 275 }} className="ItemCotainer" style={{backgroundColor: "#DDCEC14D"}} >
                <CardMedia title="image" height= "330px" component="img" image={require("./../../assets/image4.png").default} />
                <CardActions style={{width:"100%"}}>
                    <Button size="large" style={{backgroundColor:"#513A32",width:"100%"}} variant='contained'>Learn More</Button>
                </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}> 
            <Card sx={{ minWidth: 275 }} className="ItemCotainer" style={{backgroundColor:"#AA38324D"}} >
                <CardMedia title="image" component="img" image={require("./../../assets/image9.png").default} />
                <CardActions style={{width:"100%"}}>
                    <Button size="large" style={{backgroundColor:"#513A32",width:"100%"}} variant='contained'>Learn More</Button>
                </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4} > 
            <Card sx={{ minWidth: 275 }} className="ItemCotainer" style={{backgroundColor: "#FDB8B24D"}}>
                <CardMedia title="image" component="img" image={require("./../../assets/image6.png").default} />
                <CardActions style={{width:"100%"}}>
                    <Button size="large" style={{backgroundColor:"#513A32",width:"100%"}} variant='contained'>Learn More</Button>
                </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}> 
            <Card sx={{ minWidth: 275 }} className="ItemCotainer" style={{backgroundColor:"#2ACDF94D"}}>
                <CardMedia title="image" component="img" image={require("./../../assets/image5.png").default} />
                <CardActions style={{width:"100%"}}>
                    <Button size="large" style={{backgroundColor:"#513A32",width:"100%"}} variant='contained'>Learn More</Button>
                </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}> 
            <Card sx={{ minWidth: 275 }} className="ItemCotainer" style={{backgroundColor: "#D963284D"}}>
                <CardMedia title="image" component="img" image={require("./../../assets/image7.png").default} />
                <CardActions style={{width:"100%"}}>
                    <Button size="large" style={{backgroundColor:"#513A32",width:"100%"}} variant='contained'>Learn More</Button>
                </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}> 
            <Card sx={{ minWidth: 275 }} className="ItemCotainer" style={{backgroundColor: "#A5A9524D"}}>
                <CardMedia title="image" component="img" image={require("./../../assets/image8.png").default} />
                <CardActions style={{width:"100%"}}>
                    <Button size="large" style={{backgroundColor:"#513A32",width:"100%"}} variant='contained'>Learn More</Button>
                </CardActions>
            </Card>
          </Grid>
        </Grid>
    </div>
  )
};

export default ProductSection;