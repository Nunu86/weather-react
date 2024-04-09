import { WeatherSvg } from "weather-icons-animated";
import axios from "axios";
import React, { useState } from "react";
import { Facebook } from "react-content-loader";
import moment from "moment";
import "moment-timezone";
import FormattedDate from "./FormattedDate";

import "./App.css";

export default function App(props) {
  let [City, setEnteredCity] = useState(props.City);
  let [changeCity, setChangeCity] = useState(" ");
  let [newWeather, setNewWeather] = useState("");

  let [ready, setready] = useState(false);

  let [current, setCurrent] = useState("");
  let [currentDateTime, setDateTime] = useState(
    moment.tz("Europe/London").format(`ddd Mo MMM YYYY, h:mm A`)
  );

  function changetoCelcius(event) {
    event.preventDefault();
    let switchToCelcius = document.querySelector(`#tempSwitch`);
    switchToCelcius.innerHTML = newWeather.temperature;
    let celciusSwitch = document.querySelectorAll(
      `#degCelcius, .degFahrenheit`
    );

    celciusSwitch.forEach(function (value) {
      celciusSwitch[0].style.color = "red";
      celciusSwitch[0].style.fontSize = "24px";
      celciusSwitch[1].style.color = "black";
      celciusSwitch[1].style.fontSize = "12px";
    });
  }

  function changetoFahrenheit(event) {
    event.preventDefault();
    let switchToFahrenheit = document.querySelector(`#tempSwitch`);
    switchToFahrenheit.innerHTML = Math.round(
      newWeather.temperature * 1.8 + 32
    );
    let fahrenheitSwitch = document.querySelectorAll(
      `#degCelcius, .degFahrenheit`
    );
    fahrenheitSwitch.forEach(function () {
      fahrenheitSwitch[0].style.color = "black";
      fahrenheitSwitch[1].style.color = "red";
      fahrenheitSwitch[1].style.fontSize = "24px";
      fahrenheitSwitch[0].style.fontSize = "12px";
      return `${fahrenheitSwitch[1]} is a girl`;
    });
  }

  function switchCity() {
    setChangeCity(`${City}`);
  }

  function displayWeather(response) {
    console.log(response.data);

    setNewWeather({
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });

    setDateTime(new Date(response.data.dt * 1000));
    setready(true);
    switchCity();
  }

  function preventReload(event) {
    event.preventDefault();
    let key = `894a2e7aa7f46eeca5d8778f6faa5a5b`;
    let link = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${key}&units=metric`;
    axios.get(link).then(displayWeather);
  }
  function runCurrent(event) {
    event.preventDefault();
    let place = moment.tz.guess();
    let singlePlace = place.split("/");
    setCurrent(singlePlace[1]);
    let change = document.querySelector(`#switchCity`);
    change.innerHTML = singlePlace[1];

    let key = `894a2e7aa7f46eeca5d8778f6faa5a5b`;
    let link = `https://api.openweathermap.org/data/2.5/weather?q=${singlePlace[1]}&appid=${key}&units=metric`;
    axios.get(link).then(displayWeather);
  }

  function ViewCity(event) {
    let newCity = event.target.value;
    setEnteredCity(newCity);
  }
  if (ready)
    return (
      <div className="App border m-5 shadow-sm ">
        <div className="Container m-4">
          <header className="SearchTile ml-4 bg-primary-subtle">
            <form className="mt-5" onSubmit={preventReload}>
              <input
                type="search"
                placeholder="Enter a city"
                autoFocus
                required
                className="shadow-sm px-4"
                onChange={ViewCity}
              ></input>
              <input
                type="submit"
                value="Search"
                className="bg-primary text-white"
                onSubmit={preventReload}
              ></input>
              <input
                type="submit"
                value="Current"
                className="ml-1 bg-success text-white"
                onClick={runCurrent}
              ></input>
            </form>
          </header>
          <body className="ml-4 bg-primary-subtle">
            <h1 id="switchCity">{changeCity}</h1>
            <div className="lh-sm">
              <p className="fw-bold">
                <FormattedDate date={currentDateTime} />
                <br />{" "}
                <span className="text-primary fs-5">
                  {newWeather.description.charAt(0).toUpperCase() +
                    newWeather.description.slice(1)}
                </span>
              </p>
            </div>
            <br />
            <div className="Top">
              <div className="TopNumber">
                <img
                  src={newWeather.icon}
                  alt={newWeather.description}
                  className="fs-7"
                ></img>
                <span id="tempSwitch">{newWeather.temperature}</span>

                <span className="TopSpan">
                  <a href="/" onClick={changetoCelcius} id="degCelcius">
                    {" "}
                    ℃ |
                  </a>
                  <a
                    href="/"
                    onClick={changetoFahrenheit}
                    className="degFahrenheit"
                  >
                    ℉
                  </a>
                </span>
              </div>
              <div className="precipitation">
                <p>Humidity: {newWeather.humidity}% </p>
                <p>Wind: {newWeather.wind}km/h</p>
              </div>
            </div>
            <div className="Bottom">
              <div>
                <div>Fri</div>
                <div>
                  <WeatherSvg state="cloudy" width={30} height={30} />
                </div>
                <div>13°</div>
              </div>
              <div>
                <div>Sat</div>
                <div>
                  <WeatherSvg state="sunny" width={30} height={30} />
                </div>
                <div>15°</div>
              </div>
              <div>
                <div>Fri</div>
                <div>
                  <WeatherSvg state="clear-night" width={30} height={30} />
                </div>
                <div>17°</div>
              </div>
              <div>
                <div>Sun</div>
                <div>
                  <WeatherSvg state="rainy" width={30} height={30} />
                </div>
                <div>16°</div>
              </div>
              <div>
                <div>Mon</div>
                <div>
                  <WeatherSvg state="sunny" width={30} height={30} />
                </div>
                <div>15°</div>
              </div>
            </div>
          </body>
          <footer>
            <p className="mt-4 fs-6 bottomFooter">
              This weather app was coded by Chinonye Okorie. It is open sourced
              on{" "}
              <a href="https://github.com/Nunu86/weather-react" target="blank">
                GitHub
              </a>{" "}
              and Hosted on{" "}
              <a
                href="https://deluxe-rugelach-b83b5e.netlify.app/"
                target="blank"
              >
                Netlify
              </a>
            </p>
          </footer>
        </div>
      </div>
    );
  else {
    return (
      <div>
        <p className="loading"> Loading...</p>
        {
          <Facebook
            height={30}
            speed={1}
            backgroundColor={"#333"}
            foregroundColor={"#999"}
            style={{ width: "100%" }}
          ></Facebook>
        }
      </div>
    );
  }
}
