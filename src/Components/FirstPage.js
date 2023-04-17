// @ts-nocheck
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from '../../node_modules/react-router-dom/dist/index'
import { useDispatch } from '../../node_modules/react-redux/es/exports'
import { WeatherInfo } from './WeatherSlice'

export default function FirstPage() {
    const dispatch = useDispatch()

  function setLocation(city) {
    setSearchValue(city)

  }

  const [searchValue, setSearchValue] = useState("")


  function getdeviceLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
          .then(response => response.json())
          .then(data => {
            setLocation(data.address.city);
          })
          .catch(error => console.error(error));
      });
    } else {
      toast.error("Geolocation is not supported by this browser." , {style:{color:'skyblue'}});
    }
  }

  const navigate = useNavigate();
  function NextPageClick(data){
    navigate('/weatherdata');
 
  }

  const getWeatherInfo = async () => {
    if(searchValue == ""){
      toast.error("Please Enter City Name", {style:{color:'skyblue'}})
    }else{
    try {
      const apiKey = '26254e0f31c6554c670f65ec995fd8f8';
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${apiKey}&units=metric`
      const res = await fetch(url);
      const data = await res.json();

      if (data.cod == 404) {
        toast.error("Please Enter Valid City Name" , {style:{color:'skyblue'}})
      } else {
        //Here we have done object destructuring
        const { temp, humidity, feels_like } = data.main;
        const { main: weathermood } = data.weather[0];
        const { name } = data;
        const { country } = data.sys;
        const weatherinfo = {
          temp, humidity, weathermood, name, country, feels_like
        };
        NextPageClick( )
        dispatch(WeatherInfo(weatherinfo))
        
      }

    } catch (error) {
      console.log(error);
    }
  }
  }

  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <div className="first-page-box" >
        <div className="header">
          <b>Weather App</b>
          <b onClick={getWeatherInfo}
          >&rarr;</b>
        </div>
        <hr />

        <input
          type='text'
          placeholder='Enter city Name'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <h5 style={{ color: '#ccc', marginTop: '2px', marginBottom: '2.5px' }}>or</h5>

        <button className='btn' style={{ color: 'white' }} onClick={getdeviceLocation}>Get Device Location</button>

      </div>
    </>
  )
}
