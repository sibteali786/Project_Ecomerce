import React from 'react'
import Button from '@mui/material/Button'

import "./textField.scss";

const TextField = (props) => {
  return (
    <div className="textField">
        <input type = "text" placeholder='Ingresa tu correo electronico'/>
        <Button variant="contained" style={{backgroundColor: "#72509D",color:"#FFFFFF"}}>
          {props.children}
        </Button>
    </div>

  )
}

export default TextField;