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
        <Haftalik/>
    </div>
  )
}

export default Home