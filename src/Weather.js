import React from "react";
import axiosnpm from "axios";
import "./Weather.css";

export default function Weather() {
  const apiKey = "dt7522ba4c017dfaoc53ab6bcb9a6246";
  let apiUrl = `http://api.shecodes.io/weather/v1/current?q=${city}&appid=${apiKey}&units=metric`;

  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="Col-9">
            <input
              type="search"
              placeholder="Enter City.."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="Col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Plettenberg Bay</h1>
      <ul>
        <li> Saturday 14:00</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/
          partly_cloudy.png"
              alt="Mostly Cloudy"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">16 </span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="Col-9">
          <ul>
            <li>Precipitation: 3%</li>
            <li>Humidity: 49%</li>
            <li>Wind: 39km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
