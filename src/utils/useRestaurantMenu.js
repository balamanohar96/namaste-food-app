import { MENU_API } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      const fetchData = await fetch(MENU_API + resId);
      const jsonData = await fetchData.json();
      setResInfo(jsonData?.data);
    };
    fetchMenu();
  }, [resId]);

  return resInfo;
};

export default useRestaurantMenu;
