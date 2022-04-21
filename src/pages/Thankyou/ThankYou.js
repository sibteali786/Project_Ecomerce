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
import { Header, Footer } from "../../mainLayout/mainLayout"; 
import Grid from "@mui/material/Grid";

const ThankYou = () => {
  return (
    <>

    <div className="sabkapapa">
      <div className="one"> 
        <p className="one-1">Thank you for purchasing</p>
        <p className="one-2">tell the customer that they can see the tracking of their order in "my orders"
        <br/>
        and that takes you to create an account (only to put password because we already have the email)
        </p>
      </div>
      <div className="linee"></div>
      <Grid container className="flexwali">
        <Grid item xs={11} className="two">
          <Grid item sm={12} md={6} lg={6} xl={5} className="left">
            <div className="leadslide">
              <p className="leadslide">LeadSlide Plus</p>
            </div>
            <div className="line1by2a"></div>
            <div className="tasveer">
              <div className="textpic">
                <div className="tick">
                  <div className="borderTick">
                    <img className="andatick" src={Vector}></img>
                  </div>
                  
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
          </Grid>
          <Grid item sm={12} md={5} lg={5} xl={6} className="table">
            <table className="barasize">
              <tr id="arboder" > 
                <th>
                  <div className="onetable">
                    <div>
                      <img src={Rectangle69}></img>
                    </div>
                  <div>
                    <p className="fj" > Jeans Boston <br/> FJ Blue 44</p></div>
                  </div>
                </th>
                <th >x1</th>
                <th className="pad">$99.00</th>
              </tr>
              <tr>
                <td id="rboder">SubTotal</td>
                <td id="rboder"></td>
                <td id="rboder">$99.00</td>
              </tr>
              <tr>
                <td id="rboder">Discount</td>
                <td id="rboder"></td>
                <td id="rboder">-$9.00</td>
              </tr>
              <tr>
                <td id="rboder">Shipping</td>
                <td id="rboder"></td>
                <td id="rboder">$0</td>
              </tr>
              <tr>
                <td id="rrboder">Taxes</td>
                <td id="rrboder"></td>
                <td id="rrboder">$35</td>
              </tr>
              <tr>
                <th id="rboder">Total</th>
                <th id="rboder"></th>
                <th id="rboder">$125</th>
              </tr>
            </table>
          </Grid> 
        </Grid>
        <Grid item xs={11} className="papathree">
        <Grid item sm={12} md={6} lg={6} xl={5}className="three">
          <div className="para">
            <h4>Your order is confirmed</h4>
            <p>
              We’ve accepted your order, and we’re getting it ready. A confirmation
              email has been sent to abcd@gmail.com. Come back to this page for
              updates on your order status.
            </p>
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

            <form>
              <label>Email</label>
              <input id="dibba" type="email" name="email" />
              <br/>
              <br/>
              <label>Email</label>
              <input id="dibba" type="email" name="email" />
              <br/>
              <br/>
              <label>Email</label>
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
              <p id="nno">1</p>
            </div>
            <div id="marks">
              <p id="no">2</p>
            </div>
            <div id="marks">
              <p id="no">3</p>
            </div>
            <div id="marks">
              <p id="no">4</p>
            </div>
            <div id="marks">
              <p id="no">5</p>
            </div>
            <div id="marks">
              <p id="no">6</p>
            </div>
            <div id="marks">
              <p id="no">7</p>
            </div>
            <div id="marks">
              <p id="no">8</p>
            </div>
            <div id="marks">
              <p id="no">9</p>
            </div>
            <div id="marks">
              <p id="no">10</p>
            </div>
          </div>
        </div>
      </Grid>
      </Grid>
    </Grid>
  </div>
</>
  );
};

export default ThankYou;