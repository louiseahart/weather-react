import React from "react";

import { formatWeekday } from "./FormatTime";
import { displayEmoji } from "./DisplayEmoji";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="pinkborder">
        <div className="row g-2">
          <div className="col-8 date">8-Day Forecast</div>
          <div className="col-1">Max</div>
          <div className="col-1">Min</div>
          <div className="col-2">Forecast</div>
        </div>
        {props.days.map(function (day, index) {
          let date = formatWeekday(new Date(day.dt * 1000));

          return (
            <div className="row g-2" key={index}>
              <div className="col-8 date">{date}</div>
              <div className="col-1">
                <span className="high">{Math.round(day.temp.max)}°C</span>
              </div>
              <div className="col-1">
                <span className="low">{Math.round(day.temp.min)}°C</span>
              </div>
              <div className="col-1">{day.weather[0].main}</div>
              <div className="col-1">
                {displayEmoji(day.weather[0].main, 30)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
