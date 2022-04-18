import React from "react";
// import './App.css';
import Home from "./pages/Home/Home";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
//main Layout
import MainLayout from "./mainLayout/mainLayout";
import Products from './pages/Products/Products';
import Header from './mainLayout/Header/Header';
import Footer from "./mainLayout/Footer/Footer";
import MyAccount from "./pages/MyAccount/MyAccount";
import Category from './pages/Category/Category';
import Cart from './pages/Cart/Cart';
import ThankYou from './pages/Thankyou/ThankYou';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route  path="/"  
            element={
              <MainLayout>
                  <Home/>
              </MainLayout>
            } 
          />
          <Route  path="/product" element={<Products/>} />
          <Route path="/myaccount" element={<MyAccount/>} />
          <Route path="/category" element={<Category/>}/>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/thankyou" element={<ThankYou/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
    </>
  );
};

export default App;
