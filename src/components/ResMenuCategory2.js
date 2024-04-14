import React from "react";
import { IMAGE_CDN } from "../utils/constants";

function ResMenuCategory2(props) {
  console.log(props);
  const { title, itemCards } = props.categoryObj;

  return (
    <div>
      <h4>
        {title} ({itemCards.length})
      </h4>

      <ul>
        {itemCards?.map((item) => {
          return (
            <li key={item.card.info.id} className="food-item-info-container">
              <div>
                <h3>{item.card.info.name}</h3>
                <h4>
                  ₹
                  {item.card.info.defaultPrice / 100 ||
                    item.card.info.price / 100}
                </h4>
                {item.card.info.ratings.aggregatedRating.ratingCountV2 ? (
                  <p>
                    ★{item.card.info.ratings.aggregatedRating.rating} (
                    {item.card.info.ratings.aggregatedRating.ratingCountV2})
                  </p>
                ) : (
                  ""
                )}

                <p>{item.card.info.description}</p>
              </div>
              {item.card.info.imageId ? (
                <img
                  className="food-item-image"
                  alt="food-pic"
                  src={IMAGE_CDN + item.card.info.imageId}
                ></img>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ResMenuCategory2;
