import React from "react";
import { IMAGE_CDN } from "../utils/constants";
// import UserContext from "../utils/UserContext";
// import { useContext } from "react";

function ResCard(props) {
  //const { userName,  } = useContext(UserContext);
  const { restData } = props;
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    cloudinaryImageId,
    areaName,
  } = restData?.info;
  const cusiniesString = cuisines.join(", ");
  //console.log(IMAGE_CDN + cloudinaryImageId);
  return (
    <div className="w-56 my-2 p-2  rounded-md hover:shadow-xl hover:bg-slate-100 hover:scale-95 border  bg-white">
      <div className="h-36 rounded-lg truncate">
        <img
          alt="restaurant-pic"
          className="scale-105"
          src={IMAGE_CDN + cloudinaryImageId}
        ></img>
      </div>
      <div className="p-2">
        <h3 className="text-md font-semibold font-sans">
          {name?.length > 21 ? name.slice(0, 21) + "..." : name}
        </h3>
        <h4 className=" font-semibold text-sm font-sans ">
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
          {avgRating} • {sla?.slaString}
        </h4>
        <p className="text-neutral-500">{costForTwo}</p>

        <p className="text-neutral-500">
          {cusiniesString.length < 23
            ? cusiniesString
            : cusiniesString.slice(0, 22) + "..."}
        </p>
        <p className="text-stone-700 font-semibold">{areaName}</p>
      </div>
    </div>
  );
}

export default ResCard;
