import { useParams } from "react-router-dom";
import ResMenuCategory from "./ResMenuCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";

function ResMenu() {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) {
    return <h1>loading..........</h1>;
  }
  const {
    name,
    cuisines,
    avgRatingString,
    costForTwoMessage,
    totalRatingsString,
    sla,
    areaName,
  } = resInfo?.cards[2]?.card?.card?.info;

  const categoriesArr =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const FilteredMenuCategories = [];
  for (let i = 0; i < categoriesArr.length; i++) {
    const obj = categoriesArr[i];
    if (
      obj.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) {
      FilteredMenuCategories.push(obj.card.card);
    } else if (
      obj.card.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    ) {
      const nestedArr = obj.card.card.categories;
      for (let j = 0; j < nestedArr.length; j++) {
        const obj2 = nestedArr[j];
        FilteredMenuCategories.push(obj2);
      }
    }
  }

  return (
    <div className="w-8/12 mx-auto">
      <h1 className="font-bold font-sans mt-8 text-2xl">{name}</h1>
      <div className="p-4 my-6 rounded-xl border-2 shadow-lg">
        <h4 className="text-md font-semibold font-sans">
          ★ {avgRatingString} ({totalRatingsString}) • {costForTwoMessage}
        </h4>
        <p className="underline text-md flex font-semibold font-sans text-orange-500 ">
          {cuisines.join(", ")}
        </p>

        <h5 className="my-1 ">outlet {areaName}</h5>
        <h5 className="font-bold">{sla.slaString.toLowerCase()}</h5>
      </div>
      <h3 className="text-center font-semibold my-8">M E N U</h3>
      <div className="p-4 border-t-8">
        {FilteredMenuCategories.map((each, index) => (
          <ResMenuCategory
            key={index}
            setShowItemFunc={() => setShowIndex(index)}
            showItemBoolean={showIndex === index ? true : false}
            eachCategoryObj={each}
          />
        ))}
      </div>
    </div>
  );
}
export default ResMenu;
