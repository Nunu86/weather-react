import React from "react";
import { WeatherSvg } from "weather-icons-animated";

export default function WeatherIcon(props) {
  if (props.code === "01d" || props.code === "01n") {
    return <WeatherSvg state="sunny" width={30} height={30} />;
  } else if (
    props.code === "02d" ||
    props.code === "02n" ||
    props.code === "03d" ||
    props.code === "03n" ||
    props.code === "04d" ||
    props.code === "04n"
  ) {
    return <WeatherSvg state="cloudy" width={30} height={30} />;
  } else if (
    props.code === "09d" ||
    props.code === "09n" ||
    props.code === "10d" ||
    props.code === "10n"
  ) {
    return <WeatherSvg state="rainy" width={30} height={30} />;
  } else if (props.code === "11d" || props.code === "11n") {
    return <WeatherSvg state="lightning" width={30} height={30} />;
  } else if (props.code === "13d" || props.code === "13n") {
    return <WeatherSvg state="snow" width={30} height={30} />;
  } else {
    return <WeatherSvg state="fog" width={30} height={30} />;
  }
}
