import React, { useState, useEffect } from "react";

import axios from "axios";
import { Facebook } from "react-content-loader";
import ForcastDate from "./ForcastDate";

import "./App.css";

export default function WeatherForcast(props) {
  let [Loaded, setLoading] = useState(false);
  let [forcastPackage, setforcastPackage] = useState(" ");

  useEffect(() => {
    //set Loaded to false
    setLoading(false);
  }, [props]);
  //if the coordinates changes after a search
  //use this to make a new api call after the first call
  function forcastTemp(response) {
    setforcastPackage(response.data.daily);
    setLoading(true);
  }

  if (Loaded)
    return (
      <div className="WeatherForcast">
        <div>
          <ForcastDate data={forcastPackage[0]} />
        </div>
      </div>
    );
  else {
    let latitude = props.LatCity;
    let longitude = props.LonCity;
    let ApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=7746bdeabca928cfedcad71e52fd9d66&units=metric`;
    axios.get(ApiUrl).then(forcastTemp);
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
}
