
// @ts-ignore
import React, { useState,useEffect  } from "react";
import Weathercard from "./weathercard";
import "./style.css";
// @ts-ignore
import toast, { Toaster } from 'react-hot-toast'
import { WeatherInfo } from "./WeatherSlice";
import { useDispatch } from "../../../node_modules/react-redux/es/index";

const Temp = () => {
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState("");
  const[currentLoc, setCurrentLoc] = useState(false)

  useEffect(() => {

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
          .then(response => response.json())
          .then(data => {
            setSearchValue(data.address.city);
            setCurrentLoc(true)
          })
          .catch(error => console.error(error));
      });
    }
   
  }, []);

  useEffect(()=>{
    getWeatherInfo();
  },[currentLoc])

  const getWeatherInfo = async () => {
    try {
      const apiKey = 'API_KEY';
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${apiKey}`;

      let res = await fetch(url);
      let data = await res.json();

      if (data.cod == 404) {
        toast.error("Please Enter Valid City Name" , {style:{color:'skyblue'}})
      } else {
        const { temp, humidity, pressure } = data.main;
        const { main: weathermood } = data.weather[0];
        const { name } = data;
        const { speed } = data.wind;
        const { country, sunset } = data.sys;
  
        const myNewWeatherInfo = {
          temp,
          humidity,
          pressure,
          weathermood,
          name,
          speed,
          country,
          sunset,
        };
        dispatch(WeatherInfo(myNewWeatherInfo))
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>
      <Toaster position='top-center' reverseOrder={false} />
      {/* our temp card  */}
      <Weathercard/>
    </>
  );
};

export default Temp;
