import React, { useEffect } from "react";
import Guncel from "../components/guncel/Guncel";
import Search from "../components/search/Search";
import { useState } from "react";
import Haftalik from "../components/haftalik/Haftalik";
import axios from "axios";
import Swal from 'sweetalert2'

const Home = () => {
  const [search, setSearch] = useState("");
  const [guncelData, setGuncelData] = useState([]);
  const [haftalikData, setHaftalikData] = useState([]);

  const getGuncel = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search || "Samsun"}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
      const res = await axios.get(url);
      setGuncelData(res.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: "Please enter a valid location",
      });
    }
  };

  const getHaftalik = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${search || "Samsun"}&appid=${process.env.REACT_APP_API_KEY}`;
      const res = await axios.get(url);
      setHaftalikData(res.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid location",
      });
    }
  };

  useEffect(() => {
    getGuncel();
    getHaftalik();
  }, []);

  return (
    <div>
      <Search
        getGuncel={getGuncel}
        getHaftalik={getHaftalik}
        setSearch={setSearch}
        search={search}
        guncelData={guncelData}
      />
      <Guncel guncelData={guncelData} />
      <h1 className="haftalik-h1">5 Day / 3 Hour Forecast</h1>
      <Haftalik haftalikData={haftalikData} />
    </div>
  );
};

export default Home;
