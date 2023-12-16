import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";


function App() {

  const [search, setSearch] = useState("")

  return (
    <div>
      <div className="input-div">
        <input className="input" type="search" placeholder="Enter Your Location" autocomplete="off" onChange={(e) => setSearch(e.target.value)} />
      </div>

      <Home search={search} />
    </div>
  );
}

export default App;
