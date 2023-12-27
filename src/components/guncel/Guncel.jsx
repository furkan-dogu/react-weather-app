import { LuWaves } from "react-icons/lu";
import { FiWind } from "react-icons/fi";
import GuncelStyle from "./Guncel.module.css";

const Guncel = ({ guncelData }) => {

  const { main, name, sys, wind, coord, weather } = guncelData;

  const cityName =
    name && name.includes("Province")
      ? name.replace("Province", "").trim()
      : name && name.includes("City of")
      ? name.replace("City of", "").trim()
      : name;

  const weatherIcon = weather && weather.length > 0 ? weather[0].icon : null;

  const weatherDescription = weather && weather.length > 0 ? weather[0]?.description : null;

  return (
    <div className={GuncelStyle["instant-weather"]}>
      <h1 className={GuncelStyle["weather-title"]}>Instant Weather</h1>
      <div className={GuncelStyle["weather"]}>
        <div className={GuncelStyle["city-div"]}>
          <h3 className={GuncelStyle["city"]}>
            {cityName} {sys?.country}
          </h3>
          <p className={GuncelStyle["lat"]}>
            <span>Latitude:</span> {coord?.lat}
          </p>
          <p className={GuncelStyle["lon"]}>
            <span>Longitude:</span> {coord?.lon}
          </p>
        </div>
        <div className={GuncelStyle["temp-div"]}>
          <img className={GuncelStyle["weather-icon"]} src={`https://openweathermap.org/img/w/${weatherIcon}.png`} alt="Weather Icon" />
          <div>
            <p className={GuncelStyle["temp-desc"]}>{weatherDescription}</p>
            <p className={GuncelStyle["temp"]}>
              <span>Temp:</span> {Math.round(main?.temp)} °C
            </p>
            <p className={GuncelStyle["felt-temp"]}>
              <span>Felt Temp:</span> {Math.round(main?.feels_like)}°C
            </p>
          </div>
        </div>

        <div className={GuncelStyle["humidity-div"]}>
          <LuWaves className={GuncelStyle["partner-icon"]} />
          <div>
            <p className={GuncelStyle["humidity"]}>{main?.humidity}%</p>
            <p className={GuncelStyle["partner"]}>Humidity</p>
          </div>
        </div>
        <div className={GuncelStyle["wind-div"]}>
          <FiWind className={GuncelStyle["partner-icon"]} />
          <div>
            <p className={GuncelStyle["wind"]}>{wind?.speed} km/h</p>
            <p className={GuncelStyle["partner"]}>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guncel;
