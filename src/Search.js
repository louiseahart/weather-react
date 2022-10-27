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
  let [currentMax, setCurrentMax] = useState(null);
  let [currentMin, setCurrentMin] = useState(null);

  function receiveAPIContent(response) {
    console.log("receiveAPIContent received:", response);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setWeatherIcon(response.data.weather[0].main);
    setCurrentMax(response.data.main.temp_max);
    setCurrentMin(response.data.main.temp_min);
  }

  return (
    <div>
      <div>
        <form className="search" onSubmit={searchInput}>
          <div className="row mb-2 g-2">
            <div className="col-7">
              <input
                type="text"
                id="searchField"
                className="form-control pinkborder"
                placeholder="Search . . ."
                onChange={updateCity}
              />
            </div>
            <div className="col-2">
              <button
                type="submit"
                className="btn pinkborder"
                onClick={searchInput}
              >
                Search
              </button>
            </div>
            {/* <div className="col-3"> */}
            {/* <button */}
            {/* type="submit" */}
            {/* className="btn pinkborder currentLocationButton" */}
            {/* > */}
            {/* Current Location */}
            {/* </button> */}
            {/* </div> */}
          </div>
        </form>
      </div>
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
        />
      </div>
    </div>
  );
}
