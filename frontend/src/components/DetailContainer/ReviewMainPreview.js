import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import RatingStar from "./RatingStar";

const ReviewMainPreview = () => {
  const { pathname } = useLocation();
  const carId = pathname.split("/").at(-1);
  const getAllReviews = useSelector((state) => state.reviews);

  return (
    <div className="reviewcontainerpreview">
      {Object.values(getAllReviews)
        .filter((ele) => ele.carId === +carId)
        .slice(0, 6)
        .map((ele, i) => (
          <div key={i} className="reviewholdersingler">
            <div className="reviewholdersinglerheader">
              <div>
                <h3>{ele.rating}</h3>
                <RatingStar rating={ele.rating} />
              </div>
              {/* <div className="revieweditdel">
                <button>Edit</button>
                <button>Delete</button>
              </div> */}
            </div>
            <p className="reviewsinglebox">{ele.review}</p>
            <div>createdat</div>
          </div>
        ))}
    </div>
  );
};

export default ReviewMainPreview;
