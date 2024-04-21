import React from "react";
import { IMAGE_CDN } from "../utils/constants";

function ResMenuCategory({
  eachCategoryObj,
  showItemBoolean,
  setShowItemFunc,
}) {
  return (
    <div className="font-sans border-b-8 p-4 my-4">
      {/* //! Accordian Header */}
      <div
        onClick={() => setShowItemFunc()}
        className="font-bold text-lg flex justify-between cursor-pointer "
      >
        <h4>
          {eachCategoryObj.title} ({eachCategoryObj.itemCards.length})
        </h4>
        <h4>⌄</h4>
      </div>

      {/* //! Accordian Body */}
      {showItemBoolean &&
        eachCategoryObj.itemCards.map((item) => {
          return (
            <div key={item.card.info.id} className="my-8">
              <div className="flex justify-between w-full  mb-8">
                <div className="w-7/12">
                  <h3 className="font-semibold text-lg">
                    {item.card.info.name}
                  </h3>
                  <h4 className="font-semibold">
                    ₹
                    {item.card.info.defaultPrice / 100 ||
                      item.card.info.price / 100}
                  </h4>

                  {item.card.info.ratings.aggregatedRating.ratingCountV2 && (
                    <p className="my-2 text-sm">
                      ★{" "}
                      <span className="font-semibold">
                        {item.card.info.ratings.aggregatedRating.rating}
                      </span>{" "}
                      ({item.card.info.ratings.aggregatedRating.ratingCountV2})
                    </p>
                  )}

                  <p className="text-slate-500 py-2">
                    {item.card.info.description}
                  </p>
                </div>
                <div className=" w-4/12  ">
                  <button className="absolute bg-white text-md border-2 text-green-600 font-bold px-10 py-1 mt-32 ml-16 rounded-md ">
                    ADD
                  </button>
                  <div className="w-8/12">
                    {item.card.info.imageId && (
                      <img
                        className=" rounded-xl object-cover  w-full ml-8 h-36"
                        alt="food-pic"
                        src={IMAGE_CDN + item.card.info.imageId}
                      ></img>
                    )}
                  </div>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
    </div>
  );
}

export default ResMenuCategory;
