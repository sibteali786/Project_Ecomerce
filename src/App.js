import React from "react";
// import './App.css';
import Login from "./components/Log In - Onboarding/mainLogin";
import SignUp from "./components/Sign Up - Onboarding/mainSignUp";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <Router> */}
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-Up" component={SignUp} />
        <Redirect exact from="/" to="/login" component={Login} />
        </Switch>
    </>
  );
};

export default App;
