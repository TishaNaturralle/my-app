import React, { useState, useEffect } from "react";

import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast[0]} />
          </div>

          <div className="col">
            <WeatherForecastDay data={forecast[1]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[2]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[3]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[4]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[5]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[6]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
    let lon = 34.0;
    let lat = 23.2;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`;
    //let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Plettenberg%20Bay
    //&key=bd79ao40tde3dec118ca46bc3e6dd55f&units=metric`;
    console.log(apiUrl);

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
