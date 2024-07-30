import React, { useState } from "react";
import { IMAGE_CDN } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

function ResMenuCategory({ eachCategoryObj }) {
  const [showItemBoolean, setShowItemBoolean] = useState(false);
  const dispatch = useDispatch();
  const clickHandler = (info) => {
    dispatch(
      addItem({
        id: info.id,
        itemName: info.name,
        itemPrice: info.defaultPrice / 100 || info.price / 100,
        quantity: 1,
      })
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

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-base text-red-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
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
              <div className="md:flex justify-between items-center  w-full px-3 mb-8">
                <div className=" md:w-8/12 ">
                  <h3 className="font-semibold m-0">{item.card.info.name}</h3>
                  <h4 className="font-semibold text-sm m-0">
                    ₹ {}
                    {item.card.info.defaultPrice / 100 ||
                      item.card.info.price / 100}
                  </h4>

                  {item.card.info.ratings.aggregatedRating.ratingCountV2 && (
                    <p className="my-1 text-sm flex gap-1 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="rgb(90, 180, 90)"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 text-green-500 inline w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                        />
                      </svg>
                      <span className="font-semibold">
                        {" "}
                        {item.card.info.ratings.aggregatedRating.rating}
                      </span>{" "}
                      ({item.card.info.ratings.aggregatedRating.ratingCountV2})
                    </p>
                  )}

                  <p className="text-slate-500 text-sm py-2">
                    {item.card.info.description}
                  </p>
                </div>
                <div className=" w-4/12  flex  relative">
                  <button
                    className="add-btn absolute bg-white text-md border-2 text-green-600 shadow-lg font-bold px-3 md:px-5 py-1 -bottom-3  md:right-14 rounded-md outline-none hover:bg-gray-200 "
                    onClick={() => clickHandler(item.card.info)}
                  >
                    ADD
                  </button>
                  {/* //jrhruhyuryyr */}
                  <div className="hidden md:block w-4/12  "> </div>
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
