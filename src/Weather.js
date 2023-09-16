import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="Col-9">
            <input
              type="search"
              placeholder="Enter City.."
              className="form-control"
            />
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
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/
          partly_cloudy.png"
            alt="Mostly Cloudy"
          />
          16°C
        </div>
        <div className="Col-6">
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
