import React, { useState, useEffect } from "react";
import ResCard from "./ResCard";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantsList";

function Body() {
  const onlineStatus = useOnlineStatus();
  const fetchedRestList = useRestaurantList();
  const [filteredList, setFilteredList] = useState(fetchedRestList);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setFilteredList(fetchedRestList);
  }, [fetchedRestList]);

  const topRateHandler = () => {
    const topRatedList = fetchedRestList.filter(
      (rest) => rest.info.avgRating > 4.3
    );
    setFilteredList(topRatedList);
  };

  const onChangeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const searchHandler = () => {
    const searchedList = fetchedRestList.filter((rest) => {
      return rest.info.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    setFilteredList(searchedList);
  };

  if (!onlineStatus) {
    return <h1>you are offline</h1>;
  }

  return fetchedRestList.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className=" w-8/12 py-3 m-auto">
      <div className="mt-11 md:my-2">
        <div className="border border-red-700 inline-flex rounded-lg   overflow-hidden">
          <input
            placeholder="Search for restaurants"
            value={searchInput}
            onChange={(e) => onChangeHandler(e)}
            className=" p-2 w-full   placeholder:italic h-full  outline-none "
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
          className="p-2 mt-3 md:mt-0 md:mx-5 bg-red-700 font-semibold text-white rounded-lg border"
          onClick={() => topRateHandler()}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="flex flex-wrap gap-3">
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
