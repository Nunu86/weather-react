import React, { useState } from "react";
import { WeatherSvg } from "weather-icons-animated";
import axios from "axios";
import { Facebook } from "react-content-loader";
import ForcastDate from "./ForcastDate";

import "./App.css";

export default function WeatherForcast(props) {
  let [Loaded, setLoading] = useState(false);
  let [firstMaxTemp, setfirstMaxTemp] = useState(" ");
  let [firstMinTemp, setfirstMinTemp] = useState(" ");
  let [secondMaxTemp, setsecondMaxTemp] = useState(" ");
  let [secondMinTemp, setsecondMinTemp] = useState(" ");
  let [thirdMaxTemp, setthirdMaxTemp] = useState(" ");
  let [thirdMinTemp, setthirdMinTemp] = useState(" ");
  let [fourthMaxTemp, setfourthMaxTemp] = useState(" ");
  let [fourthMinTemp, setfourthMinTemp] = useState(" ");
  let [fifthMaxTemp, setfifthMaxTemp] = useState(" ");
  let [fifthMinTemp, setfifthMinTemp] = useState(" ");
  let [sixthMaxTemp, setsixthMaxTemp] = useState(" ");
  let [sixthMinTemp, setsixthMinTemp] = useState(" ");
  let [seventhMaxTemp, setseventhMaxTemp] = useState(" ");
  let [seventhMinTemp, setseventhMinTemp] = useState(" ");
  let [forCast, setforCast] = useState(" ");

  function forcastTemp(response) {
    setLoading(true);
    let forcastPackage = response.data.daily;

    forcastPackage.forEach(function (index, value) {
      setfirstMaxTemp(Math.round(forcastPackage[0].temp.max));
      setfirstMinTemp(Math.round(forcastPackage[0].temp.min));
      setsecondMaxTemp(Math.round(forcastPackage[1].temp.max));
      setsecondMinTemp(Math.round(forcastPackage[1].temp.min));
      setthirdMaxTemp(Math.round(forcastPackage[2].temp.max));
      setthirdMinTemp(Math.round(forcastPackage[2].temp.min));
      setfourthMaxTemp(Math.round(forcastPackage[3].temp.max));
      setfourthMinTemp(Math.round(forcastPackage[3].temp.min));
      setfifthMaxTemp(Math.round(forcastPackage[4].temp.max));
      setfifthMinTemp(Math.round(forcastPackage[4].temp.min));
      setsixthMaxTemp(Math.round(forcastPackage[5].temp.max));
      setsixthMinTemp(Math.round(forcastPackage[5].temp.min));
      setseventhMaxTemp(Math.round(forcastPackage[6].temp.max));
      setseventhMinTemp(Math.round(forcastPackage[6].temp.min));
    });
  }

  let latitude = props.LatCity;
  let longitude = props.LonCity;
  let ApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=7746bdeabca928cfedcad71e52fd9d66&units=metric`;
  axios.get(ApiUrl).then(forcastTemp);
  if (Loaded)
    return (
      <div className="WeatherForcast">
        <div>
          <div>Fri</div>
          <div>
            <WeatherSvg state="cloudy" width={30} height={30} />
          </div>
          <div>
            <span className="maxTemp ">{firstMaxTemp}°</span>
            <span className="minTemp">{firstMinTemp}°</span>
          </div>
        </div>
        <div>
          <div>Sat</div>
          <div>
            <WeatherSvg state="sunny" width={30} height={30} />
          </div>
          <div>
            <span className="maxTemp ">{secondMaxTemp}°</span>
            <span className="minTemp">{secondMinTemp}°</span>
          </div>
        </div>
        <div>
          <div>Sun</div>
          <div>
            <WeatherSvg state="clear-night" width={30} height={30} />
          </div>
          <div>
            <span className="maxTemp ">{thirdMaxTemp}°</span>
            <span className="minTemp">{thirdMinTemp}°</span>
          </div>
        </div>
        <div>
          <div>Mon</div>
          <div>
            <WeatherSvg state="rainy" width={30} height={30} />
          </div>
          <div>
            <span className="maxTemp ">{fourthMaxTemp}°</span>
            <span className="minTemp">{fourthMinTemp}°</span>
          </div>
        </div>
        <div>
          <div>Tue</div>
          <div>
            <WeatherSvg state="sunny" width={30} height={30} />
          </div>
          <div>
            <span className="maxTemp ">{fifthMaxTemp}°</span>
            <span className="minTemp">{fifthMinTemp}°</span>
          </div>
        </div>
        <div>
          <div>Weds</div>
          <div>
            <WeatherSvg state="sunny" width={30} height={30} />
          </div>
          <div>
            <span className="maxTemp ">{sixthMaxTemp}°</span>
            <span className="minTemp">{sixthMinTemp}°</span>
          </div>
        </div>
        <div>
          <div>Thurs</div>
          <div>
            <WeatherSvg state="sunny" width={30} height={30} />
          </div>
          <div>
            <span className="maxTemp ">{seventhMaxTemp}°</span>
            <span className="minTemp">{seventhMinTemp}</span>
          </div>
        </div>
      </div>
    );
  else
    return (
      <div>
        Loading...
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
