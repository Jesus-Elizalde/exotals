import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import RatingStar from "./RatingStar";

import { deleteOneReview } from "../../store/reviews";

const ReviewHolder = ({ setreviewmode, reviewmode, setreviewid }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const carId = pathname.split("/").at(-1);
  const getAllReviews = useSelector((state) => state.reviews);
  const user = useSelector((state) => state.session.user);

  const [deleteConfirm, setDeleteConfirm] = useState(false);

  return (
    <div className="reviewconatinermodal">
      {Object.values(getAllReviews)
        .reverse()
        .filter((ele) => ele.carId === +carId)
        .map((ele, i) => (
          <div key={i} className="reviewholdersingler">
            <div className="reviewholdersinglerheader">
              <div>
                <h3>{ele.rating}</h3>
                <RatingStar rating={ele.rating} />
              </div>
              {user?.id === ele.userId && (
                <div className="revieweditdel">
                  {!deleteConfirm ? (
                    <>
                      <button
                        onClick={() => {
                          setreviewmode(!reviewmode);

                          setreviewid(ele.id);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setDeleteConfirm(true);
                        }}
                      >
                        Delete
                      </button>
                    </>
                  ) : (
                    <>
                      <p>Are you sure you want to delete</p>
                      <button
                        type="button"
                        onClick={() => {
                          setreviewmode(false);
                          dispatch(deleteOneReview(ele.id));
                          setDeleteConfirm(false);
                        }}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
            <p className="reviewsinglebox">{ele.review}</p>
            <div>
              <p>by {ele.User?.username}</p>
              {ele.createdAt === ele.updatedAt ? (
                <p>Created: {ele.createdAt.slice(0, 10)} </p>
              ) : (
                <p>Updated: {ele.updatedAt.slice(0, 10)} </p>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ReviewHolder;
