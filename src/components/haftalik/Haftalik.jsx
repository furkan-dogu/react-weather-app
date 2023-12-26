import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { LuWaves } from "react-icons/lu";
import { FiWind } from "react-icons/fi";
import { WiBarometer } from "react-icons/wi";
import HaftalikStyle from "./Haftalik.module.css";

const Haftalik = ({ search }) => {
  const [openItems, setOpenItems] = useState({});
  const [data, setData] = useState({});
  const [filterCity, setFilterCity] = useState("");

  const getHaftalik = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${filterCity || "samsun"}&appid=${process.env.REACT_APP_API_KEY}`;
      const res = await axios.get(url);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setFilterCity(search);
  }, [search]);

  useEffect(() => {
    getHaftalik();
  }, [filterCity]);

  const { list } = data;

  //! Fonksiyon bu tarihe bağlı öğenin durumunu değiştirir. 
  //! Eğer bu tarih önceki nesnede varsa, durumu tersine çevirir; yoksa, yeni bir anahtar oluşturur ve bu anahtara ilişkin değeri true olarak ayarlar.
  const toggleItem = (date) => {
    setOpenItems((item) => {
      const updatedOpenItems = { ...item };
      updatedOpenItems[date] = !updatedOpenItems[date];
      return updatedOpenItems;
    });
  };

  //! Bu işlem, tüm list dizisi öğeleri üzerinde tamamlandıktan sonra, groupedData nesnesinin içinde tarih anahtarlarına sahip dizileri içeren bir gruplanmış veri yapısı elde edilir.
  //! Bu yapı, her bir tarih anahtarı altında o tarihe ait öğelerin bir listesini içerir.
  const groupedData = {};
  list &&
    list.forEach((item) => {
      const dateKey = new Date(item.dt_txt).toLocaleDateString("tr-TR");
      if (!groupedData[dateKey]) {
        groupedData[dateKey] = [];
      }
      groupedData[dateKey].push(item);
    });

  return (
    //% Object.entries(groupedData).map(([date, items]) => ...) ifadesi, groupedData nesnesinin her bir anahtar-değer çifti için bir döngü oluşturur. 
    //% Her bir çift, bir tarih (date) ve o tarihe ait öğelerin bir dizisi (items) olarak alınır.
    <div className={HaftalikStyle["card-group"]}>
      {Object.entries(groupedData).map(([date, items]) => (
        <div key={date} className={HaftalikStyle["card"]}>
          <div className={HaftalikStyle["date"]} onClick={() => toggleItem(date)}>
            <h2>{date}</h2>
            <button
              className={HaftalikStyle["btn-minus"]}             
            >
              {openItems[date] ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
          </div>
        
          {openItems[date] && (
            <div>
              {items.map((item, index) => (
                <div key={index} className={HaftalikStyle["card-des"]}>
                  <div className={HaftalikStyle["weather"]}>
                    <img
                      className={HaftalikStyle["weather-icon"]}
                      src={`https://openweathermap.org/img/w/${item.weather[0]?.icon}.png`}
                      alt="Weather Icon"
                      />
                    <div className={HaftalikStyle["weather-temp"]}>
                      <h3>{new Date(item.dt_txt).toLocaleTimeString("tr-TR")}</h3>
                      <p className={HaftalikStyle["weather-temp-des"]}>
                        {item.weather[0]?.description}
                      </p>
                      <p>
                        <span>Temp:</span> {Math.round(item.main?.temp)} °C
                      </p>
                      <p>
                        <span>Felt Temp:</span> {Math.round(item.main?.feels_like)} °C
                      </p>
                    </div>
                  </div>

                  <div className={HaftalikStyle["humidity-div"]}>
                    <LuWaves className={HaftalikStyle["partner-icon"]} />
                    <div>
                      <p>{item.main?.humidity} %</p>
                      <p>Humidity</p>
                    </div>
                  </div>

                  <div className={HaftalikStyle["wind-div"]}>
                    <FiWind className={HaftalikStyle["partner-icon"]} />
                    <div>
                      <p>{item.wind?.speed} km/h</p>
                      <p>Wind Speed</p>
                    </div>
                  </div>

                  <div className={HaftalikStyle["pressure-div"]}>
                    <WiBarometer className={HaftalikStyle["partner-icon"]} />
                    <div>
                      <p>{item.main?.pressure} hPa</p>
                      <p>Pressure</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Haftalik;
