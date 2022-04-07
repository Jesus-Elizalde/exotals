import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import RatingStar from "./RatingStar";

import { updateOneReview } from "../../store/reviews";

const ReviewEditForm = ({ reviewid, setreviewmode }) => {
  const dispatch = useDispatch();

  const reviewData = useSelector((state) => state.reviews)[reviewid];

  const [rating, setRating] = useState(reviewData.rating);
  const [review, setReview] = useState(reviewData.review);
  const [errValidator, setErrValidator] = useState([]);

  useEffect(() => {
    const errors = [];
    if (rating < 1) errors.push("Rating from 1 to 5");
    if (!review.length) errors.push("Review textbox cannot be empty");

    setErrValidator(errors);
  }, [rating, review]);

  const onSubmit = (e) => {
    e.preventDefault();

    const results = {
      review,
      rating,
      id: reviewid,
    };

    dispatch(updateOneReview(results));

    setRating(0);
    setReview("");
  };

  return (
    <div>
      <form className="comment_form">
        <label>Edit Review</label>
        <RatingStar rating={rating} setrating={setRating} />
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          style={{ height: "280px" }}
        />
        <div>
          <button type="button" onClick={() => setreviewmode(false)}>
            Cancel
          </button>
          <button disabled={errValidator.length} onClick={onSubmit}>
            Edit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewEditForm;
