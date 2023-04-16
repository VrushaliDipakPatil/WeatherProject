import React from 'react'
import Image from "./cloudy.png"
import { Link, useNavigate } from '../../node_modules/react-router-dom/dist/index'
import Humid from "./humidity.png"
import Temp from "./temp.png"
import Loc from "./location.png"

export default function SecondPage(props) {
    const navigate = useNavigate();
    function NextPageClick(){
        navigate('/');
     
      }
  return (
    <div className="second-page-box" >
    <div className="header">
      <b onClick={NextPageClick}>&larr;</b>
      <b>Weather App</b>
    </div>
    <hr />
    <div>
      <img src={Image} className="img" alt="true" />
    </div>
    <div className="temp">
      {props.temp}°C
    </div>
    <div className="weather">{props.weathermood}</div>
    <div className="location">
      <i className="bx bx-map"></i>
      <span className="weather"><img src={Loc} alt="true"/>{props.name}, {props.country}</span>
    </div>
    <hr />

    <div className="flex-container">

      <div className="flex-child magenta">
        <div style={{ fontSize: '20px' }}><img src={Temp} alt="true"/>{props.feels_like}°C</div>
        <div>Feels Like</div>
      </div>
      <div className="v1"></div>
      <div className="flex-child green">
        <div style={{ fontSize: '20px' }}><img src={Humid} alt="true"/>{props.humidity}%</div>
        <div>Humidity</div>
      </div>

    </div>

  </div>
  )
}
