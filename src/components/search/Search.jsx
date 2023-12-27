import "./Search.css"
import { FaSearch } from "react-icons/fa";

const Search = ({search,setSearch,getGuncel,getHaftalik}) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    getGuncel()
    getHaftalik()
  }
  return (
    <form className="input-div" onSubmit={handleSubmit}>
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
