import React from "react";
// import './App.css';
import Home from "./pages/Home/Home";
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
          <Route  path="/"  
            element={
              <MainLayout>
                  <Home/>
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
