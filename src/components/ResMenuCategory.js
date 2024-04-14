import React from "react";
import { IMAGE_CDN } from "../utils/constants";
import ResMenuCategory2 from "./ResMenuCategory2";

function ResMenuCategory(props) {
  const { eachCategoryObj } = props;

  if (eachCategoryObj.card.card.title && eachCategoryObj.card.card.itemCards) {
    const { title, itemCards } = eachCategoryObj.card.card;

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
  } else if (
    eachCategoryObj.card.card.title &&
    eachCategoryObj.card.card.categories
  ) {
    const categoriesArr = eachCategoryObj.card.card.categories;
    return (
      <div>
        {categoriesArr.map((each, index) => {
          return <ResMenuCategory2 key={index} categoryObj={each} />;
        })}
      </div>
    );
  }
}

export default ResMenuCategory;
