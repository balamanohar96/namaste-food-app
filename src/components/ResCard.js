import React, { useContext } from "react";
import { IMAGE_CDN } from "../utils/constants";
import UserContext from "../utils/UserContext";

function ResCard(props) {
  const { userName,  } = useContext(UserContext);
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
  return (
    <div className="w-56 m-3 mb-5 p-1 border-2 rounded-md hover:shadow-2xl bg-neutral-100">
      <div className="h-36 rounded-lg truncate">
        <img
          alt="rest-pic"
          className="scale-105"
          src={IMAGE_CDN + cloudinaryImageId}
        ></img>
      </div>
      <div className="p-2">
        <h3 className="text-lg font-semibold font-sans">
          {name?.length > 19 ? name.slice(0, 19) + "..." : name}
        </h3>
        <h4 className=" font-semibold font-sans ">
          ☆ {avgRating} • {sla?.slaString}
        </h4>
        <p className="text-stone-700">{costForTwo}</p>

        <p className="text-stone-700">
          {cusiniesString.length < 24
            ? cusiniesString
            : cusiniesString.slice(0, 24) + "..."}
        </p>
        <p className="text-stone-700">{areaName}</p>
        <p className="font-bold text-stone-700">user name : {userName}</p>
      </div>
    </div>
  );
}

export default ResCard;
