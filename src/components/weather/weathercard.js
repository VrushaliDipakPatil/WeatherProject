import React, { useEffect } from "react";
import { useSelector } from "../../../node_modules/react-redux/es/index";

const Weathercard=()=>{
  const [weatherState, setWeatheState] = React.useState("");
  // @ts-ignore
  const WeatherSliceData = useSelector(state => state.weatherslice.WeatherData)

  useEffect(() => {
    if (WeatherSliceData.weathermood) {
      switch (WeatherSliceData.weathermood) {
        case "Clouds":
          setWeatheState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatheState("wi-fog");
          break;
        case "Clear":
          setWeatheState("wi-day-sunny");
          break;
        case "Mist":
          setWeatheState("wi-dust");
          break;

        default:
          setWeatheState("wi-day-sunny");
          break;
      }
    }
  }, [WeatherSliceData.weathermood]);

  // converting the seconds into time
  let sec = WeatherSliceData.sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>{WeatherSliceData.temp}&deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition">{WeatherSliceData.weathermood}</div>
            <div className="place">
              {WeatherSliceData.name}, {WeatherSliceData.country}
            </div>
          </div>
        </div>

        <div className="date"> {new Date().toLocaleString()} </div>

        {/* our 4column section  */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {WeatherSliceData.timeStr} PM <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {WeatherSliceData.humidity} <br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {WeatherSliceData.pressure} <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {WeatherSliceData.speed} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}


export default Weathercard;
