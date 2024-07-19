import { useParams } from "react-router-dom";
import ResMenuCategory from "./ResMenuCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer2 from "./Shimmer2";

function ResMenu() {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer2 />;
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
  if (categoriesArr) {
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
  }

  return (
    <div className="w-8/12 mx-auto py-1">
      <h1 className="font-bold font-sans mt-8 text-2xl">{name}</h1>
      <div className="p-4 my-6 rounded-xl border-2 shadow-lg">
        <h4 className="text-md font-semibold font-sans">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-green-500 inline w-4 h-4 bg-slate-500  rounded-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>{" "}
          {avgRatingString} ({totalRatingsString}) • {costForTwoMessage}
        </h4>
        <p className="underline text-md flex font-semibold font-sans text-orange-500 ">
          {cuisines.join(", ")}
        </p>

        <h5 className="my-1 font-bold">
          outlet <span className="font-semibold">- {areaName}</span>
        </h5>
        <h5 className="font-bold">{sla.slaString.toLowerCase()}</h5>
      </div>
      <h3 className="text-center font-semibold my-8">M E N U</h3>
      {FilteredMenuCategories.length !== 0 ? (
        <div className="px-4 border-t-8">
          {FilteredMenuCategories.map((each, index) => (
            <ResMenuCategory key={index} eachCategoryObj={each} />
          ))}
        </div>
      ) : (
        <div>
          <h1>Uh Oh! No items are available at the moment</h1>
        </div>
      )}
    </div>
  );
}
export default ResMenu;
