import React from "react";

export default function ForcastDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = props.day.getDay();
  return days[day];
}
