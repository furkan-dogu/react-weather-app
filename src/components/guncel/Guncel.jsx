import axios from "axios";
import { useEffect, useState, useCallback } from "react";

import { BsClouds } from "react-icons/bs";
import { IoRainyOutline } from "react-icons/io5";
import { CiCloudSun } from "react-icons/ci";
import { WiDayRainMix } from "react-icons/wi";
import { RiMistLine } from "react-icons/ri";
import { LuWaves } from "react-icons/lu";
import { FiWind } from "react-icons/fi";
import "./Guncel.css";

const Guncel = ({ search }) => {
  const [data, setData] = useState({});
  const [filterCity, setFilterCity] = useState("samsun");

  const getGuncel = useCallback(async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${
        filterCity || "samsun"
      }&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
      const res = await axios.get(url);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  }, [filterCity]);

  useEffect(() => {
    setFilterCity(search);
  }, [search]);

  useEffect(() => {
    getGuncel();
  }, [filterCity, getGuncel]);

  const { main, name, sys, wind, coord, weather } = data;

  const cityName =
    name && name.includes("Province")
      ? name.replace("Province", "").trim()
      : name && name.includes("City of")
      ? name.replace("City of", "").trim()
      : name;

  const iconApi = weather && weather.length > 0 ? weather[0].main : null;

  const icon =
    iconApi === "Rain" ? (
      <IoRainyOutline />
    ) : iconApi === "Clouds" ? (
      <BsClouds />
    ) : iconApi === "Clear" ? (
      <CiCloudSun />
    ) : iconApi === "Drizzle" ? (
      <WiDayRainMix />
    ) : iconApi === "Mist" ? (
      <RiMistLine />
    ) : null;

  return (
    <div className="instant-weather">
      <h1>Instant Weather</h1>
      <div className="weather">
        <div className="city-div">
          <h3 className="city">
            {cityName} {sys?.country}
          </h3>
          <p className="lat">
            <span>Latitude:</span> {coord?.lat}
          </p>
          <p className="lon">
            <span>Longitude:</span> {coord?.lon}
          </p>
        </div>
        {/* <div className="icon-div">
        <span>{icon}</span>
      </div> */}
        <div className="temp-div">
          <span className="temp-icon">{icon}</span>
          <div>
            <p className="temp">
              <span>Temp:</span> {Math.round(main?.temp)} °C
            </p>
            <p className="felt-temp">
              <span>Felt Temp:</span> {Math.round(main?.feels_like)}°C
            </p>
          </div>
        </div>

        <div className="humidity-div">
          <LuWaves className="partner-icon" />
          <div>
            <p className="humidity">{main?.humidity}%</p>
            <p className="partner">Humidity</p>
          </div>
        </div>
        <div className="wind-div">
          <FiWind className="partner-icon" />
          <div>
            <p className="wind">{wind?.speed} km/h</p>
            <p className="partner">Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guncel;
