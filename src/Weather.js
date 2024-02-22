import React, {useState} from "react";
import FormattedDate from "./FormattedDate"
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});

  function handleResponse (response) {
    console.log(response.data);
    setWeatherData ({
    ready: true,
    city: response.data.name,
    temperature: response.data.main.temp,
    date: new Date (response.data.dt * 1000),
    description: response.data.weather[0].description,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,

    })
  }

  if (weatherData.ready) {
  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li> <FormattedDate date={weatherData.date} /> </li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <div className="float-left">
              <strong className="temperature">{Math.round(weatherData.temperature)}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );

  } else {
   let apiKey = "094780c710fa4efd669f0df8c3991927";
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handleResponse);

   return "Loading..."

  }






}
