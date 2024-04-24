import React from "react";
import { useState, useEffect } from "react";
import ResCard from "./ResCard";
import ShimmerUI from "./ShimmerUI";
import { RESTAURANTS_API  } from "../utils/constants";
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
   // const parsedData=JSON.parse(json.contents);
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
    <div className="px-9 py-6">
      <input
        placeholder="Search for restaurants"
        value={searchInput}
        onChange={(e) => onChangeHandler(e)}
        className="border rounded-md border-black ml-3 placeholder:italic h-8 w-56 outline-none py-4 px-4"
        type="text"
      ></input>
      <button
        onClick={() => searchHandler()}
        className="p-2 ml-2 bg-pink-200 rounded-md border-2 border-pink-200"
      >
        search
      </button>
      <button
        className="p-2 ml-4 bg-pink-200 rounded-md border-2 border-pink-200 "
        onClick={() => topRateHandler()}
      >
        Top Rated Restaurants
      </button>

      <div className="flex flex-wrap p-2">
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
