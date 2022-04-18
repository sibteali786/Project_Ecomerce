import React, { useState, useEffect } from "react";
// import { withRouter } from "react-router";
import "./ThankYou.scss";
import refer from "./../../assets/Group256.png";
import Ellipse192 from "./../../assets/Ellipse192.png";
import Ellipse193 from "./../../assets/Ellipse193.png";
import Vector from "./../../assets/Vector.png";
import Vectorr from "./../../assets/Vectorr.png";
import Rectangle129 from "./../../assets/Rectangle129.png";
import Rectangle69 from "./../../assets/Rectangle69.png";
const ThankYou = () => {
  return (
    <>
    <div className="sabkapapa">
    <div className="one"> 
      <p className="one-1">Thank you for purchasing</p>
      <p className="one-2">tell the customer that they can see the tracking of their order in "my orders"
      <br/>

and that takes you to create an account (only to put password because we already have the email)</p>
</div>
<div className="linee"></div>
<div className="flexwali">
    <div className="two">
      <div className="left">
        <p className="leadslide">LeadSlide Plus</p>
        <div className="line1by2a">
        </div>
        <div className="tasveer">
          <div className="textpic">
          <div className="tick">
            <img src={Ellipse192}></img>
            <img className="andatick" src={Vector}></img>
          </div>
          <div className="betapic">
          <p className="upertick" >Order #1004 </p>
          <p className="nechatick" >Thank you darlene! you accumulated 1045 points</p>
          </div>
          </div>
          <div className="naqsha">
            <img className="baripic" src={Rectangle129}></img>
            <img className="location" src={Vectorr}></img>
            <div className="mappa">
              <p className="adress1" >Shipping Address </p>
              <p className="adress2" >Toronto, Canada</p>
            </div>
          </div>
          </div>
          </div>
        <div className="table">
          <table className="barasize">
        <tr>
          <th>
            <div className="onetable">
              <div>
              <img src={Rectangle69}></img></div>
              <div>
              <p className="fj" > Jeans Boston <br/> FJ Blue 44</p></div>
              </div>
</th>
          <th>x1</th>
          <th className="pad">$99.00</th>
        </tr>
        <tr>
          <td>SubTotal</td>
          <td></td>
          <td>$99.00</td>
        </tr>
        <tr>
          <td>Discount</td>
          <td></td>
          <td>-$9.00</td>
        </tr>
        <tr>
          <td>Shipping</td>
          <td></td>
          <td>$0</td>
        </tr>
        <tr>
          <td>Taxes</td>
          <td></td>
          <td>$35</td>
        </tr>
        <tr>
          <th>Total</th>
          <th></th>
          <th>$125</th>
        </tr>
      </table>
        </div>
        
        </div>
        <div className="three">
          <div className="para">
          <h4>Your order is confirmed</h4>
            <p>
We’ve accepted your order, and we’re getting it ready. A confirmation
email has been sent to abcd@gmail.com. Come back to this page for
updates on your order status.</p>
</div>

<div className="refer">
  <img className="gift" src={refer}></img>
  <p className="writtenrefer">Refer and get 10% Cashback</p>
  <p className="pwrittenrefer">You get rewarded when your friends<br/>
makes a purchase</p>
<div className="RFY">
<div className="Rfriend">
  <p id="price">Your friend will get </p>
  <p id="reward">10% worth Discount coupon</p>
</div>
<div className="Ryou">
  <p id="price">You will get</p>  
  <p id="reward">10% cashback on this order</p>
</div>
</div>
        </div>
        <div className="input">
          <p className="uperemail">If you know someone who could also send this person flowers
or a gift, let them know!</p>

<form >
  <label>
    Email          
  </label>
  <input id="dibba" type="email" name="email" />
  <br/>
  <br/>
  <label>
    Email
    </label>
    <input id="dibba" type="email" name="email" />
    <br/>
    <br/>
  <label>
    Email
    </label>
    <input id="dibba" type="email" name="email" />
</form>
        </div>
        <div className="line1by2"></div>
        <div className="info">
          <p id="motakaro">Customer Information</p>
          <div className="1info">
          <div className="bullet">
            <img id="anda" src={Ellipse193}></img>
            <h3>Shipping Address</h3>
          </div>
          <div className="detail">
          <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
          </div>
          </div>
          <div className="2info">
            <div className="bullet">
            <img id="anda" src={Ellipse193}></img>
            <h3>Billing Address</h3>
          </div>
            <div className="detail">
          <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
          </div>
          </div>
          <div className="3info">
          <div className="bullet">
            <img id="anda" src={Ellipse193}></img>
            <h3>Shipping Method</h3>
          </div>
          <div className="detail">
          <p>Standard Shipping</p>
          </div>
          </div>
          <div className="4info">
          <div className="bullet">
            <img id="anda" src={Ellipse193}></img>
            <h3>Payment Method</h3>
          </div>
          <div className="detail">
          <p>Cash on Delivery $125.00</p>
          </div>
          </div>
          </div>
        
        <div className="line1by2"></div>
        <div className="end">
          <p id="motakarolc">How likely is it that you would recommend
Unbounce to a friend or colleague?</p>
<div className="rating">
  <p>0 - Not likely at all</p>
  <p className="toprate">10 - Extreme Like</p>
</div>
<div className="ratingbolcks">
  <div className="fmarks">
    <p id="nno">1</p></div>
    <div id="marks">
    <p id="no">2</p></div>
    <div id="marks">
    <p id="no">3</p></div>
    <div id="marks">
    <p id="no">4</p></div>
    <div id="marks">
    <p id="no">5</p></div>
    <div id="marks">
    <p id="no">6</p></div>
    <div id="marks">
    <p id="no">7</p></div>
    <div id="marks">
    <p id="no">8</p></div>
    <div id="marks">
    <p id="no">9</p></div>
    <div id="marks">
    <p id="no">10</p></div>
</div>
</div>
        </div>
        </div>
        </div>

    </>
  );
};

export default ThankYou;
