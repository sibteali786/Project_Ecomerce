import React, { useState, useEffect } from "react";
// import { withRouter } from "react-router";
import "./Cart.scss";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { ReactComponent as Refresh } from "./../../assets/Refresh.svg";
import { ReactComponent as Lock } from "./../../assets/Lock.svg";
import { ReactComponent as DeliverySvg } from "./../../assets/DeliverySvg.svg";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const steps = [
  "Checkout",
  "User Information",
  "Shipping Address",
  "Card Detail",
];
const Cart = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  // Handling password show and off states
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  // Handle the dynamic input adding ability
  const [inputFields, setInputFields] = useState([{ text: "" }]);
  // Function for adding the input fields
  const handleChangeinput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
    console.log(values);
  };
  const addTextFields = () => {
    setInputFields([...inputFields, { text: "" }]);
  };

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const ContentDivs = () => {
    if (activeStep === 0) {
      return <div>Hello1</div>;
    } else if (activeStep === 1) {
      return (
        <div className="Step2">
          <div className="span-1">
            <h3>Florería Suecia</h3>
            <div className="NavbarCart">
              <div>
                <IconButton aria-label="Delivery Icon Link">
                  <DeliverySvg />
                </IconButton>
                <p id="title">Devlivery</p>
              </div>
              <div>
                <IconButton aria-label="Refresh Icon Link">
                  <Refresh />
                </IconButton>
                <p id="title">Refresh</p>
              </div>
              <div>
                <IconButton aria-label="Lock Icon Link">
                  <Lock />
                </IconButton>
                <p id="title">Lock</p>
              </div>
            </div>
          </div>
          <div className="span-2">
            <div className="numbers">
              <IconButton>{1}</IconButton>
              <h6>Información de cliente</h6>
            </div>
            <TextField label="Email" variant="outlined" />
            <TextField
              label="Passowrd"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Recordar / No cerrar sesión"
              />
            </FormGroup>
            <p style={{ color: "#6F6F6F" }}>Olvidé mi contraseña?</p>
            <Button
              variant="contained"
              style={{ backgroundColor: "#F4F4F4", color: "black" }}
            >
              Soy nuevo
            </Button>
            <Button className="buttonViolet" variant="contained">
              Ingresar
            </Button>
            <p>Ingresar con</p>
            <div className="socialMedia">
              <Button variant="contained" className="facebook">
                facebook
              </Button>
              <Button variant="contained" className="google">
                Google
              </Button>
            </div>
          </div>
          <div className="span-3">
            <div className="numbers">
              <IconButton>{2}</IconButton>
              <h6>MÉTODO DE ENVIO</h6>
            </div>
            <div className="radioSelection">
              <input type="radio" id="html" value="Retiro en tienda" />
              <label for="html">Retiro en tienda</label>
            </div>

            <div className="radioSelection">
              <input type="radio" id="html" value="Envío a domicilio" />
              <label for="html">Envío a domicilio</label>
              <Button
                variant="contained"
                onClick={() => addTextFields()}
                style={{
                  backgroundColor: "#FFF",
                  color: "#000",
                  border: "1px solid #000",
                }}
              >
                {"+"}
              </Button>
              {inputFields.map((inputField, index) => (
                <TextField
                  value={inputField.value}
                  name="text"
                  key={index}
                  onChange={(event) => handleChangeinput(index, event)}
                  variant="filled"
                />
              ))}
            </div>
            <div className="radioSelection">
              <input type="radio" id="html" value="Retiro en tienda" />
              <label for="html">Retiro en tienda</label>
            </div>
          </div>
          <div className="span-4">
            <div className="numbers">
              <IconButton>{3}</IconButton>
              <h6>Review Your Producte</h6>
            </div>
            <div className="reviewProductCard">
              <img
                src={require("./../../assets/Rectangle69.png").default}
                alt="productImage"
              />
              <h6>DEMIN</h6>
              <p className="productdDetails">
                Method de page Todos ios methdos habiito.
              </p>
              <p>TALE : 1</p>
              <p>cantidad : 1 Combiar</p>
              <strong>$9.900</strong>
            </div>
            <div>
              <div>
                <TextField label="Usar cupón" variant="outlined" />
                <Button variant="contained" className="buttonViolet">
                  Apply
                </Button>
              </div>
              <p>
                Si quieres puedes escribir un mensaje aquí y lo enviaremos en un
                lindo sobre
              </p>
              <TextField variant="outlined" />
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Demuesttra tu Agradec"
                />
              </FormGroup>
            </div>
          </div>
          <div className="span-5">
            <div>
              <p>Sub Total</p>
              <p>$9.900</p>
            </div>
            <div>
              <p>Shipping</p>
              <p>$9.9</p>
            </div>
            <div>
              <strong>Other Total</strong>
              <p>$9.9</p>
            </div>
          </div>
          <div className="span-6">
            <h6>Precio Final</h6>
            <h4 style={{ color: "#72509D" }}>$9.900</h4>
            <Button variant="contained" className="buttonViolet">
              Finalizar compra
            </Button>
          </div>
        </div>
      );
    } else if (activeStep === 2) {
      return <div>Hello3</div>;
    } else if (activeStep === 3) {
      return <div>Hello4</div>;
    }
  };

  return (
    <div className="cartContainer">
      <div>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {ContentDivs()}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}

              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Cart;
