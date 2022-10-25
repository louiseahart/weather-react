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
        color="goldenrod"
        size={60}
        animate={true}
      />
    );
  }

  return (
    <div>
      <div>
        <div className="temperature">
          Temperature: {Math.round(props.temperature)} °C
        </div>
        <div className="description">Description: {props.description}</div>
        <div className="humidity">Humidity: {Math.round(props.humidity)} </div>
        <div className="wind">Wind: {props.wind} km/h</div>
        <div className="weatherIcon">{displayEmoji(props.weatherIcon)}</div>
      </div>
    </div>
  );
}
