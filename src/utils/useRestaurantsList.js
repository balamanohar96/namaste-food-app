import { useState, useEffect } from "react";
import { RESTAURANTS_API } from "../utils/constants";

const useRestaurantList = () => {
  const [restList, setRestList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(RESTAURANTS_API);
    const jsonResData = await response.json();
    const bestRestaurants =
      jsonResData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    const fewRestaurants =
      jsonResData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    const allRestaurants = fewRestaurants.concat(bestRestaurants);

    const uniqAllRestaurants = allRestaurants.reduce((acc, current) => {
      const isPresent = acc.find((each) => each.info.id === current.info.id);
      if (!isPresent) {
        acc.push(current);
      }
      return acc;
    }, []);
    setRestList(uniqAllRestaurants);
  };
  return restList;
};

export default useRestaurantList;
