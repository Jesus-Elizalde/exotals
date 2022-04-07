import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const ReviewHolder = () => {
  const { pathname } = useLocation();
  const carId = pathname.split("/").at(-1);
  const getAllReviews = useSelector((state) => state.reviews);
  console.log(
    "🚀 ~ file: ReviewHolder.js ~ line 9 ~ ReviewHolder ~ getAllReviews",
    getAllReviews
  );

  return (
    <div className="reviewconatinermodal">
      {Object.values(getAllReviews)
        .filter((ele) => ele.carId === +carId)
        .map((ele, i) => (
          <div key={i} className="reviewholdersingler">
            <div className="reviewholdersinglerheader">
              <h3>{ele.rating}</h3>
              <div className="revieweditdel">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
            <p className="reviewsinglebox">{ele.review}</p>
            <div>createdat</div>
          </div>
        ))}
    </div>
  );
};

export default ReviewHolder;
