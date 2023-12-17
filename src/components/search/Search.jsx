import "./Search.css"

const Search = ({search,setSearch}) => {
  return (
    <div className="input-div">
      <input
        className="input"
        type="search"
        placeholder="Enter Your Location"
        autocomplete="off"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
