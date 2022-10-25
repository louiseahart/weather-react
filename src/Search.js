import React, { useState } from "react";
import "./App.css";
import CityWeather from "./CityWeather";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState("");

  function updateCity(event) {
    setCity(event.target.value);
  }

  function searchInput(event) {
    event.preventDefault();
    let apiKey = "f8c3365e92d7af34ccb10db1054b98ab";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(receiveAPIContent);
  }

  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [weatherIcon, setWeatherIcon] = useState(null);

  function receiveAPIContent(response) {
    console.log("receiveAPIContent received:", response);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setWeatherIcon(response.data.weather[0].main);
  }

  return (
    <div>
      <h1>Weather App</h1>
      <div>
        <form onSubmit={searchInput}>
          <div>
            <div>
              <input
                id="searchField"
                className="form-control"
                placeholder="Enter a City . . ."
                type="search"
                onChange={updateCity}
              />
              <button type="submit" className="btn" onClick={searchInput}>
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <CityWeather
          temperature={temperature}
          description={description}
          humidity={humidity}
          wind={wind}
          weatherIcon={weatherIcon}
        />
      </div>
    </div>
  );
}
