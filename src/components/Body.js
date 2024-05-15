import React from "react";
import { useState, useEffect } from "react";
import ResCard from "./ResCard";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantsList";

function Body() {
  const onlineStatus = useOnlineStatus();
  const restList = useRestaurantList();
  const [filteredList, setFilteredList] = useState(restList);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setFilteredList(restList);
  }, [restList]);

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

  if (!onlineStatus) {
    return <h1>you are offline</h1>;
  }

  return restList.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="px-9 py-6">
      <div className="border inline-flex rounded-lg m-2 ml-7 overflow-hidden">
        <input
          placeholder="Search for restaurants"
          value={searchInput}
          onChange={(e) => onChangeHandler(e)}
          className=" p-2    placeholder:italic h-full  outline-none "
          type="text"
        ></input>
        <button
          onClick={() => searchHandler()}
          className="px-4 py-2  bg-red-700 font-semibold text-white"
        >
          search
        </button>
      </div>

      <button
        className="p-2 ml-8 bg-red-700 font-semibold text-white rounded-lg border"
        onClick={() => topRateHandler()}
      >
        Top Rated Restaurants
      </button>

      <ul className="flex flex-wrap p-2">
        {filteredList.map((rest) => {
          return (
            <Link to={"/restaurant/" + rest.info.id} key={rest.info.id}>
              <ResCard restData={rest} />
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Body;
