import React from "react";

import WeatherIcon from "./WeatherIcon";

export default function ForcastDate(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
  function callDay() {
    let day = new Date(props.data.dt * 1000).getDay();
    return `${days[day]}`;
  }

  function firstDayMaxTemp() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}`;
  }
  function firstDayMinTemp() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}`;
  }

  return (
    <div>
      <div>{callDay()}</div>
      <div>
        <WeatherIcon
          alt="weatherforcast picture"
          code={props.data.weather[0].icon}
        />
      </div>
      <div>
        <span className="maxTemp ">{firstDayMaxTemp()}°</span>
        <span className="minTemp">{firstDayMinTemp()}°</span>
      </div>
    </div>
  );
}
