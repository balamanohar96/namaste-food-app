import React from "react";
import { useState, useEffect } from "react";
import ResCard from "./ResCard";
import ShimmerUI from "./ShimmerUI";
import { RESTAURANTS_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

function Body() {
  const [restList, setRestList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const onlineStatus = useOnlineStatus();

  const topRateHandler = () => {
    const topRatedList = restList.filter((rest) => rest.info.avgRating > 4.4);
    setFilteredList(topRatedList);
  };

  const onChangeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const searchHandler = () => {
    const searchedList = restList.filter((rest) => {
      return rest.info.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    setFilteredList(searchedList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_API);
    const json = await data.json();
    setRestList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (!onlineStatus) {
    return <h1>you are offline</h1>;
  }

  return restList.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body-container">
      <input
        placeholder="Search for restaurants"
        value={searchInput}
        onChange={(e) => onChangeHandler(e)}
        className="search-input"
        type="text"
      ></input>
      <button onClick={() => searchHandler()} className="top-rate-btn pointer">
        search
      </button>
      <button className="top-rate-btn pointer" onClick={() => topRateHandler()}>
        Top Rated Restaurants
      </button>

      <div className="rest-cards-container">
        {filteredList.map((rest) => {
          return (
            <Link to={"/restaurant/" + rest.info.id} key={rest.info.id}>
              <ResCard restData={rest} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Body;
