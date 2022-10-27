import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function CityWeather(props) {
  function displayEmoji(weatherConditions) {
    let newEmoji = "";

    switch (weatherConditions) {
      case "Clear":
        newEmoji = "CLEAR_DAY";
        break;
      case "Thunderstorm":
        newEmoji = "SLEET";
        break;
      case "Drizzle":
        newEmoji = "RAIN";
        break;
      case "Rain":
        newEmoji = "SLEET";
        break;
      case "Snow":
        newEmoji = "SNOW";
        break;
      case "Mist":
        newEmoji = "FOG";
        break;
      case "Fog":
        newEmoji = "FOG";
        break;
      case "Tornado":
        newEmoji = "WIND";
        break;
      case "Clouds":
        newEmoji = "CLOUDY";
        break;

      default:
        newEmoji = "Did not find emoji for: " + weatherConditions;
    }
    return (
      <ReactAnimatedWeather
        icon={newEmoji}
        color="white"
        size={60}
        animate={true}
      />
    );
  }

  return (
    <div>
      <div className="row mb-3 g-2">
        <div className="col-3">
          <div className="pinkborder fullheight p-2 cityname">{props.city}</div>
        </div>
        <div className="col-3">
          <div className="pinkborder fullheight p-2 weatherIcon">
            {displayEmoji(props.weatherIcon)}
          </div>
        </div>
        <div className="col-3">
          <div className="pinkborder fullheight p-2 citytemp">
            <span className="temperatureC">
              {Math.round(props.temperature)} °C
            </span>
            <br />
            <span className="temperatureF">
              {Math.round((props.temperature * 9) / 5 + 32)} °F
            </span>
            <br />
          </div>
        </div>
        <div className="col-3">
          <div className="pinkborder fullheight p-2 metrics">
            Max: {Math.round(props.currentMax)} °C
            <br />
            Min: {Math.round(props.currentMin)} °C
            <br />
            Humidity: {Math.round(props.humidity)}
            <br />
            Wind Speed: {props.wind} km/h
          </div>
        </div>
      </div>
    </div>
  );
}
