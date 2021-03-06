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
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
// Select Menu imports

import FormControl from "@mui/material/FormControl";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// Svgs as images
import { ReactComponent as Refresh } from "./../../assets/Refresh.svg";
import { ReactComponent as Lock } from "./../../assets/Lock.svg";
import { ReactComponent as DeliverySvg } from "./../../assets/DeliverySvg.svg";
import { ReactComponent as LetterIcon } from "./../../assets/letter.svg";
import { ReactComponent as HomeIcon } from "./../../assets/home.svg";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import CardDetails from "./../../mainLayout/CardDetails/CardDetails";
import StepOne from './../../mainLayout/Step1/StepOne';
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

  // Handling select menu
  const [selectLocation, setselectLocation] = React.useState("");

  const handleSelectLocationChange = (event) => {
    setselectLocation(event.target.value);
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
  // Modal State and methods
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    setOpen(true);
  }, [])
  
  const ContentDivs = () => {
    if (activeStep === 0) {
      return <><StepOne value={[open,setOpen]} /></>;
    } else if (activeStep === 1) {
      return (
        <div className="Step2">
          <div className="span-1">
            <h3>Florer??a Suecia</h3>
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
              <h6>Informaci??n de cliente</h6>
            </div>
            <h6 style={{marginTop:"1rem",fontSize:"1.5rem"}}>Sign In</h6>
            <div className="FieldUpperText">
              <p>Not Registered?</p>
              <a href="#">Create Account</a>
            </div>
            <div>
            <label htmlFor="html">Email</label>
            <TextField
              label="Email"
              variant="outlined"
              style={{ width: "100%", margin: "0.6rem 0" }}
              />
              </div>
              <div>
            <div className="FieldUpperText">
              <label>
                Password
              </label>
              <a href="#">Forget Passowrd</a>
            </div>
            <TextField
              label="Passowrd"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              style={{ width: "100%", margin: "0.6rem 0" }}
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
              </div>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Recordar / No cerrar sesi??n"
                style={{ marginLeft: "auto" }}
              />
            </FormGroup>
            <p style={{ color: "#6F6F6F", textAlign: "right" }}>
              Olvid?? mi contrase??a?
            </p>
            <div
              style={{
                display: "grid",
                gap: "1rem",
              }}
            >
              <Button
                variant="contained"
                style={{ backgroundColor: "#72509d", color: "white" }}
              >
                Sign In
              </Button>
            </div>
            <p style={{ textAlign: "center", margin: "0.8rem 0" }}>
              Ingresar con
            </p>
            <div className="socialMedia">
              <Button variant="contained" className="facebook" startIcon={<FacebookIcon style={{fill:"#FFFFFF"}}/>}>
                facebook
              </Button>
              <Button variant="contained" className="google" startIcon={<GoogleIcon/>}>
                Google
              </Button>
            </div>
          </div>
          <div className="span-3">
            <div className="numbers">
              <IconButton>{2}</IconButton>
              <h6>M??TODO DE ENVIO</h6>
            </div>
            <div className="radioSelection">
              <div style={{ display: "block" }}>
                <input type="radio" id="html" value="Retiro en tienda" />
                <label for="html">Retiro en tienda</label>
              </div>
            </div>

            <div className="radioSelection">
              <div style={{ display: "block" }}>
                <input type="radio" id="html" value="Env??o a domicilio" />
                <label for="html">Env??o a domicilio</label>
              </div>
              <div>
                <Button
                  variant="contained"
                  onClick={() => addTextFields()}
                  style={{
                    backgroundColor: "#FFF",
                    color: "#000",
                    border: "1px solid #000",
                    width: "100%",
                    margin: "0.8rem 0",
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
                    variant="outlined"
                    style={{ width: "100%", margin: "0.8rem 0" }}
                  />
                ))}
              </div>
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
              <div>
                <h6>DEMIN</h6>
                <p className="productdDetails">
                  Method de page Todos ios methdos habiito.
                </p>
                <p>TALE : 1</p>
                <p>cantidad : 1 Combiar</p>
              </div>
              <strong>$9.900</strong>
            </div>
            <div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3,1fr)",
                  gap: "1rem",
                }}
              >
                <TextField
                  label="Usar cup??n"
                  variant="outlined"
                  style={{ gridColumn: "1/3" }}
                />
                <Button variant="contained" className="buttonViolet">
                  Apply
                </Button>
              </div>

              <p style={{ display: "block", margin: "0.6rem 0" }}>
                Si quieres puedes escribir un mensaje aqu?? y lo enviaremos en un
                lindo sobre
              </p>
              <TextField variant="outlined" style={{ width: "100%" }} />
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Demuesttra tu Agradec"
                  style={{ marginLeft: "auto" }}
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
      return (
        <div className="Step3">
          <div className="span-1">
            <h4 style={{ fontWeight: "bold", display: "block" }}>
              Identification
            </h4>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "0.45fr 0.1fr 0.45fr",
                gap: "1rem",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2,1fr)",
                  gap: "1rem",
                }}
              >
                <TextField
                  variant="outlined"
                  label=""
                  InputLabelProps={{ shrink: false }}
                />
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#509D6F", color: "#FFF" }}
                >
                  Submit
                </Button>
              </div>
              <p
                style={{
                  margin: "0 0.8rem",
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                or
              </p>
              <Button
                variant="contained"
                style={{ backgroundColor: "#6174A5", color: "#FFF" }}
              >
                Ingresar con Facebook
              </Button>
            </div>
            <Divider />
            <div
              style={{
                margin: "1rem 0",
                display: "grid",
                gridTemplateColumns: "0.1fr 0.9fr",
              }}
            >
              <label className="labelInputs" htmlFor="html">
                Email
              </label>
              <TextField
                label=""
                variant="outlined"
                InputLabelProps={{ shrink: false }}
                style={{ width: "100%" }}
              />
            </div>
            <div className="inputFiledsParent">
              <div className="inputFields">
                <label className="labelInputs" htmlFor="html">
                  Nomtre
                </label>
                <TextField
                  label=""
                  variant="outlined"
                  InputLabelProps={{ shrink: false }}
                  style={{ width: "100%" }}
                />
              </div>
              <div className="inputFields">
                <label className="labelInputs" htmlFor="html">
                  Apetidos
                </label>
                <TextField
                  label=""
                  variant="outlined"
                  InputLabelProps={{ shrink: false }}
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="inputFiledsParent">
              <div className="inputFields">
                <label className="labelInputs" htmlFor="html">
                  RUT
                </label>
                <TextField
                  label=""
                  variant="outlined"
                  InputLabelProps={{ shrink: false }}
                  style={{ width: "100%" }}
                />
              </div>
              <div className="inputFields">
                <label className="labelInputs" htmlFor="html">
                  Teletono / Movil
                </label>
                <TextField
                  label=""
                  variant="outlined"
                  InputLabelProps={{ shrink: false }}
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Demuestra tu agradec "
                  style={{ marginRight: "auto" }}
                />
              </FormGroup>
            </div>
            <Button
              variant="contained"
              className="buttonViolet"
              style={{ width: "100%" }}
            >
              Finalizar compra
            </Button>
          </div>
          <div className="span-2">
            <h6 style={{display:"block",textTransform:"capitalize"}}>resumen de la compra</h6>
            <div className="CardProduct">
              <img
                src={require("./../../assets/Rectangle69.png").default}
                alt="productImage"
              />
              <div style={{display:"flex",flexDirection:"column",justifyContent:"center",marginLeft:"1rem"}}>
              <p>Jeans Boston FJ Blue 44</p>
              <strong>$9.900</strong>
              </div>
            </div>
            <Divider style={{margin:"0.7rem 0",gridRowStart: '3',gridColumn: "1/5"}}/>
              <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-end",gridColumn: "1/5",gridRow: "4/5"}}>
                <p style={{margin:"0 1rem"}}>Sub Total</p>
                <p style={{margin:"0 1rem"}}>$9.900</p>
              </div>
              <div style={{backgroundColor:"#E5E5E5",padding:"0.8rem 0.5rem",
              display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"center",
              gridColumn: "1/5",gridRow: "5/6",
              borderRadius:"4px"}}>
                <strong style={{margin:"0 1rem"}}>Total</strong>
                <strong style={{margin:"0 1rem"}}>$9.900</strong>
              </div>
          </div>
          <div className="span-3">
            <HomeIcon />
            <div>
              <h6>Envio</h6>
              <p style={{ color: "#818181", fontSize: "0.8rem" }}>
                Demuestra tu agradec
              </p>
              <FormControl>
                <TextField
                  value={selectLocation}
                  helperText="Select a location"
                  label=""
                  select
                  onChange={handleSelectLocationChange}
                  InputLabelProps={{ shrink: false }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                >
                  <option value={"$ Mayor a menor"}>Street 44, address</option>
                  <option value={"$ Mayor a menor"}>Street 44, address</option>
                  <option value={"$ Mayor a menor"}>Street 44, address</option>
                </TextField>
              </FormControl>
            </div>
          </div>
          <div className="span-4">
            <LetterIcon />
            <div>
              <h6>pago</h6>
              <p style={{ color: "#818181", fontSize: "0.8rem" }}>
                Demuestra tu agradec
              </p>
              <TextField
                label=""
                InputLabelProps={{ shrink: false }}
                variant="outlined"
              />
            </div>
          </div>
        </div>
      );
    } else if (activeStep === 3) {
      return <><CardDetails/></>;
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
