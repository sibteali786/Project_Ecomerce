import React, { useState, useEffect } from "react";
import Hero from "../../mainLayout/Hero/Hero";
import "./Home.scss";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import ProductSection from "../../mainLayout/ProductSection/ProductSection";
import Service from "../../mainLayout/Service/Service";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Home = () => {
  
  
  return (
    <div className="landingContainer">
      <Hero/>
      <div style={{display: "flex",justifyContent: "center"}} className="emptyDiv">

      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 1 }}  className="modalContainer">
      <Grid item xs={12} sm={12} md={2}>
          <Typography variant="h6" style={{color:"#FFFFFF",fontSize:"1rem"}}>BUSCA TU REGALO</Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={2} >
          <TextField
            id=""
            label="Comuna"
            variant="filled"
            placeholder="A que comuna envias"
            style={{backgroundColor:"#FFFFFF",borderRadius:"0.3rem",width:"100%"}}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <TextField
            id=""
            label="Ocasión"
            placeholder="Cumpleanos"
            variant="filled"
            size = "medium"
            style={{backgroundColor:"#FFFFFF",borderRadius:"0.3rem",width:"100%"}}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <TextField
            id=""
            label="Fecha y hora de entrega"
            placeholder="lunas, 21 feb"
            variant="filled"
            style={{backgroundColor:"#FFFFFF",borderRadius:"0.3rem",width:"100%"}}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={2}>
          <Button variant="contained" style={{backgroundColor:"#72509D",color:"#FFFFFF",padding:"0.2rem 1rem"}}>
            encontrar regalo
          </Button>
      </Grid>
    </Grid>
      </div>
      <ProductSection/>
      <Service/>
    </div>
  );
};

export default Home;
