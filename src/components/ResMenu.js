import { useParams } from "react-router-dom";
import ResMenuCategory from "./ResMenuCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";

function ResMenu() {
  const { resId } = useParams();
 const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <h1>loading</h1>;
  }
  const { name, cuisines, avgRatingString, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const cardsArr = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <div>
      <h1>{name}</h1>
      <h4>
        ★{avgRatingString} - {costForTwoMessage}
      </h4>
      <h5>{cuisines.join(", ")}</h5>
      <h3 className="menu-text">M E N U</h3>

      {cardsArr.map((each, index) => (
        <ResMenuCategory key={index} eachCategoryObj={each} />
      ))}
    </div>
  );
}
export default ResMenu;
