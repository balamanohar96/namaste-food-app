import React from "react";
import { IMAGE_CDN } from "../utils/constants";

function ResCard(props) {
  const { restData } = props;
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    restData?.info;
  return (
    <div className="res-card">
      <div className="rest-img-container">
        <img
          alt="rest-pic"
          className="res-img"
          src={IMAGE_CDN + cloudinaryImageId}
        ></img>
      </div>
      <div className="res-info-container">
        <h3 className="rest-name">
          {name?.length > 17 ? name.slice(0, 17) + "..." : name}
        </h3>
        <h4>
          {avgRating} ★. {sla?.deliveryTime} mins
        </h4>
        <h5>{costForTwo}</h5>
        <h5>
          {cuisines.join(", ").length > 18
            ? cuisines[0] + ", " + cuisines[1] + ",... "
            : cuisines.join(", ")}
        </h5>
      </div>
    </div>
  );
}

export default ResCard;
