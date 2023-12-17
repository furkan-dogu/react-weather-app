import React from 'react'
import Guncel from '../components/guncel/Guncel'
import Search from '../components/search/Search'
import { useState } from "react";
import Haftalik from '../components/haftalik/Haftalik';

const Home = () => {
  const [search, setSearch] = useState("")
  return (
    <div>
        <Search search={search} setSearch={setSearch} />
        <Guncel search={search} />
        <h1>Haftalık</h1>
        <Haftalik search={search} />
    </div>
  )
}

export default Home