import React, { useState } from "react";
import axios from "axios";

import "./App.css";
import CityWeather from "./CityWeather";
import Forecast from "./Forecast";

export default function Search() {
  let [citySearch, setCitySearch] = useState(null);
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [weatherIcon, setWeatherIcon] = useState(null);
  let [currentMax, setCurrentMax] = useState(null);
  let [currentMin, setCurrentMin] = useState(null);
  let [forecastDays, setForecastDays] = useState(null);
  let [currentDate, setCurrentDate] = useState(null);
  

  function citySearchBoxUpdated(event) {
    setCitySearch(event.target.value);
  }

  function citySearchSubmitted(event) {
    setCity(citySearch);

    event.preventDefault();
    console.log(event);
    let apiKey = "f8c3365e92d7af34ccb10db1054b98ab";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(receiveAPIContent);
  }


  function receiveAPIContent(response) {
    const lat = response.data.coord.lat;
    const lon = response.data.coord.lon;
    let apiKey = "f8c3365e92d7af34ccb10db1054b98ab";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(receiveAPIForecastContent);

    console.log("receiveAPIContent received:", response);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setWeatherIcon(response.data.weather[0].main);
    setCurrentMax(response.data.main.temp_max);
    setCurrentMin(response.data.main.temp_min);
    setCurrentDate(new Date());
  }

  function receiveAPIForecastContent(response) {
    console.log("receiveAPIForecastContent received:", response);
    setForecastDays(response.data.daily);
  }

  return (
    <div>
      <div>
        <form className="search" onSubmit={citySearchSubmitted}>
          <div className="row mb-2 g-2">
            <div className="col-6">
              <input
                type="text"
                id="searchField"
                className="form-control pinkborder"
                placeholder="Search . . ."
                onChange={citySearchBoxUpdated}
              />
            </div>
            <div className="col-6">
              <button
                type="submit"
                className="btn pinkborder"
                onClick={citySearchSubmitted}
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      {forecastDays !== null && (
        <div>
          <div>
            <CityWeather
              city={city}
              temperature={temperature}
              description={description}
              humidity={humidity}
              wind={wind}
              weatherIcon={weatherIcon}
              currentMax={currentMax}
              currentMin={currentMin}
              date={currentDate}
            />
          </div>
          <div>
            <Forecast days={forecastDays} />
          </div>
        </div>
      )}
    </div>
  );
}
