import React, { useState, useEffect } from "react";
// import { withRouter } from "react-router";
import "./MyAccount.scss";
import { Grid } from "@mui/material";
import card from "./../../assets/card.png";
import logout from "./../../assets/logout.png";
import speaker from "./../../assets/speaker.png";
import like from "./../../assets/like.png";
import instagram from "./../../assets/instagram.png";
import mail from "./../../assets/mail.png";
import star from "./../../assets/star.png";
import twitter from "./../../assets/twitter.png";
import whatsapp from "./../../assets/whatsapp.png";
import facebook from "./../../assets/facebook.png";
import link from "./../../assets/link.png";
import messenger from "./../../assets/messenger.png";

import { display } from "@mui/system";
import { Twitter } from "@mui/icons-material";
const MyAccount = () => {
  return (
    <div style={{ maxWidth: "1368px", margin: "0 auto", padding: "0 3rem" }}>
      <div className="superdiv">
        <div className="leftdiv">
          <a style={{ marginTop: "15px" }} href="#">
            Inicio
          </a>
          <a href="#">Pedidos</a>
          <a href="#">Direcciones</a>
          <a href="#">Recordatorios</a>
          <a href="#">Puntos</a>
          <a href="#">Referidos</a>
          <a href="#">Suscripciones</a>
          <a href="#">Soporte</a>
          <div className="line"></div>
          <div className="logdiv">
            <img src={logout} />
            <h6>Log Out</h6>
          </div>
        </div>

        <div className="socialcards">
          <div style={{ gridColumn: "1/2" }} className="carddiv">
            <img src={card} className="cardpic" />
            <p>
              1 Punto por <strong>$1</strong>
            </p>
          </div>
          <div style={{ gridColumn: "2/3" }} className="carddiv">
            <img src={speaker} className="cardpic" />
            <p>
              <strong>200.000 </strong>Puntos
            </p>
          </div>
          <div style={{ gridColumn: "3/4" }} className="carddiv">
            <img src={like} className="cardpic" />
            <p>
              <strong>5000 </strong>Puntos
            </p>
          </div>

          <div style={{ gridColumn: "4/5" }} className="carddiv">
            <img src={instagram} className="cardpic" />
            <p>
              <strong>10.000 </strong>Puntos
            </p>
          </div>
          <div style={{ gridColumn: "5/6" }} className="carddiv">
            <img src={mail} className="cardpic" />
            <p>
              <strong>25.000 </strong>Puntos
            </p>
          </div>
          <div style={{ gridColumn: "6/7" }} className="carddiv">
            <img src={star} className="cardpic" />
            <p>
              <strong>20.000 </strong>Puntos
            </p>
          </div>
        </div>

        <div className="buttondiv">
          <div style={{ gridColumn: "1/2" }} className="buttoncard">
            <p>Cupon de</p>
            <h5>$5000</h5>
            <p style={{ color: "rgba(129, 129, 129, 1)" }}>100.000 Puntos</p>
            <div
              style={{
                background: "rgba(229, 229, 229, 1)",
                width: "85%",
                height: "0px",
                border: "3px solid #E5E5E5",
                borderRadius: "20px",
                marginLeft: "20px",
              }}
            >
              <div
                style={{
                  background: "rgba(80, 157, 111, 1)",
                  width: "70%",
                  height: "0px",
                  border: "3px solid rgba(80, 157, 111, 1)",
                  borderRadius: "20px",
                  marginLeft: "-5px",
                  marginTop: "-4px",
                }}
              ></div>
            </div>

            <a className="cardbutton">
              <div style={{ marginLeft: "25px", width: "81px" }}>
                Se Necesitan
              </div>
              <div style={{ marginLeft: "29px" }}>Mas Puntos</div>
            </a>
          </div>
          <div style={{ gridColumn: "2/3" }} className="buttoncard">
            <p>Cupon de</p>
            <h5>$5000</h5>
            <p style={{ color: "rgba(129, 129, 129, 1)" }}>100.000 Puntos</p>
            <div
              style={{
                background: "rgba(229, 229, 229, 1)",
                width: "85%",
                height: "0px",
                border: "3px solid #E5E5E5",
                borderRadius: "20px",
                marginLeft: "20px",
              }}
            >
              <div
                style={{
                  background: "rgba(80, 157, 111, 1)",
                  width: "70%",
                  height: "0px",
                  border: "3px solid rgba(80, 157, 111, 1)",
                  borderRadius: "20px",
                  marginLeft: "-5px",
                  marginTop: "-4px",
                }}
              ></div>
            </div>

            <a className="cardbutton">
              <div style={{ marginLeft: "25px", width: "81px" }}>
                Se Necesitan
              </div>
              <div style={{ marginLeft: "29px" }}>Mas Puntos</div>
            </a>
          </div>

          <div style={{ gridColumn: "3/4" }} className="buttoncard">
            <p>Cupon de</p>
            <h5>$5000</h5>
            <p style={{ color: "rgba(129, 129, 129, 1)" }}>100.000 Puntos</p>
            <div
              style={{
                background: "rgba(229, 229, 229, 1)",
                width: "85%",
                height: "0px",
                border: "3px solid #E5E5E5",
                borderRadius: "20px",
                marginLeft: "20px",
              }}
            >
              <div
                style={{
                  background: "rgba(80, 157, 111, 1)",
                  width: "70%",
                  height: "0px",
                  border: "3px solid rgba(80, 157, 111, 1)",
                  borderRadius: "20px",
                  marginLeft: "-5px",
                  marginTop: "-4px",
                }}
              ></div>
            </div>

            <a className="cardbutton">
              <div style={{ marginLeft: "25px", width: "81px" }}>
                Se Necesitan
              </div>
              <div style={{ marginLeft: "29px" }}>Mas Puntos</div>
            </a>
          </div>
          <div style={{ gridColumn: "4/5" }} className="buttoncard">
            <p>Cupon de</p>
            <h5>$5000</h5>
            <p style={{ color: "rgba(129, 129, 129, 1)" }}>100.000 Puntos</p>
            <div
              style={{
                background: "rgba(229, 229, 229, 1)",
                width: "85%",
                height: "0px",
                border: "3px solid #E5E5E5",
                borderRadius: "20px",
                marginLeft: "20px",
              }}
            >
              <div
                style={{
                  background: "rgba(80, 157, 111, 1)",
                  width: "70%",
                  height: "0px",
                  border: "3px solid rgba(80, 157, 111, 1)",
                  borderRadius: "20px",
                  marginLeft: "-5px",
                  marginTop: "-4px",
                }}
              ></div>
            </div>

            <a className="cardbutton">
              <div style={{ marginLeft: "25px", width: "81px" }}>
                Se Necesitan
              </div>
              <div style={{ marginLeft: "29px" }}>Mas Puntos</div>
            </a>
          </div>
        </div>
        <div className="para">
          <h6
            style={{
              color: "rgba(114, 80, 157, 1)",
              fontWeight: "700",
              textAlign: "center",
              paddingTop: "20px",
            }}
          >
            Tus recompensas
          </h6>
          <p
            style={{
              color: "rgba(114, 80, 157, 1)",

              textAlign: "center",
            }}
          >
            Todavia no has canjeado un cupon de descuento. Tus recompensas
          </p>
        </div>
        <div className="speakerdiv">
          <h6>Invitar a amigos</h6>
          <div className="line2"></div>
          <div className="speakerdiv2">
            <img src={speaker} />

            <p>Da a un amigos un $10.000 </p>
            <p>de descuento en su primera compra y gana 200.000 </p>
            <p>Puntos si gasta mas de $400.000</p>
          </div>
          <div className="socialapp">
            <img src={twitter} />
            <img src={whatsapp} />
            <img src={messenger} />
            <img src={facebook} />
            <img src={mail} />
            <img src={link} />
          </div>
        </div>
        <div className="tablediv">
          <h6>Tu Actividad reciente</h6>
          <table className="table1">
            <tr>
              <th>Fecha</th>
              <th>Tipo</th>
              <th>Accion</th>
              <th>Puntos</th>
              <th>Estado</th>
            </tr>
            <tr>
              <td>20/09/2022</td>
              <td>Actividad</td>
              <td>Suscribete a nuestra lista de correo</td>
              <td>10.000</td>
              <td>
                <div
                  style={{
                    background: "rgba(229, 229, 229, 1)",
                    width: "160px",
                    height: "0px",
                    border: "3px solid #E5E5E5",
                    borderRadius: "20px",
                    marginLeft: "20px",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(80, 157, 111, 1)",
                      width: "110px",
                      height: "0px",
                      border: "3px solid rgba(80, 157, 111, 1)",
                      borderRadius: "20px",
                      marginLeft: "-5px",
                      marginTop: "-4px",
                    }}
                  ></div>
                </div>
              </td>
            </tr>
            <br />
            <tr style={{ border: "1px solid #E5E5E5", margin: "100px" }}></tr>
            <tr>
              <td>20/09/2022</td>
              <td>Actividad</td>
              <td>Suscribete a nuestra lista de correo</td>
              <td>10.000</td>
              <td>
                <div
                  style={{
                    background: "rgba(229, 229, 229, 1)",
                    width: "160px",
                    height: "0px",
                    border: "3px solid #E5E5E5",
                    borderRadius: "20px",
                    marginLeft: "20px",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(80, 157, 111, 1)",
                      width: "110px",
                      height: "0px",
                      border: "3px solid rgba(80, 157, 111, 1)",
                      borderRadius: "20px",
                      marginLeft: "-5px",
                      marginTop: "-4px",
                    }}
                  ></div>
                </div>
              </td>
            </tr>
            <br />
            <tr style={{ border: "1px solid #E5E5E5", margin: "100px" }}></tr>
            <tr>
              <td>20/09/2022</td>
              <td>Actividad</td>
              <td>Suscribete a nuestra lista de correo</td>
              <td>10.000</td>
              <td>
                <div
                  style={{
                    background: "rgba(229, 229, 229, 1)",
                    width: "160px",
                    height: "0px",
                    border: "3px solid #E5E5E5",
                    borderRadius: "20px",
                    marginLeft: "20px",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(80, 157, 111, 1)",
                      width: "110px",
                      height: "0px",
                      border: "3px solid rgba(80, 157, 111, 1)",
                      borderRadius: "20px",
                      marginLeft: "-5px",
                      marginTop: "-4px",
                    }}
                  ></div>
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div className="enddiv">
          <h6>Ayuda</h6>
          <div className="endline"></div>
          <p>
            Que el cliente pueda cambiar horario de entrega, mensaje o incluso
            reprogramar el pedido <br /> para otro horario <br />
            <br /> Pero debe hacerse con tiempo anticipado y/o antes de que el
            producto ya esté en proceso o terminado, depende
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
