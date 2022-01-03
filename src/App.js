import React from "react";
// import './App.css';
import Login from "./pages/LogIn/Login";
import SignUp from "./pages/SignUp/SignUp";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
//main Layout
import MainLayout from "./mainLayout/mainLayout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/login"  
            element={
              <MainLayout>
                  <Login/>
              </MainLayout>
            } 
          />
          <Route  path="/sign-up" element={<SignUp/>} />
          {/* <Navigate  from="/" to="/login" element={<Login/>} /> */}
          </Routes>
        </BrowserRouter>
    </>
  );
};

export default App;
