import { useState, useEffect } from "react";
import { RESTAURANTS_API } from "../utils/constants";

const useRestaurantMenu = () => {
  const [restList, setRestList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_API);
    const json = await data.json();
    setRestList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return restList;
};

export default useRestaurantMenu;
