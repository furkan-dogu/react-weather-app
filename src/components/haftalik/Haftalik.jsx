import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import "./Haftalik.css"

const Haftalik = ({search}) => {
  const [btn, setBtn] = useState(false);
  const [data, setData] = useState({});
  const [filterCity, setFilterCity] = useState("");

  const getHaftalik = useCallback(async () => {
    try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${filterCity || "samsun"}&appid=${process.env.REACT_APP_API_KEY}`
        const res = await axios.get(url);
        setData(res.data);
    } catch (error) {
        console.log(error);
    }
  }, [filterCity]) 

  useEffect(() => {
    setFilterCity(search);
  }, [search]);

  useEffect(() => {
    getHaftalik();
  }, [filterCity, getHaftalik]);

  const { list } = data;

//   const weatherIcons = [];

//   for (let i = 0; i < 40; i++) {
//     const icon = list && list.length > 0 ? list[i]?.weather[0]?.icon : null;
//     weatherIcons.push(icon);
//   }

const weatherIcon = list && list.length > 0 ? list[0]?.weather[0]?.icon : null;

const weatherDescription = list && list.length > 0 ? list[0]?.weather[0]?.description : null;

const apiDate  = list && list.length > 0 ? list[0]?.dt_txt : null;
const dateObject = new Date(apiDate);

const formattedDate = dateObject.toLocaleDateString("tr-TR");
const formattedTime = dateObject.toLocaleTimeString("tr-TR");

  return (
    <div className="card-group">
      <div className="card">
        <div className="ques-answer">
          <h3>{formattedDate}</h3>
          <h3>{formattedTime}</h3>
          <button className="btn-minus" onClick={() => setBtn(!btn)}>
            {btn ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
        </div>
        {btn ? <div>
            <img className="weather-icon" src={`https://openweathermap.org/img/w/${weatherIcon}.png`} alt="Weather Icon" />
            <p>{weatherDescription}</p>
        </div> : ""}
      </div>
      {/* {weatherIcons.map((item) => (
        <img className="weather-icon" src={`https://openweathermap.org/img/w/${item}.png`} alt="Weather Icon" />
      ))} */}
    </div>
  );
};

export default Haftalik;


