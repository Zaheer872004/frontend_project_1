import RestoCard from "./RestoCard";
// import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
// import { jsonData } from "../utils/JsonData";
import Shammar from "./Shammer";
import {Link} from 'react-router-dom'

// const a = require('express');

const Body = () => {

  const [listOfRestaurants, setlistOfRestaurants] = useState([]);

  const [filterRestaurants, setFilterRestaurants] = useState([]);


  const [searchText, setSearchText] = useState("");

// useEffect is used for api call 
  useEffect( () => {
  // console.log("useEffect called");
    fetchData();

  }, []); 

  const  fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.4174894&lng=72.8212903&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    // console.log(json);
    setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }


  
  // {
// //   useEffect(() => {
// //     fetchData();
// //   }, []);

// //   const fetchData = async () => {

//   // const Api = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.4174894&lng=72.8212903&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");


//   // const json =  Api.data.cards[2].card.card.gridElements.infoWithStyle.restaurants[0].info;

//   // console.log(json.name);

//   // console.log(Api);
// }
// }

const filterCards = () => {
            
  let filterdList = listOfRestaurants.filter(
     (res) => res.info?.avgRating > 4
  );
   setFilterRestaurants(filterdList);
}

return(
 listOfRestaurants.length === 0 ? (
    <>
        {/* {
          [...Array(20)].map((_,index) => (
            < Shammar key={index} /> 
          ))
        } */}
        < Shammar />
    </>
  ) : (
    <div className="body-container">
      <div className="btn-searchBar">
        <div className="filter-btn">
          <button className="filter-btn" onClick={filterCards}>
            Click to filter top restorants</button>
        </div>
        <div className="searchh-container">
        
          <input type="text" className="search-input" value={searchText} onChange={(e) => {setSearchText(e.target.value)}} placeholder="Search for products..." />
          {/* <input type="submit" className="search-button" value="Search" /> */}
          <button onClick={() => {
            const filterList = listOfRestaurants.filter(
              (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
            )
            setFilterRestaurants(filterList);
          }} >Search</button>
        
      </div>
      </div>
      <div className="resto-container">

      {filterRestaurants.map((restaurant) => (
        <Link>
          <RestoCard
          key={restaurant.info?.id}
          name={restaurant.info?.name}
          cuisines={restaurant.info?.cuisines.join(", ")}
          
          star={restaurant.info?.avgRating}
          prices={restaurant.info?.costForTwo}
          areaName={restaurant.info?.areaName}
          area={restaurant.info?.locality}
          // imagelink={restaurant.imglink}
          cloudnaryimageId={restaurant.info?.cloudinaryImageId}
        />
        </Link>
      ))}

      </div>
    </div>
  )

)
};

export default Body;








