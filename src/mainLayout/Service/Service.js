import React from 'react'
import { ReactComponent as ReactLogo1 } from './../../assets/Group.svg';
import { ReactComponent as ReactLogo2 } from './../../assets/Group1.svg';
import { ReactComponent as ReactLogo3 } from './../../assets/Group2.svg';
import { ReactComponent as ReactLogo4 } from './../../assets/Group3.svg';
import { ReactComponent as ReactLogo5 } from './../../assets/calendar.svg';
import { ReactComponent as ReactLogo6 } from './../../assets/Vector.svg';
import "./Service.scss";
const Service = () => {
  return (
    <div className="Service">
        <h1>
            Beneficios
        </h1>
        <div className="CardsService">
            <div>
                <ReactLogo1/>
                <a>$1 = 1 Punto</a>
            </div>
            <div>
                <ReactLogo2/>
                <a>Recordatorios</a>
            </div>
            <div>
                <ReactLogo3/>
                <a>pagos diferidos</a>
            </div>
            <div>
                <ReactLogo4/>
                <a>Entrega inmediata (sector oriente)</a>
            </div>
            <div>
                <ReactLogo5/>
                <a>Atención 24 horas</a>
            </div>
            <div>
                <ReactLogo6/>
                <a>Entrega el mismo día en menos de dos horas</a>
            </div>
        </div>
    </div>
  )
}

export default Service