import React from "react";

import PrimaryHeading from "../styledComponents/PrimaryHeading";
import SecondaryHeading from "../styledComponents/SecondaryHeading";
import TitleHeading from "../styledComponents/TitleHeading";
import List from "../styledComponents/List";

const WeatherInfo = props => {
  const Days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const degToCompass = num => {
    //https://stackoverflow.com/a/25867068
    var val = Math.floor(num / 22.5 + 0.5);
    var arr = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW"
    ];
    return arr[val % 16];
  };
  const date = new Date(props.weather.dt * 1000);
  return (
    <div>
      <div>
        <PrimaryHeading id="location">
          <span id="city">{props.weather.name}</span>,&nbsp;
          <span id="state">{props.weather.sys.country}</span>
        </PrimaryHeading>
        <SecondaryHeading>
          <span id="today">{Days[date.getDay()]}</span>,&nbsp;
          <span id="current-time">{date.getHours() * 100} hours</span>,&nbsp;
          <span id="sky">{props.weather.weather[0].main}</span>
        </SecondaryHeading>
      </div>
      <div id="location-weather-detail">
        <div className="d-flex align-middle">
          <div className="d-flex">
            <img
              className="mr-3 my-auto d-block img-fluid"
              src={`http://openweathermap.org/img/w/${props.weather.weather[0].icon}.png`}
              alt="wheather-description-icon"
            />
          </div>
          <div>
            <TitleHeading>
              <span className="temp">{props.weather.main.temp}</span>
              <sup className="font-weight-bold">
                &#176;<span>C</span>
              </sup>
              &nbsp;
            </TitleHeading>
          </div>
          <List>
            <li>Humidity: {props.weather.main.humidity} %</li>
            <li>Pressure: {props.weather.main.pressure} hPa</li>
            <li>
              Wind: {props.weather.wind.speed} KPH {" "}
              {degToCompass(props.weather.wind.deg)}
            </li>
          </List>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
