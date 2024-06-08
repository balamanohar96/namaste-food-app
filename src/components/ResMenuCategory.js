import React, { useState } from "react";
import { IMAGE_CDN } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

function ResMenuCategory({ eachCategoryObj }) {
  const [showItemBoolean, setShowItemBoolean] = useState(true);
  const dispatch = useDispatch();
  const clickHandler = (item) => {
    dispatch(
      addItem([
        item.card.info.name,
        item.card.info.defaultPrice / 100 || item.card.info.price / 100,
      ])
    );
  };
  return (
    <div className="font-sans border-b-8 px-4 py-2 my-2">
      {/* //! Accordian Header */}
      <div
        onClick={() => setShowItemBoolean(!showItemBoolean)}
        className="font-bold text-lg flex justify-between cursor-pointer "
      >
        <h4 className="text-lg text-red-500">
          {eachCategoryObj.title} ({eachCategoryObj.itemCards.length})
        </h4>
        <h4 className="text-base text-red-500 ">⌄</h4>
      </div>

      {/* //! Accordian Body */}
      {showItemBoolean &&
        eachCategoryObj.itemCards.map((item) => {
          return (
            <div
              data-testid="foodItems"
              key={item.card.info.id}
              className="my-3 "
            >
              <div className="flex justify-between items-center  w-full px-3 mb-8">
                <div className="w-8/12 ">
                  <h3 className="font-semibold text-base m-0">
                    {item.card.info.name}
                  </h3>
                  <h4 className="font-semibold">
                    ₹
                    {item.card.info.defaultPrice / 100 ||
                      item.card.info.price / 100}
                  </h4>

                  {item.card.info.ratings.aggregatedRating.ratingCountV2 && (
                    <p className="my-1 text-sm">
                      ★
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
                <div className=" w-4/12  flex ">
                  <button
                    className={
                      item.card.info.imageId
                        ? "absolute bg-white text-md border-2 text-green-600 shadow-lg font-bold px-10 py-1 mt-28 ml-24 rounded-md outline-none hover:bg-slate-100 "
                        : "absolute bg-white text-md border-2 text-green-600 shadow-lg font-bold px-10 py-1 mt-2 ml-24 rounded-md outline-none hover:bg-slate-100 "
                    }
                    onClick={() => clickHandler(item)}
                  >
                    ADD
                  </button>
                  <div className="w-4/12"> </div>
                  <div className="w-8/12 ">
                    {item.card.info.imageId && (
                      <img
                        className=" rounded-xl object-cover  w-full  h-32"
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
