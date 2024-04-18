import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu </div>
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">19</span>
            <span className="WeatherForecast-temp-min">12</span>
          </div>
        </div>
      </div>
    </div>
  );
}
