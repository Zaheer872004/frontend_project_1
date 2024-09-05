

const SearchBar = () => {

  const [searchText, setSearchText] = useState("");

    return (
      <div className="searchh-container">
        <form action="#" method="get">
          <input type="text" className="search-input" name="q" value={searchText} onChange={(e) => {e.target.value}} placeholder="Search for products..." />
          {/* <input type="submit" className="search-button" value="Search" /> */}
          <button onClick={() => {
            const filterList = listOfRestaurants.filter(
              (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
            )
            setlistOfRestaurants(filterList);
          }} >Search</button>
        </form>
      </div>
    );
  }
  
  export default SearchBar;