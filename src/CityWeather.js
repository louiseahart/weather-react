import React from "react";

import { displayEmoji } from "./DisplayEmoji";
import { formatDate } from "./FormatDate";
import { formatTime } from "./FormatTime";

export default function CityWeather(props) {
  return (
    <div>
      <div className="row mb-3 g-2">
        <div className="col-3">
          <div className="pinkborder fullheight p-2 cityname">{props.city}</div>
        </div>
        <div className="col-3">
          <div className="pinkborder fullheight p-2 weatherIcon">
            {displayEmoji(props.weatherIcon, 60)}
            <br />
            {props.weatherIcon}
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
      <div className="row mb-2 g-2 pinkborder">
        <div className="col-9 date">{formatDate(props.date)}</div>
        <div className="col-3 time">{formatTime(props.date)}</div>
      </div>
    </div>
  );
}
