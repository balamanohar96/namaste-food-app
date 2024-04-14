import { MENU_API } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      const fetchData = await fetch(MENU_API + resId);
      const json = await fetchData.json();
      setResInfo(json?.data);
    };
    fetchMenu();
  }, [resId]);

  return resInfo;
};

export default useRestaurantMenu;
