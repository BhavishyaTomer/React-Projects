import React, { useState } from "react";
import RestCards from "./RestCards";
import { restaurant } from "../../config";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(restaurant);
  const [searchText, setSearchText] = useState("");
  const filterRest=(searchText, restaurantList)=>{
    const filterData=restaurant.filter((restaurant)=>{
      return restaurant.info.name.includes(searchText);
    })
    setRestaurantList(filterData);
  }
  return (
    <>
      <div className="search">
        <input type="text" placeholder="Search" value={searchText} onChange={(event)=>{
            setSearchText(event.target.value);
        }}/>
        <button onClick={()=>filterRest(searchText,restaurantList)}>Search</button>
      </div>
      <div className="rest-cards">
        {restaurantList.map((restaurant) => {
          return <RestCards key={restaurant.info.id} {...restaurant.info} />;
        })}
      </div>
    </>
  );
};

export default Body;
