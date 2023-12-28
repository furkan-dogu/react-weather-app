import "./Search.css"
import { FaSearch } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Search = ({search,setSearch,getGuncel,getHaftalik,guncelData}) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    if (search.trim() !== "") {
      getGuncel();
      getHaftalik();
    }
  }

  const handleClick = () => {
    window.open(`https://openweathermap.org/city/${guncelData.id}`, "_blank");
  }

  return (
    <form className="input-div" onSubmit={handleSubmit}>
      <span className="search-location" onClick={handleClick}><IoLocationSharp /></span>
      <input
        className="input"
        type="text"
        placeholder="Enter Your Location"
        autocomplete="off"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn"><FaSearch /></button>
    </form>
  );
};

export default Search;
